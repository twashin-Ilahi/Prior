import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Mail, 
  Search, 
  Archive, 
  ArrowRight, 
  Lock, 
  FileText, 
  Send, 
  Clock, 
  CheckCircle2,
  Inbox,
  X,
  Stamp
} from 'lucide-react';

const Hero = () => (
  <section className="w-full max-w-7xl mx-auto px-6 pt-16 pb-24 md:pt-24 md:pb-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-xl"
    >
      <div className="inline-flex items-center gap-2 px-3 py-1 border border-paper-border bg-ivory rounded-full mb-8">
        <span className="w-2 h-2 rounded-full bg-postal-red"></span>
        <span className="text-xs font-semibold tracking-widest uppercase text-ink">Now Accepting Applications</span>
      </div>
      <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-navy mb-6">
        Your inbox should protect your attention.
      </h1>
      <p className="text-lg md:text-xl text-ink leading-relaxed mb-10 font-light">
        The AI chief-of-staff for your attention. Prior learns your priorities, and delivers only the messages worth your time.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <a href="https://priormail.app/" className="bg-navy text-parchment px-8 py-4 text-base font-medium rounded-sm hover:bg-navy-light transition-colors shadow-md flex items-center justify-center gap-2">
          Access Now <ArrowRight className="w-4 h-4" />
        </a>
        <button className="bg-transparent border border-paper-border text-navy px-8 py-4 text-base font-medium rounded-sm hover:bg-white/50 transition-colors flex items-center justify-center gap-2">
          See How It Works
        </button>
      </div>
    </motion.div>

    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
      className="relative h-[500px] w-full flex items-center justify-center"
    >
      {/* Abstract sorting desk visual */}
      <div className="absolute inset-0 bg-ivory border border-paper-border rounded-lg shadow-xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="h-12 border-b border-paper-border bg-parchment/50 flex items-center px-4 justify-between">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full border border-paper-border"></div>
            <div className="w-3 h-3 rounded-full border border-paper-border"></div>
            <div className="w-3 h-3 rounded-full border border-paper-border"></div>
          </div>
          <div className="font-serif text-xs uppercase tracking-widest text-ink font-semibold">Sorting Desk</div>
          <div className="w-12"></div>
        </div>
        
        {/* Body */}
        <div className="flex-1 p-6 relative bg-[#FDFCF9] overflow-hidden">
          {/* Background grid lines */}
          <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(var(--color-paper-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-paper-border) 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.3 }}></div>
          
          {/* Envelopes/Cards */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 left-10 right-10 bg-white border border-paper-border p-4 shadow-sm z-10"
          >
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-parchment rounded-full flex items-center justify-center text-navy font-serif italic">A</div>
                <div>
                  <div className="text-sm font-medium text-navy">Alexander Wright</div>
                  <div className="text-xs text-ink-light">Partnership Inquiry</div>
                </div>
              </div>
              <div className="px-2 py-1 bg-parchment border border-brass/30 text-[10px] uppercase tracking-wider text-brass font-semibold">
                Priority
              </div>
            </div>
            <div className="h-2 bg-parchment rounded w-3/4 mb-2"></div>
            <div className="h-2 bg-parchment rounded w-1/2"></div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-36 left-14 right-6 bg-white border border-paper-border p-4 shadow-sm z-20"
          >
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-parchment rounded-full flex items-center justify-center text-navy font-serif italic">E</div>
                <div>
                  <div className="text-sm font-medium text-navy">Elena Rostova</div>
                  <div className="text-xs text-ink-light">Q3 Board Materials</div>
                </div>
              </div>
              <div className="px-2 py-1 bg-parchment border border-navy/20 text-[10px] uppercase tracking-wider text-navy font-semibold">
                Review
              </div>
            </div>
            <div className="h-2 bg-parchment rounded w-full mb-2"></div>
            <div className="h-2 bg-parchment rounded w-2/3"></div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-64 left-8 right-12 bg-white/60 border border-paper-border p-4 shadow-sm z-0 opacity-60"
          >
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-parchment rounded-full flex items-center justify-center text-ink font-serif italic">S</div>
                <div>
                  <div className="text-sm font-medium text-ink">SaaS Newsletter</div>
                  <div className="text-xs text-ink-light">Weekly Update</div>
                </div>
              </div>
              <div className="px-2 py-1 bg-parchment border border-paper-border text-[10px] uppercase tracking-wider text-ink-light font-semibold">
                Filtered
              </div>
            </div>
            <div className="h-2 bg-parchment rounded w-5/6 mb-2"></div>
            <div className="h-2 bg-parchment rounded w-1/3"></div>
          </motion.div>
          
          {/* Wax seal decoration */}
          <div className="absolute bottom-6 right-6 w-16 h-16 rounded-full bg-postal-red/10 border border-postal-red/20 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-postal-red flex items-center justify-center text-white shadow-inner">
              <ShieldCheck className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

const TrustStrip = () => (
  <div className="w-full border-y border-paper-border bg-ivory py-6">
    <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-4">
      {[
        "Intelligent inbound screening",
        "Preference-aware message routing",
        "Verified sender identity",
        "Designed for high-value correspondence"
      ].map((text, i) => (
        <div key={i} className="flex items-center gap-3">
          {i > 0 && <div className="hidden md:block w-1 h-1 rounded-full bg-brass/50"></div>}
          <span className="font-serif italic text-ink text-sm md:text-base tracking-wide">{text}</span>
        </div>
      ))}
    </div>
  </div>
);

const ProblemSection = () => (
  <section id="manifesto" className="w-full max-w-7xl mx-auto px-6 py-24 md:py-32">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
      <div className="lg:col-span-5">
        <h2 className="font-serif text-3xl md:text-4xl leading-tight text-navy mb-6">
          In the age of AI-generated outreach, the cost of sending has collapsed. <span className="text-burgundy italic">The cost of receiving has not.</span>
        </h2>
        <p className="text-ink leading-relaxed mb-8">
          Your inbox was designed for an era when writing a message took effort. Today, anyone can generate thousands of personalized emails in seconds. The result is a flood of low-signal noise that buries valuable correspondence and forces important people to close their doors entirely.
        </p>
        <div className="w-16 h-px bg-brass mb-8"></div>
        <p className="font-serif italic text-lg text-navy">
          Prior restores the balance.
        </p>
      </div>
      
      <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-ivory border border-paper-border p-8 relative stamp-border">
          <Mail className="w-6 h-6 text-postal-red mb-4" />
          <h3 className="font-serif text-xl text-navy mb-3">Mail Overflow</h3>
          <p className="text-sm text-ink leading-relaxed">
            Standard spam filters catch malicious emails, but they fail to stop polite, AI-generated noise that demands your attention.
          </p>
        </div>
        <div className="bg-ivory border border-paper-border p-8 relative stamp-border mt-0 sm:mt-8">
          <Archive className="w-6 h-6 text-brass mb-4" />
          <h3 className="font-serif text-xl text-navy mb-3">Lost Correspondence</h3>
          <p className="text-sm text-ink leading-relaxed">
            When your inbox is flooded, truly valuable messages—opportunities, personal notes, critical updates—get buried in the pile.
          </p>
        </div>
        <div className="bg-ivory border border-paper-border p-8 relative stamp-border">
          <Lock className="w-6 h-6 text-navy mb-4" />
          <h3 className="font-serif text-xl text-navy mb-3">Sealed Doors</h3>
          <p className="text-sm text-ink leading-relaxed">
            To protect their time, high-value individuals resort to aggressive gatekeeping, inadvertently blocking serendipitous connections.
          </p>
        </div>
        <div className="bg-ivory border border-paper-border p-8 relative stamp-border mt-0 sm:mt-8">
          <Search className="w-6 h-6 text-burgundy mb-4" />
          <h3 className="font-serif text-xl text-navy mb-3">Sorting Failures</h3>
          <p className="text-sm text-ink leading-relaxed">
            Manual triage is exhausting. You spend hours acting as a human router rather than engaging with the content that matters.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const MidBanner = () => (
  <section className="w-full bg-navy py-16 md:py-20 relative overflow-hidden border-y border-white/10">
    <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
    <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
      <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-parchment font-light tracking-wide">
        Remain accessible to <span className="italic text-brass">life-changing opportunities.</span>
      </h2>
    </div>
  </section>
);

const HowItWorks = () => (
  <section id="how-it-works" className="w-full bg-ivory border-y border-paper-border py-24 md:py-32 relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full paper-texture"></div>
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="font-serif text-4xl md:text-5xl text-navy mb-6">The Routing System</h2>
        <p className="text-ink text-lg">A sophisticated, multi-stage screening process designed to protect your attention while preserving access. Powered by the PRXP protocol and Wingman AI Kaya.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
        {/* Connecting line for desktop */}
        <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-px bg-paper-border border-t border-dashed border-brass/50"></div>

        {[
          {
            step: "01",
            title: "Connect",
            desc: "Securely link your existing inbox. Prior works quietly in the background.",
            icon: <Lock className="w-5 h-5 text-navy" />
          },
          {
            step: "02",
            title: "Define",
            desc: "Set your preferences, trusted contacts, and what topics matter to you right now.",
            icon: <FileText className="w-5 h-5 text-navy" />
          },
          {
            step: "03",
            title: "Screen",
            desc: "Wingman AI Kaya evaluates incoming messages for signal, intent, and relevance.",
            icon: <Search className="w-5 h-5 text-navy" />
          },
          {
            step: "04",
            title: "Review",
            desc: "Engage only with high-signal correspondence, neatly organized for your review.",
            icon: <CheckCircle2 className="w-5 h-5 text-navy" />
          }
        ].map((item, i) => (
          <div key={i} className="relative flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full bg-parchment border border-paper-border flex items-center justify-center mb-6 relative z-10 shadow-sm">
              <div className="absolute top-2 right-2 text-[10px] font-mono text-ink-light">{item.step}</div>
              {item.icon}
            </div>
            <h3 className="font-serif text-xl text-navy mb-3">{item.title}</h3>
            <p className="text-sm text-ink leading-relaxed px-4">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Features = () => (
  <section id="features" className="w-full max-w-7xl mx-auto px-6 py-24 md:py-32">
    <div className="mb-16">
      <h2 className="font-serif text-4xl md:text-5xl text-navy mb-6">Official Services</h2>
      <p className="text-ink text-lg max-w-2xl">Tools designed for the modern correspondent. Every feature is built to maximize signal and minimize noise.</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        {
          title: "AI Signal Scoring",
          desc: "Every message receives a signal score based on your unique preferences, sender history, and content quality.",
          icon: <Search className="w-5 h-5" />
        },
        {
          title: "Preference-Aware Filtering",
          desc: "Prior learns what you care about. Tell it you're raising a round, and investor outreach gets prioritized.",
          icon: <ShieldCheck className="w-5 h-5" />
        },
        {
          title: "Verified Sender Profiles",
          desc: "See exactly who is emailing you with enriched profiles, verifying identity before you even open the message.",
          icon: <Lock className="w-5 h-5" />
        },
        {
          title: "Signal Inbox",
          desc: "A clean, distraction-free environment containing only the messages that have passed the screening process.",
          icon: <Inbox className="w-5 h-5" />
        },
        {
          title: "Review Queue",
          desc: "Borderline messages are held in a daily digest for quick review, ensuring nothing important is accidentally lost.",
          icon: <Clock className="w-5 h-5" />
        },
        {
          title: "Trusted Access Controls",
          desc: "Issue VIP passes to specific individuals or domains, guaranteeing they bypass the filter and reach you instantly.",
          icon: <Stamp className="w-5 h-5" />
        }
      ].map((feature, i) => (
        <div key={i} className="bg-white border border-paper-border p-8 hover:shadow-md transition-shadow group cursor-pointer">
          <div className="w-10 h-10 rounded-full bg-ivory border border-paper-border flex items-center justify-center text-navy mb-6 group-hover:bg-navy group-hover:text-white transition-colors">
            {feature.icon}
          </div>
          <h3 className="font-serif text-xl text-navy mb-3">{feature.title}</h3>
          <p className="text-sm text-ink leading-relaxed">{feature.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

const ProductPreview = () => (
  <section className="w-full bg-navy py-24 md:py-32 relative overflow-hidden">
    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="text-center mb-16">
        <h2 className="font-serif text-4xl md:text-5xl text-parchment mb-6">The Signal Interface</h2>
        <p className="text-parchment/70 text-lg max-w-2xl mx-auto">A calm, structured environment for reviewing your most important correspondence.</p>
      </div>

      {/* Mockup Window */}
      <div className="max-w-5xl mx-auto bg-parchment rounded-xl overflow-hidden shadow-2xl border border-white/10">
        {/* Window Header */}
        <div className="h-14 bg-ivory border-b border-paper-border flex items-center px-6 justify-between">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-postal-red/80"></div>
            <div className="w-3 h-3 rounded-full bg-brass/80"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
          </div>
          <div className="font-serif font-semibold text-navy tracking-wide">Prior</div>
          <div className="flex items-center gap-4 text-sm text-ink font-medium">
            <span className="text-navy">Inbox</span>
            <span className="opacity-50">Review (12)</span>
            <span className="opacity-50">Archive</span>
          </div>
        </div>

        {/* Window Body */}
        <div className="flex h-[500px]">
          {/* Sidebar */}
          <div className="w-64 border-r border-paper-border bg-[#FDFCF9] p-4 hidden md:block">
            <div className="mb-8">
              <div className="text-xs font-bold uppercase tracking-wider text-ink-light mb-4 px-2">Views</div>
              <div className="flex items-center gap-3 px-2 py-2 bg-navy/5 text-navy rounded-md font-medium text-sm mb-1">
                <Inbox className="w-4 h-4" /> Signal Inbox
              </div>
              <div className="flex items-center gap-3 px-2 py-2 text-ink hover:bg-black/5 rounded-md font-medium text-sm mb-1">
                <Clock className="w-4 h-4" /> Review Queue
              </div>
              <div className="flex items-center gap-3 px-2 py-2 text-ink hover:bg-black/5 rounded-md font-medium text-sm">
                <Archive className="w-4 h-4" /> Filtered
              </div>
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-ink-light mb-4 px-2">Priorities</div>
              <div className="flex items-center gap-2 px-2 py-1.5 text-sm text-ink">
                <span className="w-2 h-2 rounded-full bg-brass"></span> Investors
              </div>
              <div className="flex items-center gap-2 px-2 py-1.5 text-sm text-ink">
                <span className="w-2 h-2 rounded-full bg-burgundy"></span> Key Hires
              </div>
              <div className="flex items-center gap-2 px-2 py-1.5 text-sm text-ink">
                <span className="w-2 h-2 rounded-full bg-navy"></span> Partners
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 bg-white flex flex-col">
            {/* List Header */}
            <div className="h-12 border-b border-paper-border flex items-center px-6 justify-between text-xs font-semibold uppercase tracking-wider text-ink-light">
              <span>Sender</span>
              <span>Signal Score</span>
            </div>
            
            {/* Email Items */}
            <div className="flex-1 overflow-y-auto">
              {[
                { name: "Sarah Jenkins", subject: "Follow up: Series A Lead", score: "98", tag: "Investor", active: true },
                { name: "Michael Chen", subject: "Introduction from David", score: "92", tag: "Network", active: false },
                { name: "Stripe Team", subject: "Action Required: Account Update", score: "85", tag: "Admin", active: false },
                { name: "Acme Corp", subject: "Partnership Proposal", score: "78", tag: "Review", active: false },
              ].map((item, i) => (
                <div key={i} className={`flex items-center justify-between p-4 border-b border-paper-border cursor-pointer ${item.active ? 'bg-navy/5 border-l-2 border-l-navy' : 'hover:bg-black/5 border-l-2 border-l-transparent'}`}>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-parchment flex items-center justify-center font-serif text-navy italic border border-paper-border">
                      {item.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-medium text-navy text-sm">{item.name}</div>
                      <div className="text-ink text-sm">{item.subject}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="px-2 py-1 bg-parchment border border-paper-border text-[10px] uppercase tracking-wider text-ink font-semibold rounded-sm">
                      {item.tag}
                    </span>
                    <div className="flex items-center gap-1 text-navy font-mono text-sm font-medium">
                      {item.score} <span className="text-brass">✦</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Serendipity = () => (
  <section className="w-full max-w-4xl mx-auto px-6 py-24 md:py-32 text-center">
    <div className="w-16 h-16 mx-auto mb-8 rounded-full bg-ivory border border-brass/30 flex items-center justify-center">
      <Mail className="w-6 h-6 text-brass" />
    </div>
    <h2 className="font-serif text-4xl md:text-5xl text-navy mb-8">Protection without isolation.</h2>
    <p className="text-xl md:text-2xl text-ink leading-relaxed font-light mb-8">
      Prior does not build a wall around you. It builds a highly intelligent gate. It helps meaningful outreach get through — even in a world flooded with synthetic noise.
    </p>
    <p className="font-serif italic text-2xl md:text-3xl text-navy mb-12">
      No more gatekeeping your contact info!
    </p>
    <div className="w-24 h-px bg-paper-border mx-auto"></div>
  </section>
);

const AnimatedMailbox = () => (
  <section className="w-full bg-[#FDFCF9] border-y border-paper-border py-24 md:py-32 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="text-center mb-16">
        <h2 className="font-serif text-3xl md:text-4xl text-navy mb-4">The Final Destination for Signal</h2>
        <p className="text-ink text-lg max-w-2xl mx-auto">While the noise is filtered away, your most important messages are elevated.</p>
      </div>
      
      <div className="relative w-full max-w-4xl mx-auto h-[400px] flex items-center justify-center rounded-xl border border-paper-border bg-ivory shadow-inner overflow-hidden">
        
        {/* Sky Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/40 to-transparent"></div>

        {/* Clouds */}
        <motion.div 
          animate={{ x: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-12 left-10 text-white/80"
        >
          <svg width="100" height="50" viewBox="0 0 64 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 32C8.05887 32 0 23.9411 0 14C0 4.05887 8.05887 0 18 0C25.3266 0 31.6325 4.37569 34.469 10.5898C36.1914 9.57006 38.2257 9 40.4 9C47.0274 9 52.4 14.3726 52.4 21C52.4 21.3533 52.3847 21.703 52.3547 22.0487C58.4608 22.8437 63.2 28.0673 63.2 34.4C63.2 41.58 57.38 47.4 50.2 47.4H18C8.05887 47.4 0 39.3411 0 29.4C0 20.9142 5.86907 13.7958 13.8242 11.8906C14.8622 5.25367 20.613 0 27.6 0C34.1292 0 39.6385 4.38092 41.2855 10.3792C42.8124 9.48916 44.5912 9 46.5 9C52.5751 9 57.5 13.9249 57.5 20C57.5 20.1264 57.4979 20.2523 57.4937 20.3777C61.8385 21.5794 65 25.5683 65 30.3C65 35.6572 60.6572 40 55.3 40H18Z" />
          </svg>
        </motion.div>

        <motion.div 
          animate={{ x: [0, -20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-20 right-20 text-white/90 scale-75"
        >
          <svg width="80" height="40" viewBox="0 0 64 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 32C8.05887 32 0 23.9411 0 14C0 4.05887 8.05887 0 18 0C25.3266 0 31.6325 4.37569 34.469 10.5898C36.1914 9.57006 38.2257 9 40.4 9C47.0274 9 52.4 14.3726 52.4 21C52.4 21.3533 52.3847 21.703 52.3547 22.0487C58.4608 22.8437 63.2 28.0673 63.2 34.4C63.2 41.58 57.38 47.4 50.2 47.4H18C8.05887 47.4 0 39.3411 0 29.4C0 20.9142 5.86907 13.7958 13.8242 11.8906C14.8622 5.25367 20.613 0 27.6 0C34.1292 0 39.6385 4.38092 41.2855 10.3792C42.8124 9.48916 44.5912 9 46.5 9C52.5751 9 57.5 13.9249 57.5 20C57.5 20.1264 57.4979 20.2523 57.4937 20.3777C61.8385 21.5794 65 25.5683 65 30.3C65 35.6572 60.6572 40 55.3 40H18Z" />
          </svg>
        </motion.div>

        {/* Mailbox */}
        <div className="absolute bottom-12 right-[15%] md:right-[25%] w-32 h-48 z-20">
          {/* Shadow */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-28 h-6 bg-black/10 rounded-[100%] blur-sm"></div>
          
          {/* Post */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-28 bg-zinc-300 border-r-4 border-zinc-400"></div>
          
          {/* Box */}
          <div className="absolute bottom-24 left-1/2 -translate-x-1/2 w-36 h-24 bg-postal-red rounded-t-[3rem] rounded-b-lg shadow-xl border-b-[6px] border-r-[6px] border-red-900/40 flex items-center justify-center relative overflow-hidden">
            {/* Mailbox Door (Front face) */}
            <div className="absolute left-0 w-12 h-24 bg-red-800/60 rounded-r-[2.5rem] border-r-2 border-red-900/30 flex items-center justify-center">
               {/* Handle */}
               <div className="absolute right-2 w-2 h-6 bg-zinc-800 rounded-full"></div>
            </div>
            {/* Mailbox Slot */}
            <div className="absolute left-14 w-16 h-2 bg-black/80 rounded-full shadow-inner top-8"></div>
            
            {/* Flag */}
            <motion.div 
              animate={{ rotate: [0, -90, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-6 right-4 w-2 h-12 bg-red-500 origin-bottom rounded-full border border-red-700 shadow-sm z-30"
            />
          </div>
        </div>

        {/* Character */}
        <div className="absolute bottom-12 left-[15%] md:left-[30%] w-32 h-48 z-20 flex flex-col items-center justify-end">
           {/* Shadow */}
           <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-black/10 rounded-[100%] blur-sm"></div>
           
           {/* Legs */}
           <div className="flex gap-5 absolute bottom-0">
             <div className="w-4 h-20 bg-navy rounded-b-sm"></div>
             <div className="w-4 h-20 bg-navy rounded-b-sm"></div>
           </div>

           {/* Body */}
           <div className="absolute bottom-16 w-20 h-24 bg-navy rounded-xl shadow-md flex flex-col items-center justify-start pt-2">
              {/* Tie / Detail */}
              <div className="w-3 h-12 bg-postal-red rounded-b-full"></div>
           </div>

           {/* Head */}
           <div className="absolute bottom-36 w-16 h-16 bg-parchment border-[3px] border-navy rounded-full flex items-center justify-center shadow-sm z-30">
              {/* Glasses */}
              <div className="flex gap-1.5 -mt-2">
                <div className="w-5 h-5 border-[3px] border-navy rounded-full bg-white"></div>
                <div className="w-5 h-5 border-[3px] border-navy rounded-full bg-white"></div>
              </div>
           </div>

           {/* Arm reading (Left arm) */}
           <motion.div 
             animate={{ rotate: [-5, 5, -5] }}
             transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
             className="absolute bottom-28 -left-8 w-14 h-4 bg-navy rounded-full origin-right flex items-center justify-start z-40"
           >
             {/* Hand */}
             <div className="w-5 h-5 bg-parchment rounded-full absolute -left-2"></div>
             {/* Letter being read */}
             <div className="absolute -left-10 -top-8 w-12 h-10 bg-white border border-paper-border shadow-sm rotate-12 flex flex-col p-1.5 gap-1.5">
               <div className="w-full h-1 bg-red-500/30"></div>
               <div className="w-2/3 h-1 bg-navy/20"></div>
               <div className="w-full h-1 bg-navy/20"></div>
             </div>
           </motion.div>

           {/* Arm sending (Right arm) */}
           <motion.div 
             animate={{ rotate: [0, -130, 0] }}
             transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
             className="absolute bottom-28 -right-4 w-16 h-4 bg-navy rounded-full origin-left flex items-center justify-end z-10"
           >
             {/* Hand */}
             <div className="w-5 h-5 bg-parchment rounded-full absolute -right-2"></div>
           </motion.div>
        </div>

        {/* Letters flying into Mailbox */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`in-${i}`}
            initial={{ opacity: 0, left: "-10%", top: "20%", rotate: -30, scale: 0.6 }}
            animate={{ 
              opacity: [0, 1, 1, 0], 
              left: ["-10%", "20%", "50%", "72%"], 
              top: ["20%", "30%", "40%", "60%"],
              rotate: [-30, -10, 10, 20],
              scale: [0.6, 0.8, 0.9, 0.4]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              delay: i * 0.7,
              ease: "easeInOut" 
            }}
            className="absolute w-12 h-8 bg-white border border-paper-border shadow-sm z-30 flex flex-col justify-center px-1.5 gap-1"
          >
            <div className="w-full h-1 bg-red-500/30"></div>
            <div className="w-3/4 h-1 bg-navy/20"></div>
          </motion.div>
        ))}

        {/* Letters flying to the sky */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`out-${i}`}
            initial={{ opacity: 0, left: "35%", bottom: "30%", rotate: 0, scale: 0.8 }}
            animate={{ 
              opacity: [0, 1, 0], 
              left: ["35%", "30%", "20%"], 
              bottom: ["30%", "60%", "100%"],
              rotate: [0, 45, 90],
              scale: [0.8, 1.2, 1.5]
            }}
            transition={{ 
              duration: 2.5, 
              repeat: Infinity, 
              delay: i * 0.5 + 0.2,
              ease: "easeOut" 
            }}
            className="absolute w-14 h-10 bg-parchment border border-brass/40 shadow-md z-10 flex flex-col items-center justify-center gap-1"
          >
            <div className="w-8 h-1 bg-brass/40 rounded-full"></div>
            <div className="w-6 h-1 bg-brass/40 rounded-full"></div>
            {/* Wax seal */}
            <div className="absolute -right-2 -bottom-2 w-4 h-4 rounded-full bg-postal-red shadow-sm"></div>
          </motion.div>
        ))}

      </div>
    </div>
  </section>
);

const CTA = () => (
  <section className="w-full max-w-5xl mx-auto px-6 pb-24 md:pb-32">
    <div className="bg-ivory border border-paper-border p-12 md:p-20 text-center relative stamp-border">
      {/* Decorative corners */}
      <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-brass/50"></div>
      <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-brass/50"></div>
      <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-brass/50"></div>
      <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-brass/50"></div>

      <div className="w-16 h-16 mx-auto mb-8 rounded-full bg-postal-red/10 flex items-center justify-center">
        <Stamp className="w-8 h-8 text-postal-red" />
      </div>
      
      <h2 className="font-serif text-4xl md:text-5xl text-navy mb-6">Open your inbox to signal again.</h2>
      <p className="text-ink text-lg mb-10 max-w-xl mx-auto">
        Join the waitlist to secure early access. We are onboarding new members in carefully curated cohorts.
      </p>
      
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a href="https://priormail.app/" className="inline-block bg-navy text-parchment px-8 py-4 text-base font-medium rounded-sm hover:bg-navy-light transition-colors shadow-md">
          Access Now
        </a>
        <button className="bg-transparent border border-paper-border text-navy px-8 py-4 text-base font-medium rounded-sm hover:bg-white/50 transition-colors">
          Book a Demo
        </button>
      </div>
    </div>
  </section>
);

export default function LandingPage() {
  return (
    <main>
      <Hero />
      <TrustStrip />
      <ProblemSection />
      <MidBanner />
      <HowItWorks />
      <Features />
      <ProductPreview />
      <Serendipity />
      <AnimatedMailbox />
      <CTA />
    </main>
  );
}
