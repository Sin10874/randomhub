'use client';

import Link from 'next/link';
import { UserSquare, Building2, CaseUpper, Sparkles } from 'lucide-react';

const tools = [
  {
    title: 'Name Generator',
    description: 'Generate random names for your characters or projects',
    href: '/tools/name-generator',
    Icon: UserSquare,
    gradient: 'from-fuchsia-500 to-purple-500',
    hoverGradient: 'hover:from-fuchsia-600 hover:to-purple-600',
  },
  {
    title: 'City Generator',
    description: 'Discover random cities from around the world',
    href: '/tools/city-generator',
    Icon: Building2,
    gradient: 'from-sky-500 to-cyan-400',
    hoverGradient: 'hover:from-sky-600 hover:to-cyan-500',
  },
  {
    title: 'Letter Generator',
    description: 'Generate random letters for games and activities',
    href: '/tools/letter-generator',
    Icon: CaseUpper,
    gradient: 'from-emerald-500 to-lime-400',
    hoverGradient: 'hover:from-emerald-600 hover:to-lime-500',
  },
  {
    title: 'Coming Soon',
    description: 'More random tools coming soon!',
    href: '#',
    Icon: Sparkles,
    gradient: 'from-indigo-400 to-violet-500',
    hoverGradient: 'hover:from-indigo-500 hover:to-violet-600',
  },
];

export default function PopularTools() {
  return (
    <div className="w-full max-w-5xl mx-auto mt-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-white drop-shadow-lg">
        Popular Tools
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {tools.map((tool) => {
          const { Icon } = tool;
          return (
            <Link
              key={tool.title}
              href={tool.href}
              className={`group bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                tool.href === '#' ? 'cursor-not-allowed opacity-75' : ''
              }`}
              onClick={(e) => tool.href === '#' && e.preventDefault()}
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${tool.gradient} ${tool.hoverGradient} rounded-2xl flex items-center justify-center mb-4 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:rotate-3`}
              >
                <Icon className="w-8 h-8 text-white drop-shadow-md" strokeWidth={2.5} />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
                {tool.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">{tool.description}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
