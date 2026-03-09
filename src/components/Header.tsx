import React from 'react';
import { Search, Bell, Shield } from 'lucide-react';

export const Header = () => {
  return (
    <header className="h-16 border-b border-paper-border bg-white flex items-center justify-between px-6 sticky top-0 z-20">
      <div className="flex items-center gap-4 flex-1">
        <div className="relative w-full max-w-md hidden md:block">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-ink-light" />
          <input 
            type="text" 
            placeholder="Search correspondence..." 
            className="w-full pl-9 pr-4 py-2 bg-ivory border border-paper-border rounded-md text-sm focus:outline-none focus:border-brass focus:ring-1 focus:ring-brass transition-all"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 px-3 py-1.5 bg-ivory border border-paper-border rounded-full">
          <Shield className="w-3.5 h-3.5 text-emerald-600" />
          <span className="text-xs font-medium text-navy">Mode: Selective</span>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
          <span className="text-xs font-medium text-ink-light">Gmail Connected</span>
        </div>
        
        <button className="relative text-ink hover:text-navy transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-postal-red rounded-full border border-white"></span>
        </button>
      </div>
    </header>
  );
};
