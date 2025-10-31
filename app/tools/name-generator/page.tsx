'use client';

import { useState, useMemo } from 'react';
import Navbar from '@/app/components/Navbar';
import Link from 'next/link';
import Select from '@/app/components/ui/Select';
import { generateNames, type NameCategory, type Gender } from '@/app/utils/nameGenerator';
import { Copy, Check, Loader2, RotateCw } from 'lucide-react';

type NameType = 'real' | 'fantasy';

const REAL_NAME_SUBCATEGORIES: { value: NameCategory; label: string }[] = [
  { value: 'anywhere', label: 'Anywhere' },
  { value: 'american', label: 'America' },
  { value: 'australian', label: 'Australia' },
  { value: 'brazilian', label: 'Brazil' },
  { value: 'british', label: 'Britain' },
  { value: 'canadian', label: 'Canada' },
  { value: 'chinese', label: 'China' },
  { value: 'danish', label: 'Denmark' },
  { value: 'dutch', label: 'Netherlands' },
  { value: 'french', label: 'France' },
  { value: 'german', label: 'Germany' },
  { value: 'indian', label: 'India' },
  { value: 'iranian', label: 'Iran' },
  { value: 'japanese', label: 'Japan' },
  { value: 'mexican', label: 'Mexico' },
  { value: 'spanish', label: 'Spain' },
  { value: 'swiss', label: 'Switzerland' },
  { value: 'turkish', label: 'Turkey' },
];

const FANTASY_NAME_SUBCATEGORIES: { value: NameCategory; label: string }[] = [
  { value: 'dragon', label: 'Dragon' },
  { value: 'elf', label: 'Elf' },
  { value: 'wizard', label: 'Wizard' },
  { value: 'robot', label: 'Robot' },
];

export default function NameGeneratorPage() {
  const [nameType, setNameType] = useState<NameType>('real');
  const [category, setCategory] = useState<NameCategory>('anywhere');
  const [gender, setGender] = useState<Gender>('both');
  const [count, setCount] = useState(5);
  const [startsWith, setStartsWith] = useState('');
  const [generatedNames, setGeneratedNames] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [copiedAll, setCopiedAll] = useState(false);

  // Get available subcategories based on name type
  const availableSubcategories = useMemo(() => {
    return nameType === 'real' ? REAL_NAME_SUBCATEGORIES : FANTASY_NAME_SUBCATEGORIES;
  }, [nameType]);

  // Update category when name type changes
  const handleNameTypeChange = (newType: NameType) => {
    setNameType(newType);
    // Reset to first subcategory of the new type
    const firstSubcategory = newType === 'real' 
      ? REAL_NAME_SUBCATEGORIES[0].value 
      : FANTASY_NAME_SUBCATEGORIES[0].value;
    setCategory(firstSubcategory);
  };

  // Check if current category is fantasy (doesn't use gender)
  const isFantasyCategory = ['dragon', 'elf', 'wizard', 'robot'].includes(category);

  const handleGenerate = async () => {
    setLoading(true);
    setError(null);
    setCopiedIndex(null);
    setCopiedAll(false);

    try {
      const names = await generateNames({
        category,
        gender,
        count,
        startsWith: startsWith.trim(),
      });
      setGeneratedNames(names);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to generate names');
      setGeneratedNames([]);
    } finally {
      setLoading(false);
    }
  };

  const handleCopyName = (name: string, index: number) => {
    navigator.clipboard.writeText(name);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleCopyAll = () => {
    const allNames = generatedNames.join('\n');
    navigator.clipboard.writeText(allNames);
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white drop-shadow-2xl mb-4 tracking-tight">
            Random Name Generator
          </h1>
          <p className="text-lg text-white/90 drop-shadow-lg max-w-2xl mx-auto">
            Generate random names from various categories - real names and fantasy characters
          </p>
        </div>

        {/* Main Panel */}
        <div className="w-full max-w-5xl mx-auto bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {/* Settings Card */}
            <div className="h-full min-h-[400px] rounded-2xl border border-pink-200/60 bg-white/70 backdrop-blur p-6 shadow-sm flex flex-col">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">Settings</h2>

              <div className="space-y-4 flex-1">
                {/* Two-Level Category Selection */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Generate
                  </label>
                  <div className="flex items-center gap-3">
                    {/* First Level: Name Type */}
                    <div className="flex-1">
                      <Select
                        value={nameType}
                        onChange={(e) => handleNameTypeChange(e.target.value as NameType)}
                      >
                        <option value="real">Real Names</option>
                        <option value="fantasy">Fantasy Names</option>
                      </Select>
                    </div>
                    
                    {/* Connector text */}
                    <span className="text-sm text-slate-600 font-medium whitespace-nowrap">
                      From
                    </span>
                    
                    {/* Second Level: Subcategory */}
                    <div className="flex-1">
                      <Select
                        value={category}
                        onChange={(e) => setCategory(e.target.value as NameCategory)}
                      >
                        {availableSubcategories.map((sub) => (
                          <option key={sub.value} value={sub.value}>
                            {sub.label}
                          </option>
                        ))}
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Gender Selection (only for real names) */}
                {!isFantasyCategory && (
                  <Select
                    label="Gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value as Gender)}
                  >
                    <option value="both">Both</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </Select>
                )}

                {/* Count */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Number of Names
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="20"
                    value={count}
                    onChange={(e) => setCount(Math.min(20, Math.max(1, parseInt(e.target.value) || 1)))}
                    className="w-full appearance-none rounded-xl border border-slate-200 bg-white/90 px-3 py-2 text-slate-900 shadow-sm hover:border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition"
                  />
                </div>

                {/* Starts With (only for fantasy names) */}
                {isFantasyCategory && (
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
                      className="w-full appearance-none rounded-xl border border-slate-200 bg-white/90 px-3 py-2 text-slate-900 shadow-sm hover:border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition"
                    />
                  </div>
                )}
              </div>

              {/* Generate Button */}
              <button
                onClick={handleGenerate}
                disabled={loading}
                className="w-full mt-6 bg-gradient-to-r from-pink-600 to-rose-600 text-white font-semibold py-3 rounded-xl hover:from-pink-700 hover:to-rose-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Generating...
                  </>
                ) : (
                  'Generate Names'
                )}
              </button>
            </div>

            {/* Results Card */}
            <div className="h-full min-h-[400px] rounded-2xl border border-pink-200/60 bg-white/70 backdrop-blur p-6 shadow-sm flex flex-col">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">Results</h2>

              <div className="flex-1 rounded-xl border border-pink-200/50 bg-white/60 p-4 overflow-y-auto mb-4">
                {loading ? (
                  <div className="flex items-center justify-center h-full">
                    <Loader2 className="w-8 h-8 animate-spin text-pink-600" />
                  </div>
                ) : error ? (
                  <div className="flex items-center justify-center h-full">
                    <p className="text-red-500 text-center">{error}</p>
                  </div>
                ) : generatedNames.length > 0 ? (
                  <div className="space-y-2">
                    {generatedNames.map((name, index) => (
                      <div
                        key={index}
                        className="group flex items-center justify-between bg-white/80 rounded-lg px-4 py-3 hover:bg-pink-50/80 transition-colors border border-pink-100/50"
                      >
                        <span className="text-gray-800 font-medium">{name}</span>
                        <button
                          onClick={() => handleCopyName(name, index)}
                          className="opacity-0 group-hover:opacity-100 transition-opacity p-1.5 hover:bg-pink-100 rounded"
                          aria-label="Copy name"
                        >
                          {copiedIndex === index ? (
                            <Check className="w-4 h-4 text-green-600" />
                          ) : (
                            <Copy className="w-4 h-4 text-gray-600" />
                          )}
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <p className="text-gray-400 text-center">
                      Click &quot;Generate Names&quot; to get started
                    </p>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              {generatedNames.length > 0 && !loading && (
                <div className="flex gap-3 justify-center">
                  <button
                    onClick={handleGenerate}
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-pink-600 text-white font-semibold rounded-xl hover:from-pink-600 hover:to-pink-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    <RotateCw className="w-4 h-4" />
                    Regenerate
                  </button>
                  <button
                    onClick={handleCopyAll}
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-rose-500 to-rose-600 text-white font-semibold rounded-xl hover:from-rose-600 hover:to-rose-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    {copiedAll ? (
                      <>
                        <Check className="w-4 h-4" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        Copy All
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Back to Home Link */}
        <div className="text-center">
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-white/90 backdrop-blur-sm text-pink-700 font-semibold rounded-lg hover:bg-white transition-all shadow-lg"
          >
            Back to Home
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white/10 backdrop-blur-sm py-6 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/80 text-sm">
            © 2025 RandomHub. Built with Next.js & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}
