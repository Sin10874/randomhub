// Script to update Pokemon data with Mega Evolution and Gigantamax forms
// Based on official Bulbapedia data

const fs = require('fs');
const path = require('path');

// Pokemon that can Mega Evolve (from Bulbapedia - including pre-2025 forms)
const megaEvolutionIds = [
  3, 6, 9, 15, 18, 65, 80, 94, 115, 127, 130, 142, 150,
  181, 208, 212, 214, 229, 248,
  254, 257, 260, 282, 302, 303, 306, 308, 310, 319, 323, 334, 354, 359, 362, 373, 376, 380, 381, 384,
  428, 445, 448, 460, 475,
  531, 719
];

// Pokemon that can Gigantamax (from Bulbapedia)
const gigantamaxIds = [
  3, 6, 9, 12, 25, 52, 68, 94, 99, 131, 133, 143,
  569, 809, 812, 815, 818, 823, 826, 834, 839, 841, 842, 844, 849, 851, 858, 861, 869, 879, 884, 892
];

// Pokemon with alternate forms (regional variants and other special forms)
// This is a simplified list - you can expand it based on needs
const alternateFormsIds = [
  19, 20, 26, 27, 28, 37, 38, 50, 51, 52, 53, 74, 75, 76, 88, 89, 103, 105, // Alolan forms
  52, 77, 79, 80, 83, 110, 122, 144, 145, 146, 199, 222, 263, 264, 554, 555, 562, 618, // Galarian forms
  58, 59, 100, 101, 157, 211, 215, 503, 549, 570, 571, 628, 705, 706, 713, 724, // Hisuian forms
  413, 422, 423, 479, 487, 492, 585, 586, 641, 642, 645, 647, 648, 649, 658, 666, 669, 670, 671, 676, 678, 681, 710, 711, 716, 718, 741, 745, 746, 774, 801, // Other alternate forms
];

// Read the current pokemon data
const pokemonDataPath = path.join(__dirname, '../app/data/pokemon.ts');
let fileContent = fs.readFileSync(pokemonDataPath, 'utf8');

// Extract the pokemon array from the file
const pokemonArrayMatch = fileContent.match(/export const pokemon: Pokemon\[\] = (\[[\s\S]*?\n\]);/);

if (!pokemonArrayMatch) {
  console.error('Could not find pokemon array in file');
  process.exit(1);
}

const pokemonArrayStr = pokemonArrayMatch[1];
const pokemonData = JSON.parse(pokemonArrayStr);

console.log(`Found ${pokemonData.length} Pokemon in database`);

// Update Pokemon with form data
let megaCount = 0;
let gigantamaxCount = 0;
let alternateCount = 0;

pokemonData.forEach(pokemon => {
  // Update Mega Evolution
  if (megaEvolutionIds.includes(pokemon.id)) {
    pokemon.mega = true;
    megaCount++;
  }

  // Update Gigantamax
  if (gigantamaxIds.includes(pokemon.id)) {
    pokemon.gigantamax = true;
    gigantamaxCount++;
  }

  // Update Alternate Forms (simplified - marking regional variants)
  if (alternateFormsIds.includes(pokemon.id)) {
    pokemon.alternateForm = true;
    alternateCount++;
  }
});

console.log(`Updated ${megaCount} Pokemon with Mega Evolution`);
console.log(`Updated ${gigantamaxCount} Pokemon with Gigantamax`);
console.log(`Updated ${alternateCount} Pokemon with Alternate Forms`);

// Convert back to TypeScript format
const updatedArrayStr = JSON.stringify(pokemonData, null, 2);

// Replace the pokemon array in the file
const updatedFileContent = fileContent.replace(
  /export const pokemon: Pokemon\[\] = \[[\s\S]*?\n\];/,
  `export const pokemon: Pokemon[] = ${updatedArrayStr};`
);

// Write back to file
fs.writeFileSync(pokemonDataPath, updatedFileContent, 'utf8');

console.log('\n✅ Successfully updated pokemon.ts with forms data!');
console.log(`\nSummary:`);
console.log(`  - Mega Evolution capable: ${megaCount} Pokemon`);
console.log(`  - Gigantamax capable: ${gigantamaxCount} Pokemon`);
console.log(`  - Alternate Forms: ${alternateCount} Pokemon`);
