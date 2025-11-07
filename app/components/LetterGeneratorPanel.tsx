'use client';

import { useState, useEffect, useCallback } from 'react';
import Select from '@/app/components/ui/Select';
import { RotateCw, Copy, Check, Sparkles, SlidersHorizontal } from 'lucide-react';

type LetterType = 'all' | 'capital' | 'lowercase';

export default function LetterGeneratorPanel() {
  const [numberOfLetters, setNumberOfLetters] = useState<string>('1');
  const [letterType, setLetterType] = useState<LetterType>('all');
  const [allowDuplicates, setAllowDuplicates] = useState<boolean>(false);
  const [generatedLetters, setGeneratedLetters] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  // 生成字母的函数
  const generateLetters = useCallback(() => {
    setError(null);
    setIsGenerating(true);
    
    setTimeout(() => {
      const count = parseInt(numberOfLetters);
      
      // 验证输入
      if (isNaN(count) || count < 1 || count > 100) {
        setError('Please enter a number between 1 and 100.');
        setGeneratedLetters([]);
        setIsGenerating(false);
        return;
      }

      // 如果超过26个且不允许重复，提示错误
      if (count > 26 && !allowDuplicates) {
        setError('Cannot generate more than 26 unique letters. Enable "Allow Duplicates" for more.');
        setGeneratedLetters([]);
        setIsGenerating(false);
        return;
      }

      // 生成字母
      const letters: string[] = [];
      const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      
      if (allowDuplicates) {
        // 允许重复：随机选择
        for (let i = 0; i < count; i++) {
          const randomIndex = Math.floor(Math.random() * 26);
          let letter = alphabet[randomIndex];
          
          // 根据类型调整大小写
          if (letterType === 'lowercase') {
            letter = letter.toLowerCase();
          } else if (letterType === 'all') {
            // 随机大小写
            letter = Math.random() > 0.5 ? letter : letter.toLowerCase();
          }
          
          letters.push(letter);
        }
      } else {
        // 不允许重复：洗牌算法
        const availableLetters = alphabet.split('');
        const shuffled = availableLetters.sort(() => Math.random() - 0.5);
        
        for (let i = 0; i < count; i++) {
          let letter = shuffled[i];
          
          // 根据类型调整大小写
          if (letterType === 'lowercase') {
            letter = letter.toLowerCase();
          } else if (letterType === 'all') {
            // 随机大小写
            letter = Math.random() > 0.5 ? letter : letter.toLowerCase();
          }
          
          letters.push(letter);
        }
      }
      
      setGeneratedLetters(letters);
      setIsGenerating(false);
    }, 300);
  }, [numberOfLetters, letterType, allowDuplicates]);

  // 复制到剪贴板
  const handleCopy = () => {
    if (generatedLetters.length > 0) {
      const text = generatedLetters.join('');
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // 键盘快捷键支持（Enter键生成）
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && !isGenerating) {
        generateLetters();
      }
    };
    window.addEventListener('keypress', handleKeyPress);
    return () => window.removeEventListener('keypress', handleKeyPress);
  }, [generateLetters, isGenerating]);

  // 当数量超过26时，自动启用允许重复
  useEffect(() => {
    const count = parseInt(numberOfLetters);
    if (!isNaN(count) && count > 26) {
      setAllowDuplicates(true);
    }
  }, [numberOfLetters]);

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* 标题区域 */}
      <div className="text-center mb-6 sm:mb-8 px-4">
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight animate-fade-in drop-shadow-lg">
          Random Letter Generator
        </h1>
      </div>

      {/* 主面板 */}
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Settings card */}
          <div className="border-b lg:border-b-0 lg:border-r border-green-100/60 p-6 sm:p-8 bg-gradient-to-br from-green-50/50 to-transparent">
            <div className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
              <SlidersHorizontal className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
              Settings
            </div>

            <div className="space-y-5 mb-6">
              {/* Number of Letters */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Number of Letters
                </label>
                <input
                  type="number"
                  min="1"
                  max="100"
                  value={numberOfLetters}
                  onChange={(e) => setNumberOfLetters(e.target.value)}
                  placeholder="e.g., 5"
                  className="w-full appearance-none rounded-xl border-2 border-slate-200 bg-white px-4 py-2.5 text-slate-900 text-left font-semibold text-lg shadow-sm hover:border-green-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all"
                />
                <p className="text-xs text-slate-500 mt-1.5">Range: 1-100 letters</p>
              </div>

              {/* Letter Type */}
              <Select
                label="Letter Type"
                value={letterType}
                onChange={(e) => setLetterType(e.target.value as LetterType)}
              >
                <option value="all">All Types</option>
                <option value="capital">Capital Letters</option>
                <option value="lowercase">Lowercase Letters</option>
              </Select>

              {/* Allow Duplicates */}
              <div>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={allowDuplicates}
                      onChange={(e) => setAllowDuplicates(e.target.checked)}
                      disabled={parseInt(numberOfLetters) > 26}
                      className="w-5 h-5 rounded border-2 border-slate-300 text-green-600 focus:ring-2 focus:ring-green-400 focus:ring-offset-0 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>
                  <div className="flex-1">
                    <span className="text-sm font-medium text-slate-700 group-hover:text-green-600 transition-colors">
                      Allow Duplicate Letters
                    </span>
                    {parseInt(numberOfLetters) > 26 && (
                      <p className="text-xs text-green-600 mt-0.5">
                        ✓ Automatically enabled (more than 26 letters)
                      </p>
                    )}
                  </div>
                </label>
              </div>
            </div>

            {/* Generate Button */}
            <button
              onClick={generateLetters}
              disabled={isGenerating}
              className="w-full bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white font-semibold py-3.5 sm:py-4 rounded-xl hover:from-green-700 hover:via-emerald-700 hover:to-teal-700 transition-all shadow-lg hover:shadow-xl active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed text-base sm:text-lg flex items-center justify-center gap-2"
            >
              {isGenerating ? (
                <>
                  <RotateCw className="w-5 h-5 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  Generate Letters
                </>
              )}
            </button>
            
            <p className="text-xs text-slate-500 text-center mt-3">
              Press <kbd className="px-2 py-1 bg-slate-100 rounded text-xs font-mono">Enter</kbd> to generate
            </p>
          </div>

          {/* Result card */}
          <div className="p-6 sm:p-8 bg-gradient-to-br from-emerald-50/50 to-transparent min-h-[400px] lg:min-h-0 flex flex-col">
            <div className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />
              Result
            </div>

            <div className="flex-1 rounded-2xl border-2 border-dashed border-green-200 bg-gradient-to-br from-green-50/50 via-emerald-50/30 to-teal-50/20 p-6 sm:p-8 flex flex-col items-center justify-center relative overflow-hidden">
              {/* 装饰性背景元素 */}
              <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
              
              {error ? (
                <div className="text-center animate-fade-in z-10">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-100 flex items-center justify-center">
                    <span className="text-3xl">⚠️</span>
                  </div>
                  <p className="text-red-600 font-medium text-sm sm:text-base max-w-xs">{error}</p>
                </div>
              ) : generatedLetters.length > 0 ? (
                <div className="flex flex-col items-center gap-6 w-full z-10 animate-fade-in">
                  {/* 字母显示区域 - 分行显示 */}
                  <div className="w-full max-h-[300px] overflow-y-auto custom-scrollbar px-2">
                    <div className="flex flex-col gap-2">
                      {generatedLetters.map((letter, index) => (
                        <div
                          key={index}
                          className="relative group"
                          style={{ animationDelay: `${index * 30}ms` }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 blur-xl opacity-0 group-hover:opacity-30 transition-opacity"></div>
                          <div className="relative bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md hover:shadow-lg transition-all border border-green-100 hover:border-green-300">
                            <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent text-center">
                              {letter}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 信息标签 */}
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full text-xs font-medium text-slate-600 shadow-sm border border-green-100">
                      {generatedLetters.length} {generatedLetters.length === 1 ? 'letter' : 'letters'}
                    </span>
                    <span className="px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full text-xs font-medium text-slate-600 shadow-sm border border-green-100 capitalize">
                      {letterType === 'all' ? 'Mixed Case' : letterType === 'capital' ? 'Uppercase' : 'Lowercase'}
                    </span>
                    {allowDuplicates && (
                      <span className="px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full text-xs font-medium text-slate-600 shadow-sm border border-green-100">
                        Duplicates Allowed
                      </span>
                    )}
                  </div>

                  {/* 操作按钮 */}
                  <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm">
                    <button
                      onClick={generateLetters}
                      disabled={isGenerating}
                      className="flex-1 flex items-center justify-center gap-2 px-4 sm:px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-green-700 transition-all shadow-lg hover:shadow-xl active:scale-95 disabled:opacity-50"
                    >
                      <RotateCw className={`w-4 h-4 ${isGenerating ? 'animate-spin' : ''}`} />
                      <span className="hidden sm:inline">Regenerate</span>
                      <span className="sm:hidden">Again</span>
                    </button>
                    <button
                      onClick={handleCopy}
                      className="flex-1 flex items-center justify-center gap-2 px-4 sm:px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-emerald-700 transition-all shadow-lg hover:shadow-xl active:scale-95"
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
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center">
                    <Sparkles className="w-10 h-10 text-green-500" />
                  </div>
                  <p className="text-slate-400 text-base sm:text-lg font-medium mb-2">
                    Ready to generate!
                  </p>
                  <p className="text-slate-400 text-sm">
                    Click the button to start generating letters
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

