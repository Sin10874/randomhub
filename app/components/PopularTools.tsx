'use client';

import Link from 'next/link';
import { UserSquare, Building2, CaseUpper, MessageSquareText, Sparkles, Globe, Briefcase, Drama, Hash, Zap, ArrowUpRight } from 'lucide-react';

const tools = [
  {
    title: 'Pokemon Generator',
    description: 'Generate random Pokemon with advanced filtering options',
    href: '/random-pokemon-generator',
    Icon: Zap,
  },
  {
    title: 'Number Generator',
    description: 'Generate random numbers with custom range and options',
    href: '/random-number-generator',
    Icon: Hash,
  },
  {
    title: 'Charades Generator',
    description: 'Generate random charades words for parties and games',
    href: '/random-charades-generator',
    Icon: Drama,
  },
  {
    title: 'Sentence Generator',
    description: 'Generate random sentences for writing and creativity',
    href: '/random-sentence-generator',
    Icon: MessageSquareText,
  },
  {
    title: 'Adjective Generator',
    description: 'Generate descriptive adjectives for creative writing',
    href: '/random-adjective-generator',
    Icon: Sparkles,
  },
  {
    title: 'Job Generator',
    description: 'Generate random careers and occupations for characters',
    href: '/random-job-generator',
    Icon: Briefcase,
  },
  {
    title: 'Name Generator',
    description: 'Generate random names for your characters or projects',
    href: '/random-name-generator',
    Icon: UserSquare,
  },
  {
    title: 'City Generator',
    description: 'Discover random cities from around the world with detailed maps',
    href: '/random-city-generator',
    Icon: Building2,
  },
  {
    title: 'Letter Generator',
    description: 'Generate random letters for games and activities',
    href: '/random-letter-generator',
    Icon: CaseUpper,
  },
  {
    title: 'Website Generator',
    description: 'Discover interesting websites from 300+ curated sites',
    href: '/random-website-generator',
    Icon: Globe,
  },
];

export default function PopularTools() {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-6 md:mb-8 border-b border-grid pb-4">
        <h2 className="font-display text-xl md:text-2xl font-bold text-foreground tracking-tight flex items-center gap-3">
          <span className="w-3 h-3 bg-accent"></span>
          Popular Tools
        </h2>
        <span className="font-mono text-xs text-zinc-500 uppercase">Index: {tools.length}</span>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-grid border border-grid">
        {tools.map((tool, index) => {
          const { Icon } = tool;
          return (
            <Link
              key={tool.title}
              href={tool.href}
              className="group bg-background p-5 sm:p-6 hover:bg-zinc-100 transition-all relative overflow-hidden h-full flex flex-col"
            >
              <div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-4 h-4 text-accent" />
              </div>
              
              <div className="mb-4 text-zinc-400 group-hover:text-accent transition-colors">
                <Icon className="w-8 h-8" strokeWidth={1.5} />
              </div>
              
              <div className="mt-auto">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-[10px] text-zinc-400">0{index + 1}</span>
                  <div className="h-px bg-zinc-200 flex-1"></div>
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-1 group-hover:text-accent transition-colors tracking-tight">
                  {tool.title}
                </h3>
                <p className="font-mono text-xs text-zinc-500 leading-relaxed uppercase tracking-wide opacity-70 group-hover:opacity-100">
                  {tool.description.length > 50 ? tool.description.substring(0, 50) + '...' : tool.description}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
