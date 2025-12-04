// Common words frequently appearing in song titles and lyrics
// Perfect for Song Association Game and songwriting inspiration

export const songWords = [
  // Love & Emotions
  "love", "heart", "baby", "soul", "feel", "dream", "cry", "smile", "hope", "pain",
  "tears", "kiss", "miss", "lonely", "happy", "sad", "crazy", "wild", "sweet", "beautiful",

  // Time & Life
  "time", "day", "night", "life", "forever", "never", "yesterday", "tomorrow", "tonight", "morning",
  "summer", "winter", "spring", "fall", "year", "moment", "always", "young", "old", "memory",

  // Places & Movement
  "home", "away", "road", "town", "city", "world", "heaven", "hell", "dance", "run",
  "fly", "walk", "move", "stay", "go", "come", "leave", "return", "follow", "lost",

  // People & Relationships
  "girl", "boy", "man", "woman", "friend", "lover", "angel", "devil", "stranger", "hero",
  "king", "queen", "prince", "princess", "mama", "papa", "brother", "sister", "child", "family",

  // Nature & Elements
  "fire", "water", "rain", "sun", "moon", "star", "sky", "ocean", "river", "sea",
  "wind", "storm", "light", "dark", "shadow", "flower", "rose", "tree", "mountain", "earth",

  // Colors
  "red", "blue", "black", "white", "gold", "silver", "green", "yellow", "purple", "pink",

  // Actions & Verbs
  "sing", "play", "hold", "touch", "break", "fall", "rise", "fight", "live", "die",
  "believe", "know", "want", "need", "take", "give", "lose", "find", "save", "wait",

  // Music & Sound
  "song", "music", "sound", "voice", "silence", "whisper", "scream", "melody", "rhythm", "beat",

  // Abstract Concepts
  "dream", "truth", "lie", "fate", "destiny", "freedom", "power", "magic", "grace", "glory",
  "faith", "doubt", "promise", "prayer", "wish", "secret", "story", "tale", "legend", "ghost",

  // Body Parts
  "eyes", "hand", "arms", "lips", "face", "blood", "bones", "skin", "mind", "spirit",

  // Intensifiers & Modifiers
  "all", "nothing", "everything", "something", "more", "less", "first", "last", "only", "every",
  "little", "big", "long", "short", "high", "low", "deep", "wide", "strong", "weak",

  // Common Song Words
  "yeah", "oh", "baby", "hey", "way", "mine", "yours", "ours", "together", "alone",
  "around", "through", "between", "under", "over", "across", "beyond", "against", "without", "within"
];

// Get random words from the list
export function getRandomSongWords(count: number = 1): string[] {
  const shuffled = [...songWords].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, songWords.length));
}

// Get a single random word
export function getRandomSongWord(): string {
  return songWords[Math.floor(Math.random() * songWords.length)];
}

export default songWords;
