#!/bin/bash

# Kaggle 动物数据集下载脚本
# 使用前需要配置 Kaggle API: https://github.com/Kaggle/kaggle-api#api-credentials

echo "📦 开始下载 Kaggle Animal Dataset (90 种动物)..."
echo ""

# 检查是否安装了 kaggle CLI
if ! command -v kaggle &> /dev/null; then
    echo "❌ Kaggle CLI 未安装"
    echo ""
    echo "安装方法："
    echo "  pip install kaggle"
    echo ""
    echo "配置 API Token："
    echo "  1. 访问 https://www.kaggle.com/settings"
    echo "  2. 点击 'Create New API Token'"
    echo "  3. 下载 kaggle.json 到 ~/.kaggle/"
    echo "  4. chmod 600 ~/.kaggle/kaggle.json"
    echo ""
    exit 1
fi

# 创建临时目录
TEMP_DIR="../temp-animal-dataset"
mkdir -p "$TEMP_DIR"

# 下载数据集
echo "⬇️  正在下载数据集..."
kaggle datasets download -d iamsouravbanerjee/animal-image-dataset-90-different-animals -p "$TEMP_DIR" --unzip

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ 下载完成！"
    echo "📁 文件位置: $TEMP_DIR"
    echo ""
    echo "下一步："
    echo "  运行 python3 scripts/organize-kaggle-images.py"
else
    echo ""
    echo "❌ 下载失败"
    echo ""
    echo "请手动下载："
    echo "  1. 访问 https://www.kaggle.com/datasets/iamsouravbanerjee/animal-image-dataset-90-different-animals"
    echo "  2. 点击 Download 按钮"
    echo "  3. 解压到 $TEMP_DIR"
    exit 1
fi
