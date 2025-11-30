'use client';

import { useState } from 'react';
import { websites } from '@/app/data/websites';
import { Loader2, ExternalLink, Globe } from 'lucide-react';

export default function WebsiteGeneratorPanel() {
  const [isLoading, setIsLoading] = useState(false);

  const handleGo = () => {
    setIsLoading(true);

    setTimeout(() => {
      const randomWebsite = websites[Math.floor(Math.random() * websites.length)];
      window.open(randomWebsite.url, '_blank', 'noopener,noreferrer');
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="swiss-card bg-white p-6 sm:p-12 md:p-16 text-center relative overflow-hidden">
         {/* Background Decor */}
        <div className="absolute inset-0 pointer-events-none opacity-5" style={{ 
          backgroundImage: 'radial-gradient(circle at center, #000 1px, transparent 1px)', 
          backgroundSize: '30px 30px' 
        }}></div>

        <div className="relative z-10">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-zinc-50 border border-zinc-200 mb-8">
             <Globe className="w-10 h-10 text-zinc-400" strokeWidth={1.5} />
          </div>

          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 uppercase tracking-tight">
            Random Website<br />Launcher
          </h1>
          
          <p className="text-zinc-500 font-mono text-sm sm:text-base mb-12 max-w-lg mx-auto uppercase tracking-widest">
            Initiate jump to one of {websites.length}+ curated destinations in our database.
          </p>

          <button
            onClick={handleGo}
            disabled={isLoading}
            className="group relative inline-flex items-center justify-center gap-4 px-12 py-6 bg-foreground hover:bg-zinc-800 text-white transition-all shadow-lg hover:shadow-xl disabled:opacity-80 disabled:cursor-not-allowed overflow-hidden min-w-[280px]"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-6 h-6 animate-spin" />
                <span className="font-mono font-bold text-lg uppercase tracking-widest">Initiating...</span>
              </>
            ) : (
              <>
                <span className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out mix-blend-screen"></span>
                <span className="relative z-10 flex items-center gap-3">
                  <span className="font-mono font-bold text-xl uppercase tracking-widest">Launch_Site</span>
                  <ExternalLink className="w-5 h-5" />
                </span>
              </>
            )}
          </button>
          
          <div className="mt-8">
             <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
               Warning: Content is external to RandomHub System
             </p>
          </div>
        </div>
      </div>
    </div>
  );
}
