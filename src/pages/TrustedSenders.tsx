import React, { useState } from 'react';
import { ShieldCheck, UserPlus, Search, Star, Building2, Link as LinkIcon, MoreHorizontal } from 'lucide-react';

const trustedData = [
  { name: 'Sarah Jenkins', role: 'Partner, Sequoia', type: 'VIP', added: 'Oct 12, 2025' },
  { name: 'David Chen', role: 'PhD Candidate, MIT', type: 'Whitelist', added: 'Nov 05, 2025' },
  { name: '@quantumai.com', role: 'Domain', type: 'Approved Domain', added: 'Jan 18, 2026' },
  { name: 'Marcus Thorne', role: 'VP Operations, Nexus', type: 'Referred', added: 'Feb 22, 2026' },
];

export const TrustedSenders = () => {
  const [filter, setFilter] = useState('All');

  return (
    <div className="space-y-6 pb-12">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-serif text-3xl text-navy mb-2">Trusted Senders</h1>
          <p className="text-ink text-sm">Manage who bypasses the AI screening process.</p>
        </div>
        
        <button className="flex items-center gap-2 px-4 py-2 bg-navy text-white rounded-md text-sm font-medium hover:bg-navy-light transition-colors shadow-sm">
          <UserPlus className="w-4 h-4" />
          Add Trusted Sender
        </button>
      </div>

      <div className="flex items-center justify-between gap-4 border-b border-paper-border pb-4">
        <div className="flex items-center gap-2">
          {['All', 'VIPs', 'Whitelisted', 'Domains'].map(f => (
            <button 
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                filter === f 
                  ? 'bg-navy text-white' 
                  : 'text-ink hover:bg-black/5'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        
        <div className="relative w-64">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-ink-light" />
          <input 
            type="text" 
            placeholder="Search trusted senders..." 
            className="w-full pl-9 pr-4 py-1.5 bg-white border border-paper-border rounded-md text-sm focus:outline-none focus:border-brass focus:ring-1 focus:ring-brass transition-all"
          />
        </div>
      </div>

      <div className="bg-white border border-paper-border rounded-lg shadow-sm overflow-hidden">
        <div className="grid grid-cols-12 gap-4 p-4 border-b border-paper-border bg-ivory text-xs font-semibold uppercase tracking-wider text-ink-light">
          <div className="col-span-5">Sender / Domain</div>
          <div className="col-span-3">Trust Type</div>
          <div className="col-span-3">Added</div>
          <div className="col-span-1 text-right">Actions</div>
        </div>

        <div className="divide-y divide-paper-border">
          {trustedData.map((item, i) => (
            <div key={i} className="grid grid-cols-12 gap-4 p-4 items-center hover:bg-black/5 transition-colors">
              <div className="col-span-5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-parchment border border-paper-border flex items-center justify-center font-serif text-navy italic text-lg shadow-sm shrink-0">
                  {item.type === 'Approved Domain' ? <Building2 className="w-5 h-5 text-navy" /> : item.name.charAt(0)}
                </div>
                <div className="overflow-hidden">
                  <div className="text-sm font-semibold text-navy truncate flex items-center gap-2">
                    {item.name}
                    {item.type === 'VIP' && <Star className="w-3.5 h-3.5 text-brass fill-brass" />}
                  </div>
                  <div className="text-xs text-ink-light truncate">{item.role}</div>
                </div>
              </div>
              
              <div className="col-span-3">
                <span className={`px-2.5 py-1 border text-[10px] uppercase tracking-wider font-bold rounded-sm inline-flex items-center gap-1.5 ${
                  item.type === 'VIP' ? 'bg-amber-50 text-amber-700 border-amber-200' :
                  item.type === 'Approved Domain' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                  'bg-emerald-50 text-emerald-700 border-emerald-200'
                }`}>
                  {item.type === 'VIP' && <Star className="w-3 h-3" />}
                  {item.type === 'Approved Domain' && <LinkIcon className="w-3 h-3" />}
                  {item.type === 'Whitelisted' && <ShieldCheck className="w-3 h-3" />}
                  {item.type === 'Referred' && <UserPlus className="w-3 h-3" />}
                  {item.type}
                </span>
              </div>
              
              <div className="col-span-3 text-sm text-ink font-medium">
                {item.added}
              </div>
              
              <div className="col-span-1 flex justify-end">
                <button className="p-2 text-ink hover:text-navy hover:bg-ivory rounded transition-colors">
                  <MoreHorizontal className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
