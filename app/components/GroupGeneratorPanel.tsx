'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { RotateCw, Settings2, Users, Copy, Check } from 'lucide-react';

interface Group {
  id: number;
  name: string;
  members: string[];
}

export default function GroupGeneratorPanel() {
  // Default example data
  const defaultExample = `Alice
Bob
Charlie
Diana
Eve
Frank
Grace
Henry
Ivy
Jack
Karen
Leo
Maya
Nathan
Olivia
Peter`;

  const [inputText, setInputText] = useState(defaultExample);
  const [numberOfGroups, setNumberOfGroups] = useState(4);
  const [groups, setGroups] = useState<Group[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [copiedGroupId, setCopiedGroupId] = useState<number | null>(null);
  const outputRef = useRef<HTMLDivElement>(null);

  const handleGenerate = useCallback(() => {
    setIsGenerating(true);

    setTimeout(() => {
      // Parse input - split by newlines and filter empty lines
      const items = inputText
        .split('\n')
        .map(line => line.trim())
        .filter(line => line.length > 0);

      if (items.length === 0) {
        setGroups([]);
        setIsGenerating(false);
        return;
      }

      // Shuffle items using Fisher-Yates algorithm
      const shuffled = [...items];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }

      // Calculate actual number of groups (can't exceed items count)
      const actualGroupCount = Math.min(numberOfGroups, items.length);

      // Distribute items into groups
      const newGroups: Group[] = [];
      for (let i = 0; i < actualGroupCount; i++) {
        newGroups.push({
          id: i + 1,
          name: `Group ${i + 1}`,
          members: []
        });
      }

      // Round-robin distribution
      shuffled.forEach((item, index) => {
        const groupIndex = index % actualGroupCount;
        newGroups[groupIndex].members.push(item);
      });

      setGroups(newGroups);
      setIsGenerating(false);
    }, 300);
  }, [inputText, numberOfGroups]);

  // Auto-generate on page load with default data
  useEffect(() => {
    if (inputText) {
      handleGenerate();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Keyboard shortcut support
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'Enter' && !isGenerating) {
        handleGenerate();
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleGenerate, isGenerating]);

  // Scroll to output when results are generated
  useEffect(() => {
    if (groups.length > 0 && outputRef.current) {
      setTimeout(() => {
        outputRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 300);
    }
  }, [groups]);

  const handleCopyGroup = (group: Group) => {
    const text = `${group.name}:\n${group.members.join('\n')}`;
    navigator.clipboard.writeText(text);
    setCopiedGroupId(group.id);
    setTimeout(() => setCopiedGroupId(null), 2000);
  };

  const handleCopyAll = () => {
    const text = groups
      .map(group => `${group.name}:\n${group.members.join('\n')}`)
      .join('\n\n');
    navigator.clipboard.writeText(text);
    setCopiedGroupId(0);
    setTimeout(() => setCopiedGroupId(null), 2000);
  };

  const totalMembers = inputText.split('\n').filter(line => line.trim()).length;

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6">
      {/* Input & Settings Panel */}
      <div className="swiss-card bg-panel border-grid shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12">

          {/* Input Area - Left Side */}
          <div className="lg:col-span-8 border-b lg:border-b-0 lg:border-r border-grid p-4 sm:p-6 lg:p-8 bg-white">
            <div className="flex items-center gap-2 mb-6 text-accent font-mono text-xs uppercase tracking-widest">
              <Users className="w-4 h-4" />
              <span>Input Members</span>
              {totalMembers > 0 && (
                <span className="ml-auto text-foreground font-bold">{totalMembers} items</span>
              )}
            </div>

            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Enter each item on a new line..."
              className="w-full h-[300px] lg:h-[400px] bg-white border border-zinc-300 p-4 font-mono text-sm text-foreground focus:border-accent focus:ring-1 focus:ring-accent rounded-none resize-none"
            />

            <p className="text-xs text-zinc-400 font-mono mt-3 uppercase tracking-widest">
              Enter each member name on a new line
            </p>
          </div>

          {/* Settings Panel - Right Side */}
          <div className="lg:col-span-4 p-4 sm:p-6 lg:p-8 bg-zinc-50 flex flex-col">
            <div className="flex items-center gap-2 mb-8 text-zinc-500 font-mono text-xs uppercase tracking-widest">
              <Settings2 className="w-4 h-4" />
              <span>Configuration</span>
            </div>

            <div className="space-y-6 flex-1">
              {/* Number of Groups */}
              <div>
                <label className="block text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">
                  Number of Groups
                </label>
                <input
                  type="number"
                  min="2"
                  max="20"
                  value={numberOfGroups}
                  onChange={(e) => setNumberOfGroups(Math.min(20, Math.max(2, parseInt(e.target.value) || 2)))}
                  className="w-full bg-white border border-zinc-300 p-3 text-center font-mono text-foreground focus:border-accent focus:ring-1 focus:ring-accent rounded-none"
                />
              </div>

              {/* Stats */}
              <div className="p-4 border border-zinc-200 bg-white">
                <div className="space-y-2 text-xs font-mono">
                  <div className="flex justify-between">
                    <span className="text-zinc-500 uppercase">Total Members:</span>
                    <span className="text-foreground font-bold">{totalMembers}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500 uppercase">Groups:</span>
                    <span className="text-foreground font-bold">{Math.min(numberOfGroups, totalMembers)}</span>
                  </div>
                  {totalMembers > 0 && (
                    <div className="flex justify-between pt-2 border-t border-zinc-200">
                      <span className="text-zinc-500 uppercase">Members/Group:</span>
                      <span className="text-accent font-bold">
                        ~{Math.ceil(totalMembers / Math.min(numberOfGroups, totalMembers))}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Generate Button */}
            <button
              onClick={handleGenerate}
              disabled={isGenerating || totalMembers === 0}
              className="w-full bg-foreground hover:bg-zinc-800 text-white font-mono font-bold py-4 px-6 uppercase tracking-wider transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 rounded-none relative overflow-hidden group mt-6"
            >
              {isGenerating ? (
                <>
                  <RotateCw className="w-5 h-5 animate-spin" />
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <span className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out mix-blend-screen"></span>
                  <span className="relative z-10 flex items-center gap-2">
                    Generate_Groups
                  </span>
                </>
              )}
            </button>

            <p className="text-xs text-zinc-400 font-mono text-center mt-4 uppercase tracking-widest">
              Press Cmd/Ctrl + Enter ↵
            </p>
          </div>
        </div>
      </div>

      {/* Results Panel */}
      {groups.length > 0 && (
        <div ref={outputRef} className="swiss-card bg-panel border-grid shadow-sm">
          <div className="p-4 sm:p-6 lg:p-8 bg-white">
            <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
              <div className="flex items-center gap-2 text-accent font-mono text-xs uppercase tracking-widest">
                <Users className="w-4 h-4" />
                <span>Generated Groups</span>
                <span className="text-foreground font-bold ml-2">{groups.length} groups</span>
              </div>

              <button
                onClick={handleCopyAll}
                className="flex items-center gap-2 px-4 py-2 bg-zinc-100 hover:bg-accent hover:text-white border border-zinc-300 hover:border-accent font-mono text-xs uppercase tracking-wider transition-all"
              >
                {copiedGroupId === 0 ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy All</span>
                  </>
                )}
              </button>
            </div>

            {/* Groups Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {groups.map((group) => (
                <div
                  key={group.id}
                  className="bg-zinc-50 border border-grid hover:border-accent transition-all group"
                >
                  {/* Group Header */}
                  <div className="bg-foreground text-white p-3 flex items-center justify-between">
                    <h3 className="font-mono text-sm font-bold uppercase tracking-wider">
                      {group.name}
                    </h3>
                    <button
                      onClick={() => handleCopyGroup(group)}
                      className="opacity-60 hover:opacity-100 transition-opacity"
                      title="Copy group"
                    >
                      {copiedGroupId === group.id ? (
                        <Check className="w-4 h-4" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  {/* Group Members */}
                  <div className="p-4">
                    <div className="space-y-2">
                      {group.members.map((member, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-sm"
                        >
                          <span className="flex-shrink-0 w-6 h-6 bg-accent text-white flex items-center justify-center font-mono text-xs font-bold">
                            {idx + 1}
                          </span>
                          <span className="font-mono text-foreground truncate">
                            {member}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Member Count */}
                    <div className="mt-3 pt-3 border-t border-grid">
                      <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                        {group.members.length} {group.members.length === 1 ? 'member' : 'members'}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
