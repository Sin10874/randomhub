# 🐾 Random Animal Generator - 真实图片准备指南

## 📊 当前状态

✅ **已完成**：
- 190 种动物数据（科学分类）
- Emoji 占位符（临时方案）
- 完整功能的页面

⚠️ **待完成**：
- 下载真实动物照片
- 替换 emoji 为真实图片

---

## 🎯 推荐方案：Kaggle 数据集 + 本地存储

### **数据源：Animal Image Dataset (90 Animals)**

**链接**: https://www.kaggle.com/datasets/iamsouravbanerjee/animal-image-dataset-90-different-animals

**优点**：
- ✅ 90 种动物，5,400 张高质量图片
- ✅ 每个动物约 60 张图片可选
- ✅ 完全免费
- ✅ 不依赖 API，稳定可靠

---

## 📥 步骤 1：下载 Kaggle 数据集

### **方法 A：使用 Kaggle CLI（推荐）**

```bash
# 1. 安装 Kaggle CLI
pip install kaggle

# 2. 设置 API 凭证
# 访问 https://www.kaggle.com/settings
# 点击 "Create New API Token" 下载 kaggle.json
# 将 kaggle.json 放到 ~/.kaggle/ 目录

# 3. 下载数据集
kaggle datasets download -d iamsouravbanerjee/animal-image-dataset-90-different-animals

# 4. 解压
unzip animal-image-dataset-90-different-animals.zip -d animal-dataset
```

### **方法 B：网页下载**

1. 访问 https://www.kaggle.com/datasets/iamsouravbanerjee/animal-image-dataset-90-different-animals
2. 点击 "Download" 按钮（需要登录 Kaggle 账号）
3. 解压下载的 zip 文件

---

## 🗂️ 步骤 2：整理图片到项目

### **目标目录结构**

```
/public/images/animals/
  ├── mammals/
  │   ├── lion.jpg
  │   ├── tiger.jpg
  │   └── ...
  ├── birds/
  │   ├── eagle.jpg
  │   ├── owl.jpg
  │   └── ...
  ├── reptiles/
  ├── amphibians/
  ├── fish/
  └── invertebrates/
```

### **自动化脚本：整理图片**

创建 `scripts/organize-animal-images.js`:

```javascript
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Kaggle 数据集路径
const sourceDir = './animal-dataset';
// 目标路径
const targetDir = './public/images/animals';

// 动物分类映射（从 Kaggle 数据集到我们的分类）
const categoryMap = {
  // Mammals
  'lion': 'mammals',
  'tiger': 'mammals',
  'elephant': 'mammals',
  'giraffe': 'mammals',
  'zebra': 'mammals',
  'panda': 'mammals',
  'dog': 'mammals',
  'cat': 'mammals',
  'horse': 'mammals',
  'cow': 'mammals',
  // ... 继续添加其他动物

  // Birds
  'eagle': 'birds',
  'owl': 'birds',
  'parrot': 'birds',
  'chicken': 'birds',
  // ...

  // Reptiles
  'snake': 'reptiles',
  'crocodile': 'reptiles',
  'turtle': 'reptiles',
  // ...

  // Fish
  'shark': 'fish',
  'goldfish': 'fish',
  // ...

  // Amphibians
  'frog': 'amphibians',
  // ...

  // Invertebrates
  'butterfly': 'invertebrates',
  'bee': 'invertebrates',
  'spider': 'invertebrates',
  // ...
};

async function processImage(sourcePath, animal, category) {
  const targetPath = path.join(targetDir, category, `${animal}.jpg`);

  // 确保目录存在
  const dir = path.dirname(targetPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  // 调整尺寸并压缩
  await sharp(sourcePath)
    .resize(400, 400, { fit: 'cover' })
    .jpeg({ quality: 85 })
    .toFile(targetPath);

  console.log(`✅ ${animal} -> ${category}/${animal}.jpg`);
}

async function main() {
  // 遍历 Kaggle 数据集
  const animals = fs.readdirSync(sourceDir);

  for (const animal of animals) {
    const category = categoryMap[animal.toLowerCase()];
    if (!category) {
      console.log(`⚠️  跳过：${animal}（未映射到分类）`);
      continue;
    }

    const animalDir = path.join(sourceDir, animal);
    const images = fs.readdirSync(animalDir);

    // 选择第一张图片（或随机选择）
    const firstImage = images.find(f => f.endsWith('.jpg') || f.endsWith('.png'));
    if (firstImage) {
      const sourcePath = path.join(animalDir, firstImage);
      await processImage(sourcePath, animal.toLowerCase(), category);
    }
  }

  console.log('\n🎉 图片整理完成！');
}

main().catch(console.error);
```

**运行脚本**：

```bash
# 安装依赖
npm install sharp

# 运行脚本
node scripts/organize-animal-images.js
```

---

## 🔄 步骤 3：更新 animals.ts

批量更新 `imageUrl` 字段：

```bash
# 创建更新脚本 scripts/update-image-urls.js
```

```javascript
const fs = require('fs');
const path = require('path');

// 读取 animals.ts 文件
const animalsFile = './app/data/animals.ts';
let content = fs.readFileSync(animalsFile, 'utf-8');

// 为每个动物添加 imageUrl
content = content.replace(
  /{ id: (\d+), name: '([^']+)', category: '([^']+)', emoji: '([^']+)' }/g,
  (match, id, name, category, emoji) => {
    const fileName = name.toLowerCase().replace(/\s+/g, '-');
    const imageUrl = `/images/animals/${category}/${fileName}.jpg`;
    return `{ id: ${id}, name: '${name}', category: '${category}', emoji: '${emoji}', imageUrl: '${imageUrl}' }`;
  }
);

fs.writeFileSync(animalsFile, content);
console.log('✅ animals.ts 已更新！');
```

**运行**：

```bash
node scripts/update-image-urls.js
```

---

## 🖼️ 步骤 4：处理缺失的图片

Kaggle 数据集可能不包含所有 190 种动物。对于缺失的图片：

### **方案 A：从 Pexels/Pixabay 手动下载**

```bash
# 创建缺失图片列表
node scripts/find-missing-images.js
```

```javascript
const fs = require('fs');
const path = require('path');
const { animals } = require('../app/data/animals.ts');

const imageDir = './public/images/animals';
const missing = [];

animals.forEach(animal => {
  const fileName = animal.name.toLowerCase().replace(/\s+/g, '-');
  const imagePath = path.join(imageDir, animal.category, `${fileName}.jpg`);

  if (!fs.existsSync(imagePath)) {
    missing.push({
      name: animal.name,
      category: animal.category,
      searchQuery: `${animal.name} animal`,
    });
  }
});

console.log(`\n📋 缺失图片列表（${missing.length} 个）：\n`);
missing.forEach(m => {
  console.log(`- ${m.name} (${m.category})`);
  console.log(`  搜索：https://www.pexels.com/search/${encodeURIComponent(m.searchQuery)}`);
});

// 保存到文件
fs.writeFileSync('./missing-animals.json', JSON.stringify(missing, null, 2));
console.log('\n💾 已保存到 missing-animals.json');
```

### **方案 B：使用通用占位图（临时）**

对于缺失的图片，暂时使用分类通用图：

```typescript
// 在 AnimalGeneratorPanel.tsx 中
{animal.imageUrl ? (
  <img src={animal.imageUrl} alt={animal.name} />
) : (
  <span className="text-6xl">{animal.emoji}</span> // 继续使用 emoji
)}
```

---

## ✅ 验证清单

- [ ] 已下载 Kaggle 数据集
- [ ] 已安装 sharp 依赖
- [ ] 已运行图片整理脚本
- [ ] 所有图片已调整为 400x400px
- [ ] 图片文件大小 < 100KB
- [ ] 已更新 animals.ts 的 imageUrl 字段
- [ ] 本地测试图片加载正常
- [ ] 部署到 Vercel 后图片显示正常

---

## 🚀 Next.js Image 优化（可选）

使用 Next.js Image 组件自动优化：

```tsx
import Image from 'next/image';

// 在 AnimalGeneratorPanel.tsx 中
<Image
  src={animal.imageUrl || '/images/placeholder.jpg'}
  alt={animal.name}
  width={400}
  height={400}
  className="w-full h-full object-cover rounded-lg"
  priority={false} // 懒加载
/>
```

---

## 📊 预估工作量

| 任务 | 时间 |
|------|------|
| 下载 Kaggle 数据集 | 10 分钟 |
| 安装依赖和运行脚本 | 15 分钟 |
| 处理缺失图片（估计 100 个） | 2-3 小时 |
| 更新代码和测试 | 30 分钟 |
| **总计** | **3-4 小时** |

---

## 💡 提示

1. **优先级**：先处理 Mammals 和 Birds（数量最多）
2. **图片质量**：选择清晰、主体明确的照片
3. **命名规范**：确保文件名与 `animals.ts` 中的 `name` 字段匹配
4. **备份**：准备好的图片建议备份到云端

---

## 🎯 最终效果

完成后，你将拥有：
- ✅ 190 种动物的真实高清照片
- ✅ 全部本地存储，零 API 依赖
- ✅ Vercel CDN 全球加速
- ✅ 加载速度极快（50-100ms）

需要帮助？随时在新窗口 ping 我！🚀
