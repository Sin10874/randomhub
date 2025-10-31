'use client';

import { useState, useMemo } from 'react';
import Navbar from '@/app/components/Navbar';
import Select from '@/app/components/ui/Select';
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
  RotateCw, 
  MapPin, 
  Globe, 
  Navigation, 
  Users, 
  Clock, 
  DollarSign, 
  MessageSquare, 
  Calendar, 
  Thermometer, 
  Star, 
  Info 
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
    <div className="min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="text-center mb-8">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white drop-shadow-2xl mb-4 tracking-tight">
            Random City Generator
          </h1>
          <p className="text-lg text-white/90 drop-shadow-lg max-w-2xl mx-auto">
            Generate random cities from around the world with location details and maps
          </p>
        </div>

        <div className="w-full max-w-5xl mx-auto bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-4 sm:p-6 lg:p-8 mb-8">
          <div className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 sm:mb-6">Settings</div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Location
              </label>
              <div className="flex items-center gap-3">
                <div className="flex-1">
                  <Select
                    value={filterType}
                    onChange={(e) => handleFilterTypeChange(e.target.value as 'continent' | 'country')}
                  >
                    <option value="continent">Continent</option>
                    <option value="country">Country</option>
                  </Select>
                </div>
                
                <span className="text-slate-600 font-medium text-lg">=</span>
                
                <div className="flex-1">
                  <Select
                    value={filterValue}
                    onChange={(e) => setFilterValue(e.target.value)}
                  >
                    <option value="all">Anywhere</option>
                    {availableOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </Select>
                </div>
              </div>
            </div>

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
                className="w-full appearance-none rounded-xl border border-slate-200 bg-white/90 px-3 py-2 text-slate-900 shadow-sm hover:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
              />
            </div>
          </div>

          <button
            onClick={handleGenerate}
            disabled={loading}
            className="w-full mt-6 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold py-3 rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Generating...
              </>
            ) : (
              'Generate City'
            )}
          </button>
        </div>

        {(generatedCity || error) && (
          <div className="w-full max-w-5xl mx-auto bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-4 sm:p-6 lg:p-8 mb-8">
            <div className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 sm:mb-6">Result</div>

            {loading ? (
              <div className="flex items-center justify-center py-12">
                <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
              </div>
            ) : error ? (
              <div className="flex items-center justify-center py-12">
                <p className="text-red-500 text-center">{error}</p>
              </div>
            ) : generatedCity ? (
              <div className="space-y-6">
                {/* Hero Card - City Header */}
                <div className="bg-gradient-to-br from-blue-50/80 to-purple-50/80 rounded-xl p-4 sm:p-6 border border-blue-200/50 shadow-sm">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                        {generatedCity.city}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 text-gray-700 mb-3">
                        <Globe className="w-4 h-4" />
                        <span className="text-base sm:text-lg font-medium">{generatedCity.country}</span>
                        <span className="mx-1 text-gray-400">•</span>
                        <span className="text-blue-600 text-sm sm:text-base">{generatedCity.continent}</span>
                      </div>
                      
                      {/* Nickname */}
                      {generatedCity.nickname && (
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          <span className="text-xs sm:text-sm text-gray-600">Also known as</span>
                          <span className="text-base sm:text-lg font-semibold text-purple-700 italic">
                            &ldquo;{generatedCity.nickname}&rdquo;
                          </span>
                        </div>
                      )}
                      
                      {/* Famous For Tags */}
                      {generatedCity.famousFor && generatedCity.famousFor.length > 0 && (
                        <div className="flex items-start gap-2 mt-4">
                          <span className="text-sm font-medium text-gray-700 mt-1.5 flex-shrink-0">Famous for:</span>
                          <div className="flex flex-wrap gap-2">
                            {generatedCity.famousFor.map((item, index) => (
                              <span
                                key={index}
                                className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-900 rounded-full text-sm font-medium border border-amber-300 shadow-sm"
                              >
                                <Star className="w-3.5 h-3.5 mr-1.5 fill-amber-500 text-amber-500" />
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    <button
                      onClick={handleCopy}
                      className="p-3 hover:bg-white/60 rounded-lg transition-colors flex-shrink-0 ml-4"
                      aria-label="Copy city name"
                      title="Copy city name"
                    >
                      {copied ? (
                        <Check className="w-5 h-5 text-green-600" />
                      ) : (
                        <Copy className="w-5 h-5 text-gray-600" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Map & Quick Info Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Left: Map */}
                  <div className="bg-white/80 rounded-lg overflow-hidden border border-blue-100/50 h-[400px] lg:h-[500px]">
                    <iframe
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      loading="lazy"
                      allowFullScreen
                      src={getMapEmbedUrl(generatedCity)}
                      title={`Map of ${generatedCity.city}, ${generatedCity.country}`}
                    />
                  </div>

                  {/* Right: Quick Info Cards */}
                  <div className="flex flex-col h-[400px] lg:h-[500px] gap-4">
                    {/* Coordinates */}
                    <div className="bg-white/80 rounded-lg p-5 border border-blue-100/50 shadow-sm">
                      <div className="flex items-center gap-2 text-gray-700 mb-2">
                        <Navigation className="w-5 h-5 text-blue-600" />
                        <span className="text-sm font-semibold">Coordinates</span>
                      </div>
                      <div className="text-base text-gray-800 font-mono font-semibold">
                        {generatedCity.latitude.toFixed(4)}, {generatedCity.longitude.toFixed(4)}
                      </div>
                    </div>

                    {/* Quick Info Grid */}
                    {(generatedCity.population || generatedCity.timezone || generatedCity.currency || generatedCity.language) && (
                      <div className="grid grid-cols-2 gap-3 flex-1">
                        {generatedCity.population && (
                          <div className="bg-white/80 rounded-lg p-4 border border-blue-100/50 shadow-sm flex flex-col justify-center">
                            <div className="flex items-center gap-2 text-gray-700 mb-2">
                              <Users className="w-5 h-5 text-purple-600" />
                              <span className="text-xs font-semibold">Population</span>
                            </div>
                            <div className="text-base text-gray-900 font-bold">{generatedCity.population}</div>
                          </div>
                        )}
                        {generatedCity.timezone && (
                          <div className="bg-white/80 rounded-lg p-4 border border-blue-100/50 shadow-sm flex flex-col justify-center">
                            <div className="flex items-center gap-2 text-gray-700 mb-2">
                              <Clock className="w-5 h-5 text-blue-600" />
                              <span className="text-xs font-semibold">Timezone</span>
                            </div>
                            <div className="text-base text-gray-900 font-bold">{generatedCity.timezone}</div>
                          </div>
                        )}
                        {generatedCity.currency && (
                          <div className="bg-white/80 rounded-lg p-4 border border-blue-100/50 shadow-sm flex flex-col justify-center">
                            <div className="flex items-center gap-2 text-gray-700 mb-2">
                              <DollarSign className="w-5 h-5 text-green-600" />
                              <span className="text-xs font-semibold">Currency</span>
                            </div>
                            <div className="text-sm text-gray-900 font-bold leading-tight">{generatedCity.currency}</div>
                          </div>
                        )}
                        {generatedCity.language && generatedCity.language.length > 0 && (
                          <div className="bg-white/80 rounded-lg p-4 border border-blue-100/50 shadow-sm flex flex-col justify-center">
                            <div className="flex items-center gap-2 text-gray-700 mb-2">
                              <MessageSquare className="w-5 h-5 text-orange-600" />
                              <span className="text-xs font-semibold">Language</span>
                            </div>
                            <div className="text-sm text-gray-900 font-bold leading-tight">{generatedCity.language.join(', ')}</div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Travel Info */}
                    {(generatedCity.bestTimeToVisit || generatedCity.climate) && (
                      <div className="bg-gradient-to-br from-amber-50/80 to-orange-50/60 rounded-lg p-5 border border-amber-100 shadow-sm">
                        {generatedCity.bestTimeToVisit && (
                          <div className="mb-4 last:mb-0">
                            <div className="flex items-center gap-2 text-gray-800 mb-2">
                              <Calendar className="w-5 h-5 text-amber-600" />
                              <span className="text-sm font-semibold">Best Time to Visit</span>
                            </div>
                            <div className="text-sm text-gray-700 font-medium">{generatedCity.bestTimeToVisit}</div>
                          </div>
                        )}
                        {generatedCity.climate && (
                          <div>
                            <div className="flex items-center gap-2 text-gray-800 mb-2">
                              <Thermometer className="w-5 h-5 text-red-500" />
                              <span className="text-sm font-semibold">Climate</span>
                            </div>
                            <div className="text-sm text-gray-700 font-medium">{generatedCity.climate}</div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Detailed Information Section - Full Width Below */}
                <div className="space-y-6">
                    {/* About Section */}
                    <div className="bg-gradient-to-br from-white/90 to-blue-50/50 rounded-xl p-6 border border-blue-100/50 shadow-sm">
                      <div className="flex items-center gap-2 text-gray-800 mb-4 pb-3 border-b border-blue-100">
                        <Info className="w-5 h-5 text-blue-600" />
                        <span className="text-xl font-bold">About {generatedCity.city}</span>
                      </div>
                      <p className="text-base text-gray-700 leading-relaxed mb-4">
                        {generatedCity.description}
                      </p>
                      {generatedCity.overview && (
                        <div className="mt-4 pt-4 border-t border-blue-100">
                          <p className="text-sm text-gray-600 leading-relaxed italic">
                            {generatedCity.overview}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Highlights Section */}
                    {generatedCity.highlights && (
                      <div className="bg-gradient-to-br from-amber-50/80 to-orange-50/50 rounded-xl p-6 border border-amber-100 shadow-sm">
                        <div className="flex items-center gap-2 text-gray-800 mb-4 pb-3 border-b border-amber-100">
                          <Star className="w-5 h-5 text-amber-600 fill-amber-400" />
                          <span className="text-xl font-bold">Must-See & Do</span>
                        </div>
                        <p className="text-sm text-gray-700 leading-relaxed">
                          {generatedCity.highlights}
                        </p>
                      </div>
                    )}

                    {/* Culture Section */}
                    {generatedCity.culture && (
                      <div className="bg-gradient-to-br from-purple-50/80 to-pink-50/50 rounded-xl p-6 border border-purple-100 shadow-sm">
                        <div className="flex items-center gap-2 text-gray-800 mb-4 pb-3 border-b border-purple-100">
                          <Globe className="w-5 h-5 text-purple-600" />
                          <span className="text-xl font-bold">Culture & Lifestyle</span>
                        </div>
                        <p className="text-sm text-gray-700 leading-relaxed">
                          {generatedCity.culture}
                        </p>
                      </div>
                    )}

                    {/* Landmarks Section */}
                    {generatedCity.landmarks && generatedCity.landmarks.length > 0 && (
                      <div className="bg-gradient-to-br from-green-50/80 to-emerald-50/50 rounded-xl p-6 border border-green-100 shadow-sm">
                        <div className="flex items-center gap-2 text-gray-800 mb-4 pb-3 border-b border-green-100">
                          <MapPin className="w-5 h-5 text-green-600" />
                          <span className="text-xl font-bold">Famous Landmarks</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {generatedCity.landmarks.map((landmark, index) => (
                            <span
                              key={index}
                              className="inline-flex items-center px-4 py-2 bg-white/80 text-green-800 rounded-lg text-sm font-medium border border-green-200 shadow-sm hover:shadow-md transition-shadow"
                            >
                              <MapPin className="w-3 h-3 mr-1.5 text-green-600" />
                              {landmark}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Specialties Section */}
                    {generatedCity.specialties && generatedCity.specialties.length > 0 && (
                      <div className="bg-gradient-to-br from-rose-50/80 to-red-50/50 rounded-xl p-6 border border-rose-100 shadow-sm">
                        <div className="flex items-center gap-2 text-gray-800 mb-4 pb-3 border-b border-rose-100">
                          <Star className="w-5 h-5 text-rose-600 fill-rose-400" />
                          <span className="text-xl font-bold">Local Specialties</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {generatedCity.specialties.map((specialty, index) => (
                            <span
                              key={index}
                              className="inline-flex items-center px-4 py-2 bg-white/80 text-rose-800 rounded-lg text-sm font-medium border border-rose-200 shadow-sm hover:shadow-md transition-shadow"
                            >
                              <Star className="w-3 h-3 mr-1.5 text-rose-600 fill-rose-400" />
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <button
                    onClick={handleGenerate}
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl active:scale-95"
                  >
                    <RotateCw className="w-4 h-4" />
                    Regenerate
                  </button>
                  <a
                    href={getGoogleMapsSearchUrl(generatedCity)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-cyan-700 transition-all shadow-lg hover:shadow-xl active:scale-95"
                  >
                    <MapPin className="w-4 h-4" />
                    Open Maps
                  </a>
                </div>
              </div>
            ) : null}
          </div>
        )}

        {/* SEO Content Section */}
        <div className="max-w-4xl mx-auto mb-12 space-y-8">
          {/* What is Random City Generator */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
              What is Random City Generator?
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              <strong>Random City Generator</strong> is a free tool that helps you discover cities from around the world instantly. Whether you&apos;re planning your next travel adventure, need inspiration for creative projects, or want to learn about global destinations, our generator provides detailed information about cities across all continents. Each result includes maps, population data, cultural insights, landmarks, and local specialties.
            </p>
          </div>

          {/* Who is it for */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
              Who is Random City Generator for?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex gap-3">
                <span className="text-2xl">✈️</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Travel Enthusiasts</h3>
                  <p className="text-sm text-gray-600">Discover new destinations and plan spontaneous trips</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl">📖</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Writers & Authors</h3>
                  <p className="text-sm text-gray-600">Find authentic locations for stories and novels</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl">🎮</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Game Designers</h3>
                  <p className="text-sm text-gray-600">Generate realistic city settings for games and simulations</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl">🎓</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Students & Teachers</h3>
                  <p className="text-sm text-gray-600">Learn geography and world cultures interactively</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl">🎬</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Content Creators</h3>
                  <p className="text-sm text-gray-600">Create travel vlogs, blogs, and location-based content</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl">🗺️</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Geography Buffs</h3>
                  <p className="text-sm text-gray-600">Explore and learn about cities worldwide</p>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
              Why Choose Our City Generator?
            </h2>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <span className="text-2xl flex-shrink-0">🌍</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1 text-lg">Global Coverage</h3>
                  <p className="text-gray-600">Cities from all continents and countries - explore the entire world</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-2xl flex-shrink-0">📍</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1 text-lg">Rich Information</h3>
                  <p className="text-gray-600">Detailed data including maps, coordinates, population, climate, landmarks, and culture</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-2xl flex-shrink-0">🎯</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1 text-lg">Smart Filters</h3>
                  <p className="text-gray-600">Filter by continent, country, or starting letter for targeted results</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-2xl flex-shrink-0">🗺️</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1 text-lg">Interactive Maps</h3>
                  <p className="text-gray-600">View each city&apos;s location on an embedded map with one-click navigation to Google Maps</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-2xl flex-shrink-0">🎁</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1 text-lg">Completely Free</h3>
                  <p className="text-gray-600">No registration, no limits, no costs - explore unlimited cities</p>
                </div>
              </div>
            </div>
          </div>

          {/* How to Use */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
              How to Use Random City Generator
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1 text-lg">Choose Your Location Preference</h3>
                  <p className="text-gray-600">Select a specific continent or country, or choose &quot;Anywhere&quot; for global results. Optionally set a starting letter.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1 text-lg">Generate City</h3>
                  <p className="text-gray-600">Click the generate button and instantly receive a random city with comprehensive details.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1 text-lg">Explore & Discover</h3>
                  <p className="text-gray-600">Read about the city&apos;s culture, landmarks, specialties, view the map, or open in Google Maps for more exploration.</p>
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
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-4 border border-blue-100">
                <h3 className="font-semibold text-gray-800 mb-2">✈️ Travel Planning</h3>
                <p className="text-sm text-gray-600">Generate random destinations for spontaneous trips or bucket list inspiration.</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-100">
                <h3 className="font-semibold text-gray-800 mb-2">📝 Story Settings</h3>
                <p className="text-sm text-gray-600">Find authentic locations for novels, screenplays, and creative writing projects.</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 border border-green-100">
                <h3 className="font-semibold text-gray-800 mb-2">🎓 Educational Projects</h3>
                <p className="text-sm text-gray-600">Create geography quizzes, presentations, and cultural study materials.</p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-4 border border-orange-100">
                <h3 className="font-semibold text-gray-800 mb-2">🎮 Game Development</h3>
                <p className="text-sm text-gray-600">Generate realistic city locations for game maps and virtual worlds.</p>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-xl p-4 border border-red-100">
                <h3 className="font-semibold text-gray-800 mb-2">🎬 Content Creation</h3>
                <p className="text-sm text-gray-600">Discover cities for travel vlogs, blogs, and social media content.</p>
              </div>
              <div className="bg-gradient-to-br from-indigo-50 to-violet-50 rounded-xl p-4 border border-indigo-100">
                <h3 className="font-semibold text-gray-800 mb-2">🎲 Decision Making</h3>
                <p className="text-sm text-gray-600">Let randomness decide your next vacation destination!</p>
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
                <h3 className="font-semibold text-gray-800 mb-2 text-lg">How many cities are in the database?</h3>
                <p className="text-gray-600">Our database includes hundreds of major cities from every continent, covering popular destinations and hidden gems worldwide.</p>
              </div>
              <div className="border-t border-gray-200 pt-5">
                <h3 className="font-semibold text-gray-800 mb-2 text-lg">Can I filter by specific regions?</h3>
                <p className="text-gray-600">Yes! Filter by continent (Africa, Asia, Europe, etc.) or by specific country. You can also filter by starting letter.</p>
              </div>
              <div className="border-t border-gray-200 pt-5">
                <h3 className="font-semibold text-gray-800 mb-2 text-lg">What information is provided for each city?</h3>
                <p className="text-gray-600">Each city includes: location details, map coordinates, population, timezone, currency, language, climate, best time to visit, famous landmarks, cultural highlights, and local specialties.</p>
              </div>
              <div className="border-t border-gray-200 pt-5">
                <h3 className="font-semibold text-gray-800 mb-2 text-lg">Can I view the city on a map?</h3>
                <p className="text-gray-600">Absolutely! Each result includes an embedded map showing the exact location, plus a direct link to open in Google Maps for detailed navigation.</p>
              </div>
              <div className="border-t border-gray-200 pt-5">
                <h3 className="font-semibold text-gray-800 mb-2 text-lg">Is the Random City Generator free?</h3>
                <p className="text-gray-600">Yes! It&apos;s completely free with no registration required. Generate unlimited cities anytime.</p>
              </div>
              <div className="border-t border-gray-200 pt-5">
                <h3 className="font-semibold text-gray-800 mb-2 text-lg">How accurate is the city information?</h3>
                <p className="text-gray-600">We strive to provide accurate, up-to-date information. All data is carefully curated and regularly updated.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

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
