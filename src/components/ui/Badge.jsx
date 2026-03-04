import React from 'react';
import { T } from '../../data/theme';

export default function Badge({ children, type }) {
  const styles = {
    "Mature":      "bg-[#EBF5FF] text-brand-navy border-brand-blue",
    "Growing":     "bg-[#E8F8EE] text-brand-positive border-[#5BAA75]",
    "Emerging":    "bg-[#FDF5D0] text-[#8B6914] border-brand-gold",
    "Early Stage": "bg-[#FEF0EC] text-brand-negative border-[#E07060]",
    "AI":          "bg-brand-blue-pale text-brand-navy border-brand-blue",
    "Human":       "bg-[#f0f0f0] text-brand-text-mid border-brand-border-mid",
  };

  const selectedClass = styles[type] || styles["Mature"];

  return (
    <span className={`px-2 py-0.5 rounded-full border text-[9px] sm:text-[10px] font-semibold whitespace-nowrap ${selectedClass}`}>
      {children}
    </span>
  );
}
