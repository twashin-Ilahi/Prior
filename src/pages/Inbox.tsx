import React, { useState } from 'react';
import { mockMessages, Message } from '../data/mockData';
import { Search, Filter, ArrowRight, ShieldCheck, Mail, CheckCircle2, Clock, XCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Inbox = () => {
  const [filter, setFilter] = useState('All');
  
  const inboxMessages = mockMessages.filter(m => 
    m.status === 'High Signal Inbox' || m.status === 'Trusted Bypass'
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-serif text-3xl text-navy mb-2">Signal Inbox</h1>
          <p className="text-ink text-sm">Your approved and high-signal correspondence.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-3 py-1.5 bg-white border border-paper-border rounded-md text-sm font-medium text-ink hover:bg-ivory transition-colors">
            <Filter className="w-4 h-4" />
            Filter
          </button>
        </div>
      </div>

      <div className="flex items-center gap-2 border-b border-paper-border pb-4">
        {['All', 'High Signal', 'Referred', 'Unread'].map(f => (
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

      <div className="bg-white border border-paper-border rounded-lg shadow-sm overflow-hidden">
        <div className="grid grid-cols-12 gap-4 p-4 border-b border-paper-border bg-ivory text-xs font-semibold uppercase tracking-wider text-ink-light">
          <div className="col-span-4">Sender</div>
          <div className="col-span-5">Subject</div>
          <div className="col-span-2 text-center">Signal</div>
          <div className="col-span-1 text-right">Time</div>
        </div>

        <div className="divide-y divide-paper-border">
          {inboxMessages.map((msg) => (
            <Link 
              to={`/app/message/${msg.id}`} 
              key={msg.id}
              className={`grid grid-cols-12 gap-4 p-4 items-center hover:bg-black/5 transition-colors cursor-pointer ${
                !msg.isRead ? 'bg-navy/5 border-l-2 border-l-navy' : 'border-l-2 border-l-transparent'
              }`}
            >
              <div className="col-span-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-parchment border border-paper-border flex items-center justify-center font-serif text-navy italic text-lg shadow-sm">
                  {msg.senderAvatar}
                </div>
                <div className="overflow-hidden">
                  <div className={`text-sm truncate ${!msg.isRead ? 'font-semibold text-navy' : 'font-medium text-ink'}`}>
                    {msg.senderName}
                  </div>
                  <div className="text-xs text-ink-light truncate">{msg.senderRole}</div>
                </div>
              </div>
              
              <div className="col-span-5 overflow-hidden">
                <div className={`text-sm truncate mb-1 ${!msg.isRead ? 'font-semibold text-navy' : 'text-ink'}`}>
                  {msg.subject}
                </div>
                <div className="text-xs text-ink-light truncate flex gap-2">
                  {msg.tags.map(tag => (
                    <span key={tag} className="px-1.5 py-0.5 bg-ivory border border-paper-border rounded text-[10px] uppercase tracking-wider font-semibold">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="col-span-2 flex justify-center">
                <div className="flex items-center gap-1.5 px-2.5 py-1 bg-parchment border border-brass/30 rounded-full">
                  <span className="text-navy font-mono text-sm font-bold">{msg.score}</span>
                  <span className="text-brass text-xs">✦</span>
                </div>
              </div>
              
              <div className="col-span-1 text-right text-xs text-ink-light font-medium">
                {msg.timestamp}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
