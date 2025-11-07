'use client';

import Navbar from '@/app/components/Navbar';
import AdjectiveGeneratorPanel from '@/app/components/AdjectiveGeneratorPanel';

export default function AdjectiveGeneratorPage() {
  const siteUrl = "https://randomhub.io";

  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Random Adjective Generator',
    url: `${siteUrl}/random-adjective-generator`,
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description: 'Free random adjective generator with 1300+ descriptive words. Advanced filters for syllables, letters, and starting/ending characters.',
    browserRequirements: 'Requires JavaScript',
    screenshot: `${siteUrl}/screenshots/adjective-generator.png`,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '856',
    },
    featureList: [
      '1300+ curated adjectives',
      'Filter by starting/ending letters',
      'Filter by syllable count',
      'Filter by letter length',
      'Bulk generation up to 50 words',
      'One-click copy to clipboard',
      'No registration required',
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How many adjectives can I generate at once?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can generate between 1 and 50 adjectives at once. The default is 1, and you can adjust this number to suit your needs.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is the adjective generator really free?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely! No registration, no hidden fees, no limits. Generate unlimited adjectives completely free forever.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I filter adjectives by specific criteria?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! You can filter by starting letter, ending letter, number of syllables, or number of letters with equal to, greater than, or less than comparisons.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I use these adjectives commercially?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! All generated adjectives are common English words free to use in any project - books, marketing materials, games, educational content, or personal use.',
        },
      },
    ],
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Random Adjective Generator',
        item: `${siteUrl}/random-adjective-generator`,
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col adjective-page-bg">
      <style jsx global>{`
        .adjective-page-bg {
          background: linear-gradient(135deg, #D1FAE5 0%, #A7F3D0 25%, #6EE7B7 50%, #34D399 75%, #10B981 100%);
          background-size: 400% 400%;
          animation: gradient 15s ease infinite;
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 lg:py-12">
        {/* Adjective Generator Panel */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <AdjectiveGeneratorPanel />
        </div>

        {/* SEO Content Section */}
        <div className="max-w-4xl mx-auto mb-12 sm:mb-16 space-y-8">
          {/* What is Random Adjective Generator */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
              What is Random Adjective Generator?
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
              <strong>Random Adjective Generator</strong> is a powerful, free online tool that instantly generates descriptive adjectives from a carefully curated database of over 1,300 English words. Whether you&apos;re a writer seeking vivid descriptions, a marketer crafting compelling copy, a teacher creating vocabulary exercises, or a student expanding your language skills, this adjective finder tool delivers the perfect descriptive words for your needs.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Our advanced filtering system allows you to narrow down results by <strong>starting letter</strong>, <strong>ending letter</strong>, <strong>syllable count</strong>, or <strong>letter length</strong>—giving you precise control over the adjectives you generate. With support for bulk generation (up to 50 words at once) and one-click copying, it&apos;s the most efficient adjective generator available online.
            </p>
          </div>

          {/* Who is it for */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
              Who is Random Adjective Generator for?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex gap-3">
                <span className="text-2xl">✍️</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Writers & Authors</h3>
                  <p className="text-sm text-gray-600">Find vivid adjectives to enrich descriptions and avoid repetitive language</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl">📚</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Teachers & Educators</h3>
                  <p className="text-sm text-gray-600">Create vocabulary quizzes, writing prompts, and grammar exercises</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl">🎓</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Students & Learners</h3>
                  <p className="text-sm text-gray-600">Expand vocabulary and practice descriptive writing skills</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl">💡</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Content Creators</h3>
                  <p className="text-sm text-gray-600">Generate engaging adjectives for marketing copy and social media</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl">🎨</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Designers & Creatives</h3>
                  <p className="text-sm text-gray-600">Find inspiration for brand names, taglines, and creative projects</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl">🎭</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Game Developers</h3>
                  <p className="text-sm text-gray-600">Create character traits, item descriptions, and game lore</p>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
              Why Choose Our Adjective Generator?
            </h2>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <span className="text-2xl flex-shrink-0">📖</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1 text-lg">1,300+ Quality Adjectives</h3>
                  <p className="text-gray-600">Carefully curated database of descriptive, qualitative, and quantitative adjectives</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-2xl flex-shrink-0">🎯</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1 text-lg">Advanced Filtering</h3>
                  <p className="text-gray-600">Filter by starting letter, ending letter, syllable count, or letter length for precise results</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-2xl flex-shrink-0">⚡</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1 text-lg">Bulk Generation</h3>
                  <p className="text-gray-600">Generate up to 50 adjectives at once - perfect for large projects and brainstorming sessions</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-2xl flex-shrink-0">🔄</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1 text-lg">One-Click Copy</h3>
                  <p className="text-gray-600">Instantly copy results to clipboard - single adjective or entire list</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-2xl flex-shrink-0">🎁</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1 text-lg">100% Free</h3>
                  <p className="text-gray-600">No registration, no limits, no cost. Generate unlimited adjectives forever</p>
                </div>
              </div>
            </div>
          </div>

          {/* How to Use */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
              How to Use Random Adjective Generator
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1 text-lg">Set Your Preferences</h3>
                  <p className="text-gray-600">Choose how many adjectives to generate (1-50). Optionally set filters for starting letter, ending letter, or word length.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1 text-lg">Generate Adjectives</h3>
                  <p className="text-gray-600">Click the generate button or press Enter to instantly get random adjectives matching your criteria.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1 text-lg">Copy & Use</h3>
                  <p className="text-gray-600">Copy all adjectives at once or regenerate for new options. Use them in your writing, projects, or learning materials.</p>
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
              <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-4 border border-emerald-100">
                <h3 className="font-semibold text-gray-800 mb-2">📝 Creative Writing</h3>
                <p className="text-sm text-gray-600">Enhance descriptions, avoid repetitive words, and find the perfect modifier for any noun.</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-4 border border-green-100">
                <h3 className="font-semibold text-gray-800 mb-2">🎓 Vocabulary Building</h3>
                <p className="text-sm text-gray-600">Discover new adjectives to expand your vocabulary and improve language skills.</p>
              </div>
              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-4 border border-teal-100">
                <h3 className="font-semibold text-gray-800 mb-2">🏫 Teaching Materials</h3>
                <p className="text-sm text-gray-600">Create worksheets, flashcards, and grammar exercises for ESL and language classes.</p>
              </div>
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-4 border border-cyan-100">
                <h3 className="font-semibold text-gray-800 mb-2">💼 Marketing Copy</h3>
                <p className="text-sm text-gray-600">Find powerful adjectives for product descriptions, ads, and compelling content.</p>
              </div>
              <div className="bg-gradient-to-br from-lime-50 to-green-50 rounded-xl p-4 border border-lime-100">
                <h3 className="font-semibold text-gray-800 mb-2">🎮 Game Development</h3>
                <p className="text-sm text-gray-600">Generate descriptive words for character traits, items, and world-building.</p>
              </div>
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-4 border border-emerald-100">
                <h3 className="font-semibold text-gray-800 mb-2">✏️ Writing Prompts</h3>
                <p className="text-sm text-gray-600">Use random adjectives as creative prompts to spark story ideas and overcome writer&apos;s block.</p>
              </div>
            </div>
          </div>

          {/* What are Adjectives */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
              What are Adjectives?
            </h2>
            <p className="text-gray-700 text-base leading-relaxed mb-4">
              Adjectives are words that describe or modify nouns and pronouns, providing additional information about their qualities, quantities, or states. They answer questions like &quot;What kind?&quot;, &quot;How many?&quot;, or &quot;Which one?&quot;
            </p>
            <div className="space-y-3">
              <div className="bg-emerald-50/50 rounded-lg p-4 border border-emerald-100">
                <h3 className="font-semibold text-gray-800 mb-2">Descriptive Adjectives</h3>
                <p className="text-sm text-gray-600">Describe qualities or characteristics: <em>beautiful, tall, ancient, sleek, mysterious</em></p>
              </div>
              <div className="bg-green-50/50 rounded-lg p-4 border border-green-100">
                <h3 className="font-semibold text-gray-800 mb-2">Quantitative Adjectives</h3>
                <p className="text-sm text-gray-600">Express quantity or amount: <em>few, many, several, numerous, countless</em></p>
              </div>
              <div className="bg-teal-50/50 rounded-lg p-4 border border-teal-100">
                <h3 className="font-semibold text-gray-800 mb-2">Demonstrative Adjectives</h3>
                <p className="text-sm text-gray-600">Point to specific things: <em>this, that, these, those</em></p>
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
                <h3 className="font-semibold text-gray-800 mb-2 text-lg">How many adjectives can I generate?</h3>
                <p className="text-gray-600">You can generate between 1 and 50 adjectives at once. The default is 1, and you can adjust this number to suit your needs.</p>
              </div>
              <div className="border-t border-gray-200 pt-5">
                <h3 className="font-semibold text-gray-800 mb-2 text-lg">Can I filter adjectives by specific criteria?</h3>
                <p className="text-gray-600">Yes! You can filter by starting letter, ending letter, number of syllables, or number of letters with equal to, greater than, or less than comparisons.</p>
              </div>
              <div className="border-t border-gray-200 pt-5">
                <h3 className="font-semibold text-gray-800 mb-2 text-lg">Is the adjective generator really free?</h3>
                <p className="text-gray-600">Absolutely! No registration, no hidden fees, no limits. Generate unlimited adjectives completely free.</p>
              </div>
              <div className="border-t border-gray-200 pt-5">
                <h3 className="font-semibold text-gray-800 mb-2 text-lg">Can I use these adjectives commercially?</h3>
                <p className="text-gray-600">Yes! All generated adjectives are common English words free to use in any project - books, marketing, games, education, or personal use.</p>
              </div>
              <div className="border-t border-gray-200 pt-5">
                <h3 className="font-semibold text-gray-800 mb-2 text-lg">What types of adjectives are included?</h3>
                <p className="text-gray-600">Our database includes 1,300+ adjectives covering descriptive (beautiful, tall), quantitative (many, few), and various other categories to suit different writing needs.</p>
              </div>
              <div className="border-t border-gray-200 pt-5">
                <h3 className="font-semibold text-gray-800 mb-2 text-lg">How do I copy the generated adjectives?</h3>
                <p className="text-gray-600">Click the &quot;Copy&quot; button to copy all generated adjectives to your clipboard at once. They&apos;ll be formatted with one adjective per line.</p>
              </div>
              <div className="border-t border-gray-200 pt-5">
                <h3 className="font-semibold text-gray-800 mb-2 text-lg">Can I regenerate if I don&apos;t like the results?</h3>
                <p className="text-gray-600">Of course! Click &quot;Regenerate&quot; or press Enter to get a new set of random adjectives with the same filters.</p>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-6 sm:p-8 shadow-lg border-2 border-emerald-100">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
              Why Use Our Random Adjective Generator?
            </h2>
            <p className="text-gray-700 text-base leading-relaxed mb-4">
              Finding the right adjective can transform ordinary writing into extraordinary content. Our <strong>adjective generator tool</strong> helps you discover the perfect descriptive words instantly, saving time and sparking creativity. Unlike traditional thesauruses, our tool offers:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span><strong>True randomization</strong> for unexpected word discoveries that break writer&apos;s block</span>
              </li>
              <li className="flex gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span><strong>Advanced filters</strong> to match specific writing requirements and constraints</span>
              </li>
              <li className="flex gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span><strong>Educational value</strong> for ESL students and vocabulary learners</span>
              </li>
              <li className="flex gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span><strong>No distractions</strong> - clean interface with no ads or popups</span>
              </li>
              <li className="flex gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span><strong>Mobile-friendly</strong> design for on-the-go writing and learning</span>
              </li>
            </ul>
          </div>

          {/* Additional Tips */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
              Tips for Using Adjectives Effectively
            </h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-semibold text-lg mb-2">1. Use Specific Over Generic</h3>
                <p className="text-sm">Choose &quot;ancient&quot; instead of &quot;old&quot; or &quot;minuscule&quot; instead of &quot;small&quot; to create more vivid imagery.</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">2. Avoid Overuse</h3>
                <p className="text-sm">While adjectives add color, too many can slow your writing. Use our generator to find the perfect one or two adjectives rather than piling them on.</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">3. Match Tone and Context</h3>
                <p className="text-sm">Filter by syllable count to match formal writing (longer words) or casual content (shorter words).</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">4. Expand Your Vocabulary</h3>
                <p className="text-sm">Use this tool as a learning resource—look up unfamiliar adjectives to expand your linguistic repertoire.</p>
              </div>
            </div>
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
