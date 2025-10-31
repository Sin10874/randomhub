import Navbar from './components/Navbar';
import WordGeneratorPanel from './components/WordGeneratorPanel';
import PopularTools from './components/PopularTools';

export const metadata = {
  title: "RandomHub - Free Random Word Generator & Random Tools",
  description: "Generate random English words, names, cities and more with RandomHub. Free forever! Customize filters including word type, letter constraints, syllables. Perfect for writers, teachers, and creative projects.",
};

export default function Home() {
  const siteUrl = "https://randomhub.io";
  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'RandomHub - Random Word Generator',
    url: siteUrl,
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description: 'Generate random English words, names, cities and more with RandomHub. Free forever! 5000+ words with custom filters.',
    browserRequirements: 'Requires JavaScript',
    screenshot: `${siteUrl}/screenshots/word-generator.png`,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '1250',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is RandomHub really free?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! RandomHub is completely free with no hidden costs, premium plans, or subscriptions. We believe creative tools should be accessible to everyone.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need to create an account?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "No registration required! Just visit the site and start generating. We respect your privacy and don't collect personal information.",
        },
      },
      {
        '@type': 'Question',
        name: 'How many words can I generate?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "There's no limit! Generate as many random words as you need, whenever you need them.",
        },
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 lg:py-12">
        {/* Word Generator Panel */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <WordGeneratorPanel />
        </div>

        {/* Trending Tools Section */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <PopularTools />
        </div>

        {/* SEO Content Section */}
        <div className="max-w-4xl mx-auto mb-12 sm:mb-16 space-y-8">
          {/* What is RandomHub */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
              What is RandomHub?
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              <strong>RandomHub</strong> is a free random generation tool platform designed to spark creativity and save time. Whether you need a random word for creative writing, a unique name for your game character, or inspiration for your next project, RandomHub delivers instant results with powerful customization options. No registration, no fees—just pure creative freedom.
            </p>
          </div>

          {/* Who is RandomHub for */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
              Who is RandomHub for?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex gap-3">
                <span className="text-2xl">✍️</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Writers & Creators</h3>
                  <p className="text-sm text-gray-600">Break through writer&apos;s block with random word prompts and inspiration</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl">📚</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Teachers & Educators</h3>
                  <p className="text-sm text-gray-600">Create engaging lesson materials, vocabulary cards, and classroom activities</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl">🎮</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Game Developers</h3>
                  <p className="text-sm text-gray-600">Generate character names, locations, and in-game content quickly</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl">🎨</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Designers</h3>
                  <p className="text-sm text-gray-600">Find random words to inspire brainstorming and creative thinking</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl">🎲</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Word Game Players</h3>
                  <p className="text-sm text-gray-600">Get random words for Scrabble practice, crosswords, and word games</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl">💡</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Students</h3>
                  <p className="text-sm text-gray-600">Enhance vocabulary learning and creative writing exercises</p>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose RandomHub */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
              Why Choose RandomHub?
            </h2>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <span className="text-2xl flex-shrink-0">🎁</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1 text-lg">Forever Free</h3>
                  <p className="text-gray-600">No hidden costs, no premium tiers, no subscriptions. RandomHub is 100% free and always will be.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-2xl flex-shrink-0">⚡</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1 text-lg">Instant & Private</h3>
                  <p className="text-gray-600">No registration or login required. Your privacy matters—we don&apos;t collect personal data.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-2xl flex-shrink-0">🎯</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1 text-lg">Powerful Filters</h3>
                  <p className="text-gray-600">Customize by word type, starting/ending letters, syllables, and more for precise results.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-2xl flex-shrink-0">📱</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1 text-lg">Works Anywhere</h3>
                  <p className="text-gray-600">Fully responsive design works seamlessly on desktop, tablet, and mobile devices.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-2xl flex-shrink-0">🗄️</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1 text-lg">Rich Database</h3>
                  <p className="text-gray-600">5,000+ English words and growing, with names, cities, and more tools coming.</p>
                </div>
              </div>
            </div>
          </div>

          {/* How to Use */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
              How to Use RandomHub
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1 text-lg">Choose Your Tool</h3>
                  <p className="text-gray-600">Select from Word Generator, Name Generator, City Generator, or other random tools.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1 text-lg">Set Your Filters</h3>
                  <p className="text-gray-600">Customize options like word type, starting letter, length, or leave blank for pure randomness.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1 text-lg">Generate & Use</h3>
                  <p className="text-gray-600">Click generate, copy your results, and use them wherever you need. It&apos;s that simple!</p>
                </div>
              </div>
            </div>
          </div>

          {/* Popular Use Cases */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
              Popular Use Cases
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-4 border border-purple-100">
                <h3 className="font-semibold text-gray-800 mb-2">📝 Creative Writing Prompts</h3>
                <p className="text-sm text-gray-600">Generate random words to start your story, poem, or daily writing practice.</p>
              </div>
              <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-4 border border-pink-100">
                <h3 className="font-semibold text-gray-800 mb-2">🎓 Vocabulary Testing</h3>
                <p className="text-sm text-gray-600">Create flashcards and quizzes for TOEFL, SAT, or English language learning.</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-4 border border-blue-100">
                <h3 className="font-semibold text-gray-800 mb-2">🎯 Brainstorming Sessions</h3>
                <p className="text-sm text-gray-600">Use random words as creative triggers for marketing campaigns or product names.</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 border border-green-100">
                <h3 className="font-semibold text-gray-800 mb-2">🎮 Game Development</h3>
                <p className="text-sm text-gray-600">Generate character names, place names, and random items for your games.</p>
              </div>
              <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl p-4 border border-violet-100">
                <h3 className="font-semibold text-gray-800 mb-2">🏫 Classroom Activities</h3>
                <p className="text-sm text-gray-600">Create word association games, spelling bees, and interactive learning exercises.</p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-4 border border-orange-100">
                <h3 className="font-semibold text-gray-800 mb-2">✏️ Crossword Puzzles</h3>
                <p className="text-sm text-gray-600">Find words with specific letter patterns for puzzle creation.</p>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-5">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2 text-lg">Is RandomHub really free?</h3>
                <p className="text-gray-600">Yes! RandomHub is completely free with no hidden costs, premium plans, or subscriptions. We believe creative tools should be accessible to everyone.</p>
              </div>
              <div className="border-t border-gray-200 pt-5">
                <h3 className="font-semibold text-gray-800 mb-2 text-lg">Do I need to create an account?</h3>
                <p className="text-gray-600">No registration required! Just visit the site and start generating. We respect your privacy and don&apos;t collect personal information.</p>
              </div>
              <div className="border-t border-gray-200 pt-5">
                <h3 className="font-semibold text-gray-800 mb-2 text-lg">How many words can I generate?</h3>
                <p className="text-gray-600">There&apos;s no limit! Generate as many random words as you need, whenever you need them.</p>
              </div>
              <div className="border-t border-gray-200 pt-5">
                <h3 className="font-semibold text-gray-800 mb-2 text-lg">Where do the words come from?</h3>
                <p className="text-gray-600">Our database contains over 5,000 carefully curated English words including nouns, verbs, adjectives, and more. We continuously update and expand our word list.</p>
              </div>
              <div className="border-t border-gray-200 pt-5">
                <h3 className="font-semibold text-gray-800 mb-2 text-lg">Can I filter by word type?</h3>
                <p className="text-gray-600">Absolutely! Filter by nouns, verbs, adjectives, starting/ending letters, syllable count, and letter count for precise results.</p>
              </div>
              <div className="border-t border-gray-200 pt-5">
                <h3 className="font-semibold text-gray-800 mb-2 text-lg">Does it work on mobile devices?</h3>
                <p className="text-gray-600">Yes! RandomHub is fully responsive and works perfectly on smartphones, tablets, and desktop computers.</p>
              </div>
              <div className="border-t border-gray-200 pt-5">
                <h3 className="font-semibold text-gray-800 mb-2 text-lg">What other tools are available?</h3>
                <p className="text-gray-600">Beyond the Random Word Generator, we offer Random Name Generator and Random City Generator, with more tools coming soon!</p>
              </div>
            </div>
          </div>

          {/* Our Mission */}
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 sm:p-8 shadow-lg border-2 border-purple-100">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              We believe that <strong>creativity should be effortless</strong> and <strong>tools should be accessible</strong>. RandomHub is built on the principle that everyone deserves free access to quality random generation tools—whether for professional work, education, or pure fun. Our mission is to spark inspiration, save time, and make creativity accessible to all. <span className="text-purple-600 font-semibold">Forever free, forever simple, forever yours.</span>
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white/10 backdrop-blur-sm py-6 mt-auto border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/80 text-sm">
            © 2025 RandomHub
          </p>
        </div>
      </footer>
    </div>
  );
}
