'use client';

import Navbar from '@/app/components/Navbar';
import PokemonGeneratorPanel from '@/app/components/PokemonGeneratorPanel';

export default function PokemonGeneratorPage() {
  const siteUrl = "https://randomhub.io";

  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Random Pokemon Generator - 150+ Pokemon',
    url: `${siteUrl}/random-pokemon-generator`,
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description: 'Free random Pokemon generator with 150+ Pokemon across 9 regions. Filter by type, region, legendary status, and evolution stage.',
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
            Pokémon<br className="sm:hidden" /> Generator
          </h1>
          <p className="text-zinc-500 font-mono text-sm uppercase tracking-widest">
            Pokédex Database System // v8.0
          </p>
        </div>

        {/* Main Panel */}
        <div className="mb-16">
          <PokemonGeneratorPanel />
        </div>

        {/* SEO / Info Section */}
        <div className="max-w-4xl mx-auto mb-12 space-y-12">
          {/* What is Random Pokemon Generator */}
          <div className="swiss-card p-6 sm:p-8 bg-white">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-6 flex items-center text-foreground">
              <span className="w-2 h-8 bg-accent mr-3"></span>
              What is a Random Pokémon Generator?
            </h2>
            <p className="text-zinc-600 text-base leading-relaxed font-sans mb-4">
              A <strong>random Pokémon generator</strong> is an engaging tool that randomly selects Pokémon from a comprehensive Pokédex database. Our generator features <strong>150+ diverse Pokémon</strong> spanning 9 major regions from Kanto to Paldea, making it the perfect resource for trainers, game developers, content creators, and Pokémon enthusiasts.
            </p>
            <p className="text-zinc-600 text-base leading-relaxed font-sans">
              Whether you&apos;re building a random team, creating Pokémon challenges, developing fan games, running Nuzlocke challenges, or simply discovering new favorites, our tool provides instant access to everything from classic starters like Bulbasaur and Charmander to legendary Pokémon like Mewtwo and Rayquaza.
            </p>
          </div>

          {/* How to Use */}
          <div className="swiss-card p-6 sm:p-8 bg-white">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-8 flex items-center text-foreground">
              <span className="w-2 h-8 bg-accent mr-3"></span>
              How to Use the Random Pokémon Generator
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-grid border border-grid">
              {[
                { title: "Team Building", desc: "Create random Pokémon teams for competitive play, casual battles, or challenge runs." },
                { title: "Nuzlocke Challenges", desc: "Generate random encounters for Nuzlocke runs and other self-imposed challenge modes." },
                { title: "Content Creation", desc: "Get random Pokémon for YouTube videos, Twitch streams, fan art, and creative projects." },
                { title: "Game Development", desc: "Build Pokémon-inspired games, fan games, and educational tools with random selection." },
                { title: "Trivia & Quizzes", desc: "Create Pokémon trivia games, guessing challenges, and educational quizzes." },
                { title: "Drawing Challenges", desc: "Use for art prompts, drawing challenges, fusion ideas, and creative inspiration." }
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
                { icon: "⚡", title: "150+ Pokémon Species", desc: "Comprehensive database covering all regions from Kanto to Paldea with regular, legendary, mythical, and paradox Pokémon." },
                { icon: "🎯", title: "Advanced Filtering", desc: "Filter by region, type (18 types), legendary status, evolution stage, and more for precise results." },
                { icon: "🔢", title: "Flexible Generation", desc: "Generate 1-6 Pokémon at once for team building, challenges, or large projects." },
                { icon: "🎨", title: "Clean UI Design", desc: "Beautiful Pokémon cards with type badges, region info, and legendary indicators." },
                { icon: "⚡", title: "Instant Results", desc: "No waiting, no ads, no registration - just instant Pokémon generation whenever you need it." }
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

          {/* Regions */}
          <div className="swiss-card p-6 sm:p-8 bg-white">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-8 flex items-center text-foreground">
              <span className="w-2 h-8 bg-accent mr-3"></span>
              Available Regions
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                "Kanto (Gen I)",
                "Johto (Gen II)",
                "Hoenn (Gen III)",
                "Sinnoh (Gen IV)",
                "Unova (Gen V)",
                "Kalos (Gen VI)",
                "Alola (Gen VII)",
                "Galar (Gen VIII)",
                "Paldea (Gen IX)"
              ].map((region, i) => (
                <div key={i} className="bg-zinc-50 rounded-none p-3 text-center border border-zinc-200">
                  <p className="text-sm font-medium text-foreground font-mono">{region}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-zinc-500 mt-4 text-center font-mono uppercase tracking-widest">150+ total Pokémon across all generations</p>
          </div>

          {/* FAQ */}
          <div className="swiss-card p-6 sm:p-8 bg-white">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-8 flex items-center text-foreground">
              <span className="w-2 h-8 bg-accent mr-3"></span>
              Frequently Asked Questions
            </h2>
            <div className="space-y-8">
              {[
                { q: "What is a random Pokémon generator?", a: "A random Pokémon generator is a tool that randomly selects Pokémon from a comprehensive Pokédex database. Our generator includes 150+ Pokémon across 9 regions with advanced filtering by type, region, legendary status, and evolution stage." },
                { q: "How can I use the random Pokémon generator?", a: "Random Pokémon generators are perfect for team building, Nuzlocke challenges, content creation, game development, trivia games, and drawing challenges. Simply select your filters and click generate." },
                { q: "Can I filter Pokémon by type and region?", a: "Yes! You can filter by all 18 Pokémon types (Fire, Water, Electric, etc.), 9 regions (Kanto to Paldea), legendary categories (regular, legendary, mythical, paradox, ultra beast), and evolution stages." },
                { q: "Is the Pokémon generator really free?", a: "Absolutely! RandomHub's Pokémon generator is 100% free with no registration, no limits, and no hidden costs. Generate unlimited Pokémon whenever you need them." },
                { q: "How many Pokémon can I generate at once?", a: "You can generate between 1 and 6 Pokémon at a time. This is perfect for building teams, running challenges, or exploring Pokémon diversity." }
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
              Why Choose Our Pokémon Generator?
            </h2>
            <p className="text-zinc-600 text-base leading-relaxed font-sans">
              Unlike basic Pokémon pickers, our <strong>random Pokémon generator</strong> combines a comprehensive Pokédex database of 150+ species with intelligent filtering by region, type, legendary status, and evolution stage. Whether you&apos;re a competitive trainer building teams, a content creator making videos, a game developer building fan games, or simply a Pokémon fan exploring different species, our tool delivers diverse, exciting results instantly. <span className="text-accent font-semibold">Free forever, unlimited generation, no registration required.</span>
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
