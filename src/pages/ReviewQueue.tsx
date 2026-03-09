import React, { useState } from 'react';
import { mockMessages } from '../data/mockData';
import { Filter, ArrowRight, ShieldCheck, Mail, CheckCircle2, Clock, XCircle, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ReviewQueue = () => {
  const [filter, setFilter] = useState('All');
  
  const reviewMessages = mockMessages.filter(m => 
    m.status === 'Review Queue'
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-serif text-3xl text-navy mb-2">Review Queue</h1>
          <p className="text-ink text-sm">Borderline messages held for your decision.</p>
        </div>
      </div>

      <div className="bg-ivory border border-brass/30 p-4 rounded-lg flex items-start gap-3 shadow-sm">
        <AlertCircle className="w-5 h-5 text-brass shrink-0 mt-0.5" />
        <p className="text-sm text-navy font-medium">
          These messages were held because they were unclear, borderline relevant, or below your current signal threshold.
        </p>
      </div>

      <div className="bg-white border border-paper-border rounded-lg shadow-sm overflow-hidden">
        <div className="grid grid-cols-12 gap-4 p-4 border-b border-paper-border bg-ivory text-xs font-semibold uppercase tracking-wider text-ink-light">
          <div className="col-span-3">Sender</div>
          <div className="col-span-4">Subject</div>
          <div className="col-span-3">Reason Held</div>
          <div className="col-span-2 text-right">Actions</div>
        </div>

        <div className="divide-y divide-paper-border">
          {reviewMessages.map((msg) => (
            <div key={msg.id} className="grid grid-cols-12 gap-4 p-4 items-center hover:bg-black/5 transition-colors">
              <div className="col-span-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-parchment border border-paper-border flex items-center justify-center font-serif text-navy italic text-lg shadow-sm shrink-0">
                  {msg.senderAvatar}
                </div>
                <div className="overflow-hidden">
                  <div className="text-sm font-semibold text-navy truncate">
                    {msg.senderName}
                  </div>
                  <div className="text-xs text-ink-light truncate">{msg.senderRole}</div>
                </div>
              </div>
              
              <div className="col-span-4 overflow-hidden">
                <div className="text-sm font-medium text-navy truncate mb-1">
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
              
              <div className="col-span-3">
                <div className="text-xs text-postal-red font-medium flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {msg.scoreExplanation.low[0] || "Below signal threshold"}
                </div>
                <div className="text-xs text-ink-light mt-1">
                  Score: {msg.score}
                </div>
              </div>
              
              <div className="col-span-2 flex justify-end gap-2">
                <button className="p-2 bg-white border border-paper-border rounded text-emerald-600 hover:bg-emerald-50 transition-colors" title="Promote to Inbox">
                  <CheckCircle2 className="w-4 h-4" />
                </button>
                <button className="p-2 bg-white border border-paper-border rounded text-postal-red hover:bg-red-50 transition-colors" title="Reject">
                  <XCircle className="w-4 h-4" />
                </button>
                <Link to={`/app/message/${msg.id}`} className="p-2 bg-white border border-paper-border rounded text-ink hover:bg-ivory transition-colors" title="View Details">
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
          
          {reviewMessages.length === 0 && (
            <div className="p-8 text-center text-ink-light">
              No messages in the review queue.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
