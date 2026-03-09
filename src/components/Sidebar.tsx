import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Inbox, 
  Clock, 
  PenSquare, 
  ShieldCheck, 
  BarChart3, 
  SlidersHorizontal, 
  UserCircle, 
  Settings 
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navItems = [
  { name: 'Inbox', path: '/app', icon: Inbox, badge: '3' },
  { name: 'Review Queue', path: '/app/review', icon: Clock, badge: '1' },
  { name: 'Compose', path: '/compose', icon: PenSquare },
  { name: 'Trusted Senders', path: '/app/trusted', icon: ShieldCheck },
  { name: 'Analytics', path: '/app/analytics', icon: BarChart3 },
  { name: 'Preferences', path: '/app/preferences', icon: SlidersHorizontal },
  { name: 'Public Profile', path: '/profile', icon: UserCircle },
  { name: 'Settings', path: '/app/settings', icon: Settings },
];

export const Sidebar = () => {
  return (
    <aside className="w-64 border-r border-paper-border bg-ivory flex flex-col h-screen sticky top-0">
      <div className="h-16 flex items-center px-6 border-b border-paper-border">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-navy rounded-sm flex items-center justify-center text-parchment font-serif font-bold text-xs">
            P
          </div>
          <span className="font-serif text-lg font-semibold tracking-wide text-navy">Prior</span>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto py-6 px-4 flex flex-col gap-1">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) => cn(
              "flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium transition-colors",
              isActive 
                ? "bg-navy/5 text-navy" 
                : "text-ink hover:bg-black/5 hover:text-navy"
            )}
          >
            <div className="flex items-center gap-3">
              <item.icon className="w-4 h-4" />
              {item.name}
            </div>
            {item.badge && (
              <span className="bg-navy text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[18px] text-center">
                {item.badge}
              </span>
            )}
          </NavLink>
        ))}
      </div>
      
      <div className="p-4 border-t border-paper-border">
        <div className="flex items-center gap-3 px-3 py-2">
          <div className="w-8 h-8 rounded-full bg-parchment border border-paper-border flex items-center justify-center font-serif text-navy italic">
            T
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-navy">Twashin Ilahi</span>
            <span className="text-xs text-ink-light">Founder / Builder</span>
          </div>
        </div>
      </div>
    </aside>
  );
};
