import citiesData from '@/public/data/cities.json';

export interface City {
  city: string;
  country: string;
  continent: string;
  latitude: number;
  longitude: number;
  description: string;
  population?: string;
  timezone?: string;
  currency?: string;
  language?: string[];
  bestTimeToVisit?: string;
  climate?: string;
  landmarks?: string[];
  specialties?: string[];
  nickname?: string;
  famousFor?: string[];
  overview?: string;
  highlights?: string;
  culture?: string;
}

export interface CityFilterOptions {
  continent?: string;
  country?: string;
  startsWith?: string;
}

// Get all unique continents
export function getContinents(): string[] {
  const continents = new Set<string>();
  citiesData.forEach((city: City) => {
    continents.add(city.continent);
  });
  return Array.from(continents).sort();
}

// Get all unique countries (across all continents)
export function getAllCountries(): string[] {
  const countries = new Set<string>();
  citiesData.forEach((city: City) => {
    countries.add(city.country);
  });
  return Array.from(countries).sort();
}

// Filter cities based on options
export function filterCities(options: CityFilterOptions): City[] {
  let filtered = [...citiesData];

  // Filter by continent
  if (options.continent && options.continent !== 'all') {
    filtered = filtered.filter((city: City) => city.continent === options.continent);
  }

  // Filter by country
  if (options.country && options.country !== 'all') {
    filtered = filtered.filter((city: City) => city.country === options.country);
  }

  // Filter by starts with
  if (options.startsWith && options.startsWith.trim() !== '') {
    const letter = options.startsWith.trim().toLowerCase();
    filtered = filtered.filter((city: City) =>
      city.city.toLowerCase().startsWith(letter)
    );
  }

  return filtered;
}

// Generate a random city based on filter options
export function generateRandomCity(options: CityFilterOptions): City | null {
  const filtered = filterCities(options);

  if (filtered.length === 0) {
    return null;
  }

  const randomIndex = Math.floor(Math.random() * filtered.length);
  return filtered[randomIndex];
}

// Get OpenStreetMap embed URL (free, no API key needed)
export function getMapEmbedUrl(city: City): string {
  return `https://www.openstreetmap.org/export/embed.html?bbox=${city.longitude - 0.01},${city.latitude - 0.01},${city.longitude + 0.01},${city.latitude + 0.01}&layer=mapnik&marker=${city.latitude},${city.longitude}`;
}

// Get Google Maps search URL (no API key needed)
export function getGoogleMapsSearchUrl(city: City): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(city.latitude + ',' + city.longitude)}`;
}

