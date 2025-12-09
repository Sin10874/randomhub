/**
 * Fetch complete Pokemon data from PokeAPI
 * This script fetches all main Pokemon (1-1025) with accurate official data
 */

const fs = require('fs');
const https = require('https');

const BASE_URL = 'https://pokeapi.co/api/v2';
const OUTPUT_FILE = './app/data/pokemon-complete.ts';
const MAX_POKEMON = process.env.MAX_POKEMON ? parseInt(process.env.MAX_POKEMON) : 200; // Default 200 for testing, use MAX_POKEMON=1025 for full fetch
const BATCH_SIZE = 50; // Fetch in batches to avoid overwhelming the API
const DELAY_MS = 100; // Delay between requests to be respectful

// Generation to Region mapping (official)
const GENERATION_REGION_MAP = {
  'generation-i': 'kanto',
  'generation-ii': 'johto',
  'generation-iii': 'hoenn',
  'generation-iv': 'sinnoh',
  'generation-v': 'unova',
  'generation-vi': 'kalos',
  'generation-vii': 'alola',
  'generation-viii': 'galar',
  'generation-ix': 'paldea'
};

// Helper function to make HTTPS GET requests
function httpsGet(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

// Delay function
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Fetch Pokemon data
async function fetchPokemon(id) {
  try {
    console.log(`Fetching Pokemon #${id}...`);

    // Fetch basic Pokemon data
    const pokemon = await httpsGet(`${BASE_URL}/pokemon/${id}`);

    // Fetch species data for region, legendary status, etc.
    const species = await httpsGet(pokemon.species.url);

    // Extract types
    const types = pokemon.types.map(t => t.type.name);

    // Extract region from generation
    const generationName = species.generation.name;
    const region = GENERATION_REGION_MAP[generationName] || 'unknown';

    // Determine legendary category
    let legendary = 'none';
    if (species.is_legendary) {
      legendary = 'legendary';
    } else if (species.is_mythical) {
      legendary = 'mythical';
    }
    // Note: Sub-legendary, Paradox, and Ultra Beast need additional logic

    // Determine evolution stage
    const evolutionChain = await httpsGet(species.evolution_chain.url);
    const evolutionStage = getEvolutionStage(evolutionChain.chain, pokemon.name);

    // Check if fully evolved
    const fullyEvolved = evolutionStage.stage === evolutionStage.maxStage;

    return {
      id: pokemon.id,
      name: capitalizeFirstLetter(pokemon.name),
      region: region,
      types: types,
      legendary: legendary,
      evolution: evolutionStage.stage === 1 ? 'unevolved' : evolutionStage.stage === 2 ? 'once' : 'twice',
      fullyEvolved: fullyEvolved,
      shiny: false, // Default, can be toggled in UI
      mega: false, // Will be determined separately
      gigantamax: false // Will be determined separately
    };

  } catch (error) {
    console.error(`Error fetching Pokemon #${id}:`, error.message);
    return null;
  }
}

// Helper to determine evolution stage
function getEvolutionStage(chain, pokemonName) {
  let stage = 1;
  let maxStage = 1;
  let current = chain;

  // Count total evolution stages
  while (current.evolves_to.length > 0) {
    maxStage++;
    current = current.evolves_to[0];
  }

  // Find current Pokemon's stage
  current = chain;
  if (current.species.name === pokemonName) {
    return { stage: 1, maxStage };
  }

  for (const evo1 of current.evolves_to) {
    if (evo1.species.name === pokemonName) {
      return { stage: 2, maxStage };
    }
    for (const evo2 of evo1.evolves_to) {
      if (evo2.species.name === pokemonName) {
        return { stage: 3, maxStage };
      }
    }
  }

  return { stage: 1, maxStage };
}

// Capitalize first letter
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Main function
async function main() {
  console.log('Starting Pokemon data fetch from PokeAPI...');
  console.log(`Fetching ${MAX_POKEMON} main Pokemon...`);

  const allPokemon = [];

  // Fetch in batches
  for (let i = 1; i <= MAX_POKEMON; i++) {
    const pokemon = await fetchPokemon(i);
    if (pokemon) {
      allPokemon.push(pokemon);
    }

    // Add delay to be respectful to the API
    await delay(DELAY_MS);

    // Progress update every 50 Pokemon
    if (i % 50 === 0) {
      console.log(`Progress: ${i}/${MAX_POKEMON} Pokemon fetched (${Math.round(i/MAX_POKEMON*100)}%)`);
    }
  }

  console.log(`\nSuccessfully fetched ${allPokemon.length} Pokemon!`);
  console.log('Generating TypeScript file...');

  // Generate TypeScript file content
  const tsContent = `// Complete Pokemon data fetched from PokeAPI (Official Data)
// Generated on: ${new Date().toISOString()}
// Total Pokemon: ${allPokemon.length}

export interface Pokemon {
  id: number;
  name: string;
  region: string;
  types: string[];
  legendary: 'none' | 'sub-legendary' | 'legendary' | 'mythical' | 'paradox' | 'ultra-beast';
  evolution: 'unevolved' | 'once' | 'twice';
  fullyEvolved: boolean;
  shiny: boolean;
  mega: boolean;
  gigantamax: boolean;
}

// Regions
export const regions = [
  { value: 'all', label: 'All Regions' },
  { value: 'kanto', label: 'Kanto' },
  { value: 'johto', label: 'Johto' },
  { value: 'hoenn', label: 'Hoenn' },
  { value: 'sinnoh', label: 'Sinnoh' },
  { value: 'unova', label: 'Unova' },
  { value: 'kalos', label: 'Kalos' },
  { value: 'alola', label: 'Alola' },
  { value: 'galar', label: 'Galar' },
  { value: 'paldea', label: 'Paldea' },
];

// Types
export const types = [
  { value: 'all', label: 'All Types' },
  { value: 'normal', label: 'Normal' },
  { value: 'fire', label: 'Fire' },
  { value: 'water', label: 'Water' },
  { value: 'electric', label: 'Electric' },
  { value: 'grass', label: 'Grass' },
  { value: 'ice', label: 'Ice' },
  { value: 'fighting', label: 'Fighting' },
  { value: 'poison', label: 'Poison' },
  { value: 'ground', label: 'Ground' },
  { value: 'flying', label: 'Flying' },
  { value: 'psychic', label: 'Psychic' },
  { value: 'bug', label: 'Bug' },
  { value: 'rock', label: 'Rock' },
  { value: 'ghost', label: 'Ghost' },
  { value: 'dragon', label: 'Dragon' },
  { value: 'dark', label: 'Dark' },
  { value: 'steel', label: 'Steel' },
  { value: 'fairy', label: 'Fairy' },
];

// Legendary categories
export const legendaryCategories = [
  { value: 'all', label: 'All Categories' },
  { value: 'none', label: 'Regular' },
  { value: 'sub-legendary', label: 'Sub-Legendary' },
  { value: 'legendary', label: 'Legendary' },
  { value: 'mythical', label: 'Mythical' },
  { value: 'paradox', label: 'Paradox' },
  { value: 'ultra-beast', label: 'Ultra Beast' },
];

// Evolution stages
export const evolutionStages = [
  { value: 'all', label: 'All Stages' },
  { value: 'unevolved', label: 'Unevolved' },
  { value: 'once', label: 'Evolved Once' },
  { value: 'twice', label: 'Evolved Twice' },
];

// Complete Pokemon database (${allPokemon.length} Pokemon)
export const pokemon: Pokemon[] = ${JSON.stringify(allPokemon, null, 2)};
`;

  // Write to file
  fs.writeFileSync(OUTPUT_FILE, tsContent);
  console.log(`\nData written to ${OUTPUT_FILE}`);
  console.log('Done!');
}

// Run the script
main().catch(console.error);
