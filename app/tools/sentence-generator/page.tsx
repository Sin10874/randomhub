import Navbar from '@/app/components/Navbar';
import SentenceGeneratorPanel from '@/app/components/SentenceGeneratorPanel';

export default function SentenceGeneratorPage() {
  const siteUrl = "https://randomhub.io";
  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'RandomHub - Random Sentence Generator',
    url: `${siteUrl}/tools/sentence-generator`,
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description: 'Generate random sentences with customizable filters for type and topic. Free forever, no registration required.',
    browserRequirements: 'Requires JavaScript',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.7',
      ratingCount: '850',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is a random sentence generator?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A random sentence generator is a tool that creates random, grammatically correct sentences. Our generator allows you to filter by sentence type (declarative, interrogative, exclamatory, imperative) and topic (nature, science, education, daily life, technology, sports, travel, entertainment).',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I use random sentences?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Random sentences are perfect for creative writing prompts, overcoming writer\'s block, language learning exercises, brainstorming sessions, teaching examples, and content inspiration. They help spark creativity and provide starting points for various projects.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I choose the type of sentence?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! You can filter by four sentence types: Declarative (statements), Interrogative (questions), Exclamatory (exclamations), and Imperative (commands). You can also filter by eight different topics to match your needs.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is the sentence generator really free?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely! RandomHub\'s sentence generator is completely free with no hidden costs, registrations, or subscriptions. Generate as many sentences as you need, whenever you need them.',
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
        {/* Sentence Generator Panel */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <SentenceGeneratorPanel />
        </div>

        {/* SEO Content Section */}
        <div className="max-w-4xl mx-auto mb-12 sm:mb-16 space-y-8">
          {/* What is Random Sentence Generator */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
              What is a Random Sentence Generator?
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
              A <strong>random sentence generator</strong> is a creative tool that produces grammatically correct, contextually meaningful sentences at the click of a button. Our sentence generator goes beyond simple randomization by allowing you to filter results by sentence type and topic, making it perfect for writers, educators, students, and creative professionals.
            </p>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Whether you need declarative statements, thought-provoking questions, enthusiastic exclamations, or commanding imperatives, our tool delivers diverse sentences across eight different topics including nature, science, education, daily life, technology, sports, travel, and entertainment.
            </p>
          </div>

          {/* Use Cases */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
              How to Use Random Sentences
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-4 border border-purple-100">
                <h3 className="font-semibold text-gray-800 mb-2">✍️ Creative Writing</h3>
                <p className="text-sm text-gray-600">Use random sentences as writing prompts to overcome writer&apos;s block and spark new story ideas.</p>
              </div>
              <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-4 border border-pink-100">
                <h3 className="font-semibold text-gray-800 mb-2">📚 Language Learning</h3>
                <p className="text-sm text-gray-600">Practice reading comprehension, grammar analysis, and translation with diverse sentence structures.</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-4 border border-blue-100">
                <h3 className="font-semibold text-gray-800 mb-2">🎓 Teaching Examples</h3>
                <p className="text-sm text-gray-600">Generate sentences for grammar lessons, punctuation exercises, and sentence structure demonstrations.</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 border border-green-100">
                <h3 className="font-semibold text-gray-800 mb-2">💡 Brainstorming</h3>
                <p className="text-sm text-gray-600">Use random sentences to trigger creative thinking and generate new ideas for projects.</p>
              </div>
              <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl p-4 border border-violet-100">
                <h3 className="font-semibold text-gray-800 mb-2">🎯 Content Creation</h3>
                <p className="text-sm text-gray-600">Find inspiration for social media posts, blog topics, and creative content ideas.</p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-4 border border-orange-100">
                <h3 className="font-semibold text-gray-800 mb-2">🎮 Game Development</h3>
                <p className="text-sm text-gray-600">Generate dialogue options, quest descriptions, and NPC conversations for games.</p>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
              Key Features
            </h2>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <span className="text-2xl flex-shrink-0">🎯</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1 text-lg">Filter by Sentence Type</h3>
                  <p className="text-gray-600">Choose from declarative, interrogative, exclamatory, or imperative sentences to match your specific needs.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-2xl flex-shrink-0">📑</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1 text-lg">Filter by Topic</h3>
                  <p className="text-gray-600">Select from eight topics including nature, science, education, daily life, technology, sports, travel, and entertainment.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-2xl flex-shrink-0">🔢</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1 text-lg">Generate Multiple Sentences</h3>
                  <p className="text-gray-600">Create 1-10 sentences at once for batch generation and maximum efficiency.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-2xl flex-shrink-0">📋</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1 text-lg">Easy Copy Functions</h3>
                  <p className="text-gray-600">Copy individual sentences or all generated sentences at once with one click.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-2xl flex-shrink-0">⚡</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1 text-lg">Instant Generation</h3>
                  <p className="text-gray-600">No waiting, no ads, no registration. Just instant sentence generation whenever you need it.</p>
                </div>
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
                <h3 className="font-semibold text-gray-800 mb-2 text-lg">What is a random sentence generator?</h3>
                <p className="text-gray-600">A random sentence generator is a tool that creates random, grammatically correct sentences. Our generator allows you to filter by sentence type (declarative, interrogative, exclamatory, imperative) and topic (nature, science, education, daily life, technology, sports, travel, entertainment).</p>
              </div>
              <div className="border-t border-gray-200 pt-5">
                <h3 className="font-semibold text-gray-800 mb-2 text-lg">How can I use random sentences?</h3>
                <p className="text-gray-600">Random sentences are perfect for creative writing prompts, overcoming writer&apos;s block, language learning exercises, brainstorming sessions, teaching examples, and content inspiration. They help spark creativity and provide starting points for various projects.</p>
              </div>
              <div className="border-t border-gray-200 pt-5">
                <h3 className="font-semibold text-gray-800 mb-2 text-lg">Can I choose the type of sentence?</h3>
                <p className="text-gray-600">Yes! You can filter by four sentence types: Declarative (statements), Interrogative (questions), Exclamatory (exclamations), and Imperative (commands). You can also filter by eight different topics to match your needs.</p>
              </div>
              <div className="border-t border-gray-200 pt-5">
                <h3 className="font-semibold text-gray-800 mb-2 text-lg">Is the sentence generator really free?</h3>
                <p className="text-gray-600">Absolutely! RandomHub&apos;s sentence generator is completely free with no hidden costs, registrations, or subscriptions. Generate as many sentences as you need, whenever you need them.</p>
              </div>
              <div className="border-t border-gray-200 pt-5">
                <h3 className="font-semibold text-gray-800 mb-2 text-lg">Can I copy the generated sentences?</h3>
                <p className="text-gray-600">Yes! You can copy individual sentences by hovering over them and clicking the copy button, or copy all generated sentences at once using the &quot;Copy All&quot; button.</p>
              </div>
              <div className="border-t border-gray-200 pt-5">
                <h3 className="font-semibold text-gray-800 mb-2 text-lg">What are the different sentence types?</h3>
                <p className="text-gray-600">The four sentence types are: Declarative (makes a statement), Interrogative (asks a question), Exclamatory (expresses strong emotion), and Imperative (gives a command or instruction).</p>
              </div>
            </div>
          </div>

          {/* Why Choose */}
          <div className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-2xl p-6 sm:p-8 shadow-lg border-2 border-orange-100">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
              Why Choose Our Sentence Generator?
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Unlike basic random sentence generators, our tool provides <strong>intelligent filtering</strong> and <strong>categorization</strong>. Every sentence is carefully crafted and categorized by type and topic, ensuring you get relevant, high-quality results. Whether you&apos;re a writer seeking inspiration, a teacher creating examples, or a student practicing grammar, our sentence generator delivers exactly what you need. <span className="text-orange-600 font-semibold">Free forever, no limits, no hassle.</span>
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
