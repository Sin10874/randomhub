'use client';
import * as React from 'react';

type Props = React.SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
  error?: string;
};

export default function Select({ label, error, className = '', ...props }: Props) {
  return (
    <div className="group">
      {label && (
        <label className="block text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2 group-hover:text-foreground transition-colors">
          {label}
        </label>
      )}
      <div className="relative">
        <select
          {...props}
          className={
            'w-full appearance-none rounded-none border border-zinc-300 bg-white px-4 py-3 pr-10 text-foreground text-sm font-mono ' +
            'focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-all ' +
            'disabled:cursor-not-allowed disabled:opacity-60 ' +
            className
          }
        />
        {/* Custom Caret */}
        <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400">
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/>
          </svg>
        </div>
      </div>
      {error && (
        <div className="mt-1 flex items-center gap-1 text-red-600">
          <span className="text-[10px] font-mono uppercase tracking-wider">{error}</span>
        </div>
      )}
    </div>
  );
}
