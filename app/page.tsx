import Navbar from './components/Navbar';
import WordGeneratorPanel from './components/WordGeneratorPanel';
import PopularTools from './components/PopularTools';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 lg:py-12">
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
      <footer className="bg-white/10 backdrop-blur-sm py-6 mt-auto border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/80 text-sm">
            © 2025 RandomHub. Built with Next.js & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}
