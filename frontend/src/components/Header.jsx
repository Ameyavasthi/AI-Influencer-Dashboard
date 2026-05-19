import React from 'react';
import { Menu } from 'lucide-react';
import { NAV } from './Sidebar';

export default function Header({ page, setPage, setIsMobileOpen }) {
  const cur = NAV.find(n => n.id === page);
  const pidx = NAV.findIndex(n => n.id === page);

  return (
    <header className="bg-brand-surface border-b border-brand-border h-14 shrink-0 px-4 sm:px-6 flex items-center justify-between shadow-sm sticky top-0 z-30">
      
      {/* Left side: Mobile Toggle + Title */}
      <div className="flex items-center gap-3 sm:gap-4">
        <button 
          className="lg:hidden p-1.5 -ml-1.5 text-brand-text hover:bg-brand-bg rounded"
          onClick={() => setIsMobileOpen(true)}
        >
          <Menu size={20} />
        </button>
        
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
          <h1 className="text-[20px] sm:text-[24px] font-bold text-brand-navy font-serif truncate max-w-[150px] sm:max-w-none">
            {cur?.label}
          </h1>
          <span className="hidden sm:inline-block text-xs font-medium text-brand-text-light px-2.5 py-1 bg-brand-bg rounded border border-brand-border">
            Page {pidx + 1} of {NAV.length}
          </span>
        </div>
      </div>

      {/* Right side: Breadcrumbs + Quick KPI (Hidden on very small screens) */}
      <div className="flex items-center gap-3 sm:gap-5">
        
        {/* Desktop Breadcrumbs */}
        <div className="hidden md:flex items-center gap-1.5">
          {NAV.map((n, i) => (
            <button 
              key={i} 
              onClick={() => setPage(n.id)} 
              className={`
                h-1.5 rounded-full transition-all duration-300 
                ${i === pidx ? 'w-5 bg-brand-navy' : 'w-1.5 bg-brand-border hover:bg-brand-border-mid'}
              `}
              aria-label={`Go to ${n.label}`}
            />
          ))}
        </div>

        <div className="hidden md:block w-px h-5 bg-brand-border" />

        {/* Global KPIs (Tablet/Desktop) */}
        <div className="hidden lg:flex items-center gap-5">
          {[
            ["$35.1B", "Market 2026"],
            ["63.4%", "Adoption"],
            ["$87.6B", "Forecast 2032"]
          ].map(([v, l]) => (
            <div key={l} className="text-right">
              <div className="text-base sm:text-lg font-bold text-brand-navy font-serif leading-none mb-1">{v}</div>
              <div className="text-xs text-brand-text-light leading-none">{l}</div>
            </div>
          ))}
        </div>

        {/* Live Indicator */}
        <div className="bg-brand-gold text-brand-navy text-[9px] sm:text-[10px] font-bold px-2 py-1 rounded shadow-sm tracking-widest shrink-0">
          LIVE
        </div>
      </div>
    </header>
  );
}
