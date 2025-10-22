import wordsData from '@/public/data/words.json';

type WordType = 'all' | 'noun' | 'verb' | 'adjective' | 'extended';
type SizeMode = 'syllables' | 'letters';
type Comparator = '=' | '>' | '<';

interface Word {
  word: string;
  type: string;
  syllables: number;
  length: number;
}

interface FilterOptions {
  wordType: WordType;
  startsWith?: string;
  endsWith?: string;
  sizeMode?: SizeMode;
  comparator?: Comparator;
  sizeValue?: number;
}

export function filterWords(options: FilterOptions): string[] {
  let filtered: Word[] = wordsData as Word[];

  // Filter by word type
  if (options.wordType !== 'all') {
    filtered = filtered.filter((w) => w.type === options.wordType);
  }

  // Filter by starts with
  if (options.startsWith) {
    filtered = filtered.filter((w) =>
      w.word.toLowerCase().startsWith(options.startsWith!.toLowerCase())
    );
  }

  // Filter by ends with
  if (options.endsWith) {
    filtered = filtered.filter((w) =>
      w.word.toLowerCase().endsWith(options.endsWith!.toLowerCase())
    );
  }

  // Filter by size
  if (options.sizeValue !== undefined && options.sizeMode && options.comparator) {
    const sizeField = options.sizeMode === 'syllables' ? 'syllables' : 'length';

    filtered = filtered.filter((w) => {
      const value = w[sizeField];
      switch (options.comparator) {
        case '=':
          return value === options.sizeValue;
        case '>':
          return value > options.sizeValue!;
        case '<':
          return value < options.sizeValue!;
        default:
          return true;
      }
    });
  }

  return filtered.map((w) => w.word);
}
