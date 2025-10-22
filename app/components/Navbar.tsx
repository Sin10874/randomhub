import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white/90 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">R</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              RandomHub
            </span>
          </Link>
          <Link
            href="/privacy"
            className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
          >
            Privacy
          </Link>
        </div>
      </div>
    </nav>
  );
}
