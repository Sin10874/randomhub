# 部署指南 - RandomHub

## 快速部署步骤

### 方法一：使用 Vercel（推荐）

Vercel 是 Next.js 的官方部署平台，最简单快捷：

#### 1. 提交代码到 Git

```bash
# 添加所有更改的文件
git add .

# 提交更改
git commit -m "更新网站图标为橙色渐变设计，确保Google收录"

# 推送到远程仓库
git push origin main
```

#### 2. 在 Vercel 上部署

**选项 A：通过 Vercel 网站（推荐）**

1. 访问 [https://vercel.com](https://vercel.com)
2. 使用 GitHub/GitLab/Bitbucket 账号登录
3. 点击 "Add New Project"
4. 导入你的仓库（如果还没有连接，需要先连接）
5. 配置项目：
   - **Framework Preset**: Next.js（自动检测）
   - **Root Directory**: `./`（默认）
   - **Build Command**: `npm run build`（默认）
   - **Output Directory**: `.next`（默认）
6. 点击 "Deploy"

**选项 B：使用 Vercel CLI**

```bash
# 安装 Vercel CLI（如果还没安装）
npm i -g vercel

# 在项目目录下运行
vercel

# 首次部署会提示登录，按提示操作即可
# 之后每次部署直接运行 vercel --prod
```

#### 3. 配置自定义域名（可选）

如果域名是 `randomhub.io`：

1. 在 Vercel 项目设置中，进入 "Domains"
2. 添加你的域名 `randomhub.io`
3. 按照提示配置 DNS 记录：
   - 添加 CNAME 记录：`www` → `cname.vercel-dns.com`
   - 或者添加 A 记录：`@` → Vercel 提供的 IP 地址

### 方法二：其他平台部署

#### Netlify

1. 连接 GitHub 仓库
2. 构建命令：`npm run build`
3. 发布目录：`.next`
4. 环境变量：无需特殊配置

#### 自托管服务器

```bash
# 1. 构建生产版本
npm run build

# 2. 启动生产服务器
npm start

# 默认运行在 http://localhost:3000
```

## 部署后验证

### 1. 检查网站是否正常运行

访问你的网站 URL，确认：
- ✅ 页面正常加载
- ✅ 新图标显示在浏览器标签页
- ✅ 控制台没有错误

### 2. 验证图标文件可访问

访问以下 URL，确认图标文件可以正常访问：
- `https://your-domain.com/icon.svg`
- `https://your-domain.com/favicon-32x32.png`
- `https://your-domain.com/apple-touch-icon.png`

### 3. 提交到 Google Search Console

1. 访问 [Google Search Console](https://search.google.com/search-console)
2. 添加你的网站属性
3. 验证网站所有权（有多种方法，推荐 HTML 文件验证）
4. 提交站点地图：`https://your-domain.com/sitemap.xml`

### 4. 测试结构化数据

1. 访问 [Google Rich Results Test](https://search.google.com/test/rich-results)
2. 输入你的网站 URL
3. 检查是否有错误，确认 Schema.org 数据正确

### 5. 验证 robots.txt

访问：`https://your-domain.com/robots.txt`

确认包含：
```
User-agent: Googlebot-Image
Allow: /
```

## 部署环境变量（如果需要）

如果将来需要添加环境变量，在 Vercel 项目设置中：

1. 进入 "Settings" → "Environment Variables"
2. 添加变量：
   - `NEXT_PUBLIC_SITE_URL`: `https://randomhub.io`
   - 其他需要的变量...

## 自动部署

Vercel 默认配置了自动部署：
- ✅ 每次推送到 `main` 分支会自动部署
- ✅ 可以配置预览部署（每个 PR 自动部署）
- ✅ 部署历史记录可在 Vercel 控制台查看

## 常见问题

### Q: 部署后图标没有更新？
A: 清除浏览器缓存，或使用无痕模式访问。Google 可能需要几天时间更新搜索结果中的图标。

### Q: 如何查看部署日志？
A: 在 Vercel 控制台的 "Deployments" 页面，点击任意部署可查看详细日志。

### Q: 部署失败怎么办？
A: 
1. 检查构建日志中的错误信息
2. 确认 `package.json` 中的依赖正确
3. 运行本地构建测试：`npm run build`

### Q: 如何回滚到之前的版本？
A: 在 Vercel 控制台的 "Deployments" 页面，找到之前的部署，点击 "..." → "Promote to Production"

## 性能优化建议

部署后可以考虑：
1. ✅ 启用 Vercel Analytics（可选）
2. ✅ 配置 CDN 缓存策略
3. ✅ 启用图片优化（Next.js 自动支持）
4. ✅ 监控 Core Web Vitals

---

**现在可以开始部署了！** 🚀

