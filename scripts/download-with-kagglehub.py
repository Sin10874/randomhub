#!/usr/bin/env python3
"""
使用 kagglehub 自动下载 Kaggle 动物数据集
"""

import sys
import subprocess

print("📦 使用 kagglehub 下载 Kaggle 动物数据集...")
print()

# 检查是否安装了 kagglehub
try:
    import kagglehub
    print("✅ kagglehub 已安装")
except ImportError:
    print("⚠️  kagglehub 未安装，正在安装...")
    subprocess.check_call([sys.executable, "-m", "pip", "install", "kagglehub"])
    import kagglehub
    print("✅ kagglehub 安装完成")

print()
print("⬇️  开始下载数据集（约 688 MB）...")
print("   这可能需要几分钟，请耐心等待...")
print()

try:
    # 下载数据集
    path = kagglehub.dataset_download("iamsouravbanerjee/animal-image-dataset-90-different-animals")

    print()
    print("✅ 下载完成！")
    print(f"📁 数据集位置: {path}")
    print()
    print("下一步:")
    print(f"  运行: python3 scripts/organize-kaggle-images.py --source '{path}'")

except Exception as e:
    print()
    print(f"❌ 下载失败: {e}")
    print()
    print("可能的原因:")
    print("  1. 需要 Kaggle 账号登录")
    print("  2. 网络连接问题")
    print()
    print("解决方法:")
    print("  1. 访问 https://www.kaggle.com 注册/登录")
    print("  2. 在浏览器中点击 Download 按钮手动下载")
    sys.exit(1)
