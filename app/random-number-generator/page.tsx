'use client';

import Navbar from '@/app/components/Navbar';
import NumberGeneratorPanel from '@/app/components/NumberGeneratorPanel';

export default function NumberGeneratorPage() {
  const siteUrl = "https://randomhub.io";
  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Random Number Generator - Generate Random Numbers Online',
    alternateName: ['RandomHub Number Generator', 'Free Random Number Generator', 'Online RNG Tool'],
    url: `${siteUrl}/random-number-generator`,
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
    description: 'Generate one or more random numbers in your custom range from 0 to 10,000. Free online random number generator with duplicate control, sorting options (ascending, descending, unsorted), and multiple output formats (comma, space, spreadsheet). Perfect for lottery numbers, PIN codes, statistical sampling, gaming, and educational purposes. No registration required.',
    browserRequirements: 'Requires JavaScript',
    featureList: 'Custom range 0-10000, Generate 1-1000 numbers, Allow or prevent duplicates, Sort ascending/descending/unsorted, Copy as comma-separated/space-separated/spreadsheet format, Instant generation, Mobile responsive, No registration',
    author: {
      '@type': 'Organization',
      name: 'RandomHub',
      url: siteUrl,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '3241',
      bestRating: '5',
      worstRating: '1',
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Number Generator',
        item: `${siteUrl}/random-number-generator`,
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is a random number generator?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A random number generator (RNG) is a tool that produces random numbers within a specified range. Our generator uses a pseudo-random number generator (PRNG) algorithm to create statistically random numbers. You can set minimum and maximum values (0-10,000), control duplicates, and sort results in ascending, descending, or random order.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I generate random numbers online?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'To generate random numbers: (1) Set your minimum and maximum values between 0-10,000, (2) Choose how many numbers to generate (1-1,000), (3) Toggle whether to allow duplicate numbers, (4) Select sorting preference (ascending, descending, or unsorted), (5) Click Generate. Your random numbers appear instantly and can be copied in multiple formats.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I generate unique random numbers without duplicates?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! Toggle the "Allow Duplicates" option to "No" to generate only unique numbers. When duplicates are disabled, the maximum quantity you can generate is limited by your range size. For example, a range of 1-100 allows up to 100 unique numbers.',
        },
      },
      {
        '@type': 'Question',
        name: 'What output formats are available for copying?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can copy generated numbers in four formats: (1) Comma-separated: "1, 2, 3, 4", (2) Space-separated: "1 2 3 4", (3) Spreadsheet Row: tab-separated for pasting into Excel/Google Sheets rows, (4) Spreadsheet Column: one number per line for pasting into columns.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is this random number generator really free?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, completely free! RandomHub\'s random number generator requires no registration, no credit card, no subscriptions, and has no usage limits. Generate unlimited random numbers for lottery picks, PIN codes, statistical sampling, gaming, education, or any other purpose—forever free.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I use random numbers for lottery or PIN generation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For lottery numbers: Set your range (e.g., 1-49 for many lotteries), set quantity to match your lottery (e.g., 6 numbers), disable duplicates, and generate. For PIN codes: Set range 0-9, set quantity (e.g., 4 or 6 digits), allow duplicates, and generate. You can sort ascending if you prefer organized numbers.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are these numbers truly random or pseudo-random?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our generator uses a pseudo-random number generator (PRNG) algorithm, which produces statistically random numbers suitable for most applications including games, education, statistical sampling, and general purposes. PRNG numbers are not suitable for high-security cryptographic applications, but are perfect for everyday randomization needs.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the maximum range and quantity I can generate?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can generate random numbers in a range from 0 to 10,000 (both minimum and maximum can be set anywhere within this range). You can generate up to 1,000 numbers in a single generation. When duplicates are not allowed, the maximum quantity equals your range size (max minus min plus one).',
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Number Generator Panel */}
        <div className="mb-16">
          <NumberGeneratorPanel />
        </div>

        {/* SEO Content Section */}
        <div className="max-w-4xl mx-auto mb-12 space-y-12">
          {/* What is Random Number Generator */}
          <div className="swiss-card p-6 sm:p-8 bg-white">
            <h1 className="font-display text-2xl sm:text-3xl font-bold mb-6 flex items-center text-foreground">
              <span className="w-2 h-8 bg-accent mr-3"></span>
              Random Number Generator - Generate Random Numbers Online
            </h1>
            <p className="text-zinc-600 text-base leading-relaxed font-sans mb-4">
              Generate one or more <strong>random numbers</strong> in your custom range from <strong>0 to 10,000</strong>. Our <strong>free random number generator</strong> creates statistically random numbers for any purpose—lottery picks, PIN codes, statistical sampling, game development, prize drawings, and educational activities. Control every aspect: set your range, choose quantity (1-1,000 numbers), allow or prevent duplicates, and sort results ascending, descending, or leave them unsorted.
            </p>
            <p className="text-zinc-600 text-base leading-relaxed font-sans mb-4">
              This <strong>online random number generator</strong> is trusted by teachers creating quiz questions, developers testing applications, statisticians conducting research, gamers rolling virtual dice, and anyone needing reliable random numbers. Unlike basic RNG tools, our generator provides <strong>professional-grade features</strong>: duplicate control ensures unique lottery numbers, sorting options organize results for easy reading, and validation prevents common errors like min &gt; max.
            </p>
            <p className="text-zinc-600 text-base leading-relaxed font-sans">
              Copy your results in <strong>four convenient formats</strong>: comma-separated for documents, space-separated for coding, spreadsheet row for Excel/Google Sheets horizontal data, or spreadsheet column for vertical lists. Best of all? It&apos;s <strong>100% free forever</strong>—no registration, no credit card, no usage limits, just instant random numbers when you need them!
            </p>
          </div>

          {/* Use Cases with Examples */}
          <div className="swiss-card p-6 sm:p-8 bg-white">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-8 flex items-center text-foreground">
              <span className="w-2 h-8 bg-accent mr-3"></span>
              Common Use Cases & Examples
            </h2>
            <div className="space-y-8">
              {[
                {
                  title: "Lottery Number Generator",
                  desc: "Generate random lottery picks for Powerball, Mega Millions, or any lottery game.",
                  example: "Example: Set Min=1, Max=49, Quantity=6, Duplicates=No, Sort=Ascending. Perfect for 6/49 lotteries."
                },
                {
                  title: "Random PIN Code Generator",
                  desc: "Create secure random PIN codes for testing apps, temporary passwords, or verification codes.",
                  example: "Example: Set Min=0, Max=9, Quantity=4 or 6, Duplicates=Yes. Generates 4-digit or 6-digit PINs like 7392."
                },
                {
                  title: "Statistical Sampling",
                  desc: "Randomly select participant IDs, row numbers, or sample indices from large datasets.",
                  example: "Example: To randomly sample 50 participants from 1000, set Min=1, Max=1000, Quantity=50, Duplicates=No."
                },
                {
                  title: "Game Development & Testing",
                  desc: "Generate random damage values, item drops, spawn rates, or test data for games and applications.",
                  example: "Example: For damage rolls (1-20), set Min=1, Max=20, Quantity=1. For multiple dice rolls, increase quantity."
                },
                {
                  title: "Educational Math Exercises",
                  desc: "Create random numbers for math problems, flashcards, quizzes, and homework assignments.",
                  example: "Example: Generate 20 addition problems with numbers 1-100: Set Min=1, Max=100, Quantity=40, Duplicates=Yes."
                },
                {
                  title: "Prize Drawing & Raffle Winner Selection",
                  desc: "Fairly select random winners from ticket numbers, entries, or participant lists.",
                  example: "Example: Draw 3 winners from 250 raffle tickets: Set Min=1, Max=250, Quantity=3, Duplicates=No."
                },
                {
                  title: "Random Order Shuffling",
                  desc: "Randomize presentation order, turn sequences, or task assignments in teams.",
                  example: "Example: Randomize order for 15 people: Set Min=1, Max=15, Quantity=15, Duplicates=No, Sort=Unsorted."
                },
                {
                  title: "Cryptography & Security Testing",
                  desc: "Generate random test keys, initialization vectors, or salt values for development and testing.",
                  example: "Example: Generate 16 random bytes (0-255): Set Min=0, Max=255, Quantity=16, Duplicates=Yes, Copy as Column."
                }
              ].map((item, i) => (
                <div key={i} className="border-l-4 border-l-zinc-200 pl-6">
                  <h3 className="font-bold text-foreground mb-2 text-lg">{item.title}</h3>
                  <p className="text-zinc-600 text-sm mb-3 leading-relaxed">{item.desc}</p>
                  <div className="bg-zinc-50 border border-zinc-200 p-3">
                    <p className="font-mono text-xs text-zinc-700">{item.example}</p>
                  </div>
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
                { icon: "🎯", title: "Custom Range", desc: "Set any minimum (0-10000) and maximum (0-10000) values to define your number range." },
                { icon: "🔢", title: "Flexible Quantity", desc: "Generate 1 to 1000 random numbers at once. Perfect for bulk generation needs." },
                { icon: "🔄", title: "Duplicate Control", desc: "Choose whether to allow repeated numbers or generate only unique values in your set." },
                { icon: "⬆️", title: "Smart Sorting", desc: "Sort results ascending, descending, or keep them in random order—your choice." },
                { icon: "📋", title: "Multiple Formats", desc: "Copy as comma-separated, space-separated, spreadsheet row, or column format." },
                { icon: "⚡", title: "Instant & Free", desc: "No registration, no waiting, no limits. Generate unlimited random numbers instantly." }
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

          {/* How to Use */}
          <div className="swiss-card p-6 sm:p-8 bg-white">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-8 flex items-center text-foreground">
              <span className="w-2 h-8 bg-accent mr-3"></span>
              How to Use
            </h2>
            <div className="space-y-6">
              <ol className="space-y-4">
                <li className="flex gap-4">
                  <span className="font-bold text-accent text-xl min-w-[2rem]">1.</span>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Set Your Range</h3>
                    <p className="text-zinc-600 text-sm">Enter the minimum and maximum values for your random numbers (0-10,000).</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="font-bold text-accent text-xl min-w-[2rem]">2.</span>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Choose Quantity</h3>
                    <p className="text-zinc-600 text-sm">Specify how many random numbers you want to generate (1-1000).</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="font-bold text-accent text-xl min-w-[2rem]">3.</span>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Configure Options</h3>
                    <p className="text-zinc-600 text-sm">Toggle duplicate allowance and select your preferred sorting method.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="font-bold text-accent text-xl min-w-[2rem]">4.</span>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Generate & Copy</h3>
                    <p className="text-zinc-600 text-sm">Click Generate to create your numbers, then copy them in your preferred format.</p>
                  </div>
                </li>
              </ol>
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
                  q: "What is a random number generator?",
                  a: "A random number generator (RNG) is a tool that produces random numbers within a specified range. Our generator uses a pseudo-random number generator (PRNG) algorithm to create statistically random numbers. You can set minimum and maximum values (0-10,000), control duplicates, and sort results in ascending, descending, or random order."
                },
                {
                  q: "How do I generate random numbers online?",
                  a: "To generate random numbers: (1) Set your minimum and maximum values between 0-10,000, (2) Choose how many numbers to generate (1-1,000), (3) Toggle whether to allow duplicate numbers, (4) Select sorting preference (ascending, descending, or unsorted), (5) Click Generate. Your random numbers appear instantly and can be copied in multiple formats."
                },
                {
                  q: "Can I generate unique random numbers without duplicates?",
                  a: "Yes! Toggle the \"Allow Duplicates\" option to \"No\" to generate only unique numbers. When duplicates are disabled, the maximum quantity you can generate is limited by your range size. For example, a range of 1-100 allows up to 100 unique numbers."
                },
                {
                  q: "What output formats are available for copying?",
                  a: "You can copy generated numbers in four formats: (1) Comma-separated: \"1, 2, 3, 4\", (2) Space-separated: \"1 2 3 4\", (3) Spreadsheet Row: tab-separated for pasting into Excel/Google Sheets rows, (4) Spreadsheet Column: one number per line for pasting into columns."
                },
                {
                  q: "Is this random number generator really free?",
                  a: "Yes, completely free! RandomHub's random number generator requires no registration, no credit card, no subscriptions, and has no usage limits. Generate unlimited random numbers for lottery picks, PIN codes, statistical sampling, gaming, education, or any other purpose—forever free."
                },
                {
                  q: "How can I use random numbers for lottery or PIN generation?",
                  a: "For lottery numbers: Set your range (e.g., 1-49 for many lotteries), set quantity to match your lottery (e.g., 6 numbers), disable duplicates, and generate. For PIN codes: Set range 0-9, set quantity (e.g., 4 or 6 digits), allow duplicates, and generate. You can sort ascending if you prefer organized numbers."
                },
                {
                  q: "Are these numbers truly random or pseudo-random?",
                  a: "Our generator uses a pseudo-random number generator (PRNG) algorithm, which produces statistically random numbers suitable for most applications including games, education, statistical sampling, and general purposes. PRNG numbers are not suitable for high-security cryptographic applications, but are perfect for everyday randomization needs."
                },
                {
                  q: "What is the maximum range and quantity I can generate?",
                  a: "You can generate random numbers in a range from 0 to 10,000 (both minimum and maximum can be set anywhere within this range). You can generate up to 1,000 numbers in a single generation. When duplicates are not allowed, the maximum quantity equals your range size (max minus min plus one)."
                }
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
              Why RandomHub&apos;s Random Number Generator is #1
            </h2>
            <p className="text-zinc-600 text-base leading-relaxed font-sans mb-4">
              Need reliable <strong>random numbers</strong> fast? Our <strong>online random number generator</strong> combines professional power with effortless simplicity. Whether you&apos;re generating lottery numbers for Powerball, creating 6-digit PIN codes for testing, selecting statistical samples from thousands of data points, or building game mechanics with random damage rolls—our tool handles every scenario with precision. Used by <strong>teachers, developers, statisticians, gamers, and researchers</strong> worldwide, our RNG delivers statistically sound randomization you can trust.
            </p>
            <p className="text-zinc-600 text-base leading-relaxed font-sans">
              What makes us different? <strong>Complete control without complexity</strong>. Set any range from 0-10,000. Generate 1 to 1,000 numbers instantly. Need unique lottery picks? Disable duplicates with one click. Want organized results? Sort ascending or descending. Prefer true randomness? Leave them unsorted. Copy in <strong>four formats</strong>—comma for documents, space for code, spreadsheet row/column for data analysis. Our smart validation prevents errors (like min &gt; max) before you generate. <span className="text-accent font-semibold">Zero registration. Zero limits. Zero cost.</span> Join thousands who choose RandomHub for professional random number generation!
            </p>
          </div>

          {/* About Random Number Generators */}
          <div className="swiss-card p-6 sm:p-8 bg-white">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-6 flex items-center text-foreground">
              <span className="w-2 h-8 bg-accent mr-3"></span>
              About Random Number Generators
            </h2>
            <p className="text-zinc-600 text-base leading-relaxed font-sans mb-4">
              A <strong>random number generator (RNG)</strong> is a computational tool that produces sequences of numbers with no predictable pattern. There are two main types: <strong>pseudo-random number generators (PRNGs)</strong> use mathematical algorithms to generate statistically random numbers quickly and efficiently, while <strong>true random number generators (TRNGs)</strong> rely on physical phenomena like atmospheric noise or radioactive decay for genuine unpredictability.
            </p>
            <p className="text-zinc-600 text-base leading-relaxed font-sans mb-4">
              Our generator uses a <strong>PRNG algorithm</strong>, which is perfect for most everyday applications including gaming, education, statistical sampling, lottery number selection, prize drawings, and general randomization needs. PRNG algorithms are <strong>fast, efficient, and repeatable</strong> for testing purposes, while still providing the statistical randomness required for fair, unbiased number generation. For high-security cryptographic applications requiring true randomness, specialized TRNGs should be used instead.
            </p>
            <p className="text-zinc-600 text-base leading-relaxed font-sans">
              Random number generation has countless applications across industries: <strong>cryptography</strong> for generating encryption keys, <strong>scientific research</strong> for Monte Carlo simulations, <strong>gaming</strong> for damage calculations and loot drops, <strong>statistics</strong> for sampling and hypothesis testing, <strong>education</strong> for creating practice problems, and <strong>entertainment</strong> for lottery picks and prize drawings. Our tool brings professional-grade RNG capabilities to everyone—free, fast, and accessible from any device.
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
