import React from 'react';
import { ShieldCheck, Mail, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { receiverProfile } from '../data/mockData';
import { Link } from 'react-router-dom';

export const PublicProfile = () => {
  return (
    <div className="min-h-screen bg-parchment flex flex-col items-center justify-center p-6 relative">
      <div className="absolute inset-0 pointer-events-none opacity-40 z-0" style={{
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
        mixBlendMode: "multiply"
      }}></div>

      <div className="w-full max-w-2xl bg-white border border-paper-border rounded-xl shadow-xl relative z-10 overflow-hidden">
        {/* Header */}
        <div className="h-32 bg-navy relative">
          <div className="absolute -bottom-12 left-8 w-24 h-24 rounded-full bg-ivory border-4 border-white flex items-center justify-center font-serif text-navy italic text-4xl shadow-md">
            {receiverProfile.name.charAt(0)}
          </div>
          <div className="absolute top-4 right-4 px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs font-medium text-white flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5" />
            Verified Profile
          </div>
        </div>

        {/* Body */}
        <div className="pt-16 px-8 pb-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="font-serif text-3xl text-navy mb-1">{receiverProfile.name}</h1>
              <div className="text-ink font-medium">{receiverProfile.role}</div>
              <div className="text-sm text-ink-light mt-1 font-mono">{receiverProfile.username}</div>
            </div>
            <Link to="/compose" className="px-6 py-2.5 bg-navy text-white rounded-md text-sm font-medium hover:bg-navy-light transition-colors shadow-sm flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Send Message
            </Link>
          </div>

          <p className="text-navy leading-relaxed mb-8 max-w-lg">
            {receiverProfile.bio}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-paper-border">
            {/* Interests */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-ink-light mb-4">Current Interests</h3>
              <div className="flex flex-wrap gap-2">
                {receiverProfile.interests.map((interest, i) => (
                  <span key={i} className="px-2.5 py-1 bg-ivory border border-paper-border rounded text-xs font-medium text-navy">
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Access Mode */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-ink-light mb-4">Access Mode</h3>
              <div className="flex items-center gap-3 p-3 bg-ivory border border-paper-border rounded-md">
                <ShieldCheck className="w-5 h-5 text-brass shrink-0" />
                <div>
                  <div className="text-sm font-semibold text-navy">{receiverProfile.accessMode}</div>
                  <div className="text-xs text-ink-light leading-relaxed">Messages are screened for signal and relevance.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Preferences */}
          <div className="mt-8 pt-8 border-t border-paper-border">
            <h3 className="text-xs font-bold uppercase tracking-wider text-ink-light mb-4">Communication Preferences</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="text-sm font-semibold text-emerald-700 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" /> Prioritizes
                </div>
                <ul className="space-y-2">
                  {receiverProfile.preferences.prioritize.map((pref, i) => (
                    <li key={i} className="text-sm text-ink flex items-start gap-2">
                      <span className="text-emerald-600 mt-1">•</span>
                      <span className="capitalize">{pref}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="space-y-3">
                <div className="text-sm font-semibold text-postal-red flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" /> Penalizes
                </div>
                <ul className="space-y-2">
                  {receiverProfile.preferences.penalize.map((pref, i) => (
                    <li key={i} className="text-sm text-ink flex items-start gap-2">
                      <span className="text-postal-red mt-1">•</span>
                      <span className="capitalize">{pref}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-10 p-4 bg-navy/5 border border-navy/10 rounded-lg flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm font-serif font-bold text-navy text-sm">P</div>
            <div>
              <div className="text-sm font-semibold text-navy mb-1">Powered by Prior</div>
              <div className="text-xs text-ink leading-relaxed">
                This inbox is protected by an AI chief-of-staff. Messages are scored for signal quality and routed accordingly. High-signal correspondence is guaranteed review.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
