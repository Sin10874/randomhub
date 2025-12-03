// Complete Pokemon data from official sources
// Source: https://github.com/Pokedex100-News/pokedexEverything
// Generated on: 2025-12-02T08:22:42.655Z
// Total Pokemon: 1025

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
  alternateForm?: boolean; // Regional variants and other special forms
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

// Fully evolved status
export const fullyEvolvedOptions = [
  { value: 'all', label: 'All' },
  { value: 'true', label: 'Fully Evolved' },
  { value: 'false', label: 'Not Fully Evolved' },
];

// Forms (special variants) - for checkbox filters
export const formOptions = [
  { value: 'alternateForm', label: 'Alternate Forms' },
  { value: 'mega', label: 'Mega Evolutions' },
  { value: 'gigantamax', label: 'Gigantamax Forms' },
];

// Complete Pokemon database (1025 Pokemon)
export const pokemon: Pokemon[] = [
  {
    "id": 1,
    "name": "Bulbasaur",
    "region": "kanto",
    "types": [
      "grass",
      "poison"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 2,
    "name": "Ivysaur",
    "region": "kanto",
    "types": [
      "grass",
      "poison"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 3,
    "name": "Venusaur",
    "region": "kanto",
    "types": [
      "grass",
      "poison"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": true,
    "gigantamax": true
  },
  {
    "id": 4,
    "name": "Charmander",
    "region": "kanto",
    "types": [
      "fire"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 5,
    "name": "Charmeleon",
    "region": "kanto",
    "types": [
      "fire"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 6,
    "name": "Charizard",
    "region": "kanto",
    "types": [
      "fire",
      "flying"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": true,
    "gigantamax": true
  },
  {
    "id": 7,
    "name": "Squirtle",
    "region": "kanto",
    "types": [
      "water"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 8,
    "name": "Wartortle",
    "region": "kanto",
    "types": [
      "water"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 9,
    "name": "Blastoise",
    "region": "kanto",
    "types": [
      "water"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": true,
    "gigantamax": true
  },
  {
    "id": 10,
    "name": "Caterpie",
    "region": "kanto",
    "types": [
      "bug"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 11,
    "name": "Metapod",
    "region": "kanto",
    "types": [
      "bug"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 12,
    "name": "Butterfree",
    "region": "kanto",
    "types": [
      "bug",
      "flying"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": true
  },
  {
    "id": 13,
    "name": "Weedle",
    "region": "kanto",
    "types": [
      "bug",
      "poison"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 14,
    "name": "Kakuna",
    "region": "kanto",
    "types": [
      "bug",
      "poison"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 15,
    "name": "Beedrill",
    "region": "kanto",
    "types": [
      "bug",
      "poison"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": true,
    "gigantamax": false
  },
  {
    "id": 16,
    "name": "Pidgey",
    "region": "kanto",
    "types": [
      "normal",
      "flying"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 17,
    "name": "Pidgeotto",
    "region": "kanto",
    "types": [
      "normal",
      "flying"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 18,
    "name": "Pidgeot",
    "region": "kanto",
    "types": [
      "normal",
      "flying"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": true,
    "gigantamax": false
  },
  {
    "id": 19,
    "name": "Rattata",
    "region": "kanto",
    "types": [
      "normal"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false,
    "alternateForm": true
  },
  {
    "id": 20,
    "name": "Raticate",
    "region": "kanto",
    "types": [
      "normal"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false,
    "alternateForm": true
  },
  {
    "id": 21,
    "name": "Spearow",
    "region": "kanto",
    "types": [
      "normal",
      "flying"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 22,
    "name": "Fearow",
    "region": "kanto",
    "types": [
      "normal",
      "flying"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 23,
    "name": "Ekans",
    "region": "kanto",
    "types": [
      "poison"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 24,
    "name": "Arbok",
    "region": "kanto",
    "types": [
      "poison"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 25,
    "name": "Pikachu",
    "region": "kanto",
    "types": [
      "electric"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": true
  },
  {
    "id": 26,
    "name": "Raichu",
    "region": "kanto",
    "types": [
      "electric"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false,
    "alternateForm": true
  },
  {
    "id": 27,
    "name": "Sandshrew",
    "region": "kanto",
    "types": [
      "ground"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false,
    "alternateForm": true
  },
  {
    "id": 28,
    "name": "Sandslash",
    "region": "kanto",
    "types": [
      "ground"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false,
    "alternateForm": true
  },
  {
    "id": 29,
    "name": "Nidoran♀",
    "region": "kanto",
    "types": [
      "poison"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 30,
    "name": "Nidorina",
    "region": "kanto",
    "types": [
      "poison"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 31,
    "name": "Nidoqueen",
    "region": "kanto",
    "types": [
      "poison",
      "ground"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 32,
    "name": "Nidoran♂",
    "region": "kanto",
    "types": [
      "poison"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 33,
    "name": "Nidorino",
    "region": "kanto",
    "types": [
      "poison"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 34,
    "name": "Nidoking",
    "region": "kanto",
    "types": [
      "poison",
      "ground"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 35,
    "name": "Clefairy",
    "region": "kanto",
    "types": [
      "fairy"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 36,
    "name": "Clefable",
    "region": "kanto",
    "types": [
      "fairy"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 37,
    "name": "Vulpix",
    "region": "kanto",
    "types": [
      "fire"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false,
    "alternateForm": true
  },
  {
    "id": 38,
    "name": "Ninetales",
    "region": "kanto",
    "types": [
      "fire"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false,
    "alternateForm": true
  },
  {
    "id": 39,
    "name": "Jigglypuff",
    "region": "kanto",
    "types": [
      "normal",
      "fairy"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 40,
    "name": "Wigglytuff",
    "region": "kanto",
    "types": [
      "normal",
      "fairy"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 41,
    "name": "Zubat",
    "region": "kanto",
    "types": [
      "poison",
      "flying"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 42,
    "name": "Golbat",
    "region": "kanto",
    "types": [
      "poison",
      "flying"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 43,
    "name": "Oddish",
    "region": "kanto",
    "types": [
      "grass",
      "poison"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 44,
    "name": "Gloom",
    "region": "kanto",
    "types": [
      "grass",
      "poison"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 45,
    "name": "Vileplume",
    "region": "kanto",
    "types": [
      "grass",
      "poison"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 46,
    "name": "Paras",
    "region": "kanto",
    "types": [
      "bug",
      "grass"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 47,
    "name": "Parasect",
    "region": "kanto",
    "types": [
      "bug",
      "grass"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 48,
    "name": "Venonat",
    "region": "kanto",
    "types": [
      "bug",
      "poison"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 49,
    "name": "Venomoth",
    "region": "kanto",
    "types": [
      "bug",
      "poison"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 50,
    "name": "Diglett",
    "region": "kanto",
    "types": [
      "ground"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false,
    "alternateForm": true
  },
  {
    "id": 51,
    "name": "Dugtrio",
    "region": "kanto",
    "types": [
      "ground"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false,
    "alternateForm": true
  },
  {
    "id": 52,
    "name": "Meowth",
    "region": "kanto",
    "types": [
      "normal"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": true,
    "alternateForm": true
  },
  {
    "id": 53,
    "name": "Persian",
    "region": "kanto",
    "types": [
      "normal"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false,
    "alternateForm": true
  },
  {
    "id": 54,
    "name": "Psyduck",
    "region": "kanto",
    "types": [
      "water"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 55,
    "name": "Golduck",
    "region": "kanto",
    "types": [
      "water"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 56,
    "name": "Mankey",
    "region": "kanto",
    "types": [
      "fighting"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 57,
    "name": "Primeape",
    "region": "kanto",
    "types": [
      "fighting"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 58,
    "name": "Growlithe",
    "region": "kanto",
    "types": [
      "fire"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false,
    "alternateForm": true
  },
  {
    "id": 59,
    "name": "Arcanine",
    "region": "kanto",
    "types": [
      "fire"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false,
    "alternateForm": true
  },
  {
    "id": 60,
    "name": "Poliwag",
    "region": "kanto",
    "types": [
      "water"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 61,
    "name": "Poliwhirl",
    "region": "kanto",
    "types": [
      "water"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 62,
    "name": "Poliwrath",
    "region": "kanto",
    "types": [
      "water",
      "fighting"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 63,
    "name": "Abra",
    "region": "kanto",
    "types": [
      "psychic"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 64,
    "name": "Kadabra",
    "region": "kanto",
    "types": [
      "psychic"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 65,
    "name": "Alakazam",
    "region": "kanto",
    "types": [
      "psychic"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": true,
    "gigantamax": false
  },
  {
    "id": 66,
    "name": "Machop",
    "region": "kanto",
    "types": [
      "fighting"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 67,
    "name": "Machoke",
    "region": "kanto",
    "types": [
      "fighting"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 68,
    "name": "Machamp",
    "region": "kanto",
    "types": [
      "fighting"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": true
  },
  {
    "id": 69,
    "name": "Bellsprout",
    "region": "kanto",
    "types": [
      "grass",
      "poison"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 70,
    "name": "Weepinbell",
    "region": "kanto",
    "types": [
      "grass",
      "poison"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 71,
    "name": "Victreebel",
    "region": "kanto",
    "types": [
      "grass",
      "poison"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 72,
    "name": "Tentacool",
    "region": "kanto",
    "types": [
      "water",
      "poison"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 73,
    "name": "Tentacruel",
    "region": "kanto",
    "types": [
      "water",
      "poison"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 74,
    "name": "Geodude",
    "region": "kanto",
    "types": [
      "rock",
      "ground"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false,
    "alternateForm": true
  },
  {
    "id": 75,
    "name": "Graveler",
    "region": "kanto",
    "types": [
      "rock",
      "ground"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false,
    "alternateForm": true
  },
  {
    "id": 76,
    "name": "Golem",
    "region": "kanto",
    "types": [
      "rock",
      "ground"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false,
    "alternateForm": true
  },
  {
    "id": 77,
    "name": "Ponyta",
    "region": "kanto",
    "types": [
      "fire"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false,
    "alternateForm": true
  },
  {
    "id": 78,
    "name": "Rapidash",
    "region": "kanto",
    "types": [
      "fire"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 79,
    "name": "Slowpoke",
    "region": "kanto",
    "types": [
      "water",
      "psychic"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false,
    "alternateForm": true
  },
  {
    "id": 80,
    "name": "Slowbro",
    "region": "kanto",
    "types": [
      "water",
      "psychic"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": true,
    "gigantamax": false,
    "alternateForm": true
  },
  {
    "id": 81,
    "name": "Magnemite",
    "region": "kanto",
    "types": [
      "electric",
      "steel"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 82,
    "name": "Magneton",
    "region": "kanto",
    "types": [
      "electric",
      "steel"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 83,
    "name": "Farfetch'd",
    "region": "kanto",
    "types": [
      "normal",
      "flying"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false,
    "alternateForm": true
  },
  {
    "id": 84,
    "name": "Doduo",
    "region": "kanto",
    "types": [
      "normal",
      "flying"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 85,
    "name": "Dodrio",
    "region": "kanto",
    "types": [
      "normal",
      "flying"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 86,
    "name": "Seel",
    "region": "kanto",
    "types": [
      "water"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 87,
    "name": "Dewgong",
    "region": "kanto",
    "types": [
      "water",
      "ice"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 88,
    "name": "Grimer",
    "region": "kanto",
    "types": [
      "poison"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false,
    "alternateForm": true
  },
  {
    "id": 89,
    "name": "Muk",
    "region": "kanto",
    "types": [
      "poison"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false,
    "alternateForm": true
  },
  {
    "id": 90,
    "name": "Shellder",
    "region": "kanto",
    "types": [
      "water"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 91,
    "name": "Cloyster",
    "region": "kanto",
    "types": [
      "water",
      "ice"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 92,
    "name": "Gastly",
    "region": "kanto",
    "types": [
      "ghost",
      "poison"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 93,
    "name": "Haunter",
    "region": "kanto",
    "types": [
      "ghost",
      "poison"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 94,
    "name": "Gengar",
    "region": "kanto",
    "types": [
      "ghost",
      "poison"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": true,
    "gigantamax": true
  },
  {
    "id": 95,
    "name": "Onix",
    "region": "kanto",
    "types": [
      "rock",
      "ground"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 96,
    "name": "Drowzee",
    "region": "kanto",
    "types": [
      "psychic"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 97,
    "name": "Hypno",
    "region": "kanto",
    "types": [
      "psychic"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 98,
    "name": "Krabby",
    "region": "kanto",
    "types": [
      "water"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 99,
    "name": "Kingler",
    "region": "kanto",
    "types": [
      "water"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": true
  },
  {
    "id": 100,
    "name": "Voltorb",
    "region": "kanto",
    "types": [
      "electric"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false,
    "alternateForm": true
  },
  {
    "id": 101,
    "name": "Electrode",
    "region": "kanto",
    "types": [
      "electric"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false,
    "alternateForm": true
  },
  {
    "id": 102,
    "name": "Exeggcute",
    "region": "kanto",
    "types": [
      "grass",
      "psychic"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 103,
    "name": "Exeggutor",
    "region": "kanto",
    "types": [
      "grass",
      "psychic"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false,
    "alternateForm": true
  },
  {
    "id": 104,
    "name": "Cubone",
    "region": "kanto",
    "types": [
      "ground"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 105,
    "name": "Marowak",
    "region": "kanto",
    "types": [
      "ground"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false,
    "alternateForm": true
  },
  {
    "id": 106,
    "name": "Hitmonlee",
    "region": "kanto",
    "types": [
      "fighting"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 107,
    "name": "Hitmonchan",
    "region": "kanto",
    "types": [
      "fighting"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 108,
    "name": "Lickitung",
    "region": "kanto",
    "types": [
      "normal"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 109,
    "name": "Koffing",
    "region": "kanto",
    "types": [
      "poison"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 110,
    "name": "Weezing",
    "region": "kanto",
    "types": [
      "poison"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false,
    "alternateForm": true
  },
  {
    "id": 111,
    "name": "Rhyhorn",
    "region": "kanto",
    "types": [
      "ground",
      "rock"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 112,
    "name": "Rhydon",
    "region": "kanto",
    "types": [
      "ground",
      "rock"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 113,
    "name": "Chansey",
    "region": "kanto",
    "types": [
      "normal"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 114,
    "name": "Tangela",
    "region": "kanto",
    "types": [
      "grass"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 115,
    "name": "Kangaskhan",
    "region": "kanto",
    "types": [
      "normal"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": true,
    "gigantamax": false
  },
  {
    "id": 116,
    "name": "Horsea",
    "region": "kanto",
    "types": [
      "water"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 117,
    "name": "Seadra",
    "region": "kanto",
    "types": [
      "water"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 118,
    "name": "Goldeen",
    "region": "kanto",
    "types": [
      "water"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 119,
    "name": "Seaking",
    "region": "kanto",
    "types": [
      "water"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 120,
    "name": "Staryu",
    "region": "kanto",
    "types": [
      "water"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 121,
    "name": "Starmie",
    "region": "kanto",
    "types": [
      "water",
      "psychic"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 122,
    "name": "Mr. Mime",
    "region": "kanto",
    "types": [
      "psychic",
      "fairy"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false,
    "alternateForm": true
  },
  {
    "id": 123,
    "name": "Scyther",
    "region": "kanto",
    "types": [
      "bug",
      "flying"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 124,
    "name": "Jynx",
    "region": "kanto",
    "types": [
      "ice",
      "psychic"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 125,
    "name": "Electabuzz",
    "region": "kanto",
    "types": [
      "electric"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 126,
    "name": "Magmar",
    "region": "kanto",
    "types": [
      "fire"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 127,
    "name": "Pinsir",
    "region": "kanto",
    "types": [
      "bug"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": true,
    "gigantamax": false
  },
  {
    "id": 128,
    "name": "Tauros",
    "region": "kanto",
    "types": [
      "normal"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 129,
    "name": "Magikarp",
    "region": "kanto",
    "types": [
      "water"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 130,
    "name": "Gyarados",
    "region": "kanto",
    "types": [
      "water",
      "flying"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": true,
    "gigantamax": false
  },
  {
    "id": 131,
    "name": "Lapras",
    "region": "kanto",
    "types": [
      "water",
      "ice"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": true
  },
  {
    "id": 132,
    "name": "Ditto",
    "region": "kanto",
    "types": [
      "normal"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 133,
    "name": "Eevee",
    "region": "kanto",
    "types": [
      "normal"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": true
  },
  {
    "id": 134,
    "name": "Vaporeon",
    "region": "kanto",
    "types": [
      "water"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 135,
    "name": "Jolteon",
    "region": "kanto",
    "types": [
      "electric"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 136,
    "name": "Flareon",
    "region": "kanto",
    "types": [
      "fire"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 137,
    "name": "Porygon",
    "region": "kanto",
    "types": [
      "normal"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 138,
    "name": "Omanyte",
    "region": "kanto",
    "types": [
      "rock",
      "water"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 139,
    "name": "Omastar",
    "region": "kanto",
    "types": [
      "rock",
      "water"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 140,
    "name": "Kabuto",
    "region": "kanto",
    "types": [
      "rock",
      "water"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 141,
    "name": "Kabutops",
    "region": "kanto",
    "types": [
      "rock",
      "water"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 142,
    "name": "Aerodactyl",
    "region": "kanto",
    "types": [
      "rock",
      "flying"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": true,
    "gigantamax": false
  },
  {
    "id": 143,
    "name": "Snorlax",
    "region": "kanto",
    "types": [
      "normal"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": true
  },
  {
    "id": 144,
    "name": "Articuno",
    "region": "kanto",
    "types": [
      "ice",
      "flying"
    ],
    "legendary": "sub-legendary",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false,
    "alternateForm": true
  },
  {
    "id": 145,
    "name": "Zapdos",
    "region": "kanto",
    "types": [
      "electric",
      "flying"
    ],
    "legendary": "sub-legendary",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false,
    "alternateForm": true
  },
  {
    "id": 146,
    "name": "Moltres",
    "region": "kanto",
    "types": [
      "fire",
      "flying"
    ],
    "legendary": "sub-legendary",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false,
    "alternateForm": true
  },
  {
    "id": 147,
    "name": "Dratini",
    "region": "kanto",
    "types": [
      "dragon"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 148,
    "name": "Dragonair",
    "region": "kanto",
    "types": [
      "dragon"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 149,
    "name": "Dragonite",
    "region": "kanto",
    "types": [
      "dragon",
      "flying"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 150,
    "name": "Mewtwo",
    "region": "kanto",
    "types": [
      "psychic"
    ],
    "legendary": "legendary",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": true,
    "gigantamax": false
  },
  {
    "id": 151,
    "name": "Mew",
    "region": "kanto",
    "types": [
      "psychic"
    ],
    "legendary": "mythical",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 152,
    "name": "Chikorita",
    "region": "johto",
    "types": [
      "grass"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 153,
    "name": "Bayleef",
    "region": "johto",
    "types": [
      "grass"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 154,
    "name": "Meganium",
    "region": "johto",
    "types": [
      "grass"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 155,
    "name": "Cyndaquil",
    "region": "johto",
    "types": [
      "fire"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 156,
    "name": "Quilava",
    "region": "johto",
    "types": [
      "fire"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 157,
    "name": "Typhlosion",
    "region": "johto",
    "types": [
      "fire"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false,
    "alternateForm": true
  },
  {
    "id": 158,
    "name": "Totodile",
    "region": "johto",
    "types": [
      "water"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 159,
    "name": "Croconaw",
    "region": "johto",
    "types": [
      "water"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 160,
    "name": "Feraligatr",
    "region": "johto",
    "types": [
      "water"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 161,
    "name": "Sentret",
    "region": "johto",
    "types": [
      "normal"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 162,
    "name": "Furret",
    "region": "johto",
    "types": [
      "normal"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 163,
    "name": "Hoothoot",
    "region": "johto",
    "types": [
      "normal",
      "flying"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 164,
    "name": "Noctowl",
    "region": "johto",
    "types": [
      "normal",
      "flying"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 165,
    "name": "Ledyba",
    "region": "johto",
    "types": [
      "bug",
      "flying"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 166,
    "name": "Ledian",
    "region": "johto",
    "types": [
      "bug",
      "flying"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 167,
    "name": "Spinarak",
    "region": "johto",
    "types": [
      "bug",
      "poison"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 168,
    "name": "Ariados",
    "region": "johto",
    "types": [
      "bug",
      "poison"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 169,
    "name": "Crobat",
    "region": "johto",
    "types": [
      "poison",
      "flying"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 170,
    "name": "Chinchou",
    "region": "johto",
    "types": [
      "water",
      "electric"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 171,
    "name": "Lanturn",
    "region": "johto",
    "types": [
      "water",
      "electric"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 172,
    "name": "Pichu",
    "region": "johto",
    "types": [
      "electric"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 173,
    "name": "Cleffa",
    "region": "johto",
    "types": [
      "fairy"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 174,
    "name": "Igglybuff",
    "region": "johto",
    "types": [
      "normal",
      "fairy"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 175,
    "name": "Togepi",
    "region": "johto",
    "types": [
      "fairy"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 176,
    "name": "Togetic",
    "region": "johto",
    "types": [
      "fairy",
      "flying"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 177,
    "name": "Natu",
    "region": "johto",
    "types": [
      "psychic",
      "flying"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 178,
    "name": "Xatu",
    "region": "johto",
    "types": [
      "psychic",
      "flying"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 179,
    "name": "Mareep",
    "region": "johto",
    "types": [
      "electric"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 180,
    "name": "Flaaffy",
    "region": "johto",
    "types": [
      "electric"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 181,
    "name": "Ampharos",
    "region": "johto",
    "types": [
      "electric"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": true,
    "gigantamax": false
  },
  {
    "id": 182,
    "name": "Bellossom",
    "region": "johto",
    "types": [
      "grass"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 183,
    "name": "Marill",
    "region": "johto",
    "types": [
      "water",
      "fairy"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 184,
    "name": "Azumarill",
    "region": "johto",
    "types": [
      "water",
      "fairy"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 185,
    "name": "Sudowoodo",
    "region": "johto",
    "types": [
      "rock"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 186,
    "name": "Politoed",
    "region": "johto",
    "types": [
      "water"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 187,
    "name": "Hoppip",
    "region": "johto",
    "types": [
      "grass",
      "flying"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 188,
    "name": "Skiploom",
    "region": "johto",
    "types": [
      "grass",
      "flying"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 189,
    "name": "Jumpluff",
    "region": "johto",
    "types": [
      "grass",
      "flying"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 190,
    "name": "Aipom",
    "region": "johto",
    "types": [
      "normal"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 191,
    "name": "Sunkern",
    "region": "johto",
    "types": [
      "grass"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 192,
    "name": "Sunflora",
    "region": "johto",
    "types": [
      "grass"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 193,
    "name": "Yanma",
    "region": "johto",
    "types": [
      "bug",
      "flying"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 194,
    "name": "Wooper",
    "region": "johto",
    "types": [
      "water",
      "ground"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 195,
    "name": "Quagsire",
    "region": "johto",
    "types": [
      "water",
      "ground"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 196,
    "name": "Espeon",
    "region": "johto",
    "types": [
      "psychic"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 197,
    "name": "Umbreon",
    "region": "johto",
    "types": [
      "dark"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 198,
    "name": "Murkrow",
    "region": "johto",
    "types": [
      "dark",
      "flying"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 199,
    "name": "Slowking",
    "region": "johto",
    "types": [
      "water",
      "psychic"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false,
    "alternateForm": true
  },
  {
    "id": 200,
    "name": "Misdreavus",
    "region": "johto",
    "types": [
      "ghost"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 201,
    "name": "Unown",
    "region": "johto",
    "types": [
      "psychic"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 202,
    "name": "Wobbuffet",
    "region": "johto",
    "types": [
      "psychic"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 203,
    "name": "Girafarig",
    "region": "johto",
    "types": [
      "normal",
      "psychic"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 204,
    "name": "Pineco",
    "region": "johto",
    "types": [
      "bug"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 205,
    "name": "Forretress",
    "region": "johto",
    "types": [
      "bug",
      "steel"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 206,
    "name": "Dunsparce",
    "region": "johto",
    "types": [
      "normal"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 207,
    "name": "Gligar",
    "region": "johto",
    "types": [
      "ground",
      "flying"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 208,
    "name": "Steelix",
    "region": "johto",
    "types": [
      "steel",
      "ground"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": true,
    "gigantamax": false
  },
  {
    "id": 209,
    "name": "Snubbull",
    "region": "johto",
    "types": [
      "fairy"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 210,
    "name": "Granbull",
    "region": "johto",
    "types": [
      "fairy"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 211,
    "name": "Qwilfish",
    "region": "johto",
    "types": [
      "water",
      "poison"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false,
    "alternateForm": true
  },
  {
    "id": 212,
    "name": "Scizor",
    "region": "johto",
    "types": [
      "bug",
      "steel"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": true,
    "gigantamax": false
  },
  {
    "id": 213,
    "name": "Shuckle",
    "region": "johto",
    "types": [
      "bug",
      "rock"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 214,
    "name": "Heracross",
    "region": "johto",
    "types": [
      "bug",
      "fighting"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": true,
    "gigantamax": false
  },
  {
    "id": 215,
    "name": "Sneasel",
    "region": "johto",
    "types": [
      "dark",
      "ice"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false,
    "alternateForm": true
  },
  {
    "id": 216,
    "name": "Teddiursa",
    "region": "johto",
    "types": [
      "normal"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 217,
    "name": "Ursaring",
    "region": "johto",
    "types": [
      "normal"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 218,
    "name": "Slugma",
    "region": "johto",
    "types": [
      "fire"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 219,
    "name": "Magcargo",
    "region": "johto",
    "types": [
      "fire",
      "rock"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 220,
    "name": "Swinub",
    "region": "johto",
    "types": [
      "ice",
      "ground"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 221,
    "name": "Piloswine",
    "region": "johto",
    "types": [
      "ice",
      "ground"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 222,
    "name": "Corsola",
    "region": "johto",
    "types": [
      "water",
      "rock"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false,
    "alternateForm": true
  },
  {
    "id": 223,
    "name": "Remoraid",
    "region": "johto",
    "types": [
      "water"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 224,
    "name": "Octillery",
    "region": "johto",
    "types": [
      "water"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 225,
    "name": "Delibird",
    "region": "johto",
    "types": [
      "ice",
      "flying"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 226,
    "name": "Mantine",
    "region": "johto",
    "types": [
      "water",
      "flying"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 227,
    "name": "Skarmory",
    "region": "johto",
    "types": [
      "steel",
      "flying"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 228,
    "name": "Houndour",
    "region": "johto",
    "types": [
      "dark",
      "fire"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 229,
    "name": "Houndoom",
    "region": "johto",
    "types": [
      "dark",
      "fire"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": true,
    "gigantamax": false
  },
  {
    "id": 230,
    "name": "Kingdra",
    "region": "johto",
    "types": [
      "water",
      "dragon"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 231,
    "name": "Phanpy",
    "region": "johto",
    "types": [
      "ground"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 232,
    "name": "Donphan",
    "region": "johto",
    "types": [
      "ground"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 233,
    "name": "Porygon2",
    "region": "johto",
    "types": [
      "normal"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 234,
    "name": "Stantler",
    "region": "johto",
    "types": [
      "normal"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 235,
    "name": "Smeargle",
    "region": "johto",
    "types": [
      "normal"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 236,
    "name": "Tyrogue",
    "region": "johto",
    "types": [
      "fighting"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 237,
    "name": "Hitmontop",
    "region": "johto",
    "types": [
      "fighting"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 238,
    "name": "Smoochum",
    "region": "johto",
    "types": [
      "ice",
      "psychic"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 239,
    "name": "Elekid",
    "region": "johto",
    "types": [
      "electric"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 240,
    "name": "Magby",
    "region": "johto",
    "types": [
      "fire"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 241,
    "name": "Miltank",
    "region": "johto",
    "types": [
      "normal"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 242,
    "name": "Blissey",
    "region": "johto",
    "types": [
      "normal"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 243,
    "name": "Raikou",
    "region": "johto",
    "types": [
      "electric"
    ],
    "legendary": "sub-legendary",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 244,
    "name": "Entei",
    "region": "johto",
    "types": [
      "fire"
    ],
    "legendary": "sub-legendary",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 245,
    "name": "Suicune",
    "region": "johto",
    "types": [
      "water"
    ],
    "legendary": "sub-legendary",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 246,
    "name": "Larvitar",
    "region": "johto",
    "types": [
      "rock",
      "ground"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 247,
    "name": "Pupitar",
    "region": "johto",
    "types": [
      "rock",
      "ground"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 248,
    "name": "Tyranitar",
    "region": "johto",
    "types": [
      "rock",
      "dark"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": true,
    "gigantamax": false
  },
  {
    "id": 249,
    "name": "Lugia",
    "region": "johto",
    "types": [
      "psychic",
      "flying"
    ],
    "legendary": "legendary",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 250,
    "name": "Ho-Oh",
    "region": "johto",
    "types": [
      "fire",
      "flying"
    ],
    "legendary": "legendary",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 251,
    "name": "Celebi",
    "region": "johto",
    "types": [
      "psychic",
      "grass"
    ],
    "legendary": "mythical",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 252,
    "name": "Treecko",
    "region": "hoenn",
    "types": [
      "grass"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 253,
    "name": "Grovyle",
    "region": "hoenn",
    "types": [
      "grass"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 254,
    "name": "Sceptile",
    "region": "hoenn",
    "types": [
      "grass"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": true,
    "gigantamax": false
  },
  {
    "id": 255,
    "name": "Torchic",
    "region": "hoenn",
    "types": [
      "fire"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 256,
    "name": "Combusken",
    "region": "hoenn",
    "types": [
      "fire",
      "fighting"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 257,
    "name": "Blaziken",
    "region": "hoenn",
    "types": [
      "fire",
      "fighting"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": true,
    "gigantamax": false
  },
  {
    "id": 258,
    "name": "Mudkip",
    "region": "hoenn",
    "types": [
      "water"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 259,
    "name": "Marshtomp",
    "region": "hoenn",
    "types": [
      "water",
      "ground"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 260,
    "name": "Swampert",
    "region": "hoenn",
    "types": [
      "water",
      "ground"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": true,
    "gigantamax": false
  },
  {
    "id": 261,
    "name": "Poochyena",
    "region": "hoenn",
    "types": [
      "dark"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 262,
    "name": "Mightyena",
    "region": "hoenn",
    "types": [
      "dark"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 263,
    "name": "Zigzagoon",
    "region": "hoenn",
    "types": [
      "normal"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false,
    "alternateForm": true
  },
  {
    "id": 264,
    "name": "Linoone",
    "region": "hoenn",
    "types": [
      "normal"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false,
    "alternateForm": true
  },
  {
    "id": 265,
    "name": "Wurmple",
    "region": "hoenn",
    "types": [
      "bug"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 266,
    "name": "Silcoon",
    "region": "hoenn",
    "types": [
      "bug"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 267,
    "name": "Beautifly",
    "region": "hoenn",
    "types": [
      "bug",
      "flying"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 268,
    "name": "Cascoon",
    "region": "hoenn",
    "types": [
      "bug"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 269,
    "name": "Dustox",
    "region": "hoenn",
    "types": [
      "bug",
      "poison"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 270,
    "name": "Lotad",
    "region": "hoenn",
    "types": [
      "water",
      "grass"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 271,
    "name": "Lombre",
    "region": "hoenn",
    "types": [
      "water",
      "grass"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 272,
    "name": "Ludicolo",
    "region": "hoenn",
    "types": [
      "water",
      "grass"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 273,
    "name": "Seedot",
    "region": "hoenn",
    "types": [
      "grass"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 274,
    "name": "Nuzleaf",
    "region": "hoenn",
    "types": [
      "grass",
      "dark"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 275,
    "name": "Shiftry",
    "region": "hoenn",
    "types": [
      "grass",
      "dark"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 276,
    "name": "Taillow",
    "region": "hoenn",
    "types": [
      "normal",
      "flying"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 277,
    "name": "Swellow",
    "region": "hoenn",
    "types": [
      "normal",
      "flying"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 278,
    "name": "Wingull",
    "region": "hoenn",
    "types": [
      "water",
      "flying"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 279,
    "name": "Pelipper",
    "region": "hoenn",
    "types": [
      "water",
      "flying"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 280,
    "name": "Ralts",
    "region": "hoenn",
    "types": [
      "psychic",
      "fairy"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 281,
    "name": "Kirlia",
    "region": "hoenn",
    "types": [
      "psychic",
      "fairy"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 282,
    "name": "Gardevoir",
    "region": "hoenn",
    "types": [
      "psychic",
      "fairy"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": true,
    "gigantamax": false
  },
  {
    "id": 283,
    "name": "Surskit",
    "region": "hoenn",
    "types": [
      "bug",
      "water"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 284,
    "name": "Masquerain",
    "region": "hoenn",
    "types": [
      "bug",
      "flying"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 285,
    "name": "Shroomish",
    "region": "hoenn",
    "types": [
      "grass"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 286,
    "name": "Breloom",
    "region": "hoenn",
    "types": [
      "grass",
      "fighting"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 287,
    "name": "Slakoth",
    "region": "hoenn",
    "types": [
      "normal"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 288,
    "name": "Vigoroth",
    "region": "hoenn",
    "types": [
      "normal"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 289,
    "name": "Slaking",
    "region": "hoenn",
    "types": [
      "normal"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 290,
    "name": "Nincada",
    "region": "hoenn",
    "types": [
      "bug",
      "ground"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 291,
    "name": "Ninjask",
    "region": "hoenn",
    "types": [
      "bug",
      "flying"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 292,
    "name": "Shedinja",
    "region": "hoenn",
    "types": [
      "bug",
      "ghost"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 293,
    "name": "Whismur",
    "region": "hoenn",
    "types": [
      "normal"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 294,
    "name": "Loudred",
    "region": "hoenn",
    "types": [
      "normal"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 295,
    "name": "Exploud",
    "region": "hoenn",
    "types": [
      "normal"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 296,
    "name": "Makuhita",
    "region": "hoenn",
    "types": [
      "fighting"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 297,
    "name": "Hariyama",
    "region": "hoenn",
    "types": [
      "fighting"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 298,
    "name": "Azurill",
    "region": "hoenn",
    "types": [
      "normal",
      "fairy"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 299,
    "name": "Nosepass",
    "region": "hoenn",
    "types": [
      "rock"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 300,
    "name": "Skitty",
    "region": "hoenn",
    "types": [
      "normal"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 301,
    "name": "Delcatty",
    "region": "hoenn",
    "types": [
      "normal"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 302,
    "name": "Sableye",
    "region": "hoenn",
    "types": [
      "dark",
      "ghost"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": true,
    "gigantamax": false
  },
  {
    "id": 303,
    "name": "Mawile",
    "region": "hoenn",
    "types": [
      "steel",
      "fairy"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": true,
    "gigantamax": false
  },
  {
    "id": 304,
    "name": "Aron",
    "region": "hoenn",
    "types": [
      "steel",
      "rock"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 305,
    "name": "Lairon",
    "region": "hoenn",
    "types": [
      "steel",
      "rock"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 306,
    "name": "Aggron",
    "region": "hoenn",
    "types": [
      "steel",
      "rock"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": true,
    "gigantamax": false
  },
  {
    "id": 307,
    "name": "Meditite",
    "region": "hoenn",
    "types": [
      "fighting",
      "psychic"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 308,
    "name": "Medicham",
    "region": "hoenn",
    "types": [
      "fighting",
      "psychic"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": true,
    "gigantamax": false
  },
  {
    "id": 309,
    "name": "Electrike",
    "region": "hoenn",
    "types": [
      "electric"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 310,
    "name": "Manectric",
    "region": "hoenn",
    "types": [
      "electric"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": true,
    "gigantamax": false
  },
  {
    "id": 311,
    "name": "Plusle",
    "region": "hoenn",
    "types": [
      "electric"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 312,
    "name": "Minun",
    "region": "hoenn",
    "types": [
      "electric"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 313,
    "name": "Volbeat",
    "region": "hoenn",
    "types": [
      "bug"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 314,
    "name": "Illumise",
    "region": "hoenn",
    "types": [
      "bug"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 315,
    "name": "Roselia",
    "region": "hoenn",
    "types": [
      "grass",
      "poison"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 316,
    "name": "Gulpin",
    "region": "hoenn",
    "types": [
      "poison"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 317,
    "name": "Swalot",
    "region": "hoenn",
    "types": [
      "poison"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 318,
    "name": "Carvanha",
    "region": "hoenn",
    "types": [
      "water",
      "dark"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 319,
    "name": "Sharpedo",
    "region": "hoenn",
    "types": [
      "water",
      "dark"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": true,
    "gigantamax": false
  },
  {
    "id": 320,
    "name": "Wailmer",
    "region": "hoenn",
    "types": [
      "water"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 321,
    "name": "Wailord",
    "region": "hoenn",
    "types": [
      "water"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 322,
    "name": "Numel",
    "region": "hoenn",
    "types": [
      "fire",
      "ground"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 323,
    "name": "Camerupt",
    "region": "hoenn",
    "types": [
      "fire",
      "ground"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": true,
    "gigantamax": false
  },
  {
    "id": 324,
    "name": "Torkoal",
    "region": "hoenn",
    "types": [
      "fire"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 325,
    "name": "Spoink",
    "region": "hoenn",
    "types": [
      "psychic"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 326,
    "name": "Grumpig",
    "region": "hoenn",
    "types": [
      "psychic"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 327,
    "name": "Spinda",
    "region": "hoenn",
    "types": [
      "normal"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 328,
    "name": "Trapinch",
    "region": "hoenn",
    "types": [
      "ground"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 329,
    "name": "Vibrava",
    "region": "hoenn",
    "types": [
      "ground",
      "dragon"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 330,
    "name": "Flygon",
    "region": "hoenn",
    "types": [
      "ground",
      "dragon"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 331,
    "name": "Cacnea",
    "region": "hoenn",
    "types": [
      "grass"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 332,
    "name": "Cacturne",
    "region": "hoenn",
    "types": [
      "grass",
      "dark"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 333,
    "name": "Swablu",
    "region": "hoenn",
    "types": [
      "normal",
      "flying"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 334,
    "name": "Altaria",
    "region": "hoenn",
    "types": [
      "dragon",
      "flying"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": true,
    "gigantamax": false
  },
  {
    "id": 335,
    "name": "Zangoose",
    "region": "hoenn",
    "types": [
      "normal"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 336,
    "name": "Seviper",
    "region": "hoenn",
    "types": [
      "poison"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 337,
    "name": "Lunatone",
    "region": "hoenn",
    "types": [
      "rock",
      "psychic"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 338,
    "name": "Solrock",
    "region": "hoenn",
    "types": [
      "rock",
      "psychic"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 339,
    "name": "Barboach",
    "region": "hoenn",
    "types": [
      "water",
      "ground"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 340,
    "name": "Whiscash",
    "region": "hoenn",
    "types": [
      "water",
      "ground"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 341,
    "name": "Corphish",
    "region": "hoenn",
    "types": [
      "water"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 342,
    "name": "Crawdaunt",
    "region": "hoenn",
    "types": [
      "water",
      "dark"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 343,
    "name": "Baltoy",
    "region": "hoenn",
    "types": [
      "ground",
      "psychic"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 344,
    "name": "Claydol",
    "region": "hoenn",
    "types": [
      "ground",
      "psychic"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 345,
    "name": "Lileep",
    "region": "hoenn",
    "types": [
      "rock",
      "grass"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 346,
    "name": "Cradily",
    "region": "hoenn",
    "types": [
      "rock",
      "grass"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 347,
    "name": "Anorith",
    "region": "hoenn",
    "types": [
      "rock",
      "bug"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 348,
    "name": "Armaldo",
    "region": "hoenn",
    "types": [
      "rock",
      "bug"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 349,
    "name": "Feebas",
    "region": "hoenn",
    "types": [
      "water"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 350,
    "name": "Milotic",
    "region": "hoenn",
    "types": [
      "water"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 351,
    "name": "Castform",
    "region": "hoenn",
    "types": [
      "normal"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 352,
    "name": "Kecleon",
    "region": "hoenn",
    "types": [
      "normal"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 353,
    "name": "Shuppet",
    "region": "hoenn",
    "types": [
      "ghost"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 354,
    "name": "Banette",
    "region": "hoenn",
    "types": [
      "ghost"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": true,
    "gigantamax": false
  },
  {
    "id": 355,
    "name": "Duskull",
    "region": "hoenn",
    "types": [
      "ghost"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 356,
    "name": "Dusclops",
    "region": "hoenn",
    "types": [
      "ghost"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 357,
    "name": "Tropius",
    "region": "hoenn",
    "types": [
      "grass",
      "flying"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 358,
    "name": "Chimecho",
    "region": "hoenn",
    "types": [
      "psychic"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 359,
    "name": "Absol",
    "region": "hoenn",
    "types": [
      "dark"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": true,
    "gigantamax": false
  },
  {
    "id": 360,
    "name": "Wynaut",
    "region": "hoenn",
    "types": [
      "psychic"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 361,
    "name": "Snorunt",
    "region": "hoenn",
    "types": [
      "ice"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 362,
    "name": "Glalie",
    "region": "hoenn",
    "types": [
      "ice"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": true,
    "gigantamax": false
  },
  {
    "id": 363,
    "name": "Spheal",
    "region": "hoenn",
    "types": [
      "ice",
      "water"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 364,
    "name": "Sealeo",
    "region": "hoenn",
    "types": [
      "ice",
      "water"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 365,
    "name": "Walrein",
    "region": "hoenn",
    "types": [
      "ice",
      "water"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 366,
    "name": "Clamperl",
    "region": "hoenn",
    "types": [
      "water"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 367,
    "name": "Huntail",
    "region": "hoenn",
    "types": [
      "water"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 368,
    "name": "Gorebyss",
    "region": "hoenn",
    "types": [
      "water"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 369,
    "name": "Relicanth",
    "region": "hoenn",
    "types": [
      "water",
      "rock"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 370,
    "name": "Luvdisc",
    "region": "hoenn",
    "types": [
      "water"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 371,
    "name": "Bagon",
    "region": "hoenn",
    "types": [
      "dragon"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 372,
    "name": "Shelgon",
    "region": "hoenn",
    "types": [
      "dragon"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 373,
    "name": "Salamence",
    "region": "hoenn",
    "types": [
      "dragon",
      "flying"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": true,
    "gigantamax": false
  },
  {
    "id": 374,
    "name": "Beldum",
    "region": "hoenn",
    "types": [
      "steel",
      "psychic"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 375,
    "name": "Metang",
    "region": "hoenn",
    "types": [
      "steel",
      "psychic"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 376,
    "name": "Metagross",
    "region": "hoenn",
    "types": [
      "steel",
      "psychic"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": true,
    "gigantamax": false
  },
  {
    "id": 377,
    "name": "Regirock",
    "region": "hoenn",
    "types": [
      "rock"
    ],
    "legendary": "sub-legendary",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 378,
    "name": "Regice",
    "region": "hoenn",
    "types": [
      "ice"
    ],
    "legendary": "sub-legendary",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 379,
    "name": "Registeel",
    "region": "hoenn",
    "types": [
      "steel"
    ],
    "legendary": "sub-legendary",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 380,
    "name": "Latias",
    "region": "hoenn",
    "types": [
      "dragon",
      "psychic"
    ],
    "legendary": "sub-legendary",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": true,
    "gigantamax": false
  },
  {
    "id": 381,
    "name": "Latios",
    "region": "hoenn",
    "types": [
      "dragon",
      "psychic"
    ],
    "legendary": "sub-legendary",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": true,
    "gigantamax": false
  },
  {
    "id": 382,
    "name": "Kyogre",
    "region": "hoenn",
    "types": [
      "water"
    ],
    "legendary": "legendary",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 383,
    "name": "Groudon",
    "region": "hoenn",
    "types": [
      "ground"
    ],
    "legendary": "legendary",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 384,
    "name": "Rayquaza",
    "region": "hoenn",
    "types": [
      "dragon",
      "flying"
    ],
    "legendary": "legendary",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": true,
    "gigantamax": false
  },
  {
    "id": 385,
    "name": "Jirachi",
    "region": "hoenn",
    "types": [
      "steel",
      "psychic"
    ],
    "legendary": "mythical",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 386,
    "name": "Deoxys",
    "region": "hoenn",
    "types": [
      "psychic"
    ],
    "legendary": "mythical",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 387,
    "name": "Turtwig",
    "region": "sinnoh",
    "types": [
      "grass"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 388,
    "name": "Grotle",
    "region": "sinnoh",
    "types": [
      "grass"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 389,
    "name": "Torterra",
    "region": "sinnoh",
    "types": [
      "grass",
      "ground"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 390,
    "name": "Chimchar",
    "region": "sinnoh",
    "types": [
      "fire"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 391,
    "name": "Monferno",
    "region": "sinnoh",
    "types": [
      "fire",
      "fighting"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 392,
    "name": "Infernape",
    "region": "sinnoh",
    "types": [
      "fire",
      "fighting"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 393,
    "name": "Piplup",
    "region": "sinnoh",
    "types": [
      "water"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 394,
    "name": "Prinplup",
    "region": "sinnoh",
    "types": [
      "water"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 395,
    "name": "Empoleon",
    "region": "sinnoh",
    "types": [
      "water",
      "steel"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 396,
    "name": "Starly",
    "region": "sinnoh",
    "types": [
      "normal",
      "flying"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 397,
    "name": "Staravia",
    "region": "sinnoh",
    "types": [
      "normal",
      "flying"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 398,
    "name": "Staraptor",
    "region": "sinnoh",
    "types": [
      "normal",
      "flying"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 399,
    "name": "Bidoof",
    "region": "sinnoh",
    "types": [
      "normal"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 400,
    "name": "Bibarel",
    "region": "sinnoh",
    "types": [
      "normal",
      "water"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 401,
    "name": "Kricketot",
    "region": "sinnoh",
    "types": [
      "bug"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 402,
    "name": "Kricketune",
    "region": "sinnoh",
    "types": [
      "bug"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 403,
    "name": "Shinx",
    "region": "sinnoh",
    "types": [
      "electric"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 404,
    "name": "Luxio",
    "region": "sinnoh",
    "types": [
      "electric"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 405,
    "name": "Luxray",
    "region": "sinnoh",
    "types": [
      "electric"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 406,
    "name": "Budew",
    "region": "sinnoh",
    "types": [
      "grass",
      "poison"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 407,
    "name": "Roserade",
    "region": "sinnoh",
    "types": [
      "grass",
      "poison"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 408,
    "name": "Cranidos",
    "region": "sinnoh",
    "types": [
      "rock"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 409,
    "name": "Rampardos",
    "region": "sinnoh",
    "types": [
      "rock"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 410,
    "name": "Shieldon",
    "region": "sinnoh",
    "types": [
      "rock",
      "steel"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 411,
    "name": "Bastiodon",
    "region": "sinnoh",
    "types": [
      "rock",
      "steel"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 412,
    "name": "Burmy",
    "region": "sinnoh",
    "types": [
      "bug"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 413,
    "name": "Wormadam",
    "region": "sinnoh",
    "types": [
      "bug",
      "grass"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false,
    "alternateForm": true
  },
  {
    "id": 414,
    "name": "Mothim",
    "region": "sinnoh",
    "types": [
      "bug",
      "flying"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 415,
    "name": "Combee",
    "region": "sinnoh",
    "types": [
      "bug",
      "flying"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 416,
    "name": "Vespiquen",
    "region": "sinnoh",
    "types": [
      "bug",
      "flying"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 417,
    "name": "Pachirisu",
    "region": "sinnoh",
    "types": [
      "electric"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 418,
    "name": "Buizel",
    "region": "sinnoh",
    "types": [
      "water"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 419,
    "name": "Floatzel",
    "region": "sinnoh",
    "types": [
      "water"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 420,
    "name": "Cherubi",
    "region": "sinnoh",
    "types": [
      "grass"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 421,
    "name": "Cherrim",
    "region": "sinnoh",
    "types": [
      "grass"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 422,
    "name": "Shellos",
    "region": "sinnoh",
    "types": [
      "water"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false,
    "alternateForm": true
  },
  {
    "id": 423,
    "name": "Gastrodon",
    "region": "sinnoh",
    "types": [
      "water",
      "ground"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false,
    "alternateForm": true
  },
  {
    "id": 424,
    "name": "Ambipom",
    "region": "sinnoh",
    "types": [
      "normal"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 425,
    "name": "Drifloon",
    "region": "sinnoh",
    "types": [
      "ghost",
      "flying"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 426,
    "name": "Drifblim",
    "region": "sinnoh",
    "types": [
      "ghost",
      "flying"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 427,
    "name": "Buneary",
    "region": "sinnoh",
    "types": [
      "normal"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 428,
    "name": "Lopunny",
    "region": "sinnoh",
    "types": [
      "normal"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": true,
    "gigantamax": false
  },
  {
    "id": 429,
    "name": "Mismagius",
    "region": "sinnoh",
    "types": [
      "ghost"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 430,
    "name": "Honchkrow",
    "region": "sinnoh",
    "types": [
      "dark",
      "flying"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 431,
    "name": "Glameow",
    "region": "sinnoh",
    "types": [
      "normal"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 432,
    "name": "Purugly",
    "region": "sinnoh",
    "types": [
      "normal"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 433,
    "name": "Chingling",
    "region": "sinnoh",
    "types": [
      "psychic"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 434,
    "name": "Stunky",
    "region": "sinnoh",
    "types": [
      "poison",
      "dark"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 435,
    "name": "Skuntank",
    "region": "sinnoh",
    "types": [
      "poison",
      "dark"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 436,
    "name": "Bronzor",
    "region": "sinnoh",
    "types": [
      "steel",
      "psychic"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 437,
    "name": "Bronzong",
    "region": "sinnoh",
    "types": [
      "steel",
      "psychic"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 438,
    "name": "Bonsly",
    "region": "sinnoh",
    "types": [
      "rock"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 439,
    "name": "Mime Jr.",
    "region": "sinnoh",
    "types": [
      "psychic",
      "fairy"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 440,
    "name": "Happiny",
    "region": "sinnoh",
    "types": [
      "normal"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 441,
    "name": "Chatot",
    "region": "sinnoh",
    "types": [
      "normal",
      "flying"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 442,
    "name": "Spiritomb",
    "region": "sinnoh",
    "types": [
      "ghost",
      "dark"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 443,
    "name": "Gible",
    "region": "sinnoh",
    "types": [
      "dragon",
      "ground"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 444,
    "name": "Gabite",
    "region": "sinnoh",
    "types": [
      "dragon",
      "ground"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 445,
    "name": "Garchomp",
    "region": "sinnoh",
    "types": [
      "dragon",
      "ground"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": true,
    "gigantamax": false
  },
  {
    "id": 446,
    "name": "Munchlax",
    "region": "sinnoh",
    "types": [
      "normal"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 447,
    "name": "Riolu",
    "region": "sinnoh",
    "types": [
      "fighting"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 448,
    "name": "Lucario",
    "region": "sinnoh",
    "types": [
      "fighting",
      "steel"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": true,
    "gigantamax": false
  },
  {
    "id": 449,
    "name": "Hippopotas",
    "region": "sinnoh",
    "types": [
      "ground"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 450,
    "name": "Hippowdon",
    "region": "sinnoh",
    "types": [
      "ground"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 451,
    "name": "Skorupi",
    "region": "sinnoh",
    "types": [
      "poison",
      "bug"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 452,
    "name": "Drapion",
    "region": "sinnoh",
    "types": [
      "poison",
      "dark"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 453,
    "name": "Croagunk",
    "region": "sinnoh",
    "types": [
      "poison",
      "fighting"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 454,
    "name": "Toxicroak",
    "region": "sinnoh",
    "types": [
      "poison",
      "fighting"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 455,
    "name": "Carnivine",
    "region": "sinnoh",
    "types": [
      "grass"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 456,
    "name": "Finneon",
    "region": "sinnoh",
    "types": [
      "water"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 457,
    "name": "Lumineon",
    "region": "sinnoh",
    "types": [
      "water"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 458,
    "name": "Mantyke",
    "region": "sinnoh",
    "types": [
      "water",
      "flying"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 459,
    "name": "Snover",
    "region": "sinnoh",
    "types": [
      "grass",
      "ice"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 460,
    "name": "Abomasnow",
    "region": "sinnoh",
    "types": [
      "grass",
      "ice"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": true,
    "gigantamax": false
  },
  {
    "id": 461,
    "name": "Weavile",
    "region": "sinnoh",
    "types": [
      "dark",
      "ice"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 462,
    "name": "Magnezone",
    "region": "sinnoh",
    "types": [
      "electric",
      "steel"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 463,
    "name": "Lickilicky",
    "region": "sinnoh",
    "types": [
      "normal"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 464,
    "name": "Rhyperior",
    "region": "sinnoh",
    "types": [
      "ground",
      "rock"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 465,
    "name": "Tangrowth",
    "region": "sinnoh",
    "types": [
      "grass"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 466,
    "name": "Electivire",
    "region": "sinnoh",
    "types": [
      "electric"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 467,
    "name": "Magmortar",
    "region": "sinnoh",
    "types": [
      "fire"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 468,
    "name": "Togekiss",
    "region": "sinnoh",
    "types": [
      "fairy",
      "flying"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 469,
    "name": "Yanmega",
    "region": "sinnoh",
    "types": [
      "bug",
      "flying"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 470,
    "name": "Leafeon",
    "region": "sinnoh",
    "types": [
      "grass"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 471,
    "name": "Glaceon",
    "region": "sinnoh",
    "types": [
      "ice"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 472,
    "name": "Gliscor",
    "region": "sinnoh",
    "types": [
      "ground",
      "flying"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 473,
    "name": "Mamoswine",
    "region": "sinnoh",
    "types": [
      "ice",
      "ground"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 474,
    "name": "Porygon-Z",
    "region": "sinnoh",
    "types": [
      "normal"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 475,
    "name": "Gallade",
    "region": "sinnoh",
    "types": [
      "psychic",
      "fighting"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": true,
    "gigantamax": false
  },
  {
    "id": 476,
    "name": "Probopass",
    "region": "sinnoh",
    "types": [
      "rock",
      "steel"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 477,
    "name": "Dusknoir",
    "region": "sinnoh",
    "types": [
      "ghost"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 478,
    "name": "Froslass",
    "region": "sinnoh",
    "types": [
      "ice",
      "ghost"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 479,
    "name": "Rotom",
    "region": "sinnoh",
    "types": [
      "electric",
      "ghost"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false,
    "alternateForm": true
  },
  {
    "id": 480,
    "name": "Uxie",
    "region": "sinnoh",
    "types": [
      "psychic"
    ],
    "legendary": "sub-legendary",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 481,
    "name": "Mesprit",
    "region": "sinnoh",
    "types": [
      "psychic"
    ],
    "legendary": "sub-legendary",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 482,
    "name": "Azelf",
    "region": "sinnoh",
    "types": [
      "psychic"
    ],
    "legendary": "sub-legendary",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 483,
    "name": "Dialga",
    "region": "sinnoh",
    "types": [
      "steel",
      "dragon"
    ],
    "legendary": "legendary",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 484,
    "name": "Palkia",
    "region": "sinnoh",
    "types": [
      "water",
      "dragon"
    ],
    "legendary": "legendary",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 485,
    "name": "Heatran",
    "region": "sinnoh",
    "types": [
      "fire",
      "steel"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 486,
    "name": "Regigigas",
    "region": "sinnoh",
    "types": [
      "normal"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 487,
    "name": "Giratina",
    "region": "sinnoh",
    "types": [
      "ghost",
      "dragon"
    ],
    "legendary": "legendary",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false,
    "alternateForm": true
  },
  {
    "id": 488,
    "name": "Cresselia",
    "region": "sinnoh",
    "types": [
      "psychic"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 489,
    "name": "Phione",
    "region": "sinnoh",
    "types": [
      "water"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 490,
    "name": "Manaphy",
    "region": "sinnoh",
    "types": [
      "water"
    ],
    "legendary": "mythical",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 491,
    "name": "Darkrai",
    "region": "sinnoh",
    "types": [
      "dark"
    ],
    "legendary": "mythical",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 492,
    "name": "Shaymin",
    "region": "sinnoh",
    "types": [
      "grass"
    ],
    "legendary": "mythical",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false,
    "alternateForm": true
  },
  {
    "id": 493,
    "name": "Arceus",
    "region": "sinnoh",
    "types": [
      "normal"
    ],
    "legendary": "mythical",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 494,
    "name": "Victini",
    "region": "unova",
    "types": [
      "psychic",
      "fire"
    ],
    "legendary": "mythical",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 495,
    "name": "Snivy",
    "region": "unova",
    "types": [
      "grass"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 496,
    "name": "Servine",
    "region": "unova",
    "types": [
      "grass"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 497,
    "name": "Serperior",
    "region": "unova",
    "types": [
      "grass"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 498,
    "name": "Tepig",
    "region": "unova",
    "types": [
      "fire"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 499,
    "name": "Pignite",
    "region": "unova",
    "types": [
      "fire",
      "fighting"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 500,
    "name": "Emboar",
    "region": "unova",
    "types": [
      "fire",
      "fighting"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 501,
    "name": "Oshawott",
    "region": "unova",
    "types": [
      "water"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 502,
    "name": "Dewott",
    "region": "unova",
    "types": [
      "water"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 503,
    "name": "Samurott",
    "region": "unova",
    "types": [
      "water"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false,
    "alternateForm": true
  },
  {
    "id": 504,
    "name": "Patrat",
    "region": "unova",
    "types": [
      "normal"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 505,
    "name": "Watchog",
    "region": "unova",
    "types": [
      "normal"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 506,
    "name": "Lillipup",
    "region": "unova",
    "types": [
      "normal"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 507,
    "name": "Herdier",
    "region": "unova",
    "types": [
      "normal"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 508,
    "name": "Stoutland",
    "region": "unova",
    "types": [
      "normal"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 509,
    "name": "Purrloin",
    "region": "unova",
    "types": [
      "dark"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 510,
    "name": "Liepard",
    "region": "unova",
    "types": [
      "dark"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 511,
    "name": "Pansage",
    "region": "unova",
    "types": [
      "grass"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 512,
    "name": "Simisage",
    "region": "unova",
    "types": [
      "grass"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 513,
    "name": "Pansear",
    "region": "unova",
    "types": [
      "fire"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 514,
    "name": "Simisear",
    "region": "unova",
    "types": [
      "fire"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 515,
    "name": "Panpour",
    "region": "unova",
    "types": [
      "water"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 516,
    "name": "Simipour",
    "region": "unova",
    "types": [
      "water"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 517,
    "name": "Munna",
    "region": "unova",
    "types": [
      "psychic"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 518,
    "name": "Musharna",
    "region": "unova",
    "types": [
      "psychic"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 519,
    "name": "Pidove",
    "region": "unova",
    "types": [
      "normal",
      "flying"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 520,
    "name": "Tranquill",
    "region": "unova",
    "types": [
      "normal",
      "flying"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 521,
    "name": "Unfezant",
    "region": "unova",
    "types": [
      "normal",
      "flying"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 522,
    "name": "Blitzle",
    "region": "unova",
    "types": [
      "electric"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 523,
    "name": "Zebstrika",
    "region": "unova",
    "types": [
      "electric"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 524,
    "name": "Roggenrola",
    "region": "unova",
    "types": [
      "rock"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 525,
    "name": "Boldore",
    "region": "unova",
    "types": [
      "rock"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 526,
    "name": "Gigalith",
    "region": "unova",
    "types": [
      "rock"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 527,
    "name": "Woobat",
    "region": "unova",
    "types": [
      "psychic",
      "flying"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 528,
    "name": "Swoobat",
    "region": "unova",
    "types": [
      "psychic",
      "flying"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 529,
    "name": "Drilbur",
    "region": "unova",
    "types": [
      "ground"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 530,
    "name": "Excadrill",
    "region": "unova",
    "types": [
      "ground",
      "steel"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 531,
    "name": "Audino",
    "region": "unova",
    "types": [
      "normal"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": true,
    "gigantamax": false
  },
  {
    "id": 532,
    "name": "Timburr",
    "region": "unova",
    "types": [
      "fighting"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 533,
    "name": "Gurdurr",
    "region": "unova",
    "types": [
      "fighting"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 534,
    "name": "Conkeldurr",
    "region": "unova",
    "types": [
      "fighting"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 535,
    "name": "Tympole",
    "region": "unova",
    "types": [
      "water"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 536,
    "name": "Palpitoad",
    "region": "unova",
    "types": [
      "water",
      "ground"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 537,
    "name": "Seismitoad",
    "region": "unova",
    "types": [
      "water",
      "ground"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 538,
    "name": "Throh",
    "region": "unova",
    "types": [
      "fighting"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 539,
    "name": "Sawk",
    "region": "unova",
    "types": [
      "fighting"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 540,
    "name": "Sewaddle",
    "region": "unova",
    "types": [
      "bug",
      "grass"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 541,
    "name": "Swadloon",
    "region": "unova",
    "types": [
      "bug",
      "grass"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 542,
    "name": "Leavanny",
    "region": "unova",
    "types": [
      "bug",
      "grass"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 543,
    "name": "Venipede",
    "region": "unova",
    "types": [
      "bug",
      "poison"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 544,
    "name": "Whirlipede",
    "region": "unova",
    "types": [
      "bug",
      "poison"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 545,
    "name": "Scolipede",
    "region": "unova",
    "types": [
      "bug",
      "poison"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 546,
    "name": "Cottonee",
    "region": "unova",
    "types": [
      "grass",
      "fairy"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 547,
    "name": "Whimsicott",
    "region": "unova",
    "types": [
      "grass",
      "fairy"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 548,
    "name": "Petilil",
    "region": "unova",
    "types": [
      "grass"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 549,
    "name": "Lilligant",
    "region": "unova",
    "types": [
      "grass"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false,
    "alternateForm": true
  },
  {
    "id": 550,
    "name": "Basculin",
    "region": "unova",
    "types": [
      "water"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 551,
    "name": "Sandile",
    "region": "unova",
    "types": [
      "ground",
      "dark"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 552,
    "name": "Krokorok",
    "region": "unova",
    "types": [
      "ground",
      "dark"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 553,
    "name": "Krookodile",
    "region": "unova",
    "types": [
      "ground",
      "dark"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 554,
    "name": "Darumaka",
    "region": "unova",
    "types": [
      "fire"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false,
    "alternateForm": true
  },
  {
    "id": 555,
    "name": "Darmanitan",
    "region": "unova",
    "types": [
      "fire"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false,
    "alternateForm": true
  },
  {
    "id": 556,
    "name": "Maractus",
    "region": "unova",
    "types": [
      "grass"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 557,
    "name": "Dwebble",
    "region": "unova",
    "types": [
      "bug",
      "rock"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 558,
    "name": "Crustle",
    "region": "unova",
    "types": [
      "bug",
      "rock"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 559,
    "name": "Scraggy",
    "region": "unova",
    "types": [
      "dark",
      "fighting"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 560,
    "name": "Scrafty",
    "region": "unova",
    "types": [
      "dark",
      "fighting"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 561,
    "name": "Sigilyph",
    "region": "unova",
    "types": [
      "psychic",
      "flying"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 562,
    "name": "Yamask",
    "region": "unova",
    "types": [
      "ghost"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false,
    "alternateForm": true
  },
  {
    "id": 563,
    "name": "Cofagrigus",
    "region": "unova",
    "types": [
      "ghost"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 564,
    "name": "Tirtouga",
    "region": "unova",
    "types": [
      "water",
      "rock"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 565,
    "name": "Carracosta",
    "region": "unova",
    "types": [
      "water",
      "rock"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 566,
    "name": "Archen",
    "region": "unova",
    "types": [
      "rock",
      "flying"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 567,
    "name": "Archeops",
    "region": "unova",
    "types": [
      "rock",
      "flying"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 568,
    "name": "Trubbish",
    "region": "unova",
    "types": [
      "poison"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 569,
    "name": "Garbodor",
    "region": "unova",
    "types": [
      "poison"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": true
  },
  {
    "id": 570,
    "name": "Zorua",
    "region": "unova",
    "types": [
      "dark"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false,
    "alternateForm": true
  },
  {
    "id": 571,
    "name": "Zoroark",
    "region": "unova",
    "types": [
      "dark"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false,
    "alternateForm": true
  },
  {
    "id": 572,
    "name": "Minccino",
    "region": "unova",
    "types": [
      "normal"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 573,
    "name": "Cinccino",
    "region": "unova",
    "types": [
      "normal"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 574,
    "name": "Gothita",
    "region": "unova",
    "types": [
      "psychic"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 575,
    "name": "Gothorita",
    "region": "unova",
    "types": [
      "psychic"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 576,
    "name": "Gothitelle",
    "region": "unova",
    "types": [
      "psychic"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 577,
    "name": "Solosis",
    "region": "unova",
    "types": [
      "psychic"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 578,
    "name": "Duosion",
    "region": "unova",
    "types": [
      "psychic"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 579,
    "name": "Reuniclus",
    "region": "unova",
    "types": [
      "psychic"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 580,
    "name": "Ducklett",
    "region": "unova",
    "types": [
      "water",
      "flying"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 581,
    "name": "Swanna",
    "region": "unova",
    "types": [
      "water",
      "flying"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 582,
    "name": "Vanillite",
    "region": "unova",
    "types": [
      "ice"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 583,
    "name": "Vanillish",
    "region": "unova",
    "types": [
      "ice"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 584,
    "name": "Vanilluxe",
    "region": "unova",
    "types": [
      "ice"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 585,
    "name": "Deerling",
    "region": "unova",
    "types": [
      "normal",
      "grass"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false,
    "alternateForm": true
  },
  {
    "id": 586,
    "name": "Sawsbuck",
    "region": "unova",
    "types": [
      "normal",
      "grass"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false,
    "alternateForm": true
  },
  {
    "id": 587,
    "name": "Emolga",
    "region": "unova",
    "types": [
      "electric",
      "flying"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 588,
    "name": "Karrablast",
    "region": "unova",
    "types": [
      "bug"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 589,
    "name": "Escavalier",
    "region": "unova",
    "types": [
      "bug",
      "steel"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 590,
    "name": "Foongus",
    "region": "unova",
    "types": [
      "grass",
      "poison"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 591,
    "name": "Amoonguss",
    "region": "unova",
    "types": [
      "grass",
      "poison"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 592,
    "name": "Frillish",
    "region": "unova",
    "types": [
      "water",
      "ghost"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 593,
    "name": "Jellicent",
    "region": "unova",
    "types": [
      "water",
      "ghost"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 594,
    "name": "Alomomola",
    "region": "unova",
    "types": [
      "water"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 595,
    "name": "Joltik",
    "region": "unova",
    "types": [
      "bug",
      "electric"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 596,
    "name": "Galvantula",
    "region": "unova",
    "types": [
      "bug",
      "electric"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 597,
    "name": "Ferroseed",
    "region": "unova",
    "types": [
      "grass",
      "steel"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 598,
    "name": "Ferrothorn",
    "region": "unova",
    "types": [
      "grass",
      "steel"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 599,
    "name": "Klink",
    "region": "unova",
    "types": [
      "steel"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 600,
    "name": "Klang",
    "region": "unova",
    "types": [
      "steel"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 601,
    "name": "Klinklang",
    "region": "unova",
    "types": [
      "steel"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 602,
    "name": "Tynamo",
    "region": "unova",
    "types": [
      "electric"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 603,
    "name": "Eelektrik",
    "region": "unova",
    "types": [
      "electric"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 604,
    "name": "Eelektross",
    "region": "unova",
    "types": [
      "electric"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 605,
    "name": "Elgyem",
    "region": "unova",
    "types": [
      "psychic"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 606,
    "name": "Beheeyem",
    "region": "unova",
    "types": [
      "psychic"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 607,
    "name": "Litwick",
    "region": "unova",
    "types": [
      "ghost",
      "fire"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 608,
    "name": "Lampent",
    "region": "unova",
    "types": [
      "ghost",
      "fire"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 609,
    "name": "Chandelure",
    "region": "unova",
    "types": [
      "ghost",
      "fire"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 610,
    "name": "Axew",
    "region": "unova",
    "types": [
      "dragon"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 611,
    "name": "Fraxure",
    "region": "unova",
    "types": [
      "dragon"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 612,
    "name": "Haxorus",
    "region": "unova",
    "types": [
      "dragon"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 613,
    "name": "Cubchoo",
    "region": "unova",
    "types": [
      "ice"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 614,
    "name": "Beartic",
    "region": "unova",
    "types": [
      "ice"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 615,
    "name": "Cryogonal",
    "region": "unova",
    "types": [
      "ice"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 616,
    "name": "Shelmet",
    "region": "unova",
    "types": [
      "bug"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 617,
    "name": "Accelgor",
    "region": "unova",
    "types": [
      "bug"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 618,
    "name": "Stunfisk",
    "region": "unova",
    "types": [
      "ground",
      "electric"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false,
    "alternateForm": true
  },
  {
    "id": 619,
    "name": "Mienfoo",
    "region": "unova",
    "types": [
      "fighting"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 620,
    "name": "Mienshao",
    "region": "unova",
    "types": [
      "fighting"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 621,
    "name": "Druddigon",
    "region": "unova",
    "types": [
      "dragon"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 622,
    "name": "Golett",
    "region": "unova",
    "types": [
      "ground",
      "ghost"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 623,
    "name": "Golurk",
    "region": "unova",
    "types": [
      "ground",
      "ghost"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 624,
    "name": "Pawniard",
    "region": "unova",
    "types": [
      "dark",
      "steel"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 625,
    "name": "Bisharp",
    "region": "unova",
    "types": [
      "dark",
      "steel"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 626,
    "name": "Bouffalant",
    "region": "unova",
    "types": [
      "normal"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 627,
    "name": "Rufflet",
    "region": "unova",
    "types": [
      "normal",
      "flying"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 628,
    "name": "Braviary",
    "region": "unova",
    "types": [
      "normal",
      "flying"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false,
    "alternateForm": true
  },
  {
    "id": 629,
    "name": "Vullaby",
    "region": "unova",
    "types": [
      "dark",
      "flying"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 630,
    "name": "Mandibuzz",
    "region": "unova",
    "types": [
      "dark",
      "flying"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 631,
    "name": "Heatmor",
    "region": "unova",
    "types": [
      "fire"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 632,
    "name": "Durant",
    "region": "unova",
    "types": [
      "bug",
      "steel"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 633,
    "name": "Deino",
    "region": "unova",
    "types": [
      "dark",
      "dragon"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 634,
    "name": "Zweilous",
    "region": "unova",
    "types": [
      "dark",
      "dragon"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 635,
    "name": "Hydreigon",
    "region": "unova",
    "types": [
      "dark",
      "dragon"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 636,
    "name": "Larvesta",
    "region": "unova",
    "types": [
      "bug",
      "fire"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 637,
    "name": "Volcarona",
    "region": "unova",
    "types": [
      "bug",
      "fire"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 638,
    "name": "Cobalion",
    "region": "unova",
    "types": [
      "steel",
      "fighting"
    ],
    "legendary": "sub-legendary",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 639,
    "name": "Terrakion",
    "region": "unova",
    "types": [
      "rock",
      "fighting"
    ],
    "legendary": "sub-legendary",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 640,
    "name": "Virizion",
    "region": "unova",
    "types": [
      "grass",
      "fighting"
    ],
    "legendary": "sub-legendary",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 641,
    "name": "Tornadus",
    "region": "unova",
    "types": [
      "flying"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false,
    "alternateForm": true
  },
  {
    "id": 642,
    "name": "Thundurus",
    "region": "unova",
    "types": [
      "electric",
      "flying"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false,
    "alternateForm": true
  },
  {
    "id": 643,
    "name": "Reshiram",
    "region": "unova",
    "types": [
      "dragon",
      "fire"
    ],
    "legendary": "legendary",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 644,
    "name": "Zekrom",
    "region": "unova",
    "types": [
      "dragon",
      "electric"
    ],
    "legendary": "legendary",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 645,
    "name": "Landorus",
    "region": "unova",
    "types": [
      "ground",
      "flying"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false,
    "alternateForm": true
  },
  {
    "id": 646,
    "name": "Kyurem",
    "region": "unova",
    "types": [
      "dragon",
      "ice"
    ],
    "legendary": "legendary",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 647,
    "name": "Keldeo",
    "region": "unova",
    "types": [
      "water",
      "fighting"
    ],
    "legendary": "mythical",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false,
    "alternateForm": true
  },
  {
    "id": 648,
    "name": "Meloetta",
    "region": "unova",
    "types": [
      "normal",
      "psychic"
    ],
    "legendary": "mythical",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false,
    "alternateForm": true
  },
  {
    "id": 649,
    "name": "Genesect",
    "region": "unova",
    "types": [
      "bug",
      "steel"
    ],
    "legendary": "mythical",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false,
    "alternateForm": true
  },
  {
    "id": 650,
    "name": "Chespin",
    "region": "kalos",
    "types": [
      "grass"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 651,
    "name": "Quilladin",
    "region": "kalos",
    "types": [
      "grass"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 652,
    "name": "Chesnaught",
    "region": "kalos",
    "types": [
      "grass",
      "fighting"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 653,
    "name": "Fennekin",
    "region": "kalos",
    "types": [
      "fire"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 654,
    "name": "Braixen",
    "region": "kalos",
    "types": [
      "fire"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 655,
    "name": "Delphox",
    "region": "kalos",
    "types": [
      "fire",
      "psychic"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 656,
    "name": "Froakie",
    "region": "kalos",
    "types": [
      "water"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 657,
    "name": "Frogadier",
    "region": "kalos",
    "types": [
      "water"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 658,
    "name": "Greninja",
    "region": "kalos",
    "types": [
      "water",
      "dark"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false,
    "alternateForm": true
  },
  {
    "id": 659,
    "name": "Bunnelby",
    "region": "kalos",
    "types": [
      "normal"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 660,
    "name": "Diggersby",
    "region": "kalos",
    "types": [
      "normal",
      "ground"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 661,
    "name": "Fletchling",
    "region": "kalos",
    "types": [
      "normal",
      "flying"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 662,
    "name": "Fletchinder",
    "region": "kalos",
    "types": [
      "fire",
      "flying"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 663,
    "name": "Talonflame",
    "region": "kalos",
    "types": [
      "fire",
      "flying"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 664,
    "name": "Scatterbug",
    "region": "kalos",
    "types": [
      "bug"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 665,
    "name": "Spewpa",
    "region": "kalos",
    "types": [
      "bug"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 666,
    "name": "Vivillon",
    "region": "kalos",
    "types": [
      "bug",
      "flying"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false,
    "alternateForm": true
  },
  {
    "id": 667,
    "name": "Litleo",
    "region": "kalos",
    "types": [
      "fire",
      "normal"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 668,
    "name": "Pyroar",
    "region": "kalos",
    "types": [
      "fire",
      "normal"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 669,
    "name": "Flabébé",
    "region": "kalos",
    "types": [
      "fairy"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false,
    "alternateForm": true
  },
  {
    "id": 670,
    "name": "Floette",
    "region": "kalos",
    "types": [
      "fairy"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false,
    "alternateForm": true
  },
  {
    "id": 671,
    "name": "Florges",
    "region": "kalos",
    "types": [
      "fairy"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false,
    "alternateForm": true
  },
  {
    "id": 672,
    "name": "Skiddo",
    "region": "kalos",
    "types": [
      "grass"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 673,
    "name": "Gogoat",
    "region": "kalos",
    "types": [
      "grass"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 674,
    "name": "Pancham",
    "region": "kalos",
    "types": [
      "fighting"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 675,
    "name": "Pangoro",
    "region": "kalos",
    "types": [
      "fighting",
      "dark"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 676,
    "name": "Furfrou",
    "region": "kalos",
    "types": [
      "normal"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false,
    "alternateForm": true
  },
  {
    "id": 677,
    "name": "Espurr",
    "region": "kalos",
    "types": [
      "psychic"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 678,
    "name": "Meowstic",
    "region": "kalos",
    "types": [
      "psychic"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false,
    "alternateForm": true
  },
  {
    "id": 679,
    "name": "Honedge",
    "region": "kalos",
    "types": [
      "steel",
      "ghost"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 680,
    "name": "Doublade",
    "region": "kalos",
    "types": [
      "steel",
      "ghost"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 681,
    "name": "Aegislash",
    "region": "kalos",
    "types": [
      "steel",
      "ghost"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false,
    "alternateForm": true
  },
  {
    "id": 682,
    "name": "Spritzee",
    "region": "kalos",
    "types": [
      "fairy"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 683,
    "name": "Aromatisse",
    "region": "kalos",
    "types": [
      "fairy"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 684,
    "name": "Swirlix",
    "region": "kalos",
    "types": [
      "fairy"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 685,
    "name": "Slurpuff",
    "region": "kalos",
    "types": [
      "fairy"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 686,
    "name": "Inkay",
    "region": "kalos",
    "types": [
      "dark",
      "psychic"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 687,
    "name": "Malamar",
    "region": "kalos",
    "types": [
      "dark",
      "psychic"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 688,
    "name": "Binacle",
    "region": "kalos",
    "types": [
      "rock",
      "water"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 689,
    "name": "Barbaracle",
    "region": "kalos",
    "types": [
      "rock",
      "water"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 690,
    "name": "Skrelp",
    "region": "kalos",
    "types": [
      "poison",
      "water"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 691,
    "name": "Dragalge",
    "region": "kalos",
    "types": [
      "poison",
      "dragon"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 692,
    "name": "Clauncher",
    "region": "kalos",
    "types": [
      "water"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 693,
    "name": "Clawitzer",
    "region": "kalos",
    "types": [
      "water"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 694,
    "name": "Helioptile",
    "region": "kalos",
    "types": [
      "electric",
      "normal"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 695,
    "name": "Heliolisk",
    "region": "kalos",
    "types": [
      "electric",
      "normal"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 696,
    "name": "Tyrunt",
    "region": "kalos",
    "types": [
      "rock",
      "dragon"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 697,
    "name": "Tyrantrum",
    "region": "kalos",
    "types": [
      "rock",
      "dragon"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 698,
    "name": "Amaura",
    "region": "kalos",
    "types": [
      "rock",
      "ice"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 699,
    "name": "Aurorus",
    "region": "kalos",
    "types": [
      "rock",
      "ice"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 700,
    "name": "Sylveon",
    "region": "kalos",
    "types": [
      "fairy"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 701,
    "name": "Hawlucha",
    "region": "kalos",
    "types": [
      "fighting",
      "flying"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 702,
    "name": "Dedenne",
    "region": "kalos",
    "types": [
      "electric",
      "fairy"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 703,
    "name": "Carbink",
    "region": "kalos",
    "types": [
      "rock",
      "fairy"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 704,
    "name": "Goomy",
    "region": "kalos",
    "types": [
      "dragon"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 705,
    "name": "Sliggoo",
    "region": "kalos",
    "types": [
      "dragon"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false,
    "alternateForm": true
  },
  {
    "id": 706,
    "name": "Goodra",
    "region": "kalos",
    "types": [
      "dragon"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false,
    "alternateForm": true
  },
  {
    "id": 707,
    "name": "Klefki",
    "region": "kalos",
    "types": [
      "steel",
      "fairy"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 708,
    "name": "Phantump",
    "region": "kalos",
    "types": [
      "ghost",
      "grass"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 709,
    "name": "Trevenant",
    "region": "kalos",
    "types": [
      "ghost",
      "grass"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 710,
    "name": "Pumpkaboo",
    "region": "kalos",
    "types": [
      "ghost",
      "grass"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false,
    "alternateForm": true
  },
  {
    "id": 711,
    "name": "Gourgeist",
    "region": "kalos",
    "types": [
      "ghost",
      "grass"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false,
    "alternateForm": true
  },
  {
    "id": 712,
    "name": "Bergmite",
    "region": "kalos",
    "types": [
      "ice"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 713,
    "name": "Avalugg",
    "region": "kalos",
    "types": [
      "ice"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false,
    "alternateForm": true
  },
  {
    "id": 714,
    "name": "Noibat",
    "region": "kalos",
    "types": [
      "flying",
      "dragon"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 715,
    "name": "Noivern",
    "region": "kalos",
    "types": [
      "flying",
      "dragon"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 716,
    "name": "Xerneas",
    "region": "kalos",
    "types": [
      "fairy"
    ],
    "legendary": "legendary",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false,
    "alternateForm": true
  },
  {
    "id": 717,
    "name": "Yveltal",
    "region": "kalos",
    "types": [
      "dark",
      "flying"
    ],
    "legendary": "legendary",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 718,
    "name": "Zygarde",
    "region": "kalos",
    "types": [
      "dragon",
      "ground"
    ],
    "legendary": "legendary",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false,
    "alternateForm": true
  },
  {
    "id": 719,
    "name": "Diancie",
    "region": "kalos",
    "types": [
      "rock",
      "fairy"
    ],
    "legendary": "mythical",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": true,
    "gigantamax": false
  },
  {
    "id": 720,
    "name": "Hoopa",
    "region": "kalos",
    "types": [
      "psychic",
      "ghost"
    ],
    "legendary": "mythical",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 721,
    "name": "Volcanion",
    "region": "kalos",
    "types": [
      "fire",
      "water"
    ],
    "legendary": "mythical",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 722,
    "name": "Rowlet",
    "region": "alola",
    "types": [
      "grass",
      "flying"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 723,
    "name": "Dartrix",
    "region": "alola",
    "types": [
      "grass",
      "flying"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 724,
    "name": "Decidueye",
    "region": "alola",
    "types": [
      "grass",
      "ghost"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false,
    "alternateForm": true
  },
  {
    "id": 725,
    "name": "Litten",
    "region": "alola",
    "types": [
      "fire"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 726,
    "name": "Torracat",
    "region": "alola",
    "types": [
      "fire"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 727,
    "name": "Incineroar",
    "region": "alola",
    "types": [
      "fire",
      "dark"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 728,
    "name": "Popplio",
    "region": "alola",
    "types": [
      "water"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 729,
    "name": "Brionne",
    "region": "alola",
    "types": [
      "water"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 730,
    "name": "Primarina",
    "region": "alola",
    "types": [
      "water",
      "fairy"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 731,
    "name": "Pikipek",
    "region": "alola",
    "types": [
      "normal",
      "flying"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 732,
    "name": "Trumbeak",
    "region": "alola",
    "types": [
      "normal",
      "flying"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 733,
    "name": "Toucannon",
    "region": "alola",
    "types": [
      "normal",
      "flying"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 734,
    "name": "Yungoos",
    "region": "alola",
    "types": [
      "normal"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 735,
    "name": "Gumshoos",
    "region": "alola",
    "types": [
      "normal"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 736,
    "name": "Grubbin",
    "region": "alola",
    "types": [
      "bug"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 737,
    "name": "Charjabug",
    "region": "alola",
    "types": [
      "bug",
      "electric"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 738,
    "name": "Vikavolt",
    "region": "alola",
    "types": [
      "bug",
      "electric"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 739,
    "name": "Crabrawler",
    "region": "alola",
    "types": [
      "fighting"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 740,
    "name": "Crabominable",
    "region": "alola",
    "types": [
      "fighting",
      "ice"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 741,
    "name": "Oricorio",
    "region": "alola",
    "types": [
      "fire",
      "flying"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false,
    "alternateForm": true
  },
  {
    "id": 742,
    "name": "Cutiefly",
    "region": "alola",
    "types": [
      "bug",
      "fairy"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 743,
    "name": "Ribombee",
    "region": "alola",
    "types": [
      "bug",
      "fairy"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 744,
    "name": "Rockruff",
    "region": "alola",
    "types": [
      "rock"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 745,
    "name": "Lycanroc",
    "region": "alola",
    "types": [
      "rock"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false,
    "alternateForm": true
  },
  {
    "id": 746,
    "name": "Wishiwashi",
    "region": "alola",
    "types": [
      "water"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false,
    "alternateForm": true
  },
  {
    "id": 747,
    "name": "Mareanie",
    "region": "alola",
    "types": [
      "poison",
      "water"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 748,
    "name": "Toxapex",
    "region": "alola",
    "types": [
      "poison",
      "water"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 749,
    "name": "Mudbray",
    "region": "alola",
    "types": [
      "ground"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 750,
    "name": "Mudsdale",
    "region": "alola",
    "types": [
      "ground"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 751,
    "name": "Dewpider",
    "region": "alola",
    "types": [
      "water",
      "bug"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 752,
    "name": "Araquanid",
    "region": "alola",
    "types": [
      "water",
      "bug"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 753,
    "name": "Fomantis",
    "region": "alola",
    "types": [
      "grass"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 754,
    "name": "Lurantis",
    "region": "alola",
    "types": [
      "grass"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 755,
    "name": "Morelull",
    "region": "alola",
    "types": [
      "grass",
      "fairy"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 756,
    "name": "Shiinotic",
    "region": "alola",
    "types": [
      "grass",
      "fairy"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 757,
    "name": "Salandit",
    "region": "alola",
    "types": [
      "poison",
      "fire"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 758,
    "name": "Salazzle",
    "region": "alola",
    "types": [
      "poison",
      "fire"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 759,
    "name": "Stufful",
    "region": "alola",
    "types": [
      "normal",
      "fighting"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 760,
    "name": "Bewear",
    "region": "alola",
    "types": [
      "normal",
      "fighting"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 761,
    "name": "Bounsweet",
    "region": "alola",
    "types": [
      "grass"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 762,
    "name": "Steenee",
    "region": "alola",
    "types": [
      "grass"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 763,
    "name": "Tsareena",
    "region": "alola",
    "types": [
      "grass"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 764,
    "name": "Comfey",
    "region": "alola",
    "types": [
      "fairy"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 765,
    "name": "Oranguru",
    "region": "alola",
    "types": [
      "normal",
      "psychic"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 766,
    "name": "Passimian",
    "region": "alola",
    "types": [
      "fighting"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 767,
    "name": "Wimpod",
    "region": "alola",
    "types": [
      "bug",
      "water"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 768,
    "name": "Golisopod",
    "region": "alola",
    "types": [
      "bug",
      "water"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 769,
    "name": "Sandygast",
    "region": "alola",
    "types": [
      "ghost",
      "ground"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 770,
    "name": "Palossand",
    "region": "alola",
    "types": [
      "ghost",
      "ground"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 771,
    "name": "Pyukumuku",
    "region": "alola",
    "types": [
      "water"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 772,
    "name": "Type: Null",
    "region": "alola",
    "types": [
      "normal"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 773,
    "name": "Silvally",
    "region": "alola",
    "types": [
      "normal"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 774,
    "name": "Minior",
    "region": "alola",
    "types": [
      "rock",
      "flying"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false,
    "alternateForm": true
  },
  {
    "id": 775,
    "name": "Komala",
    "region": "alola",
    "types": [
      "normal"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 776,
    "name": "Turtonator",
    "region": "alola",
    "types": [
      "fire",
      "dragon"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 777,
    "name": "Togedemaru",
    "region": "alola",
    "types": [
      "electric",
      "steel"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 778,
    "name": "Mimikyu",
    "region": "alola",
    "types": [
      "ghost",
      "fairy"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 779,
    "name": "Bruxish",
    "region": "alola",
    "types": [
      "water",
      "psychic"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 780,
    "name": "Drampa",
    "region": "alola",
    "types": [
      "normal",
      "dragon"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 781,
    "name": "Dhelmise",
    "region": "alola",
    "types": [
      "ghost",
      "grass"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 782,
    "name": "Jangmo-o",
    "region": "alola",
    "types": [
      "dragon"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 783,
    "name": "Hakamo-o",
    "region": "alola",
    "types": [
      "dragon",
      "fighting"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 784,
    "name": "Kommo-o",
    "region": "alola",
    "types": [
      "dragon",
      "fighting"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 785,
    "name": "Tapu Koko",
    "region": "alola",
    "types": [
      "electric",
      "fairy"
    ],
    "legendary": "sub-legendary",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 786,
    "name": "Tapu Lele",
    "region": "alola",
    "types": [
      "psychic",
      "fairy"
    ],
    "legendary": "sub-legendary",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 787,
    "name": "Tapu Bulu",
    "region": "alola",
    "types": [
      "grass",
      "fairy"
    ],
    "legendary": "sub-legendary",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 788,
    "name": "Tapu Fini",
    "region": "alola",
    "types": [
      "water",
      "fairy"
    ],
    "legendary": "sub-legendary",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 789,
    "name": "Cosmog",
    "region": "alola",
    "types": [
      "psychic"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 790,
    "name": "Cosmoem",
    "region": "alola",
    "types": [
      "psychic"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 791,
    "name": "Solgaleo",
    "region": "alola",
    "types": [
      "psychic",
      "steel"
    ],
    "legendary": "legendary",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 792,
    "name": "Lunala",
    "region": "alola",
    "types": [
      "psychic",
      "ghost"
    ],
    "legendary": "legendary",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 793,
    "name": "Nihilego",
    "region": "alola",
    "types": [
      "rock",
      "poison"
    ],
    "legendary": "ultra-beast",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 794,
    "name": "Buzzwole",
    "region": "alola",
    "types": [
      "bug",
      "fighting"
    ],
    "legendary": "ultra-beast",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 795,
    "name": "Pheromosa",
    "region": "alola",
    "types": [
      "bug",
      "fighting"
    ],
    "legendary": "ultra-beast",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 796,
    "name": "Xurkitree",
    "region": "alola",
    "types": [
      "electric"
    ],
    "legendary": "ultra-beast",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 797,
    "name": "Celesteela",
    "region": "alola",
    "types": [
      "steel",
      "flying"
    ],
    "legendary": "ultra-beast",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 798,
    "name": "Kartana",
    "region": "alola",
    "types": [
      "grass",
      "steel"
    ],
    "legendary": "ultra-beast",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 799,
    "name": "Guzzlord",
    "region": "alola",
    "types": [
      "dark",
      "dragon"
    ],
    "legendary": "ultra-beast",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 800,
    "name": "Necrozma",
    "region": "alola",
    "types": [
      "psychic"
    ],
    "legendary": "legendary",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 801,
    "name": "Magearna",
    "region": "alola",
    "types": [
      "steel",
      "fairy"
    ],
    "legendary": "mythical",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false,
    "alternateForm": true
  },
  {
    "id": 802,
    "name": "Marshadow",
    "region": "alola",
    "types": [
      "fighting",
      "ghost"
    ],
    "legendary": "mythical",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 803,
    "name": "Poipole",
    "region": "alola",
    "types": [
      "poison"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 804,
    "name": "Naganadel",
    "region": "alola",
    "types": [
      "poison",
      "dragon"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 805,
    "name": "Stakataka",
    "region": "alola",
    "types": [
      "rock",
      "steel"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 806,
    "name": "Blacephalon",
    "region": "alola",
    "types": [
      "fire",
      "ghost"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 807,
    "name": "Zeraora",
    "region": "alola",
    "types": [
      "electric"
    ],
    "legendary": "mythical",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 808,
    "name": "Meltan",
    "region": "alola",
    "types": [
      "steel"
    ],
    "legendary": "mythical",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 809,
    "name": "Melmetal",
    "region": "alola",
    "types": [
      "steel"
    ],
    "legendary": "mythical",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": true
  },
  {
    "id": 810,
    "name": "Grookey",
    "region": "galar",
    "types": [
      "grass"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 811,
    "name": "Thwackey",
    "region": "galar",
    "types": [
      "grass"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 812,
    "name": "Rillaboom",
    "region": "galar",
    "types": [
      "grass"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": true
  },
  {
    "id": 813,
    "name": "Scorbunny",
    "region": "galar",
    "types": [
      "fire"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 814,
    "name": "Raboot",
    "region": "galar",
    "types": [
      "fire"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 815,
    "name": "Cinderace",
    "region": "galar",
    "types": [
      "fire"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": true
  },
  {
    "id": 816,
    "name": "Sobble",
    "region": "galar",
    "types": [
      "water"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 817,
    "name": "Drizzile",
    "region": "galar",
    "types": [
      "water"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 818,
    "name": "Inteleon",
    "region": "galar",
    "types": [
      "water"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": true
  },
  {
    "id": 819,
    "name": "Skwovet",
    "region": "galar",
    "types": [
      "normal"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 820,
    "name": "Greedent",
    "region": "galar",
    "types": [
      "normal"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 821,
    "name": "Rookidee",
    "region": "galar",
    "types": [
      "flying"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 822,
    "name": "Corvisquire",
    "region": "galar",
    "types": [
      "flying"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 823,
    "name": "Corviknight",
    "region": "galar",
    "types": [
      "flying",
      "steel"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": true
  },
  {
    "id": 824,
    "name": "Blipbug",
    "region": "galar",
    "types": [
      "bug"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 825,
    "name": "Dottler",
    "region": "galar",
    "types": [
      "bug",
      "psychic"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 826,
    "name": "Orbeetle",
    "region": "galar",
    "types": [
      "bug",
      "psychic"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": true
  },
  {
    "id": 827,
    "name": "Nickit",
    "region": "galar",
    "types": [
      "dark"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 828,
    "name": "Thievul",
    "region": "galar",
    "types": [
      "dark"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 829,
    "name": "Gossifleur",
    "region": "galar",
    "types": [
      "grass"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 830,
    "name": "Eldegoss",
    "region": "galar",
    "types": [
      "grass"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 831,
    "name": "Wooloo",
    "region": "galar",
    "types": [
      "normal"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 832,
    "name": "Dubwool",
    "region": "galar",
    "types": [
      "normal"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 833,
    "name": "Chewtle",
    "region": "galar",
    "types": [
      "water"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 834,
    "name": "Drednaw",
    "region": "galar",
    "types": [
      "water",
      "rock"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": true
  },
  {
    "id": 835,
    "name": "Yamper",
    "region": "galar",
    "types": [
      "electric"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 836,
    "name": "Boltund",
    "region": "galar",
    "types": [
      "electric"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 837,
    "name": "Rolycoly",
    "region": "galar",
    "types": [
      "rock"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 838,
    "name": "Carkol",
    "region": "galar",
    "types": [
      "rock",
      "fire"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 839,
    "name": "Coalossal",
    "region": "galar",
    "types": [
      "rock",
      "fire"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": true
  },
  {
    "id": 840,
    "name": "Applin",
    "region": "galar",
    "types": [
      "grass",
      "dragon"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 841,
    "name": "Flapple",
    "region": "galar",
    "types": [
      "grass",
      "dragon"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": true
  },
  {
    "id": 842,
    "name": "Appletun",
    "region": "galar",
    "types": [
      "grass",
      "dragon"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": true
  },
  {
    "id": 843,
    "name": "Silicobra",
    "region": "galar",
    "types": [
      "ground"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 844,
    "name": "Sandaconda",
    "region": "galar",
    "types": [
      "ground"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": true
  },
  {
    "id": 845,
    "name": "Cramorant",
    "region": "galar",
    "types": [
      "flying",
      "water"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 846,
    "name": "Arrokuda",
    "region": "galar",
    "types": [
      "water"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 847,
    "name": "Barraskewda",
    "region": "galar",
    "types": [
      "water"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 848,
    "name": "Toxel",
    "region": "galar",
    "types": [
      "electric",
      "poison"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 849,
    "name": "Toxtricity",
    "region": "galar",
    "types": [
      "electric",
      "poison"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": true
  },
  {
    "id": 850,
    "name": "Sizzlipede",
    "region": "galar",
    "types": [
      "fire",
      "bug"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 851,
    "name": "Centiskorch",
    "region": "galar",
    "types": [
      "fire",
      "bug"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": true
  },
  {
    "id": 852,
    "name": "Clobbopus",
    "region": "galar",
    "types": [
      "fighting"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 853,
    "name": "Grapploct",
    "region": "galar",
    "types": [
      "fighting"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 854,
    "name": "Sinistea",
    "region": "galar",
    "types": [
      "ghost"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 855,
    "name": "Polteageist",
    "region": "galar",
    "types": [
      "ghost"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 856,
    "name": "Hatenna",
    "region": "galar",
    "types": [
      "psychic"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 857,
    "name": "Hattrem",
    "region": "galar",
    "types": [
      "psychic"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 858,
    "name": "Hatterene",
    "region": "galar",
    "types": [
      "psychic",
      "fairy"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": true
  },
  {
    "id": 859,
    "name": "Impidimp",
    "region": "galar",
    "types": [
      "dark",
      "fairy"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 860,
    "name": "Morgrem",
    "region": "galar",
    "types": [
      "dark",
      "fairy"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 861,
    "name": "Grimmsnarl",
    "region": "galar",
    "types": [
      "dark",
      "fairy"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": true
  },
  {
    "id": 862,
    "name": "Obstagoon",
    "region": "galar",
    "types": [
      "dark",
      "normal"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 863,
    "name": "Perrserker",
    "region": "galar",
    "types": [
      "steel"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 864,
    "name": "Cursola",
    "region": "galar",
    "types": [
      "ghost"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 865,
    "name": "Sirfetch'd",
    "region": "galar",
    "types": [
      "fighting"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 866,
    "name": "Mr. Rime",
    "region": "galar",
    "types": [
      "ice",
      "psychic"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 867,
    "name": "Runerigus",
    "region": "galar",
    "types": [
      "ground",
      "ghost"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 868,
    "name": "Milcery",
    "region": "galar",
    "types": [
      "fairy"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 869,
    "name": "Alcremie",
    "region": "galar",
    "types": [
      "fairy"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": true
  },
  {
    "id": 870,
    "name": "Falinks",
    "region": "galar",
    "types": [
      "fighting"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 871,
    "name": "Pincurchin",
    "region": "galar",
    "types": [
      "electric"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 872,
    "name": "Snom",
    "region": "galar",
    "types": [
      "ice",
      "bug"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 873,
    "name": "Frosmoth",
    "region": "galar",
    "types": [
      "ice",
      "bug"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 874,
    "name": "Stonjourner",
    "region": "galar",
    "types": [
      "rock"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 875,
    "name": "Eiscue",
    "region": "galar",
    "types": [
      "ice"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 876,
    "name": "Indeedee",
    "region": "galar",
    "types": [
      "psychic",
      "normal"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 877,
    "name": "Morpeko",
    "region": "galar",
    "types": [
      "electric",
      "dark"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 878,
    "name": "Cufant",
    "region": "galar",
    "types": [
      "steel"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 879,
    "name": "Copperajah",
    "region": "galar",
    "types": [
      "steel"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": true
  },
  {
    "id": 880,
    "name": "Dracozolt",
    "region": "galar",
    "types": [
      "electric",
      "dragon"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 881,
    "name": "Arctozolt",
    "region": "galar",
    "types": [
      "electric",
      "ice"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 882,
    "name": "Dracovish",
    "region": "galar",
    "types": [
      "water",
      "dragon"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 883,
    "name": "Arctovish",
    "region": "galar",
    "types": [
      "water",
      "ice"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 884,
    "name": "Duraludon",
    "region": "galar",
    "types": [
      "steel",
      "dragon"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": true
  },
  {
    "id": 885,
    "name": "Dreepy",
    "region": "galar",
    "types": [
      "dragon",
      "ghost"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 886,
    "name": "Drakloak",
    "region": "galar",
    "types": [
      "dragon",
      "ghost"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 887,
    "name": "Dragapult",
    "region": "galar",
    "types": [
      "dragon",
      "ghost"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 888,
    "name": "Zacian",
    "region": "galar",
    "types": [
      "fairy"
    ],
    "legendary": "legendary",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 889,
    "name": "Zamazenta",
    "region": "galar",
    "types": [
      "fighting"
    ],
    "legendary": "legendary",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 890,
    "name": "Eternatus",
    "region": "galar",
    "types": [
      "poison",
      "dragon"
    ],
    "legendary": "legendary",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 891,
    "name": "Kubfu",
    "region": "galar",
    "types": [
      "fighting"
    ],
    "legendary": "sub-legendary",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 892,
    "name": "Urshifu",
    "region": "galar",
    "types": [
      "fighting",
      "dark"
    ],
    "legendary": "sub-legendary",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": true
  },
  {
    "id": 893,
    "name": "Zarude",
    "region": "galar",
    "types": [
      "dark",
      "grass"
    ],
    "legendary": "mythical",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 894,
    "name": "Regieleki",
    "region": "galar",
    "types": [
      "electric"
    ],
    "legendary": "sub-legendary",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 895,
    "name": "Regidrago",
    "region": "galar",
    "types": [
      "dragon"
    ],
    "legendary": "sub-legendary",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 896,
    "name": "Glastrier",
    "region": "galar",
    "types": [
      "ice"
    ],
    "legendary": "sub-legendary",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 897,
    "name": "Spectrier",
    "region": "galar",
    "types": [
      "ghost"
    ],
    "legendary": "sub-legendary",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 898,
    "name": "Calyrex",
    "region": "galar",
    "types": [
      "psychic",
      "grass"
    ],
    "legendary": "sub-legendary",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 899,
    "name": "Wyrdeer",
    "region": "galar",
    "types": [
      "normal",
      "psychic"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 900,
    "name": "Kleavor",
    "region": "galar",
    "types": [
      "bug",
      "rock"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 901,
    "name": "Ursaluna",
    "region": "galar",
    "types": [
      "ground",
      "normal"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 902,
    "name": "Basculegion",
    "region": "galar",
    "types": [
      "water",
      "ghost"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 903,
    "name": "Sneasler",
    "region": "galar",
    "types": [
      "fighting",
      "poison"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 904,
    "name": "Overqwil",
    "region": "galar",
    "types": [
      "dark",
      "poison"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 905,
    "name": "Enamorus",
    "region": "galar",
    "types": [
      "fairy",
      "flying"
    ],
    "legendary": "legendary",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 906,
    "name": "Sprigatito",
    "region": "paldea",
    "types": [
      "grass"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 907,
    "name": "Floragato",
    "region": "paldea",
    "types": [
      "grass"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 908,
    "name": "Meowscarada",
    "region": "paldea",
    "types": [
      "grass",
      "dark"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 909,
    "name": "Fuecoco",
    "region": "paldea",
    "types": [
      "fire"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 910,
    "name": "Crocalor",
    "region": "paldea",
    "types": [
      "fire"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 911,
    "name": "Skeledirge",
    "region": "paldea",
    "types": [
      "fire",
      "ghost"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 912,
    "name": "Quaxly",
    "region": "paldea",
    "types": [
      "water"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 913,
    "name": "Quaxwell",
    "region": "paldea",
    "types": [
      "water"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 914,
    "name": "Quaquaval",
    "region": "paldea",
    "types": [
      "water",
      "fighting"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 915,
    "name": "Lechonk",
    "region": "paldea",
    "types": [
      "normal"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 916,
    "name": "Oinkologne",
    "region": "paldea",
    "types": [
      "normal"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 917,
    "name": "Tarountula",
    "region": "paldea",
    "types": [
      "bug"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 918,
    "name": "Spidops",
    "region": "paldea",
    "types": [
      "bug"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 919,
    "name": "Nymble",
    "region": "paldea",
    "types": [
      "bug"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 920,
    "name": "Lokix",
    "region": "paldea",
    "types": [
      "bug",
      "dark"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 921,
    "name": "Pawmi",
    "region": "paldea",
    "types": [
      "electric"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 922,
    "name": "Pawmo",
    "region": "paldea",
    "types": [
      "electric",
      "fighting"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 923,
    "name": "Pawmot",
    "region": "paldea",
    "types": [
      "electric",
      "fighting"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 924,
    "name": "Tandemaus",
    "region": "paldea",
    "types": [
      "normal"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 925,
    "name": "Maushold",
    "region": "paldea",
    "types": [
      "normal"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 926,
    "name": "Fidough",
    "region": "paldea",
    "types": [
      "fairy"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 927,
    "name": "Dachsbun",
    "region": "paldea",
    "types": [
      "fairy"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 928,
    "name": "Smoliv",
    "region": "paldea",
    "types": [
      "grass",
      "normal"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 929,
    "name": "Dolliv",
    "region": "paldea",
    "types": [
      "grass",
      "normal"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 930,
    "name": "Arboliva",
    "region": "paldea",
    "types": [
      "grass",
      "normal"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 931,
    "name": "Squawkabilly",
    "region": "paldea",
    "types": [
      "normal",
      "flying"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 932,
    "name": "Nacli",
    "region": "paldea",
    "types": [
      "rock"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 933,
    "name": "Naclstack",
    "region": "paldea",
    "types": [
      "rock"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 934,
    "name": "Garganacl",
    "region": "paldea",
    "types": [
      "rock"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 935,
    "name": "Charcadet",
    "region": "paldea",
    "types": [
      "fire"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 936,
    "name": "Armarouge",
    "region": "paldea",
    "types": [
      "fire",
      "psychic"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 937,
    "name": "Ceruledge",
    "region": "paldea",
    "types": [
      "fire",
      "ghost"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 938,
    "name": "Tadbulb",
    "region": "paldea",
    "types": [
      "electric"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 939,
    "name": "Bellibolt",
    "region": "paldea",
    "types": [
      "electric"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 940,
    "name": "Wattrel",
    "region": "paldea",
    "types": [
      "electric",
      "flying"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 941,
    "name": "Kilowattrel",
    "region": "paldea",
    "types": [
      "electric",
      "flying"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 942,
    "name": "Maschiff",
    "region": "paldea",
    "types": [
      "dark"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 943,
    "name": "Mabosstiff",
    "region": "paldea",
    "types": [
      "dark"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 944,
    "name": "Shroodle",
    "region": "paldea",
    "types": [
      "poison",
      "normal"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 945,
    "name": "Grafaiai",
    "region": "paldea",
    "types": [
      "poison",
      "normal"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 946,
    "name": "Bramblin",
    "region": "paldea",
    "types": [
      "grass",
      "ghost"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 947,
    "name": "Brambleghast",
    "region": "paldea",
    "types": [
      "grass",
      "ghost"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 948,
    "name": "Toedscool",
    "region": "paldea",
    "types": [
      "ground",
      "grass"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 949,
    "name": "Toedscruel",
    "region": "paldea",
    "types": [
      "ground",
      "grass"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 950,
    "name": "Klawf",
    "region": "paldea",
    "types": [
      "rock"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 951,
    "name": "Capsakid",
    "region": "paldea",
    "types": [
      "grass"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 952,
    "name": "Scovillain",
    "region": "paldea",
    "types": [
      "grass",
      "fire"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 953,
    "name": "Rellor",
    "region": "paldea",
    "types": [
      "bug"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 954,
    "name": "Rabsca",
    "region": "paldea",
    "types": [
      "bug",
      "psychic"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 955,
    "name": "Flittle",
    "region": "paldea",
    "types": [
      "psychic"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 956,
    "name": "Espathra",
    "region": "paldea",
    "types": [
      "psychic"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 957,
    "name": "Tinkatink",
    "region": "paldea",
    "types": [
      "fairy",
      "steel"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 958,
    "name": "Tinkatuff",
    "region": "paldea",
    "types": [
      "fairy",
      "steel"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 959,
    "name": "Tinkaton",
    "region": "paldea",
    "types": [
      "fairy",
      "steel"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 960,
    "name": "Wiglett",
    "region": "paldea",
    "types": [
      "water"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 961,
    "name": "Wugtrio",
    "region": "paldea",
    "types": [
      "water"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 962,
    "name": "Bombirdier",
    "region": "paldea",
    "types": [
      "flying",
      "dark"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 963,
    "name": "Finizen",
    "region": "paldea",
    "types": [
      "water"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 964,
    "name": "Palafin",
    "region": "paldea",
    "types": [
      "water"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 965,
    "name": "Varoom",
    "region": "paldea",
    "types": [
      "steel",
      "poison"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 966,
    "name": "Revavroom",
    "region": "paldea",
    "types": [
      "steel",
      "poison"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 967,
    "name": "Cyclizar",
    "region": "paldea",
    "types": [
      "dragon",
      "normal"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 968,
    "name": "Orthworm",
    "region": "paldea",
    "types": [
      "steel"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 969,
    "name": "Glimmet",
    "region": "paldea",
    "types": [
      "rock",
      "poison"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 970,
    "name": "Glimmora",
    "region": "paldea",
    "types": [
      "rock",
      "poison"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 971,
    "name": "Greavard",
    "region": "paldea",
    "types": [
      "ghost"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 972,
    "name": "Houndstone",
    "region": "paldea",
    "types": [
      "ghost"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 973,
    "name": "Flamigo",
    "region": "paldea",
    "types": [
      "flying",
      "fighting"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 974,
    "name": "Cetoddle",
    "region": "paldea",
    "types": [
      "ice"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 975,
    "name": "Cetitan",
    "region": "paldea",
    "types": [
      "ice"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 976,
    "name": "Veluza",
    "region": "paldea",
    "types": [
      "water",
      "psychic"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 977,
    "name": "Dondozo",
    "region": "paldea",
    "types": [
      "water"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 978,
    "name": "Tatsugiri",
    "region": "paldea",
    "types": [
      "dragon",
      "water"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 979,
    "name": "Annihilape",
    "region": "paldea",
    "types": [
      "fighting",
      "ghost"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 980,
    "name": "Clodsire",
    "region": "paldea",
    "types": [
      "poison",
      "ground"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 981,
    "name": "Farigiraf",
    "region": "paldea",
    "types": [
      "normal",
      "psychic"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 982,
    "name": "Dudunsparce",
    "region": "paldea",
    "types": [
      "normal"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 983,
    "name": "Kingambit",
    "region": "paldea",
    "types": [
      "dark",
      "steel"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 984,
    "name": "Great Tusk",
    "region": "paldea",
    "types": [
      "ground",
      "fighting"
    ],
    "legendary": "paradox",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 985,
    "name": "Scream Tail",
    "region": "paldea",
    "types": [
      "fairy",
      "psychic"
    ],
    "legendary": "paradox",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 986,
    "name": "Brute Bonnet",
    "region": "paldea",
    "types": [
      "grass",
      "dark"
    ],
    "legendary": "paradox",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 987,
    "name": "Flutter Mane",
    "region": "paldea",
    "types": [
      "ghost",
      "fairy"
    ],
    "legendary": "paradox",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 988,
    "name": "Slither Wing",
    "region": "paldea",
    "types": [
      "bug",
      "fighting"
    ],
    "legendary": "paradox",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 989,
    "name": "Sandy Shocks",
    "region": "paldea",
    "types": [
      "electric",
      "ground"
    ],
    "legendary": "paradox",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 990,
    "name": "Iron Treads",
    "region": "paldea",
    "types": [
      "ground",
      "steel"
    ],
    "legendary": "paradox",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 991,
    "name": "Iron Bundle",
    "region": "paldea",
    "types": [
      "ice",
      "water"
    ],
    "legendary": "paradox",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 992,
    "name": "Iron Hands",
    "region": "paldea",
    "types": [
      "fighting",
      "electric"
    ],
    "legendary": "paradox",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 993,
    "name": "Iron Jugulis",
    "region": "paldea",
    "types": [
      "dark",
      "flying"
    ],
    "legendary": "paradox",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 994,
    "name": "Iron Moth",
    "region": "paldea",
    "types": [
      "fire",
      "poison"
    ],
    "legendary": "paradox",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 995,
    "name": "Iron Thorns",
    "region": "paldea",
    "types": [
      "rock",
      "electric"
    ],
    "legendary": "paradox",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 996,
    "name": "Frigibax",
    "region": "paldea",
    "types": [
      "dragon",
      "ice"
    ],
    "legendary": "paradox",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 997,
    "name": "Arctibax",
    "region": "paldea",
    "types": [
      "dragon",
      "ice"
    ],
    "legendary": "paradox",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 998,
    "name": "Baxcalibur",
    "region": "paldea",
    "types": [
      "dragon",
      "ice"
    ],
    "legendary": "paradox",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 999,
    "name": "Gimmighoul",
    "region": "paldea",
    "types": [
      "ghost"
    ],
    "legendary": "paradox",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 1000,
    "name": "Gholdengo",
    "region": "paldea",
    "types": [
      "steel",
      "ghost"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 1001,
    "name": "Wo-Chien",
    "region": "paldea",
    "types": [
      "dark",
      "grass"
    ],
    "legendary": "sub-legendary",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 1002,
    "name": "Chien-Pao",
    "region": "paldea",
    "types": [
      "dark",
      "ice"
    ],
    "legendary": "sub-legendary",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 1003,
    "name": "Ting-Lu",
    "region": "paldea",
    "types": [
      "dark",
      "ground"
    ],
    "legendary": "sub-legendary",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 1004,
    "name": "Chi-Yu",
    "region": "paldea",
    "types": [
      "dark",
      "fire"
    ],
    "legendary": "sub-legendary",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 1005,
    "name": "Roaring Moon",
    "region": "paldea",
    "types": [
      "dragon",
      "dark"
    ],
    "legendary": "paradox",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 1006,
    "name": "Iron Valiant",
    "region": "paldea",
    "types": [
      "fairy",
      "fighting"
    ],
    "legendary": "paradox",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 1007,
    "name": "Koraidon",
    "region": "paldea",
    "types": [
      "fighting",
      "dragon"
    ],
    "legendary": "legendary",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 1008,
    "name": "Miraidon",
    "region": "paldea",
    "types": [
      "electric",
      "dragon"
    ],
    "legendary": "legendary",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 1009,
    "name": "Walking Wake",
    "region": "paldea",
    "types": [
      "water",
      "dragon"
    ],
    "legendary": "paradox",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 1010,
    "name": "Iron Leaves",
    "region": "paldea",
    "types": [
      "grass",
      "psychic"
    ],
    "legendary": "paradox",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 1011,
    "name": "Dipplin",
    "region": "paldea",
    "types": [
      "grass",
      "dragon"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 1012,
    "name": "Poltchageist",
    "region": "paldea",
    "types": [
      "grass",
      "ghost"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": false,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 1013,
    "name": "Sinistcha",
    "region": "paldea",
    "types": [
      "grass",
      "ghost"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 1014,
    "name": "Okidogi",
    "region": "paldea",
    "types": [
      "poison",
      "fighting"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 1015,
    "name": "Munkidori",
    "region": "paldea",
    "types": [
      "poison",
      "psychic"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 1016,
    "name": "Fezandipiti",
    "region": "paldea",
    "types": [
      "poison",
      "fairy"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 1017,
    "name": "Ogerpon",
    "region": "paldea",
    "types": [
      "grass"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 1018,
    "name": "Archaludon",
    "region": "paldea",
    "types": [
      "steel",
      "dragon"
    ],
    "legendary": "none",
    "evolution": "once",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 1019,
    "name": "Hydrapple",
    "region": "paldea",
    "types": [
      "grass",
      "dragon"
    ],
    "legendary": "none",
    "evolution": "twice",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 1020,
    "name": "Gouging Fire",
    "region": "paldea",
    "types": [
      "fire",
      "dragon"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 1021,
    "name": "Raging Bolt",
    "region": "paldea",
    "types": [
      "electric",
      "dragon"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 1022,
    "name": "Iron Boulder",
    "region": "paldea",
    "types": [
      "rock",
      "psychic"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 1023,
    "name": "Iron Crown",
    "region": "paldea",
    "types": [
      "steel",
      "psychic"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 1024,
    "name": "Terapagos",
    "region": "paldea",
    "types": [
      "normal"
    ],
    "legendary": "none",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  },
  {
    "id": 1025,
    "name": "Pecharunt",
    "region": "paldea",
    "types": [
      "poison",
      "ghost"
    ],
    "legendary": "mythical",
    "evolution": "unevolved",
    "fullyEvolved": true,
    "shiny": false,
    "mega": false,
    "gigantamax": false
  }
];
