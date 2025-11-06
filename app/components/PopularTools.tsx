'use client';

import Link from 'next/link';
import { UserSquare, Building2, CaseUpper, MessageSquareText } from 'lucide-react';

const tools = [
  {
    title: 'Random Sentence Generator',
    description: 'Generate random sentences for writing and creativity',
    href: '/random-sentence-generator',
    Icon: MessageSquareText,
    gradient: 'from-orange-500 to-pink-500',
    hoverGradient: 'hover:from-orange-600 hover:to-pink-600',
  },
  {
    title: 'Random Name Generator',
    description: 'Generate random names for your characters or projects',
    href: '/random-name-generator',
    Icon: UserSquare,
    gradient: 'from-fuchsia-500 to-purple-500',
    hoverGradient: 'hover:from-fuchsia-600 hover:to-purple-600',
  },
  {
    title: 'Random City Generator',
    description: 'Discover random cities from around the world',
    href: '/random-city-generator',
    Icon: Building2,
    gradient: 'from-sky-500 to-cyan-400',
    hoverGradient: 'hover:from-sky-600 hover:to-cyan-500',
  },
  {
    title: 'Random Letter Generator',
    description: 'Generate random letters for games and activities',
    href: '/random-letter-generator',
    Icon: CaseUpper,
    gradient: 'from-emerald-500 to-lime-400',
    hoverGradient: 'hover:from-emerald-600 hover:to-lime-500',
  },
];

export default function PopularTools() {
  return (
    <div className="w-full max-w-5xl mx-auto mt-12">
      <h2 className="font-display text-3xl font-bold text-center mb-8 text-white drop-shadow-lg tracking-tight">
        Trending Tools
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => {
          const { Icon } = tool;
          return (
            <Link
              key={tool.title}
              href={tool.href}
              className="group bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Mobile: 左右布局 | Desktop: 上下布局 */}
              <div className="flex sm:flex-col items-center sm:items-start gap-4 sm:gap-0">
                <div
                  className={`w-16 h-16 flex-shrink-0 bg-gradient-to-br ${tool.gradient} ${tool.hoverGradient} rounded-2xl flex items-center justify-center sm:mb-4 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:rotate-3`}
                >
                  <Icon className="w-8 h-8 text-white drop-shadow-md" strokeWidth={2.5} />
                </div>
                <div className="flex-1 sm:w-full">
                  <h3 className="font-display text-lg font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors tracking-tight">
                    {tool.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{tool.description}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
