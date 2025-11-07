import adjectivesData from '@/public/data/adjectives.json';

type Comparator = '=' | '>' | '<';
type SizeMode = 'syllables' | 'letters';

interface FilterOptions {
  startsWith?: string;
  endsWith?: string;
  sizeMode?: SizeMode;
  comparator?: Comparator;
  sizeValue?: number;
}

interface Adjective {
  word: string;
  type: string;
  syllables: number;
  length: number;
}

export function filterAdjectives(options: FilterOptions): string[] {
  let filtered = adjectivesData as Adjective[];

  // Filter by starts with
  if (options.startsWith) {
    const startsLower = options.startsWith.toLowerCase();
    filtered = filtered.filter(adj =>
      adj.word.toLowerCase().startsWith(startsLower)
    );
  }

  // Filter by ends with
  if (options.endsWith) {
    const endsLower = options.endsWith.toLowerCase();
    filtered = filtered.filter(adj =>
      adj.word.toLowerCase().endsWith(endsLower)
    );
  }

  // Filter by size (syllables or letters)
  if (options.sizeValue && options.sizeMode && options.comparator) {
    const property = options.sizeMode === 'syllables' ? 'syllables' : 'length';

    filtered = filtered.filter(adj => {
      const value = adj[property];
      switch (options.comparator) {
        case '=':
          return value === options.sizeValue;
        case '>':
          return value > (options.sizeValue || 0);
        case '<':
          return value < (options.sizeValue || 999);
        default:
          return true;
      }
    });
  }

  return filtered.map(adj => adj.word);
}
