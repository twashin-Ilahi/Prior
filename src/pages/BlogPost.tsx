import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Share2, Bookmark, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BlogPost() {
  return (
    <main className="w-full bg-[#FDFCF9] min-h-screen pt-24 pb-32">
      <article className="max-w-3xl mx-auto px-6">
        
        {/* Back link */}
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-ink-light hover:text-navy transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        {/* Header */}
        <header className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-parchment border border-paper-border text-xs uppercase tracking-wider text-navy font-semibold rounded-sm">
              Manifesto
            </span>
            <span className="text-sm text-ink-light font-medium">March 8, 2026</span>
          </div>
          
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-navy mb-8">
            The Inbox is Dead. Long Live the Sovereign Protocol.
          </h1>
          
          <div className="flex items-center justify-between py-6 border-y border-paper-border">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-ivory border border-paper-border flex items-center justify-center font-serif text-navy italic text-xl">
                T
              </div>
              <div>
                <div className="font-medium text-navy">Twashin Ilahi</div>
                <div className="text-sm text-ink-light">Founder & CEO, Prior</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <button className="w-10 h-10 rounded-full bg-white border border-paper-border flex items-center justify-center text-ink hover:text-navy hover:bg-ivory transition-colors">
                <Twitter className="w-4 h-4" />
              </button>
              <a 
                href="https://www.linkedin.com/in/md-twashin-ilahi-b9baa4261/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white border border-paper-border flex items-center justify-center text-ink hover:text-navy hover:bg-ivory transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <button className="w-10 h-10 rounded-full bg-white border border-paper-border flex items-center justify-center text-ink hover:text-navy hover:bg-ivory transition-colors">
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="prose prose-lg prose-slate max-w-none font-light text-ink leading-relaxed">
          <p className="text-xl md:text-2xl text-navy font-serif italic mb-10 leading-relaxed">
            In 2026, the fundamental economics of communication have inverted. For the first time in human history, the cost of generating a perfectly personalized, contextually accurate lie is exactly $0.
          </p>

          <p className="mb-6">
            The Turing Test hasn't just been passed; it has been weaponized. AI agents can now scrape a LinkedIn profile, read a recent publication, and generate thousands of hyper-targeted cold emails in seconds. Traditional spam filters, which look for "spammy" keywords, are entirely blind to this. To a standard email client, an AI bot and a passionate, early-stage founder look exactly the same.
          </p>

          <p className="mb-10">
            The result is a structural collapse of the public square.
          </p>

          <p className="mb-6">
            We are seeing the rise of the <strong>Asymmetric Receiver</strong>—venture capitalists, government officials, university professors, and high-profile operators who receive exponentially more inbound messages than they could ever process. To survive the noise, they are doing the only thing they can: closing their doors. DMs are locked. Inboxes are gated behind executive assistants.
          </p>

          <p className="mb-6">
            But when we close the gates, we lose the magic of the internet. We lose serendipity. We lose the brilliant cold-pitch from a student halfway across the world.
          </p>

          <p className="mb-12 font-medium text-navy text-xl">
            We don't need a better spam filter. We need a new standard for human priority.
          </p>

          <h2 className="font-serif text-3xl text-navy mt-16 mb-6">Enter PRXP: The Resistor in the Circuit</h2>
          
          <p className="mb-6">
            In electrical engineering, when a circuit is flooded with infinite, unregulated current, you don't build a bigger wire. You build a <strong>Resistor</strong>. You introduce intentional friction to control the flow and harness the energy.
          </p>

          <p className="mb-6">
            That is the philosophy behind the <strong>Public Relation Exchange Protocol (PRXP)</strong>.
          </p>

          <p className="mb-6">
            PRXP is a decentralized, AI-powered protocol designed to fundamentally change how digital access is granted. It shifts the paradigm of digital communication from <em>Open-by-Default</em> to <em>Verified-by-Default</em>.
          </p>

          <p className="mb-12">
            Instead of allowing anyone to push noise into your life for free, PRXP requires senders to prove their "Signal" before they ever reach your screen.
          </p>

          <div className="bg-ivory border border-paper-border p-8 my-12 relative stamp-border">
            <h3 className="font-serif text-2xl text-navy mb-6">How the Protocol Works</h3>
            <p className="mb-6 text-base">
              PRXP is built on two foundational pillars that make "Agentic Spam" mathematically and economically impossible to scale:
            </p>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-navy text-lg mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-parchment border border-paper-border flex items-center justify-center text-xs font-mono">1</span>
                  Proof-of-Intent (Staking)
                </h4>
                <p className="text-base">
                  To send a message via PRXP, an unverified sender must attach a micro-stake. This could be a computational proof-of-work (forcing their device to solve a complex problem), a social vouch from a mutual connection, or a financial micro-payment. If the receiver replies, the stake is returned. If the receiver flags it as noise, the stake is burned. Bots cannot afford to stake; humans with genuine intent can.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-navy text-lg mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-parchment border border-paper-border flex items-center justify-center text-xs font-mono">2</span>
                  Dynamic Verity Scoring
                </h4>
                <p className="text-base">
                  Before a message is delivered, the PRXP AI engine analyzes the sender's verifiable digital footprint—GitHub commits, academic records, professional history—and assigns a Verity Score from 0 to 100.
                </p>
              </div>
            </div>
          </div>

          <h2 className="font-serif text-3xl text-navy mt-16 mb-6">Prior: The First Sovereign Inbox</h2>
          
          <p className="mb-6">
            A protocol is only as good as the interface that wields it. That is why we are building <strong>Prior</strong>, the first consumer application powered by PRXP.
          </p>

          <p className="mb-6">
            Prior acts as an AI chief-of-staff for your attention. When you use a Prior handle (<code>priormail.id/yourname</code>) on your business card or social bio, you are handing out a secure gateway, not an open vulnerability.
          </p>

          <p className="mb-6">
            Inside the Prior dashboard, the traditional chronological inbox is gone. Instead, receivers get a prioritized list of high-signal opportunities, complete with 3-bullet AI context briefs: <em>Who is this? What is their verifiable context? What is the exact ask?</em>
          </p>

          <p className="mb-12">
            You control the "Resistor Dial." If you are doing deep work, turn the threshold up so only a 95+ Verity Score gets through. If you are actively looking for deal flow, widen the filter.
          </p>

          <h2 className="font-serif text-3xl text-navy mt-16 mb-6">Scaling to Every Business Card</h2>
          
          <p className="mb-6">
            Our vision at Prior is not to build a walled garden. PRXP is an open infrastructure.
          </p>

          <p className="mb-6">
            We are building a world where the power of gatekeeping is decentralized and handed directly to the individual. By filtering out the noise of automated extraction, we give you the exact frequency you actually want to listen to.
          </p>

          <p className="mb-16 font-serif text-2xl text-navy italic text-center mt-12">
            The era of the open inbox is over.<br/>It's time to take your attention back.
          </p>

        </div>

        {/* Footer CTA */}
        <div className="mt-16 pt-12 border-t border-paper-border text-center">
          <h3 className="font-serif text-2xl text-navy mb-4">Ready to reclaim your inbox?</h3>
          <p className="text-ink mb-8">Join the waitlist to secure early access to Prior.</p>
          <button className="bg-navy text-parchment px-8 py-4 text-base font-medium rounded-sm hover:bg-navy-light transition-colors shadow-md">
            Request Access
          </button>
        </div>

      </article>
    </main>
  );
}
