import Navbar from '../../components/Navbar';
import Link from 'next/link';

export default function CityGeneratorPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 text-center">
          <div className="text-6xl mb-6">🏙️</div>
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Random City Generator
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            This tool is coming soon! Check back later for random city generation.
          </p>
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all"
          >
            Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}
