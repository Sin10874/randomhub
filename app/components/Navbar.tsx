import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white/90 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-orange-600">
              RandomHub
            </span>
          </Link>
          <Link
            href="/privacy"
            className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
          >
            Privacy
          </Link>
        </div>
      </div>
    </nav>
  );
}
