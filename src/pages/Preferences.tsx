import React, { useState } from 'react';
import { Shield, Users, Tag, Sliders, FileText, Eye } from 'lucide-react';

export const Preferences = () => {
  const [accessMode, setAccessMode] = useState('Selective');
  
  const modes = [
    { id: 'Open', desc: 'Accept most messages, filter only obvious spam.' },
    { id: 'Selective', desc: 'Filter low-signal noise, prioritize relevance.' },
    { id: 'Protected', desc: 'Require strong signal or referral.' },
    { id: 'Private', desc: 'Only trusted senders and direct referrals.' }
  ];

  const peopleCategories = [
    { name: 'Founders', active: true },
    { name: 'Researchers', active: true },
    { name: 'Students', active: true },
    { name: 'Investors', active: true },
    { name: 'Operators', active: true },
    { name: 'Nonprofit leaders', active: false },
    { name: 'Government', active: false },
    { name: 'Journalists', active: false },
    { name: 'Recruiters', active: false },
    { name: 'Sales', active: false },
    { name: 'Creators', active: false },
    { name: 'Unknown senders', active: false }
  ];

  const topics = ['AI', 'robotics', 'startups', 'education', 'systems change'];

  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-12">
      <div>
        <h1 className="font-serif text-3xl text-navy mb-2">Preference Training</h1>
        <p className="text-ink text-sm">Teach Prior what matters to you to refine your signal scoring.</p>
      </div>

      {/* A. Accessibility Mode */}
      <section className="bg-white border border-paper-border rounded-lg shadow-sm p-6">
        <h2 className="font-serif text-xl text-navy mb-4 flex items-center gap-2">
          <Shield className="w-5 h-5 text-brass" />
          Accessibility Mode
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {modes.map(mode => (
            <button
              key={mode.id}
              onClick={() => setAccessMode(mode.id)}
              className={`p-4 rounded-md border text-left transition-all ${
                accessMode === mode.id 
                  ? 'border-navy bg-navy/5 shadow-sm' 
                  : 'border-paper-border bg-ivory hover:border-brass/50'
              }`}
            >
              <div className="font-semibold text-navy mb-1">{mode.id}</div>
              <div className="text-xs text-ink leading-relaxed">{mode.desc}</div>
            </button>
          ))}
        </div>
      </section>

      {/* B. Priority People */}
      <section className="bg-white border border-paper-border rounded-lg shadow-sm p-6">
        <h2 className="font-serif text-xl text-navy mb-4 flex items-center gap-2">
          <Users className="w-5 h-5 text-brass" />
          Priority People
        </h2>
        <div className="flex flex-wrap gap-2">
          {peopleCategories.map((cat, i) => (
            <button
              key={i}
              className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                cat.active 
                  ? 'bg-navy text-white border-navy' 
                  : 'bg-ivory text-ink border-paper-border hover:bg-black/5'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </section>

      {/* C. Topic Priorities */}
      <section className="bg-white border border-paper-border rounded-lg shadow-sm p-6">
        <h2 className="font-serif text-xl text-navy mb-4 flex items-center gap-2">
          <Tag className="w-5 h-5 text-brass" />
          Topic Priorities
        </h2>
        <div className="flex flex-wrap gap-2 mb-4">
          {topics.map((topic, i) => (
            <div key={i} className="px-3 py-1.5 rounded-md bg-ivory border border-paper-border text-sm font-medium text-navy flex items-center gap-2">
              {topic}
              <button className="text-ink-light hover:text-postal-red">&times;</button>
            </div>
          ))}
          <button className="px-3 py-1.5 rounded-md border border-dashed border-brass text-sm font-medium text-brass hover:bg-brass/5">
            + Add Topic
          </button>
        </div>
      </section>

      {/* D. Signal Quality Rules */}
      <section className="bg-white border border-paper-border rounded-lg shadow-sm p-6">
        <h2 className="font-serif text-xl text-navy mb-4 flex items-center gap-2">
          <Sliders className="w-5 h-5 text-brass" />
          Signal Quality Rules
        </h2>
        <div className="space-y-4">
          {[
            { label: 'Prioritize referred senders', checked: true },
            { label: 'Prioritize concise writing', checked: true },
            { label: 'Require a specific ask', checked: true },
            { label: 'Penalize vague outreach', checked: true },
            { label: 'Penalize aggressive tone', checked: true },
            { label: 'Penalize mass outreach patterns', checked: true },
            { label: 'Prioritize technically credible profiles', checked: true },
            { label: 'Surface exceptional outlier messages', checked: true }
          ].map((rule, i) => (
            <label key={i} className="flex items-center justify-between p-3 bg-ivory border border-paper-border rounded-md cursor-pointer hover:bg-black/5 transition-colors">
              <span className="text-sm font-medium text-navy">{rule.label}</span>
              <div className={`w-10 h-5 rounded-full relative transition-colors ${rule.checked ? 'bg-navy' : 'bg-paper-border'}`}>
                <div className={`w-4 h-4 rounded-full bg-white absolute top-0.5 transition-transform ${rule.checked ? 'translate-x-5' : 'translate-x-0.5'}`}></div>
              </div>
            </label>
          ))}
        </div>
      </section>

      {/* E. Custom AI Instruction Box */}
      <section className="bg-white border border-paper-border rounded-lg shadow-sm p-6">
        <h2 className="font-serif text-xl text-navy mb-4 flex items-center gap-2">
          <FileText className="w-5 h-5 text-brass" />
          Custom AI Instructions
        </h2>
        <p className="text-sm text-ink mb-4">Define nuanced inbox behavior in plain English.</p>
        <textarea 
          className="w-full h-32 p-4 bg-ivory border border-paper-border rounded-md text-sm focus:outline-none focus:border-brass focus:ring-1 focus:ring-brass transition-all resize-none text-navy font-medium leading-relaxed"
          defaultValue="Prioritize thoughtful founders, researchers, operators, and students with specific asks. Ignore generic outreach, spam, vague networking requests, and aggressive sales. Surface high-signal unexpected messages even if they fall outside my default pattern."
        ></textarea>
        <div className="mt-4 flex justify-end">
          <button className="px-6 py-2 bg-navy text-white rounded-md text-sm font-medium hover:bg-navy-light transition-colors shadow-sm">
            Save Instructions
          </button>
        </div>
      </section>

      {/* F. Routing Preview */}
      <section className="bg-ivory border border-paper-border rounded-lg shadow-sm p-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full bg-brass"></div>
        <h2 className="font-serif text-xl text-navy mb-4 flex items-center gap-2">
          <Eye className="w-5 h-5 text-brass" />
          Routing Preview
        </h2>
        <p className="text-sm text-ink mb-6">How your current rules would route sample messages.</p>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-white border border-paper-border rounded-md">
            <div className="text-sm font-medium text-navy">"Feedback on your recent systems architecture post"</div>
            <span className="px-2.5 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] uppercase tracking-wider font-bold rounded-sm">
              Inbox (94✦)
            </span>
          </div>
          <div className="flex items-center justify-between p-3 bg-white border border-paper-border rounded-md">
            <div className="text-sm font-medium text-navy">"Exciting Leadership Opportunity"</div>
            <span className="px-2.5 py-1 bg-amber-50 text-amber-700 border border-amber-200 text-[10px] uppercase tracking-wider font-bold rounded-sm">
              Review Queue (42✦)
            </span>
          </div>
          <div className="flex items-center justify-between p-3 bg-white border border-paper-border rounded-md">
            <div className="text-sm font-medium text-navy">"Scale your infrastructure"</div>
            <span className="px-2.5 py-1 bg-red-50 text-red-700 border border-red-200 text-[10px] uppercase tracking-wider font-bold rounded-sm">
              Filtered (12✦)
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};
