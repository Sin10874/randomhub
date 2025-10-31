'use client';
import * as React from 'react';

type Props = React.SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
  error?: string;
};

export default function Select({ label, error, className = '', ...props }: Props) {
  return (
    <label className="block">
      {label && (
        <span className="mb-2 block text-sm font-medium text-slate-700">
          {label}
        </span>
      )}
      <div className="relative">
        <select
          {...props}
          className={
            'w-full appearance-none rounded-xl border-2 border-slate-200 bg-white px-4 py-2.5 pr-10 text-slate-900 shadow-sm ' +
            'hover:border-violet-300 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-violet-400 ' +
            'disabled:cursor-not-allowed disabled:opacity-60 transition-all ' +
            className
          }
        />
        {/* caret */}
        <svg
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z" />
        </svg>
      </div>
      {error && <p className="mt-1 text-xs text-rose-500">{error}</p>}
    </label>
  );
}
