'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Select from '@/app/components/ui/Select';
import { RotateCw, Sparkles, Settings2, PawPrint } from 'lucide-react';
import { animals, categories, type Animal } from '@/app/data/animals';

// Helper function to get emoji for animal
const getAnimalEmoji = (animalName: string): string => {
  const emojiMap: Record<string, string> = {
    // Mammals
    'Lion': '🦁', 'Tiger': '🐯', 'Bear': '🐻', 'Elephant': '🐘', 'Giraffe': '🦒',
    'Zebra': '🦓', 'Panda': '🐼', 'Giant panda': '🐼', 'Koala': '🐨', 'Monkey': '🐵',
    'Gorilla': '🦍', 'Dog': '🐕', 'Cat': '🐈', 'Fox': '🦊', 'Arctic fox': '🦊',
    'Wolf': '🐺', 'Arctic wolf': '🐺', 'Rabbit': '🐇', 'Horse': '🐴', 'Cow': '🐄',
    'Pig': '🐷', 'Boar (wild pig)': '🐗', 'Sheep': '🐑', 'Goat': '🐐', 'Camel': '🐪',
    'Deer': '🦌', 'Kangaroo': '🦘', 'Rhinoceros': '🦏', 'Hippopotamus': '🦛',
    'Mouse': '🐭', 'Hamster': '🐹', 'Raccoon': '🦝', 'Otter': '🦦', 'Skunk': '🦨',
    'Badger': '🦡', 'Sloth': '🦥', 'Leopard': '🐆', 'African leopard': '🐆',
    'Cheetah': '🐆', 'Llama': '🦙', 'Buffalo': '🐃', 'African buffalo': '🐃',
    'Bison': '🦬', 'Rat': '🐀', 'Squirrel': '🐿️', 'Hedgehog': '🦔', 'Chipmunk': '🐿️',

    // Birds
    'Eagle': '🦅', 'Bald eagle': '🦅', 'Owl': '🦉', 'Duck': '🦆', 'Chicken': '🐔',
    'Penguin': '🐧', 'Parrot': '🦜', 'Flamingo': '🦩', 'Peacock': '🦚', 'Swan': '🦢',
    'Turkey': '🦃', 'Dove': '🕊️', 'Crow': '🐦‍⬛', 'Blackbird': '🐦‍⬛', 'Robin': '🐦',
    'American robin': '🐦', 'Blue jay': '🐦', 'Blue bird': '🐦', 'Cardinal': '🐦',
    'Rooster': '🐓', 'Goose': '🦆', 'Canada goose': '🦆', 'Seagull': '🦅',
    'Pelican': '🦜', 'Toucan': '🦜', 'Hummingbird': '🐦', 'Woodpecker': '🐦',
    'Falcon': '🦅', 'Hawk': '🦅', 'Vulture': '🦅', 'Ostrich': '🐦', 'Emu': '🦆',
    'Stork': '🦩', 'Crane': '🦩', 'Heron': '🦩', 'Sparrow': '🐦', 'Finch': '🐦',
    'Pigeon': '🕊️', 'Macaw': '🦜', 'Pheasant': '🦃', 'Quail': '🐦', 'Puffin': '🐧',
    'Swallow': '🐦', 'Warbler': '🐦', 'Wren': '🐦', 'Condor': '🦅', 'Kite': '🦅',
    'Osprey': '🦅', 'Loon': '🦆', 'Jay': '🐦', 'Raven': '🐦‍⬛', 'Magpie': '🐦',
    'Kingfisher': '🐦', 'Nightingale': '🐦', 'Thrush': '🐦', 'Lark': '🐦',

    // Reptiles & Amphibians
    'Crocodile': '🐊', 'Alligator': '🐊', 'Snake': '🐍', 'Anaconda': '🐍',
    'Cobra': '🐍', 'Lizard': '🦎', 'Turtle': '🐢', 'Tortoise': '🐢', 'Frog': '🐸',
    'Bullfrog': '🐸', 'Tree frog': '🐸', 'Toad': '🐸', 'Salamander': '🦎',
    'Chameleon': '🦎', 'Gecko': '🦎', 'Iguana': '🦎', 'Komodo dragon': '🦎',
    'Python': '🐍', 'Boa': '🐍', 'Viper': '🐍', 'Rattlesnake': '🐍',

    // Fish & Marine Life
    'Shark': '🦈', 'Great white shark': '🦈', 'Dolphin': '🐬', 'Whale': '🐋',
    'Blue whale': '🐋', 'Orca': '🐋', 'Fish': '🐟', 'Goldfish': '🐠',
    'Tropical fish': '🐠', 'Clownfish': '🐠', 'Octopus': '🐙', 'Squid': '🦑',
    'Jellyfish': '🪼', 'Seal': '🦭', 'Sea lion': '🦭', 'Walrus': '🦭',
    'Crab': '🦀', 'Lobster': '🦞', 'Shrimp': '🦐', 'Prawn': '🦐',
    'Oyster': '🦪', 'Starfish': '⭐', 'Sea urchin': '🦔', 'Seahorse': '🐴',
    'Swordfish': '🐟', 'Tuna': '🐟', 'Salmon': '🐟', 'Bass': '🐟',
    'Trout': '🐟', 'Catfish': '🐟', 'Cod': '🐟', 'Herring': '🐟',
    'Sardine': '🐟', 'Mackerel': '🐟', 'Pike': '🐟', 'Carp': '🐟',
    'Eel': '🐍', 'Ray': '🐟', 'Stingray': '🐟', 'Manta ray': '🐟',
    'Pufferfish': '🐡', 'Angelfish': '🐠', 'Barracuda': '🐟',

    // Invertebrates
    'Butterfly': '🦋', 'Bee': '🐝', 'Honeybee': '🐝', 'Ant': '🐜', 'Spider': '🕷️',
    'Black widow spider': '🕷️', 'Scorpion': '🦂', 'Snail': '🐌', 'Slug': '🐌',
    'Bat': '🦇', 'Beetle': '🪲', 'Ladybug': '🐞', 'Cricket': '🦗', 'Grasshopper': '🦗',
    'Mosquito': '🦟', 'Fly': '🪰', 'Cockroach': '🪳', 'Worm': '🪱', 'Earthworm': '🪱',
    'Caterpillar': '🐛', 'Bug': '🐛', 'Moth': '🦋', 'Dragonfly': '🦋', 'Wasp': '🐝',
    'Hornet': '🐝', 'Centipede': '🐛', 'Millipede': '🐛', 'Mantis': '🦗',
    'Locust': '🦗', 'Cicada': '🦗', 'Flea': '🦟', 'Tick': '🕷️', 'Termite': '🐜',
    'Clam': '🦪', 'Sea cucumber': '🦭', 'Coral': '🪸', 'Sea anemone': '🪸',
    'Barnacle': '🦪'
  };

  return emojiMap[animalName] || '🐾';
};

export default function AnimalGeneratorPanel() {
  const [category, setCategory] = useState('all');
  const [count, setCount] = useState(6);
  const [generatedAnimals, setGeneratedAnimals] = useState<Animal[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const outputRef = useRef<HTMLDivElement>(null);

  // 自动生成：页面加载时生成6个动物
  useEffect(() => {
    handleGenerate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleGenerate = useCallback(() => {
    setIsGenerating(true);

    setTimeout(() => {
      // Filter animals by category
      const filteredAnimals = category === 'all'
        ? animals
        : animals.filter(animal => animal.category === category);

      // Generate multiple unique animals
      const selected: Animal[] = [];
      const available = [...filteredAnimals];
      const targetCount = Math.min(count, available.length);

      for (let i = 0; i < targetCount; i++) {
        const randomIndex = Math.floor(Math.random() * available.length);
        selected.push(available[randomIndex]);
        available.splice(randomIndex, 1);
      }

      setGeneratedAnimals(selected);
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
    if (generatedAnimals.length > 0 && outputRef.current) {
      setTimeout(() => {
        outputRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 300);
    }
  }, [generatedAnimals]);

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
                  Species Classification
                </label>
                <Select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full"
                >
                  {categories.map(cat => (
                    <option key={cat.value} value={cat.value}>{cat.label.toUpperCase()}</option>
                  ))}
                </Select>
              </div>

              {/* Count Selector */}
              <div>
                <label className="block text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">
                  Sample Size
                </label>
                <Select
                  value={count.toString()}
                  onChange={(e) => setCount(parseInt(e.target.value))}
                  className="w-full"
                >
                  {[1, 2, 3, 4, 5, 6, 8, 10, 12, 15, 20].map(num => (
                    <option key={num} value={num}>{num} Specimens</option>
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
                      Generate_Animals
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
                <PawPrint className="w-4 h-4" />
                <span>Visual_Stream</span>
              </div>
              {generatedAnimals.length > 0 && (
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-white border border-zinc-200 text-[10px] font-mono text-zinc-500 shadow-sm">
                    COUNT: {generatedAnimals.length}
                  </span>
                </div>
              )}
            </div>

            <div className="flex-1 z-10">
              {generatedAnimals.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-zinc-300">
                  <Sparkles className="w-12 h-12 mb-4 opacity-20" />
                  <p className="font-mono text-sm uppercase tracking-widest opacity-50">Ready to Initialize</p>
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 overflow-y-auto custom-scrollbar max-h-[600px] pr-2">
                  {generatedAnimals.map((animal) => (
                    <div
                      key={animal.id}
                      className="bg-white border border-zinc-200 p-4 hover:border-accent hover:shadow-sm transition-all group cursor-default"
                    >
                      <div className="aspect-square bg-zinc-50 border border-zinc-100 mb-3 flex items-center justify-center text-5xl group-hover:bg-accent/5 transition-colors">
                        {/* Use Emoji for now, replace with image logic if robust */}
                        {getAnimalEmoji(animal.name)}
                      </div>

                      <div className="text-center">
                        <h3 className="font-display font-bold text-foreground text-lg mb-1 group-hover:text-accent transition-colors">
                          {animal.name}
                        </h3>
                        <p className="text-[10px] font-mono uppercase tracking-wider text-zinc-400">
                          {animal.category === 'all' ? 'Mixed' : animal.category}
                        </p>
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
