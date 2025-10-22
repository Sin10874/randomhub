import Navbar from './components/Navbar';
import WordGeneratorPanel from './components/WordGeneratorPanel';
import PopularTools from './components/PopularTools';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Hero Section */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white drop-shadow-2xl mb-4 tracking-tight">
            Welcome to RandomHub
          </h1>
          <p className="text-lg sm:text-xl text-white/90 drop-shadow-lg max-w-2xl mx-auto">
            Generate random words with powerful filters and explore more random tools
          </p>
        </div>

        {/* Word Generator Panel */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <WordGeneratorPanel />
        </div>

        {/* Popular Tools Section */}
        <div className="mb-8">
          <PopularTools />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white/10 backdrop-blur-sm py-6 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/80 text-sm">
            © 2025 RandomHub. Built with Next.js & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}
