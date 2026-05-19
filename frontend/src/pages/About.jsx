import React from 'react';
import Panel from '../components/ui/Panel';

export default function About() {
  return (
    <div className="flex flex-col gap-4 sm:gap-6 w-full max-w-5xl mx-auto">
      {/* Header Banner */}
      <div className="bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-blue rounded shadow-md p-6 sm:p-8 text-white flex flex-col gap-3">
        <div className="text-xs sm:text-[14px] tracking-[0.15em] text-[#93c5de] uppercase font-semibold">
          Information
        </div>
        <h1 className="font-serif text-[28px] sm:text-[36px] font-bold leading-tight">
          About This Dashboard
        </h1>
        <p className="text-sm sm:text-[17px] text-[#b8d8ea] leading-relaxed max-w-3xl">
          This dashboard analyzes the global AI Influencer industry including market growth, adoption trends, monetization models, and performance comparisons between AI and human influencers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full">
        {/* Author Card */}
        <Panel title="Author" subtitle="Creator Information" className="w-full">
          <div className="flex flex-col gap-3 h-full justify-center">
            <div>
              <div className="text-sm text-brand-text-light font-semibold uppercase tracking-wider mb-1">Name</div>
              <div className="text-xl sm:text-[22px] font-bold text-brand-navy font-serif">Amey S. Avasthi</div>
            </div>
            
            <div className="w-full h-px bg-brand-border my-1" />
            
            <div>
              <div className="text-sm text-brand-text-light font-semibold uppercase tracking-wider mb-1">Role</div>
              <div className="text-lg sm:text-[20px] font-semibold text-brand-text">Dashboard Creator & Data Analyst</div>
            </div>

            <div className="w-full h-px bg-brand-border my-1" />

            <div>
              <div className="text-sm text-brand-text-light font-semibold uppercase tracking-wider mb-1">Description</div>
              <p className="text-base text-brand-text-mid leading-relaxed">
                "This analytics dashboard was created as part of a research and data analysis project on the AI influencer industry."
              </p>
            </div>
          </div>
        </Panel>

        {/* Links Card */}
        <Panel title="Connect" subtitle="Social Links and Source Code" className="w-full">
          <div className="flex flex-col gap-4 h-full justify-center">
            <a 
              href="https://www.linkedin.com/in/amey-avasthi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col p-5 rounded border border-brand-border bg-brand-surface hover:bg-brand-bg hover:border-brand-blue transition-all duration-200"
            >
              <div className="text-base sm:text-[18px] font-bold text-brand-navy group-hover:text-brand-blue transition-colors mb-1">
                LinkedIn Profile
              </div>
              <div className="text-sm sm:text-[15px] text-brand-text-light group-hover:text-brand-text-mid transition-colors truncate">
                https://www.linkedin.com/in/amey-avasthi
              </div>
            </a>

            <a 
              href="https://github.com/Ameyavasthi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col p-5 rounded border border-brand-border bg-brand-surface hover:bg-brand-bg hover:border-brand-blue transition-all duration-200"
            >
              <div className="text-base sm:text-[18px] font-bold text-brand-navy group-hover:text-brand-blue transition-colors mb-1">
                GitHub Profile
              </div>
              <div className="text-sm sm:text-[15px] text-brand-text-light group-hover:text-brand-text-mid transition-colors truncate">
                https://github.com/Ameyavasthi
              </div>
            </a>
          </div>
        </Panel>
      </div>

      {/* Footer Text */}
      <div className="text-center mt-6">
        <p className="text-xs sm:text-[14px] text-brand-text-light font-medium tracking-wide">
          AI Influencer Analytics Dashboard • March 2026
        </p>
      </div>
    </div>
  );
}
