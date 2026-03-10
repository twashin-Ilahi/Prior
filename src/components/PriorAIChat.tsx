import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import Markdown from 'react-markdown';

// Initialize the Gemini AI client
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

const SYSTEM_INSTRUCTION = `You are Prior AI, the official customer service assistant, experienced sales person, and highly skilled spokesman for Prior. 
Prior is an AI chief-of-staff for your attention, powered by the Public Relation Exchange Protocol (PRXP). 
It acts as a sovereign inbox, filtering out AI-generated spam and low-signal noise, and only delivering high-value correspondence. 
It uses 'Wingman AI Kaya' to evaluate messages. Users can set a 'Resistor Dial' to control the threshold of who gets through. 
Senders must provide Proof-of-Intent (Staking) and are evaluated via Dynamic Verity Scoring. 
Your goal is to enthusiastically and professionally answer questions about Prior, persuade users of its value in the age of AI-generated spam, and encourage them to request access. 
Be concise, articulate, and persuasive. Keep responses relatively short and easy to read.`;

export default function PriorAIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'model'; text: string }[]>([
    { role: 'model', text: 'Hello! I am Prior AI. How can I help you reclaim your inbox today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const chatRef = useRef<any>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chatRef.current) {
      chatRef.current = ai.chats.create({
        model: 'gemini-3.1-flash-lite-preview',
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
        }
      });
    }
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    
    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const response = await chatRef.current.sendMessage({ message: userMsg });
      setMessages(prev => [...prev, { role: 'model', text: response.text }]);
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages(prev => [...prev, { role: 'model', text: 'Sorry, I encountered an error. Please try again later.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-14 h-14 bg-navy text-parchment rounded-full shadow-lg flex items-center justify-center hover:bg-navy-light transition-all z-50 ${isOpen ? 'scale-0 opacity-0 pointer-events-none' : 'scale-100 opacity-100'}`}
        aria-label="Open Prior AI Chat"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-6 right-6 w-[calc(100vw-3rem)] sm:w-96 h-[500px] max-h-[80vh] bg-ivory border border-paper-border rounded-lg shadow-2xl z-50 flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}
      >
        {/* Header */}
        <div className="bg-navy text-parchment p-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-parchment/10 rounded-full flex items-center justify-center border border-white/10">
              <Bot className="w-4 h-4 text-parchment" />
            </div>
            <div>
              <h3 className="font-serif font-semibold text-lg leading-tight tracking-wide">Prior AI</h3>
              <p className="text-[10px] uppercase tracking-widest text-parchment/70 font-medium">Chief of Staff</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-parchment/70 hover:text-parchment transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#FDFCF9] relative">
          <div className="absolute inset-0 paper-texture pointer-events-none"></div>
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} relative z-10`}>
              <div className={`max-w-[85%] p-3 rounded-md text-sm leading-relaxed ${
                msg.role === 'user' 
                  ? 'bg-navy text-parchment rounded-tr-none' 
                  : 'bg-white border border-paper-border text-ink rounded-tl-none shadow-sm'
              }`}>
                {msg.role === 'model' ? (
                  <div className="markdown-body">
                    <Markdown>{msg.text}</Markdown>
                  </div>
                ) : (
                  msg.text
                )}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start relative z-10">
              <div className="bg-white border border-paper-border text-ink p-3 rounded-md rounded-tl-none shadow-sm flex gap-1.5 items-center h-10">
                <span className="w-1.5 h-1.5 bg-navy/40 rounded-full animate-bounce"></span>
                <span className="w-1.5 h-1.5 bg-navy/40 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                <span className="w-1.5 h-1.5 bg-navy/40 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 bg-white border-t border-paper-border relative z-10">
          <form 
            onSubmit={(e) => { e.preventDefault(); handleSend(); }}
            className="flex gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about Prior..."
              className="flex-1 bg-ivory border border-paper-border rounded-sm px-3 py-2 text-sm text-ink focus:outline-none focus:border-navy transition-colors placeholder:text-ink-light/60"
            />
            <button 
              type="submit"
              disabled={!input.trim() || isLoading}
              className="bg-navy text-parchment px-4 py-2 rounded-sm hover:bg-navy-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center shadow-sm"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
