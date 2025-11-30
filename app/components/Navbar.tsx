import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="border-b border-grid bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center group">
            <div className="w-8 h-8 bg-foreground text-white flex items-center justify-center mr-3 font-mono font-bold text-lg group-hover:bg-accent transition-colors">
              R
            </div>
            <span className="text-xl font-bold text-foreground tracking-tight font-display group-hover:text-accent transition-colors">
              RandomHub
            </span>
            <span className="ml-2 px-1.5 py-0.5 text-[10px] border border-zinc-200 bg-white text-zinc-500 font-mono hidden sm:inline-block">
              BETA
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
