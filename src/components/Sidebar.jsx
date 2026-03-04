import React from 'react';
import { T } from '../data/theme';
import { LayoutDashboard, Users, Globe, BarChart2, DollarSign, LineChart, Info } from 'lucide-react';

export const NAV = [
  { id: "overview",     label: "Industry Overview",          icon: <LayoutDashboard size={14} /> },
  { id: "segmentation", label: "Market Segmentation",        icon: <Users size={14} /> },
  { id: "regional",     label: "Regional Adoption",          icon: <Globe size={14} /> },
  { id: "performance",  label: "Performance Comparison",     icon: <BarChart2 size={14} /> },
  { id: "monetisation", label: "Monetization Models",        icon: <DollarSign size={14} /> },
  { id: "forecast",     label: "Future Forecast",            icon: <LineChart size={14} /> },
  { id: "about",        label: "About",                      icon: <Info size={14} /> },
];

export default function Sidebar({ page, setPage, isMobileOpen, setIsMobileOpen }) {
  return (
    <>
      {/* Mobile Backdrop */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-50
        w-64 bg-brand-navy flex flex-col shrink-0 overflow-y-auto
        transform transition-transform duration-300 ease-in-out
        ${isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Logo */}
        <div className="p-5 border-b border-white/10 shrink-0">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 bg-brand-gold rounded flex items-center justify-center shrink-0">
              <span className="text-sm font-black text-brand-navy font-serif">AI</span>
            </div>
            <div>
              <div className="text-base font-bold text-white leading-tight">AI Influencer</div>
              <div className="text-sm text-[#7aabcb] leading-tight mt-0.5">Analytics Suite</div>
            </div>
          </div>
          <div className="text-[10px] text-[#5e8faa] tracking-widest uppercase mt-4 font-semibold">
            March 2026 · Confidential
          </div>
        </div>

        {/* Navigation Links */}
        <div className="py-4 flex-1">
          <div className="text-[10px] text-[#4a7a94] tracking-widest uppercase px-5 mb-3 font-semibold">
            Dashboard Pages
          </div>
          <nav className="flex flex-col gap-0.5">
            {NAV.map((n, i) => {
              const isActive = page === n.id;
              return (
                <button 
                  key={n.id} 
                  onClick={() => {
                    setPage(n.id);
                    setIsMobileOpen(false);
                  }} 
                  className={`group
                    w-full flex items-center gap-3.5 px-6 py-3 transition-all duration-200 text-left
                    border-l-4 ${isActive ? 'border-brand-gold bg-white/10' : 'border-transparent hover:bg-white/10'}
                  `}
                >
                  <div className={`
                    w-6 h-6 rounded shrink-0 flex items-center justify-center
                    ${isActive ? 'bg-brand-gold text-brand-navy' : 'bg-white/10 text-[#7aabcb]'}
                  `}>
                    {n.icon}
                  </div>
                  <span className={`
                    text-[15px] sm:text-base leading-tight
                    ${isActive ? 'text-white font-bold' : 'text-[#7aabcb] font-medium group-hover:text-white transition-colors'}
                  `}>
                    {n.label}
                  </span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Bottom Info Footer */}
        <div className="p-5 border-t border-white/10 mt-auto shrink-0">
          <div className="text-[10px] text-[#4a7a94] tracking-widest uppercase mb-3 font-semibold">
            Data Sources
          </div>
          <div className="flex flex-col gap-1.5 text-[10px] text-[#4a7a94]">
            {["Statista 2026", "Influencer Mktg. Hub", "Amra & Elma", "Fluid AI", "Stormy AI"].map(s => (
              <div key={s}>· {s}</div>
            ))}
          </div>
          <div className="mt-4 text-[10px] text-[#3a6a80]">
            Dataset compiled March 2026
          </div>
        </div>
      </div>
    </>
  );
}
