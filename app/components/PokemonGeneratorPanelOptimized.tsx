'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Select from '@/app/components/ui/Select';
import { RotateCw, Sparkles, Settings2, Zap } from 'lucide-react';
import { pokemon, regions, types, legendaryCategories, evolutionStages, type Pokemon } from '@/app/data/pokemon';

// Helper function to get Pokemon image URL with multiple quality options
const getPokemonImageUrl = (id: number, quality: 'high' | 'medium' | 'low' = 'high'): string => {
  // PokeAPI provides different sprite versions:
  // - official-artwork: High quality (~200KB each)
  // - home: Medium quality 3D renders
  // - sprites: Low quality pixel art (~5KB each)

  const baseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon';

  switch (quality) {
    case 'high':
      return `${baseUrl}/other/official-artwork/${id}.png`;
    case 'medium':
      return `${baseUrl}/other/home/${id}.png`;
    case 'low':
      return `${baseUrl}/${id}.png`;
    default:
      return `${baseUrl}/other/official-artwork/${id}.png`;
  }
};

// Helper function to preload images
const preloadImage = (url: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = url;
  });
};

// Helper function to get Pokemon type emoji
const getTypeEmoji = (type: string): string => {
  const typeEmojis: Record<string, string> = {
    normal: '⚪',
    fire: '🔥',
    water: '💧',
    electric: '⚡',
    grass: '🌿',
    ice: '❄️',
    fighting: '🥊',
    poison: '☠️',
    ground: '⛰️',
    flying: '🦋',
    psychic: '🔮',
    bug: '🐛',
    rock: '🪨',
    ghost: '👻',
    dragon: '🐉',
    dark: '🌑',
    steel: '⚙️',
    fairy: '✨',
  };
  return typeEmojis[type] || '⚪';
};

// Helper function to get Pokemon badge color
const getTypeBadgeColor = (type: string): string => {
  const colors: Record<string, string> = {
    normal: 'bg-zinc-400/20 text-zinc-700',
    fire: 'bg-orange-500/20 text-orange-700',
    water: 'bg-blue-500/20 text-blue-700',
    electric: 'bg-yellow-500/20 text-yellow-700',
    grass: 'bg-green-500/20 text-green-700',
    ice: 'bg-cyan-400/20 text-cyan-700',
    fighting: 'bg-red-600/20 text-red-800',
    poison: 'bg-purple-500/20 text-purple-700',
    ground: 'bg-amber-600/20 text-amber-800',
    flying: 'bg-indigo-400/20 text-indigo-700',
    psychic: 'bg-pink-500/20 text-pink-700',
    bug: 'bg-lime-500/20 text-lime-700',
    rock: 'bg-stone-500/20 text-stone-700',
    ghost: 'bg-violet-500/20 text-violet-700',
    dragon: 'bg-indigo-600/20 text-indigo-800',
    dark: 'bg-zinc-700/20 text-zinc-900',
    steel: 'bg-slate-500/20 text-slate-700',
    fairy: 'bg-pink-300/20 text-pink-600',
  };
  return colors[type] || 'bg-zinc-400/20 text-zinc-700';
};

export default function PokemonGeneratorPanelOptimized() {
  const [region, setRegion] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');
  const [legendaryFilter, setLegendaryFilter] = useState('all');
  const [evolutionFilter, setEvolutionFilter] = useState('all');
  const [count, setCount] = useState(6);
  const [generatedPokemon, setGeneratedPokemon] = useState<Pokemon[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [imageQuality, setImageQuality] = useState<'high' | 'medium' | 'low'>('high');
  const [loadingStats, setLoadingStats] = useState({ total: 0, loaded: 0, failed: 0, startTime: 0, endTime: 0 });
  const [imagesReady, setImagesReady] = useState(false);
  const outputRef = useRef<HTMLDivElement>(null);

  // Auto-generate on page load with performance tracking
  useEffect(() => {
    handleGenerate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleGenerate = useCallback(async () => {
    setIsGenerating(true);
    setImagesReady(false);

    setTimeout(async () => {
      // Apply all filters
      let filtered = pokemon;

      // Region filter
      if (region !== 'all') {
        filtered = filtered.filter(p => p.region === region);
      }

      // Type filter
      if (typeFilter !== 'all') {
        filtered = filtered.filter(p => p.types.includes(typeFilter));
      }

      // Legendary filter
      if (legendaryFilter !== 'all') {
        filtered = filtered.filter(p => p.legendary === legendaryFilter);
      }

      // Evolution filter
      if (evolutionFilter !== 'all') {
        filtered = filtered.filter(p => p.evolution === evolutionFilter);
      }

      // Generate multiple unique pokemon
      const selected: Pokemon[] = [];
      const available = [...filtered];
      const targetCount = Math.min(count, available.length);

      for (let i = 0; i < targetCount; i++) {
        const randomIndex = Math.floor(Math.random() * available.length);
        selected.push(available[randomIndex]);
        available.splice(randomIndex, 1);
      }

      setGeneratedPokemon(selected);

      // Performance tracking: Preload images
      const startTime = performance.now();
      setLoadingStats({ total: selected.length, loaded: 0, failed: 0, startTime, endTime: 0 });

      const imagePromises = selected.map(async (poke) => {
        try {
          await preloadImage(getPokemonImageUrl(poke.id, imageQuality));
          setLoadingStats(prev => ({ ...prev, loaded: prev.loaded + 1 }));
        } catch {
          setLoadingStats(prev => ({ ...prev, failed: prev.failed + 1 }));
        }
      });

      await Promise.all(imagePromises);

      const endTime = performance.now();
      setLoadingStats(prev => ({ ...prev, endTime }));
      setImagesReady(true);
      setIsGenerating(false);

      // Log performance metrics
      console.log('🎯 Pokemon Generation Performance:');
      console.log(`   Total Pokemon: ${selected.length}`);
      console.log(`   Images Loaded: ${selected.length} (${imageQuality} quality)`);
      console.log(`   Total Time: ${(endTime - startTime).toFixed(2)}ms`);
      console.log(`   Avg per Image: ${((endTime - startTime) / selected.length).toFixed(2)}ms`);
    }, 300);
  }, [region, typeFilter, legendaryFilter, evolutionFilter, count, imageQuality]);

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
    if (generatedPokemon.length > 0 && outputRef.current) {
      setTimeout(() => {
        outputRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 300);
    }
  }, [generatedPokemon]);

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Performance Stats Banner */}
      {loadingStats.endTime > 0 && (
        <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded">
          <div className="text-xs font-mono space-y-1">
            <div className="flex justify-between">
              <span className="text-green-700">📊 Performance Metrics:</span>
              <span className="text-green-900 font-bold">{(loadingStats.endTime - loadingStats.startTime).toFixed(0)}ms total</span>
            </div>
            <div className="text-green-600">
              {loadingStats.total} images loaded •
              {((loadingStats.endTime - loadingStats.startTime) / loadingStats.total).toFixed(0)}ms avg •
              Quality: {imageQuality.toUpperCase()}
            </div>
          </div>
        </div>
      )}

      {/* Main Panel */}
      <div className="swiss-card bg-panel border-grid shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[400px] lg:min-h-[600px]">

          {/* Settings Panel - Left Side */}
          <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-grid p-4 sm:p-6 lg:p-8 bg-white flex flex-col">
            <div className="flex items-center gap-2 mb-8 text-accent font-mono text-xs uppercase tracking-widest">
              <Settings2 className="w-4 h-4" />
              <span>Configuration</span>
            </div>

            <div className="space-y-6 flex-1 overflow-y-auto custom-scrollbar pr-2 max-h-[500px]">
              {/* Image Quality Selector - NEW */}
              <div>
                <label className="block text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">
                  Image Quality (Performance Test)
                </label>
                <Select
                  value={imageQuality}
                  onChange={(e) => setImageQuality(e.target.value as 'high' | 'medium' | 'low')}
                  className="w-full"
                >
                  <option value="high">HIGH (~200KB/img)</option>
                  <option value="medium">MEDIUM (~50KB/img)</option>
                  <option value="low">LOW (~5KB/img)</option>
                </Select>
              </div>

              {/* Region Filter */}
              <div>
                <label className="block text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">
                  Region
                </label>
                <Select
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                  className="w-full"
                >
                  {regions.map(r => (
                    <option key={r.value} value={r.value}>{r.label.toUpperCase()}</option>
                  ))}
                </Select>
              </div>

              {/* Type Filter */}
              <div>
                <label className="block text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">
                  Type
                </label>
                <Select
                  value={typeFilter}
                  onChange={(e) => setTypeFilter(e.target.value)}
                  className="w-full"
                >
                  {types.map(t => (
                    <option key={t.value} value={t.value}>{t.label.toUpperCase()}</option>
                  ))}
                </Select>
              </div>

              {/* Legendary Filter */}
              <div>
                <label className="block text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">
                  Category
                </label>
                <Select
                  value={legendaryFilter}
                  onChange={(e) => setLegendaryFilter(e.target.value)}
                  className="w-full"
                >
                  {legendaryCategories.map(cat => (
                    <option key={cat.value} value={cat.value}>{cat.label.toUpperCase()}</option>
                  ))}
                </Select>
              </div>

              {/* Evolution Filter */}
              <div>
                <label className="block text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">
                  Evolution Stage
                </label>
                <Select
                  value={evolutionFilter}
                  onChange={(e) => setEvolutionFilter(e.target.value)}
                  className="w-full"
                >
                  {evolutionStages.map(stage => (
                    <option key={stage.value} value={stage.value}>{stage.label.toUpperCase()}</option>
                  ))}
                </Select>
              </div>

              {/* Count Selector */}
              <div>
                <label className="block text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">
                  Number of Pokémon
                </label>
                <Select
                  value={count.toString()}
                  onChange={(e) => setCount(parseInt(e.target.value))}
                  className="w-full"
                >
                  {[1, 2, 3, 4, 5, 6, 12, 18].map(num => (
                    <option key={num} value={num}>{num} Pokémon</option>
                  ))}
                </Select>
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
                    <span>Loading Images...</span>
                  </>
                ) : (
                  <>
                    <span className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out mix-blend-screen"></span>
                    <span className="relative z-10 flex items-center gap-2">
                      Generate_Pokemon
                    </span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Results Panel - Right Side */}
          <div className="lg:col-span-8 bg-zinc-50/50 p-4 sm:p-6 lg:p-8 relative flex flex-col">
             {/* Background Grid Accent */}
            <div className="absolute inset-0 pointer-events-none" style={{
              backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }}></div>

            <div className="flex items-center justify-between mb-6 z-10">
              <div className="flex items-center gap-2 text-accent font-mono text-xs uppercase tracking-widest">
                <Zap className="w-4 h-4" />
                <span>Pokédex_Stream</span>
              </div>
              {generatedPokemon.length > 0 && (
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-white border border-zinc-200 text-[10px] font-mono text-zinc-500 shadow-sm">
                    COUNT: {generatedPokemon.length}
                  </span>
                </div>
              )}
            </div>

            <div className="flex-1 z-10" ref={outputRef}>
              {generatedPokemon.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-zinc-300">
                  <Sparkles className="w-12 h-12 mb-4 opacity-20" />
                  <p className="font-mono text-sm uppercase tracking-widest opacity-50">Ready to Initialize</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 overflow-y-auto custom-scrollbar max-h-[500px] pr-2">
                  {generatedPokemon.map((poke, index) => (
                    <div
                      key={`${poke.id}-${index}`}
                      className="bg-white border border-zinc-200 p-4 hover:border-accent hover:shadow-sm transition-all group cursor-default"
                    >
                      {/* Pokemon ID Badge */}
                      <div className="flex justify-between items-start mb-3">
                        <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
                          #{poke.id.toString().padStart(4, '0')}
                        </span>
                        {poke.legendary !== 'none' && (
                          <span className="text-xs px-2 py-0.5 bg-accent/10 text-accent font-mono uppercase tracking-wider border border-accent/20">
                            {poke.legendary === 'sub-legendary' ? 'SUB' : poke.legendary === 'ultra-beast' ? 'UB' : poke.legendary.substring(0, 3)}
                          </span>
                        )}
                      </div>

                      {/* Pokemon Image */}
                      <div className="aspect-square bg-gradient-to-br from-zinc-50 to-zinc-100 border border-zinc-100 mb-3 flex items-center justify-center group-hover:from-accent/5 group-hover:to-accent/10 transition-colors relative overflow-hidden">
                        <div className="absolute inset-0 opacity-5" style={{
                          backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)',
                          backgroundSize: '10px 10px'
                        }}></div>
                        {!imagesReady && (
                          <div className="absolute inset-0 flex items-center justify-center bg-zinc-100/80 z-20">
                            <RotateCw className="w-8 h-8 animate-spin text-zinc-400" />
                          </div>
                        )}
                        <img
                          src={getPokemonImageUrl(poke.id, imageQuality)}
                          alt={poke.name}
                          className={`relative z-10 w-full h-full object-contain p-2 group-hover:scale-110 transition-transform duration-300 ${!imagesReady ? 'opacity-0' : 'opacity-100'}`}
                          loading="eager"
                          onError={(e) => {
                            // Fallback to a placeholder emoji if image fails to load
                            e.currentTarget.style.display = 'none';
                            const fallback = e.currentTarget.nextElementSibling;
                            if (fallback) fallback.classList.remove('hidden');
                          }}
                        />
                        <div className="hidden relative z-10 text-5xl opacity-40">
                          ⚡
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-display font-bold text-foreground text-base group-hover:text-accent transition-colors">
                          {poke.name}
                        </h3>

                        {/* Type Badges */}
                        <div className="flex gap-1.5 flex-wrap">
                          {poke.types.map(type => (
                            <span
                              key={type}
                              className={`text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 border ${getTypeBadgeColor(type)}`}
                            >
                              {getTypeEmoji(type)} {type}
                            </span>
                          ))}
                        </div>

                        {/* Region Badge */}
                        <div className="pt-2 border-t border-zinc-100">
                          <span className="text-[9px] font-mono uppercase tracking-wider text-zinc-400">
                            {poke.region}
                          </span>
                        </div>
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
