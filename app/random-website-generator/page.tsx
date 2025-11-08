'use client';

import Navbar from '@/app/components/Navbar';
import WebsiteGeneratorPanel from '@/app/components/WebsiteGeneratorPanel';

export default function WebsiteGeneratorPage() {
  const siteUrl = "https://randomhub.io";

  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Random Website Generator',
    url: `${siteUrl}/random-website-generator`,
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description: 'Click GO to instantly visit random websites! Explore 300+ hand-picked sites including fun games, creative tools, learning resources, and entertainment. Break your browsing routine with one simple click.',
    browserRequirements: 'Requires JavaScript',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '1240',
    },
    featureList: [
      'Instant random website discovery',
      '300+ hand-curated quality sites',
      'One-click web exploration',
      'Fun, creative, and educational content',
      'No registration or sign-up required',
      'Completely free forever',
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is a random website generator?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A random website generator is a web tool that takes you to a random website with one click. Our generator features 300+ hand-picked, quality websites across categories like games, creative tools, learning resources, entertainment, and more. It\'s perfect for discovering new corners of the internet and breaking your browsing routine.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does the random website generator work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Simply click the GO button and our generator will instantly open a random website in a new tab. Each click takes you to a different site from our curated collection of 300+ quality websites. It\'s that simple - one click, one surprise!',
        },
      },
      {
        '@type': 'Question',
        name: 'Is this like TheUselessWeb?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! Similar to TheUselessWeb, we help you discover random websites. However, our collection includes not just fun/useless sites, but also productive tools, creative resources, learning platforms, and entertainment - offering more variety and value with every click.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is the website generator really free?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely! RandomHub\'s website generator is completely free with no hidden costs, registrations, or subscriptions. Discover unlimited websites whenever you need them.',
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
        name: 'Random Website Generator',
        item: `${siteUrl}/random-website-generator`,
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col website-page-bg">
      <style jsx global>{`
        .website-page-bg {
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
        {/* Website Generator Panel */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <WebsiteGeneratorPanel />
        </div>

        {/* SEO Content Section */}
        <div className="max-w-4xl mx-auto mb-12 sm:mb-16 space-y-8">
          {/* What is Random Website Generator */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
              What is Random Website Generator?
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
              <strong>Random Website Generator</strong> is the simplest way to discover new websites - just click GO and explore! With one click, you&apos;ll be taken to a random website from our hand-curated collection of <strong>300+ quality sites</strong>. No filters, no choices, just pure serendipity.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Tired of visiting the same websites every day? Our generator breaks you out of your browsing bubble. Discover <strong>fun games</strong>, <strong>creative tools</strong>, <strong>mind-blowing art</strong>, <strong>learning resources</strong>, and <strong>entertaining content</strong> you never knew existed. It&apos;s like <strong>TheUselessWeb</strong> but with more variety - from silly to serious, useless to useful, every click is a surprise!
            </p>
          </div>

          {/* Why Use It */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
              Why Use Random Website Generator?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex gap-3">
                <span className="text-2xl">🌍</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Break Filter Bubbles</h3>
                  <p className="text-sm text-gray-600">Escape algorithmic recommendations and discover sites outside your usual browsing patterns</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl">💡</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Find Inspiration</h3>
                  <p className="text-sm text-gray-600">Discover creative resources, design inspiration, and innovative tools</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl">📚</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Learn Something New</h3>
                  <p className="text-sm text-gray-600">Find educational sites, tutorials, and knowledge resources</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl">⚡</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Boost Productivity</h3>
                  <p className="text-sm text-gray-600">Discover tools and apps that can improve your workflow</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl">🎨</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Creative Exploration</h3>
                  <p className="text-sm text-gray-600">Browse art, design, and creative communities</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl">🎮</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Fun & Entertainment</h3>
                  <p className="text-sm text-gray-600">Find games, comics, and entertaining content</p>
                </div>
              </div>
            </div>
          </div>

          {/* How to Use */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
              How to Use Random Website Generator
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1 text-lg">Click the GO Button</h3>
                  <p className="text-gray-600">That&apos;s it! Just click the big green GO button at the top of the page. No settings, no filters, no choices to make.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1 text-lg">Discover Something New</h3>
                  <p className="text-gray-600">A random website from our curated collection will instantly open in a new tab. Every click is a surprise!</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1 text-lg">Click Again for More</h3>
                  <p className="text-gray-600">Want another random site? Just click GO again. Explore endlessly - there are 300+ websites waiting to be discovered!</p>
                </div>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
              Website Categories
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-100">
                <h3 className="font-semibold text-gray-800 mb-2">⚡ Productivity</h3>
                <p className="text-sm text-gray-600">Task managers, note-taking apps, and workflow tools to boost efficiency.</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-100">
                <h3 className="font-semibold text-gray-800 mb-2">🎨 Creative</h3>
                <p className="text-sm text-gray-600">Photos, videos, art communities, and creative resources.</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 border border-green-100">
                <h3 className="font-semibold text-gray-800 mb-2">📚 Learning</h3>
                <p className="text-sm text-gray-600">Educational platforms, courses, and knowledge resources.</p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-4 border border-orange-100">
                <h3 className="font-semibold text-gray-800 mb-2">🎮 Entertainment</h3>
                <p className="text-sm text-gray-600">Games, comics, videos, and fun content.</p>
              </div>
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-4 border border-cyan-100">
                <h3 className="font-semibold text-gray-800 mb-2">🛠️ Tools</h3>
                <p className="text-sm text-gray-600">Utilities, converters, and helpful web applications.</p>
              </div>
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-4 border border-indigo-100">
                <h3 className="font-semibold text-gray-800 mb-2">💻 Tech</h3>
                <p className="text-sm text-gray-600">Development platforms, tech news, and programming resources.</p>
              </div>
              <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-4 border border-pink-100">
                <h3 className="font-semibold text-gray-800 mb-2">🎭 Design</h3>
                <p className="text-sm text-gray-600">Design inspiration, portfolios, and creative showcases.</p>
              </div>
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-4 border border-yellow-100">
                <h3 className="font-semibold text-gray-800 mb-2">✨ Random & Fun</h3>
                <p className="text-sm text-gray-600">Quirky, unusual, and entertaining websites.</p>
              </div>
            </div>
          </div>

          {/* Use Cases */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
              Popular Use Cases
            </h2>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <span className="text-2xl flex-shrink-0">🔍</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1 text-lg">Research & Discovery</h3>
                  <p className="text-gray-600">Find new resources, tools, and platforms for your projects and research.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-2xl flex-shrink-0">😴</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1 text-lg">Beat Boredom</h3>
                  <p className="text-gray-600">When you&apos;re tired of visiting the same sites, discover something new and interesting.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-2xl flex-shrink-0">💼</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1 text-lg">Professional Development</h3>
                  <p className="text-gray-600">Discover tools, learning platforms, and resources to advance your career.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-2xl flex-shrink-0">🎯</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1 text-lg">Project Inspiration</h3>
                  <p className="text-gray-600">Find design inspiration, creative ideas, and innovative approaches for your projects.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-2xl flex-shrink-0">🌐</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1 text-lg">Internet Exploration</h3>
                  <p className="text-gray-600">Rediscover the joy of exploring the internet without algorithms guiding every click.</p>
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
                <h3 className="font-semibold text-gray-800 mb-2 text-lg">What is a random website generator?</h3>
                <p className="text-gray-600">A random website generator is a tool that selects and recommends websites from a curated database. Our generator includes 300+ quality websites across categories like productivity, creative, learning, entertainment, tools, and more.</p>
              </div>
              <div className="border-t border-gray-200 pt-5">
                <h3 className="font-semibold text-gray-800 mb-2 text-lg">How many websites can I discover at once?</h3>
                <p className="text-gray-600">You can generate between 1 and 10 random websites at once. The generator ensures you get unique websites each time without duplicates.</p>
              </div>
              <div className="border-t border-gray-200 pt-5">
                <h3 className="font-semibold text-gray-800 mb-2 text-lg">Can I filter by category?</h3>
                <p className="text-gray-600">Yes! You can filter by categories including Productivity, Creative, Learning, Entertainment, Tools, News, Inspiration, Tech, Design, and Random & Fun.</p>
              </div>
              <div className="border-t border-gray-200 pt-5">
                <h3 className="font-semibold text-gray-800 mb-2 text-lg">Is the website generator really free?</h3>
                <p className="text-gray-600">Absolutely! RandomHub&apos;s website generator is completely free with no hidden costs, registrations, or subscriptions. Discover unlimited websites whenever you need them.</p>
              </div>
              <div className="border-t border-gray-200 pt-5">
                <h3 className="font-semibold text-gray-800 mb-2 text-lg">Are the websites safe to visit?</h3>
                <p className="text-gray-600">Yes! All websites in our database are carefully curated and verified. We only include reputable, safe, and useful websites.</p>
              </div>
              <div className="border-t border-gray-200 pt-5">
                <h3 className="font-semibold text-gray-800 mb-2 text-lg">Can I suggest websites to add?</h3>
                <p className="text-gray-600">We&apos;re always looking to expand our database with quality websites. Feel free to contact us with your suggestions!</p>
              </div>
              <div className="border-t border-gray-200 pt-5">
                <h3 className="font-semibold text-gray-800 mb-2 text-lg">How often is the website list updated?</h3>
                <p className="text-gray-600">We regularly review and update our website database to ensure all links are active and add new interesting sites to keep the discovery fresh.</p>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 sm:p-8 shadow-lg border-2 border-blue-100">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
              Why Choose Our Random Website Generator?
            </h2>
            <p className="text-gray-700 text-base leading-relaxed mb-4">
              Unlike other random website generators that might send you to low-quality or unsafe sites, our <strong>curated collection</strong> ensures every discovery is worthwhile. Each website in our database has been:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span><strong>Carefully vetted</strong> for quality, safety, and usefulness</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span><strong>Categorized accurately</strong> so you can filter by your interests</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span><strong>Verified active</strong> to ensure working links</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span><strong>Diverse and interesting</strong> covering productivity, learning, creativity, and entertainment</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span><strong>Free to access</strong> with no ads, tracking, or registration required</span>
              </li>
            </ul>
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
