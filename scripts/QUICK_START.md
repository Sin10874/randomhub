# 🚀 词库快速扩充指南

## 📊 当前状态

**当前词库数量**: 71个单词  
**位置**: `public/data/words.json`

## ⚡ 最快扩充方式（1分钟）

### 方法1: 使用系统词典（推荐，最快）

您的 macOS 系统已检测到词典文件（23万+单词），可以直接导入：

```bash
# 导入前5000个常用词（推荐，性能好）
node scripts/expand-words.js system 5000

# 或者导入更多（1万个）
node scripts/expand-words.js system 10000
```

**预期结果**: 词库从 71 → 5000+ 个单词 ✅

### 方法2: 从在线词库导入

```bash
# 下载常用词库
curl -o common-words.txt https://raw.githubusercontent.com/first20hours/google-10000-english/master/google-10000-english.txt

# 导入
node scripts/expand-words.js file common-words.txt
```

### 方法3: 手动添加

```bash
node scripts/expand-words.js manual "word1,word2,word3,word4,word5"
```

## 📝 使用示例

### 预览模式（推荐先预览）
```bash
# 预览导入结果，确认无误后再保存
node scripts/expand-words.js preview system 100
```

### 实际导入
```bash
# 导入系统词典的前5000个单词
node scripts/expand-words.js system 5000
```

导入完成后会显示：
- ✅ 保存的单词总数
- 📊 各词性统计（noun, verb, adjective, extended）

## 🎯 推荐扩充策略

| 目标词库大小 | 推荐命令 | 适用场景 |
|------------|---------|---------|
| 500-1000词 | `system 1000` | 快速测试，轻量级应用 |
| 5000词 | `system 5000` | **推荐**，平衡性能和多样性 |
| 10000词 | `system 10000` | 需要更多词汇选择 |
| 全部 | `system` | 最大化词汇量（可能有性能影响） |

## 📚 详细文档

查看完整指南: `scripts/WORD_EXPANSION_GUIDE.md`

## ✨ 脚本功能

- ✅ 自动计算音节数
- ✅ 自动分类词性
- ✅ 自动去重
- ✅ 自动排序
- ✅ 支持预览模式

## 💡 提示

1. **性能考虑**: 建议保持在 10,000 词以内以获得最佳性能
2. **先预览**: 使用 `preview` 模式确认导入结果
3. **备份**: 扩充前建议备份 `public/data/words.json`

## 🆘 问题排查

如果系统词典不存在，可以：
- 使用在线词库导入（方法2）
- 手动创建单词列表文件并导入
- 直接编辑 `public/data/words.json`

