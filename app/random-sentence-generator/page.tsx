'use client';

import Navbar from '@/app/components/Navbar';
import SentenceGeneratorPanel from '@/app/components/SentenceGeneratorPanel';

export default function SentenceGeneratorPage() {
  const siteUrl = "https://randomhub.io";
  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'RandomHub - Random Sentence Generator',
    url: `${siteUrl}/random-sentence-generator`,
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
        {/* Sentence Generator Panel */}
        <div className="mb-16">
          <SentenceGeneratorPanel />
        </div>

        {/* SEO Content Section */}
        <div className="max-w-4xl mx-auto mb-12 space-y-12">
          {/* What is Random Sentence Generator */}
          <div className="swiss-card p-6 sm:p-8 bg-white">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-6 flex items-center text-foreground">
              <span className="w-2 h-8 bg-accent mr-3"></span>
              What is a Random Sentence Generator?
            </h2>
            <p className="text-zinc-600 text-base leading-relaxed font-sans mb-4">
              A <strong>random sentence generator</strong> is a creative tool that produces grammatically correct, contextually meaningful sentences at the click of a button. Our sentence generator goes beyond simple randomization by allowing you to filter results by sentence type and topic, making it perfect for writers, educators, students, and creative professionals.
            </p>
            <p className="text-zinc-600 text-base leading-relaxed font-sans">
              Whether you need declarative statements, thought-provoking questions, enthusiastic exclamations, or commanding imperatives, our tool delivers diverse sentences across eight different topics including nature, science, education, daily life, technology, sports, travel, and entertainment.
            </p>
          </div>

          {/* Use Cases */}
          <div className="swiss-card p-6 sm:p-8 bg-white">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-8 flex items-center text-foreground">
              <span className="w-2 h-8 bg-accent mr-3"></span>
              How to Use Random Sentences
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-grid border border-grid">
              {[
                { title: "Creative Writing", desc: "Use random sentences as writing prompts to overcome writer's block and spark new story ideas." },
                { title: "Language Learning", desc: "Practice reading comprehension, grammar analysis, and translation with diverse sentence structures." },
                { title: "Teaching Examples", desc: "Generate sentences for grammar lessons, punctuation exercises, and sentence structure demonstrations." },
                { title: "Brainstorming", desc: "Use random sentences to trigger creative thinking and generate new ideas for projects." },
                { title: "Content Creation", desc: "Find inspiration for social media posts, blog topics, and creative content ideas." },
                { title: "Game Development", desc: "Generate dialogue options, quest descriptions, and NPC conversations for games." }
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
                { icon: "🎯", title: "Filter by Sentence Type", desc: "Choose from declarative, interrogative, exclamatory, or imperative sentences to match your specific needs." },
                { icon: "📑", title: "Filter by Topic", desc: "Select from eight topics including nature, science, education, daily life, technology, sports, travel, and entertainment." },
                { icon: "🔢", title: "Generate Multiple Sentences", desc: "Create 1-10 sentences at once for batch generation and maximum efficiency." },
                { icon: "📋", title: "Easy Copy Functions", desc: "Copy individual sentences or all generated sentences at once with one click." },
                { icon: "⚡", title: "Instant Generation", desc: "No waiting, no ads, no registration. Just instant sentence generation whenever you need it." }
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

          {/* FAQ */}
          <div className="swiss-card p-6 sm:p-8 bg-white">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-8 flex items-center text-foreground">
              <span className="w-2 h-8 bg-accent mr-3"></span>
              Frequently Asked Questions
            </h2>
            <div className="space-y-8">
              {[
                { q: "What is a random sentence generator?", a: "A random sentence generator is a tool that creates random, grammatically correct sentences. Our generator allows you to filter by sentence type (declarative, interrogative, exclamatory, imperative) and topic (nature, science, education, daily life, technology, sports, travel, entertainment)." },
                { q: "How can I use random sentences?", a: "Random sentences are perfect for creative writing prompts, overcoming writer's block, language learning exercises, brainstorming sessions, teaching examples, and content inspiration. They help spark creativity and provide starting points for various projects." },
                { q: "Can I choose the type of sentence?", a: "Yes! You can filter by four sentence types: Declarative (statements), Interrogative (questions), Exclamatory (exclamations), and Imperative (commands). You can also filter by eight different topics to match your needs." },
                { q: "Is the sentence generator really free?", a: "Absolutely! RandomHub's sentence generator is completely free with no hidden costs, registrations, or subscriptions. Generate as many sentences as you need, whenever you need them." },
                { q: "Can I copy the generated sentences?", a: "Yes! You can copy individual sentences by hovering over them and clicking the copy button, or copy all generated sentences at once using the 'Copy All' button." },
                { q: "What are the different sentence types?", a: "The four sentence types are: Declarative (makes a statement), Interrogative (asks a question), Exclamatory (expresses strong emotion), and Imperative (gives a command or instruction)." }
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
              Why Choose Our Sentence Generator?
            </h2>
            <p className="text-zinc-600 text-base leading-relaxed font-sans">
              Unlike basic random sentence generators, our tool provides <strong>intelligent filtering</strong> and <strong>categorization</strong>. Every sentence is carefully crafted and categorized by type and topic, ensuring you get relevant, high-quality results. Whether you&apos;re a writer seeking inspiration, a teacher creating examples, or a student practicing grammar, our sentence generator delivers exactly what you need. <span className="text-accent font-semibold">Free forever, no limits, no hassle.</span>
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
