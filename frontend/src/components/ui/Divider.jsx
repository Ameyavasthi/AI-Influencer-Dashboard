import React from 'react';

export default function Divider({ label }) {
  return (
    <div className="flex items-center gap-2.5 my-3">
      <div className="flex-1 h-px bg-brand-border" />
      {label && (
        <span className="text-[9px] sm:text-[10px] text-brand-text-light tracking-widest uppercase font-semibold">
          {label}
        </span>
      )}
      <div className="flex-1 h-px bg-brand-border" />
    </div>
  );
}
