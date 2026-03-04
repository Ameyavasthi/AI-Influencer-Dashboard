import React from 'react';
import { T } from '../../data/theme';

export default function ProgressBar({ value, max = 100, color = T.blue, height = 6, showLabel = true }) {
  const percentage = Math.min(100, (value / max) * 100);
  
  return (
    <div className="flex items-center gap-2 w-full">
      <div 
        className="flex-1 overflow-hidden bg-brand-border"
        style={{ height, borderRadius: height / 2 }}
      >
        <div 
          className="h-full transition-all duration-700 ease-out"
          style={{ width: `${percentage}%`, backgroundColor: color, borderRadius: height / 2 }}
        />
      </div>
      {showLabel && (
        <span className="text-[10px] sm:text-xs text-brand-text-light w-8 text-right shrink-0">
          {Math.round(value)}%
        </span>
      )}
    </div>
  );
}
