'use client';

import Navbar from '@/app/components/Navbar';
import JobGeneratorPanel from '@/app/components/JobGeneratorPanel';

export default function JobGeneratorPage() {
  const siteUrl = "https://randomhub.io";

  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Random Job Generator - 900+ Careers',
    url: `${siteUrl}/random-job-generator`,
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description: 'Comprehensive random job generator with 900+ careers across 20+ industry categories. Perfect for creative writing, character development, RPG games, story creation, and career exploration. Advanced filtering, bulk generation, instant copy.',
    browserRequirements: 'Requires JavaScript',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '1250',
    },
    featureList: [
      '900+ diverse jobs and careers',
      'Filter by 20+ industry categories',
      'Generate 1-20 jobs instantly',
      'One-click copy to clipboard',
      'No registration required',
      'Completely free forever',
      'Updated career database',
      'Modern and classic professions',
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is a random job generator?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A random job generator is a tool that randomly selects careers and occupations from a comprehensive database. Our generator features 900+ jobs across 20+ categories including healthcare, technology, arts, business, entertainment, science, and many more industries.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I use the random job generator?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Random job generators are perfect for creative writing (character development), career exploration, role-playing games, educational purposes, icebreaker activities, and brainstorming sessions. Simply select a category and click generate.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I filter jobs by category?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! You can filter by over 20 categories including Business & Finance, Technology & IT, Healthcare & Medical, Education, Entertainment, Science & Research, and many more.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is the job generator free?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely! RandomHub\'s job generator is 100% free with no registration, no limits, and no hidden costs. Generate unlimited jobs whenever you need them.',
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
        name: 'Random Job Generator',
        item: `${siteUrl}/random-job-generator`,
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col job-page-bg">
      <style jsx global>{`
        .job-page-bg {
          background: linear-gradient(135deg, #DBEAFE 0%, #BFDBFE 25%, #93C5FD 50%, #60A5FA 75%, #3B82F6 100%);
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
        {/* Job Generator Panel */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <JobGeneratorPanel />
        </div>

        {/* SEO Content Section */}
        <div className="max-w-4xl mx-auto mb-12 sm:mb-16 space-y-8">
          {/* What is Random Job Generator */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
              What is a Random Job Generator?
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
              A <strong>random job generator</strong> is a comprehensive creative tool that randomly selects careers and occupations from an extensive database of professions. Our job generator features <strong>900+ diverse jobs</strong> spanning 20+ industry categories, making it the ultimate resource for writers, game developers, educators, career explorers, and creative professionals.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Whether you&apos;re developing characters for a novel, creating NPCs for a role-playing game, exploring career paths, building fictional worlds, or seeking creative inspiration, our tool provides instant access to everything from traditional careers like healthcare and education to cutting-edge tech roles, specialized sciences, unique arts professions, and even extraordinary occupations like astronauts, storm chasers, and cool hunters.
            </p>
          </div>

          {/* Use Cases */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
              How to Use the Random Job Generator
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-100">
                <h3 className="font-semibold text-gray-800 mb-2">✍️ Creative Writing</h3>
                <p className="text-sm text-gray-600">Generate realistic occupations for your characters to add depth and authenticity to your stories.</p>
              </div>
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-4 border border-indigo-100">
                <h3 className="font-semibold text-gray-800 mb-2">🎮 Game Development</h3>
                <p className="text-sm text-gray-600">Create diverse NPCs with varied careers for role-playing games, video games, and tabletop adventures.</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-100">
                <h3 className="font-semibold text-gray-800 mb-2">🎓 Career Exploration</h3>
                <p className="text-sm text-gray-600">Discover careers you may never have considered and explore diverse professional paths.</p>
              </div>
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-4 border border-cyan-100">
                <h3 className="font-semibold text-gray-800 mb-2">👥 Icebreakers</h3>
                <p className="text-sm text-gray-600">Use random jobs for fun group activities, team building, and conversation starters.</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-sky-50 rounded-xl p-4 border border-blue-100">
                <h3 className="font-semibold text-gray-800 mb-2">🏫 Education</h3>
                <p className="text-sm text-gray-600">Teachers can use this for vocabulary lessons, career education, and creative writing prompts.</p>
              </div>
              <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl p-4 border border-violet-100">
                <h3 className="font-semibold text-gray-800 mb-2">💭 Brainstorming</h3>
                <p className="text-sm text-gray-600">Spark new ideas for projects, storylines, or creative content by exploring random professions.</p>
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
                <span className="text-2xl flex-shrink-0">💼</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1 text-lg">900+ Diverse Jobs</h3>
                  <p className="text-gray-600">Comprehensive database covering everything from common careers to specialized professions across all industries.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-2xl flex-shrink-0">🎯</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1 text-lg">Category Filtering</h3>
                  <p className="text-gray-600">Filter by 20+ categories including Healthcare, Technology, Arts, Science, Business, and more.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-2xl flex-shrink-0">🔢</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1 text-lg">Bulk Generation</h3>
                  <p className="text-gray-600">Generate up to 20 jobs at once for character creation, brainstorming, or large projects.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-2xl flex-shrink-0">📋</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1 text-lg">Easy Copy Function</h3>
                  <p className="text-gray-600">Copy all generated jobs to clipboard with a single click for use in your projects.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-2xl flex-shrink-0">⚡</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1 text-lg">Instant Results</h3>
                  <p className="text-gray-600">No waiting, no ads, no registration - just instant job generation whenever you need it.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Job Categories */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
              Available Job Categories
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="bg-blue-50 rounded-lg p-3 text-center border border-blue-100">
                <p className="text-sm font-medium text-gray-700">Business & Finance</p>
              </div>
              <div className="bg-indigo-50 rounded-lg p-3 text-center border border-indigo-100">
                <p className="text-sm font-medium text-gray-700">Technology & IT</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-3 text-center border border-purple-100">
                <p className="text-sm font-medium text-gray-700">Healthcare & Medical</p>
              </div>
              <div className="bg-pink-50 rounded-lg p-3 text-center border border-pink-100">
                <p className="text-sm font-medium text-gray-700">Education</p>
              </div>
              <div className="bg-rose-50 rounded-lg p-3 text-center border border-rose-100">
                <p className="text-sm font-medium text-gray-700">Law & Legal</p>
              </div>
              <div className="bg-cyan-50 rounded-lg p-3 text-center border border-cyan-100">
                <p className="text-sm font-medium text-gray-700">Entertainment</p>
              </div>
              <div className="bg-sky-50 rounded-lg p-3 text-center border border-sky-100">
                <p className="text-sm font-medium text-gray-700">Science & Research</p>
              </div>
              <div className="bg-teal-50 rounded-lg p-3 text-center border border-teal-100">
                <p className="text-sm font-medium text-gray-700">Arts & Design</p>
              </div>
              <div className="bg-emerald-50 rounded-lg p-3 text-center border border-emerald-100">
                <p className="text-sm font-medium text-gray-700">Public Safety</p>
              </div>
              <div className="bg-lime-50 rounded-lg p-3 text-center border border-lime-100">
                <p className="text-sm font-medium text-gray-700">Transportation</p>
              </div>
              <div className="bg-amber-50 rounded-lg p-3 text-center border border-amber-100">
                <p className="text-sm font-medium text-gray-700">Sports & Fitness</p>
              </div>
              <div className="bg-orange-50 rounded-lg p-3 text-center border border-orange-100">
                <p className="text-sm font-medium text-gray-700">Skilled Trades</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-4 text-center">...and many more!</p>
          </div>

          {/* FAQ */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-5">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2 text-lg">What is a random job generator?</h3>
                <p className="text-gray-600">A random job generator is a tool that randomly selects careers and occupations from a comprehensive database. Our generator includes 900+ jobs across 20+ categories including healthcare, technology, arts, business, and more.</p>
              </div>
              <div className="border-t border-gray-200 pt-5">
                <h3 className="font-semibold text-gray-800 mb-2 text-lg">How can I use the random job generator?</h3>
                <p className="text-gray-600">Random job generators are perfect for creative writing (character development), career exploration, role-playing games, educational purposes, icebreaker activities, and brainstorming sessions. Simply select a category and click generate.</p>
              </div>
              <div className="border-t border-gray-200 pt-5">
                <h3 className="font-semibold text-gray-800 mb-2 text-lg">Can I filter jobs by category?</h3>
                <p className="text-gray-600">Yes! You can filter by over 20 categories including Business & Finance, Technology & IT, Healthcare & Medical, Education, Entertainment, Science & Research, and many more. You can also select &quot;All Categories&quot; for maximum variety.</p>
              </div>
              <div className="border-t border-gray-200 pt-5">
                <h3 className="font-semibold text-gray-800 mb-2 text-lg">Is the job generator really free?</h3>
                <p className="text-gray-600">Absolutely! RandomHub&apos;s job generator is 100% free with no registration, no limits, and no hidden costs. Generate unlimited jobs whenever you need them.</p>
              </div>
              <div className="border-t border-gray-200 pt-5">
                <h3 className="font-semibold text-gray-800 mb-2 text-lg">How many jobs can I generate at once?</h3>
                <p className="text-gray-600">You can generate between 1 and 20 jobs at a time. This is perfect for creating multiple characters, exploring various career options, or conducting classroom activities.</p>
              </div>
              <div className="border-t border-gray-200 pt-5">
                <h3 className="font-semibold text-gray-800 mb-2 text-lg">Can I copy the generated jobs?</h3>
                <p className="text-gray-600">Yes! Click the &quot;Copy&quot; button to copy all generated jobs to your clipboard at once. They&apos;ll be formatted with one job per line for easy pasting into your projects.</p>
              </div>
            </div>
          </div>

          {/* Why Choose */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 sm:p-8 shadow-lg border-2 border-blue-100">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
              Why Choose Our Job Generator?
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Unlike basic job lists, our <strong>random job generator</strong> combines a comprehensive database of 300+ careers with intelligent category filtering. Whether you&apos;re a novelist crafting realistic characters, a game master creating NPCs, a teacher developing curriculum, or simply exploring career possibilities, our tool delivers diverse, realistic results instantly. <span className="text-blue-600 font-semibold">Free forever, unlimited generation, no registration required.</span>
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
