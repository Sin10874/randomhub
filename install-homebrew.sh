#!/bin/bash

echo "🍺 开始安装 Homebrew..."
echo ""

# 安装 Homebrew
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

echo ""
echo "✅ Homebrew 安装完成！"
echo ""
echo "⚠️  重要：请运行以下命令添加到 PATH（根据你使用的 shell）："
echo ""
echo "如果使用 zsh (macOS 默认)："
echo "echo 'eval \"\$(/opt/homebrew/bin/brew shellenv)\"' >> ~/.zshrc"
echo "source ~/.zshrc"
echo ""
echo "如果使用 bash："
echo "echo 'eval \"\$(/opt/homebrew/bin/brew shellenv)\"' >> ~/.bash_profile"
echo "source ~/.bash_profile"
echo ""
echo "然后运行: brew --version 验证安装"
