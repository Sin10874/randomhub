'use client';

import { useState, useMemo } from 'react';
import Navbar from '@/app/components/Navbar';
import { generateNames, type NameCategory, type Gender } from '@/app/utils/nameGenerator';
import { Copy, Check, Loader2, Settings2, User, Users } from 'lucide-react';

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
  const siteUrl = "https://randomhub.io";
  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Random Name Generator',
    url: `${siteUrl}/random-name-generator`,
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description: 'Generate authentic names from 18+ countries or creative fantasy names. Free name generator for characters, babies, games, and creative projects.',
    browserRequirements: 'Requires JavaScript',
    screenshot: `${siteUrl}/screenshots/name-generator.png`,
  };

  const [nameType, setNameType] = useState<NameType>('real');
  const [category, setCategory] = useState<NameCategory>('anywhere');
  const [gender, setGender] = useState<Gender>('both');
  const [count, setCount] = useState(1);
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
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl sm:text-6xl font-bold text-foreground mb-4 uppercase tracking-tight">
            Random Name<br className="sm:hidden" /> Generator
          </h1>
          <p className="text-zinc-500 font-mono text-sm uppercase tracking-widest">
            Identity Synthesis Module // v3.0
          </p>
        </div>

        {/* Main Panel - Technical Grid Layout */}
        <div className="swiss-card bg-panel border-grid shadow-sm mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
            
            {/* Settings Column */}
            <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-grid p-6 sm:p-8 bg-white flex flex-col">
              <div className="flex items-center gap-2 mb-8 text-accent font-mono text-xs uppercase tracking-widest">
                <Settings2 className="w-4 h-4" />
                <span>Params</span>
              </div>

              <div className="space-y-6 flex-1">
                {/* Type Selection */}
                <div>
                  <label className="block text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">
                    Source Database
                  </label>
                  <div className="grid grid-cols-2 gap-px bg-zinc-200 border border-zinc-200">
                    <button
                      onClick={() => handleNameTypeChange('real')}
                      className={`p-3 text-sm font-mono uppercase tracking-wider transition-all ${
                        nameType === 'real' 
                          ? 'bg-foreground text-white' 
                          : 'bg-white text-zinc-500 hover:text-foreground'
                      }`}
                    >
                      Real_World
                    </button>
                    <button
                      onClick={() => handleNameTypeChange('fantasy')}
                      className={`p-3 text-sm font-mono uppercase tracking-wider transition-all ${
                        nameType === 'fantasy' 
                          ? 'bg-foreground text-white' 
                          : 'bg-white text-zinc-500 hover:text-foreground'
                      }`}
                    >
                      Fantasy
                    </button>
                  </div>
                </div>

                {/* Origin/Category */}
                <div>
                  <label className="block text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">
                    Origin / Category
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value as NameCategory)}
                    className="w-full bg-white border border-zinc-300 p-3 text-sm font-mono text-foreground focus:border-accent focus:ring-1 focus:ring-accent appearance-none rounded-none"
                  >
                    {availableSubcategories.map((sub) => (
                      <option key={sub.value} value={sub.value}>
                        {sub.label.toUpperCase()}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Gender (Conditional) */}
                {!isFantasyCategory && (
                  <div>
                    <label className="block text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">
                      Gender
                    </label>
                    <select
                      value={gender}
                      onChange={(e) => setGender(e.target.value as Gender)}
                      className="w-full bg-white border border-zinc-300 p-3 text-sm font-mono text-foreground focus:border-accent focus:ring-1 focus:ring-accent appearance-none rounded-none"
                    >
                      <option value="both">ANY</option>
                      <option value="male">MALE</option>
                      <option value="female">FEMALE</option>
                    </select>
                  </div>
                )}

                {/* Count & StartWith Row */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">
                      Batch Size
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
                  {isFantasyCategory && (
                    <div>
                      <label className="block text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">
                        Starts With
                      </label>
                      <input
                        type="text"
                        maxLength={1}
                        value={startsWith}
                        onChange={(e) => setStartsWith(e.target.value)}
                        placeholder="OPT"
                        className="w-full bg-white border border-zinc-300 p-3 text-center font-mono text-foreground focus:border-accent focus:ring-1 focus:ring-accent rounded-none uppercase"
                      />
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-zinc-100">
                <button
                  onClick={handleGenerate}
                  disabled={loading}
                  className="w-full bg-foreground hover:bg-zinc-800 text-white font-mono font-bold py-4 px-6 uppercase tracking-wider transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 rounded-none relative overflow-hidden group"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Processing...</span>
                    </>
                  ) : (
                    <>
                      <span className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out mix-blend-screen"></span>
                      <span className="relative z-10 flex items-center gap-2">
                        Generate_Names
                      </span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Results Area */}
            <div className="lg:col-span-8 bg-zinc-50/50 p-6 sm:p-8 relative flex flex-col">
               {/* Background Grid Accent */}
              <div className="absolute inset-0 pointer-events-none" style={{ 
                backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px)', 
                backgroundSize: '20px 20px' 
              }}></div>

              <div className="flex items-center justify-between mb-6 z-10">
                <div className="flex items-center gap-2 text-accent font-mono text-xs uppercase tracking-widest">
                  <Users className="w-4 h-4" />
                  <span>Output_Manifest</span>
                </div>
                {generatedNames.length > 0 && (
                  <button
                    onClick={handleCopyAll}
                    className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 hover:text-accent flex items-center gap-1 transition-colors"
                  >
                    {copiedAll ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                    {copiedAll ? 'All_Copied' : 'Copy_Batch'}
                  </button>
                )}
              </div>

              <div className="flex-1 z-10">
                {loading ? (
                  <div className="h-full flex items-center justify-center">
                    <Loader2 className="w-8 h-8 animate-spin text-zinc-300" />
                  </div>
                ) : error ? (
                  <div className="h-full flex items-center justify-center">
                    <p className="font-mono text-red-500 text-sm uppercase">{error}</p>
                  </div>
                ) : generatedNames.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {generatedNames.map((name, index) => (
                      <div
                        key={index}
                        className="group flex items-center justify-between bg-white border border-zinc-200 p-3 hover:border-accent hover:shadow-sm transition-all"
                      >
                        <div className="flex items-center gap-3">
                           <div className="w-6 h-6 bg-zinc-100 flex items-center justify-center text-[10px] font-mono text-zinc-400 group-hover:bg-accent/10 group-hover:text-accent transition-colors">
                              {index + 1}
                           </div>
                           <span className="font-display font-bold text-foreground text-lg tracking-tight">{name}</span>
                        </div>
                        <button
                          onClick={() => handleCopyName(name, index)}
                          className="opacity-0 group-hover:opacity-100 transition-opacity text-zinc-400 hover:text-accent"
                        >
                          {copiedIndex === index ? (
                            <Check className="w-4 h-4" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center text-zinc-300">
                    <User className="w-12 h-12 mb-4 opacity-20" />
                    <p className="font-mono text-sm uppercase tracking-widest opacity-50">No Data Generated</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* SEO / Info Section - Restored */}
        <div className="max-w-4xl mx-auto mb-12 space-y-12">
          {/* What is Random Name Generator */}
          <div className="swiss-card p-6 sm:p-8 bg-white">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-6 flex items-center text-foreground">
              <span className="w-2 h-8 bg-accent mr-3"></span>
              What is Random Name Generator?
            </h2>
            <p className="text-zinc-600 text-base leading-relaxed font-sans">
              <strong className="text-foreground">Random Name Generator</strong> is a free tool that instantly generates authentic names from various cultures and creative fantasy names. Whether you need realistic names from different countries or unique fantasy names for fictional characters, our generator provides diverse options. Choose from real names across 18+ countries or fantasy categories including dragons, elves, wizards, and robots.
            </p>
          </div>

          {/* Who is Random Name Generator for */}
          <div className="swiss-card p-6 sm:p-8 bg-white">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-8 flex items-center text-foreground">
              <span className="w-2 h-8 bg-accent mr-3"></span>
              Who is Random Name Generator for?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-grid border border-grid">
              {[
                { icon: "📖", title: "Writers & Authors", desc: "Create believable character names for novels and stories" },
                { icon: "🎮", title: "Game Developers", desc: "Generate NPC names and character identities quickly" },
                { icon: "🎭", title: "Role-Players (RPG/D&D)", desc: "Find perfect names for your RPG and tabletop characters" },
                { icon: "👶", title: "Expecting Parents", desc: "Get baby name inspiration from different cultures" },
                { icon: "🎬", title: "Screenwriters", desc: "Create diverse cast names for scripts and screenplays" },
                { icon: "🎨", title: "Creative Professionals", desc: "Generate pseudonyms, brand names, and project aliases" }
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 hover:bg-zinc-50 transition-colors">
                  <div className="flex gap-4">
                    <span className="text-2xl grayscale opacity-70">{item.icon}</span>
                    <div>
                      <h3 className="font-mono font-bold text-foreground mb-1 uppercase tracking-wider text-sm">{item.title}</h3>
                      <p className="text-sm text-zinc-500 font-sans">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose */}
          <div className="swiss-card p-6 sm:p-8 bg-white">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-8 flex items-center text-foreground">
              <span className="w-2 h-8 bg-accent mr-3"></span>
              Why Choose Our Name Generator?
            </h2>
            <div className="space-y-6">
              {[
                { icon: "🌍", title: "Multi-Cultural Coverage", desc: "18+ countries including American, British, Chinese, Japanese, Indian, French, German, and more" },
                { icon: "🐉", title: "Fantasy Names", desc: "Creative names for dragons, elves, wizards, and robots - perfect for fantasy worlds" },
                { icon: "⚧️", title: "Gender Options", desc: "Filter by male, female, or both for real names with authentic cultural naming patterns" },
                { icon: "🎯", title: "Bulk Generation", desc: "Generate up to 20 names at once - save time on large projects" },
                { icon: "🎁", title: "Always Free", desc: "Unlimited name generation with no registration or payment required" }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start group">
                  <span className="text-2xl grayscale opacity-70 pt-1">{item.icon}</span>
                  <div>
                    <h3 className="font-bold text-foreground mb-1 text-lg">{item.title}</h3>
                    <p className="text-zinc-500 font-sans">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* How to Use */}
          <div className="swiss-card p-6 sm:p-8 bg-white">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-8 flex items-center text-foreground">
              <span className="w-2 h-8 bg-accent mr-3"></span>
              How to Use Random Name Generator
            </h2>
            <div className="space-y-6">
              {[
                { step: "01", title: "Select Name Type & Origin", desc: "Choose between Real Names or Fantasy Names, then select a specific country/culture or fantasy category." },
                { step: "02", title: "Set Your Preferences", desc: "For real names, choose gender preference. Set how many names you want (1-20). For fantasy names, optionally filter by starting letter." },
                { step: "03", title: "Generate & Copy", desc: "Click generate to get your list of names. Copy individual names or copy all at once for your project." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="text-accent font-mono font-bold text-xl flex-shrink-0 pt-1">{item.step}</div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1 text-lg">{item.title}</h3>
                    <p className="text-zinc-500 font-sans">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Popular Use Cases */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: "Fiction Writing", desc: "Generate authentic character names for novels, short stories, and creative writing." },
              { title: "Video Games", desc: "Create names for NPCs, protagonists, and entire character rosters." },
              { title: "Tabletop RPGs", desc: "Quick name generation for D&D, Pathfinder, and other RPG characters." },
              { title: "Baby Names", desc: "Explore name options from different cultures for your baby." },
              { title: "Film & TV", desc: "Build diverse character names for scripts and productions." },
              { title: "Online Aliases", desc: "Create unique usernames and pseudonyms for online presence." }
            ].map((item, i) => (
              <div key={i} className="swiss-card p-6 bg-white">
                <h3 className="font-mono font-bold text-accent mb-2 uppercase tracking-wider text-xs">Use Case {String(i + 1).padStart(2, '0')}</h3>
                <h4 className="font-bold text-lg mb-2 text-foreground">{item.title}</h4>
                <p className="text-zinc-500 text-sm font-sans">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <div className="swiss-card p-6 sm:p-8 bg-white">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-8 flex items-center text-foreground">
              <span className="w-2 h-8 bg-accent mr-3"></span>
              Frequently Asked Questions
            </h2>
            <div className="space-y-8">
              {[
                { q: "What types of names can I generate?", a: "You can generate real names from 18+ countries (American, British, Chinese, Japanese, Indian, French, German, etc.) or fantasy names (Dragon, Elf, Wizard, Robot)." },
                { q: "Are the names authentic?", a: "Yes! Real names are sourced from authentic naming databases for each culture, following proper cultural naming conventions and patterns." },
                { q: "Can I filter by gender?", a: "Yes, for real names you can filter by male, female, or both. Fantasy names are typically gender-neutral." },
                { q: "How many names can I generate at once?", a: "You can generate between 1 and 20 names per generation. Use the copy all feature to quickly get your entire list." },
                { q: "Can I use these names commercially?", a: "Yes! Names generated are free to use in any project, commercial or personal, including books, games, films, and products." },
                { q: "What's the difference between real and fantasy names?", a: "Real names are authentic names from specific cultures with first and last names. Fantasy names are creative, unique names designed for fictional characters in fantasy settings." }
              ].map((item, i) => (
                <div key={i}>
                  <h3 className="font-bold text-foreground mb-2 text-lg">{item.q}</h3>
                  <p className="text-zinc-500 font-sans text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-grid py-8 bg-background">
        <div className="container mx-auto px-4 text-center">
          <p className="text-zinc-400 font-mono text-xs uppercase tracking-widest">
            © 2025 RandomHub System
          </p>
        </div>
      </footer>
    </div>
  );
}
