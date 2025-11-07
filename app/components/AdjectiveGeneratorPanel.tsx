'use client';

import { useState, useEffect } from 'react';
import { filterAdjectives } from '@/app/utils/adjectiveFilter';
import adjectivesData from '@/public/data/adjectives.json';
import Select from '@/app/components/ui/Select';
import { RotateCw, Copy, Check, Sparkles, SlidersHorizontal } from 'lucide-react';

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

  const handleGenerate = () => {
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
        setError('No adjectives found matching your criteria. Try adjusting the filters.');
        setGeneratedAdjectives([]);
      } else {
        // Generate multiple unique adjectives
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
  };

  const handleCopy = () => {
    if (generatedAdjectives.length > 0) {
      const text = generatedAdjectives.join('\n');
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
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
  }, [startsWith, endsWith, sizeMode, comparator, sizeValue, count, isGenerating]);

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Title */}
      <div className="text-center mb-6 sm:mb-8 px-4">
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight animate-fade-in drop-shadow-lg">
          Random Adjective Generator
        </h1>
      </div>

      {/* Main Panel */}
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Settings card */}
          <div className="border-b lg:border-b-0 lg:border-r border-emerald-100/60 p-6 sm:p-8 bg-gradient-to-br from-emerald-50/50 to-transparent">
            <div className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
              <SlidersHorizontal className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />
              Settings
            </div>

            <div className="space-y-5 mb-6">
              {/* Number of Adjectives */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Number of Adjectives
                </label>
                <input
                  type="number"
                  min="1"
                  max="50"
                  value={count}
                  onChange={(e) => setCount(Math.min(50, Math.max(1, parseInt(e.target.value) || 1)))}
                  className="w-full appearance-none rounded-xl border-2 border-slate-200 bg-white px-4 py-2.5 text-slate-900 text-center font-semibold shadow-sm hover:border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition-all"
                />
              </div>

              {/* Starts/Ends With */}
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
                    className="w-full appearance-none rounded-xl border-2 border-slate-200 bg-white px-4 py-2.5 text-slate-900 text-center uppercase font-semibold text-lg shadow-sm hover:border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition-all"
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
                    className="w-full appearance-none rounded-xl border-2 border-slate-200 bg-white px-4 py-2.5 text-slate-900 text-center uppercase font-semibold text-lg shadow-sm hover:border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition-all"
                  />
                </div>
              </div>

              {/* Adjective Size */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Adjective Size
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
                    className="w-20 appearance-none rounded-xl border-2 border-slate-200 bg-white px-3 py-2.5 text-slate-900 text-center shadow-sm hover:border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Generate Button */}
            <button
              onClick={handleGenerate}
              disabled={isGenerating}
              className="w-full bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-700 text-white font-semibold py-3.5 sm:py-4 rounded-xl hover:from-emerald-600 hover:via-emerald-700 hover:to-emerald-800 transition-all shadow-lg hover:shadow-xl active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed text-base sm:text-lg flex items-center justify-center gap-2"
            >
              {isGenerating ? (
                <>
                  <RotateCw className="w-5 h-5 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  Generate Adjectives
                </>
              )}
            </button>

            <p className="text-xs text-slate-500 text-center mt-3">
              Press <kbd className="px-2 py-1 bg-slate-100 rounded text-xs font-mono">Enter</kbd> to generate
            </p>
          </div>

          {/* Result card */}
          <div className="p-6 sm:p-8 bg-gradient-to-br from-green-50/50 to-transparent min-h-[400px] lg:min-h-0 flex flex-col">
            <div className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />
              Result
            </div>

            <div className="flex-1 rounded-2xl border-2 border-dashed border-emerald-200 bg-gradient-to-br from-emerald-50/50 via-green-50/30 to-teal-50/20 p-6 sm:p-10 flex flex-col items-center justify-center relative overflow-hidden">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

              {error ? (
                <div className="text-center animate-fade-in z-10">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-100 flex items-center justify-center">
                    <span className="text-3xl">⚠️</span>
                  </div>
                  <p className="text-red-600 font-medium text-sm sm:text-base max-w-xs">{error}</p>
                </div>
              ) : generatedAdjectives.length > 0 ? (
                <div className="flex flex-col items-center gap-6 sm:gap-8 w-full z-10 animate-fade-in">
                  {/* Adjectives Display */}
                  <div className="relative w-full max-h-64 overflow-y-auto">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-400 blur-2xl opacity-20 animate-pulse"></div>
                    <div className="relative space-y-2 px-4">
                      {generatedAdjectives.map((adj, index) => (
                        <p
                          key={index}
                          className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent text-center py-1 leading-tight"
                        >
                          {adj}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Info tags */}
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full text-xs font-medium text-slate-600 shadow-sm border border-emerald-100">
                      {generatedAdjectives.length} {generatedAdjectives.length === 1 ? 'adjective' : 'adjectives'}
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm">
                    <button
                      onClick={handleGenerate}
                      disabled={isGenerating}
                      className="flex-1 flex items-center justify-center gap-2 px-4 sm:px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-emerald-700 transition-all shadow-lg hover:shadow-xl active:scale-95 disabled:opacity-50"
                    >
                      <RotateCw className={`w-4 h-4 ${isGenerating ? 'animate-spin' : ''}`} />
                      <span className="hidden sm:inline">Regenerate</span>
                      <span className="sm:hidden">Again</span>
                    </button>
                    <button
                      onClick={handleCopy}
                      className="flex-1 flex items-center justify-center gap-2 px-4 sm:px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-green-700 transition-all shadow-lg hover:shadow-xl active:scale-95"
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
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-emerald-100 to-emerald-50 flex items-center justify-center">
                    <Sparkles className="w-10 h-10 text-emerald-500" />
                  </div>
                  <p className="text-slate-400 text-base sm:text-lg font-medium mb-2">
                    Ready to generate!
                  </p>
                  <p className="text-slate-400 text-sm">
                    Click the button to start generating adjectives
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
