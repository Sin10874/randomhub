'use client';

import { useState, useEffect, useCallback } from 'react';
import { filterWords } from '@/app/utils/wordFilter';
import wordsData from '@/public/data/words.json';
import { RotateCw, Copy, Check, Terminal, Settings2 } from 'lucide-react';

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
        setError('NO_MATCH_FOUND');
        setGeneratedWord(null);
        setGeneratedWordType(null);
      } else {
        const randomIndex = Math.floor(Math.random() * result.length);
        const randomWord = result[randomIndex];
        
        const wordData = (wordsData as Array<{word: string; type: string}>).find(
          w => w.word.toLowerCase() === randomWord.toLowerCase()
        );
        
        setGeneratedWord(randomWord);
        setGeneratedWordType(wordData?.type || 'unknown');
      }
      setIsGenerating(false);
    }, 200);
  }, [wordType, startsWith, endsWith, sizeMode, comparator, sizeValue]);

  const handleCopy = () => {
    if (generatedWord) {
      navigator.clipboard.writeText(generatedWord);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

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
      <div className="text-center mb-8 md:mb-12">
        <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 uppercase tracking-tight">
          Random Word<br className="sm:hidden" /> Generator
        </h1>
        <p className="text-zinc-500 font-mono text-sm uppercase tracking-widest">
          System v2.1 // Ready for input
        </p>
      </div>

      <div className="swiss-card bg-panel border-grid shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[400px] lg:min-h-[500px]">
          
          {/* Settings Column */}
          <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-grid p-4 sm:p-6 lg:p-8 flex flex-col justify-between bg-white">
            <div>
              <div className="flex items-center gap-2 mb-8 text-accent font-mono text-xs uppercase tracking-widest">
                <Settings2 className="w-4 h-4" />
                <span>Configuration</span>
              </div>

              <div className="space-y-6">
                {/* Word Type */}
                <div className="group">
                  <label className="block text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2 group-hover:text-foreground transition-colors">
                    Type Filter
                  </label>
                  <select
                    value={wordType}
                    onChange={(e) => setWordType(e.target.value as WordType)}
                    className="w-full bg-white border border-zinc-300 p-3 text-sm font-mono text-foreground focus:border-accent focus:ring-1 focus:ring-accent transition-all appearance-none rounded-none"
                  >
                    <option value="all">ALL_TYPES</option>
                    <option value="noun">NOUN</option>
                    <option value="verb">VERB</option>
                    <option value="adjective">ADJECTIVE</option>
                    <option value="extended">EXTENDED</option>
                  </select>
                </div>

                {/* Constraints */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="group">
                    <label className="block text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2 group-hover:text-foreground transition-colors">
                      Start With
                    </label>
                    <input
                      type="text"
                      maxLength={1}
                      value={startsWith}
                      onChange={(e) => setStartsWith(e.target.value.toUpperCase())}
                      placeholder="A-Z"
                      className="w-full bg-white border border-zinc-300 p-3 text-center font-mono text-foreground placeholder-zinc-300 focus:border-accent focus:ring-1 focus:ring-accent transition-all rounded-none uppercase"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2 group-hover:text-foreground transition-colors">
                      End With
                    </label>
                    <input
                      type="text"
                      maxLength={1}
                      value={endsWith}
                      onChange={(e) => setEndsWith(e.target.value.toUpperCase())}
                      placeholder="A-Z"
                      className="w-full bg-white border border-zinc-300 p-3 text-center font-mono text-foreground placeholder-zinc-300 focus:border-accent focus:ring-1 focus:ring-accent transition-all rounded-none uppercase"
                    />
                  </div>
                </div>

                {/* Size Controls */}
                <div className="group">
                  <label className="block text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2 group-hover:text-foreground transition-colors">
                    Size Constraints
                  </label>
                  <div className="flex -space-x-px">
                    <select
                      value={sizeMode}
                      onChange={(e) => setSizeMode(e.target.value as SizeMode)}
                      className="flex-1 bg-white border border-zinc-300 p-3 text-sm font-mono text-foreground focus:border-accent focus:ring-1 focus:ring-accent focus:z-10 transition-all rounded-none"
                    >
                      <option value="syllables">SYLLABLES</option>
                      <option value="letters">LETTERS</option>
                    </select>
                    <select
                      value={comparator}
                      onChange={(e) => setComparator(e.target.value as Comparator)}
                      className="w-16 bg-white border border-zinc-300 p-3 text-sm font-mono text-center text-foreground focus:border-accent focus:ring-1 focus:ring-accent focus:z-10 transition-all rounded-none border-l-transparent"
                    >
                      <option value="=">=</option>
                      <option value=">">&gt;</option>
                      <option value="<">&lt;</option>
                    </select>
                    <input
                      type="number"
                      min="1"
                      max="20"
                      value={sizeValue}
                      onChange={(e) => setSizeValue(e.target.value)}
                      placeholder="VAL"
                      className="w-20 bg-white border border-zinc-300 p-3 text-center font-mono text-foreground placeholder-zinc-300 focus:border-accent focus:ring-1 focus:ring-accent focus:z-10 transition-all rounded-none border-l-transparent"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-grid">
              <button
                onClick={handleGenerate}
                disabled={isGenerating}
                className="w-full bg-foreground hover:bg-zinc-800 text-white font-mono font-bold py-4 px-6 uppercase tracking-wider transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 rounded-none relative overflow-hidden group"
              >
                {isGenerating ? (
                  <>
                    <RotateCw className="w-5 h-5 animate-spin" />
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <span className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out mix-blend-screen"></span>
                    <span className="relative z-10 flex items-center gap-2">
                       Generate_Word
                    </span>
                  </>
                )}
              </button>
              <div className="flex justify-between items-center mt-3 text-[10px] text-zinc-400 font-mono uppercase">
                <span>Status: Ready</span>
                <span>Press [ENTER]</span>
              </div>
            </div>
          </div>

          {/* Output Column */}
          <div className="lg:col-span-7 p-4 sm:p-6 lg:p-8 flex flex-col relative bg-zinc-50/50">
            {/* Background Grid Accent */}
            <div className="absolute inset-0 pointer-events-none" style={{ 
              backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px)', 
              backgroundSize: '20px 20px' 
            }}></div>

            <div className="flex items-center justify-between mb-8 z-10">
              <div className="flex items-center gap-2 text-accent font-mono text-xs uppercase tracking-widest">
                <Terminal className="w-4 h-4" />
                <span>Output_Stream</span>
              </div>
              {generatedWord && (
                 <div className="flex gap-2">
                   <span className="px-2 py-1 bg-white border border-zinc-200 text-[10px] font-mono text-zinc-500 shadow-sm">
                     LEN: {generatedWord.length}
                   </span>
                   <span className="px-2 py-1 bg-white border border-zinc-200 text-[10px] font-mono text-zinc-500 uppercase shadow-sm">
                     TYPE: {generatedWordType}
                   </span>
                 </div>
              )}
            </div>

            <div className="flex-1 flex items-center justify-center z-10 relative">
              {error ? (
                <div className="text-center">
                  <div className="inline-block border border-red-500/30 bg-red-50 px-4 py-2 mb-2">
                    <p className="text-red-600 font-mono text-sm tracking-widest uppercase">Error: {error}</p>
                  </div>
                </div>
              ) : generatedWord ? (
                <div className="w-full text-center">
                  <h2 className="font-display text-4xl sm:text-6xl md:text-8xl font-bold text-foreground tracking-tighter break-all animate-fade-in mb-8 select-all">
                    {generatedWord}
                  </h2>
                  <div className="flex justify-center">
                     <button
                        onClick={handleCopy}
                        className="group flex items-center gap-2 px-6 py-2 border border-zinc-300 bg-white hover:border-accent hover:text-accent transition-colors shadow-sm"
                      >
                        {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-zinc-400 group-hover:text-accent" />}
                        <span className="font-mono text-xs text-zinc-500 group-hover:text-accent uppercase tracking-wider">
                          {copied ? 'Copied_to_Clipboard' : 'Copy_String'}
                        </span>
                      </button>
                  </div>
                </div>
              ) : (
                <div className="text-center opacity-30">
                  <div className="font-mono text-6xl mb-4 font-thin text-zinc-300">_</div>
                  <p className="font-mono text-sm text-zinc-400 uppercase tracking-widest">Waiting for data...</p>
                </div>
              )}
            </div>

            {/* Bottom Decoration */}
            <div className="absolute bottom-4 right-4 flex gap-1">
               <div className="w-1 h-1 bg-zinc-300"></div>
               <div className="w-1 h-1 bg-zinc-300"></div>
               <div className="w-1 h-1 bg-zinc-300"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
