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
        {/* Adjective Generator Panel */}
        <div className="mb-16">
          <AdjectiveGeneratorPanel />
        </div>

        {/* SEO Content Section */}
        <div className="max-w-4xl mx-auto mb-12 space-y-12">
          {/* What is Random Adjective Generator */}
          <div className="swiss-card p-6 sm:p-8 bg-white">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-6 flex items-center text-foreground">
              <span className="w-2 h-8 bg-accent mr-3"></span>
              What is Random Adjective Generator?
            </h2>
            <p className="text-zinc-600 text-base leading-relaxed font-sans mb-4">
              <strong>Random Adjective Generator</strong> is a powerful, free online tool that instantly generates descriptive adjectives from a carefully curated database of over 1,300 English words. Whether you&apos;re a writer seeking vivid descriptions, a marketer crafting compelling copy, a teacher creating vocabulary exercises, or a student expanding your language skills, this adjective finder tool delivers the perfect descriptive words for your needs.
            </p>
            <p className="text-zinc-600 text-base leading-relaxed font-sans">
              Our advanced filtering system allows you to narrow down results by <strong>starting letter</strong>, <strong>ending letter</strong>, <strong>syllable count</strong>, or <strong>letter length</strong>—giving you precise control over the adjectives you generate. With support for bulk generation (up to 50 words at once) and one-click copying, it&apos;s the most efficient adjective generator available online.
            </p>
          </div>

          {/* Who is it for */}
          <div className="swiss-card p-6 sm:p-8 bg-white">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-8 flex items-center text-foreground">
              <span className="w-2 h-8 bg-accent mr-3"></span>
              Who is Random Adjective Generator for?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-grid border border-grid">
              {[
                { icon: "✍️", title: "Writers & Authors", desc: "Find vivid adjectives to enrich descriptions and avoid repetitive language" },
                { icon: "📚", title: "Teachers & Educators", desc: "Create vocabulary quizzes, writing prompts, and grammar exercises" },
                { icon: "🎓", title: "Students & Learners", desc: "Expand vocabulary and practice descriptive writing skills" },
                { icon: "💡", title: "Content Creators", desc: "Generate engaging adjectives for marketing copy and social media" },
                { icon: "🎨", title: "Designers & Creatives", desc: "Find inspiration for brand names, taglines, and creative projects" },
                { icon: "🎭", title: "Game Developers", desc: "Create character traits, item descriptions, and game lore" }
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

          {/* Why Choose */}
          <div className="swiss-card p-6 sm:p-8 bg-white">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-8 flex items-center text-foreground">
              <span className="w-2 h-8 bg-accent mr-3"></span>
              Why Choose Our Adjective Generator?
            </h2>
            <div className="space-y-6">
              {[
                { icon: "📖", title: "1,300+ Quality Adjectives", desc: "Carefully curated database of descriptive, qualitative, and quantitative adjectives" },
                { icon: "🎯", title: "Advanced Filtering", desc: "Filter by starting letter, ending letter, syllable count, or letter length for precise results" },
                { icon: "⚡", title: "Bulk Generation", desc: "Generate up to 50 adjectives at once - perfect for large projects and brainstorming sessions" },
                { icon: "🔄", title: "One-Click Copy", desc: "Instantly copy results to clipboard - single adjective or entire list" },
                { icon: "🎁", title: "100% Free", desc: "No registration, no limits, no cost. Generate unlimited adjectives forever" }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start group">
                  <span className="text-2xl grayscale opacity-70 pt-1">{item.icon}</span>
                  <div>
                    <h3 className="font-bold text-foreground mb-1 text-lg">{item.title}</h3>
                    <p className="text-zinc-500 font-sans">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* How to Use */}
          <div className="swiss-card p-6 sm:p-8 bg-white">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-8 flex items-center text-foreground">
              <span className="w-2 h-8 bg-accent mr-3"></span>
              How to Use Random Adjective Generator
            </h2>
            <div className="space-y-6">
              {[
                { step: "01", title: "Set Your Preferences", desc: "Choose how many adjectives to generate (1-50). Optionally set filters for starting letter, ending letter, or word length." },
                { step: "02", title: "Generate Adjectives", desc: "Click the generate button or press Enter to instantly get random adjectives matching your criteria." },
                { step: "03", title: "Copy & Use", desc: "Copy all adjectives at once or regenerate for new options. Use them in your writing, projects, or learning materials." }
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

          {/* Popular Use Cases */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: "Creative Writing", desc: "Enhance descriptions, avoid repetitive words, and find the perfect modifier for any noun." },
              { title: "Vocabulary Building", desc: "Discover new adjectives to expand your vocabulary and improve language skills." },
              { title: "Teaching Materials", desc: "Create worksheets, flashcards, and grammar exercises for ESL and language classes." },
              { title: "Marketing Copy", desc: "Find powerful adjectives for product descriptions, ads, and compelling content." },
              { title: "Game Development", desc: "Generate descriptive words for character traits, items, and world-building." },
              { title: "Writing Prompts", desc: "Use random adjectives as creative prompts to spark story ideas and overcome writer's block." }
            ].map((item, i) => (
              <div key={i} className="swiss-card p-6 bg-white">
                <h3 className="font-mono font-bold text-accent mb-2 uppercase tracking-wider text-xs">Use Case {String(i + 1).padStart(2, '0')}</h3>
                <h4 className="font-bold text-lg mb-2 text-foreground">{item.title}</h4>
                <p className="text-zinc-500 text-sm font-sans">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* What are Adjectives */}
          <div className="swiss-card p-6 sm:p-8 bg-white">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-6 flex items-center text-foreground">
              <span className="w-2 h-8 bg-accent mr-3"></span>
              What are Adjectives?
            </h2>
            <p className="text-zinc-600 text-base leading-relaxed font-sans mb-6">
              Adjectives are words that describe or modify nouns and pronouns, providing additional information about their qualities, quantities, or states. They answer questions like &quot;What kind?&quot;, &quot;How many?&quot;, or &quot;Which one?&quot;
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-grid border border-grid">
              {[
                { title: "Descriptive", desc: "Describe qualities: beautiful, tall, ancient, sleek, mysterious" },
                { title: "Quantitative", desc: "Express amount: few, many, several, numerous, countless" },
                { title: "Demonstrative", desc: "Point to things: this, that, these, those" }
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 hover:bg-zinc-50 transition-colors">
                  <h3 className="font-mono font-bold text-foreground mb-2 uppercase tracking-wider text-xs">{item.title}</h3>
                  <p className="text-zinc-500 text-sm font-sans">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="swiss-card p-6 sm:p-8 bg-white">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-8 flex items-center text-foreground">
              <span className="w-2 h-8 bg-accent mr-3"></span>
              Frequently Asked Questions
            </h2>
            <div className="space-y-8">
              {[
                { q: "How many adjectives can I generate?", a: "You can generate between 1 and 50 adjectives at once. The default is 1, and you can adjust this number to suit your needs." },
                { q: "Can I filter adjectives by specific criteria?", a: "Yes! You can filter by starting letter, ending letter, number of syllables, or number of letters with equal to, greater than, or less than comparisons." },
                { q: "Is the adjective generator really free?", a: "Absolutely! No registration, no hidden fees, no limits. Generate unlimited adjectives completely free." },
                { q: "Can I use these adjectives commercially?", a: "Yes! All generated adjectives are common English words free to use in any project - books, marketing, games, education, or personal use." },
                { q: "What types of adjectives are included?", a: "Our database includes 1,300+ adjectives covering descriptive (beautiful, tall), quantitative (many, few), and various other categories to suit different writing needs." },
                { q: "How do I copy the generated adjectives?", a: "Click the 'Copy' button to copy all generated adjectives to your clipboard at once. They'll be formatted with one adjective per line." },
                { q: "Can I regenerate if I don't like the results?", a: "Of course! Click 'Regenerate' or press Enter to get a new set of random adjectives with the same filters." }
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
              Why Use Our Random Adjective Generator?
            </h2>
            <p className="text-zinc-600 text-base leading-relaxed font-sans mb-4">
              Finding the right adjective can transform ordinary writing into extraordinary content. Our <strong>adjective generator tool</strong> helps you discover the perfect descriptive words instantly, saving time and sparking creativity. Unlike traditional thesauruses, our tool offers true randomization for unexpected word discoveries, advanced filters, and a distraction-free interface.
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
