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

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Website Generator Panel */}
        <div className="mb-16">
          <WebsiteGeneratorPanel />
        </div>

        {/* SEO Content Section */}
        <div className="max-w-4xl mx-auto mb-12 space-y-12">
          {/* What is Random Website Generator */}
          <div className="swiss-card p-6 sm:p-8 bg-white">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-6 flex items-center text-foreground">
              <span className="w-2 h-8 bg-accent mr-3"></span>
              What is Random Website Generator?
            </h2>
            <p className="text-zinc-600 text-base leading-relaxed font-sans mb-4">
              <strong>Random Website Generator</strong> is the simplest way to discover new websites - just click GO and explore! With one click, you&apos;ll be taken to a random website from our hand-curated collection of <strong>300+ quality sites</strong>. No filters, no choices, just pure serendipity.
            </p>
            <p className="text-zinc-600 text-base leading-relaxed font-sans">
              Tired of visiting the same websites every day? Our generator breaks you out of your browsing bubble. Discover <strong>fun games</strong>, <strong>creative tools</strong>, <strong>mind-blowing art</strong>, <strong>learning resources</strong>, and <strong>entertaining content</strong> you never knew existed. It&apos;s like <strong>TheUselessWeb</strong> but with more variety - from silly to serious, useless to useful, every click is a surprise!
            </p>
          </div>

          {/* Why Use It */}
          <div className="swiss-card p-6 sm:p-8 bg-white">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-8 flex items-center text-foreground">
              <span className="w-2 h-8 bg-accent mr-3"></span>
              Why Use Random Website Generator?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-grid border border-grid">
              {[
                { icon: "🌍", title: "Break Filter Bubbles", desc: "Escape algorithmic recommendations and discover sites outside your usual browsing patterns" },
                { icon: "💡", title: "Find Inspiration", desc: "Discover creative resources, design inspiration, and innovative tools" },
                { icon: "📚", title: "Learn Something New", desc: "Find educational sites, tutorials, and knowledge resources" },
                { icon: "⚡", title: "Boost Productivity", desc: "Discover tools and apps that can improve your workflow" },
                { icon: "🎨", title: "Creative Exploration", desc: "Browse art, design, and creative communities" },
                { icon: "🎮", title: "Fun & Entertainment", desc: "Find games, comics, and entertaining content" }
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 hover:bg-zinc-50 transition-colors">
                  <div className="flex gap-4">
                    <span className="text-2xl grayscale opacity-70">{item.icon}</span>
                    <div>
                      <h3 className="font-mono font-bold text-foreground mb-1 uppercase tracking-wider text-sm">{item.title}</h3>
                      <p className="text-sm text-zinc-500 font-sans">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* How to Use */}
          <div className="swiss-card p-6 sm:p-8 bg-white">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-8 flex items-center text-foreground">
              <span className="w-2 h-8 bg-accent mr-3"></span>
              How to Use Random Website Generator
            </h2>
            <div className="space-y-6">
              {[
                { step: "01", title: "Click the GO Button", desc: "That's it! Just click the big green GO button at the top of the page. No settings, no filters, no choices to make." },
                { step: "02", title: "Discover Something New", desc: "A random website from our curated collection will instantly open in a new tab. Every click is a surprise!" },
                { step: "03", title: "Click Again for More", desc: "Want another random site? Just click GO again. Explore endlessly - there are 300+ websites waiting to be discovered!" }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="text-accent font-mono font-bold text-xl flex-shrink-0 pt-1">{item.step}</div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1 text-lg">{item.title}</h3>
                    <p className="text-zinc-500 font-sans">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="swiss-card p-6 sm:p-8 bg-white">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-8 flex items-center text-foreground">
              <span className="w-2 h-8 bg-accent mr-3"></span>
              Website Categories
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                "Productivity", "Creative", "Learning", "Entertainment",
                "Tools", "Tech", "Design", "Random & Fun"
              ].map((cat, i) => (
                <div key={i} className="bg-zinc-50 rounded-none p-3 text-center border border-zinc-200">
                  <p className="text-sm font-medium text-foreground font-mono">{cat}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Popular Use Cases */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: "Research & Discovery", desc: "Find new resources, tools, and platforms for your projects and research." },
              { title: "Beat Boredom", desc: "When you're tired of visiting the same sites, discover something new and interesting." },
              { title: "Professional Development", desc: "Discover tools, learning platforms, and resources to advance your career." },
              { title: "Project Inspiration", desc: "Find design inspiration, creative ideas, and innovative approaches for your projects." },
              { title: "Internet Exploration", desc: "Rediscover the joy of exploring the internet without algorithms guiding every click." }
            ].map((item, i) => (
              <div key={i} className="swiss-card p-6 bg-white">
                <h3 className="font-mono font-bold text-accent mb-2 uppercase tracking-wider text-xs">Use Case {String(i + 1).padStart(2, '0')}</h3>
                <h4 className="font-bold text-lg mb-2 text-foreground">{item.title}</h4>
                <p className="text-zinc-500 text-sm font-sans">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <div className="swiss-card p-6 sm:p-8 bg-white">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-8 flex items-center text-foreground">
              <span className="w-2 h-8 bg-accent mr-3"></span>
              Frequently Asked Questions
            </h2>
            <div className="space-y-8">
              {[
                { q: "What is a random website generator?", a: "A random website generator is a tool that selects and recommends websites from a curated database. Our generator includes 300+ quality websites across categories like productivity, creative, learning, entertainment, tools, and more." },
                { q: "How many websites can I discover at once?", a: "You can generate between 1 and 10 random websites at once. The generator ensures you get unique websites each time without duplicates." },
                { q: "Can I filter by category?", a: "Yes! You can filter by categories including Productivity, Creative, Learning, Entertainment, Tools, News, Inspiration, Tech, Design, and Random & Fun." },
                { q: "Is the website generator really free?", a: "Absolutely! RandomHub's website generator is completely free with no hidden costs, registrations, or subscriptions. Discover unlimited websites whenever you need them." },
                { q: "Are the websites safe to visit?", a: "Yes! All websites in our database are carefully curated and verified. We only include reputable, safe, and useful websites." },
                { q: "Can I suggest websites to add?", a: "We're always looking to expand our database with quality websites. Feel free to contact us with your suggestions!" },
                { q: "How often is the website list updated?", a: "We regularly review and update our website database to ensure all links are active and add new interesting sites to keep the discovery fresh." }
              ].map((item, i) => (
                <div key={i}>
                  <h3 className="font-bold text-foreground mb-2 text-lg">{item.q}</h3>
                  <p className="text-zinc-500 font-sans text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="swiss-card p-6 sm:p-8 bg-white border-l-4 border-l-accent">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-4 text-foreground">
              Why Choose Our Random Website Generator?
            </h2>
            <p className="text-zinc-600 text-base leading-relaxed font-sans mb-4">
              Unlike other random website generators that might send you to low-quality or unsafe sites, our <strong>curated collection</strong> ensures every discovery is worthwhile. Each website in our database has been:
            </p>
            <ul className="space-y-2 text-zinc-600 font-sans text-sm">
              <li className="flex gap-2">
                <span className="text-accent font-bold">✓</span>
                <span><strong>Carefully vetted</strong> for quality, safety, and usefulness</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold">✓</span>
                <span><strong>Categorized accurately</strong> so you can filter by your interests</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold">✓</span>
                <span><strong>Verified active</strong> to ensure working links</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold">✓</span>
                <span><strong>Diverse and interesting</strong> covering productivity, learning, creativity, and entertainment</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold">✓</span>
                <span><strong>Free to access</strong> with no ads, tracking, or registration required</span>
              </li>
            </ul>
          </div>
        </div>
      </main>

      <footer className="border-t border-grid py-8 bg-background">
        <div className="container mx-auto px-4 text-center">
          <p className="text-zinc-400 font-mono text-xs uppercase tracking-widest">
            © 2025 RandomHub System
          </p>
        </div>
      </footer>
    </div>
  );
}
