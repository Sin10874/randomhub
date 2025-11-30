'use client';

import { useState, useEffect, useCallback } from 'react';
import { filterSentences, type SentenceType, type SentenceTopic, type Sentence } from '@/app/utils/sentenceFilter';
import { RotateCw, Copy, Check, Sparkles, Settings2, MessageSquareText } from 'lucide-react';

export default function SentenceGeneratorPanel() {
  const [sentenceType, setSentenceType] = useState<SentenceType>('All');
  const [sentenceTopic, setSentenceTopic] = useState<SentenceTopic>('All');
  const [sentenceCount, setSentenceCount] = useState<number>(1);
  const [generatedSentences, setGeneratedSentences] = useState<Sentence[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [copiedAll, setCopiedAll] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = useCallback(() => {
    setError(null);
    setIsGenerating(true);

    setTimeout(() => {
      const result = filterSentences({
        type: sentenceType,
        topic: sentenceTopic,
        count: sentenceCount,
      });

      if (result.length === 0) {
        setError('NO_MATCH_FOUND');
        setGeneratedSentences([]);
      } else {
        setGeneratedSentences(result);
      }
      setIsGenerating(false);
    }, 200);
  }, [sentenceType, sentenceTopic, sentenceCount]);

  const handleCopySingle = (sentence: string, index: number) => {
    navigator.clipboard.writeText(sentence);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleCopyAll = () => {
    const allSentences = generatedSentences.map(s => s.sentence).join('\n');
    navigator.clipboard.writeText(allSentences);
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 2000);
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
          Sentence<br className="sm:hidden" /> Generator
        </h1>
        <p className="text-zinc-500 font-mono text-sm uppercase tracking-widest">
          Syntax Construction Engine // v1.4
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
              <div>
                <label className="block text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">
                  Structure Type
                </label>
                <select
                  value={sentenceType}
                  onChange={(e) => setSentenceType(e.target.value as SentenceType)}
                  className="w-full bg-white border border-zinc-300 p-3 text-sm font-mono text-foreground focus:border-accent focus:ring-1 focus:ring-accent appearance-none rounded-none"
                >
                  <option value="All">ALL_TYPES</option>
                  <option value="Declarative">DECLARATIVE</option>
                  <option value="Interrogative">INTERROGATIVE</option>
                  <option value="Exclamatory">EXCLAMATORY</option>
                  <option value="Imperative">IMPERATIVE</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">
                  Topic Domain
                </label>
                <select
                  value={sentenceTopic}
                  onChange={(e) => setSentenceTopic(e.target.value as SentenceTopic)}
                  className="w-full bg-white border border-zinc-300 p-3 text-sm font-mono text-foreground focus:border-accent focus:ring-1 focus:ring-accent appearance-none rounded-none"
                >
                  <option value="All">ALL_DOMAINS</option>
                  <option value="Nature">NATURE</option>
                  <option value="Science">SCIENCE</option>
                  <option value="Education">EDUCATION</option>
                  <option value="Daily Life">DAILY_LIFE</option>
                  <option value="Technology">TECHNOLOGY</option>
                  <option value="Sports">SPORTS</option>
                  <option value="Travel">TRAVEL</option>
                  <option value="Entertainment">ENTERTAINMENT</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">
                  Output Quantity
                </label>
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={sentenceCount}
                  onChange={(e) => setSentenceCount(Math.min(10, Math.max(1, parseInt(e.target.value) || 1)))}
                  className="w-full bg-white border border-zinc-300 p-3 text-center font-mono text-foreground focus:border-accent focus:ring-1 focus:ring-accent rounded-none"
                />
                <p className="text-[10px] font-mono text-zinc-400 mt-2 text-right uppercase tracking-wider">Max: 10 units</p>
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
                    <span>Building...</span>
                  </>
                ) : (
                  <>
                    <span className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out mix-blend-screen"></span>
                    <span className="relative z-10 flex items-center gap-2">
                      Generate_Sentences
                    </span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Result Column */}
          <div className="lg:col-span-8 bg-zinc-50/50 p-4 sm:p-6 lg:p-8 relative flex flex-col">
             {/* Background Grid Accent */}
            <div className="absolute inset-0 pointer-events-none" style={{ 
              backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px)', 
              backgroundSize: '20px 20px' 
            }}></div>

            <div className="flex items-center justify-between mb-6 z-10">
              <div className="flex items-center gap-2 text-accent font-mono text-xs uppercase tracking-widest">
                <MessageSquareText className="w-4 h-4" />
                <span>Output_Log</span>
              </div>
              {generatedSentences.length > 0 && (
                  <button
                    onClick={handleCopyAll}
                    className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 hover:text-accent flex items-center gap-1 transition-colors"
                  >
                    {copiedAll ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                    {copiedAll ? 'All_Copied' : 'Copy_Batch'}
                  </button>
              )}
            </div>

            <div className="flex-1 z-10 overflow-y-auto custom-scrollbar pr-2">
              {error ? (
                 <div className="h-full flex items-center justify-center">
                    <p className="font-mono text-red-500 text-sm uppercase border border-red-200 bg-red-50 px-4 py-2">{error}</p>
                 </div>
              ) : generatedSentences.length > 0 ? (
                <div className="space-y-4">
                  {generatedSentences.map((sentence, index) => (
                    <div
                      key={index}
                      className="group bg-white border border-zinc-200 p-5 hover:border-accent hover:shadow-sm transition-all"
                    >
                      <div className="flex gap-4 items-start">
                         <div className="w-6 h-6 mt-1 bg-zinc-100 flex-shrink-0 flex items-center justify-center text-[10px] font-mono text-zinc-400">
                            {String(index + 1).padStart(2, '0')}
                         </div>
                         <div className="flex-1">
                            <p className="font-display font-medium text-xl text-foreground leading-relaxed mb-3">
                              {sentence.sentence}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              <span className="px-1.5 py-0.5 border border-zinc-200 bg-zinc-50 text-[10px] font-mono uppercase tracking-wider text-zinc-500">
                                {sentence.type}
                              </span>
                              <span className="px-1.5 py-0.5 border border-zinc-200 bg-zinc-50 text-[10px] font-mono uppercase tracking-wider text-zinc-500">
                                {sentence.topic}
                              </span>
                               <span className="px-1.5 py-0.5 border border-zinc-200 bg-zinc-50 text-[10px] font-mono uppercase tracking-wider text-zinc-400">
                                {sentence.wordCount} WDS
                              </span>
                            </div>
                         </div>
                         <button
                            onClick={() => handleCopySingle(sentence.sentence, index)}
                            className="opacity-0 group-hover:opacity-100 transition-opacity text-zinc-400 hover:text-accent self-start pt-1"
                          >
                            {copiedIndex === index ? (
                              <Check className="w-4 h-4" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                          </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-zinc-300">
                  <Sparkles className="w-12 h-12 mb-4 opacity-20" />
                  <p className="font-mono text-sm uppercase tracking-widest opacity-50">Ready for Generation</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
