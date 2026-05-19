import React from 'react';
import { T } from '../../data/theme';

export default function Tip({ active, payload, label, fmt }) {
  if (!active || !payload?.length) return null;
  
  return (
    <div className="bg-white border border-brand-border p-3 rounded shadow-md text-[10px] sm:text-xs z-50">
      {label && <div className="text-brand-text-light mb-1.5 font-bold">{label}</div>}
      <div className="flex flex-col gap-1">
        {payload.map((p, i) => (
          <div key={i} className="flex items-center gap-1.5">
            <span 
              className="w-1.5 h-1.5 rounded-full block shrink-0" 
              style={{ backgroundColor: p.color || T.text }}
            />
            <span className="font-semibold" style={{ color: p.color || T.text }}>
              {p.name}:
            </span> 
            <span className="text-brand-text">
              {fmt ? fmt(p.value) : p.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
