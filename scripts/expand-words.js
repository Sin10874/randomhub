#!/usr/bin/env node

/**
 * 词库扩充工具
 * 支持多种方式快速扩充词库：
 * 1. 从文本文件批量导入
 * 2. 从本地系统词典导入
 * 3. 手动输入单词列表
 * 4. 从在线API获取（可选）
 */

const fs = require('fs');
const path = require('path');

// 简单的音节计数函数（基于元音规则）
function countSyllables(word) {
  word = word.toLowerCase();
  if (word.length <= 3) return 1;
  
  word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
  word = word.replace(/^y/, '');
  
  const matches = word.match(/[aeiouy]{1,2}/g);
  return matches ? Math.max(1, matches.length) : 1;
}

// 简单的词性分类（基础版本，可以通过API增强）
function classifyWord(word) {
  const wordLower = word.toLowerCase();
  
  // 常见名词后缀
  if (wordLower.match(/(tion|sion|ness|ment|ship|hood|ity|ty|er|or|ist|ism)$/)) {
    return 'noun';
  }
  
  // 常见动词后缀
  if (wordLower.match(/(ing|ed|ize|ise|fy|en)$/)) {
    return 'verb';
  }
  
  // 常见形容词后缀
  if (wordLower.match(/(ful|less|ous|ious|al|ic|ive|able|ible|y)$/)) {
    return 'adjective';
  }
  
  // 高级词汇（较长或特殊词汇）
  if (word.length > 8 || wordLower.match(/(ph|th|ch|sch|qu|xyl|zeph|ephemer|serendip)/)) {
    return 'extended';
  }
  
  // 默认分类（可以根据需要调整）
  return 'noun';
}

// 读取现有词库
function loadExistingWords() {
  const wordsPath = path.join(__dirname, '../public/data/words.json');
  try {
    const data = fs.readFileSync(wordsPath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('读取现有词库失败:', error.message);
    return [];
  }
}

// 保存词库
function saveWords(words) {
  const wordsPath = path.join(__dirname, '../public/data/words.json');
  
  // 去重（基于word字段）
  const uniqueWords = Array.from(
    new Map(words.map(w => [w.word.toLowerCase(), w])).values()
  );
  
  // 按word排序
  uniqueWords.sort((a, b) => a.word.localeCompare(b.word));
  
  fs.writeFileSync(wordsPath, JSON.stringify(uniqueWords, null, 2) + '\n');
  console.log(`✅ 已保存 ${uniqueWords.length} 个单词到词库`);
}

// 从文本文件导入
function importFromFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n').map(line => line.trim()).filter(line => line);
    
    return lines.map(word => ({
      word: word.trim(),
      type: classifyWord(word),
      syllables: countSyllables(word),
      length: word.length
    }));
  } catch (error) {
    console.error(`读取文件失败: ${error.message}`);
    return [];
  }
}

// 随机采样函数（Fisher-Yates shuffle）
function randomSample(array, count) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, count);
}

// 从系统词典导入（macOS/Linux）
function importFromSystemDict(limit = null) {
  const dictPaths = [
    '/usr/share/dict/words',
    '/usr/share/dict/web2',
    '/usr/dict/words'
  ];
  
  for (const dictPath of dictPaths) {
    if (fs.existsSync(dictPath)) {
      console.log(`找到系统词典: ${dictPath}`);
      const words = importFromFile(dictPath);
      
      // 过滤掉太短或太长的单词，以及包含特殊字符的单词
      let filtered = words.filter(w => 
        w.word.length >= 3 && 
        w.word.length <= 15 &&
        /^[a-zA-Z]+$/.test(w.word)
      );
      
      // 如果指定了限制，从整个词典中随机采样，而不是按顺序取前N个
      // 这样可以确保各个字母都有代表，避免全是A开头的单词
      if (limit && limit > 0) {
        if (filtered.length > limit) {
          filtered = randomSample(filtered, limit);
          console.log(`从 ${words.length} 个单词中随机采样 ${limit} 个符合条件的单词`);
        } else {
          console.log(`符合条件的单词共 ${filtered.length} 个，全部导入`);
        }
      }
      
      return filtered;
    }
  }
  
  console.log('未找到系统词典');
  return [];
}

// 从数组导入
function importFromArray(wordArray) {
  return wordArray.map(word => ({
    word: word.trim(),
    type: classifyWord(word),
    syllables: countSyllables(word),
    length: word.length
  }));
}

// 主函数
function main() {
  const args = process.argv.slice(2);
  const command = args[0];
  
  const existingWords = loadExistingWords();
  console.log(`当前词库有 ${existingWords.length} 个单词`);
  
  let newWords = [];
  
  switch (command) {
    case 'file':
      if (!args[1]) {
        console.error('请提供文件路径: node expand-words.js file <path>');
        process.exit(1);
      }
      newWords = importFromFile(args[1]);
      console.log(`从文件导入 ${newWords.length} 个单词`);
      break;
      
    case 'system':
      const limit = args[1] ? parseInt(args[1]) : null;
      if (limit && isNaN(limit)) {
        console.error('限制数量必须是数字');
        process.exit(1);
      }
      newWords = importFromSystemDict(limit);
      console.log(`从系统词典导入 ${newWords.length} 个单词`);
      break;
      
    case 'manual':
      if (!args[1]) {
        console.error('请提供单词列表（用逗号分隔）: node expand-words.js manual "word1,word2,word3"');
        process.exit(1);
      }
      const wordList = args[1].split(',').map(w => w.trim());
      newWords = importFromArray(wordList);
      console.log(`手动导入 ${newWords.length} 个单词`);
      break;
      
    case 'preview':
      // 预览模式，不保存
      if (args[1] === 'file' && args[2]) {
        newWords = importFromFile(args[2]);
      } else if (args[1] === 'manual' && args[2]) {
        const wordList = args[2].split(',').map(w => w.trim());
        newWords = importFromArray(wordList);
      } else {
        console.error('预览模式需要指定来源: preview file <path> 或 preview manual "words"');
        process.exit(1);
      }
      console.log('\n预览结果（前10个）:');
      newWords.slice(0, 10).forEach(w => {
        console.log(`  ${w.word} - ${w.type} - ${w.syllables}音节 - ${w.length}字母`);
      });
      console.log(`\n总共 ${newWords.length} 个单词`);
      return;
      
    default:
      console.log(`
用法:
  node expand-words.js <command> [options]

命令:
  file <path>           从文本文件导入（每行一个单词）
  system [limit]        从系统词典导入（/usr/share/dict/words）
                        可选参数: 限制导入数量（如: system 5000）
  manual "word1,word2"  手动导入单词列表（逗号分隔）
  preview <source>      预览模式，不保存到文件

示例:
  node expand-words.js file words.txt
  node expand-words.js system           # 导入所有符合条件的单词
  node expand-words.js system 5000      # 只导入前5000个
  node expand-words.js manual "apple,banana,orange"
  node expand-words.js preview file words.txt
      `);
      process.exit(1);
  }
  
  if (newWords.length === 0) {
    console.log('没有新单词可导入');
    return;
  }
  
  // 合并现有和新单词
  const allWords = [...existingWords, ...newWords];
  saveWords(allWords);
  
  console.log(`\n📊 统计信息:`);
  const typeCounts = {};
  allWords.forEach(w => {
    typeCounts[w.type] = (typeCounts[w.type] || 0) + 1;
  });
  Object.entries(typeCounts).forEach(([type, count]) => {
    console.log(`  ${type}: ${count} 个`);
  });
}

if (require.main === module) {
  main();
}

module.exports = { importFromFile, importFromArray, importFromSystemDict, countSyllables, classifyWord };

