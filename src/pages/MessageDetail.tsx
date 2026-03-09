import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockMessages } from '../data/mockData';
import { ArrowLeft, ShieldCheck, AlertCircle, CheckCircle2, XCircle, CornerUpLeft, MoreHorizontal, Star, Mail } from 'lucide-react';

export const MessageDetail = () => {
  const { id } = useParams();
  const msg = mockMessages.find(m => m.id === id) || mockMessages[0];

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="flex items-center justify-between">
        <Link to="/app" className="flex items-center gap-2 text-sm font-medium text-ink hover:text-navy transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Inbox
        </Link>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-paper-border rounded-md text-sm font-medium text-ink hover:bg-ivory transition-colors shadow-sm">
            <XCircle className="w-4 h-4" />
            Reject
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-navy text-white rounded-md text-sm font-medium hover:bg-navy-light transition-colors shadow-sm">
            <CornerUpLeft className="w-4 h-4" />
            Reply
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white border border-paper-border rounded-lg shadow-sm p-8 relative">
            <div className="absolute top-0 right-0 w-16 h-16 bg-ivory border-b border-l border-paper-border rounded-bl-3xl flex items-center justify-center">
              <Mail className="w-6 h-6 text-brass/50" />
            </div>
            
            <h1 className="font-serif text-2xl text-navy mb-6 pr-12">{msg.subject}</h1>
            
            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-paper-border">
              <div className="w-12 h-12 rounded-full bg-parchment border border-paper-border flex items-center justify-center font-serif text-navy italic text-xl shadow-sm">
                {msg.senderAvatar}
              </div>
              <div>
                <div className="font-semibold text-navy">{msg.senderName}</div>
                <div className="text-sm text-ink">{msg.senderRole}</div>
              </div>
              <div className="ml-auto text-sm text-ink-light font-medium">
                {msg.timestamp}
              </div>
            </div>

            <div className="prose prose-sm max-w-none text-navy whitespace-pre-wrap font-sans leading-relaxed">
              {msg.body}
            </div>
          </div>

          {/* Quick Reply */}
          <div className="bg-ivory border border-paper-border rounded-lg shadow-sm p-6">
            <h3 className="font-serif text-lg text-navy mb-4">Quick Reply</h3>
            <textarea 
              className="w-full h-32 p-4 bg-white border border-paper-border rounded-md text-sm focus:outline-none focus:border-brass focus:ring-1 focus:ring-brass transition-all resize-none mb-4"
              placeholder="Draft your response..."
            ></textarea>
            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                <button className="px-3 py-1.5 bg-white border border-paper-border rounded text-xs font-medium text-ink hover:bg-black/5">
                  Suggest Meeting
                </button>
                <button className="px-3 py-1.5 bg-white border border-paper-border rounded text-xs font-medium text-ink hover:bg-black/5">
                  Polite Decline
                </button>
              </div>
              <button className="px-6 py-2 bg-navy text-white rounded-md text-sm font-medium hover:bg-navy-light transition-colors shadow-sm">
                Send
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* AI Summary Card */}
          <div className="bg-white border border-paper-border rounded-lg shadow-sm p-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-brass"></div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-serif text-lg text-navy flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-brass" />
                Signal Analysis
              </h3>
              <div className="flex items-center gap-1.5 px-2.5 py-1 bg-parchment border border-brass/30 rounded-full">
                <span className="text-navy font-mono text-lg font-bold">{msg.score}</span>
                <span className="text-brass text-sm">✦</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-ink-light mb-2">Summary</div>
                <ul className="space-y-2">
                  {msg.summary.map((s, i) => (
                    <li key={i} className="text-sm text-ink flex items-start gap-2">
                      <span className="text-brass mt-1">•</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="pt-4 border-t border-paper-border">
                <div className="text-xs font-bold uppercase tracking-wider text-ink-light mb-2">Why it scored highly</div>
                <ul className="space-y-2">
                  {msg.scoreExplanation.high.map((s, i) => (
                    <li key={i} className="text-sm text-emerald-700 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {msg.scoreExplanation.low.length > 0 && (
                <div className="pt-4 border-t border-paper-border">
                  <div className="text-xs font-bold uppercase tracking-wider text-ink-light mb-2">Reduced score because</div>
                  <ul className="space-y-2">
                    {msg.scoreExplanation.low.map((s, i) => (
                      <li key={i} className="text-sm text-postal-red flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 text-postal-red/70 shrink-0 mt-0.5" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="pt-4 border-t border-paper-border bg-ivory -mx-6 -mb-6 p-6 mt-4">
                <div className="text-xs font-bold uppercase tracking-wider text-ink-light mb-1">Suggested Action</div>
                <div className="text-sm font-medium text-navy">{msg.scoreExplanation.action}</div>
              </div>
            </div>
          </div>

          {/* Sender Profile */}
          <div className="bg-white border border-paper-border rounded-lg shadow-sm p-6">
            <h3 className="font-serif text-lg text-navy mb-4">Sender Profile</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-ink-light">Category</span>
                <span className="font-medium text-navy">{msg.scoreExplanation.category}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-ink-light">Intent</span>
                <span className="font-medium text-navy">{msg.scoreExplanation.intent}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-ink-light">Urgency</span>
                <span className="font-medium text-navy">{msg.scoreExplanation.urgency}</span>
              </div>
            </div>
            <div className="mt-6 flex gap-2">
              <button className="flex-1 px-3 py-2 bg-ivory border border-paper-border rounded text-xs font-medium text-ink hover:bg-black/5 flex items-center justify-center gap-2">
                <Star className="w-3.5 h-3.5" />
                Mark VIP
              </button>
              <button className="flex-1 px-3 py-2 bg-ivory border border-paper-border rounded text-xs font-medium text-ink hover:bg-black/5 flex items-center justify-center gap-2">
                <MoreHorizontal className="w-3.5 h-3.5" />
                More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
