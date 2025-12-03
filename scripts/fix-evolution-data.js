/**
 * Fix Pokemon evolution data by fetching from PokeAPI
 * This will update all Pokemon with correct evolution stages
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

const POKEMON_DATA_PATH = path.join(__dirname, '../app/data/pokemon.ts');

// Helper to fetch from PokeAPI
function fetchFromAPI(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
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

// Delay to avoid rate limiting
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getEvolutionData(pokemonId) {
  try {
    // Fetch Pokemon species data which contains evolution chain URL
    const speciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}/`;
    const speciesData = await fetchFromAPI(speciesUrl);

    // Fetch evolution chain
    const evolutionChainUrl = speciesData.evolution_chain.url;
    const evolutionData = await fetchFromAPI(evolutionChainUrl);

    // Parse evolution chain to determine stage
    const chain = evolutionData.chain;

    // Find where this Pokemon is in the chain
    function findInChain(node, targetId, depth = 0) {
      const nodeId = parseInt(node.species.url.split('/').slice(-2, -1)[0]);

      if (nodeId === targetId) {
        // Calculate if fully evolved
        const hasEvolutions = node.evolves_to && node.evolves_to.length > 0;
        return {
          stage: depth === 0 ? 'unevolved' : depth === 1 ? 'once' : 'twice',
          fullyEvolved: !hasEvolutions
        };
      }

      // Check evolved forms
      if (node.evolves_to) {
        for (const evolution of node.evolves_to) {
          const result = findInChain(evolution, targetId, depth + 1);
          if (result) return result;
        }
      }

      return null;
    }

    const result = findInChain(chain, pokemonId);
    return result || { stage: 'unevolved', fullyEvolved: true }; // Default for special cases

  } catch (error) {
    console.error(`Error fetching evolution data for Pokemon ${pokemonId}:`, error.message);
    return null;
  }
}

async function fixEvolutionData() {
  console.log('Reading Pokemon data...');

  // Read the current pokemon.ts file
  const fileContent = fs.readFileSync(POKEMON_DATA_PATH, 'utf8');

  // Extract the pokemon array
  const pokemonArrayMatch = fileContent.match(/export const pokemon: Pokemon\[\] = (\[[\s\S]*?\n\]);/);

  if (!pokemonArrayMatch) {
    console.error('Could not find pokemon array in file');
    process.exit(1);
  }

  const pokemonData = JSON.parse(pokemonArrayMatch[1]);
  console.log(`Found ${pokemonData.length} Pokemon in database\n`);

  // Process Pokemon in batches
  console.log('Fetching evolution data from PokeAPI...');
  console.log('This will take approximately 15-20 minutes due to rate limiting.\n');

  let updated = 0;
  let errors = 0;

  for (let i = 0; i < pokemonData.length; i++) {
    const pokemon = pokemonData[i];

    // Skip if evolution data already looks correct (not default)
    if (pokemon.evolution !== 'unevolved' || pokemon.fullyEvolved !== false) {
      // Check if it's reasonable (some unevolved are fully evolved, like legendaries)
      // We'll still update to ensure accuracy
    }

    console.log(`[${i + 1}/${pokemonData.length}] Fetching: ${pokemon.name} (ID: ${pokemon.id})...`);

    const evolutionInfo = await getEvolutionData(pokemon.id);

    if (evolutionInfo) {
      pokemon.evolution = evolutionInfo.stage;
      pokemon.fullyEvolved = evolutionInfo.fullyEvolved;
      updated++;
      console.log(`  ✓ Updated: stage=${evolutionInfo.stage}, fullyEvolved=${evolutionInfo.fullyEvolved}`);
    } else {
      errors++;
      console.log(`  ✗ Failed to fetch data`);
    }

    // Rate limiting: 100 requests per minute = ~600ms per request
    await delay(650);

    // Progress report every 50 Pokemon
    if ((i + 1) % 50 === 0) {
      console.log(`\n--- Progress: ${i + 1}/${pokemonData.length} (${Math.round((i + 1) / pokemonData.length * 100)}%) ---`);
      console.log(`Updated: ${updated}, Errors: ${errors}\n`);
    }
  }

  console.log('\n✅ Completed fetching evolution data!');
  console.log(`Total updated: ${updated}`);
  console.log(`Total errors: ${errors}\n`);

  // Save updated data
  console.log('Writing updated data to file...');

  const updatedArrayStr = JSON.stringify(pokemonData, null, 2);
  const updatedFileContent = fileContent.replace(
    /export const pokemon: Pokemon\[\] = \[[\s\S]*?\n\];/,
    `export const pokemon: Pokemon[] = ${updatedArrayStr};`
  );

  fs.writeFileSync(POKEMON_DATA_PATH, updatedFileContent, 'utf8');
  console.log('✓ File updated successfully!\n');

  // Show statistics
  const evolutionStats = {
    unevolved: 0,
    once: 0,
    twice: 0
  };

  const fullyEvolvedStats = {
    true: 0,
    false: 0
  };

  pokemonData.forEach(p => {
    evolutionStats[p.evolution]++;
    fullyEvolvedStats[p.fullyEvolved]++;
  });

  console.log('Evolution Statistics:');
  console.log(`  Unevolved: ${evolutionStats.unevolved}`);
  console.log(`  Evolved Once: ${evolutionStats.once}`);
  console.log(`  Evolved Twice: ${evolutionStats.twice}`);
  console.log(`\nFully Evolved Statistics:`);
  console.log(`  Fully Evolved: ${fullyEvolvedStats.true}`);
  console.log(`  Not Fully Evolved: ${fullyEvolvedStats.false}`);
  console.log('\nDone!');
}

// Run the script
fixEvolutionData().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
