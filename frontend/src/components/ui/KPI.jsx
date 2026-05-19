import React from 'react';

export default function KPI({ label, value, sub, delta, deltaLabel, accent, wide }) {
  const isPositive = delta > 0;
  
  return (
    <div className={`
      relative overflow-hidden rounded shadow-sm flex flex-col justify-between
      border p-5 pb-4 min-w-[140px] flex-1 transition-all duration-200 hover:shadow-md
      ${accent 
        ? 'bg-brand-navy border-brand-navy border-t-[3px] border-t-brand-gold text-white' 
        : 'bg-brand-surface border-brand-border border-t-[3px] border-t-brand-blue'}
      ${wide ? 'min-w-[180px]' : ''}
    `}>
      <div className={`text-xs sm:text-[15px] uppercase tracking-widest font-semibold mb-2 
        ${accent ? 'text-[#a8c8e0]' : 'text-brand-text-light'}`}>
        {label}
      </div>
      
      <div className={`text-[28px] sm:text-[34px] font-bold font-serif leading-none mb-1 
        ${accent ? 'text-white' : 'text-brand-text'}`}>
        {value}
      </div>
      
      {sub && (
        <div className={`text-xs sm:text-[14px] mt-1 leading-snug
          ${accent ? 'text-[#93bbcf]' : 'text-brand-text-light'}`}>
          {sub}
        </div>
      )}
      
      {delta !== undefined && (
        <div className="flex items-center gap-1.5 mt-2">
          <span className={`text-xs sm:text-[14px] font-bold ${isPositive ? 'text-brand-positive' : 'text-brand-negative'}`}>
            {isPositive ? '▲' : '▼'} {Math.abs(delta)}%
          </span>
          {deltaLabel && (
            <span className={`text-[10px] sm:text-xs ${accent ? 'text-[#93bbcf]' : 'text-brand-text-light'}`}>
              {deltaLabel}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
