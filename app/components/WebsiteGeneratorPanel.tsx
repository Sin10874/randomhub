'use client';

import { useState } from 'react';
import { websites } from '@/app/data/websites';
import InfinityIcon from './InfinityIcon';

export default function WebsiteGeneratorPanel() {
  const [isLoading, setIsLoading] = useState(false);

  const handleGo = () => {
    setIsLoading(true);

    // 添加一点延迟，让按钮有点反馈感
    setTimeout(() => {
      // 随机选择一个网站
      const randomWebsite = websites[Math.floor(Math.random() * websites.length)];

      // 在新标签页打开
      window.open(randomWebsite.url, '_blank', 'noopener,noreferrer');

      setIsLoading(false);
    }, 300);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Main Panel */}
      <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 sm:p-12 text-center">
        {/* Title */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 mb-6 sm:mb-8 tracking-tight leading-tight">
          Take me to a Random Website
        </h1>

        {/* GO Button */}
        <button
          onClick={handleGo}
          disabled={isLoading}
          className="group relative inline-flex items-center justify-center gap-5 px-24 sm:px-32 py-6 sm:py-7 text-3xl sm:text-4xl font-bold text-white bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 rounded-2xl hover:from-emerald-600 hover:via-green-600 hover:to-teal-600 transition-all duration-300 shadow-2xl hover:shadow-emerald-500/50 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
        >
          {/* 背景动画效果 */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          {/* 按钮内容 */}
          <span className="relative z-10 flex items-center gap-5">
            <InfinityIcon className={`w-10 h-10 sm:w-12 sm:h-12 ${isLoading ? 'animate-bounce' : 'group-hover:translate-x-1 transition-transform'}`} />
            <span>{isLoading ? 'Launching...' : 'GO!'}</span>
          </span>
        </button>
      </div>
    </div>
  );
}
