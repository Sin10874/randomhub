'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import { Shuffle, Copy, Check, Settings2, Hash } from 'lucide-react';

type SortOption = 'none' | 'asc' | 'desc';
type CopyFormat = 'comma' | 'space' | 'row' | 'column';

export default function NumberGeneratorPanel() {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);
  const [count, setCount] = useState(10);
  const [allowDuplicates, setAllowDuplicates] = useState(true);
  const [sortOption, setSortOption] = useState<SortOption>('none');
  const [generatedNumbers, setGeneratedNumbers] = useState<number[]>([]);
  const [copiedFormat, setCopiedFormat] = useState<CopyFormat | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const outputRef = useRef<HTMLDivElement>(null);

  const generateNumbers = useCallback(() => {
    setIsGenerating(true);
    setError(null);

    setTimeout(() => {
      // Validation
      if (min > max) {
        setError('Minimum must be less than or equal to maximum');
        setIsGenerating(false);
        return;
      }

      const range = max - min + 1;
      if (!allowDuplicates && count > range) {
        setError(`Cannot generate ${count} unique numbers in range ${min}-${max} (max: ${range})`);
        setIsGenerating(false);
        return;
      }

      let numbers: number[] = [];

      if (allowDuplicates) {
        // Generate with duplicates
        for (let i = 0; i < count; i++) {
          numbers.push(Math.floor(Math.random() * (max - min + 1)) + min);
        }
      } else {
        // Generate without duplicates
        const available = Array.from({ length: range }, (_, i) => min + i);
        for (let i = 0; i < count; i++) {
          const randomIndex = Math.floor(Math.random() * available.length);
          numbers.push(available[randomIndex]);
          available.splice(randomIndex, 1);
        }
      }

      // Apply sorting
      if (sortOption === 'asc') {
        numbers.sort((a, b) => a - b);
      } else if (sortOption === 'desc') {
        numbers.sort((a, b) => b - a);
      }

      setGeneratedNumbers(numbers);
      setIsGenerating(false);
    }, 200);
  }, [min, max, count, allowDuplicates, sortOption]);

  const copyToClipboard = (format: CopyFormat) => {
    let text = '';

    switch (format) {
      case 'comma':
        text = generatedNumbers.join(', ');
        break;
      case 'space':
        text = generatedNumbers.join(' ');
        break;
      case 'row':
        text = generatedNumbers.join('\t');
        break;
      case 'column':
        text = generatedNumbers.join('\n');
        break;
    }

    navigator.clipboard.writeText(text);
    setCopiedFormat(format);
    setTimeout(() => setCopiedFormat(null), 2000);
  };

  const formatLabel = (format: CopyFormat) => {
    switch (format) {
      case 'comma':
        return 'Comma';
      case 'space':
        return 'Space';
      case 'row':
        return 'Row';
      case 'column':
        return 'Column';
    }
  };

  // Scroll to output when results are generated
  useEffect(() => {
    if (generatedNumbers.length > 0 && outputRef.current) {
      setTimeout(() => {
        outputRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 300);
    }
  }, [generatedNumbers]);

  // Calculate max count when duplicates not allowed
  const maxPossibleCount = !allowDuplicates ? Math.max(0, max - min + 1) : 1000;

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="text-center mb-8 md:mb-12">
        <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 uppercase tracking-tight">
          Random Number<br className="sm:hidden" /> Generator
        </h1>
        <p className="text-zinc-500 font-mono text-sm uppercase tracking-widest">
          Numerical Randomization Engine // v1.0
        </p>
      </div>

      <div className="swiss-card bg-panel border-grid shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[400px] lg:min-h-[500px]">

          {/* Settings Column - Left Side */}
          <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-grid p-4 sm:p-6 lg:p-8 bg-white flex flex-col">
            <div className="flex items-center gap-2 mb-8 text-accent font-mono text-xs uppercase tracking-widest">
              <Settings2 className="w-4 h-4" />
              <span>Configuration</span>
            </div>

            <div className="space-y-6 flex-1">
              {/* Range */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">
                    Min Value
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="10000"
                    value={min}
                    onChange={(e) => setMin(Math.min(10000, Math.max(0, parseInt(e.target.value) || 0)))}
                    className="w-full bg-white border border-zinc-300 p-3 text-center font-mono text-foreground focus:border-accent focus:ring-1 focus:ring-accent rounded-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">
                    Max Value
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="10000"
                    value={max}
                    onChange={(e) => setMax(Math.min(10000, Math.max(0, parseInt(e.target.value) || 0)))}
                    className="w-full bg-white border border-zinc-300 p-3 text-center font-mono text-foreground focus:border-accent focus:ring-1 focus:ring-accent rounded-none"
                  />
                </div>
              </div>
              <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">Range: 0 - 10,000</p>

              {/* Count */}
              <div>
                <label className="block text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">
                  How Many
                </label>
                <input
                  type="number"
                  min="1"
                  max={maxPossibleCount}
                  value={count}
                  onChange={(e) => setCount(Math.min(maxPossibleCount, Math.max(1, parseInt(e.target.value) || 1)))}
                  className="w-full bg-white border border-zinc-300 p-3 text-center font-mono text-foreground focus:border-accent focus:ring-1 focus:ring-accent rounded-none"
                />
                <p className="text-[10px] font-mono text-zinc-400 mt-2 text-right uppercase tracking-wider">
                  Max: {maxPossibleCount} {!allowDuplicates && '(unique)'}
                </p>
              </div>

              {/* Allow Duplicates */}
              <div>
                <label className="block text-xs font-mono text-zinc-500 uppercase tracking-widest mb-3">
                  Allow Duplicates
                </label>
                <div className="flex gap-3">
                  <button
                    onClick={() => setAllowDuplicates(true)}
                    className={`flex-1 py-2.5 px-4 border font-mono text-xs uppercase tracking-wider transition-all rounded-none ${
                      allowDuplicates
                        ? 'bg-foreground text-white border-foreground'
                        : 'bg-white text-foreground border-zinc-300 hover:border-zinc-400'
                    }`}
                  >
                    Yes
                  </button>
                  <button
                    onClick={() => setAllowDuplicates(false)}
                    className={`flex-1 py-2.5 px-4 border font-mono text-xs uppercase tracking-wider transition-all rounded-none ${
                      !allowDuplicates
                        ? 'bg-foreground text-white border-foreground'
                        : 'bg-white text-foreground border-zinc-300 hover:border-zinc-400'
                    }`}
                  >
                    No
                  </button>
                </div>
              </div>

              {/* Sort Option */}
              <div>
                <label className="block text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">
                  Sort Results
                </label>
                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value as SortOption)}
                  className="w-full bg-white border border-zinc-300 p-3 text-sm font-mono text-foreground focus:border-accent focus:ring-1 focus:ring-accent appearance-none rounded-none"
                >
                  <option value="none">DO_NOT_SORT</option>
                  <option value="asc">LOW_TO_HIGH</option>
                  <option value="desc">HIGH_TO_LOW</option>
                </select>
              </div>
            </div>

            {/* Generate Button */}
            <div className="mt-8 pt-6 border-t border-zinc-100">
              <button
                onClick={generateNumbers}
                disabled={isGenerating}
                className="w-full bg-foreground hover:bg-zinc-800 text-white font-mono font-bold py-4 px-6 uppercase tracking-wider transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 rounded-none relative overflow-hidden group"
              >
                {isGenerating ? (
                  <>
                    <Shuffle className="w-5 h-5 animate-spin" />
                    <span>Generating...</span>
                  </>
                ) : (
                  <>
                    <span className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out mix-blend-screen"></span>
                    <Shuffle className="w-5 h-5 relative z-10 group-hover:rotate-180 transition-transform duration-500" />
                    <span className="relative z-10">Generate</span>
                  </>
                )}
              </button>
              <p className="text-[10px] font-mono text-zinc-400 mt-3 text-center uppercase tracking-wider">
                Press Enter to Execute
              </p>
            </div>
          </div>

          {/* Results Column - Right Side */}
          <div ref={outputRef} className="lg:col-span-8 p-4 sm:p-6 lg:p-8 bg-zinc-50 flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2 text-accent font-mono text-xs uppercase tracking-widest">
                <Hash className="w-4 h-4" />
                <span>Output</span>
                {generatedNumbers.length > 0 && (
                  <span className="text-zinc-400 ml-2">&#47;&#47; {generatedNumbers.length} numbers</span>
                )}
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-6 p-4 border-2 border-red-300 bg-red-50">
                <p className="font-mono text-xs text-red-700 uppercase tracking-wider">
                  Error: {error}
                </p>
              </div>
            )}

            {/* Empty State */}
            {generatedNumbers.length === 0 && !error && (
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 border-2 border-dashed border-zinc-300 mb-4">
                    <Hash className="w-10 h-10 text-zinc-300" />
                  </div>
                  <p className="font-mono text-xs text-zinc-400 uppercase tracking-wider">
                    No Output Generated
                  </p>
                  <p className="font-mono text-[10px] text-zinc-400 mt-2">
                    Configure settings and press Generate
                  </p>
                </div>
              </div>
            )}

            {/* Results Display */}
            {generatedNumbers.length > 0 && (
              <div className="flex-1 flex flex-col">
                {/* Numbers Grid */}
                <div className="flex-1 border border-zinc-300 bg-white p-6 mb-6 overflow-y-auto">
                  <div className="flex flex-wrap gap-3 justify-center">
                    {generatedNumbers.map((num, index) => (
                      <div
                        key={index}
                        className="inline-flex items-center justify-center min-w-[4rem] px-4 py-3 border border-zinc-300 bg-zinc-50 hover:bg-white hover:border-accent transition-all"
                      >
                        <span className="font-display text-xl font-bold text-foreground">
                          {num}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Copy Options */}
                <div>
                  <label className="block text-xs font-mono text-zinc-500 uppercase tracking-widest mb-3">
                    Copy Format
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {(['comma', 'space', 'row', 'column'] as CopyFormat[]).map((format) => (
                      <button
                        key={format}
                        onClick={() => copyToClipboard(format)}
                        className="px-4 py-3 border border-zinc-300 hover:bg-white font-mono text-[10px] uppercase tracking-wider transition-all flex items-center justify-center gap-2 bg-white rounded-none"
                      >
                        {copiedFormat === format ? (
                          <>
                            <Check className="w-3 h-3" />
                            Copied
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            {formatLabel(format)}
                          </>
                        )}
                      </button>
                    ))}
                  </div>

                  {/* Format Preview */}
                  <div className="mt-4 p-3 bg-zinc-100 border border-zinc-200">
                    <p className="font-mono text-[9px] text-zinc-400 uppercase tracking-wider mb-2">Preview:</p>
                    <p className="font-mono text-xs text-zinc-600 break-all">
                      {copiedFormat === 'comma' && generatedNumbers.slice(0, 10).join(', ') + (generatedNumbers.length > 10 ? ', ...' : '')}
                      {copiedFormat === 'space' && generatedNumbers.slice(0, 10).join(' ') + (generatedNumbers.length > 10 ? ' ...' : '')}
                      {copiedFormat === 'row' && generatedNumbers.slice(0, 10).join('\t') + (generatedNumbers.length > 10 ? '\t...' : '')}
                      {copiedFormat === 'column' && generatedNumbers.slice(0, 5).join('\n') + (generatedNumbers.length > 5 ? '\n...' : '')}
                      {!copiedFormat && 'Select a format to copy'}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="mt-12 swiss-card p-6 sm:p-8 bg-white">
        <h2 className="font-display text-2xl font-bold mb-6 flex items-center text-foreground">
          <span className="w-2 h-8 bg-accent mr-3"></span>
          Quick Guide
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-mono font-bold text-foreground mb-3 uppercase tracking-wider text-sm">Settings</h3>
            <ul className="space-y-2 text-zinc-600 text-sm">
              <li className="flex gap-2">
                <span className="text-accent font-bold">•</span>
                <span><strong>Min/Max:</strong> Define the range (0-10,000)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold">•</span>
                <span><strong>How Many:</strong> Number of randoms to generate</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold">•</span>
                <span><strong>Duplicates:</strong> Allow or prevent repeated numbers</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold">•</span>
                <span><strong>Sort:</strong> Order results ascending, descending, or random</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-mono font-bold text-foreground mb-3 uppercase tracking-wider text-sm">Output Formats</h3>
            <ul className="space-y-2 text-zinc-600 text-sm">
              <li className="flex gap-2">
                <span className="text-accent font-bold">•</span>
                <span><strong>Comma:</strong> 1, 2, 3, 4, 5</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold">•</span>
                <span><strong>Space:</strong> 1 2 3 4 5</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold">•</span>
                <span><strong>Row:</strong> Spreadsheet row (tab-separated)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold">•</span>
                <span><strong>Column:</strong> One number per line</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
