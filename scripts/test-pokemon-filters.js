/**
 * Automated testing script for Pokemon filter validation
 * Tests various filter combinations to ensure correct results
 */

const fs = require('fs');
const path = require('path');

// Read Pokemon data
const POKEMON_DATA_PATH = path.join(__dirname, '../app/data/pokemon.ts');
const fileContent = fs.readFileSync(POKEMON_DATA_PATH, 'utf8');
const pokemonArrayMatch = fileContent.match(/export const pokemon: Pokemon\[\] = (\[[\s\S]*?\n\]);/);

if (!pokemonArrayMatch) {
  console.error('Could not find pokemon array in file');
  process.exit(1);
}

const pokemon = JSON.parse(pokemonArrayMatch[1]);
console.log(`Loaded ${pokemon.length} Pokemon\n`);

// Test Results Tracker
const testResults = {
  passed: 0,
  failed: 0,
  tests: []
};

// Helper function to run a test
function runTest(testName, filterFunc, expectedCondition, minExpected = 0) {
  const filtered = pokemon.filter(filterFunc);
  const passed = filtered.length >= minExpected && (expectedCondition ? expectedCondition(filtered) : true);

  testResults.tests.push({
    name: testName,
    passed,
    resultCount: filtered.length,
    minExpected,
    samples: filtered.slice(0, 3).map(p => `${p.name} (${p.id})`)
  });

  if (passed) {
    testResults.passed++;
    console.log(`✓ ${testName}`);
    console.log(`  Results: ${filtered.length} Pokemon`);
    if (filtered.length > 0) {
      console.log(`  Sample: ${filtered.slice(0, 3).map(p => p.name).join(', ')}`);
    }
  } else {
    testResults.failed++;
    console.log(`✗ ${testName}`);
    console.log(`  Expected: >= ${minExpected}, Got: ${filtered.length}`);
    if (filtered.length > 0) {
      console.log(`  Sample: ${filtered.slice(0, 3).map(p => p.name).join(', ')}`);
    }
  }
  console.log('');
}

console.log('='.repeat(60));
console.log('POKEMON FILTER VALIDATION TESTS');
console.log('='.repeat(60));
console.log('');

// === REGION FILTERS ===
console.log('--- REGION FILTERS ---\n');

runTest(
  'Region: Kanto',
  p => p.region === 'kanto',
  null,
  150 // Should have around 150-151 Kanto Pokemon
);

runTest(
  'Region: Johto',
  p => p.region === 'johto',
  null,
  90 // Should have around 100 Johto Pokemon
);

runTest(
  'Region: Galar',
  p => p.region === 'galar',
  null,
  80 // Should have around 89 Galar Pokemon
);

// === TYPE FILTERS ===
console.log('--- TYPE FILTERS ---\n');

runTest(
  'Type: Fire',
  p => p.types.includes('fire'),
  null,
  50 // Should have many Fire types
);

runTest(
  'Type: Water',
  p => p.types.includes('water'),
  null,
  100 // Water is the most common type
);

runTest(
  'Type: Dragon',
  p => p.types.includes('dragon'),
  null,
  50 // Should have many Dragon types
);

runTest(
  'Type: Dual Type (Fire + Flying)',
  p => p.types.includes('fire') && p.types.includes('flying'),
  null,
  3 // Charizard, Moltres, etc.
);

// === LEGENDARY FILTERS ===
console.log('--- LEGENDARY FILTERS ---\n');

runTest(
  'Legendary: Regular (none)',
  p => p.legendary === 'none',
  null,
  800 // Most Pokemon are regular
);

runTest(
  'Legendary: Legendary',
  p => p.legendary === 'legendary',
  null,
  20 // Box legendaries only (excluding sub-legendaries)
);

runTest(
  'Legendary: Mythical',
  p => p.legendary === 'mythical',
  null,
  20 // Should have around 20+ mythicals
);

runTest(
  'Legendary: Sub-Legendary',
  p => p.legendary === 'sub-legendary',
  null,
  25 // Should have around 25+ sub-legendaries
);

runTest(
  'Legendary: Ultra Beast',
  p => p.legendary === 'ultra-beast',
  null,
  7 // Exactly 7 Ultra Beasts
);

runTest(
  'Legendary: Paradox',
  p => p.legendary === 'paradox',
  null,
  15 // Should have around 16 Paradox Pokemon
);

// === EVOLUTION STAGE FILTERS ===
console.log('--- EVOLUTION STAGE FILTERS ---\n');

runTest(
  'Evolution: Unevolved',
  p => p.evolution === 'unevolved',
  null,
  300 // Should have many unevolved Pokemon
);

runTest(
  'Evolution: Evolved Once',
  p => p.evolution === 'once',
  null,
  200 // Should have many first evolutions
);

runTest(
  'Evolution: Evolved Twice',
  p => p.evolution === 'twice',
  null,
  100 // Should have many final evolutions
);

// === FULLY EVOLVED FILTER ===
console.log('--- FULLY EVOLVED FILTER ---\n');

runTest(
  'Fully Evolved: True',
  p => p.fullyEvolved === true,
  null,
  400 // Should have many fully evolved
);

runTest(
  'Fully Evolved: False',
  p => p.fullyEvolved === false,
  null,
  400 // Pokemon that can still evolve
);

// === FORMS FILTERS ===
console.log('--- FORMS FILTERS ---\n');

runTest(
  'Forms: Mega Evolution',
  p => p.mega === true,
  null,
  40 // Should have around 46 Pokemon with Mega
);

runTest(
  'Forms: Gigantamax',
  p => p.gigantamax === true,
  null,
  30 // Should have around 32 Pokemon with Gigantamax
);

runTest(
  'Forms: Alternate Forms',
  p => p.alternateForm === true,
  null,
  70 // Should have around 82 Pokemon with alternate forms
);

runTest(
  'Forms: Any Form (Mega OR Gigantamax OR Alternate)',
  p => p.mega || p.gigantamax || p.alternateForm,
  null,
  100 // Should have many with some form
);

// === COMBINED FILTERS ===
console.log('--- COMBINED FILTERS ---\n');

runTest(
  'Combined: Kanto + Fire Type',
  p => p.region === 'kanto' && p.types.includes('fire'),
  null,
  10 // Charmander line, Vulpix line, Growlithe line, Ponyta line, Magmar, Moltres, etc.
);

runTest(
  'Combined: Fully Evolved + Legendary',
  p => p.fullyEvolved === true && p.legendary !== 'none',
  null,
  80 // Most legendaries are fully evolved
);

runTest(
  'Combined: Water Type + Evolved Once',
  p => p.types.includes('water') && p.evolution === 'once',
  null,
  15 // Wartortle, Marshtomp, Prinplup, etc.
);

runTest(
  'Combined: Kanto + Evolved Twice + Not Legendary',
  p => p.region === 'kanto' && p.evolution === 'twice' && p.legendary === 'none',
  null,
  10 // Venusaur, Charizard, Blastoise, etc.
);

runTest(
  'Combined: Dragon Type + Legendary + Fully Evolved',
  p => p.types.includes('dragon') && p.legendary !== 'none' && p.fullyEvolved === true,
  null,
  10 // Rayquaza, Dialga, Palkia, Giratina, etc.
);

runTest(
  'Combined: Mega Evolution + Kanto Region',
  p => p.mega === true && p.region === 'kanto',
  null,
  10 // Venusaur, Charizard, Blastoise, Beedrill, Pidgeot, Alakazam, Slowbro, Gengar, Kangaskhan, Pinsir, Gyarados, Aerodactyl, Mewtwo
);

// === EDGE CASES ===
console.log('--- EDGE CASES ---\n');

runTest(
  'Edge Case: Pokemon with 2 types',
  p => p.types.length === 2,
  null,
  400 // Many Pokemon have dual types
);

runTest(
  'Edge Case: Pokemon with 1 type',
  p => p.types.length === 1,
  null,
  300 // Many Pokemon have single types
);

runTest(
  'Edge Case: Unevolved but Fully Evolved (e.g., Legendaries)',
  p => p.evolution === 'unevolved' && p.fullyEvolved === true,
  null,
  100 // Legendaries, some regular Pokemon
);

runTest(
  'Edge Case: All filters disabled (should return all Pokemon)',
  p => true,
  results => results.length === pokemon.length,
  pokemon.length
);

// === DATA INTEGRITY CHECKS ===
console.log('--- DATA INTEGRITY CHECKS ---\n');

runTest(
  'Integrity: All Pokemon have valid regions',
  p => ['kanto', 'johto', 'hoenn', 'sinnoh', 'unova', 'kalos', 'alola', 'galar', 'paldea'].includes(p.region),
  results => results.length === pokemon.length,
  pokemon.length
);

runTest(
  'Integrity: All Pokemon have at least one type',
  p => p.types && p.types.length > 0,
  results => results.length === pokemon.length,
  pokemon.length
);

runTest(
  'Integrity: All Pokemon have valid evolution stages',
  p => ['unevolved', 'once', 'twice'].includes(p.evolution),
  results => results.length === pokemon.length,
  pokemon.length
);

runTest(
  'Integrity: All Pokemon have valid legendary categories',
  p => ['none', 'sub-legendary', 'legendary', 'mythical', 'paradox', 'ultra-beast'].includes(p.legendary),
  results => results.length === pokemon.length,
  pokemon.length
);

runTest(
  'Integrity: All Pokemon have valid IDs (1-1025)',
  p => p.id >= 1 && p.id <= 1025,
  results => results.length === pokemon.length,
  pokemon.length
);

// === SUMMARY ===
console.log('='.repeat(60));
console.log('TEST SUMMARY');
console.log('='.repeat(60));
console.log(`Total Tests: ${testResults.tests.length}`);
console.log(`Passed: ${testResults.passed} ✓`);
console.log(`Failed: ${testResults.failed} ✗`);
console.log(`Success Rate: ${((testResults.passed / testResults.tests.length) * 100).toFixed(1)}%`);
console.log('='.repeat(60));

// Show failed tests
if (testResults.failed > 0) {
  console.log('\nFAILED TESTS DETAILS:\n');
  testResults.tests.filter(t => !t.passed).forEach(test => {
    console.log(`✗ ${test.name}`);
    console.log(`  Expected: >= ${test.minExpected}`);
    console.log(`  Got: ${test.resultCount}`);
    if (test.samples.length > 0) {
      console.log(`  Samples: ${test.samples.join(', ')}`);
    }
    console.log('');
  });
}

// Exit with error code if tests failed
if (testResults.failed > 0) {
  console.log('❌ Some tests failed. Please review the data.');
  process.exit(1);
} else {
  console.log('✅ All tests passed!');
  process.exit(0);
}
