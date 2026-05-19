import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

export default function DashboardLayout({ children, page, setPage }) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <div className="flex h-screen bg-brand-bg overflow-hidden font-sans">
      
      {/* Sidebar - fixed on left */}
      <Sidebar 
        page={page} 
        setPage={setPage} 
        isMobileOpen={isMobileOpen} 
        setIsMobileOpen={setIsMobileOpen} 
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        
        <Header 
          page={page} 
          setPage={setPage} 
          setIsMobileOpen={setIsMobileOpen} 
        />

        {/* Scrollable Page Container */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-brand-bg relative w-full">
          <div className="mx-auto w-full max-w-[1600px] p-4 sm:p-6 lg:p-8">
            <div className="page-enter" key={page}>
              {children}
            </div>
          </div>
        </main>
        
        {/* Simple Global Status Bar */}
        <footer className="bg-brand-surface border-t border-brand-border px-4 sm:px-6 py-2 flex items-center justify-between shrink-0 h-8 sm:h-auto z-10 w-full">
          <div className="text-[9px] sm:text-[10px] text-brand-text-light truncate max-w-[50%] sm:max-w-none">
            AI Influencer Industry Analytics · March 2026
          </div>
          <div className="hidden sm:flex items-center gap-4 text-[10px] text-brand-text-light">
            {[
              ["Virtual Mkt", "$9.27B"],
              ["Total Mkt", "$35.1B"],
              ["CAGR", "17%"],
              ["Regions", "8"],
              ["Segments", "7"]
            ].map(([l, v]) => (
              <span key={l}>
                {l}: <span className="font-semibold text-brand-navy">{v}</span>
              </span>
            ))}
          </div>
        </footer>

      </div>
    </div>
  );
}
