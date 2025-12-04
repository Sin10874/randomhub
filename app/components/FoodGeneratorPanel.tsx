'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Select from '@/app/components/ui/Select';
import { RotateCw, Settings2, UtensilsCrossed } from 'lucide-react';
import { foods, categories, type Food } from '@/app/data/foods';

export default function FoodGeneratorPanel() {
  const [category, setCategory] = useState('all');
  const [count, setCount] = useState(8);
  const [generatedFoods, setGeneratedFoods] = useState<Food[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const outputRef = useRef<HTMLDivElement>(null);

  // Auto-generate on page load
  useEffect(() => {
    handleGenerate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleGenerate = useCallback(() => {
    setIsGenerating(true);

    setTimeout(() => {
      // Filter foods by category
      const filteredFoods = category === 'all'
        ? foods
        : foods.filter(food => food.category === category);

      // Generate multiple unique foods
      const selected: Food[] = [];
      const available = [...filteredFoods];
      const targetCount = Math.min(count, available.length);

      for (let i = 0; i < targetCount; i++) {
        const randomIndex = Math.floor(Math.random() * available.length);
        selected.push(available[randomIndex]);
        available.splice(randomIndex, 1);
      }

      setGeneratedFoods(selected);
      setIsGenerating(false);
    }, 300);
  }, [category, count]);

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
    if (generatedFoods.length > 0 && outputRef.current) {
      setTimeout(() => {
        outputRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 300);
    }
  }, [generatedFoods]);

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
              {/* Category Filter */}
              <div>
                <label className="block text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">
                  Food Category
                </label>
                <Select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  {categories.map(cat => (
                    <option key={cat.value} value={cat.value}>{cat.label.toUpperCase()}</option>
                  ))}
                </Select>
              </div>

              {/* Count Input */}
              <div>
                <label className="block text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">
                  Number of Foods
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
                    Generate_Foods
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
              <UtensilsCrossed className="w-4 h-4" />
              <span>Generated Results</span>
              {generatedFoods.length > 0 && (
                <span className="ml-auto text-accent font-bold">{generatedFoods.length} foods</span>
              )}
            </div>

            {/* Food Cards Grid */}
            <div ref={outputRef} className="flex-1 overflow-auto">
              {generatedFoods.length === 0 ? (
                <div className="h-full flex items-center justify-center">
                  <div className="text-center text-zinc-400">
                    <UtensilsCrossed className="w-12 h-12 mx-auto mb-4 opacity-30" />
                    <p className="font-mono text-xs uppercase tracking-widest">No foods generated yet</p>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {generatedFoods.map((food) => (
                    <div
                      key={food.id}
                      className="bg-white border border-grid p-5 hover:border-accent hover:shadow-sm transition-all group"
                    >
                      {/* Food Name */}
                      <h3 className="font-display text-xl font-bold text-foreground mb-3 text-center tracking-tight">
                        {food.name}
                      </h3>

                      {/* Category Badge */}
                      <div className="flex justify-center">
                        <span className="inline-block bg-zinc-100 px-3 py-1 text-xs font-mono text-zinc-600 uppercase tracking-wider">
                          {food.category}
                        </span>
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
