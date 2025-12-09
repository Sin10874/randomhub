#!/usr/bin/env python3
"""
批量下载缺失的动物照片
功能：
1. 检测哪些动物缺少真实照片
2. 使用 Pexels API 搜索并下载高质量照片
3. 自动压缩过大的图片（使用 macOS sips 工具）
4. 保存到对应的分类目录

使用方法：
1. 获取 Pexels API Key: https://www.pexels.com/api/
2. 运行: python3 download-missing-animals.py YOUR_API_KEY
"""

import sys
import os
import json
import subprocess
import time
from pathlib import Path
import requests
from typing import List, Dict, Optional

# 配置
PROJECT_ROOT = Path(__file__).parent.parent
PUBLIC_IMAGES = PROJECT_ROOT / "public" / "images" / "animals"
ANIMALS_DATA_FILE = PROJECT_ROOT / "animals-classified.json"
MAX_FILE_SIZE_KB = 500  # 超过 500KB 的图片需要压缩
TARGET_WIDTH = 800  # 压缩后的目标宽度
JPEG_QUALITY = 85  # JPEG 质量 (0-100)
DOWNLOAD_DELAY = 1.0  # 每次下载间隔（秒），避免触发 API 限流

class AnimalDownloader:
    def __init__(self, api_key: str):
        self.api_key = api_key
        self.headers = {
            'Authorization': api_key
        }
        self.stats = {
            'total': 0,
            'downloaded': 0,
            'skipped': 0,
            'failed': 0,
            'compressed': 0
        }

    def load_animals(self) -> List[Dict]:
        """加载动物数据"""
        if not ANIMALS_DATA_FILE.exists():
            print(f"❌ 找不到动物数据文件: {ANIMALS_DATA_FILE}")
            sys.exit(1)

        with open(ANIMALS_DATA_FILE, 'r', encoding='utf-8') as f:
            return json.load(f)

    def check_existing_image(self, animal: Dict) -> bool:
        """检查动物是否已有图片"""
        name = animal['name'].lower().replace(' ', '-').replace('(', '').replace(')', '')
        category = animal['category']

        # 可能的文件名变体
        possible_names = [
            name,
            name.replace('-', ''),
            animal['name'].lower().replace(' ', ''),
        ]

        for possible_name in possible_names:
            image_path = PUBLIC_IMAGES / category / f"{possible_name}.jpg"
            if image_path.exists():
                return True

        return False

    def search_pexels(self, animal_name: str, category: str) -> Optional[str]:
        """使用 Pexels API 搜索动物照片"""
        # 构建搜索查询
        query = f"{animal_name} animal wildlife"

        url = "https://api.pexels.com/v1/search"
        params = {
            'query': query,
            'per_page': 1,
            'size': 'medium',  # medium, large, small
            'orientation': 'square'  # 正方形图片更适合展示
        }

        try:
            response = requests.get(url, headers=self.headers, params=params, timeout=10)
            response.raise_for_status()
            data = response.json()

            if data.get('photos') and len(data['photos']) > 0:
                photo = data['photos'][0]
                # 返回 medium 尺寸的图片 URL
                return photo['src']['medium']

            return None

        except requests.exceptions.RequestException as e:
            print(f"  ⚠️  API 请求失败: {e}")
            return None

    def download_image(self, url: str, save_path: Path) -> bool:
        """下载图片"""
        try:
            response = requests.get(url, timeout=15, stream=True)
            response.raise_for_status()

            # 确保目录存在
            save_path.parent.mkdir(parents=True, exist_ok=True)

            # 保存图片
            with open(save_path, 'wb') as f:
                for chunk in response.iter_content(chunk_size=8192):
                    f.write(chunk)

            return True

        except requests.exceptions.RequestException as e:
            print(f"  ❌ 下载失败: {e}")
            return False

    def compress_image(self, image_path: Path) -> bool:
        """使用 macOS sips 工具压缩图片"""
        try:
            file_size_kb = image_path.stat().st_size / 1024

            if file_size_kb <= MAX_FILE_SIZE_KB:
                return False  # 不需要压缩

            print(f"  🔧 压缩图片 ({file_size_kb:.1f}KB -> 目标: <{MAX_FILE_SIZE_KB}KB)")

            # 使用 sips (macOS 自带的图片处理工具)
            # 先调整尺寸
            subprocess.run([
                'sips',
                '--resampleWidth', str(TARGET_WIDTH),
                '--setProperty', 'formatOptions', str(JPEG_QUALITY),
                str(image_path)
            ], check=True, capture_output=True)

            # 检查压缩后的大小
            new_size_kb = image_path.stat().st_size / 1024
            print(f"  ✅ 压缩完成: {new_size_kb:.1f}KB")

            self.stats['compressed'] += 1
            return True

        except subprocess.CalledProcessError as e:
            print(f"  ⚠️  压缩失败: {e}")
            return False

    def process_animal(self, animal: Dict) -> bool:
        """处理单个动物：搜索、下载、压缩"""
        name = animal['name']
        category = animal['category']

        print(f"\n🔍 {name} ({category})")

        # 检查是否已有图片
        if self.check_existing_image(animal):
            print(f"  ⏭️  已有图片，跳过")
            self.stats['skipped'] += 1
            return True

        # 搜索图片
        print(f"  🔎 搜索 Pexels...")
        image_url = self.search_pexels(name, category)

        if not image_url:
            print(f"  ❌ 未找到合适的图片")
            self.stats['failed'] += 1
            return False

        # 下载图片
        file_name = name.lower().replace(' ', '-').replace('(', '').replace(')', '')
        save_path = PUBLIC_IMAGES / category / f"{file_name}.jpg"

        print(f"  ⬇️  下载图片...")
        if not self.download_image(image_url, save_path):
            self.stats['failed'] += 1
            return False

        print(f"  ✅ 下载成功: {save_path.name}")
        self.stats['downloaded'] += 1

        # 检查并压缩图片
        self.compress_image(save_path)

        # 延迟，避免 API 限流
        time.sleep(DOWNLOAD_DELAY)

        return True

    def run(self):
        """主函数：批量处理所有动物"""
        print("🚀 开始下载缺失的动物照片...")
        print(f"📁 目标目录: {PUBLIC_IMAGES}")
        print()

        # 加载动物数据
        animals = self.load_animals()
        self.stats['total'] = len(animals)

        print(f"📊 总共 {len(animals)} 种动物")
        print()

        # 统计已有图片数量
        existing_count = sum(1 for animal in animals if self.check_existing_image(animal))
        missing_count = len(animals) - existing_count

        print(f"✅ 已有图片: {existing_count} 种")
        print(f"🔍 缺失图片: {missing_count} 种")
        print()

        if missing_count == 0:
            print("🎉 所有动物都已有图片！")
            return

        # 询问是否继续
        response = input(f"⚠️  将下载 {missing_count} 张图片，是否继续？[y/N] ")
        if response.lower() != 'y':
            print("❌ 已取消")
            return

        print()
        print("=" * 60)

        # 处理每个动物
        for i, animal in enumerate(animals, 1):
            if self.check_existing_image(animal):
                continue

            print(f"\n[{i}/{len(animals)}]", end=' ')
            self.process_animal(animal)

        # 输出统计
        print()
        print("=" * 60)
        print()
        print("📊 下载统计:")
        print(f"  总数: {self.stats['total']} 种")
        print(f"  ✅ 成功下载: {self.stats['downloaded']} 张")
        print(f"  ⏭️  已有跳过: {self.stats['skipped']} 个")
        print(f"  ❌ 下载失败: {self.stats['failed']} 个")
        print(f"  🔧 已压缩: {self.stats['compressed']} 张")
        print()

        if self.stats['downloaded'] > 0:
            print("🎉 下载完成！")
            print()
            print("下一步:")
            print("  1. 刷新浏览器查看效果")
            print("  2. 使用 git 提交更改")
            print("  3. 部署到 Vercel")

def main():
    print()
    print("=" * 60)
    print("  动物照片批量下载工具")
    print("=" * 60)
    print()

    # 检查 API key
    if len(sys.argv) < 2:
        print("❌ 缺少 Pexels API Key")
        print()
        print("使用方法:")
        print("  python3 download-missing-animals.py YOUR_API_KEY")
        print()
        print("获取 API Key:")
        print("  1. 访问 https://www.pexels.com/api/")
        print("  2. 注册/登录账号")
        print("  3. 点击 'Your API Keys' 获取 key")
        print()
        sys.exit(1)

    api_key = sys.argv[1]

    # 测试 API key
    print("🔑 验证 API Key...")
    try:
        response = requests.get(
            "https://api.pexels.com/v1/curated",
            headers={'Authorization': api_key},
            params={'per_page': 1},
            timeout=5
        )
        response.raise_for_status()
        print("✅ API Key 有效")
        print()
    except requests.exceptions.RequestException as e:
        print(f"❌ API Key 无效或网络错误: {e}")
        sys.exit(1)

    # 开始下载
    downloader = AnimalDownloader(api_key)
    downloader.run()

if __name__ == "__main__":
    main()
