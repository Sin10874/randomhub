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
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Word Generator Panel */}
        <div className="mb-16 lg:mb-24">
          <WordGeneratorPanel />
        </div>

        {/* Trending Tools Section */}
        <div className="mb-16 lg:mb-24">
          <PopularTools />
        </div>

        {/* SEO Content Section - Industrial Design */}
        <div className="max-w-4xl mx-auto mb-16 space-y-12">
          {/* What is RandomHub */}
          <div className="swiss-card p-6 sm:p-8 bg-white">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-4 flex items-center text-foreground">
              <span className="w-2 h-8 bg-accent mr-3"></span>
              What is RandomHub?
            </h2>
            <p className="text-zinc-600 text-base sm:text-lg leading-relaxed font-mono">
              <strong className="text-foreground">RandomHub</strong> is a free random generation tool platform designed to spark creativity. Whether you need a random word for creative writing, a unique name for your game character, or inspiration for your next project, RandomHub delivers instant results with powerful customization options.
            </p>
          </div>

          {/* Who is RandomHub for */}
          <div className="swiss-card p-6 sm:p-8 bg-white">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-8 flex items-center text-foreground">
              <span className="w-2 h-8 bg-accent mr-3"></span>
              Who is RandomHub for?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-grid border border-grid">
              {[
                { icon: "✍️", title: "Writers & Creators", desc: "Break through writer's block with random word prompts" },
                { icon: "📚", title: "Teachers & Educators", desc: "Create engaging lesson materials and vocabulary cards" },
                { icon: "🎮", title: "Game Developers", desc: "Generate character names and locations quickly" },
                { icon: "🎨", title: "Designers", desc: "Find random words to inspire brainstorming" },
                { icon: "🎲", title: "Word Game Players", desc: "Get random words for Scrabble and crosswords" },
                { icon: "💡", title: "Students", desc: "Enhance vocabulary learning and creative writing" }
              ].map((item, i) => (
                <div key={i} className="bg-background p-6 hover:bg-zinc-100 transition-colors">
                  <div className="flex gap-4">
                    <span className="text-2xl opacity-70 grayscale">{item.icon}</span>
                    <div>
                      <h3 className="font-mono font-bold text-foreground mb-1 uppercase tracking-wider text-sm">{item.title}</h3>
                      <p className="text-sm text-zinc-500">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose RandomHub */}
          <div className="swiss-card p-6 sm:p-8 bg-white">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-8 flex items-center text-foreground">
              <span className="w-2 h-8 bg-accent mr-3"></span>
              Why Choose RandomHub?
            </h2>
            <div className="space-y-6">
              {[
                { icon: "01", title: "Forever Free", desc: "No hidden costs, no premium tiers. 100% free." },
                { icon: "02", title: "Instant & Private", desc: "No registration required. We don't collect personal data." },
                { icon: "03", title: "Powerful Filters", desc: "Customize by type, letters, syllables for precise results." },
                { icon: "04", title: "Works Anywhere", desc: "Fully responsive on desktop, tablet, and mobile." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start group">
                  <span className="text-3xl font-mono font-bold text-zinc-200 group-hover:text-accent transition-colors">{item.icon}</span>
                  <div>
                    <h3 className="font-bold text-foreground mb-1 text-lg">{item.title}</h3>
                    <p className="text-zinc-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Popular Use Cases */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="swiss-card p-6 bg-white">
              <h3 className="font-mono font-bold text-accent mb-4 uppercase tracking-wider text-sm border-b border-grid pb-2">Use Case 01</h3>
              <h4 className="font-bold text-xl mb-2 text-foreground">Creative Writing</h4>
              <p className="text-zinc-500 text-sm">Generate random words to start your story, poem, or daily writing practice.</p>
            </div>
            <div className="swiss-card p-6 bg-white">
              <h3 className="font-mono font-bold text-accent mb-4 uppercase tracking-wider text-sm border-b border-grid pb-2">Use Case 02</h3>
              <h4 className="font-bold text-xl mb-2 text-foreground">Vocabulary Testing</h4>
              <p className="text-zinc-500 text-sm">Create flashcards and quizzes for TOEFL, SAT, or English language learning.</p>
            </div>
            <div className="swiss-card p-6 bg-white">
              <h3 className="font-mono font-bold text-accent mb-4 uppercase tracking-wider text-sm border-b border-grid pb-2">Use Case 03</h3>
              <h4 className="font-bold text-xl mb-2 text-foreground">Brainstorming</h4>
              <p className="text-zinc-500 text-sm">Use random words as creative triggers for marketing campaigns or product names.</p>
            </div>
            <div className="swiss-card p-6 bg-white">
              <h3 className="font-mono font-bold text-accent mb-4 uppercase tracking-wider text-sm border-b border-grid pb-2">Use Case 04</h3>
              <h4 className="font-bold text-xl mb-2 text-foreground">Game Dev</h4>
              <p className="text-zinc-500 text-sm">Generate character names, place names, and random items for your games.</p>
            </div>
          </div>

          {/* FAQ */}
          <div className="swiss-card p-6 sm:p-8 bg-white">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-8 flex items-center text-foreground">
              <span className="w-2 h-8 bg-accent mr-3"></span>
              FAQ
            </h2>
            <div className="space-y-0 divide-y divide-grid">
              {[
                { q: "Is RandomHub really free?", a: "Yes! RandomHub is completely free with no hidden costs." },
                { q: "Do I need to create an account?", a: "No registration required! Just visit and start generating." },
                { q: "How many words can I generate?", a: "There's no limit! Generate as many random words as you need." },
                { q: "Where do the words come from?", a: "Our database contains over 5,000 carefully curated English words." },
                { q: "Can I filter by word type?", a: "Absolutely! Filter by nouns, verbs, adjectives and more." }
              ].map((item, i) => (
                <div key={i} className="py-5 first:pt-0 last:pb-0">
                  <h3 className="font-bold text-foreground mb-2 text-lg">{item.q}</h3>
                  <p className="text-zinc-500 font-mono text-sm">{item.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mission */}
          <div className="border border-accent/20 bg-accent/5 p-6 sm:p-8">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-4 text-accent">
              Our Mission
            </h2>
            <p className="text-zinc-600 text-base sm:text-lg leading-relaxed font-mono">
              We believe that <strong className="text-foreground">creativity should be effortless</strong>. RandomHub is built on the principle that everyone deserves free access to quality random generation tools.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
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
