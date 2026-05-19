import React from 'react';

export default function Panel({ title, subtitle, children, className = '', noPad = false }) {
  return (
    <div className={`bg-brand-surface border border-brand-border rounded shadow-sm flex flex-col overflow-hidden ${className}`}>
      {(title || subtitle) && (
        <div className="px-5 py-3.5 border-b border-brand-border flex flex-col gap-0.5">
          {title && (
            <div className="text-base sm:text-[22px] font-bold text-brand-text uppercase tracking-wider leading-tight">
              {title}
            </div>
          )}
          {subtitle && (
            <div className="text-xs sm:text-[15px] text-brand-text-light mt-1">
              {subtitle}
            </div>
          )}
        </div>
      )}
      <div className={`${noPad ? '' : 'p-4 sm:p-5'} flex-1 flex flex-col`}>
        {children}
      </div>
    </div>
  );
}
