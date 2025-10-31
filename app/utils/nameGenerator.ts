import fantasyNamesData from '@/public/data/fantasy-names.json';

export type NameCategory =
  | 'anywhere'
  | 'american'
  | 'british'
  | 'australian'
  | 'brazilian'
  | 'canadian'
  | 'chinese'
  | 'danish'
  | 'french'
  | 'german'
  | 'indian'
  | 'iranian'
  | 'japanese'
  | 'mexican'
  | 'dutch'
  | 'spanish'
  | 'swiss'
  | 'turkish'
  | 'dragon'
  | 'elf'
  | 'wizard'
  | 'robot';

export type Gender = 'male' | 'female' | 'both';

export interface FilterOptions {
  category: NameCategory;
  gender: Gender;
  count: number;
  startsWith?: string;
}

interface RandomUserResponse {
  results: Array<{
    name: {
      title: string;
      first: string;
      last: string;
    };
  }>;
  error?: string;
}

// Map category to API nationality code
const categoryToNat: Record<string, string> = {
  american: 'us',
  british: 'gb',
  australian: 'au',
  brazilian: 'br',
  canadian: 'ca',
  chinese: 'ch',
  danish: 'dk',
  french: 'fr',
  german: 'de',
  indian: 'in',
  iranian: 'ir',
  japanese: 'jp',
  mexican: 'mx',
  dutch: 'nl',
  spanish: 'es',
  swiss: 'ch',
  turkish: 'tr',
};

// Real name categories (excluding 'anywhere')
const REAL_NAME_CATEGORIES = [
  'american', 'british', 'australian', 'brazilian', 'canadian', 
  'chinese', 'danish', 'french', 'german', 'indian', 'iranian',
  'japanese', 'mexican', 'dutch', 'spanish', 'swiss', 'turkish'
] as const;

// Check if category is a real name category (needs API call)
function isRealNameCategory(category: NameCategory): boolean {
  return category === 'anywhere' || (REAL_NAME_CATEGORIES as readonly string[]).includes(category);
}

// Fetch real names from randomuser.me API
async function fetchRealNames(options: {
  category: NameCategory;
  gender: Gender;
  count: number;
}): Promise<string[]> {
  const genderParam = options.gender === 'both' ? '' : `&gender=${options.gender}`;
  
  // For 'anywhere', use multiple nationalities
  let natParam = '';
  if (options.category === 'anywhere') {
    // Use a mix of popular countries
    natParam = '&nat=us,gb,au,ca,fr,de,es,br,mx,nl,dk,ch,tr,in,ir,jp';
  } else {
    const nat = categoryToNat[options.category];
    natParam = `&nat=${nat}`;
  }
  
  try {
    const response = await fetch(
      `https://randomuser.me/api/?results=${options.count}${natParam}${genderParam}`
    );
    
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    
    const data: RandomUserResponse = await response.json();
    
    if (data.error) {
      throw new Error(data.error);
    }
    
    return data.results.map(
      (user) => `${user.name.first} ${user.name.last}`
    );
  } catch (error) {
    console.error('Error fetching real names:', error);
    throw new Error('Failed to fetch names from API. Please try again.');
  }
}

// Get fantasy names from local JSON data
function getFantasyNames(options: {
  category: 'dragon' | 'elf' | 'wizard' | 'robot';
  count: number;
  startsWith?: string;
}): string[] {
  const categoryData = fantasyNamesData[options.category] as string[];
  
  if (!categoryData || categoryData.length === 0) {
    throw new Error(`No data available for category: ${options.category}`);
  }
  
  // Filter by starts with if provided
  let filtered = categoryData;
  if (options.startsWith) {
    const letter = options.startsWith.toLowerCase();
    filtered = categoryData.filter((name) =>
      name.toLowerCase().startsWith(letter)
    );
    
    if (filtered.length === 0) {
      throw new Error(
        `No ${options.category} names found starting with "${options.startsWith.toUpperCase()}"`
      );
    }
  }
  
  // Randomly select the requested count
  const result: string[] = [];
  const available = [...filtered]; // Create a copy to avoid modifying original
  
  for (let i = 0; i < Math.min(options.count, available.length); i++) {
    const randomIndex = Math.floor(Math.random() * available.length);
    result.push(available[randomIndex]);
    available.splice(randomIndex, 1); // Remove to avoid duplicates
  }
  
  return result;
}

// Main function to generate names based on options
export async function generateNames(options: FilterOptions): Promise<string[]> {
  if (isRealNameCategory(options.category)) {
    // Call API for real names
    return await fetchRealNames({
      category: options.category,
      gender: options.gender,
      count: options.count,
    });
  } else {
    // Get fantasy names from local data
    const names = getFantasyNames({
      category: options.category as 'dragon' | 'elf' | 'wizard' | 'robot',
      count: options.count,
      startsWith: options.startsWith,
    });
    
    // Filter by starts with if provided (for consistency, though API doesn't support this)
    if (options.startsWith) {
      const letter = options.startsWith.toLowerCase();
      return names.filter((name) => name.toLowerCase().startsWith(letter));
    }
    
    return names;
  }
}

