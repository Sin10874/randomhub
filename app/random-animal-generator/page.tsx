'use client';

import Navbar from '@/app/components/Navbar';
import AnimalGeneratorPanel from '@/app/components/AnimalGeneratorPanel';

export default function AnimalGeneratorPage() {
  const siteUrl = "https://randomhub.io";

  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Random Animal Generator - 180+ Species',
    url: `${siteUrl}/random-animal-generator`,
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description: 'Free random animal generator with 180+ species across 6 categories: mammals, birds, reptiles, fish, amphibians, and invertebrates.',
    browserRequirements: 'Requires JavaScript',
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl sm:text-6xl font-bold text-foreground mb-4 uppercase tracking-tight">
            Animal<br className="sm:hidden" /> Generator
          </h1>
          <p className="text-zinc-500 font-mono text-sm uppercase tracking-widest">
            Biological Taxonomy Database // v4.0
          </p>
        </div>

        {/* Main Panel */}
        <div className="mb-16">
          <AnimalGeneratorPanel />
        </div>

        {/* SEO / Info Section - Restored */}
        <div className="max-w-4xl mx-auto mb-12 space-y-12">
          {/* What is Random Animal Generator */}
          <div className="swiss-card p-6 sm:p-8 bg-white">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-6 flex items-center text-foreground">
              <span className="w-2 h-8 bg-accent mr-3"></span>
              What is a Random Animal Generator?
            </h2>
            <p className="text-zinc-600 text-base leading-relaxed font-sans mb-4">
              A <strong>random animal generator</strong> is an educational and entertaining tool that randomly selects animals from a comprehensive database of species. Our animal generator features <strong>180+ diverse animals</strong> spanning 6 major categories, making it the perfect resource for educators, students, game developers, writers, and animal enthusiasts.
            </p>
            <p className="text-zinc-600 text-base leading-relaxed font-sans">
              Whether you&apos;re teaching biology, developing educational games, creating wildlife trivia, exploring animal diversity, or simply discovering new species, our tool provides instant access to everything from majestic mammals like lions and elephants to fascinating invertebrates like octopuses and butterflies.
            </p>
          </div>

          {/* How to Use */}
          <div className="swiss-card p-6 sm:p-8 bg-white">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-8 flex items-center text-foreground">
              <span className="w-2 h-8 bg-accent mr-3"></span>
              How to Use the Random Animal Generator
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-grid border border-grid">
              {[
                { title: "Education", desc: "Perfect for biology lessons, animal classification, vocabulary building, and science projects." },
                { title: "Games & Activities", desc: "Create animal trivia, charades, drawing challenges, and educational games." },
                { title: "Creative Projects", desc: "Generate animal characters for stories, art inspiration, and creative writing prompts." },
                { title: "Animal Discovery", desc: "Explore diverse species, learn about different animal categories, and discover new favorites." },
                { title: "Classroom Activities", desc: "Teachers can use this for icebreakers, random selection, group assignments, and fun learning." },
                { title: "Decision Making", desc: "Pick a random animal for team names, mascots, avatars, or fun decision-making tools." }
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
                { icon: "🦁", title: "180+ Animal Species", desc: "Comprehensive database covering mammals, birds, reptiles, fish, amphibians, and invertebrates." },
                { icon: "🎯", title: "Category Filtering", desc: "Filter by specific animal groups to focus on the species you want to explore." },
                { icon: "🔢", title: "Bulk Generation", desc: "Generate up to 20 animals at once for games, activities, or large projects." },
                { icon: "🎨", title: "Visual Display", desc: "Beautiful animal cards make it engaging and easy to use." },
                { icon: "⚡", title: "Instant Results", desc: "No waiting, no ads, no registration - just instant animal generation whenever you need it." }
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

          {/* Categories */}
          <div className="swiss-card p-6 sm:p-8 bg-white">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-8 flex items-center text-foreground">
              <span className="w-2 h-8 bg-accent mr-3"></span>
              Available Animal Categories
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                "🦁 Mammals (60)",
                "🦅 Birds (40)",
                "🐍 Reptiles (25)",
                "🐠 Fish (25)",
                "🐸 Amphibians (10)",
                "🦋 Invertebrates (20)"
              ].map((cat, i) => (
                <div key={i} className="bg-zinc-50 rounded-none p-3 text-center border border-zinc-200">
                  <p className="text-sm font-medium text-foreground font-mono">{cat}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-zinc-500 mt-4 text-center font-mono uppercase tracking-widest">180+ total animals across all categories</p>
          </div>

          {/* FAQ */}
          <div className="swiss-card p-6 sm:p-8 bg-white">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-8 flex items-center text-foreground">
              <span className="w-2 h-8 bg-accent mr-3"></span>
              Frequently Asked Questions
            </h2>
            <div className="space-y-8">
              {[
                { q: "What is a random animal generator?", a: "A random animal generator is a tool that randomly selects animals from a comprehensive database of species. Our generator includes 180+ animals across 6 categories including mammals, birds, reptiles, fish, amphibians, and invertebrates." },
                { q: "How can I use the random animal generator?", a: "Random animal generators are perfect for education, creative writing, game development, classroom activities, icebreakers, and animal discovery. Simply select a category and number of animals, then click generate." },
                { q: "Can I filter animals by category?", a: "Yes! You can filter by mammals, birds, reptiles, fish, amphibians, invertebrates, or view all animals together for maximum variety." },
                { q: "Is the animal generator really free?", a: "Absolutely! RandomHub's animal generator is 100% free with no registration, no limits, and no hidden costs. Generate unlimited animals whenever you need them." },
                { q: "How many animals can I generate at once?", a: "You can generate between 1 and 20 animals at a time. This is perfect for classroom activities, games, or exploring animal diversity." }
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
              Why Choose Our Animal Generator?
            </h2>
            <p className="text-zinc-600 text-base leading-relaxed font-sans">
              Unlike basic animal lists, our <strong>random animal generator</strong> combines a comprehensive database of 180+ species with intelligent category filtering and visual displays. Whether you&apos;re a teacher creating engaging lessons, a parent looking for educational activities, a game developer building wildlife content, or simply an animal lover exploring biodiversity, our tool delivers diverse, fascinating results instantly. <span className="text-accent font-semibold">Free forever, unlimited generation, no registration required.</span>
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
