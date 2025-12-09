/**
 * Convert downloaded Pokemon JSON to our format
 * Source: https://github.com/Pokedex100-News/pokedexEverything
 */

const fs = require('fs');

const INPUT_FILE = '/tmp/pokemon-complete.json';
const OUTPUT_FILE = './app/data/pokemon.ts';

// Generation to Region mapping
const GENERATION_TO_REGION = {
  'Generation I': 'kanto',
  'Generation II': 'johto',
  'Generation III': 'hoenn',
  'Generation IV': 'sinnoh',
  'Generation V': 'unova',
  'Generation VI': 'kalos',
  'Generation VII': 'alola',
  'Generation VIII': 'galar',
  'Generation IX': 'paldea'
};

// Known legendary and mythical Pokemon (from official sources)
const LEGENDARY_POKEMON = {
  legendary: [144, 145, 146, 150, 243, 244, 245, 249, 250, 377, 378, 379, 380, 381, 382, 383, 384, 480, 481, 482, 483, 484, 487, 638, 639, 640, 643, 644, 646, 716, 717, 718, 785, 786, 787, 788, 791, 792, 800, 888, 889, 890, 894, 895, 896, 897, 898, 905, 1007, 1008],
  mythical: [151, 251, 385, 386, 490, 491, 492, 493, 494, 647, 648, 649, 719, 720, 721, 801, 802, 807, 808, 809, 893, 1025],
  'sub-legendary': [144, 145, 146, 243, 244, 245, 377, 378, 379, 380, 381, 480, 481, 482, 638, 639, 640, 785, 786, 787, 788, 891, 892, 894, 895, 896, 897, 898, 1001, 1002, 1003, 1004],
  'ultra-beast': [793, 794, 795, 796, 797, 798, 799],
  paradox: [984, 985, 986, 987, 988, 989, 990, 991, 992, 993, 994, 995, 996, 997, 998, 999, 1005, 1006, 1009, 1010]
};

// Helper function to determine legendary category
function getLegendaryCategory(id) {
  if (LEGENDARY_POKEMON.mythical.includes(id)) return 'mythical';
  if (LEGENDARY_POKEMON.legendary.includes(id)) return 'legendary';
  if (LEGENDARY_POKEMON['sub-legendary'].includes(id)) return 'sub-legendary';
  if (LEGENDARY_POKEMON['ultra-beast'].includes(id)) return 'ultra-beast';
  if (LEGENDARY_POKEMON.paradox.includes(id)) return 'paradox';
  return 'none';
}

// Helper to determine evolution stage
function getEvolutionStage(id, name) {
  // This is a simplified version - ideally would fetch from evolution chains
  // For now, we'll use heuristics based on known patterns

  // Known evolution lines (simplified)
  const evolutionLines = {
    // Gen 1 starters
    1: { stage: 'unevolved', fullyEvolved: false }, // Bulbasaur
    2: { stage: 'once', fullyEvolved: false }, // Ivysaur
    3: { stage: 'twice', fullyEvolved: true }, // Venusaur
    4: { stage: 'unevolved', fullyEvolved: false }, // Charmander
    5: { stage: 'once', fullyEvolved: false }, // Charmeleon
    6: { stage: 'twice', fullyEvolved: true }, // Charizard
    7: { stage: 'unevolved', fullyEvolved: false }, // Squirtle
    8: { stage: 'once', fullyEvolved: false }, // Wartortle
    9: { stage: 'twice', fullyEvolved: true }, // Blastoise
    // Add more as needed, or fetch from API
  };

  // If we have specific data, use it
  if (evolutionLines[id]) {
    return evolutionLines[id];
  }

  // Default: assume unevolved for most, fully evolved for legendaries
  const legendary = getLegendaryCategory(id);
  if (legendary !== 'none') {
    return { stage: 'unevolved', fullyEvolved: true };
  }

  // Default for regular Pokemon
  return { stage: 'unevolved', fullyEvolved: false };
}

// Main conversion function
function convertPokemonData() {
  console.log('Reading Pokemon data...');
  const rawData = JSON.parse(fs.readFileSync(INPUT_FILE, 'utf8'));

  console.log(`Found ${rawData.length} Pokemon entries`);

  const converted = [];
  let processedCount = 0;

  for (const pokemon of rawData) {
    // Extract ID number from "#0001" format
    const id = parseInt(pokemon.id.replace('#', ''), 10);

    // Skip if ID is too high (alternate forms)
    if (id > 1025) {
      continue;
    }

    // Get English name
    const name = pokemon.name.english;

    // Get region from generation
    const region = GENERATION_TO_REGION[pokemon.generation] || 'unknown';

    // Get types from first form (lowercase)
    const types = pokemon.formData && pokemon.formData.length > 0
      ? pokemon.formData[0].type.map(t => t.toLowerCase())
      : [];

    // Get legendary category
    const legendary = getLegendaryCategory(id);

    // Get evolution info
    const evolutionInfo = getEvolutionStage(id, name);

    converted.push({
      id: id,
      name: name,
      region: region,
      types: types,
      legendary: legendary,
      evolution: evolutionInfo.stage,
      fullyEvolved: evolutionInfo.fullyEvolved,
      shiny: false,
      mega: false,
      gigantamax: false
    });

    processedCount++;
    if (processedCount % 100 === 0) {
      console.log(`Processed ${processedCount} Pokemon...`);
    }
  }

  // Sort by ID
  converted.sort((a, b) => a.id - b.id);

  console.log(`Successfully converted ${converted.length} Pokemon!`);

  return converted;
}

// Generate TypeScript file
function generateTypeScriptFile(pokemonData) {
  console.log('Generating TypeScript file...');

  const tsContent = `// Complete Pokemon data from official sources
// Source: https://github.com/Pokedex100-News/pokedexEverything
// Generated on: ${new Date().toISOString()}
// Total Pokemon: ${pokemonData.length}

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

// Complete Pokemon database (${pokemonData.length} Pokemon)
export const pokemon: Pokemon[] = ${JSON.stringify(pokemonData, null, 2)};
`;

  fs.writeFileSync(OUTPUT_FILE, tsContent);
  console.log(`Data written to ${OUTPUT_FILE}`);
}

// Run the conversion
try {
  const pokemonData = convertPokemonData();
  generateTypeScriptFile(pokemonData);
  console.log('\nConversion complete!');
  console.log(`Total Pokemon: ${pokemonData.length}`);

  // Show statistics
  const stats = {
    byRegion: {},
    byType: {},
    byLegendary: {}
  };

  pokemonData.forEach(p => {
    stats.byRegion[p.region] = (stats.byRegion[p.region] || 0) + 1;
    p.types.forEach(t => {
      stats.byType[t] = (stats.byType[t] || 0) + 1;
    });
    stats.byLegendary[p.legendary] = (stats.byLegendary[p.legendary] || 0) + 1;
  });

  console.log('\nStatistics:');
  console.log('By Region:', stats.byRegion);
  console.log('By Legendary:', stats.byLegendary);
  console.log('Done!');
} catch (error) {
  console.error('Error:', error);
  process.exit(1);
}
