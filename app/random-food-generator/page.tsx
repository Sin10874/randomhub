'use client';

import Navbar from '@/app/components/Navbar';
import FoodGeneratorPanel from '@/app/components/FoodGeneratorPanel';

export default function FoodGeneratorPage() {
  const siteUrl = "https://randomhub.io";

  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Random Food Generator - 670+ Dishes',
    url: `${siteUrl}/random-food-generator`,
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description: 'Free random food generator with 670+ dishes across 12 categories: breakfast, lunch, dinner, appetizer, soup, salad, seafood, pasta, vegetarian, dessert, snacks, and beverages.',
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
            Food<br className="sm:hidden" /> Generator
          </h1>
          <p className="text-zinc-500 font-mono text-sm uppercase tracking-widest">
            Culinary Database System // v2.0
          </p>
        </div>

        {/* Main Panel */}
        <div className="mb-16">
          <FoodGeneratorPanel />
        </div>

        {/* SEO / Info Section */}
        <div className="max-w-4xl mx-auto mb-12 space-y-12">
          {/* What is Random Food Generator */}
          <div className="swiss-card p-6 sm:p-8 bg-white">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-6 flex items-center text-foreground">
              <span className="w-2 h-8 bg-accent mr-3"></span>
              What is a Random Food Generator?
            </h2>
            <p className="text-zinc-600 text-base leading-relaxed font-sans mb-4">
              A <strong>random food generator</strong> is a creative decision-making tool that randomly selects dishes from a comprehensive database of meals and cuisines. Our food generator features <strong>670+ diverse dishes</strong> spanning 12 major categories, making it the perfect resource for meal planning, content creators, food bloggers, indecisive diners, and culinary enthusiasts.
            </p>
            <p className="text-zinc-600 text-base leading-relaxed font-sans">
              Whether you&apos;re deciding what to cook for dinner, creating food content, planning restaurant menus, exploring new cuisines, or simply discovering meal ideas, our tool provides instant access to everything from breakfast classics like pancakes and waffles to dinner favorites like steak and pasta to desserts like cheesecake and brownies.
            </p>
          </div>

          {/* How to Use */}
          <div className="swiss-card p-6 sm:p-8 bg-white">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-8 flex items-center text-foreground">
              <span className="w-2 h-8 bg-accent mr-3"></span>
              How to Use the Random Food Generator
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-grid border border-grid">
              {[
                { title: "Meal Planning", desc: "Decide what to eat for breakfast, lunch, or dinner when you can't make up your mind." },
                { title: "Content Creation", desc: "Generate food ideas for cooking videos, food blogs, recipe development, and social media." },
                { title: "Restaurant Menus", desc: "Discover menu ideas, daily specials, and cuisine inspiration for restaurants and cafes." },
                { title: "Cooking Challenges", desc: "Create random cooking challenges, recipe roulette games, and culinary competitions." },
                { title: "Food Discovery", desc: "Explore new dishes, discover cuisines you haven't tried, and expand your culinary horizons." },
                { title: "Party Planning", desc: "Get ideas for potlucks, dinner parties, themed events, and catering menus." }
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
                { icon: "🍽️", title: "670+ Food Dishes", desc: "Comprehensive database covering 12 categories: breakfast, lunch, dinner, appetizer, soup, salad, seafood, pasta, vegetarian, dessert, snacks, and beverages." },
                { icon: "🎯", title: "Category Filtering", desc: "Filter by meal type to find exactly what you're looking for or discover new ideas." },
                { icon: "🔢", title: "Bulk Generation", desc: "Generate up to 20 foods at once for meal planning, menu creation, or large events." },
                { icon: "🎨", title: "Clean Design", desc: "Beautiful text-based cards with category labels make browsing simple and fast." },
                { icon: "⚡", title: "Instant Results", desc: "No waiting, no ads, no registration - just instant food ideas whenever you need them." }
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
              Available Food Categories
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {[
                "🥞 Breakfast (90)",
                "🍔 Lunch (80)",
                "🥩 Dinner (90)",
                "🍤 Appetizer (50)",
                "🍲 Soup (40)",
                "🥗 Salad (40)",
                "🦞 Seafood (35)",
                "🍝 Pasta (40)",
                "🥑 Vegetarian (35)",
                "🍰 Dessert (70)",
                "🍿 Snack (50)",
                "☕ Beverage (50)"
              ].map((cat, i) => (
                <div key={i} className="bg-zinc-50 rounded-none p-3 text-center border border-zinc-200">
                  <p className="text-sm font-medium text-foreground font-mono">{cat}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-zinc-500 mt-4 text-center font-mono uppercase tracking-widest">670+ total dishes across all categories</p>
          </div>

          {/* FAQ */}
          <div className="swiss-card p-6 sm:p-8 bg-white">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-8 flex items-center text-foreground">
              <span className="w-2 h-8 bg-accent mr-3"></span>
              Frequently Asked Questions
            </h2>
            <div className="space-y-8">
              {[
                { q: "What is a random food generator?", a: "A random food generator is a tool that randomly selects dishes from a comprehensive database of foods. Our generator includes 670+ dishes across 12 categories including breakfast, lunch, dinner, appetizer, soup, salad, seafood, pasta, vegetarian, desserts, snacks, and beverages." },
                { q: "How can I use the random food generator?", a: "Random food generators are perfect for meal planning, recipe inspiration, content creation, cooking challenges, exploring new cuisines, and making dining decisions. Simply select a category and number of foods, then click generate." },
                { q: "Can I filter foods by meal type?", a: "Yes! You can filter by 12 categories: breakfast, lunch, dinner, appetizer, soup, salad, seafood, pasta, vegetarian, dessert, snacks, beverages, or view all foods together for maximum variety." },
                { q: "Is the food generator really free?", a: "Absolutely! RandomHub's food generator is 100% free with no registration, no limits, and no hidden costs. Generate unlimited food ideas whenever you need them." },
                { q: "How many foods can I generate at once?", a: "You can generate between 1 and 20 foods at a time. This is perfect for meal planning, menu creation, or exploring culinary options." }
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
              Why Choose Our Food Generator?
            </h2>
            <p className="text-zinc-600 text-base leading-relaxed font-sans">
              Unlike basic food lists, our <strong>random food generator</strong> combines a comprehensive database of 670+ dishes with intelligent category filtering across 12 categories. Whether you&apos;re struggling with meal decisions, creating food content, developing recipes, planning restaurant menus, or simply exploring new cuisines, our tool delivers diverse, delicious results instantly. <span className="text-accent font-semibold">Free forever, unlimited generation, no registration required.</span>
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
