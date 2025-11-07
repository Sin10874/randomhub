'use client';

import { useState, useEffect, useCallback } from 'react';
import { filterWords } from '@/app/utils/wordFilter';
import wordsData from '@/public/data/words.json';
import Select from '@/app/components/ui/Select';
import { RotateCw, Copy, Check, Sparkles, SlidersHorizontal } from 'lucide-react';

type WordType = 'all' | 'noun' | 'verb' | 'adjective' | 'extended';
type SizeMode = 'syllables' | 'letters';
type Comparator = '=' | '>' | '<';

export default function WordGeneratorPanel() {
  const [wordType, setWordType] = useState<WordType>('all');
  const [startsWith, setStartsWith] = useState('');
  const [endsWith, setEndsWith] = useState('');
  const [sizeMode, setSizeMode] = useState<SizeMode>('syllables');
  const [comparator, setComparator] = useState<Comparator>('=');
  const [sizeValue, setSizeValue] = useState('');
  const [generatedWord, setGeneratedWord] = useState<string | null>(null);
  const [generatedWordType, setGeneratedWordType] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = useCallback(() => {
    setError(null);
    setIsGenerating(true);
    
    // 添加短暂延迟以显示动画效果
    setTimeout(() => {
      const result = filterWords({
        wordType,
        startsWith: startsWith.toLowerCase(),
        endsWith: endsWith.toLowerCase(),
        sizeMode,
        comparator,
        sizeValue: sizeValue ? parseInt(sizeValue) : undefined,
      });

      if (result.length === 0) {
        setError('No words found matching your criteria. Try adjusting the filters.');
        setGeneratedWord(null);
        setGeneratedWordType(null);
      } else {
        // 使用改进的随机选择，确保更好的随机性
        const randomIndex = Math.floor(Math.random() * result.length);
        const randomWord = result[randomIndex];
        
        // 从词库中查找单词的实际类型
        const wordData = (wordsData as Array<{word: string; type: string}>).find(
          w => w.word.toLowerCase() === randomWord.toLowerCase()
        );
        
        setGeneratedWord(randomWord);
        setGeneratedWordType(wordData?.type || 'unknown');
      }
      setIsGenerating(false);
    }, 300);
  }, [wordType, startsWith, endsWith, sizeMode, comparator, sizeValue]);

  const handleCopy = () => {
    if (generatedWord) {
      navigator.clipboard.writeText(generatedWord);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // 键盘快捷键支持
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && !isGenerating) {
        handleGenerate();
      }
    };
    window.addEventListener('keypress', handleKeyPress);
    return () => window.removeEventListener('keypress', handleKeyPress);
  }, [handleGenerate, isGenerating]);

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* 标题区域 */}
      <div className="text-center mb-6 sm:mb-8 px-4">
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight animate-fade-in drop-shadow-lg">
          Random Word Generator
        </h1>
      </div>

      {/* 主面板 */}
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Settings card */}
          <div className="border-b lg:border-b-0 lg:border-r border-violet-100/60 p-6 sm:p-8 bg-gradient-to-br from-violet-50/50 to-transparent">
            <div className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
              <SlidersHorizontal className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
              Settings
            </div>

            <div className="space-y-5 mb-6">
              {/* Word Type */}
              <Select
                label="Word Type"
                value={wordType}
                onChange={(e) => setWordType(e.target.value as WordType)}
              >
                <option value="all">All Types</option>
                <option value="noun">Noun</option>
                <option value="verb">Verb</option>
                <option value="adjective">Adjective</option>
                <option value="extended">Extended</option>
              </Select>

              {/* Starts/Ends With - 合并显示在移动端 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Starts With */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Starts With
                  </label>
                  <input
                    type="text"
                    maxLength={1}
                    value={startsWith}
                    onChange={(e) => setStartsWith(e.target.value.toUpperCase())}
                    placeholder="e.g., A"
                    className="w-full appearance-none rounded-xl border-2 border-slate-200 bg-white px-4 py-2.5 text-slate-900 text-center uppercase font-semibold text-lg shadow-sm hover:border-violet-300 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-violet-400 transition-all"
                  />
                </div>

                {/* Ends With */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Ends With
                  </label>
                  <input
                    type="text"
                    maxLength={1}
                    value={endsWith}
                    onChange={(e) => setEndsWith(e.target.value.toUpperCase())}
                    placeholder="e.g., Z"
                    className="w-full appearance-none rounded-xl border-2 border-slate-200 bg-white px-4 py-2.5 text-slate-900 text-center uppercase font-semibold text-lg shadow-sm hover:border-violet-300 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-violet-400 transition-all"
                  />
                </div>
              </div>

              {/* Word Size */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Word Size
                </label>
                <div className="flex gap-2">
                  <Select
                    value={sizeMode}
                    onChange={(e) => setSizeMode(e.target.value as SizeMode)}
                    className="flex-1"
                  >
                    <option value="syllables">Syllables</option>
                    <option value="letters">Letters</option>
                  </Select>
                  <Select
                    value={comparator}
                    onChange={(e) => setComparator(e.target.value as Comparator)}
                    className="w-20"
                  >
                    <option value="=">=</option>
                    <option value=">">&gt;</option>
                    <option value="<">&lt;</option>
                  </Select>
                  <input
                    type="number"
                    min="1"
                    max="20"
                    value={sizeValue}
                    onChange={(e) => setSizeValue(e.target.value)}
                    placeholder="Size"
                    className="w-20 appearance-none rounded-xl border-2 border-slate-200 bg-white px-3 py-2.5 text-slate-900 text-center shadow-sm hover:border-violet-300 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-violet-400 transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Generate Button */}
            <button
              onClick={handleGenerate}
              disabled={isGenerating}
              className="w-full bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white font-semibold py-3.5 sm:py-4 rounded-xl hover:from-orange-600 hover:via-orange-700 hover:to-orange-800 transition-all shadow-lg hover:shadow-xl active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed text-base sm:text-lg flex items-center justify-center gap-2"
            >
              {isGenerating ? (
                <>
                  <RotateCw className="w-5 h-5 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  Generate Word
                </>
              )}
            </button>
            
            <p className="text-xs text-slate-500 text-center mt-3">
              Press <kbd className="px-2 py-1 bg-slate-100 rounded text-xs font-mono">Enter</kbd> to generate
            </p>
          </div>

          {/* Result card */}
          <div className="p-6 sm:p-8 bg-gradient-to-br from-blue-50/50 to-transparent min-h-[400px] lg:min-h-0 flex flex-col">
            <div className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
              Result
            </div>

            <div className="flex-1 rounded-2xl border-2 border-dashed border-violet-200 bg-gradient-to-br from-violet-50/50 via-blue-50/30 to-pink-50/20 p-6 sm:p-10 flex flex-col items-center justify-center relative overflow-hidden">
              {/* 装饰性背景元素 */}
              <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
              
              {error ? (
                <div className="text-center animate-fade-in z-10">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-100 flex items-center justify-center">
                    <span className="text-3xl">⚠️</span>
                  </div>
                  <p className="text-red-600 font-medium text-sm sm:text-base max-w-xs">{error}</p>
                </div>
              ) : generatedWord ? (
                <div className="flex flex-col items-center gap-6 sm:gap-8 w-full z-10 animate-fade-in">
                  {/* 单词显示 */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 blur-2xl opacity-20 animate-pulse"></div>
                    <p className="relative text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-violet-600 to-blue-600 bg-clip-text text-transparent break-all text-center px-4 py-2 leading-tight">
                      {generatedWord}
                    </p>
                  </div>

                  {/* 单词信息标签 */}
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full text-xs font-medium text-slate-600 shadow-sm border border-violet-100">
                      {generatedWord.length} letters
                    </span>
                    <span className="px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full text-xs font-medium text-slate-600 shadow-sm border border-violet-100 capitalize">
                      {generatedWordType || 'unknown'}
                    </span>
                  </div>

                  {/* 操作按钮 */}
                  <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm">
                    <button
                      onClick={handleGenerate}
                      disabled={isGenerating}
                      className="flex-1 flex items-center justify-center gap-2 px-4 sm:px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl active:scale-95 disabled:opacity-50"
                    >
                      <RotateCw className={`w-4 h-4 ${isGenerating ? 'animate-spin' : ''}`} />
                      <span className="hidden sm:inline">Regenerate</span>
                      <span className="sm:hidden">Again</span>
                    </button>
                    <button
                      onClick={handleCopy}
                      className="flex-1 flex items-center justify-center gap-2 px-4 sm:px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl active:scale-95"
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          Copy
                        </>
                      )}
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-center z-10 animate-fade-in">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-orange-100 to-orange-50 flex items-center justify-center">
                    <Sparkles className="w-10 h-10 text-orange-500" />
                  </div>
                  <p className="text-slate-400 text-base sm:text-lg font-medium mb-2">
                    Ready to generate!
                  </p>
                  <p className="text-slate-400 text-sm">
                    Click the button to start generating words
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
