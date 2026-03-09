import React, { useState } from 'react';
import { Send, UserCircle, ShieldCheck, AlertCircle, Info, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Compose = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    to: 'prior.id/twashin',
    subject: '',
    whyReachOut: '',
    exactAsk: '',
    whyThisPerson: '',
    whyNow: '',
    links: '',
    referral: '',
    body: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-parchment p-6">
      <div className="max-w-6xl mx-auto space-y-8 pb-12">
        <Link to="/app" className="inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-navy transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to App (Preview)
        </Link>
        <div>
          <h1 className="font-serif text-3xl text-navy mb-2">Compose Message</h1>
          <p className="text-ink text-sm">Send a structured, high-signal message through Prior.</p>
        </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Form */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white border border-paper-border rounded-lg shadow-sm p-8">
            <div className="space-y-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-ink-light mb-2">To</label>
                <div className="flex items-center gap-3 px-4 py-2 bg-ivory border border-paper-border rounded-md text-sm font-medium text-navy">
                  <UserCircle className="w-5 h-5 text-ink-light" />
                  {formData.to}
                  <span className="ml-auto px-2 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] uppercase tracking-wider font-bold rounded-sm">
                    Verified Receiver
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-ink-light mb-2">Subject</label>
                <input 
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Clear, specific subject line"
                  className="w-full px-4 py-2 bg-white border border-paper-border rounded-md text-sm focus:outline-none focus:border-brass focus:ring-1 focus:ring-brass transition-all"
                />
              </div>

              {step === 1 ? (
                <div className="space-y-6 pt-4 border-t border-paper-border">
                  <h3 className="font-serif text-xl text-navy">Context & Intent</h3>
                  <p className="text-sm text-ink mb-4">Prior requires context to accurately route your message. Be concise and specific.</p>
                  
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-ink-light mb-2">Why are you reaching out?</label>
                    <textarea 
                      name="whyReachOut"
                      value={formData.whyReachOut}
                      onChange={handleChange}
                      placeholder="Briefly explain your intent..."
                      className="w-full h-24 px-4 py-3 bg-white border border-paper-border rounded-md text-sm focus:outline-none focus:border-brass focus:ring-1 focus:ring-brass transition-all resize-none"
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-ink-light mb-2">What is your exact ask?</label>
                    <textarea 
                      name="exactAsk"
                      value={formData.exactAsk}
                      onChange={handleChange}
                      placeholder="e.g., A 15-minute call, feedback on a document, an introduction..."
                      className="w-full h-24 px-4 py-3 bg-white border border-paper-border rounded-md text-sm focus:outline-none focus:border-brass focus:ring-1 focus:ring-brass transition-all resize-none"
                    ></textarea>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-ink-light mb-2">Why this person specifically?</label>
                      <input 
                        type="text" 
                        name="whyThisPerson"
                        value={formData.whyThisPerson}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-white border border-paper-border rounded-md text-sm focus:outline-none focus:border-brass focus:ring-1 focus:ring-brass transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-ink-light mb-2">Mutual Connection (Optional)</label>
                      <input 
                        type="text" 
                        name="referral"
                        value={formData.referral}
                        onChange={handleChange}
                        placeholder="Name of referrer"
                        className="w-full px-4 py-2 bg-white border border-paper-border rounded-md text-sm focus:outline-none focus:border-brass focus:ring-1 focus:ring-brass transition-all"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end pt-4">
                    <button 
                      onClick={() => setStep(2)}
                      className="px-6 py-2 bg-navy text-white rounded-md text-sm font-medium hover:bg-navy-light transition-colors shadow-sm flex items-center gap-2"
                    >
                      Next: Draft Message
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-6 pt-4 border-t border-paper-border">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-xl text-navy">Full Message</h3>
                    <button 
                      onClick={() => setStep(1)}
                      className="text-sm font-medium text-ink hover:text-navy transition-colors"
                    >
                      Edit Context
                    </button>
                  </div>
                  
                  <div>
                    <textarea 
                      name="body"
                      value={formData.body}
                      onChange={handleChange}
                      placeholder="Draft your full message here..."
                      className="w-full h-64 px-4 py-4 bg-white border border-paper-border rounded-md text-sm focus:outline-none focus:border-brass focus:ring-1 focus:ring-brass transition-all resize-none font-sans leading-relaxed text-navy"
                    ></textarea>
                  </div>

                  <div className="flex justify-between items-center pt-4">
                    <div className="flex items-center gap-2 text-sm text-ink-light">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      Ready for AI screening
                    </div>
                    <button className="px-8 py-3 bg-navy text-white rounded-md text-sm font-medium hover:bg-navy-light transition-colors shadow-sm flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      Send via Prior
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-ivory border border-paper-border rounded-lg shadow-sm p-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-brass"></div>
            <h3 className="font-serif text-lg text-navy mb-4 flex items-center gap-2">
              <Info className="w-5 h-5 text-brass" />
              Receiver Preferences
            </h3>
            
            <div className="space-y-4">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-ink-light mb-2">Prioritizes</div>
                <ul className="space-y-2">
                  <li className="text-sm text-ink flex items-start gap-2">
                    <span className="text-emerald-600 mt-1">+</span>
                    Thoughtful founders & researchers
                  </li>
                  <li className="text-sm text-ink flex items-start gap-2">
                    <span className="text-emerald-600 mt-1">+</span>
                    Specific, concise asks
                  </li>
                  <li className="text-sm text-ink flex items-start gap-2">
                    <span className="text-emerald-600 mt-1">+</span>
                    Technical work in AI & robotics
                  </li>
                </ul>
              </div>
              
              <div className="pt-4 border-t border-paper-border">
                <div className="text-xs font-bold uppercase tracking-wider text-ink-light mb-2">Penalizes</div>
                <ul className="space-y-2">
                  <li className="text-sm text-ink flex items-start gap-2">
                    <span className="text-postal-red mt-1">-</span>
                    Vague sales pitches
                  </li>
                  <li className="text-sm text-ink flex items-start gap-2">
                    <span className="text-postal-red mt-1">-</span>
                    Generic networking ("pick your brain")
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white border border-paper-border rounded-lg shadow-sm p-6">
            <h3 className="font-serif text-lg text-navy mb-4">Signal Predictor</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-ink-light mb-1">
                  <span>Profile Credibility</span>
                  <span className="text-emerald-600">High</span>
                </div>
                <div className="w-full h-1.5 bg-paper-border rounded-full overflow-hidden">
                  <div className="w-4/5 h-full bg-emerald-500"></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-ink-light mb-1">
                  <span>Context Completeness</span>
                  <span className={step === 2 ? "text-emerald-600" : "text-amber-600"}>
                    {step === 2 ? "Good" : "Pending"}
                  </span>
                </div>
                <div className="w-full h-1.5 bg-paper-border rounded-full overflow-hidden">
                  <div className={`h-full transition-all duration-500 ${step === 2 ? "w-full bg-emerald-500" : "w-1/3 bg-amber-500"}`}></div>
                </div>
              </div>

              <div className="pt-4 border-t border-paper-border">
                <div className="flex items-start gap-3 p-3 bg-blue-50 border border-blue-100 rounded-md">
                  <AlertCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <p className="text-xs text-blue-800 leading-relaxed">
                    <strong>Tip:</strong> State your ask clearly in the first paragraph. Messages with ambiguous requests are 70% more likely to be held in the Review Queue.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
