import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, Mail, UserCircle, Sliders, CheckCircle2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export const Onboarding = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const handleNext = () => {
    if (step < 5) setStep(step + 1);
    else navigate('/app');
  };

  return (
    <div className="min-h-screen bg-parchment flex flex-col items-center justify-center p-6 relative">
      <div className="absolute inset-0 pointer-events-none opacity-40 z-0" style={{
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
        mixBlendMode: "multiply"
      }}></div>

      <div className="w-full max-w-2xl bg-white border border-paper-border rounded-xl shadow-xl relative z-10 overflow-hidden">
        {/* Header */}
        <div className="h-16 border-b border-paper-border bg-ivory flex items-center px-6 justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-navy rounded-sm flex items-center justify-center text-parchment font-serif font-bold text-xs">
              P
            </div>
            <span className="font-serif text-lg font-semibold tracking-wide text-navy">Prior</span>
          </div>
          <div className="text-xs font-bold uppercase tracking-wider text-ink-light">
            Step {step} of 5
          </div>
        </div>

        {/* Body */}
        <div className="p-8 md:p-12">
          {step === 1 && (
            <div className="text-center space-y-6">
              <div className="w-16 h-16 mx-auto rounded-full bg-ivory border border-brass/30 flex items-center justify-center">
                <ShieldCheck className="w-8 h-8 text-brass" />
              </div>
              <h1 className="font-serif text-3xl md:text-4xl text-navy">Welcome to Prior</h1>
              <p className="text-ink text-lg max-w-md mx-auto leading-relaxed">
                Your AI chief-of-staff is ready to protect your attention. Let's configure your inbox access controls.
              </p>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <h2 className="font-serif text-2xl text-navy mb-2">Connect your inbox</h2>
              <p className="text-ink text-sm mb-8">Prior needs access to your email to screen incoming messages.</p>
              
              <button className="w-full p-4 border border-paper-border rounded-lg bg-ivory hover:bg-black/5 transition-colors flex items-center justify-center gap-3">
                <Mail className="w-5 h-5 text-red-500" />
                <span className="font-medium text-navy">Continue with Google Workspace</span>
              </button>
              
              <div className="text-center text-xs text-ink-light mt-4">
                We only read incoming mail metadata and content for screening purposes. We never sell data.
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <h2 className="font-serif text-2xl text-navy mb-2">Claim your Prior ID</h2>
              <p className="text-ink text-sm mb-8">This is the public link you will share with people who want to reach you.</p>
              
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-ink-light mb-2">Username</label>
                <div className="flex items-center">
                  <span className="px-4 py-3 bg-ivory border border-r-0 border-paper-border rounded-l-md text-sm text-ink-light font-mono">prior.id/</span>
                  <input 
                    type="text" 
                    placeholder="yourname"
                    className="w-full px-4 py-3 bg-white border border-paper-border rounded-r-md text-sm focus:outline-none focus:border-brass focus:ring-1 focus:ring-brass transition-all text-navy font-medium font-mono"
                  />
                </div>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-6">
              <h2 className="font-serif text-2xl text-navy mb-2">Define your priorities</h2>
              <p className="text-ink text-sm mb-8">Tell Prior what kind of correspondence matters to you right now.</p>
              
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-ink-light mb-2">I want to hear from...</label>
                <div className="flex flex-wrap gap-2">
                  {['Founders', 'Researchers', 'Investors', 'Students', 'Operators', 'Journalists'].map((tag, i) => (
                    <button key={i} className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-colors ${i < 3 ? 'bg-navy text-white border-navy' : 'bg-ivory text-ink border-paper-border hover:bg-black/5'}`}>
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <label className="block text-xs font-bold uppercase tracking-wider text-ink-light mb-2">Topics of interest</label>
                <input 
                  type="text" 
                  placeholder="e.g., AI, robotics, climate tech..."
                  className="w-full px-4 py-3 bg-white border border-paper-border rounded-md text-sm focus:outline-none focus:border-brass focus:ring-1 focus:ring-brass transition-all text-navy font-medium"
                />
              </div>
            </div>
          )}

          {step === 5 && (
            <div className="space-y-6 text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-emerald-600" />
              </div>
              <h2 className="font-serif text-3xl text-navy mb-2">Your inbox is now protected</h2>
              <p className="text-ink text-sm max-w-md mx-auto leading-relaxed mb-8">
                Prior is currently scanning your recent inbound to establish baselines. You can refine your preferences at any time.
              </p>
              
              <div className="p-4 bg-ivory border border-paper-border rounded-lg text-left">
                <div className="text-xs font-bold uppercase tracking-wider text-ink-light mb-2">Access Mode</div>
                <div className="font-semibold text-navy mb-1">Selective</div>
                <div className="text-sm text-ink">Filtering low-signal noise, prioritizing relevance based on your topics.</div>
              </div>
            </div>
          )}

          {/* Footer Actions */}
          <div className="mt-12 flex justify-between items-center pt-6 border-t border-paper-border">
            {step > 1 ? (
              <button 
                onClick={() => setStep(step - 1)}
                className="text-sm font-medium text-ink hover:text-navy transition-colors"
              >
                Back
              </button>
            ) : <div></div>}
            
            <button 
              onClick={handleNext}
              className="px-6 py-2.5 bg-navy text-white rounded-md text-sm font-medium hover:bg-navy-light transition-colors shadow-sm flex items-center gap-2"
            >
              {step === 5 ? 'Enter Inbox' : 'Continue'}
              {step < 5 && <ArrowRight className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
