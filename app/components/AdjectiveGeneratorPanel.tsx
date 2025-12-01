'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { filterAdjectives } from '@/app/utils/adjectiveFilter';
import { RotateCw, Copy, Check, Sparkles, Settings2, FileType } from 'lucide-react';

type SizeMode = 'syllables' | 'letters';
type Comparator = '=' | '>' | '<';

export default function AdjectiveGeneratorPanel() {
  const [startsWith, setStartsWith] = useState('');
  const [endsWith, setEndsWith] = useState('');
  const [sizeMode, setSizeMode] = useState<SizeMode>('syllables');
  const [comparator, setComparator] = useState<Comparator>('=');
  const [sizeValue, setSizeValue] = useState('');
  const [count, setCount] = useState(1);
  const [generatedAdjectives, setGeneratedAdjectives] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const outputRef = useRef<HTMLDivElement>(null);

  const handleGenerate = useCallback(() => {
    setError(null);
    setIsGenerating(true);

    setTimeout(() => {
      const result = filterAdjectives({
        startsWith: startsWith.toLowerCase(),
        endsWith: endsWith.toLowerCase(),
        sizeMode,
        comparator,
        sizeValue: sizeValue ? parseInt(sizeValue) : undefined,
      });

      if (result.length === 0) {
        setError('NO_MATCH_FOUND');
        setGeneratedAdjectives([]);
      } else {
        const selected: string[] = [];
        const available = [...result];
        const targetCount = Math.min(count, available.length);

        for (let i = 0; i < targetCount; i++) {
          const randomIndex = Math.floor(Math.random() * available.length);
          selected.push(available[randomIndex]);
          available.splice(randomIndex, 1);
        }

        setGeneratedAdjectives(selected);
      }
      setIsGenerating(false);
    }, 300);
  }, [startsWith, endsWith, sizeMode, comparator, sizeValue, count]);

  const handleCopy = () => {
    if (generatedAdjectives.length > 0) {
      const text = generatedAdjectives.join('\n');
      navigator.clipboard.writeText(text);
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

  // Scroll to output when results are generated
  useEffect(() => {
    if (generatedAdjectives.length > 0 && outputRef.current) {
      setTimeout(() => {
        outputRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 300);
    }
  }, [generatedAdjectives]);

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="text-center mb-8 md:mb-12">
        <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 uppercase tracking-tight">
          Adjective<br className="sm:hidden" /> Generator
        </h1>
        <p className="text-zinc-500 font-mono text-sm uppercase tracking-widest">
          Descriptive Index // v2.1
        </p>
      </div>

      <div className="swiss-card bg-panel border-grid shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[400px] lg:min-h-[500px]">
          
          {/* Settings Column */}
          <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-grid p-4 sm:p-6 lg:p-8 bg-white flex flex-col">
            <div className="flex items-center gap-2 mb-8 text-accent font-mono text-xs uppercase tracking-widest">
              <Settings2 className="w-4 h-4" />
              <span>Configuration</span>
            </div>

            <div className="space-y-6 flex-1">
              {/* Count */}
              <div>
                <label className="block text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">
                  Quantity
                </label>
                <input
                  type="number"
                  min="1"
                  max="50"
                  value={count}
                  onChange={(e) => setCount(Math.min(50, Math.max(1, parseInt(e.target.value) || 1)))}
                  className="w-full bg-white border border-zinc-300 p-3 text-center font-mono text-foreground font-semibold focus:border-accent focus:ring-1 focus:ring-accent rounded-none"
                />
                <p className="text-[10px] font-mono text-zinc-400 mt-2 text-right uppercase tracking-wider">Max: 50</p>
              </div>

              {/* Constraints */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">
                    Starts With
                  </label>
                  <input
                    type="text"
                    maxLength={1}
                    value={startsWith}
                    onChange={(e) => setStartsWith(e.target.value.toUpperCase())}
                    placeholder="A-Z"
                    className="w-full bg-white border border-zinc-300 p-3 text-center font-mono text-foreground focus:border-accent focus:ring-1 focus:ring-accent rounded-none uppercase"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">
                    Ends With
                  </label>
                  <input
                    type="text"
                    maxLength={1}
                    value={endsWith}
                    onChange={(e) => setEndsWith(e.target.value.toUpperCase())}
                    placeholder="A-Z"
                    className="w-full bg-white border border-zinc-300 p-3 text-center font-mono text-foreground focus:border-accent focus:ring-1 focus:ring-accent rounded-none uppercase"
                  />
                </div>
              </div>

              {/* Size Constraints */}
              <div>
                <label className="block text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">
                  Length Constraints
                </label>
                <div className="flex -space-x-px">
                  <select
                    value={sizeMode}
                    onChange={(e) => setSizeMode(e.target.value as SizeMode)}
                    className="flex-1 bg-white border border-zinc-300 p-3 text-sm font-mono text-foreground focus:border-accent focus:ring-1 focus:ring-accent rounded-none"
                  >
                    <option value="syllables">SYLLABLES</option>
                    <option value="letters">LETTERS</option>
                  </select>
                  <select
                    value={comparator}
                    onChange={(e) => setComparator(e.target.value as Comparator)}
                    className="w-16 bg-white border border-zinc-300 p-3 text-sm font-mono text-center text-foreground focus:border-accent focus:ring-1 focus:ring-accent rounded-none border-l-transparent"
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
                    className="w-20 bg-white border border-zinc-300 p-3 text-center font-mono text-foreground focus:border-accent focus:ring-1 focus:ring-accent rounded-none border-l-transparent"
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-100">
              <button
                onClick={handleGenerate}
                disabled={isGenerating}
                className="w-full bg-foreground hover:bg-zinc-800 text-white font-mono font-bold py-4 px-6 uppercase tracking-wider transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 rounded-none relative overflow-hidden group"
              >
                {isGenerating ? (
                  <>
                    <RotateCw className="w-5 h-5 animate-spin" />
                    <span>Scanning...</span>
                  </>
                ) : (
                  <>
                    <span className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out mix-blend-screen"></span>
                    <span className="relative z-10 flex items-center gap-2">
                      Generate_Adjectives
                    </span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Result Column */}
          <div ref={outputRef} className="lg:col-span-7 bg-zinc-50/50 p-4 sm:p-6 lg:p-8 relative flex flex-col">
             {/* Background Grid Accent */}
            <div className="absolute inset-0 pointer-events-none" style={{ 
              backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px)', 
              backgroundSize: '20px 20px' 
            }}></div>

            <div className="flex items-center justify-between mb-6 z-10">
              <div className="flex items-center gap-2 text-accent font-mono text-xs uppercase tracking-widest">
                <FileType className="w-4 h-4" />
                <span>Output_Stream</span>
              </div>
              {generatedAdjectives.length > 0 && (
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-white border border-zinc-200 text-[10px] font-mono text-zinc-500 shadow-sm">
                    COUNT: {generatedAdjectives.length}
                  </span>
                </div>
              )}
            </div>

            <div className="flex-1 z-10 flex flex-col">
              {error ? (
                <div className="h-full flex items-center justify-center">
                   <p className="font-mono text-red-500 text-sm uppercase border border-red-200 bg-red-50 px-4 py-2">{error}</p>
                </div>
              ) : generatedAdjectives.length > 0 ? (
                <div className="flex-1 flex flex-col items-center justify-center">
                  <div className="w-full max-h-[300px] overflow-y-auto custom-scrollbar px-2 mb-6">
                    <div className="space-y-1 text-center">
                      {generatedAdjectives.map((adj, index) => (
                        <p
                          key={index}
                          className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground py-1 tracking-tight hover:text-accent transition-colors cursor-default"
                        >
                          {adj}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 w-full max-w-xs">
                    <button
                      onClick={handleGenerate}
                      disabled={isGenerating}
                      className="flex-1 h-10 border border-zinc-300 bg-white hover:bg-zinc-50 text-zinc-600 font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
                    >
                      <RotateCw className={`w-3 h-3 ${isGenerating ? 'animate-spin' : ''}`} />
                      Rerun
                    </button>
                    <button
                      onClick={handleCopy}
                      className="flex-1 h-10 bg-accent text-white hover:bg-accent/90 font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-sm"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3 h-3" />
                          Copied
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          Copy
                        </>
                      )}
                    </button>
                  </div>
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-zinc-300">
                  <Sparkles className="w-12 h-12 mb-4 opacity-20" />
                  <p className="font-mono text-sm uppercase tracking-widest opacity-50">Awaiting Input...</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
