'use client';

import Navbar from '@/app/components/Navbar';
import LetterGeneratorPanel from '@/app/components/LetterGeneratorPanel';

export default function LetterGeneratorPage() {
  const siteUrl = "https://randomhub.io";

  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Random Letter Generator',
    url: `${siteUrl}/random-letter-generator`,
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description: 'Generate random letters with customizable options. Choose uppercase, lowercase, or mixed case. Perfect for games, education, and creative projects.',
    browserRequirements: 'Requires JavaScript',
    screenshot: `${siteUrl}/screenshots/letter-generator.png`,
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Letter Generator Panel */}
        <div className="mb-16">
          <LetterGeneratorPanel />
        </div>

        {/* SEO Content Section */}
        <div className="max-w-4xl mx-auto mb-12 space-y-12">
          {/* What is Random Letter Generator */}
          <div className="swiss-card p-6 sm:p-8 bg-white">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-6 flex items-center text-foreground">
              <span className="w-2 h-8 bg-accent mr-3"></span>
              What is Random Letter Generator?
            </h2>
            <p className="text-zinc-600 text-base leading-relaxed font-sans">
              <strong>Random Letter Generator</strong> is a free tool that instantly generates random letters from the alphabet. Whether you need uppercase letters, lowercase letters, or a mix of both, our generator provides quick and easy randomization. Perfect for educational activities, word games, creative exercises, and decision-making when you need a random letter.
            </p>
          </div>

          {/* Who is it for */}
          <div className="swiss-card p-6 sm:p-8 bg-white">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-8 flex items-center text-foreground">
              <span className="w-2 h-8 bg-accent mr-3"></span>
              Who is Random Letter Generator for?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-grid border border-grid">
              {[
                { icon: "👨‍🏫", title: "Teachers & Educators", desc: "Create alphabet learning activities and classroom games" },
                { icon: "👶", title: "Parents", desc: "Help children learn the alphabet through interactive play" },
                { icon: "🎮", title: "Game Players", desc: "Use for Scrabble practice, Boggle, and word formation games" },
                { icon: "✍️", title: "Writers", desc: "Generate starting letters for creative writing prompts" },
                { icon: "🎲", title: "Decision Makers", desc: "Use letters for random selection and fair choices" },
                { icon: "🎨", title: "Designers & Artists", desc: "Generate random letters for typography and design projects" }
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
              Why Choose Our Letter Generator?
            </h2>
            <div className="space-y-6">
              {[
                { icon: "⚡", title: "Instant Results", desc: "Generate random letters immediately with a single click - no delays or waiting" },
                { icon: "🔤", title: "Case Options", desc: "Choose uppercase, lowercase, or mixed case to suit your specific needs" },
                { icon: "🎯", title: "Bulk Generation", desc: "Generate multiple random letters at once for games and activities" },
                { icon: "📱", title: "Mobile Friendly", desc: "Works perfectly on all devices - phones, tablets, and computers" },
                { icon: "🎁", title: "Forever Free", desc: "No registration, no limits, no cost - completely free to use anytime" }
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
              How to Use Random Letter Generator
            </h2>
            <div className="space-y-6">
              {[
                { step: "01", title: "Choose Your Options", desc: "Select how many letters you want and choose between uppercase, lowercase, or mixed case." },
                { step: "02", title: "Generate Letters", desc: "Click the generate button to instantly get your random letters." },
                { step: "03", title: "Copy & Use", desc: "Copy the letters and use them in your games, activities, or projects." }
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
              { title: "Alphabet Learning", desc: "Help children recognize and practice letters in a fun, interactive way." },
              { title: "Word Games", desc: "Generate starting letters for Scrabble, Boggle, or word-building challenges." },
              { title: "Writing Prompts", desc: "Use random letters as starting points for creative writing exercises." },
              { title: "Classroom Activities", desc: "Create spelling tests, phonics practice, and alphabet games." },
              { title: "Decision Making", desc: "Use letters for random selection when you need a fair choice." },
              { title: "Design Projects", desc: "Generate letters for typography practice and design mockups." }
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
                { q: "How does the random letter generator work?", a: "Our generator uses a true randomization algorithm to select letters from the English alphabet (A-Z). Each letter has an equal chance of being selected." },
                { q: "Can I generate multiple letters at once?", a: "Yes! You can choose to generate anywhere from 1 to multiple letters in a single generation." },
                { q: "What's the difference between uppercase and lowercase?", a: "Uppercase generates capital letters (A, B, C), lowercase generates small letters (a, b, c), and mixed randomly combines both." },
                { q: "Is the letter generation truly random?", a: "Yes! We use JavaScript's cryptographically secure random number generator to ensure fair and unpredictable letter selection." },
                { q: "Can I use this for educational purposes?", a: "Absolutely! Our letter generator is perfect for classroom activities, alphabet learning, phonics practice, and educational games." },
                { q: "Is the Random Letter Generator free?", a: "Yes! It's completely free with no registration required. Generate unlimited letters anytime, anywhere." },
                { q: "Does it work on mobile devices?", a: "Yes! Our generator is fully responsive and works perfectly on smartphones, tablets, and desktop computers." }
              ].map((item, i) => (
                <div key={i}>
                  <h3 className="font-bold text-foreground mb-2 text-lg">{item.q}</h3>
                  <p className="text-zinc-500 font-sans text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
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
