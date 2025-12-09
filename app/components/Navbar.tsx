import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="border-b border-grid bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center group">
            <div className="w-8 h-8 relative mr-3 group-hover:scale-110 transition-transform">
              <Image
                src="/favicon-32x32.png"
                alt="RandomHub Logo"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <span className="text-xl font-bold text-foreground tracking-tight font-display group-hover:text-accent transition-colors">
              RandomHub
            </span>
          </Link>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-sm font-mono text-zinc-500 hover:text-foreground transition-colors uppercase tracking-wider"
            >
              [ Privacy ]
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
