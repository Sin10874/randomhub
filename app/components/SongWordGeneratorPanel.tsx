'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { RotateCw, Settings2, Music2, Copy, Check } from 'lucide-react';
import { getRandomSongWords } from '@/app/data/song-words';

export default function SongWordGeneratorPanel() {
  const [count, setCount] = useState(1);
  const [generatedWords, setGeneratedWords] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const outputRef = useRef<HTMLDivElement>(null);

  // Auto-generate on page load
  useEffect(() => {
    handleGenerate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleGenerate = useCallback(() => {
    setIsGenerating(true);

    setTimeout(() => {
      const words = getRandomSongWords(count);
      setGeneratedWords(words);
      setIsGenerating(false);
      setCopiedIndex(null);
    }, 300);
  }, [count]);

  // Keyboard shortcut support
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
    if (generatedWords.length > 0 && outputRef.current) {
      setTimeout(() => {
        outputRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 300);
    }
  }, [generatedWords]);

  const handleCopyWord = async (word: string, index: number) => {
    try {
      await navigator.clipboard.writeText(word);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleCopyAll = async () => {
    try {
      await navigator.clipboard.writeText(generatedWords.join(', '));
      setCopiedIndex(-1);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Main Panel */}
      <div className="swiss-card bg-panel border-grid shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[400px] lg:min-h-[500px]">

          {/* Settings Panel - Left Side */}
          <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-grid p-4 sm:p-6 lg:p-8 bg-white flex flex-col">
            <div className="flex items-center gap-2 mb-8 text-accent font-mono text-xs uppercase tracking-widest">
              <Settings2 className="w-4 h-4" />
              <span>Configuration</span>
            </div>

            <div className="space-y-6 flex-1">
              {/* Count Input */}
              <div>
                <label className="block text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">
                  Number of Words
                </label>
                <input
                  type="number"
                  min="1"
                  max="20"
                  value={count}
                  onChange={(e) => setCount(Math.min(20, Math.max(1, parseInt(e.target.value) || 1)))}
                  className="w-full bg-white border border-zinc-300 p-3 text-center font-mono text-foreground focus:border-accent focus:ring-1 focus:ring-accent rounded-none"
                />
              </div>
            </div>

            {/* Generate Button */}
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
                    Generate_Words
                  </span>
                </>
              )}
            </button>

            <p className="text-xs text-zinc-400 font-mono text-center mt-4 uppercase tracking-widest">
              Press Enter ↵ to regenerate
            </p>
          </div>

          {/* Results Panel - Right Side */}
          <div className="lg:col-span-8 p-4 sm:p-6 lg:p-8 bg-zinc-50 flex flex-col">
            <div className="flex items-center gap-2 mb-8 text-zinc-500 font-mono text-xs uppercase tracking-widest">
              <Music2 className="w-4 h-4" />
              <span>Generated Words</span>
              {generatedWords.length > 0 && (
                <>
                  <span className="ml-auto text-accent font-bold">{generatedWords.length} words</span>
                  <button
                    onClick={handleCopyAll}
                    className="ml-2 text-zinc-400 hover:text-accent transition-colors"
                    title="Copy all words"
                  >
                    {copiedIndex === -1 ? (
                      <Check className="w-4 h-4 text-green-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </>
              )}
            </div>

            {/* Word Cards Grid */}
            <div ref={outputRef} className="flex-1 overflow-auto">
              {generatedWords.length === 0 ? (
                <div className="h-full flex items-center justify-center">
                  <div className="text-center text-zinc-400">
                    <Music2 className="w-12 h-12 mx-auto mb-4 opacity-30" />
                    <p className="font-mono text-xs uppercase tracking-widest">No words generated yet</p>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {generatedWords.map((word, index) => (
                    <div
                      key={`${word}-${index}`}
                      className="bg-white border border-grid p-6 hover:border-accent hover:shadow-sm transition-all group relative"
                    >
                      {/* Copy Button */}
                      <button
                        onClick={() => handleCopyWord(word, index)}
                        className="absolute top-3 right-3 text-zinc-300 hover:text-accent transition-colors opacity-0 group-hover:opacity-100"
                        title="Copy word"
                      >
                        {copiedIndex === index ? (
                          <Check className="w-4 h-4 text-green-500" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>

                      {/* Word */}
                      <div className="text-center">
                        <h3 className="font-display text-3xl font-bold text-foreground tracking-tight capitalize">
                          {word}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
