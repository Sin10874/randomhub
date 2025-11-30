'use client';

import { useState, useMemo } from 'react';
import Navbar from '@/app/components/Navbar';
import type { City } from '@/app/utils/cityGenerator';
import { 
  generateRandomCity, 
  getContinents, 
  getAllCountries, 
  getMapEmbedUrl, 
  getGoogleMapsSearchUrl 
} from '@/app/utils/cityGenerator';
import { 
  Copy, 
  Check, 
  Loader2, 
  MapPin, 
  Globe, 
  Settings2
} from 'lucide-react';

export default function CityGeneratorPage() {
  const siteUrl = "https://randomhub.io";
  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Random City Generator',
    url: `${siteUrl}/random-city-generator`,
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description: 'Generate random cities from around the world with detailed information. Free city generator with maps, population, climate, landmarks, and cultural insights.',
    browserRequirements: 'Requires JavaScript',
    screenshot: `${siteUrl}/screenshots/city-generator.png`,
  };

  const [filterType, setFilterType] = useState<'continent' | 'country'>('continent');
  const [filterValue, setFilterValue] = useState<string>('all');
  const [startsWith, setStartsWith] = useState('');
  const [generatedCity, setGeneratedCity] = useState<City | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const continents = useMemo(() => getContinents(), []);

  const availableCountries = useMemo(() => {
    if (filterType === 'country') {
      return getAllCountries();
    }
    return [];
  }, [filterType]);

  const availableOptions = useMemo(() => {
    if (filterType === 'continent') {
      return continents;
    }
    return availableCountries;
  }, [filterType, continents, availableCountries]);

  const handleFilterTypeChange = (newType: 'continent' | 'country') => {
    setFilterType(newType);
    setFilterValue('all');
  };

  const handleGenerate = () => {
    setLoading(true);
    setError(null);
    setCopied(false);

    setTimeout(() => {
      const city = generateRandomCity({
        continent: filterType === 'continent' && filterValue !== 'all' ? filterValue : undefined,
        country: filterType === 'country' && filterValue !== 'all' ? filterValue : undefined,
        startsWith: startsWith.trim() || undefined,
      });

      if (!city) {
        setError('No cities found matching your criteria. Try adjusting the filters.');
        setGeneratedCity(null);
      } else {
        setGeneratedCity(city);
      }
      setLoading(false);
    }, 300);
  };

  const handleCopy = () => {
    if (generatedCity) {
      const text = `${generatedCity.city}, ${generatedCity.country}`;
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header - Technical Style */}
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl sm:text-6xl font-bold text-foreground mb-4 uppercase tracking-tight">
            Random City<br className="sm:hidden" /> Generator
          </h1>
          <p className="text-zinc-500 font-mono text-sm uppercase tracking-widest">
            Global Location System // Ready for coordinates
          </p>
        </div>

        {/* Main Control Panel */}
        <div className="swiss-card bg-panel border-grid shadow-sm mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Settings Column */}
            <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-grid p-6 sm:p-8 bg-white">
               <div className="flex items-center gap-2 mb-8 text-accent font-mono text-xs uppercase tracking-widest">
                <Settings2 className="w-4 h-4" />
                <span>Configuration</span>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">
                    Target Region
                  </label>
                  <div className="space-y-2">
                     <div className="flex">
                        <select 
                          value={filterType}
                          onChange={(e) => handleFilterTypeChange(e.target.value as 'continent' | 'country')}
                          className="w-1/3 bg-white border border-zinc-300 p-3 text-sm font-mono text-foreground focus:border-accent focus:ring-1 focus:ring-accent appearance-none rounded-none border-r-0"
                        >
                          <option value="continent">CONT</option>
                          <option value="country">CTRY</option>
                        </select>
                        <select
                          value={filterValue}
                          onChange={(e) => setFilterValue(e.target.value)}
                          className="w-2/3 bg-white border border-zinc-300 p-3 text-sm font-mono text-foreground focus:border-accent focus:ring-1 focus:ring-accent appearance-none rounded-none"
                        >
                          <option value="all">ANYWHERE</option>
                          {availableOptions.map((option) => (
                            <option key={option} value={option}>
                              {option.toUpperCase()}
                            </option>
                          ))}
                        </select>
                     </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">
                    Starts With (Optional)
                  </label>
                  <input
                    type="text"
                    maxLength={1}
                    value={startsWith}
                    onChange={(e) => setStartsWith(e.target.value)}
                    placeholder="A-Z"
                    className="w-full bg-white border border-zinc-300 p-3 text-center font-mono text-foreground placeholder-zinc-300 focus:border-accent focus:ring-1 focus:ring-accent rounded-none uppercase"
                  />
                </div>

                <div className="pt-4">
                  <button
                    onClick={handleGenerate}
                    disabled={loading}
                    className="w-full bg-foreground hover:bg-zinc-800 text-white font-mono font-bold py-4 px-6 uppercase tracking-wider transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 rounded-none relative overflow-hidden group"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Scanning...</span>
                      </>
                    ) : (
                      <>
                        <span className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out mix-blend-screen"></span>
                        <span className="relative z-10 flex items-center gap-2">
                          Generate_City
                        </span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Result Area */}
            <div className="lg:col-span-8 bg-zinc-50/50 relative min-h-[400px] flex flex-col">
               {/* Background Grid Accent */}
              <div className="absolute inset-0 pointer-events-none" style={{ 
                backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px)', 
                backgroundSize: '20px 20px' 
              }}></div>

              {loading ? (
                 <div className="flex-1 flex items-center justify-center">
                    <div className="text-center">
                       <Loader2 className="w-10 h-10 animate-spin text-zinc-300 mx-auto mb-4" />
                       <p className="font-mono text-xs text-zinc-400 uppercase tracking-widest">Acquiring Satellite Data...</p>
                    </div>
                 </div>
              ) : error ? (
                 <div className="flex-1 flex items-center justify-center p-8">
                    <div className="border border-red-200 bg-red-50 p-4 max-w-md text-center">
                       <p className="font-mono text-red-600 uppercase text-sm">{error}</p>
                    </div>
                 </div>
              ) : generatedCity ? (
                 <div className="flex-1 flex flex-col h-full z-10 relative">
                    {/* Map Top Half (Desktop) or Full (Mobile) */}
                    <div className="h-[300px] lg:h-[400px] w-full border-b border-grid relative bg-zinc-100 group">
                       <iframe
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          loading="lazy"
                          allowFullScreen
                          src={getMapEmbedUrl(generatedCity)}
                          title={`Map of ${generatedCity.city}`}
                        />
                        <div className="absolute top-4 right-4">
                           <a
                            href={getGoogleMapsSearchUrl(generatedCity)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white border border-zinc-300 px-3 py-2 font-mono text-xs uppercase tracking-wider hover:bg-accent hover:text-white hover:border-accent transition-colors flex items-center gap-2"
                          >
                            <MapPin className="w-3 h-3" />
                            Google_Maps
                          </a>
                        </div>
                    </div>

                    {/* City Info Bottom Half */}
                    <div className="flex-1 p-6 sm:p-8 bg-white">
                       <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8 border-b border-grid pb-6">
                          <div>
                             <div className="flex items-center gap-2 text-zinc-400 font-mono text-xs uppercase tracking-widest mb-1">
                                <Globe className="w-3 h-3" />
                                {generatedCity.continent}
                             </div>
                             <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-2">
                                {generatedCity.city}
                             </h2>
                             <div className="font-mono text-xl text-zinc-500">
                                {generatedCity.country}
                             </div>
                          </div>
                          <div className="flex gap-3">
                             <button
                                onClick={handleCopy}
                                className="group h-10 px-4 border border-zinc-300 flex items-center gap-2 hover:border-accent hover:text-accent transition-colors"
                              >
                                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                                <span className="font-mono text-xs uppercase tracking-wider">
                                  {copied ? 'Copied' : 'Copy'}
                                </span>
                              </button>
                          </div>
                       </div>

                       {/* Data Grid */}
                       <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-zinc-200 border border-zinc-200 mb-8">
                          <div className="bg-white p-4">
                             <div className="text-zinc-400 text-[10px] font-mono uppercase tracking-widest mb-1">Population</div>
                             <div className="font-mono font-bold">{generatedCity.population || 'N/A'}</div>
                          </div>
                          <div className="bg-white p-4">
                             <div className="text-zinc-400 text-[10px] font-mono uppercase tracking-widest mb-1">Currency</div>
                             <div className="font-mono font-bold">{generatedCity.currency || 'N/A'}</div>
                          </div>
                           <div className="bg-white p-4">
                             <div className="text-zinc-400 text-[10px] font-mono uppercase tracking-widest mb-1">Timezone</div>
                             <div className="font-mono font-bold">{generatedCity.timezone || 'N/A'}</div>
                          </div>
                           <div className="bg-white p-4">
                             <div className="text-zinc-400 text-[10px] font-mono uppercase tracking-widest mb-1">Coordinates</div>
                             <div className="font-mono font-bold text-xs">
                                {generatedCity.latitude.toFixed(2)}, {generatedCity.longitude.toFixed(2)}
                             </div>
                          </div>
                       </div>

                       {/* Description */}
                       <div className="prose prose-sm max-w-none font-mono text-zinc-600">
                          <p className="mb-4"><strong className="text-foreground">System Analysis:</strong> {generatedCity.description}</p>
                          
                          {generatedCity.famousFor && (
                            <div className="flex flex-wrap gap-2 mt-4">
                               {generatedCity.famousFor.map((tag, i) => (
                                  <span key={i} className="px-2 py-1 border border-zinc-200 bg-zinc-50 text-[10px] uppercase tracking-wider text-zinc-500">
                                     {tag}
                                  </span>
                               ))}
                            </div>
                          )}
                       </div>
                    </div>
                 </div>
              ) : (
                 <div className="flex-1 flex items-center justify-center">
                    <div className="text-center opacity-30">
                       <div className="font-mono text-6xl mb-4 font-thin text-zinc-300">00:00</div>
                       <p className="font-mono text-sm text-zinc-400 uppercase tracking-widest">Awaiting Coordinates</p>
                    </div>
                 </div>
              )}
            </div>
          </div>
        </div>

        {/* SEO / Info Section - Restored */}
        <div className="max-w-4xl mx-auto mb-12 space-y-12">
          {/* What is Random City Generator */}
          <div className="swiss-card p-6 sm:p-8 bg-white">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-6 flex items-center text-foreground">
              <span className="w-2 h-8 bg-accent mr-3"></span>
              What is Random City Generator?
            </h2>
            <p className="text-zinc-600 text-base leading-relaxed font-sans">
              <strong className="text-foreground">Random City Generator</strong> is a free tool that helps you discover cities from around the world instantly. Whether you&apos;re planning your next travel adventure, need inspiration for creative projects, or want to learn about global destinations, our generator provides detailed information about cities across all continents. Each result includes maps, population data, cultural insights, landmarks, and local specialties.
            </p>
          </div>

          {/* Who is Random City Generator for */}
          <div className="swiss-card p-6 sm:p-8 bg-white">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-8 flex items-center text-foreground">
              <span className="w-2 h-8 bg-accent mr-3"></span>
              Who is Random City Generator for?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-grid border border-grid">
              {[
                { icon: "✈️", title: "Travel Enthusiasts", desc: "Discover new destinations and plan spontaneous trips" },
                { icon: "📖", title: "Writers & Authors", desc: "Find authentic locations for stories and novels" },
                { icon: "🎮", title: "Game Designers", desc: "Generate realistic city settings for games and simulations" },
                { icon: "🎓", title: "Students & Teachers", desc: "Learn geography and world cultures interactively" },
                { icon: "🎬", title: "Content Creators", desc: "Create travel vlogs, blogs, and location-based content" },
                { icon: "🗺️", title: "Geography Buffs", desc: "Explore and learn about cities worldwide" }
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
              Why Choose Our City Generator?
            </h2>
            <div className="space-y-6">
              {[
                { icon: "🌍", title: "Global Coverage", desc: "Cities from all continents and countries - explore the entire world" },
                { icon: "📍", title: "Rich Information", desc: "Detailed data including maps, coordinates, population, climate, landmarks, and culture" },
                { icon: "🎯", title: "Smart Filters", desc: "Filter by continent, country, or starting letter for targeted results" },
                { icon: "🗺️", title: "Interactive Maps", desc: "View each city's location on an embedded map with one-click navigation to Google Maps" },
                { icon: "🎁", title: "Completely Free", desc: "No registration, no limits, no costs - explore unlimited cities" }
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
              How to Use Random City Generator
            </h2>
            <div className="space-y-6">
              {[
                { step: "01", title: "Choose Location", desc: "Select a specific continent or country, or choose 'Anywhere' for global results." },
                { step: "02", title: "Generate City", desc: "Click the generate button and instantly receive a random city with comprehensive details." },
                { step: "03", title: "Explore & Discover", desc: "Read about culture, landmarks, view map, or open in Google Maps." }
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
              { title: "Travel Planning", desc: "Generate random destinations for spontaneous trips or bucket list inspiration." },
              { title: "Story Settings", desc: "Find authentic locations for novels, screenplays, and creative writing projects." },
              { title: "Educational Projects", desc: "Create geography quizzes, presentations, and cultural study materials." },
              { title: "Game Development", desc: "Generate realistic city locations for game maps and virtual worlds." },
              { title: "Content Creation", desc: "Discover cities for travel vlogs, blogs, and social media content." },
              { title: "Decision Making", desc: "Let randomness decide your next vacation destination!" }
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
                { q: "How many cities are in the database?", a: "Our database includes hundreds of major cities from every continent, covering popular destinations and hidden gems worldwide." },
                { q: "Can I filter by specific regions?", a: "Yes! Filter by continent (Africa, Asia, Europe, etc.) or by specific country. You can also filter by starting letter." },
                { q: "What information is provided?", a: "Each city includes: location details, map coordinates, population, timezone, currency, language, climate, landmarks, and culture." },
                { q: "Can I view the city on a map?", a: "Absolutely! Each result includes an embedded map showing the exact location, plus a direct link to Google Maps." },
                { q: "Is the Random City Generator free?", a: "Yes! It's completely free with no registration required. Generate unlimited cities anytime." },
                { q: "How accurate is the information?", a: "We strive to provide accurate, up-to-date information. All data is carefully curated and regularly updated." }
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
