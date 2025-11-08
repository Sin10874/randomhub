'use client';

import { useState, useEffect, useCallback } from 'react';
import Select from '@/app/components/ui/Select';
import { RotateCw, Copy, Check, Sparkles, SlidersHorizontal, Briefcase } from 'lucide-react';

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
      // Filter jobs by category
      const filteredJobs = category === 'All Categories'
        ? allJobs
        : allJobs.filter(job => job.category === category);

      if (filteredJobs.length === 0) {
        setError('No jobs found in this category.');
        setGeneratedJobs([]);
      } else {
        // Generate multiple unique jobs
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

  // Keyboard shortcut support
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && !isGenerating && !isLoading) {
        handleGenerate();
      }
    };
    window.addEventListener('keypress', handleKeyPress);
    return () => window.removeEventListener('keypress', handleKeyPress);
  }, [handleGenerate, isGenerating, isLoading]);

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Title */}
      <div className="text-center mb-6 sm:mb-8 px-4">
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight animate-fade-in drop-shadow-lg">
          Random Job Generator
        </h1>
        <p className="text-white/90 text-base sm:text-lg mt-3 drop-shadow">
          Discover random careers and occupations across diverse industries
        </p>
      </div>

      {/* Main Panel */}
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Settings card */}
          <div className="border-b lg:border-b-0 lg:border-r border-blue-100/60 p-6 sm:p-8 bg-gradient-to-br from-blue-50/50 to-transparent">
            <div className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
              <SlidersHorizontal className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
              Settings
            </div>

            <div className="space-y-5 mb-6">
              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Job Category
                </label>
                <Select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full"
                  disabled={isLoading}
                >
                  {CATEGORIES.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </Select>
              </div>

              {/* Number of Jobs */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Number of Jobs
                </label>
                <input
                  type="number"
                  min="1"
                  max="20"
                  value={count}
                  onChange={(e) => setCount(Math.min(20, Math.max(1, parseInt(e.target.value) || 1)))}
                  className="w-full appearance-none rounded-xl border-2 border-slate-200 bg-white px-4 py-2.5 text-slate-900 text-center font-semibold shadow-sm hover:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all"
                  disabled={isLoading}
                />
              </div>
            </div>

            {/* Generate Button */}
            <button
              onClick={handleGenerate}
              disabled={isGenerating || isLoading}
              className="w-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white font-semibold py-3.5 sm:py-4 rounded-xl hover:from-blue-600 hover:via-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed text-base sm:text-lg flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <RotateCw className="w-5 h-5 animate-spin" />
                  Loading...
                </>
              ) : isGenerating ? (
                <>
                  <RotateCw className="w-5 h-5 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  Generate Jobs
                </>
              )}
            </button>

            <p className="text-xs text-slate-500 text-center mt-3">
              Press <kbd className="px-2 py-1 bg-slate-100 rounded text-xs font-mono">Enter</kbd> to generate
            </p>
          </div>

          {/* Result card */}
          <div className="p-6 sm:p-8 bg-gradient-to-br from-indigo-50/50 to-transparent min-h-[400px] lg:min-h-0 flex flex-col">
            <div className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
              <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
              Result
            </div>

            <div className="flex-1 rounded-2xl border-2 border-dashed border-blue-200 bg-gradient-to-br from-blue-50/50 via-indigo-50/30 to-purple-50/20 p-6 sm:p-10 flex flex-col items-center justify-center relative overflow-hidden">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

              {error ? (
                <div className="text-center animate-fade-in z-10">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-100 flex items-center justify-center">
                    <span className="text-3xl">⚠️</span>
                  </div>
                  <p className="text-red-600 font-medium text-sm sm:text-base max-w-xs">{error}</p>
                </div>
              ) : generatedJobs.length > 0 ? (
                <div className="flex flex-col items-center gap-6 sm:gap-8 w-full z-10 animate-fade-in">
                  {/* Jobs Display */}
                  <div className="relative w-full max-h-64 overflow-y-auto">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 blur-2xl opacity-20 animate-pulse"></div>
                    <div className="relative space-y-3 px-4">
                      {generatedJobs.map((job, index) => (
                        <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-blue-100 shadow-sm">
                          <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent text-center">
                            {job.job}
                          </p>
                          <p className="text-xs text-slate-500 text-center mt-1">
                            {job.category}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Info tags */}
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full text-xs font-medium text-slate-600 shadow-sm border border-blue-100">
                      {generatedJobs.length} {generatedJobs.length === 1 ? 'job' : 'jobs'}
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm">
                    <button
                      onClick={handleGenerate}
                      disabled={isGenerating}
                      className="flex-1 flex items-center justify-center gap-2 px-4 sm:px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl active:scale-95 disabled:opacity-50"
                    >
                      <RotateCw className={`w-4 h-4 ${isGenerating ? 'animate-spin' : ''}`} />
                      <span className="hidden sm:inline">Regenerate</span>
                      <span className="sm:hidden">Again</span>
                    </button>
                    <button
                      onClick={handleCopy}
                      className="flex-1 flex items-center justify-center gap-2 px-4 sm:px-6 py-3 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white font-semibold rounded-xl hover:from-indigo-600 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl active:scale-95"
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          Copy
                        </>
                      )}
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-center z-10 animate-fade-in">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                    <Briefcase className="w-10 h-10 text-blue-500" />
                  </div>
                  <p className="text-slate-400 text-base sm:text-lg font-medium mb-2">
                    Ready to generate!
                  </p>
                  <p className="text-slate-400 text-sm">
                    Click the button to discover random jobs
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
