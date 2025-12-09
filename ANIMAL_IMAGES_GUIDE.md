# 🐾 Random Animal Generator - 阶段2图片准备指南

## 📋 任务概述

为 180 个动物准备真实图片，替换当前的 emoji 占位符。

---

## 🎯 图片要求

### 技术规格
- **格式**: JPG 或 WebP（推荐 WebP）
- **尺寸**: 400x400px（正方形）
- **文件大小**: 每张 30-50KB（压缩后）
- **命名规则**: 小写，用连字符分隔，例如：`lion.jpg`, `sea-turtle.jpg`, `poison-dart-frog.jpg`

### 图片质量
- ✅ 清晰，主体明确
- ✅ 动物居中，占据画面主要部分
- ✅ 背景简洁（自然背景优先）
- ✅ 光线良好，色彩自然
- ❌ 避免水印
- ❌ 避免过度处理的图片

---

## 📁 文件结构

```
/public/images/animals/
  ├── mammals/
  │   ├── lion.jpg
  │   ├── tiger.jpg
  │   ├── elephant.jpg
  │   └── ... (60张)
  ├── birds/
  │   ├── eagle.jpg
  │   ├── owl.jpg
  │   └── ... (40张)
  ├── reptiles/
  │   ├── snake.jpg
  │   ├── crocodile.jpg
  │   └── ... (25张)
  ├── fish/
  │   ├── shark.jpg
  │   ├── clownfish.jpg
  │   └── ... (25张)
  ├── amphibians/
  │   ├── frog.jpg
  │   ├── salamander.jpg
  │   └── ... (10张)
  └── invertebrates/
      ├── butterfly.jpg
      ├── octopus.jpg
      └── ... (20张)
```

---

## 🔍 推荐图片来源（免费无版权）

### 1. **Pexels** (推荐)
- 网址: https://www.pexels.com
- 优点: 高质量，完全免费，无需署名
- 搜索示例: "lion animal", "tropical fish"

### 2. **Pixabay**
- 网址: https://pixabay.com
- 优点: 大量免费图片，多样化
- 搜索示例: "tiger wildlife", "butterfly insect"

### 3. **Unsplash**
- 网址: https://unsplash.com
- 优点: 专业摄影作品，高质量
- 搜索示例: "elephant safari", "owl bird"

### 4. **Wikimedia Commons**
- 网址: https://commons.wikimedia.org
- 优点: 海量生物图片，科学准确
- 注意: 检查具体授权协议

---

## 🛠️ 批量处理工具

### 方案 A: ImageMagick（命令行）

安装：
```bash
# macOS
brew install imagemagick

# Ubuntu/Debian
sudo apt-get install imagemagick
```

批量调整尺寸和压缩：
```bash
# 进入图片目录
cd /path/to/downloaded/images

# 批量转换为 400x400，压缩质量85
for img in *.jpg; do
  magick "$img" -resize 400x400^ -gravity center -extent 400x400 -quality 85 "optimized/$img"
done
```

### 方案 B: 在线工具
- **TinyPNG**: https://tinypng.com（拖拽批量压缩）
- **Squoosh**: https://squoosh.app（Google 出品）
- **Compressor.io**: https://compressor.io

### 方案 C: Node.js 脚本（自动化）

创建 `optimize-images.js`:
```javascript
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = './raw-images';
const outputDir = './public/images/animals';

fs.readdirSync(inputDir).forEach(file => {
  if (file.match(/\.(jpg|jpeg|png)$/i)) {
    sharp(path.join(inputDir, file))
      .resize(400, 400, { fit: 'cover' })
      .webp({ quality: 85 })
      .toFile(path.join(outputDir, file.replace(/\.(jpg|jpeg|png)$/i, '.webp')))
      .then(() => console.log(`✅ ${file} -> ${file}.webp`))
      .catch(err => console.error(`❌ ${file}: ${err}`));
  }
});
```

运行：
```bash
npm install sharp
node optimize-images.js
```

---

## 📝 180 动物完整清单

### Mammals (60)
```
lion, tiger, elephant, giraffe, zebra, gorilla, monkey, panda, koala, bear,
polar-bear, wolf, fox, raccoon, dog, cat, rabbit, hamster, mouse, rat,
squirrel, hedgehog, bat, horse, unicorn, cow, ox, pig, sheep, goat,
camel, llama, deer, kangaroo, rhinoceros, hippopotamus, otter, skunk, badger, sloth,
leopard, cheetah, bison, donkey, mule, chipmunk, beaver, seal, walrus, dolphin,
whale, orca, chimpanzee, orangutan, gibbon, lemur, meerkat, wombat, platypus, armadillo
```

### Birds (40)
```
eagle, owl, parrot, peacock, flamingo, swan, duck, chicken, rooster, penguin,
turkey, dove, crow, raven, hummingbird, woodpecker, robin, sparrow, hawk, falcon,
vulture, ostrich, emu, kiwi, pelican, seagull, albatross, toucan, macaw, cockatoo,
canary, finch, bluebird, cardinal, kingfisher, crane, heron, stork, magpie, jay
```

### Reptiles (25)
```
snake, lizard, crocodile, alligator, turtle, tortoise, dinosaur, t-rex, gecko, iguana,
chameleon, komodo-dragon, python, cobra, rattlesnake, viper, anaconda, boa-constrictor,
sea-turtle, snapping-turtle, monitor-lizard, skink, bearded-dragon, gila-monster, tuatara
```

### Fish (25)
```
fish, tropical-fish, blowfish, shark, goldfish, clownfish, angelfish, swordfish, tuna, salmon,
trout, bass, pike, catfish, eel, moray-eel, stingray, manta-ray, pufferfish, seahorse,
barracuda, piranha, betta-fish, guppy, koi
```

### Amphibians (10)
```
frog, toad, salamander, newt, tree-frog, bullfrog, poison-dart-frog, axolotl, caecilian, fire-salamander
```

### Invertebrates (20)
```
butterfly, bee, ladybug, ant, spider, scorpion, mosquito, fly, cricket, snail,
worm, beetle, cockroach, octopus, squid, crab, lobster, shrimp, jellyfish, starfish
```

---

## 🔄 更新数据文件

完成图片准备后，更新 `/app/data/animals.ts`：

```typescript
// 示例：为 Lion 添加图片路径
{
  id: 1,
  name: 'Lion',
  category: 'mammals',
  emoji: '🦁',
  imageUrl: '/images/animals/mammals/lion.jpg' // 新增这一行
}
```

或使用脚本批量更新：

```javascript
// update-image-urls.js
const animals = require('./app/data/animals.ts');

animals.forEach(animal => {
  const fileName = animal.name.toLowerCase().replace(/\s+/g, '-');
  animal.imageUrl = `/images/animals/${animal.category}/${fileName}.jpg`;
});

// 输出更新后的数据
console.log(JSON.stringify(animals, null, 2));
```

---

## ⏱️ 预估时间

| 任务 | 时间 |
|------|------|
| 下载图片（Pexels/Pixabay） | 2-3 小时 |
| 批量压缩和调整尺寸 | 30 分钟 |
| 手动整理分类文件夹 | 1 小时 |
| 更新数据文件 | 30 分钟 |
| **总计** | **4-5 小时** |

---

## ✅ 验证清单

- [ ] 所有 180 张图片已下载
- [ ] 图片已调整为 400x400px
- [ ] 文件大小均小于 100KB（理想 30-50KB）
- [ ] 图片已按分类整理到对应文件夹
- [ ] 文件命名符合规范（小写，连字符）
- [ ] `animals.ts` 文件已更新 `imageUrl` 字段
- [ ] 本地测试图片加载正常
- [ ] 部署到 Vercel 后图片显示正常

---

## 🚀 部署后优化

Vercel 会自动优化图片，但你也可以使用 Next.js Image 组件：

```tsx
// 在 AnimalGeneratorPanel.tsx 中
import Image from 'next/image';

// 替换 <img> 标签
<Image
  src={animal.imageUrl || '/images/placeholder.jpg'}
  alt={animal.name}
  width={400}
  height={400}
  className="w-full h-full object-cover rounded-lg"
  placeholder="blur"
  blurDataURL="data:image/svg+xml;base64,..."
/>
```

---

## 📞 需要帮助？

如果你在准备图片时遇到问题，可以：
1. 开一个新的 Claude 对话窗口
2. 提供这份指南
3. 让我帮你编写自动化脚本或批处理命令

祝你顺利完成阶段2！🎉
