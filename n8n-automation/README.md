# n8n 自动化工作流 - 操作手册

## 📋 目录

1. [启动 n8n](#1-启动-n8n)
2. [配置 API 凭证](#2-配置-api-凭证)
3. [导入工作流](#3-导入工作流)
4. [测试运行](#4-测试运行)
5. [常见问题](#5-常见问题)

---

## 1. 启动 n8n

### 1.1 启动容器

```bash
cd /Users/xinzechao/Projects/randomhub/n8n-automation
docker compose up -d
```

### 1.2 检查运行状态

```bash
docker compose ps
```

应该看到：
```
NAME                  STATUS
n8n-animal-images     Up X minutes
```

### 1.3 查看日志

```bash
docker compose logs -f n8n
```

按 `Ctrl + C` 退出日志查看。

### 1.4 访问 n8n Web 界面

打开浏览器访问：**http://localhost:5678**

首次访问会要求登录：
- **用户名**: `admin`
- **密码**: `changeme123`

⚠️ **重要**：首次登录后建议修改密码！

---

## 2. 配置 API 凭证

### 2.1 获取 Pexels API Key

1. 访问：https://www.pexels.com/api/
2. 注册/登录账号
3. 点击 "Get API Key" 或 "Your API Keys"
4. 创建新的 API Key（免费版：200 请求/小时）
5. 复制 API Key

### 2.2 获取豆包 API Key

1. 访问：https://www.volcengine.com/product/doubao
2. 注册/登录火山引擎账号
3. 进入控制台 → 豆包大模型
4. 创建 API Key
5. 确保开通了 Vision 模型权限
6. 复制 API Key 和 Endpoint

### 2.3 配置环境变量

编辑 `.env` 文件：

```bash
cd /Users/xinzechao/Projects/randomhub/n8n-automation
nano .env
```

或者使用任意文本编辑器打开 `n8n-automation/.env`，填入：

```env
# Pexels API Key
PEXELS_API_KEY=your_actual_pexels_api_key_here

# 豆包 API Key
DOUBAO_API_KEY=your_actual_doubao_api_key_here
```

保存后重启 n8n：

```bash
docker compose restart
```

### 2.4 在 n8n 中配置凭证

1. 访问 http://localhost:5678
2. 点击右上角 **Settings** → **Credentials**
3. 添加 Pexels 凭证：
   - 点击 **Add credential**
   - 选择 **HTTP Request** 类型
   - 名称：`Pexels API`
   - Authentication: `Header Auth`
   - Name: `Authorization`
   - Value: 填入你的 Pexels API Key
   - 保存

4. 添加豆包凭证：
   - 点击 **Add credential**
   - 选择 **HTTP Request** 类型
   - 名称：`Doubao Vision API`
   - Authentication: `Header Auth`
   - Name: `Authorization`
   - Value: `Bearer {你的豆包API Key}`
   - 保存

---

## 3. 导入工作流

### 3.1 工作流 JSON 文件位置

工作流配置文件：`n8n-automation/animal-image-workflow.json`

### 3.2 导入步骤

1. 打开 http://localhost:5678
2. 点击左侧 **Workflows**
3. 点击右上角 **Import from File**
4. 选择 `animal-image-workflow.json`
5. 导入成功后会打开工作流编辑器

### 3.3 配置工作流参数

导入后需要检查并配置以下节点：

#### 节点 1: Read Animals Data
- 文件路径：`/workspace/app/data/animals.ts`
- 确保路径正确（已在 docker-compose 中挂载）

#### 节点 2: Pexels Search
- 选择凭证：`Pexels API`
- API Endpoint: `https://api.pexels.com/v1/search`

#### 节点 3: Doubao AI Score
- 选择凭证：`Doubao Vision API`
- API Endpoint: 你的豆包 API 地址

#### 节点 4: Sharp Process
- 目标尺寸：400x400
- 压缩质量：85%

#### 节点 5: Save Image
- 保存路径：`/workspace/public/images/animals/{{$json.category}}/`

### 3.4 保存工作流

点击右上角 **Save** 保存工作流。

---

## 4. 测试运行

### 4.1 手动测试单个动物

1. 在工作流编辑器中
2. 点击左上角 **Execute Workflow**
3. 观察每个节点的执行状态
4. 检查输出结果

### 4.2 查看执行历史

1. 点击左侧 **Executions**
2. 查看所有执行记录
3. 点击查看详情和调试信息

### 4.3 启用定时执行（可选）

如果想自动处理所有动物：

1. 在工作流中添加 **Schedule Trigger** 节点
2. 设置执行频率（如每小时一次）
3. 保存并激活工作流

### 4.4 检查下载的图片

```bash
ls -R /Users/xinzechao/Projects/randomhub/public/images/animals/
```

---

## 5. 常见问题

### 5.1 n8n 无法访问

**问题**：浏览器无法打开 http://localhost:5678

**解决**：
```bash
# 检查容器状态
docker compose ps

# 如果没有运行，启动容器
docker compose up -d

# 查看日志排查问题
docker compose logs -f n8n
```

### 5.2 API 请求失败

**问题**：Pexels 或豆包 API 返回错误

**解决**：
1. 检查 `.env` 文件中的 API Key 是否正确
2. 检查 API 配额是否用完
3. 查看执行日志中的具体错误信息

### 5.3 图片保存失败

**问题**：无法保存图片到 public/images/animals/

**解决**：
```bash
# 检查目录权限
ls -la /Users/xinzechao/Projects/randomhub/public/images/

# 创建目录（如果不存在）
mkdir -p /Users/xinzechao/Projects/randomhub/public/images/animals/{mammals,birds,reptiles,amphibians,fish,invertebrates}

# 修改权限
chmod -R 755 /Users/xinzechao/Projects/randomhub/public/images/
```

### 5.4 Docker 容器无法启动

**问题**：`docker compose up -d` 失败

**解决**：
```bash
# 查看详细错误
docker compose logs

# 重新拉取镜像
docker compose pull

# 清理并重新启动
docker compose down
docker compose up -d
```

### 5.5 修改了配置不生效

**问题**：修改 .env 或 docker-compose.yml 后没有变化

**解决**：
```bash
# 重启容器使配置生效
docker compose restart

# 或完全重建容器
docker compose down
docker compose up -d
```

---

## 6. 停止和清理

### 6.1 停止 n8n

```bash
cd /Users/xinzechao/Projects/randomhub/n8n-automation
docker compose stop
```

### 6.2 完全删除容器（保留数据）

```bash
docker compose down
```

### 6.3 删除容器和所有数据

```bash
docker compose down -v
rm -rf n8n-data/
```

---

## 7. 预期效果

### 7.1 处理速度

- 单个动物处理时间：约 15-20 秒
- 总共 190 个动物：约 50-60 分钟
- 成功率预期：85-90%

### 7.2 成本估算

- **Pexels API**：免费（200 请求/小时）
- **豆包 Vision API**：约 ¥0.05/次 × 190 ≈ ¥10

### 7.3 最终文件结构

```
public/images/animals/
├── mammals/
│   ├── lion.jpg
│   ├── tiger.jpg
│   └── ...
├── birds/
│   ├── eagle.jpg
│   ├── parrot.jpg
│   └── ...
├── reptiles/
├── amphibians/
├── fish/
└── invertebrates/
```

---

## 8. 下一步

完成图片下载后：

1. 更新 `app/data/animals.ts`，为每个动物添加 `imageUrl` 字段
2. 修改 `AnimalGeneratorPanel.tsx`，将 emoji 替换为真实图片
3. 测试页面效果
4. 部署到 Vercel

---

## 需要帮助？

如果遇到问题，可以：
1. 查看 n8n 日志：`docker compose logs -f n8n`
2. 查看 Docker 状态：`docker compose ps`
3. 参考 n8n 官方文档：https://docs.n8n.io/

---

**最后更新**: 2025-11-09
