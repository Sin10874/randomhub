'use client';

import { useState, useMemo } from 'react';
import Navbar from '@/app/components/Navbar';
import Link from 'next/link';
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
  Languages, 
  Calendar, 
  Thermometer, 
  Star, 
  Info 
} from 'lucide-react';

export default function CityGeneratorPage() {
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

        <div className="w-full max-w-5xl mx-auto bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Settings</h2>
          
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
          <div className="w-full max-w-5xl mx-auto bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Result</h2>

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
                <div className="bg-white/80 rounded-lg p-6 border border-blue-100/50">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-3xl font-bold text-gray-800 mb-2">
                        {generatedCity.city}
                      </h3>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Globe className="w-4 h-4" />
                        <span className="text-lg">{generatedCity.country}</span>
                        <span className="mx-2">•</span>
                        <span>{generatedCity.continent}</span>
                      </div>
                    </div>
                    <button
                      onClick={handleCopy}
                      className="p-2 hover:bg-blue-100 rounded-lg transition-colors"
                      aria-label="Copy city name"
                    >
                      {copied ? (
                        <Check className="w-5 h-5 text-green-600" />
                      ) : (
                        <Copy className="w-5 h-5 text-gray-600" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-6">
                    <div className="bg-white/80 rounded-lg overflow-hidden border border-blue-100/50 h-64 lg:h-80">
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

                    <div className="bg-white/80 rounded-lg p-4 border border-blue-100/50">
                      <div className="flex items-center gap-2 text-gray-700 mb-2">
                        <Navigation className="w-4 h-4" />
                        <span className="text-sm font-medium">Coordinates</span>
                      </div>
                      <div className="text-sm text-gray-600 font-mono">
                        {generatedCity.latitude.toFixed(4)}, {generatedCity.longitude.toFixed(4)}
                      </div>
                    </div>

                    {(generatedCity.population || generatedCity.timezone || generatedCity.currency || generatedCity.language) && (
                      <div className="grid grid-cols-2 gap-3">
                        {generatedCity.population && (
                          <div className="bg-white/80 rounded-lg p-4 border border-blue-100/50">
                            <div className="flex items-center gap-2 text-gray-700 mb-1">
                              <Users className="w-4 h-4" />
                              <span className="text-xs font-medium">Population</span>
                            </div>
                            <div className="text-sm text-gray-800 font-semibold">{generatedCity.population}</div>
                          </div>
                        )}
                        {generatedCity.timezone && (
                          <div className="bg-white/80 rounded-lg p-4 border border-blue-100/50">
                            <div className="flex items-center gap-2 text-gray-700 mb-1">
                              <Clock className="w-4 h-4" />
                              <span className="text-xs font-medium">Timezone</span>
                            </div>
                            <div className="text-sm text-gray-800 font-semibold">{generatedCity.timezone}</div>
                          </div>
                        )}
                        {generatedCity.currency && (
                          <div className="bg-white/80 rounded-lg p-4 border border-blue-100/50">
                            <div className="flex items-center gap-2 text-gray-700 mb-1">
                              <DollarSign className="w-4 h-4" />
                              <span className="text-xs font-medium">Currency</span>
                            </div>
                            <div className="text-sm text-gray-800 font-semibold">{generatedCity.currency}</div>
                          </div>
                        )}
                        {generatedCity.language && generatedCity.language.length > 0 && (
                          <div className="bg-white/80 rounded-lg p-4 border border-blue-100/50">
                            <div className="flex items-center gap-2 text-gray-700 mb-1">
                              <Languages className="w-4 h-4" />
                              <span className="text-xs font-medium">Language</span>
                            </div>
                            <div className="text-sm text-gray-800 font-semibold">{generatedCity.language.join(', ')}</div>
                          </div>
                        )}
                      </div>
                    )}

                    {(generatedCity.bestTimeToVisit || generatedCity.climate) && (
                      <div className="bg-white/80 rounded-lg p-4 border border-blue-100/50 space-y-3">
                        {generatedCity.bestTimeToVisit && (
                          <div>
                            <div className="flex items-center gap-2 text-gray-700 mb-1">
                              <Calendar className="w-4 h-4" />
                              <span className="text-sm font-medium">Best Time to Visit</span>
                            </div>
                            <div className="text-sm text-gray-600">{generatedCity.bestTimeToVisit}</div>
                          </div>
                        )}
                        {generatedCity.climate && (
                          <div>
                            <div className="flex items-center gap-2 text-gray-700 mb-1">
                              <Thermometer className="w-4 h-4" />
                              <span className="text-sm font-medium">Climate</span>
                            </div>
                            <div className="text-sm text-gray-600">{generatedCity.climate}</div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="space-y-6">
                    <div className="bg-white/80 rounded-lg p-6 border border-blue-100/50">
                      <div className="flex items-center gap-2 text-gray-700 mb-4">
                        <MapPin className="w-5 h-5" />
                        <span className="text-lg font-semibold">About</span>
                      </div>
                      <p className="text-base text-gray-700 leading-relaxed mb-4">
                        {generatedCity.description}
                      </p>
                      {generatedCity.overview && (
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {generatedCity.overview}
                        </p>
                      )}
                    </div>

                    {generatedCity.highlights && (
                      <div className="bg-white/80 rounded-lg p-6 border border-blue-100/50">
                        <div className="flex items-center gap-2 text-gray-700 mb-4">
                          <Star className="w-5 h-5" />
                          <span className="text-lg font-semibold">Highlights</span>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {generatedCity.highlights}
                        </p>
                      </div>
                    )}

                    {generatedCity.culture && (
                      <div className="bg-white/80 rounded-lg p-6 border border-blue-100/50">
                        <div className="flex items-center gap-2 text-gray-700 mb-4">
                          <Info className="w-5 h-5" />
                          <span className="text-lg font-semibold">Culture</span>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {generatedCity.culture}
                        </p>
                      </div>
                    )}

                    {generatedCity.landmarks && generatedCity.landmarks.length > 0 && (
                      <div className="bg-white/80 rounded-lg p-6 border border-blue-100/50">
                        <div className="flex items-center gap-2 text-gray-700 mb-4">
                          <Star className="w-5 h-5" />
                          <span className="text-lg font-semibold">Famous Landmarks</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {generatedCity.landmarks.map((landmark, index) => (
                            <span
                              key={index}
                              className="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                            >
                              {landmark}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {generatedCity.specialties && generatedCity.specialties.length > 0 && (
                      <div className="bg-white/80 rounded-lg p-6 border border-blue-100/50">
                        <div className="flex items-center gap-2 text-gray-700 mb-4">
                          <Star className="w-5 h-5" />
                          <span className="text-lg font-semibold">Specialties</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {generatedCity.specialties.map((specialty, index) => (
                            <span
                              key={index}
                              className="inline-block px-3 py-1 bg-cyan-50 text-cyan-700 rounded-full text-sm font-medium"
                            >
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    onClick={handleGenerate}
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    <RotateCw className="w-4 h-4" />
                    Regenerate
                  </button>
                  <a
                    href={getGoogleMapsSearchUrl(generatedCity)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-cyan-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    <MapPin className="w-4 h-4" />
                    Open Maps
                  </a>
                </div>
              </div>
            ) : null}
          </div>
        )}

        <div className="text-center">
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-white/90 backdrop-blur-sm text-blue-700 font-semibold rounded-lg hover:bg-white transition-all shadow-lg"
          >
            Back to Home
          </Link>
        </div>
      </main>

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
