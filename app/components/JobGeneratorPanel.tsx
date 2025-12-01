'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Select from '@/app/components/ui/Select';
import { RotateCw, Copy, Check, Sparkles, Settings2, Briefcase } from 'lucide-react';

interface Job {
  job: string;
  category: string;
}

const CATEGORIES = [
  'All Categories',
  'Business & Finance',
  'Technology & IT',
  'Education',
  'Healthcare & Medical',
  'Law & Legal',
  'Public Safety',
  'Engineering & Construction',
  'Media & Communications',
  'Hospitality & Food Service',
  'Arts & Design',
  'Entertainment',
  'Science & Research',
  'Transportation',
  'Sports & Fitness',
  'Sales & Real Estate',
  'Administration & Office',
  'Agriculture & Environment',
  'Personal Services',
  'Skilled Trades',
  'Government & Politics',
  'Specialized & Unique'
];

export default function JobGeneratorPanel() {
  const [category, setCategory] = useState('All Categories');
  const [count, setCount] = useState(1);
  const [generatedJobs, setGeneratedJobs] = useState<Job[]>([]);
  const [allJobs, setAllJobs] = useState<Job[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const outputRef = useRef<HTMLDivElement>(null);

  // Load jobs data
  useEffect(() => {
    fetch('/data/jobs.json')
      .then(response => response.json())
      .then(data => {
        setAllJobs(data);
        setIsLoading(false);
      })
      .catch(err => {
        console.error('Failed to load jobs:', err);
        setError('Failed to load jobs data');
        setIsLoading(false);
      });
  }, []);

  const handleGenerate = useCallback(() => {
    if (allJobs.length === 0) return;

    setError(null);
    setIsGenerating(true);

    setTimeout(() => {
      const filteredJobs = category === 'All Categories'
        ? allJobs
        : allJobs.filter(job => job.category === category);

      if (filteredJobs.length === 0) {
        setError('NO_MATCH_FOUND');
        setGeneratedJobs([]);
      } else {
        const selected: Job[] = [];
        const available = [...filteredJobs];
        const targetCount = Math.min(count, available.length);

        for (let i = 0; i < targetCount; i++) {
          const randomIndex = Math.floor(Math.random() * available.length);
          selected.push(available[randomIndex]);
          available.splice(randomIndex, 1);
        }

        setGeneratedJobs(selected);
      }
      setIsGenerating(false);
    }, 300);
  }, [category, count, allJobs]);

  const handleCopy = () => {
    if (generatedJobs.length > 0) {
      const text = generatedJobs.map(j => j.job).join('\n');
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && !isGenerating && !isLoading) {
        handleGenerate();
      }
    };
    window.addEventListener('keypress', handleKeyPress);
    return () => window.removeEventListener('keypress', handleKeyPress);
  }, [handleGenerate, isGenerating, isLoading]);

  // Scroll to output when results are generated
  useEffect(() => {
    if (generatedJobs.length > 0 && outputRef.current) {
      setTimeout(() => {
        outputRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 300);
    }
  }, [generatedJobs]);

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="text-center mb-8 md:mb-12">
        <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 uppercase tracking-tight">
          Job<br className="sm:hidden" /> Generator
        </h1>
        <p className="text-zinc-500 font-mono text-sm uppercase tracking-widest">
          Career Database Access // v1.0
        </p>
      </div>

      <div className="swiss-card bg-panel border-grid shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[400px] lg:min-h-[500px]">
          
          {/* Settings Column */}
          <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-grid p-4 sm:p-6 lg:p-8 bg-white flex flex-col">
            <div className="flex items-center gap-2 mb-8 text-accent font-mono text-xs uppercase tracking-widest">
              <Settings2 className="w-4 h-4" />
              <span>Configuration</span>
            </div>

            <div className="space-y-6 flex-1">
              {/* Category */}
              <div>
                <label className="block text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">
                  Industry Sector
                </label>
                <Select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full"
                  disabled={isLoading}
                >
                  {CATEGORIES.map(cat => (
                    <option key={cat} value={cat}>{cat.toUpperCase()}</option>
                  ))}
                </Select>
              </div>

              {/* Count */}
              <div>
                <label className="block text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">
                  Position Count
                </label>
                <input
                  type="number"
                  min="1"
                  max="20"
                  value={count}
                  onChange={(e) => setCount(Math.min(20, Math.max(1, parseInt(e.target.value) || 1)))}
                  className="w-full bg-white border border-zinc-300 p-3 text-center font-mono text-foreground focus:border-accent focus:ring-1 focus:ring-accent rounded-none"
                  disabled={isLoading}
                />
                <p className="text-[10px] font-mono text-zinc-400 mt-2 text-right uppercase tracking-wider">Max: 20</p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-100">
              <button
                onClick={handleGenerate}
                disabled={isGenerating || isLoading}
                className="w-full bg-foreground hover:bg-zinc-800 text-white font-mono font-bold py-4 px-6 uppercase tracking-wider transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 rounded-none relative overflow-hidden group"
              >
                {isLoading ? (
                  <>
                    <RotateCw className="w-5 h-5 animate-spin" />
                    <span>Init DB...</span>
                  </>
                ) : isGenerating ? (
                  <>
                    <RotateCw className="w-5 h-5 animate-spin" />
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <span className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out mix-blend-screen"></span>
                    <span className="relative z-10 flex items-center gap-2">
                      Generate_Jobs
                    </span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Result Column */}
          <div ref={outputRef} className="lg:col-span-8 bg-zinc-50/50 p-4 sm:p-6 lg:p-8 relative flex flex-col">
             {/* Background Grid Accent */}
            <div className="absolute inset-0 pointer-events-none" style={{ 
              backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px)', 
              backgroundSize: '20px 20px' 
            }}></div>

            <div className="flex items-center justify-between mb-6 z-10">
              <div className="flex items-center gap-2 text-accent font-mono text-xs uppercase tracking-widest">
                <Briefcase className="w-4 h-4" />
                <span>Output_Stream</span>
              </div>
              {generatedJobs.length > 0 && (
                <button
                  onClick={handleCopy}
                  className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 hover:text-accent flex items-center gap-1 transition-colors"
                >
                  {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  {copied ? 'Copied' : 'Copy_All'}
                </button>
              )}
            </div>

            <div className="flex-1 z-10 overflow-y-auto custom-scrollbar pr-2">
              {error ? (
                 <div className="h-full flex items-center justify-center">
                    <p className="font-mono text-red-500 text-sm uppercase border border-red-200 bg-red-50 px-4 py-2">{error}</p>
                 </div>
              ) : generatedJobs.length > 0 ? (
                <div className="space-y-3">
                  {generatedJobs.map((job, index) => (
                    <div key={index} className="bg-white border border-zinc-200 p-4 hover:border-accent hover:shadow-sm transition-all group">
                      <div className="flex items-baseline justify-between">
                        <h3 className="text-xl font-display font-bold text-foreground tracking-tight group-hover:text-accent transition-colors">
                          {job.job}
                        </h3>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 bg-zinc-50 px-2 py-1 border border-zinc-100">
                          {job.category}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-zinc-300">
                  <Sparkles className="w-12 h-12 mb-4 opacity-20" />
                  <p className="font-mono text-sm uppercase tracking-widest opacity-50">Awaiting Input...</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
