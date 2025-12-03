import React from 'react';

interface CheckboxGroupOption {
  value: string;
  label: string;
}

interface CheckboxGroupProps {
  options: CheckboxGroupOption[];
  selectedValues: string[];
  onChange: (selectedValues: string[]) => void;
  className?: string;
}

export default function CheckboxGroup({ options, selectedValues, onChange, className = '' }: CheckboxGroupProps) {
  const handleToggle = (value: string) => {
    if (selectedValues.includes(value)) {
      onChange(selectedValues.filter(v => v !== value));
    } else {
      onChange([...selectedValues, value]);
    }
  };

  return (
    <div className={`space-y-2 ${className}`}>
      {options.map(option => (
        <label
          key={option.value}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <input
            type="checkbox"
            checked={selectedValues.includes(option.value)}
            onChange={() => handleToggle(option.value)}
            className="w-4 h-4 border-2 border-zinc-300 rounded-sm checked:bg-accent checked:border-accent focus:ring-2 focus:ring-accent/20 cursor-pointer transition-all"
          />
          <span className="text-xs font-mono text-zinc-700 uppercase tracking-widest group-hover:text-accent transition-colors">
            {option.label}
          </span>
        </label>
      ))}
    </div>
  );
}
