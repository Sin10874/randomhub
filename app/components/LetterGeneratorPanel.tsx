'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Select from '@/app/components/ui/Select';
import { RotateCw, Copy, Check, Sparkles, Settings2, Type } from 'lucide-react';

type LetterType = 'all' | 'capital' | 'lowercase';

export default function LetterGeneratorPanel() {
  const [numberOfLetters, setNumberOfLetters] = useState<string>('1');
  const [letterType, setLetterType] = useState<LetterType>('all');
  const [allowDuplicates, setAllowDuplicates] = useState<boolean>(false);
  const [generatedLetters, setGeneratedLetters] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const outputRef = useRef<HTMLDivElement>(null);

  const generateLetters = useCallback(() => {
    setError(null);
    setIsGenerating(true);
    
    setTimeout(() => {
      const count = parseInt(numberOfLetters);
      
      if (isNaN(count) || count < 1 || count > 100) {
        setError('Please enter a number between 1 and 100.');
        setGeneratedLetters([]);
        setIsGenerating(false);
        return;
      }

      if (count > 26 && !allowDuplicates) {
        setError('Cannot generate >26 unique letters. Enable Duplicates.');
        setGeneratedLetters([]);
        setIsGenerating(false);
        return;
      }

      const letters: string[] = [];
      const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      
      if (allowDuplicates) {
        for (let i = 0; i < count; i++) {
          const randomIndex = Math.floor(Math.random() * 26);
          let letter = alphabet[randomIndex];
          
          if (letterType === 'lowercase') {
            letter = letter.toLowerCase();
          } else if (letterType === 'all') {
            letter = Math.random() > 0.5 ? letter : letter.toLowerCase();
          }
          
          letters.push(letter);
        }
      } else {
        const availableLetters = alphabet.split('');
        const shuffled = availableLetters.sort(() => Math.random() - 0.5);
        
        for (let i = 0; i < count; i++) {
          let letter = shuffled[i];
          
          if (letterType === 'lowercase') {
            letter = letter.toLowerCase();
          } else if (letterType === 'all') {
            letter = Math.random() > 0.5 ? letter : letter.toLowerCase();
          }
          
          letters.push(letter);
        }
      }
      
      setGeneratedLetters(letters);
      setIsGenerating(false);
    }, 300);
  }, [numberOfLetters, letterType, allowDuplicates]);

  const handleCopy = () => {
    if (generatedLetters.length > 0) {
      const text = generatedLetters.join('');
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && !isGenerating) {
        generateLetters();
      }
    };
    window.addEventListener('keypress', handleKeyPress);
    return () => window.removeEventListener('keypress', handleKeyPress);
  }, [generateLetters, isGenerating]);

  useEffect(() => {
    const count = parseInt(numberOfLetters);
    if (!isNaN(count) && count > 26) {
      setAllowDuplicates(true);
    }
  }, [numberOfLetters]);

  // Scroll to output when results are generated
  useEffect(() => {
    if (generatedLetters.length > 0 && outputRef.current) {
      setTimeout(() => {
        outputRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 300);
    }
  }, [generatedLetters]);

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="text-center mb-8 md:mb-12">
        <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 uppercase tracking-tight">
          Letter<br className="sm:hidden" /> Generator
        </h1>
        <p className="text-zinc-500 font-mono text-sm uppercase tracking-widest">
          Character Sequence System // v1.2
        </p>
      </div>

      <div className="swiss-card bg-panel border-grid shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[400px] lg:min-h-[500px]">
          
          {/* Settings Column */}
          <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-grid p-4 sm:p-6 lg:p-8 bg-white flex flex-col">
            <div className="flex items-center gap-2 mb-8 text-accent font-mono text-xs uppercase tracking-widest">
              <Settings2 className="w-4 h-4" />
              <span>Configuration</span>
            </div>

            <div className="space-y-6 flex-1">
              {/* Count */}
              <div>
                <label className="block text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">
                  Output Length
                </label>
                <input
                  type="number"
                  min="1"
                  max="100"
                  value={numberOfLetters}
                  onChange={(e) => setNumberOfLetters(e.target.value)}
                  placeholder="VAL"
                  className="w-full bg-white border border-zinc-300 p-3 text-center font-mono text-foreground focus:border-accent focus:ring-1 focus:ring-accent rounded-none"
                />
                <p className="text-[10px] font-mono text-zinc-400 mt-2 text-right uppercase tracking-wider">Range: 1-100</p>
              </div>

              {/* Type */}
              <div>
                <label className="block text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">
                  Case Format
                </label>
                <Select
                  value={letterType}
                  onChange={(e) => setLetterType(e.target.value as LetterType)}
                  className="w-full"
                >
                  <option value="all">MIXED_CASE</option>
                  <option value="capital">UPPERCASE</option>
                  <option value="lowercase">LOWERCASE</option>
                </Select>
              </div>

              {/* Duplicates */}
              <div>
                <label className="flex items-center gap-3 cursor-pointer group p-3 border border-zinc-200 hover:border-accent transition-colors">
                  <input
                    type="checkbox"
                    checked={allowDuplicates}
                    onChange={(e) => setAllowDuplicates(e.target.checked)}
                    disabled={parseInt(numberOfLetters) > 26}
                    className="appearance-none w-4 h-4 border border-zinc-400 checked:bg-accent checked:border-accent transition-all rounded-none relative checked:after:content-[''] checked:after:absolute checked:after:left-[5px] checked:after:top-[1px] checked:after:w-[4px] checked:after:h-[8px] checked:after:border-r-2 checked:after:border-b-2 checked:after:border-white checked:after:rotate-45"
                  />
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-600 group-hover:text-foreground transition-colors">
                    Allow_Duplicates
                  </span>
                </label>
                {parseInt(numberOfLetters) > 26 && (
                   <p className="text-[10px] font-mono text-accent mt-2 uppercase">
                     Auto-enabled for large sets
                   </p>
                )}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-100">
              <button
                onClick={generateLetters}
                disabled={isGenerating}
                className="w-full bg-foreground hover:bg-zinc-800 text-white font-mono font-bold py-4 px-6 uppercase tracking-wider transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 rounded-none relative overflow-hidden group"
              >
                {isGenerating ? (
                  <>
                    <RotateCw className="w-5 h-5 animate-spin" />
                    <span>Generating...</span>
                  </>
                ) : (
                  <>
                    <span className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out mix-blend-screen"></span>
                    <span className="relative z-10 flex items-center gap-2">
                      Generate_Sequence
                    </span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Result Column */}
          <div ref={outputRef} className="lg:col-span-8 bg-zinc-50/50 p-4 sm:p-6 lg:p-8 relative flex flex-col">
             {/* Background Grid Accent */}
            <div className="absolute inset-0 pointer-events-none" style={{ 
              backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px)', 
              backgroundSize: '20px 20px' 
            }}></div>

            <div className="flex items-center justify-between mb-6 z-10">
              <div className="flex items-center gap-2 text-accent font-mono text-xs uppercase tracking-widest">
                <Type className="w-4 h-4" />
                <span>Output_Buffer</span>
              </div>
              {generatedLetters.length > 0 && (
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-white border border-zinc-200 text-[10px] font-mono text-zinc-500 shadow-sm">
                    LEN: {generatedLetters.length}
                  </span>
                </div>
              )}
            </div>

            <div className="flex-1 z-10 flex flex-col">
              {error ? (
                <div className="h-full flex items-center justify-center">
                   <p className="font-mono text-red-500 text-sm uppercase border border-red-200 bg-red-50 px-4 py-2">{error}</p>
                </div>
              ) : generatedLetters.length > 0 ? (
                <div className="flex-1 flex flex-col items-center justify-center">
                   <div className="w-full max-h-[300px] overflow-y-auto custom-scrollbar px-2 mb-8">
                      <div className="flex flex-wrap gap-2 justify-center">
                        {generatedLetters.map((letter, index) => (
                          <div
                            key={index}
                            className="w-12 h-12 bg-white border border-zinc-200 flex items-center justify-center shadow-sm hover:border-accent transition-colors cursor-default"
                          >
                            <span className="text-2xl font-display font-bold text-foreground">{letter}</span>
                          </div>
                        ))}
                      </div>
                   </div>

                   <div className="flex gap-3 w-full max-w-xs">
                    <button
                      onClick={generateLetters}
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
