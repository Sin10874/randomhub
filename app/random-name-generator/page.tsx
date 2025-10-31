'use client';

import { useState, useMemo } from 'react';
import Navbar from '@/app/components/Navbar';
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
    <div className="min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
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
        <div className="w-full max-w-5xl mx-auto bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-4 sm:p-6 lg:p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {/* Settings Card */}
            <div className="h-full min-h-[400px] rounded-2xl border border-pink-200/60 bg-white/70 backdrop-blur p-4 sm:p-6 shadow-sm flex flex-col">
              <div className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 sm:mb-6">Settings</div>

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
            <div className="h-full min-h-[400px] rounded-2xl border border-pink-200/60 bg-white/70 backdrop-blur p-4 sm:p-6 shadow-sm flex flex-col">
              <div className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 sm:mb-6">Results</div>

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
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={handleGenerate}
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-pink-600 text-white font-semibold rounded-xl hover:from-pink-600 hover:to-pink-700 transition-all shadow-lg hover:shadow-xl active:scale-95"
                  >
                    <RotateCw className="w-4 h-4" />
                    Regenerate
                  </button>
                  <button
                    onClick={handleCopyAll}
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-rose-500 to-rose-600 text-white font-semibold rounded-xl hover:from-rose-600 hover:to-rose-700 transition-all shadow-lg hover:shadow-xl active:scale-95"
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

        {/* SEO Content Section */}
        <div className="max-w-4xl mx-auto mb-12 space-y-8">
          {/* What is Random Name Generator */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
              What is Random Name Generator?
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              <strong>Random Name Generator</strong> is a free tool that instantly generates authentic names from various cultures and creative fantasy names. Whether you need realistic names from different countries or unique fantasy names for fictional characters, our generator provides diverse options. Choose from real names across 18+ countries or fantasy categories including dragons, elves, wizards, and robots.
            </p>
          </div>

          {/* Who is it for */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
              Who is Random Name Generator for?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex gap-3">
                <span className="text-2xl">📖</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Writers & Authors</h3>
                  <p className="text-sm text-gray-600">Create believable character names for novels and stories</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl">🎮</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Game Developers</h3>
                  <p className="text-sm text-gray-600">Generate NPC names and character identities quickly</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl">🎭</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Role-Players (RPG/D&D)</h3>
                  <p className="text-sm text-gray-600">Find perfect names for your RPG and tabletop characters</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl">👶</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Expecting Parents</h3>
                  <p className="text-sm text-gray-600">Get baby name inspiration from different cultures</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl">🎬</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Screenwriters</h3>
                  <p className="text-sm text-gray-600">Create diverse cast names for scripts and screenplays</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl">🎨</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Creative Professionals</h3>
                  <p className="text-sm text-gray-600">Generate pseudonyms, brand names, and project aliases</p>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
              Why Choose Our Name Generator?
            </h2>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <span className="text-2xl flex-shrink-0">🌍</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1 text-lg">Multi-Cultural Coverage</h3>
                  <p className="text-gray-600">18+ countries including American, British, Chinese, Japanese, Indian, French, German, and more</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-2xl flex-shrink-0">🐉</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1 text-lg">Fantasy Names</h3>
                  <p className="text-gray-600">Creative names for dragons, elves, wizards, and robots - perfect for fantasy worlds</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-2xl flex-shrink-0">⚧️</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1 text-lg">Gender Options</h3>
                  <p className="text-gray-600">Filter by male, female, or both for real names with authentic cultural naming patterns</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-2xl flex-shrink-0">🎯</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1 text-lg">Bulk Generation</h3>
                  <p className="text-gray-600">Generate up to 20 names at once - save time on large projects</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-2xl flex-shrink-0">🎁</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1 text-lg">Always Free</h3>
                  <p className="text-gray-600">Unlimited name generation with no registration or payment required</p>
                </div>
              </div>
            </div>
          </div>

          {/* How to Use */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
              How to Use Random Name Generator
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1 text-lg">Select Name Type & Origin</h3>
                  <p className="text-gray-600">Choose between Real Names or Fantasy Names, then select a specific country/culture or fantasy category.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1 text-lg">Set Your Preferences</h3>
                  <p className="text-gray-600">For real names, choose gender preference. Set how many names you want (1-20). For fantasy names, optionally filter by starting letter.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1 text-lg">Generate & Copy</h3>
                  <p className="text-gray-600">Click generate to get your list of names. Copy individual names or copy all at once for your project.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Popular Use Cases */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
              Popular Use Cases
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-4 border border-pink-100">
                <h3 className="font-semibold text-gray-800 mb-2">📚 Fiction Writing</h3>
                <p className="text-sm text-gray-600">Generate authentic character names for novels, short stories, and creative writing.</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-4 border border-purple-100">
                <h3 className="font-semibold text-gray-800 mb-2">🎮 Video Games</h3>
                <p className="text-sm text-gray-600">Create names for NPCs, protagonists, and entire character rosters.</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-4 border border-blue-100">
                <h3 className="font-semibold text-gray-800 mb-2">🎲 Tabletop RPGs</h3>
                <p className="text-sm text-gray-600">Quick name generation for D&D, Pathfinder, and other RPG characters.</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 border border-green-100">
                <h3 className="font-semibold text-gray-800 mb-2">👶 Baby Names</h3>
                <p className="text-sm text-gray-600">Explore name options from different cultures for your baby.</p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-4 border border-orange-100">
                <h3 className="font-semibold text-gray-800 mb-2">🎬 Film & TV</h3>
                <p className="text-sm text-gray-600">Build diverse character names for scripts and productions.</p>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-4 border border-red-100">
                <h3 className="font-semibold text-gray-800 mb-2">🔐 Online Aliases</h3>
                <p className="text-sm text-gray-600">Create unique usernames and pseudonyms for online presence.</p>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-5">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2 text-lg">What types of names can I generate?</h3>
                <p className="text-gray-600">You can generate real names from 18+ countries (American, British, Chinese, Japanese, Indian, French, German, etc.) or fantasy names (Dragon, Elf, Wizard, Robot).</p>
              </div>
              <div className="border-t border-gray-200 pt-5">
                <h3 className="font-semibold text-gray-800 mb-2 text-lg">Are the names authentic?</h3>
                <p className="text-gray-600">Yes! Real names are sourced from authentic naming databases for each culture, following proper cultural naming conventions and patterns.</p>
              </div>
              <div className="border-t border-gray-200 pt-5">
                <h3 className="font-semibold text-gray-800 mb-2 text-lg">Can I filter by gender?</h3>
                <p className="text-gray-600">Yes, for real names you can filter by male, female, or both. Fantasy names are typically gender-neutral.</p>
              </div>
              <div className="border-t border-gray-200 pt-5">
                <h3 className="font-semibold text-gray-800 mb-2 text-lg">How many names can I generate at once?</h3>
                <p className="text-gray-600">You can generate between 1 and 20 names per generation. Use the copy all feature to quickly get your entire list.</p>
              </div>
              <div className="border-t border-gray-200 pt-5">
                <h3 className="font-semibold text-gray-800 mb-2 text-lg">Can I use these names commercially?</h3>
                <p className="text-gray-600">Yes! Names generated are free to use in any project, commercial or personal, including books, games, films, and products.</p>
              </div>
              <div className="border-t border-gray-200 pt-5">
                <h3 className="font-semibold text-gray-800 mb-2 text-lg">What&apos;s the difference between real and fantasy names?</h3>
                <p className="text-gray-600">Real names are authentic names from specific cultures with first and last names. Fantasy names are creative, unique names designed for fictional characters in fantasy settings.</p>
              </div>
              <div className="border-t border-gray-200 pt-5">
                <h3 className="font-semibold text-gray-800 mb-2 text-lg">Is the name generator free?</h3>
                <p className="text-gray-600">Absolutely! Generate unlimited names with no registration, no limits, and no cost.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white/10 backdrop-blur-sm py-6 mt-auto border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/80 text-sm">
            © 2025 RandomHub
          </p>
        </div>
      </footer>
    </div>
  );
}
