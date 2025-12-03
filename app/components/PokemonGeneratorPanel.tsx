'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Select from '@/app/components/ui/Select';
import CheckboxGroup from '@/app/components/ui/CheckboxGroup';
import { RotateCw, Sparkles, Settings2, Zap } from 'lucide-react';
import { pokemon, regions, types, legendaryCategories, evolutionStages, fullyEvolvedOptions, formOptions, type Pokemon } from '@/app/data/pokemon';

// Helper function to get Pokemon image URL
const getPokemonImageUrl = (id: number): string => {
  // Use GitHub raw CDN - official PokeAPI sprites
  // High quality official artwork (~120-200KB per image)
  // Fast for global users (~100-500ms per image)
  // Note: May be slow when testing from China, but production users (overseas) will have fast loading
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
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

export default function PokemonGeneratorPanel() {
  const [region, setRegion] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');
  const [legendaryFilter, setLegendaryFilter] = useState('all');
  const [evolutionFilter, setEvolutionFilter] = useState('all');
  const [fullyEvolvedFilter, setFullyEvolvedFilter] = useState('all');
  const [formsFilter, setFormsFilter] = useState<string[]>(['alternateForm', 'mega', 'gigantamax']); // Default: all forms selected
  const [count, setCount] = useState(6);
  const [generatedPokemon, setGeneratedPokemon] = useState<Pokemon[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [imagesReady, setImagesReady] = useState(false);
  const outputRef = useRef<HTMLDivElement>(null);

  // Auto-generate on page load for better UX
  useEffect(() => {
    handleGenerate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleGenerate = useCallback(async () => {
    const perfStart = performance.now();
    console.log('🎯 [Performance] Generation started');

    setIsGenerating(true);
    setImagesReady(false);

    setTimeout(async () => {
      const filterStart = performance.now();

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

      // Fully evolved filter
      if (fullyEvolvedFilter !== 'all') {
        const isFullyEvolved = fullyEvolvedFilter === 'true';
        filtered = filtered.filter(p => p.fullyEvolved === isFullyEvolved);
      }

      // Forms filter (hierarchical)
      if (formsFilter.length > 0) {
        filtered = filtered.filter(p => {
          // If only 'alternateForm' is checked (no sub-types), show all Pokemon with ANY form
          if (formsFilter.includes('alternateForm') && formsFilter.length === 1) {
            return p.alternateForm === true || p.mega === true || p.gigantamax === true;
          }

          // If specific sub-types are checked (mega/gigantamax), show only those
          return formsFilter.some(form => {
            if (form === 'mega') return p.mega === true;
            if (form === 'gigantamax') return p.gigantamax === true;
            return false;
          });
        });
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

      const filterEnd = performance.now();
      console.log(`⚡ [Performance] Filtering took: ${(filterEnd - filterStart).toFixed(2)}ms`);
      console.log(`📊 [Performance] Filtered ${filtered.length} pokemon → Selected ${selected.length}`);

      setGeneratedPokemon(selected);

      // Preload images in background for smoother UX
      console.log('🖼️  [Performance] Starting image preload for', selected.length, 'images');
      const imageUrls = selected.map(p => getPokemonImageUrl(p.id));

      const imageLoadStart = performance.now();
      const imagePromises = imageUrls.map((url, index) => {
        return new Promise((resolve) => {
          const imgStart = performance.now();
          const img = new Image();
          img.onload = () => {
            const imgEnd = performance.now();
            console.log(`  ✅ Image ${index + 1}/${selected.length} loaded: ${(imgEnd - imgStart).toFixed(0)}ms - ${url.split('/').pop()}`);
            resolve({ success: true, time: imgEnd - imgStart });
          };
          img.onerror = () => {
            const imgEnd = performance.now();
            console.log(`  ❌ Image ${index + 1}/${selected.length} failed: ${(imgEnd - imgStart).toFixed(0)}ms`);
            resolve({ success: false, time: imgEnd - imgStart });
          };
          img.src = url;
        });
      });

      Promise.all(imagePromises).then((results) => {
        const imageLoadEnd = performance.now();
        const totalImageTime = imageLoadEnd - imageLoadStart;
        const successCount = results.filter(r => r.success).length;
        const avgTime = results.reduce((sum, r) => sum + r.time, 0) / results.length;

        console.log(`\n📈 [Performance Summary]`);
        console.log(`  Total time: ${(imageLoadEnd - perfStart).toFixed(0)}ms`);
        console.log(`  - Filtering: ${(filterEnd - filterStart).toFixed(0)}ms`);
        console.log(`  - Image loading: ${totalImageTime.toFixed(0)}ms`);
        console.log(`  - Images loaded: ${successCount}/${selected.length}`);
        console.log(`  - Avg per image: ${avgTime.toFixed(0)}ms`);
        console.log(`  - Slowest image: ${Math.max(...results.map(r => r.time)).toFixed(0)}ms`);
        console.log(`  - Fastest image: ${Math.min(...results.map(r => r.time)).toFixed(0)}ms\n`);

        setImagesReady(true);
      });

      setIsGenerating(false);
    }, 300);
  }, [region, typeFilter, legendaryFilter, evolutionFilter, fullyEvolvedFilter, formsFilter, count]);

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

              {/* Fully Evolved Filter */}
              <div>
                <label className="block text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">
                  Fully Evolved
                </label>
                <Select
                  value={fullyEvolvedFilter}
                  onChange={(e) => setFullyEvolvedFilter(e.target.value)}
                  className="w-full"
                >
                  {fullyEvolvedOptions.map(option => (
                    <option key={option.value} value={option.value}>{option.label.toUpperCase()}</option>
                  ))}
                </Select>
              </div>

              {/* Forms Filter (Hierarchical Checkboxes) */}
              <div>
                <label className="block text-xs font-mono text-zinc-500 uppercase tracking-widest mb-3">
                  Forms
                </label>
                <div className="space-y-2">
                  {/* Main toggle: Alternate Forms */}
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={formsFilter.includes('alternateForm')}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setFormsFilter(['alternateForm']);
                        } else {
                          setFormsFilter([]);
                        }
                      }}
                      className="w-4 h-4 border-2 border-zinc-300 rounded-sm checked:bg-accent checked:border-accent focus:ring-2 focus:ring-accent/20 cursor-pointer transition-all"
                    />
                    <span className="text-xs font-mono text-zinc-700 uppercase tracking-widest group-hover:text-accent transition-colors">
                      Alternate Forms
                    </span>
                  </label>

                  {/* Sub-options: Mega & Gigantamax (only enabled if Alternate Forms is checked) */}
                  <div className={`ml-6 space-y-2 ${!formsFilter.includes('alternateForm') ? 'opacity-40 pointer-events-none' : ''}`}>
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={formsFilter.includes('mega')}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setFormsFilter(prev => [...prev, 'mega']);
                          } else {
                            // Just remove mega, keep alternateForm (it includes other forms too)
                            setFormsFilter(prev => prev.filter(f => f !== 'mega'));
                          }
                        }}
                        disabled={!formsFilter.includes('alternateForm')}
                        className="w-4 h-4 border-2 border-zinc-300 rounded-sm checked:bg-accent checked:border-accent focus:ring-2 focus:ring-accent/20 cursor-pointer transition-all disabled:cursor-not-allowed"
                      />
                      <span className="text-xs font-mono text-zinc-700 uppercase tracking-widest group-hover:text-accent transition-colors">
                        Mega Evolutions
                      </span>
                    </label>

                    <label className="flex items-center gap-2 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={formsFilter.includes('gigantamax')}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setFormsFilter(prev => [...prev, 'gigantamax']);
                          } else {
                            // Just remove gigantamax, keep alternateForm (it includes other forms too)
                            setFormsFilter(prev => prev.filter(f => f !== 'gigantamax'));
                          }
                        }}
                        disabled={!formsFilter.includes('alternateForm')}
                        className="w-4 h-4 border-2 border-zinc-300 rounded-sm checked:bg-accent checked:border-accent focus:ring-2 focus:ring-accent/20 cursor-pointer transition-all disabled:cursor-not-allowed"
                      />
                      <span className="text-xs font-mono text-zinc-700 uppercase tracking-widest group-hover:text-accent transition-colors">
                        Gigantamax Forms
                      </span>
                    </label>
                  </div>
                </div>
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
                  {[1, 2, 3, 4, 5, 6].map(num => (
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
                    <span>Processing...</span>
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
                          <div className="absolute inset-0 flex items-center justify-center bg-zinc-100/50 z-20">
                            <RotateCw className="w-6 h-6 animate-spin text-zinc-400" />
                          </div>
                        )}
                        <img
                          src={getPokemonImageUrl(poke.id)}
                          alt={poke.name}
                          className={`relative z-10 w-full h-full object-contain p-2 group-hover:scale-110 transition-all duration-300 ${!imagesReady ? 'opacity-0 scale-90' : 'opacity-100 scale-100'}`}
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
