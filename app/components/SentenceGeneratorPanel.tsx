'use client';

import { useState, useEffect } from 'react';
import { filterSentences, type SentenceType, type SentenceTopic, type Sentence } from '@/app/utils/sentenceFilter';
import Select from '@/app/components/ui/Select';
import { RotateCw, Copy, Check, Sparkles, SlidersHorizontal, Files } from 'lucide-react';

export default function SentenceGeneratorPanel() {
  const [sentenceType, setSentenceType] = useState<SentenceType>('All');
  const [sentenceTopic, setSentenceTopic] = useState<SentenceTopic>('All');
  const [sentenceCount, setSentenceCount] = useState<number>(1);
  const [generatedSentences, setGeneratedSentences] = useState<Sentence[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [copiedAll, setCopiedAll] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    setError(null);
    setIsGenerating(true);

    setTimeout(() => {
      const result = filterSentences({
        type: sentenceType,
        topic: sentenceTopic,
        count: sentenceCount,
      });

      if (result.length === 0) {
        setError('No sentences found matching your criteria. Try adjusting the filters.');
        setGeneratedSentences([]);
      } else {
        setGeneratedSentences(result);
      }
      setIsGenerating(false);
    }, 300);
  };

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

  // Keyboard shortcut support
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && !isGenerating) {
        handleGenerate();
      }
    };
    window.addEventListener('keypress', handleKeyPress);
    return () => window.removeEventListener('keypress', handleKeyPress);
  }, [sentenceType, sentenceTopic, sentenceCount, isGenerating]);

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Title */}
      <div className="text-center mb-6 sm:mb-8 px-4">
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight animate-fade-in drop-shadow-lg">
          Random Sentence Generator
        </h1>
      </div>

      {/* Main Panel */}
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Settings Card */}
          <div className="border-b lg:border-b-0 lg:border-r border-violet-100/60 p-6 sm:p-8 bg-gradient-to-br from-violet-50/50 to-transparent">
            <div className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
              <SlidersHorizontal className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
              Settings
            </div>

            <div className="space-y-5 mb-6">
              {/* Sentence Type */}
              <Select
                label="Sentence Type"
                value={sentenceType}
                onChange={(e) => setSentenceType(e.target.value as SentenceType)}
              >
                <option value="All">All Types</option>
                <option value="Declarative">Declarative</option>
                <option value="Interrogative">Interrogative</option>
                <option value="Exclamatory">Exclamatory</option>
                <option value="Imperative">Imperative</option>
              </Select>

              {/* Sentence Topic */}
              <Select
                label="Sentence Topic"
                value={sentenceTopic}
                onChange={(e) => setSentenceTopic(e.target.value as SentenceTopic)}
              >
                <option value="All">All Topics</option>
                <option value="Nature">Nature</option>
                <option value="Science">Science</option>
                <option value="Education">Education</option>
                <option value="Daily Life">Daily Life</option>
                <option value="Technology">Technology</option>
                <option value="Sports">Sports</option>
                <option value="Travel">Travel</option>
                <option value="Entertainment">Entertainment</option>
              </Select>

              {/* Number of Sentences */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Number of Sentences
                </label>
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={sentenceCount}
                  onChange={(e) => setSentenceCount(Math.min(10, Math.max(1, parseInt(e.target.value) || 1)))}
                  className="w-full appearance-none rounded-xl border-2 border-slate-200 bg-white px-4 py-2.5 text-slate-900 shadow-sm hover:border-violet-300 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-violet-400 transition-all"
                />
                <p className="text-xs text-slate-500 mt-1">Choose 1-10 sentences</p>
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
                  Generate Sentences
                </>
              )}
            </button>

            <p className="text-xs text-slate-500 text-center mt-3">
              Press <kbd className="px-2 py-1 bg-slate-100 rounded text-xs font-mono">Enter</kbd> to generate
            </p>
          </div>

          {/* Result Card */}
          <div className="p-6 sm:p-8 bg-gradient-to-br from-blue-50/50 to-transparent min-h-[400px] lg:min-h-0 flex flex-col">
            <div className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
              Result
            </div>

            <div className="flex-1 rounded-2xl border-2 border-dashed border-violet-200 bg-gradient-to-br from-violet-50/50 via-blue-50/30 to-pink-50/20 p-6 sm:p-8 flex flex-col relative overflow-hidden">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

              {error ? (
                <div className="text-center animate-fade-in z-10 flex-1 flex items-center justify-center">
                  <div>
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-100 flex items-center justify-center">
                      <span className="text-3xl">⚠️</span>
                    </div>
                    <p className="text-red-600 font-medium text-sm sm:text-base max-w-xs">{error}</p>
                  </div>
                </div>
              ) : generatedSentences.length > 0 ? (
                <div className="flex flex-col gap-4 w-full z-10 animate-fade-in h-full">
                  {/* Sentences List - Scrollable */}
                  <div className="flex-1 overflow-y-auto pr-2 space-y-3 custom-scrollbar">
                    {generatedSentences.map((sentence, index) => (
                      <div
                        key={index}
                        className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-violet-100 hover:shadow-md transition-all group"
                      >
                        <div className="flex gap-3">
                          <div className="flex-1">
                            <p className="text-gray-800 text-sm sm:text-base leading-relaxed mb-2">
                              {sentence.sentence}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              <span className="px-2 py-0.5 bg-purple-50 rounded-full text-xs font-medium text-purple-700 border border-purple-100">
                                {sentence.type}
                              </span>
                              <span className="px-2 py-0.5 bg-blue-50 rounded-full text-xs font-medium text-blue-700 border border-blue-100">
                                {sentence.topic}
                              </span>
                              <span className="px-2 py-0.5 bg-slate-50 rounded-full text-xs font-medium text-slate-600 border border-slate-100">
                                {sentence.wordCount} words
                              </span>
                            </div>
                          </div>
                          <button
                            onClick={() => handleCopySingle(sentence.sentence, index)}
                            className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-all opacity-0 group-hover:opacity-100 active:scale-95"
                            title="Copy sentence"
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

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-3 border-t border-violet-100">
                    <button
                      onClick={handleGenerate}
                      disabled={isGenerating}
                      className="flex-1 flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-purple-700 transition-all shadow-md hover:shadow-lg active:scale-95 disabled:opacity-50 text-sm"
                    >
                      <RotateCw className={`w-4 h-4 ${isGenerating ? 'animate-spin' : ''}`} />
                      Regenerate
                    </button>
                    <button
                      onClick={handleCopyAll}
                      className="flex-1 flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all shadow-md hover:shadow-lg active:scale-95 text-sm"
                    >
                      {copiedAll ? (
                        <>
                          <Check className="w-4 h-4" />
                          Copied All!
                        </>
                      ) : (
                        <>
                          <Files className="w-4 h-4" />
                          Copy All
                        </>
                      )}
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-center z-10 animate-fade-in flex-1 flex items-center justify-center">
                  <div>
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-orange-100 to-orange-50 flex items-center justify-center">
                      <Sparkles className="w-10 h-10 text-orange-500" />
                    </div>
                    <p className="text-slate-400 text-base sm:text-lg font-medium mb-2">
                      Ready to generate!
                    </p>
                    <p className="text-slate-400 text-sm">
                      Click the button to start generating sentences
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(226, 232, 240, 0.3);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(139, 92, 246, 0.3);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(139, 92, 246, 0.5);
        }
      `}</style>
    </div>
  );
}
