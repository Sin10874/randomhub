# 词库扩充指南

## 📊 当前词库状态

当前词库包含 **71个单词**，分布在以下类别：
- noun（名词）
- verb（动词）
- adjective（形容词）
- extended（扩展词汇）

## 🚀 快速扩充方法

### 方法1: 使用自动化脚本（推荐）

我们提供了 `expand-words.js` 脚本，支持多种导入方式：

#### 1.1 从文本文件导入
```bash
# 准备一个单词列表文件（每行一个单词）
echo "apple
banana
orange
computer
happy" > words.txt

# 导入
node scripts/expand-words.js file words.txt
```

#### 1.2 从系统词典导入（macOS/Linux）
```bash
# macOS 和大部分 Linux 系统都有内置词典
node scripts/expand-words.js system          # 导入所有符合条件的单词（可能很多）
node scripts/expand-words.js system 5000     # 只导入前5000个常用词（推荐）
```
这会从 `/usr/share/dict/words` 导入单词。系统词典通常包含23万+单词，建议限制数量以获得更好的性能。

#### 1.3 手动导入单词列表
```bash
node scripts/expand-words.js manual "word1,word2,word3,word4"
```

#### 1.4 预览模式（不保存）
```bash
# 预览导入结果，确认无误后再保存
node scripts/expand-words.js preview file words.txt
node scripts/expand-words.js preview manual "apple,banana"
```

### 方法2: 使用在线词库资源

#### 2.1 下载公开词库
推荐资源：
- [Most Common English Words](https://github.com/first20hours/google-10000-english) - GitHub上的10,000常用词
- [Word Lists](https://github.com/dwyl/english-words) - 大型英语单词库

下载后使用脚本导入：
```bash
# 下载词库
curl -o common-words.txt https://raw.githubusercontent.com/first20hours/google-10000-english/master/google-10000-english.txt

# 导入
node scripts/expand-words.js file common-words.txt
```

#### 2.2 使用API获取（需要API密钥）
可以使用以下API服务：
- WordsAPI (https://www.wordsapi.com/)
- Free Dictionary API (https://dictionaryapi.dev/)

### 方法3: 直接编辑JSON文件

直接编辑 `public/data/words.json`，添加新单词：

```json
{
  "word": "newWord",
  "type": "noun",
  "syllables": 2,
  "length": 7
}
```

**注意**：需要手动计算音节数和长度。

## 📝 单词格式说明

每个单词需要包含以下字段：

```typescript
{
  word: string;        // 单词本身
  type: string;        // 词性: 'noun' | 'verb' | 'adjective' | 'extended'
  syllables: number;   // 音节数
  length: number;      // 字母数
}
```

## 🎯 推荐扩充策略

### 快速扩充（推荐顺序）

1. **第一步：批量导入常用词（推荐）**
   ```bash
   # 导入系统词典的前5000个常用词（推荐数量）
   node scripts/expand-words.js system 5000
   ```
   这会立即将词库从71个扩充到5000+个单词，性能友好且覆盖常用词汇。
   
   如果您的系统有词典，也可以导入更多：
   ```bash
   node scripts/expand-words.js system 10000  # 导入1万个单词
   ```

2. **第二步：精挑细选（可选）**
   如果词库太大，可以：
   - 手动筛选常用词
   - 按词性分类筛选
   - 按长度筛选

3. **第三步：添加专业词汇**
   从特定领域词库导入（如技术术语、学术词汇等）

### 词性分类建议

- **noun**: 名词（cat, house, computer）
- **verb**: 动词（run, jump, create）
- **adjective**: 形容词（happy, beautiful, quick）
- **extended**: 高级/扩展词汇（serendipity, ephemeral）

## 🔧 脚本功能说明

`expand-words.js` 脚本自动完成：
- ✅ 自动计算音节数
- ✅ 自动分类词性（基于常见后缀规则）
- ✅ 自动去重
- ✅ 自动排序
- ✅ 自动计算单词长度

## 📈 扩充后的效果

- **当前**: 71个单词
- **系统词典导入后**: 约 10,000-50,000 个单词（取决于系统）
- **推荐目标**: 5,000-10,000 个常用词（平衡性能和多样性）

## ⚠️ 注意事项

1. **性能考虑**: 词库过大可能影响过滤性能，建议保持在 10,000 词以内
2. **词性分类**: 自动分类可能不准确，重要单词建议手动确认
3. **重复检查**: 脚本会自动去重，但建议导入前先预览
4. **备份**: 扩充前建议备份原始 `words.json` 文件

## 🛠️ 高级用法

### 筛选特定长度的单词
```bash
# 可以先导入，然后在代码中过滤
node scripts/expand-words.js system
# 然后手动编辑 words.json，删除不符合要求的单词
```

### 按词性分类导入
脚本会自动分类，但可以通过手动编辑调整。

### 自定义词性分类规则
编辑 `scripts/expand-words.js` 中的 `classifyWord` 函数来调整分类逻辑。

