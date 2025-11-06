import sentencesData from '@/public/data/sentences.json';

export type SentenceType = 'All' | 'Declarative' | 'Interrogative' | 'Exclamatory' | 'Imperative';
export type SentenceTopic = 'All' | 'Nature' | 'Science' | 'Education' | 'Daily Life' | 'Technology' | 'Sports' | 'Travel' | 'Entertainment';

export interface Sentence {
  sentence: string;
  type: string;
  topic: string;
  wordCount: number;
}

export interface SentenceFilterOptions {
  type: SentenceType;
  topic: SentenceTopic;
  count: number;
}

export function filterSentences(options: SentenceFilterOptions): Sentence[] {
  const { type, topic, count } = options;

  // Start with all sentences
  let filtered = sentencesData as Sentence[];

  // Filter by type
  if (type !== 'All') {
    filtered = filtered.filter(s => s.type === type);
  }

  // Filter by topic
  if (topic !== 'All') {
    filtered = filtered.filter(s => s.topic === topic);
  }

  // If no sentences match, return empty array
  if (filtered.length === 0) {
    return [];
  }

  // Randomly select the requested number of sentences
  const result: Sentence[] = [];
  const availableSentences = [...filtered];
  const actualCount = Math.min(count, availableSentences.length);

  for (let i = 0; i < actualCount; i++) {
    const randomIndex = Math.floor(Math.random() * availableSentences.length);
    result.push(availableSentences[randomIndex]);
    availableSentences.splice(randomIndex, 1);
  }

  return result;
}
