'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import { Shuffle, Copy, Check, Eye, EyeOff, Settings2, Drama } from 'lucide-react';
import { charadesData, type CharadesDifficulty, type CharadesCategory } from '@/app/data/charades';

interface GeneratedCharade {
  id: string;
  word: string;
  difficulty: CharadesDifficulty;
  category: CharadesCategory;
  isRevealed: boolean;
}

export default function CharadesGeneratorPanel() {
  const [difficulty, setDifficulty] = useState<CharadesDifficulty | 'all'>('medium');
  const [category, setCategory] = useState<CharadesCategory>('all');
  const [count, setCount] = useState(1);
  const [generatedCharades, setGeneratedCharades] = useState<GeneratedCharade[]>([]);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [copiedAll, setCopiedAll] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const outputRef = useRef<HTMLDivElement>(null);

  const generateCharades = useCallback(() => {
    setIsGenerating(true);

    setTimeout(() => {
      let filtered = [...charadesData];

      // Filter by difficulty
      if (difficulty !== 'all') {
        filtered = filtered.filter(item => item.difficulty === difficulty);
      }

      // Filter by category
      if (category !== 'all') {
        filtered = filtered.filter(item => item.category === category);
      }

      if (filtered.length === 0) {
        setGeneratedCharades([]);
        setIsGenerating(false);
        return;
      }

      // Shuffle and pick random items
      const shuffled = [...filtered].sort(() => Math.random() - 0.5);
      const selected = shuffled.slice(0, Math.min(count, shuffled.length));

      // Create generated charades with unique IDs
      const generated = selected.map((item, index) => ({
        id: `charade-${Date.now()}-${index}`,
        word: item.word,
        difficulty: item.difficulty,
        category: item.category,
        isRevealed: true,
      }));

      setGeneratedCharades(generated);
      setIsGenerating(false);
    }, 200);
  }, [difficulty, category, count]);

  const toggleReveal = (id: string) => {
    setGeneratedCharades(prev =>
      prev.map(item =>
        item.id === id ? { ...item, isRevealed: !item.isRevealed } : item
      )
    );
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const copyAll = () => {
    const allWords = generatedCharades.map(item => item.word).join('\n');
    navigator.clipboard.writeText(allWords);
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 2000);
  };

  const getDifficultyColor = (diff: CharadesDifficulty) => {
    switch (diff) {
      case 'easy':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'medium':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'hard':
        return 'bg-orange-100 text-orange-700 border-orange-200';
      case 'really-hard':
        return 'bg-red-100 text-red-700 border-red-200';
      default:
        return 'bg-zinc-100 text-zinc-700 border-zinc-200';
    }
  };

  const formatCategory = (cat: string) => {
    return cat.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  // Scroll to output when results are generated
  useEffect(() => {
    if (generatedCharades.length > 0 && outputRef.current) {
      setTimeout(() => {
        outputRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 300);
    }
  }, [generatedCharades]);

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="text-center mb-8 md:mb-12">
        <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 uppercase tracking-tight">
          Charades<br className="sm:hidden" /> Generator
        </h1>
        <p className="text-zinc-500 font-mono text-sm uppercase tracking-widest">
          Party Game Word Engine // v1.0
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
              {/* Difficulty Level */}
              <div>
                <label className="block text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">
                  Difficulty Level
                </label>
                <select
                  value={difficulty}
                  onChange={(e) => setDifficulty(e.target.value as CharadesDifficulty | 'all')}
                  className="w-full bg-white border border-zinc-300 p-3 text-sm font-mono text-foreground focus:border-accent focus:ring-1 focus:ring-accent appearance-none rounded-none"
                >
                  <option value="all">ALL_LEVELS</option>
                  <option value="easy">EASY</option>
                  <option value="medium">MEDIUM</option>
                  <option value="hard">HARD</option>
                  <option value="really-hard">REALLY_HARD</option>
                </select>
              </div>

              {/* Category */}
              <div>
                <label className="block text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">
                  Category Type
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as CharadesCategory)}
                  className="w-full bg-white border border-zinc-300 p-3 text-sm font-mono text-foreground focus:border-accent focus:ring-1 focus:ring-accent appearance-none rounded-none"
                >
                  <option value="all">ALL_CATEGORIES</option>
                  <option value="movies">MOVIES</option>
                  <option value="tv-shows">TV_SHOWS</option>
                  <option value="books">BOOKS</option>
                  <option value="songs">SONGS</option>
                  <option value="actions">ACTIONS</option>
                  <option value="objects">OBJECTS</option>
                  <option value="famous-people">FAMOUS_PEOPLE</option>
                </select>
              </div>

              {/* Count */}
              <div>
                <label className="block text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">
                  Output Quantity
                </label>
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={count}
                  onChange={(e) => setCount(Math.min(10, Math.max(1, parseInt(e.target.value) || 1)))}
                  className="w-full bg-white border border-zinc-300 p-3 text-center font-mono text-foreground focus:border-accent focus:ring-1 focus:ring-accent rounded-none"
                />
                <p className="text-[10px] font-mono text-zinc-400 mt-2 text-right uppercase tracking-wider">Max: 10 units</p>
              </div>
            </div>

            {/* Generate Button */}
            <div className="mt-8 pt-6 border-t border-zinc-100">
              <button
                onClick={generateCharades}
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
                <Drama className="w-4 h-4" />
                <span>Output</span>
                {generatedCharades.length > 0 && (
                  <span className="text-zinc-400 ml-2">// {generatedCharades.length} {generatedCharades.length === 1 ? 'word' : 'words'}</span>
                )}
              </div>
              {generatedCharades.length > 0 && (
                <button
                  onClick={copyAll}
                  className="px-3 py-1.5 border border-zinc-300 hover:bg-white font-mono text-[10px] uppercase tracking-wider transition-all flex items-center gap-2 bg-white rounded-none"
                >
                  {copiedAll ? (
                    <>
                      <Check className="w-3 h-3" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      Copy All
                    </>
                  )}
                </button>
              )}
            </div>

            {/* Empty State */}
            {generatedCharades.length === 0 && (
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 border-2 border-dashed border-zinc-300 mb-4">
                    <Drama className="w-10 h-10 text-zinc-300" />
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

            {/* Results Grid */}
            {generatedCharades.length > 0 && (
              <div className="flex-1 overflow-y-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {generatedCharades.map((item, index) => (
                    <div
                      key={item.id}
                      className="group relative border border-zinc-300 bg-white hover:border-accent transition-all rounded-none"
                    >
                      {/* Card Header */}
                      <div className="border-b border-zinc-200 px-4 py-2 bg-zinc-50 flex items-center justify-between">
                        <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-wider">
                          #{String(index + 1).padStart(2, '0')}
                        </span>
                        <div className={`px-2 py-0.5 text-[9px] font-mono uppercase tracking-wider border ${getDifficultyColor(item.difficulty)}`}>
                          {item.difficulty.replace('-', ' ')}
                        </div>
                      </div>

                      {/* Card Body */}
                      <div className="p-4">
                        {/* Word Display */}
                        <div className="mb-3 min-h-[3.5rem] flex items-center justify-center">
                          {item.isRevealed ? (
                            <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground text-center leading-tight">
                              {item.word}
                            </h3>
                          ) : (
                            <div className="w-full space-y-2">
                              <div className="h-2 bg-zinc-200 w-3/4 mx-auto"></div>
                              <div className="h-2 bg-zinc-200 w-1/2 mx-auto"></div>
                            </div>
                          )}
                        </div>

                        {/* Category */}
                        <p className="font-mono text-[10px] uppercase tracking-wider text-zinc-400 text-center mb-3">
                          {formatCategory(item.category)}
                        </p>

                        {/* Actions */}
                        <div className="flex gap-2">
                          <button
                            onClick={() => toggleReveal(item.id)}
                            className="flex-1 px-3 py-2 border border-zinc-300 hover:bg-zinc-50 font-mono text-[10px] uppercase tracking-wider transition-all flex items-center justify-center gap-2 rounded-none"
                          >
                            {item.isRevealed ? (
                              <>
                                <EyeOff className="w-3 h-3" />
                                Hide
                              </>
                            ) : (
                              <>
                                <Eye className="w-3 h-3" />
                                Reveal
                              </>
                            )}
                          </button>
                          <button
                            onClick={() => copyToClipboard(item.word, item.id)}
                            disabled={!item.isRevealed}
                            className={`px-3 py-2 border border-zinc-300 hover:bg-zinc-50 font-mono text-[10px] transition-all flex items-center gap-2 rounded-none ${!item.isRevealed ? 'opacity-50 cursor-not-allowed' : ''}`}
                            title="Copy"
                          >
                            {copiedId === item.id ? (
                              <Check className="w-3 h-3" />
                            ) : (
                              <Copy className="w-3 h-3" />
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* How to Play Section */}
      <div className="mt-12 swiss-card p-6 sm:p-8 bg-white">
        <h2 className="font-display text-2xl font-bold mb-6 flex items-center text-foreground">
          <span className="w-2 h-8 bg-accent mr-3"></span>
          How to Play Charades
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-mono font-bold text-foreground mb-3 uppercase tracking-wider text-sm">Basic Rules</h3>
            <ul className="space-y-2 text-zinc-600 text-sm">
              <li className="flex gap-2">
                <span className="text-accent font-bold">•</span>
                <span>One player acts out the word without speaking</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold">•</span>
                <span>Other players guess the word within the time limit</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold">•</span>
                <span>No sounds, pointing at objects, or mouthing words</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold">•</span>
                <span>Use gestures and body movements only</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-mono font-bold text-foreground mb-3 uppercase tracking-wider text-sm">Common Gestures</h3>
            <ul className="space-y-2 text-zinc-600 text-sm">
              <li className="flex gap-2">
                <span className="text-accent font-bold">•</span>
                <span>Movie: Pretend to crank an old movie camera</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold">•</span>
                <span>Book: Open palms like opening a book</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold">•</span>
                <span>Song: Pretend to sing into a microphone</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold">•</span>
                <span>Number of words: Hold up fingers</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
