'use client';

import Navbar from '@/app/components/Navbar';
import CharadesGeneratorPanel from '@/app/components/CharadesGeneratorPanel';

export default function CharadesGeneratorPage() {
  const siteUrl = "https://randomhub.io";
  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'RandomHub - Random Charades Generator',
    url: `${siteUrl}/random-charades-generator`,
    applicationCategory: 'GameApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description: 'Free random charades word generator for parties and games. Generate charades words by difficulty level and category. Perfect for family game nights, parties, and team building activities.',
    browserRequirements: 'Requires JavaScript',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '1240',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is a charades generator?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A charades generator is a tool that creates random words or phrases for the popular party game charades. Our generator allows you to filter by difficulty level (easy, medium, hard, really hard) and category (movies, TV shows, books, songs, actions, objects, famous people) to match your game needs.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you play charades?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'In charades, one player acts out a word or phrase without speaking while other players try to guess it. The actor can only use gestures, body movements, and facial expressions. No sounds, pointing at objects, or mouthing words are allowed. Teams take turns acting and guessing within a time limit.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are the difficulty levels?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our charades generator offers four difficulty levels: Easy (simple, well-known words like "Frozen" or "Swimming"), Medium (moderately challenging like "The Matrix" or "Cooking Dinner"), Hard (challenging words like "Schindler\'s List" or "Rock Climbing"), and Really Hard (very difficult words like "Synecdoche, New York" or "Hadron Collider").',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I choose specific categories?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! You can filter by seven categories: Movies, TV Shows, Books, Songs, Actions, Objects, and Famous People. You can also choose "All Categories" to get a random mix from all categories.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is the charades generator free?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely! RandomHub\'s charades generator is completely free with no registration, subscriptions, or hidden costs. Generate unlimited charades words for your games and parties.',
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
        {/* Charades Generator Panel */}
        <div className="mb-16">
          <CharadesGeneratorPanel />
        </div>

        {/* SEO Content Section */}
        <div className="max-w-4xl mx-auto mb-12 space-y-12">
          {/* What is Charades Generator */}
          <div className="swiss-card p-6 sm:p-8 bg-white">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-6 flex items-center text-foreground">
              <span className="w-2 h-8 bg-accent mr-3"></span>
              What is a Charades Generator?
            </h2>
            <p className="text-zinc-600 text-base leading-relaxed font-sans mb-4">
              A <strong>charades generator</strong> is an online tool that creates random words and phrases for the classic party game charades. Our <strong>random charades generator</strong> takes the guesswork out of coming up with ideas, providing instant charades words across multiple categories and difficulty levels.
            </p>
            <p className="text-zinc-600 text-base leading-relaxed font-sans">
              Whether you&apos;re hosting a family game night, planning a party, organizing team building activities, or teaching drama classes, our charades word generator delivers perfectly balanced challenges. Choose from movies, TV shows, books, songs, actions, objects, and famous people, with difficulty levels ranging from easy to really hard.
            </p>
          </div>

          {/* Use Cases */}
          <div className="swiss-card p-6 sm:p-8 bg-white">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-8 flex items-center text-foreground">
              <span className="w-2 h-8 bg-accent mr-3"></span>
              Perfect For Every Occasion
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-grid border border-grid">
              {[
                { title: "Family Game Nights", desc: "Create memorable moments with age-appropriate charades words for all family members." },
                { title: "Party Entertainment", desc: "Keep your party guests engaged with endless charades ideas for birthday parties and celebrations." },
                { title: "Team Building", desc: "Foster collaboration and communication with corporate team building charades activities." },
                { title: "Drama Classes", desc: "Help students practice acting skills and non-verbal communication with varied difficulty levels." },
                { title: "Ice Breakers", desc: "Break the ice at events and gatherings with fun, interactive charades games." },
                { title: "Virtual Games", desc: "Perfect for remote parties and virtual hangouts with friends and family online." }
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
                { icon: "🎯", title: "4 Difficulty Levels", desc: "Choose from Easy, Medium, Hard, or Really Hard to match your players' skill levels and keep the game challenging but fun." },
                { icon: "🎬", title: "7 Categories", desc: "Filter by Movies, TV Shows, Books, Songs, Actions, Objects, or Famous People for themed charades games." },
                { icon: "🔢", title: "Batch Generation", desc: "Generate 1-10 charades words at once to prepare your entire game session in seconds." },
                { icon: "👁️", title: "Reveal Control", desc: "Hide and reveal words individually so the actor can see their word without spoiling it for guessers." },
                { icon: "📋", title: "Easy Copy", desc: "Copy individual words or all generated words at once for easy sharing and reference." },
                { icon: "⚡", title: "Instant & Free", desc: "No registration, no ads, no waiting. Just instant charades words whenever you need them." }
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

          {/* How to Play */}
          <div className="swiss-card p-6 sm:p-8 bg-white">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-8 flex items-center text-foreground">
              <span className="w-2 h-8 bg-accent mr-3"></span>
              How to Play Charades
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-foreground mb-3 text-lg">Game Setup</h3>
                <ol className="space-y-2 text-zinc-600 text-sm">
                  <li className="flex gap-3">
                    <span className="font-bold text-accent min-w-[1.5rem]">1.</span>
                    <span>Divide players into two or more teams (or play individually)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-accent min-w-[1.5rem]">2.</span>
                    <span>Generate charades words using our tool with your preferred difficulty and category</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-accent min-w-[1.5rem]">3.</span>
                    <span>Set a time limit (typically 1-2 minutes per round)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-accent min-w-[1.5rem]">4.</span>
                    <span>Decide on scoring rules (1 point per correct guess is common)</span>
                  </li>
                </ol>
              </div>

              <div>
                <h3 className="font-bold text-foreground mb-3 text-lg">Playing a Round</h3>
                <ol className="space-y-2 text-zinc-600 text-sm">
                  <li className="flex gap-3">
                    <span className="font-bold text-accent min-w-[1.5rem]">1.</span>
                    <span>One player (the actor) clicks "Reveal" to see their charades word privately</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-accent min-w-[1.5rem]">2.</span>
                    <span>The actor performs the word using only gestures and body language—no speaking, mouthing words, or pointing at objects</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-accent min-w-[1.5rem]">3.</span>
                    <span>Other players shout out guesses until someone gets it right or time runs out</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-accent min-w-[1.5rem]">4.</span>
                    <span>Award points and rotate to the next team/player</span>
                  </li>
                </ol>
              </div>

              <div>
                <h3 className="font-bold text-foreground mb-3 text-lg">Common Gestures</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2 text-sm">
                    <p className="text-zinc-600"><span className="font-bold text-foreground">Movie:</span> Crank an old-fashioned movie camera</p>
                    <p className="text-zinc-600"><span className="font-bold text-foreground">TV Show:</span> Draw a rectangle (TV screen)</p>
                    <p className="text-zinc-600"><span className="font-bold text-foreground">Book:</span> Open palms like opening a book</p>
                    <p className="text-zinc-600"><span className="font-bold text-foreground">Song:</span> Pretend to sing into a microphone</p>
                  </div>
                  <div className="space-y-2 text-sm">
                    <p className="text-zinc-600"><span className="font-bold text-foreground">Number of words:</span> Hold up fingers</p>
                    <p className="text-zinc-600"><span className="font-bold text-foreground">Small word:</span> Hold thumb and index finger close together</p>
                    <p className="text-zinc-600"><span className="font-bold text-foreground">Sounds like:</span> Cup hand behind ear</p>
                    <p className="text-zinc-600"><span className="font-bold text-foreground">Correct guess:</span> Point at guesser and tap nose</p>
                  </div>
                </div>
              </div>
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
                {
                  q: "What is a charades generator?",
                  a: "A charades generator is a tool that creates random words or phrases for the popular party game charades. Our generator allows you to filter by difficulty level (easy, medium, hard, really hard) and category (movies, TV shows, books, songs, actions, objects, famous people) to match your game needs."
                },
                {
                  q: "How do you play charades?",
                  a: "In charades, one player acts out a word or phrase without speaking while other players try to guess it. The actor can only use gestures, body movements, and facial expressions. No sounds, pointing at objects, or mouthing words are allowed. Teams take turns acting and guessing within a time limit."
                },
                {
                  q: "What are the difficulty levels?",
                  a: "Our charades generator offers four difficulty levels: Easy (simple, well-known words like \"Frozen\" or \"Swimming\"), Medium (moderately challenging like \"The Matrix\" or \"Cooking Dinner\"), Hard (challenging words like \"Schindler's List\" or \"Rock Climbing\"), and Really Hard (very difficult words like \"Synecdoche, New York\" or \"Hadron Collider\")."
                },
                {
                  q: "Can I choose specific categories?",
                  a: "Yes! You can filter by seven categories: Movies, TV Shows, Books, Songs, Actions, Objects, and Famous People. You can also choose \"All Categories\" to get a random mix from all categories."
                },
                {
                  q: "Is the charades generator free?",
                  a: "Absolutely! RandomHub's charades generator is completely free with no registration, subscriptions, or hidden costs. Generate unlimited charades words for your games and parties."
                },
                {
                  q: "How many words can I generate at once?",
                  a: "You can generate anywhere from 1 to 10 charades words at once. This allows you to prepare multiple rounds in advance or generate words on-demand during gameplay."
                },
                {
                  q: "Can I use this for virtual games?",
                  a: "Yes! Our charades generator works perfectly for virtual parties and online gatherings. Simply share your screen or describe the category to remote players while one person acts out the word on video."
                },
                {
                  q: "What's the best difficulty level for kids?",
                  a: "For younger children (ages 6-10), we recommend starting with the Easy level, which includes familiar movies like \"Frozen,\" simple actions like \"Swimming,\" and well-known objects. For older kids (11+), Medium difficulty provides a good challenge."
                }
              ].map((item, i) => (
                <div key={i}>
                  <h3 className="font-bold text-foreground mb-2 text-lg">{item.q}</h3>
                  <p className="text-zinc-500 font-sans text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tips for Success */}
          <div className="swiss-card p-6 sm:p-8 bg-white">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-8 flex items-center text-foreground">
              <span className="w-2 h-8 bg-accent mr-3"></span>
              Tips for Great Charades Games
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-mono font-bold text-foreground mb-3 uppercase tracking-wider text-sm">For Actors</h3>
                <ul className="space-y-2 text-zinc-600 text-sm">
                  <li className="flex gap-2">
                    <span className="text-accent font-bold">•</span>
                    <span>Start with the category gesture (movie, book, etc.)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent font-bold">•</span>
                    <span>Show the number of words with your fingers</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent font-bold">•</span>
                    <span>Break down long phrases word by word</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent font-bold">•</span>
                    <span>Use exaggerated movements for clarity</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent font-bold">•</span>
                    <span>Try acting out what words sound like if stuck</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-mono font-bold text-foreground mb-3 uppercase tracking-wider text-sm">For Guessers</h3>
                <ul className="space-y-2 text-zinc-600 text-sm">
                  <li className="flex gap-2">
                    <span className="text-accent font-bold">•</span>
                    <span>Shout out guesses quickly—there&apos;s no penalty</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent font-bold">•</span>
                    <span>Pay attention to the category clues given first</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent font-bold">•</span>
                    <span>Listen to other teammates&apos; guesses for inspiration</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent font-bold">•</span>
                    <span>Think about different word forms (run, running, ran)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent font-bold">•</span>
                    <span>Keep guessing until the actor confirms or time runs out</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Why Choose */}
          <div className="swiss-card p-6 sm:p-8 bg-white border-l-4 border-l-accent">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-4 text-foreground">
              Why Choose Our Charades Generator?
            </h2>
            <p className="text-zinc-600 text-base leading-relaxed font-sans">
              Our <strong>random charades generator</strong> eliminates the hassle of brainstorming charades ideas. With hundreds of carefully curated words across all categories and difficulty levels, you&apos;ll never run out of fresh, engaging charades words. The reveal/hide feature ensures fair play, while our filtering system lets you customize the game for any audience—from kids&apos; birthday parties to adult game nights. <span className="text-accent font-semibold">100% free, unlimited generations, zero hassle.</span> Perfect for party planners, teachers, team leaders, and anyone who loves charades!
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
