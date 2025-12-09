# 🚀 n8n 完整安装指南（macOS）

## 📋 前置要求

- macOS 系统
- 网络连接
- 管理员权限

---

## 🔧 步骤 1：安装 Docker Desktop

### 方法 A：官网下载（最简单）

1. **下载 Docker Desktop**
   - 访问：https://www.docker.com/products/docker-desktop/
   - 点击 "Download for Mac"
   - 选择芯片类型：
     - **Apple Silicon (M1/M2/M3)**：下载 Apple Chip 版本
     - **Intel**：下载 Intel Chip 版本

2. **安装**
   ```bash
   # 下载完成后
   # 1. 双击 Docker.dmg
   # 2. 拖拽 Docker 图标到 Applications 文件夹
   # 3. 打开 Applications，双击 Docker 图标启动
   # 4. 按照提示授权并等待 Docker 启动完成
   ```

3. **验证安装**
   ```bash
   # 等待 Docker Desktop 完全启动后（菜单栏图标变绿）
   docker --version
   docker-compose --version
   ```

   **预期输出**：
   ```
   Docker version 24.x.x
   Docker Compose version v2.x.x
   ```

---

### 方法 B：使用 Homebrew（推荐，更方便）

如果你还没有 Homebrew，先安装它：

```bash
# 1. 安装 Homebrew
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# 2. 安装完成后，根据提示执行（重要！）
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zshrc
source ~/.zshrc

# 3. 验证 Homebrew
brew --version
```

然后安装 Docker：

```bash
# 安装 Docker Desktop
brew install --cask docker

# 打开 Docker Desktop（首次需要手动打开）
open /Applications/Docker.app

# 等待启动完成（菜单栏图标变绿）
```

---

## 🐳 步骤 2：创建 n8n 项目目录

```bash
# 进入你的项目目录
cd /Users/xinzechao/Projects/randomhub

# 创建 n8n 配置目录
mkdir -p n8n-automation
cd n8n-automation

# 创建数据存储目录
mkdir -p n8n-data
mkdir -p workspace
```

---

## 📝 步骤 3：创建 Docker Compose 配置

创建 `docker-compose.yml` 文件：

```bash
cat > docker-compose.yml << 'EOF'
version: '3.8'

services:
  n8n:
    image: n8nio/n8n:latest
    container_name: n8n-animal-images
    restart: unless-stopped
    ports:
      - "5678:5678"
    environment:
      # 基础认证（生产环境建议开启）
      - N8N_BASIC_AUTH_ACTIVE=true
      - N8N_BASIC_AUTH_USER=admin
      - N8N_BASIC_AUTH_PASSWORD=your_secure_password_here

      # 时区设置
      - TZ=Asia/Shanghai
      - GENERIC_TIMEZONE=Asia/Shanghai

      # API Keys（后续配置）
      - PEXELS_API_KEY=${PEXELS_API_KEY:-}
      - DOUBAO_API_KEY=${DOUBAO_API_KEY:-}

      # 文件路径（允许 n8n 访问项目文件）
      - N8N_DEFAULT_BINARY_DATA_MODE=filesystem

    volumes:
      # n8n 数据持久化
      - ./n8n-data:/home/node/.n8n

      # 挂载项目目录（读取 animals.ts，保存图片）
      - /Users/xinzechao/Projects/randomhub:/workspace

      # 共享 npm 全局模块（用于安装 Sharp 等依赖）
      - n8n-npm:/usr/local/lib/node_modules

    networks:
      - n8n-network

volumes:
  n8n-npm:

networks:
  n8n-network:
    driver: bridge
EOF

echo "✅ docker-compose.yml 创建成功"
```

---

## 🔑 步骤 4：配置环境变量（可选，推荐）

创建 `.env` 文件存储 API Keys：

```bash
cat > .env << 'EOF'
# Pexels API Key
# 获取地址：https://www.pexels.com/api/
PEXELS_API_KEY=your_pexels_api_key_here

# 豆包 API Key
# 获取地址：https://www.volcengine.com/product/doubao
DOUBAO_API_KEY=your_doubao_api_key_here
EOF

echo "✅ .env 文件创建成功"
echo "⚠️  请记得填写真实的 API Keys"
```

**重要**：
- 现在可以先不填，启动后在 n8n 界面中配置
- 如果填写，记得添加到 `.gitignore`

```bash
echo ".env" >> .gitignore
```

---

## 🚀 步骤 5：启动 n8n

```bash
# 确保在 n8n-automation 目录下
cd /Users/xinzechao/Projects/randomhub/n8n-automation

# 启动 n8n（首次会下载镜像，约 2-3 分钟）
docker-compose up -d

# 查看启动日志
docker-compose logs -f n8n

# 看到以下内容表示启动成功：
# n8n ready on port 5678
# Version: x.x.x
```

**Ctrl + C** 退出日志查看

---

## 🌐 步骤 6：访问 n8n

打开浏览器，访问：

```
http://localhost:5678
```

**首次访问**：
1. 会提示输入用户名和密码
   - 用户名：`admin`
   - 密码：`your_secure_password_here`（你在 docker-compose.yml 中设置的）

2. 进入 n8n 主界面，会看到欢迎页面

---

## 🔧 步骤 7：安装必要的自定义节点（Sharp）

n8n 有内置的 Edit Image 节点，但如果需要更强大的 Sharp 功能：

```bash
# 进入 n8n 容器
docker exec -it n8n-animal-images /bin/sh

# 安装 Sharp 自定义节点
npm install -g n8n-nodes-image-sharp

# 退出容器
exit

# 重启 n8n
docker-compose restart
```

---

## ✅ 验证清单

在继续之前，确认：

- [ ] Docker Desktop 已启动（菜单栏图标为绿色）
- [ ] `docker-compose up -d` 运行成功
- [ ] 浏览器能访问 http://localhost:5678
- [ ] 成功登录 n8n 界面
- [ ] 能看到 n8n 的工作流编辑器

---

## 🛠️ 常用命令

```bash
# 查看 n8n 状态
docker-compose ps

# 查看日志
docker-compose logs -f n8n

# 停止 n8n
docker-compose stop

# 启动 n8n
docker-compose start

# 重启 n8n
docker-compose restart

# 完全删除并重新创建（慎用！会清空数据）
docker-compose down -v
docker-compose up -d
```

---

## 🐛 常见问题

### 问题 1：端口 5678 被占用

**错误**：`Bind for 0.0.0.0:5678 failed: port is already allocated`

**解决**：
```bash
# 方法 A：修改端口
# 编辑 docker-compose.yml，将 "5678:5678" 改为 "5679:5678"
# 然后访问 http://localhost:5679

# 方法 B：查找并关闭占用 5678 的进程
lsof -ti:5678 | xargs kill -9
```

---

### 问题 2：Docker 未启动

**错误**：`Cannot connect to the Docker daemon`

**解决**：
1. 打开 Docker Desktop 应用
2. 等待菜单栏图标变绿
3. 重新运行 `docker-compose up -d`

---

### 问题 3：容器启动失败

```bash
# 查看详细错误
docker-compose logs n8n

# 删除并重建
docker-compose down
docker-compose up -d
```

---

## 📚 下一步

安装完成后，你可以：

1. ✅ **导入工作流**：我会提供一个 JSON 文件
2. ✅ **配置 API 凭证**：Pexels、豆包 API
3. ✅ **测试运行**：处理第一批动物图片

准备好了吗？完成安装后告诉我，我会继续下一步！🚀
