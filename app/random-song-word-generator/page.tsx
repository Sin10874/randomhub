'use client';

import Navbar from '@/app/components/Navbar';
import SongWordGeneratorPanel from '@/app/components/SongWordGeneratorPanel';

export default function SongWordGeneratorPage() {
  const siteUrl = "https://randomhub.io";

  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Random Song Word Generator - Song Association Game',
    url: `${siteUrl}/random-song-word-generator`,
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description: 'Free random song word generator with 200+ common words from popular songs. Perfect for song association game, songwriting inspiration, music practice, and party entertainment.',
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
            Song Word<br className="sm:hidden" /> Generator
          </h1>
          <p className="text-zinc-500 font-mono text-sm uppercase tracking-widest">
            Music Inspiration System // v1.0
          </p>
        </div>

        {/* Main Panel */}
        <div className="mb-16">
          <SongWordGeneratorPanel />
        </div>

        {/* SEO / Info Section */}
        <div className="max-w-4xl mx-auto mb-12 space-y-12">
          {/* What is Random Song Word Generator */}
          <div className="swiss-card p-6 sm:p-8 bg-white">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-6 flex items-center text-foreground">
              <span className="w-2 h-8 bg-accent mr-3"></span>
              What is a Random Song Word Generator?
            </h2>
            <p className="text-zinc-600 text-base leading-relaxed font-sans mb-4">
              A <strong>random song word generator</strong> is a creative tool that randomly selects common words frequently found in song lyrics and titles. Our generator features <strong>200+ carefully curated words</strong> that appear across thousands of popular songs, making it perfect for the Song Association Game, songwriting inspiration, music practice, and party entertainment.
            </p>
            <p className="text-zinc-600 text-base leading-relaxed font-sans">
              Whether you&apos;re playing the viral Song Association Game (popularized by Ellen DeGeneres), seeking songwriting inspiration, training your musical memory, or hosting a music-themed party, our tool provides instant access to words like &quot;love&quot;, &quot;heart&quot;, &quot;night&quot;, &quot;dream&quot;, and hundreds more that spark musical creativity.
            </p>
          </div>

          {/* How to Use */}
          <div className="swiss-card p-6 sm:p-8 bg-white">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-8 flex items-center text-foreground">
              <span className="w-2 h-8 bg-accent mr-3"></span>
              How to Use the Song Word Generator
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-grid border border-grid">
              {[
                { title: "Song Association Game", desc: "Play the famous game - get a random word and sing a song containing that word within 10 seconds." },
                { title: "Songwriting Inspiration", desc: "Break through creative blocks by generating random words to spark new lyrics and melodies." },
                { title: "Music Practice", desc: "Train your musical memory by connecting words to songs, improving recall and knowledge." },
                { title: "Party Entertainment", desc: "Host fun music games at parties - perfect icebreaker and group activity for all ages." },
                { title: "Content Creation", desc: "Generate word prompts for TikTok videos, YouTube challenges, and social media content." },
                { title: "Educational Tool", desc: "Teach music appreciation, expand vocabulary, and explore lyrical themes in classrooms." }
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 hover:bg-zinc-50 transition-colors">
                  <h3 className="font-mono font-bold text-foreground mb-2 uppercase tracking-wider text-xs">{item.title}</h3>
                  <p className="text-zinc-500 text-sm font-sans">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Song Association Game Rules */}
          <div className="swiss-card p-6 sm:p-8 bg-white border-l-4 border-l-accent">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-6 flex items-center text-foreground">
              <span className="w-2 h-8 bg-accent mr-3"></span>
              How to Play Song Association Game
            </h2>
            <div className="space-y-4">
              <div className="bg-zinc-50 border border-grid p-5">
                <h3 className="font-mono font-bold text-foreground mb-2 uppercase tracking-wider text-xs">🎮 Game Rules</h3>
                <ol className="list-decimal list-inside space-y-2 text-zinc-600 font-sans">
                  <li>Click &quot;Generate Words&quot; to get a random word</li>
                  <li>You have 10 seconds to think of a song containing that word</li>
                  <li>Sing at least one line from the song that includes the word</li>
                  <li>Each correct answer earns 10 points</li>
                  <li>Keep generating new words to continue playing</li>
                </ol>
              </div>
              <p className="text-zinc-600 text-base leading-relaxed font-sans">
                <strong>Example:</strong> If you get the word &quot;love&quot;, you could sing &quot;I will always love you&quot; by Whitney Houston, &quot;Love Story&quot; by Taylor Swift, or any other song with &quot;love&quot; in the lyrics!
              </p>
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
                { icon: "🎵", title: "200+ Song Words", desc: "Carefully curated database of the most common words found in popular song lyrics across all genres and decades." },
                { icon: "🎯", title: "One-Click Generation", desc: "Generate 1, 3, 5, 10, 15, or 20 words instantly with a single click - perfect for solo or group play." },
                { icon: "📋", title: "Copy to Clipboard", desc: "Easily copy individual words or entire lists for sharing with friends or creating custom challenges." },
                { icon: "⌨️", title: "Keyboard Shortcuts", desc: "Press Enter to regenerate words instantly - keep the game flowing without touching your mouse." },
                { icon: "🎨", title: "Clean Interface", desc: "Beautiful, distraction-free design lets you focus on the music and the fun." },
                { icon: "⚡", title: "Instant & Free", desc: "No registration, no limits, no ads - just pure musical entertainment whenever you need it." }
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

          {/* Word Categories */}
          <div className="swiss-card p-6 sm:p-8 bg-white">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-8 flex items-center text-foreground">
              <span className="w-2 h-8 bg-accent mr-3"></span>
              Word Categories Included
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                "❤️ Love & Emotions",
                "⏰ Time & Life",
                "🏠 Places & Movement",
                "👥 People & Relationships",
                "🌊 Nature & Elements",
                "🎨 Colors",
                "💪 Actions & Verbs",
                "🎼 Music & Sound",
                "✨ Abstract Concepts",
                "👁️ Body Parts"
              ].map((cat, i) => (
                <div key={i} className="bg-zinc-50 rounded-none p-3 text-center border border-zinc-200">
                  <p className="text-sm font-medium text-foreground font-mono">{cat}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-zinc-500 mt-4 text-center font-mono uppercase tracking-widest">200+ words across 10 thematic categories</p>
          </div>

          {/* FAQ */}
          <div className="swiss-card p-6 sm:p-8 bg-white">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-8 flex items-center text-foreground">
              <span className="w-2 h-8 bg-accent mr-3"></span>
              Frequently Asked Questions
            </h2>
            <div className="space-y-8">
              {[
                { q: "What is the Song Association Game?", a: "The Song Association Game is a popular music challenge where players must quickly think of and sing a song containing a given word. Made famous by Ellen DeGeneres, it tests your musical knowledge and memory under time pressure (typically 10 seconds per word)." },
                { q: "How do I use this for songwriting?", a: "Generate random words to overcome writer's block and spark new lyrical ideas. The words in our database are proven song-worthy, appearing in thousands of hit songs across genres. Use them as starting points for verses, choruses, or entire song concepts." },
                { q: "Can I play with friends remotely?", a: "Absolutely! Share your screen during video calls, copy and paste word lists to group chats, or simply call out the generated words. It's perfect for virtual hangouts, online parties, and remote team building." },
                { q: "Is this only for English songs?", a: "While our word database is in English, you can sing songs in any language as long as they contain the English word (or a translation of it). This makes it great for multilingual groups and discovering international music!" },
                { q: "How many words should I generate?", a: "For the Song Association Game, generate 1 word at a time for classic gameplay. For songwriting or practice sessions, try 5-10 words. For parties or longer sessions, generate 15-20 words to keep everyone engaged." },
                { q: "Is this free to use?", a: "Yes! Our random song word generator is 100% free with unlimited generations. No registration, no hidden costs, no time limits - enjoy unlimited musical fun forever." }
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
              Why Choose Our Song Word Generator?
            </h2>
            <p className="text-zinc-600 text-base leading-relaxed font-sans">
              Unlike generic word generators, our <strong>random song word generator</strong> is specifically designed with music in mind. Every word in our database of 200+ terms has been carefully selected because it frequently appears in popular songs across decades and genres. Whether you&apos;re playing the Song Association Game, writing your next hit, practicing for music trivia, or entertaining friends at a party, our tool delivers perfectly song-worthy words instantly. <span className="text-accent font-semibold">Free forever, unlimited generation, no registration required.</span>
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
