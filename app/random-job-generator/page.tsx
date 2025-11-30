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
        {/* Job Generator Panel */}
        <div className="mb-16">
          <JobGeneratorPanel />
        </div>

        {/* SEO Content Section */}
        <div className="max-w-4xl mx-auto mb-12 space-y-12">
          {/* What is Random Job Generator */}
          <div className="swiss-card p-6 sm:p-8 bg-white">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-6 flex items-center text-foreground">
              <span className="w-2 h-8 bg-accent mr-3"></span>
              What is a Random Job Generator?
            </h2>
            <p className="text-zinc-600 text-base leading-relaxed font-sans mb-4">
              A <strong>random job generator</strong> is a comprehensive creative tool that randomly selects careers and occupations from an extensive database of professions. Our job generator features <strong>900+ diverse jobs</strong> spanning 20+ industry categories, making it the ultimate resource for writers, game developers, educators, career explorers, and creative professionals.
            </p>
            <p className="text-zinc-600 text-base leading-relaxed font-sans">
              Whether you&apos;re developing characters for a novel, creating NPCs for a role-playing game, exploring career paths, building fictional worlds, or seeking creative inspiration, our tool provides instant access to everything from traditional careers like healthcare and education to cutting-edge tech roles, specialized sciences, unique arts professions, and even extraordinary occupations like astronauts, storm chasers, and cool hunters.
            </p>
          </div>

          {/* Use Cases */}
          <div className="swiss-card p-6 sm:p-8 bg-white">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-8 flex items-center text-foreground">
              <span className="w-2 h-8 bg-accent mr-3"></span>
              How to Use the Random Job Generator
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-grid border border-grid">
              {[
                { title: "Creative Writing", desc: "Generate realistic occupations for your characters to add depth and authenticity to your stories." },
                { title: "Game Development", desc: "Create diverse NPCs with varied careers for role-playing games, video games, and tabletop adventures." },
                { title: "Career Exploration", desc: "Discover careers you may never have considered and explore diverse professional paths." },
                { title: "Icebreakers", desc: "Use random jobs for fun group activities, team building, and conversation starters." },
                { title: "Education", desc: "Teachers can use this for vocabulary lessons, career education, and creative writing prompts." },
                { title: "Brainstorming", desc: "Spark new ideas for projects, storylines, or creative content by exploring random professions." }
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 hover:bg-zinc-50 transition-colors">
                  <h3 className="font-mono font-bold text-foreground mb-2 uppercase tracking-wider text-xs">{item.title}</h3>
                  <p className="text-zinc-500 text-sm font-sans">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="swiss-card p-6 sm:p-8 bg-white">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-8 flex items-center text-foreground">
              <span className="w-2 h-8 bg-accent mr-3"></span>
              Key Features
            </h2>
            <div className="space-y-6">
              {[
                { icon: "💼", title: "900+ Diverse Jobs", desc: "Comprehensive database covering everything from common careers to specialized professions across all industries." },
                { icon: "🎯", title: "Category Filtering", desc: "Filter by 20+ categories including Healthcare, Technology, Arts, Science, Business, and more." },
                { icon: "🔢", title: "Bulk Generation", desc: "Generate up to 20 jobs at once for character creation, brainstorming, or large projects." },
                { icon: "📋", title: "Easy Copy Function", desc: "Copy all generated jobs to clipboard with a single click for use in your projects." },
                { icon: "⚡", title: "Instant Results", desc: "No waiting, no ads, no registration - just instant job generation whenever you need it." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <span className="text-2xl grayscale opacity-70 pt-1">{item.icon}</span>
                  <div>
                    <h3 className="font-bold text-foreground mb-1 text-lg">{item.title}</h3>
                    <p className="text-zinc-500 font-sans">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Job Categories */}
          <div className="swiss-card p-6 sm:p-8 bg-white">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-8 flex items-center text-foreground">
              <span className="w-2 h-8 bg-accent mr-3"></span>
              Available Job Categories
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                "Business & Finance", "Technology & IT", "Healthcare & Medical", "Education",
                "Law & Legal", "Entertainment", "Science & Research", "Arts & Design",
                "Public Safety", "Transportation", "Sports & Fitness", "Skilled Trades"
              ].map((cat, i) => (
                <div key={i} className="bg-zinc-50 rounded-none p-3 text-center border border-zinc-200">
                  <p className="text-sm font-medium text-foreground font-mono">{cat}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-zinc-500 mt-4 text-center font-mono uppercase tracking-widest">...and many more!</p>
          </div>

          {/* FAQ */}
          <div className="swiss-card p-6 sm:p-8 bg-white">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-8 flex items-center text-foreground">
              <span className="w-2 h-8 bg-accent mr-3"></span>
              Frequently Asked Questions
            </h2>
            <div className="space-y-8">
              {[
                { q: "What is a random job generator?", a: "A random job generator is a tool that randomly selects careers and occupations from a comprehensive database. Our generator includes 900+ jobs across 20+ categories including healthcare, technology, arts, business, and more." },
                { q: "How can I use the random job generator?", a: "Random job generators are perfect for creative writing (character development), career exploration, role-playing games, educational purposes, icebreaker activities, and brainstorming sessions. Simply select a category and click generate." },
                { q: "Can I filter jobs by category?", a: "Yes! You can filter by over 20 categories including Business & Finance, Technology & IT, Healthcare & Medical, Education, Entertainment, Science & Research, and many more. You can also select 'All Categories' for maximum variety." },
                { q: "Is the job generator really free?", a: "Absolutely! RandomHub's job generator is 100% free with no registration, no limits, and no hidden costs. Generate unlimited jobs whenever you need them." },
                { q: "How many jobs can I generate at once?", a: "You can generate between 1 and 20 jobs at a time. This is perfect for creating multiple characters, exploring various career options, or conducting classroom activities." },
                { q: "Can I copy the generated jobs?", a: "Yes! Click the 'Copy' button to copy all generated jobs to your clipboard at once. They'll be formatted with one job per line for easy pasting into your projects." }
              ].map((item, i) => (
                <div key={i}>
                  <h3 className="font-bold text-foreground mb-2 text-lg">{item.q}</h3>
                  <p className="text-zinc-500 font-sans text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose */}
          <div className="swiss-card p-6 sm:p-8 bg-white border-l-4 border-l-accent">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-4 text-foreground">
              Why Choose Our Job Generator?
            </h2>
            <p className="text-zinc-600 text-base leading-relaxed font-sans">
              Unlike basic job lists, our <strong>random job generator</strong> combines a comprehensive database of 900+ careers with intelligent category filtering. Whether you&apos;re a novelist crafting realistic characters, a game master creating NPCs, a teacher developing curriculum, or simply exploring career possibilities, our tool delivers diverse, realistic results instantly. <span className="text-accent font-semibold">Free forever, unlimited generation, no registration required.</span>
            </p>
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
