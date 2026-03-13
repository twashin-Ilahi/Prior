import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import LandingPage from './pages/LandingPage';
import BlogPost from './pages/BlogPost';
import PriorAIChat from './components/PriorAIChat';

const Nav = () => (
  <nav className="w-full max-w-7xl mx-auto px-6 py-8 flex justify-between items-center relative z-10">
    <Link to="/" className="flex items-center gap-2">
      <div className="w-8 h-8 bg-navy rounded-sm flex items-center justify-center text-parchment font-serif font-bold text-xl">
        P
      </div>
      <span className="font-serif text-2xl font-semibold tracking-wide text-navy">Prior</span>
    </Link>
    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-ink">
      <a href="/#how-it-works" className="hover:text-navy transition-colors">How it Works</a>
      <a href="/#features" className="hover:text-navy transition-colors">Features</a>
      <Link to="/blog" className="hover:text-navy transition-colors">Manifesto</Link>
    </div>
    <div className="flex items-center gap-4">
      <a href="https://priormail.app/" className="hidden md:block text-sm font-medium text-navy hover:text-navy-light transition-colors">
        Sign In
      </a>
      <a href="https://priormail.app/" className="inline-block bg-navy text-parchment px-5 py-2.5 text-sm font-medium rounded-sm hover:bg-navy-light transition-colors shadow-sm">
        Access Now
      </a>
    </div>
  </nav>
);

const Footer = () => (
  <footer className="w-full border-t border-paper-border bg-ivory py-12">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-navy rounded-sm flex items-center justify-center text-parchment font-serif font-bold text-sm">
          P
        </div>
        <span className="font-serif text-xl font-semibold tracking-wide text-navy">Prior</span>
      </div>
      
      <div className="flex flex-wrap justify-center gap-8 text-sm text-ink">
        <a href="#" className="hover:text-navy transition-colors">Product</a>
        <a href="#" className="hover:text-navy transition-colors">Company</a>
        <a href="#" className="hover:text-navy transition-colors">Contact</a>
        <a href="#" className="hover:text-navy transition-colors">Privacy</a>
        <a href="#" className="hover:text-navy transition-colors">Terms</a>
      </div>
      
      <div className="text-sm text-ink-light">
        © {new Date().getFullYear()} Prior. All rights reserved.
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen relative selection:bg-brass/20 selection:text-navy">
      <div className="fixed inset-0 paper-texture pointer-events-none z-50"></div>
      <Nav />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/blog" element={<BlogPost />} />
      </Routes>
      <Footer />
      <PriorAIChat />
      <Analytics />
    </div>
  );
}
