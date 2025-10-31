import Navbar from '@/app/components/Navbar';
import LetterGeneratorPanel from '@/app/components/LetterGeneratorPanel';
import type { Metadata } from "next";

const siteUrl = "https://randomhub.io";

export const metadata: Metadata = {
  title: "Random Letter Generator - Generate Random Letters | RandomHub",
  description: "Generate random letters instantly. Free letter generator with uppercase, lowercase, and mixed options. Perfect for games, education, alphabet learning, and creative activities.",
  keywords: "random letter generator, letter picker, alphabet generator, random alphabet, letter randomizer, educational tool, letter games",
  alternates: {
    canonical: `${siteUrl}/random-letter-generator`,
  },
  openGraph: {
    title: "Random Letter Generator - Generate Random Letters",
    description: "Generate random letters with customizable options. Free forever!",
    url: `${siteUrl}/random-letter-generator`,
    type: "website",
    siteName: "RandomHub",
    images: [
      {
        url: `${siteUrl}/og-image-letter-generator.png`,
        width: 1200,
        height: 630,
        alt: "Random Letter Generator - RandomHub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Random Letter Generator",
    description: "Generate random letters with customizable options. Free forever!",
    images: [`${siteUrl}/og-image-letter-generator.png`],
  },
};

export default function LetterGeneratorPage() {
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
    <div className="min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 lg:py-12">
        <LetterGeneratorPanel />

        {/* SEO Content Section */}
        <div className="max-w-4xl mx-auto mb-12 space-y-8 mt-12 sm:mt-16">
          {/* What is Random Letter Generator */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
              What is Random Letter Generator?
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              <strong>Random Letter Generator</strong> is a free tool that instantly generates random letters from the alphabet. Whether you need uppercase letters, lowercase letters, or a mix of both, our generator provides quick and easy randomization. Perfect for educational activities, word games, creative exercises, and decision-making when you need a random letter.
            </p>
          </div>

          {/* Who is it for */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
              Who is Random Letter Generator for?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex gap-3">
                <span className="text-2xl">👨‍🏫</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Teachers & Educators</h3>
                  <p className="text-sm text-gray-600">Create alphabet learning activities and classroom games</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl">👶</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Parents</h3>
                  <p className="text-sm text-gray-600">Help children learn the alphabet through interactive play</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl">🎮</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Game Players</h3>
                  <p className="text-sm text-gray-600">Use for Scrabble practice, Boggle, and word formation games</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl">✍️</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Writers</h3>
                  <p className="text-sm text-gray-600">Generate starting letters for creative writing prompts</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl">🎲</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Decision Makers</h3>
                  <p className="text-sm text-gray-600">Use letters for random selection and fair choices</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl">🎨</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Designers & Artists</h3>
                  <p className="text-sm text-gray-600">Generate random letters for typography and design projects</p>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
              Why Choose Our Letter Generator?
            </h2>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <span className="text-2xl flex-shrink-0">⚡</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1 text-lg">Instant Results</h3>
                  <p className="text-gray-600">Generate random letters immediately with a single click - no delays or waiting</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-2xl flex-shrink-0">🔤</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1 text-lg">Case Options</h3>
                  <p className="text-gray-600">Choose uppercase, lowercase, or mixed case to suit your specific needs</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-2xl flex-shrink-0">🎯</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1 text-lg">Bulk Generation</h3>
                  <p className="text-gray-600">Generate multiple random letters at once for games and activities</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-2xl flex-shrink-0">📱</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1 text-lg">Mobile Friendly</h3>
                  <p className="text-gray-600">Works perfectly on all devices - phones, tablets, and computers</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-2xl flex-shrink-0">🎁</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1 text-lg">Forever Free</h3>
                  <p className="text-gray-600">No registration, no limits, no cost - completely free to use anytime</p>
                </div>
              </div>
            </div>
          </div>

          {/* How to Use */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
              How to Use Random Letter Generator
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1 text-lg">Choose Your Options</h3>
                  <p className="text-gray-600">Select how many letters you want and choose between uppercase, lowercase, or mixed case.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1 text-lg">Generate Letters</h3>
                  <p className="text-gray-600">Click the generate button to instantly get your random letters.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1 text-lg">Copy & Use</h3>
                  <p className="text-gray-600">Copy the letters and use them in your games, activities, or projects.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Popular Use Cases */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
              Popular Use Cases
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 border border-green-100">
                <h3 className="font-semibold text-gray-800 mb-2">🎓 Alphabet Learning</h3>
                <p className="text-sm text-gray-600">Help children recognize and practice letters in a fun, interactive way.</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-4 border border-blue-100">
                <h3 className="font-semibold text-gray-800 mb-2">🎮 Word Games</h3>
                <p className="text-sm text-gray-600">Generate starting letters for Scrabble, Boggle, or word-building challenges.</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-4 border border-purple-100">
                <h3 className="font-semibold text-gray-800 mb-2">✍️ Writing Prompts</h3>
                <p className="text-sm text-gray-600">Use random letters as starting points for creative writing exercises.</p>
              </div>
              <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-4 border border-pink-100">
                <h3 className="font-semibold text-gray-800 mb-2">🏫 Classroom Activities</h3>
                <p className="text-sm text-gray-600">Create spelling tests, phonics practice, and alphabet games.</p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-4 border border-orange-100">
                <h3 className="font-semibold text-gray-800 mb-2">🎲 Decision Making</h3>
                <p className="text-sm text-gray-600">Use letters for random selection when you need a fair choice.</p>
              </div>
              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-4 border border-indigo-100">
                <h3 className="font-semibold text-gray-800 mb-2">🎨 Design Projects</h3>
                <p className="text-sm text-gray-600">Generate letters for typography practice and design mockups.</p>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-5">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2 text-lg">How does the random letter generator work?</h3>
                <p className="text-gray-600">Our generator uses a true randomization algorithm to select letters from the English alphabet (A-Z). Each letter has an equal chance of being selected.</p>
              </div>
              <div className="border-t border-gray-200 pt-5">
                <h3 className="font-semibold text-gray-800 mb-2 text-lg">Can I generate multiple letters at once?</h3>
                <p className="text-gray-600">Yes! You can choose to generate anywhere from 1 to multiple letters in a single generation.</p>
              </div>
              <div className="border-t border-gray-200 pt-5">
                <h3 className="font-semibold text-gray-800 mb-2 text-lg">What&apos;s the difference between uppercase and lowercase?</h3>
                <p className="text-gray-600">Uppercase generates capital letters (A, B, C), lowercase generates small letters (a, b, c), and mixed randomly combines both.</p>
              </div>
              <div className="border-t border-gray-200 pt-5">
                <h3 className="font-semibold text-gray-800 mb-2 text-lg">Is the letter generation truly random?</h3>
                <p className="text-gray-600">Yes! We use JavaScript&apos;s cryptographically secure random number generator to ensure fair and unpredictable letter selection.</p>
              </div>
              <div className="border-t border-gray-200 pt-5">
                <h3 className="font-semibold text-gray-800 mb-2 text-lg">Can I use this for educational purposes?</h3>
                <p className="text-gray-600">Absolutely! Our letter generator is perfect for classroom activities, alphabet learning, phonics practice, and educational games.</p>
              </div>
              <div className="border-t border-gray-200 pt-5">
                <h3 className="font-semibold text-gray-800 mb-2 text-lg">Is the Random Letter Generator free?</h3>
                <p className="text-gray-600">Yes! It&apos;s completely free with no registration required. Generate unlimited letters anytime, anywhere.</p>
              </div>
              <div className="border-t border-gray-200 pt-5">
                <h3 className="font-semibold text-gray-800 mb-2 text-lg">Does it work on mobile devices?</h3>
                <p className="text-gray-600">Yes! Our generator is fully responsive and works perfectly on smartphones, tablets, and desktop computers.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white/10 backdrop-blur-sm py-6 mt-auto border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/80 text-sm">
            © 2025 RandomHub
          </p>
        </div>
      </footer>
    </div>
  );
}

