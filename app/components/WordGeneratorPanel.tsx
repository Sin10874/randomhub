'use client';

import { useState } from 'react';
import { filterWords } from '@/app/utils/wordFilter';
import Select from '@/app/components/ui/Select';

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
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = () => {
    setError(null);
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
    } else {
      const randomWord = result[Math.floor(Math.random() * result.length)];
      setGeneratedWord(randomWord);
    }
  };

  const handleCopy = () => {
    if (generatedWord) {
      navigator.clipboard.writeText(generatedWord);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8">
      <h1 className="font-display text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent tracking-tight">
        Random Word Generator
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {/* Settings card */}
        <div className="h-full min-h-[360px] md:min-h-[420px] rounded-2xl border border-violet-200/60 bg-white/70 backdrop-blur p-6 shadow-sm flex flex-col">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Settings</h2>

          <div className="space-y-4 flex-1">
            {/* Word Type */}
            <Select
              label="Word Type"
              value={wordType}
              onChange={(e) => setWordType(e.target.value as WordType)}
            >
              <option value="all">All</option>
              <option value="noun">Noun</option>
              <option value="verb">Verb</option>
              <option value="adjective">Adjective</option>
              <option value="extended">Extended</option>
            </Select>

            {/* Starts With */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Starts With (optional)
              </label>
              <input
                type="text"
                maxLength={1}
                value={startsWith}
                onChange={(e) => setStartsWith(e.target.value)}
                placeholder="e.g., A"
                className="w-full appearance-none rounded-xl border border-slate-200 bg-white/90 px-3 py-2 text-slate-900 shadow-sm hover:border-violet-300 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-violet-400 transition"
              />
            </div>

            {/* Ends With */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Ends With (optional)
              </label>
              <input
                type="text"
                maxLength={1}
                value={endsWith}
                onChange={(e) => setEndsWith(e.target.value)}
                placeholder="e.g., Z"
                className="w-full appearance-none rounded-xl border border-slate-200 bg-white/90 px-3 py-2 text-slate-900 shadow-sm hover:border-violet-300 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-violet-400 transition"
              />
            </div>

            {/* Word Size */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Word Size (optional)
              </label>
              <div className="flex gap-2">
                <Select
                  value={sizeMode}
                  onChange={(e) => setSizeMode(e.target.value as SizeMode)}
                >
                  <option value="syllables">Syllables</option>
                  <option value="letters">Letters</option>
                </Select>
                <Select
                  value={comparator}
                  onChange={(e) => setComparator(e.target.value as Comparator)}
                >
                  <option value="=">=</option>
                  <option value=">">&gt;</option>
                  <option value="<">&lt;</option>
                </Select>
                <input
                  type="number"
                  min="1"
                  value={sizeValue}
                  onChange={(e) => setSizeValue(e.target.value)}
                  placeholder="Size"
                  className="flex-1 appearance-none rounded-xl border border-slate-200 bg-white/90 px-3 py-2 text-slate-900 shadow-sm hover:border-violet-300 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-violet-400 transition"
                />
              </div>
            </div>
          </div>

          <button
            onClick={handleGenerate}
            className="w-full mt-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-3 rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl"
          >
            Generate Word
          </button>
        </div>

        {/* Result card */}
        <div className="h-full min-h-[360px] md:min-h-[420px] rounded-2xl border border-violet-200/60 bg-white/70 backdrop-blur p-6 shadow-sm flex flex-col">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Result</h2>

          <div className="flex-1 rounded-xl border border-violet-200/50 bg-white/60 p-8 flex flex-col items-center justify-center">
            {error ? (
              <p className="text-red-500 text-center">{error}</p>
            ) : generatedWord ? (
              <div className="flex flex-col items-center gap-6 w-full">
                <p className="text-4xl font-bold text-gray-800 break-all text-center">
                  {generatedWord}
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={handleGenerate}
                    className="px-6 py-2 bg-purple-100 text-purple-700 font-medium rounded-lg hover:bg-purple-200 transition-colors"
                  >
                    Regenerate
                  </button>
                  <button
                    onClick={handleCopy}
                    className="px-6 py-2 bg-blue-100 text-blue-700 font-medium rounded-lg hover:bg-blue-200 transition-colors"
                  >
                    Copy
                  </button>
                </div>
              </div>
            ) : (
              <p className="text-gray-400 text-center">
                Click &quot;Generate Word&quot; to get started
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
