#!/usr/bin/env python3
"""
整理 Kaggle 动物数据集的图片到项目中
"""

import os
import shutil
import json
from pathlib import Path

# 项目根目录
PROJECT_ROOT = Path(__file__).parent.parent
# Kaggle 数据集路径（使用 kagglehub 下载的位置）
KAGGLE_DATA = Path.home() / ".cache" / "kagglehub" / "datasets" / "iamsouravbanerjee" / "animal-image-dataset-90-different-animals" / "versions" / "5" / "animals" / "animals"
PUBLIC_IMAGES = PROJECT_ROOT / "public" / "images" / "animals"
ANIMALS_DATA = PROJECT_ROOT / "app" / "data" / "animals.ts"

# Kaggle 数据集包含的 90 种动物（需要映射到我们的分类）
KAGGLE_ANIMALS = {
    # Mammals
    'antelope': 'mammals',
    'badger': 'mammals',
    'bat': 'mammals',
    'bear': 'mammals',
    'bee': 'invertebrates',  # 实际是昆虫
    'beetle': 'invertebrates',
    'bison': 'mammals',
    'boar': 'mammals',
    'butterfly': 'invertebrates',
    'cat': 'mammals',
    'caterpillar': 'invertebrates',
    'chimpanzee': 'mammals',
    'cockroach': 'invertebrates',
    'cow': 'mammals',
    'coyote': 'mammals',
    'crab': 'invertebrates',
    'crow': 'birds',
    'deer': 'mammals',
    'dog': 'mammals',
    'dolphin': 'mammals',
    'donkey': 'mammals',
    'dragonfly': 'invertebrates',
    'duck': 'birds',
    'eagle': 'birds',
    'elephant': 'mammals',
    'flamingo': 'birds',
    'fly': 'invertebrates',
    'fox': 'mammals',
    'goat': 'mammals',
    'goldfish': 'fish',
    'goose': 'birds',
    'gorilla': 'mammals',
    'grasshopper': 'invertebrates',
    'hamster': 'mammals',
    'hare': 'mammals',
    'hedgehog': 'mammals',
    'hippopotamus': 'mammals',
    'hornbill': 'birds',
    'horse': 'mammals',
    'hummingbird': 'birds',
    'hyena': 'mammals',
    'jellyfish': 'invertebrates',
    'kangaroo': 'mammals',
    'koala': 'mammals',
    'ladybugs': 'invertebrates',
    'leopard': 'mammals',
    'lion': 'mammals',
    'lizard': 'reptiles',
    'lobster': 'invertebrates',
    'mosquito': 'invertebrates',
    'moth': 'invertebrates',
    'mouse': 'mammals',
    'octopus': 'invertebrates',
    'okapi': 'mammals',
    'orangutan': 'mammals',
    'otter': 'mammals',
    'owl': 'birds',
    'ox': 'mammals',
    'oyster': 'invertebrates',
    'panda': 'mammals',
    'parrot': 'birds',
    'pelecaniformes': 'birds',
    'penguin': 'birds',
    'pig': 'mammals',
    'pigeon': 'birds',
    'porcupine': 'mammals',
    'possum': 'mammals',
    'raccoon': 'mammals',
    'rat': 'mammals',
    'reindeer': 'mammals',
    'rhinoceros': 'mammals',
    'sandpiper': 'birds',
    'seahorse': 'fish',
    'seal': 'mammals',
    'shark': 'fish',
    'sheep': 'mammals',
    'snake': 'reptiles',
    'sparrow': 'birds',
    'squid': 'invertebrates',
    'squirrel': 'mammals',
    'starfish': 'invertebrates',
    'swan': 'birds',
    'tiger': 'mammals',
    'turkey': 'birds',
    'turtle': 'reptiles',
    'whale': 'mammals',
    'wolf': 'mammals',
    'wombat': 'mammals',
    'woodpecker': 'birds',
    'zebra': 'mammals',
}

def main():
    print("🔧 开始整理 Kaggle 动物图片...")
    print()

    # 检查源目录
    if not KAGGLE_DATA.exists():
        print(f"❌ 找不到 Kaggle 数据集目录: {KAGGLE_DATA}")
        print()
        print("请确保：")
        print("  1. 已下载 Kaggle 数据集")
        print("  2. 解压到 temp-animal-dataset/ 目录")
        return

    # 创建目标目录
    for category in ['mammals', 'birds', 'reptiles', 'amphibians', 'fish', 'invertebrates']:
        (PUBLIC_IMAGES / category).mkdir(parents=True, exist_ok=True)

    # 统计
    copied_count = 0
    skipped_count = 0

    # 遍历 Kaggle 数据集
    for animal_folder in KAGGLE_DATA.iterdir():
        if not animal_folder.is_dir():
            continue

        animal_name = animal_folder.name.lower()

        if animal_name not in KAGGLE_ANIMALS:
            print(f"⚠️  跳过未映射的动物: {animal_name}")
            skipped_count += 1
            continue

        category = KAGGLE_ANIMALS[animal_name]

        # 找到第一张图片
        images = list(animal_folder.glob('*.jp*g')) + list(animal_folder.glob('*.png'))

        if not images:
            print(f"⚠️  {animal_name} 没有找到图片")
            skipped_count += 1
            continue

        # 复制第一张图片
        source_image = images[0]
        target_name = f"{animal_name}.jpg"
        target_path = PUBLIC_IMAGES / category / target_name

        shutil.copy2(source_image, target_path)
        print(f"✅ {animal_name:20s} -> {category}/{target_name}")
        copied_count += 1

    print()
    print(f"📊 统计:")
    print(f"  ✅ 成功复制: {copied_count} 张")
    print(f"  ⚠️  跳过: {skipped_count} 个")
    print()
    print(f"💾 图片保存位置: {PUBLIC_IMAGES}")
    print()
    print("下一步:")
    print("  运行 python3 scripts/update-animals-with-images.py")

if __name__ == "__main__":
    main()
