/**
 * Fix legendary category classifications
 * Corrects sub-legendary Pokemon that were misclassified as legendary
 */

const fs = require('fs');
const path = require('path');

const POKEMON_DATA_PATH = path.join(__dirname, '../app/data/pokemon.ts');

// Correct legendary classifications (from official sources)
// Sub-Legendary: Trio/Quartet Pokemon that are not box legendaries
const SUB_LEGENDARY = [
  144, 145, 146,  // Kanto legendary birds
  243, 244, 245,  // Johto legendary beasts
  377, 378, 379,  // Hoenn legendary golems
  380, 381,       // Hoenn eon duo
  480, 481, 482,  // Sinnoh lake guardians
  638, 639, 640,  // Unova swords of justice
  785, 786, 787, 788,  // Alola guardian deities
  891, 892,       // Galar kubfu line
  894, 895,       // Galar regi duo
  896, 897,       // Galar calyrex steeds
  898,            // Calyrex
  1001, 1002, 1003, 1004  // Paldea treasures of ruin
];

// True Legendaries: Box legendaries and their forms
const LEGENDARY = [
  150,  // Mewtwo
  249, 250,  // Lugia, Ho-Oh
  382, 383, 384,  // Kyogre, Groudon, Rayquaza
  483, 484, 487,  // Dialga, Palkia, Giratina
  643, 644, 646,  // Reshiram, Zekrom, Kyurem
  716, 717, 718,  // Xerneas, Yveltal, Zygarde
  791, 792,  // Solgaleo, Lunala
  800,  // Necrozma
  888, 889, 890,  // Zacian, Zamazenta, Eternatus
  905,  // Enamorus
  1007, 1008  // Koraidon, Miraidon
];

// Mythical Pokemon
const MYTHICAL = [
  151,  // Mew
  251,  // Celebi
  385, 386,  // Jirachi, Deoxys
  490, 491, 492, 493, 494,  // Manaphy, Darkrai, Shaymin, Arceus, Phione
  647, 648, 649,  // Keldeo, Meloetta, Genesect
  719, 720, 721,  // Diancie, Hoopa, Volcanion
  801, 802,  // Magearna, Marshadow
  807, 808, 809,  // Zeraora, Meltan, Melmetal
  893,  // Zarude
  1025  // Pecharunt
];

// Ultra Beasts
const ULTRA_BEAST = [793, 794, 795, 796, 797, 798, 799];

// Paradox Pokemon
const PARADOX = [984, 985, 986, 987, 988, 989, 990, 991, 992, 993, 994, 995, 996, 997, 998, 999, 1005, 1006, 1009, 1010];

function getLegendaryCategory(id) {
  if (MYTHICAL.includes(id)) return 'mythical';
  if (ULTRA_BEAST.includes(id)) return 'ultra-beast';
  if (PARADOX.includes(id)) return 'paradox';
  if (SUB_LEGENDARY.includes(id)) return 'sub-legendary';
  if (LEGENDARY.includes(id)) return 'legendary';
  return 'none';
}

function fixLegendaryCategories() {
  console.log('Reading Pokemon data...');

  const fileContent = fs.readFileSync(POKEMON_DATA_PATH, 'utf8');
  const pokemonArrayMatch = fileContent.match(/export const pokemon: Pokemon\[\] = (\[[\s\S]*?\n\]);/);

  if (!pokemonArrayMatch) {
    console.error('Could not find pokemon array in file');
    process.exit(1);
  }

  const pokemonData = JSON.parse(pokemonArrayMatch[1]);
  console.log(`Found ${pokemonData.length} Pokemon in database\n`);

  let updated = 0;
  const changes = [];

  pokemonData.forEach(pokemon => {
    const correctCategory = getLegendaryCategory(pokemon.id);

    if (pokemon.legendary !== correctCategory) {
      changes.push({
        id: pokemon.id,
        name: pokemon.name,
        old: pokemon.legendary,
        new: correctCategory
      });
      pokemon.legendary = correctCategory;
      updated++;
    }
  });

  console.log(`Found ${updated} Pokemon with incorrect legendary categories:\n`);

  const byOldCategory = {};
  changes.forEach(change => {
    if (!byOldCategory[change.old]) byOldCategory[change.old] = [];
    byOldCategory[change.old].push(change);
  });

  Object.keys(byOldCategory).forEach(oldCat => {
    console.log(`From "${oldCat}":`);
    byOldCategory[oldCat].forEach(change => {
      console.log(`  ${change.id}: ${change.name} -> ${change.new}`);
    });
    console.log('');
  });

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
  const stats = {};
  pokemonData.forEach(p => {
    stats[p.legendary] = (stats[p.legendary] || 0) + 1;
  });

  console.log('Updated Legendary Category Statistics:');
  Object.keys(stats).sort().forEach(cat => {
    console.log(`  ${cat}: ${stats[cat]}`);
  });
  console.log('\nDone!');
}

fixLegendaryCategories();
