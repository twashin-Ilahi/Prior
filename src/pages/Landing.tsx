import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Mail, CheckCircle2, SlidersHorizontal } from 'lucide-react';

export const Landing = () => {
  return (
    <div className="min-h-screen bg-parchment font-sans text-navy selection:bg-burgundy/20 selection:text-burgundy">
      {/* Header */}
      <header className="border-b border-paper-border bg-ivory/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-navy rounded-sm flex items-center justify-center text-parchment font-serif font-bold text-lg shadow-sm">
              P
            </div>
            <span className="font-serif text-2xl font-semibold tracking-wide text-navy">Prior</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-ink">
            <a href="#how-it-works" className="hover:text-navy transition-colors">How it Works</a>
            <a href="#features" className="hover:text-navy transition-colors">Features</a>
            <a href="#manifesto" className="hover:text-navy transition-colors">Manifesto</a>
          </nav>
          <div className="flex items-center gap-4">
            <Link to="/app" className="text-sm font-medium text-navy hover:text-burgundy transition-colors">
              Sign In
            </Link>
            <Link 
              to="/app" 
              className="px-5 py-2.5 bg-navy text-ivory text-sm font-medium rounded-md hover:bg-navy-light transition-colors shadow-sm flex items-center gap-2"
            >
              Enter Inbox
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-burgundy/20 bg-burgundy/5 text-burgundy text-xs font-semibold tracking-widest uppercase mb-8">
            <Shield className="w-3.5 h-3.5" />
            Invitation Only
          </div>
          
          <h1 className="font-serif text-6xl md:text-8xl font-medium tracking-tight text-navy leading-[1.1] mb-8">
            The gatekeeper for <br className="hidden md:block" />
            <span className="italic text-burgundy">high-value</span> attention.
          </h1>
          
          <p className="text-xl md:text-2xl text-ink max-w-2xl mx-auto leading-relaxed mb-12 font-light">
            Prior is an AI chief-of-staff that screens, scores, and summarizes your incoming messages. Preserve meaningful serendipity while filtering low-signal noise.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/app" 
              className="w-full sm:w-auto px-8 py-4 bg-navy text-ivory text-base font-medium rounded-md hover:bg-navy-light transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
            >
              Open Your Inbox
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/profile" 
              className="w-full sm:w-auto px-8 py-4 bg-white border border-paper-border text-navy text-base font-medium rounded-md hover:bg-ivory transition-all shadow-sm flex items-center justify-center gap-2"
            >
              View Sample Profile
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="how-it-works" className="py-24 bg-ivory border-y border-paper-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl text-navy mb-4">A Modern Post Office</h2>
            <p className="text-ink text-lg max-w-2xl mx-auto">
              We treat your attention as your most valuable asset. Every message is carefully inspected, graded, and routed before it reaches your desk.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border border-paper-border shadow-sm">
              <div className="w-12 h-12 bg-burgundy/10 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-burgundy" />
              </div>
              <h3 className="font-serif text-2xl text-navy mb-3">Intelligent Screening</h3>
              <p className="text-ink leading-relaxed">
                Senders must state their intent clearly. Our AI evaluates each message against your custom priorities and strictness levels.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-paper-border shadow-sm">
              <div className="w-12 h-12 bg-navy/10 rounded-lg flex items-center justify-center mb-6">
                <SlidersHorizontal className="w-6 h-6 text-navy" />
              </div>
              <h3 className="font-serif text-2xl text-navy mb-3">Signal Scoring</h3>
              <p className="text-ink leading-relaxed">
                Messages are assigned a credibility score. High-signal correspondence reaches your inbox; noise is held in the review queue.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-paper-border shadow-sm">
              <div className="w-12 h-12 bg-brass/20 rounded-lg flex items-center justify-center mb-6">
                <Mail className="w-6 h-6 text-brass-dark" />
              </div>
              <h3 className="font-serif text-2xl text-navy mb-3">Executive Summaries</h3>
              <p className="text-ink leading-relaxed">
                Stop reading long threads. Prior extracts the core ask, context, and suggested actions so you can decide in seconds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy text-ivory py-12 border-t border-navy-light">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-ivory rounded-sm flex items-center justify-center text-navy font-serif font-bold text-lg">
              P
            </div>
            <span className="font-serif text-xl font-semibold tracking-wide">Prior</span>
          </div>
          <p className="text-ivory/60 text-sm">
            &copy; {new Date().getFullYear()} Prior Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};
