import React from 'react';
import { User, Mail, Bell, Shield, Key, Database, Palette } from 'lucide-react';

export const Settings = () => {
  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-12">
      <div>
        <h1 className="font-serif text-3xl text-navy mb-2">Settings</h1>
        <p className="text-ink text-sm">Manage your account, integrations, and security.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar Nav */}
        <div className="md:col-span-1 space-y-1">
          {[
            { name: 'Profile', icon: User, active: true },
            { name: 'Integrations', icon: Mail, active: false },
            { name: 'Notifications', icon: Bell, active: false },
            { name: 'Privacy', icon: Shield, active: false },
            { name: 'Security', icon: Key, active: false },
            { name: 'Data', icon: Database, active: false },
            { name: 'Appearance', icon: Palette, active: false },
          ].map((item, i) => (
            <button
              key={i}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors text-left ${
                item.active 
                  ? 'bg-navy/5 text-navy' 
                  : 'text-ink hover:bg-black/5 hover:text-navy'
              }`}
            >
              <item.icon className="w-4 h-4" />
              {item.name}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="md:col-span-3 space-y-8">
          {/* Profile Settings */}
          <section className="bg-white border border-paper-border rounded-lg shadow-sm p-6">
            <h2 className="font-serif text-xl text-navy mb-6">Profile Settings</h2>
            
            <div className="space-y-6">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-full bg-parchment border border-paper-border flex items-center justify-center font-serif text-navy italic text-3xl shadow-sm">
                  T
                </div>
                <div>
                  <button className="px-4 py-2 bg-white border border-paper-border rounded-md text-sm font-medium text-navy hover:bg-ivory transition-colors shadow-sm mb-2">
                    Change Avatar
                  </button>
                  <p className="text-xs text-ink-light">JPG, GIF or PNG. 1MB max.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-ink-light mb-2">Full Name</label>
                  <input 
                    type="text" 
                    defaultValue="Twashin Ilahi"
                    className="w-full px-4 py-2 bg-white border border-paper-border rounded-md text-sm focus:outline-none focus:border-brass focus:ring-1 focus:ring-brass transition-all text-navy font-medium"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-ink-light mb-2">Role / Title</label>
                  <input 
                    type="text" 
                    defaultValue="Founder / Builder"
                    className="w-full px-4 py-2 bg-white border border-paper-border rounded-md text-sm focus:outline-none focus:border-brass focus:ring-1 focus:ring-brass transition-all text-navy font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-ink-light mb-2">Prior Username</label>
                <div className="flex items-center">
                  <span className="px-4 py-2 bg-ivory border border-r-0 border-paper-border rounded-l-md text-sm text-ink-light font-mono">prior.id/</span>
                  <input 
                    type="text" 
                    defaultValue="twashin"
                    className="w-full px-4 py-2 bg-white border border-paper-border rounded-r-md text-sm focus:outline-none focus:border-brass focus:ring-1 focus:ring-brass transition-all text-navy font-medium font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-ink-light mb-2">Bio</label>
                <textarea 
                  defaultValue="Building systems for the future. Interested in AI, robotics, and education."
                  className="w-full h-24 px-4 py-3 bg-white border border-paper-border rounded-md text-sm focus:outline-none focus:border-brass focus:ring-1 focus:ring-brass transition-all resize-none text-navy font-medium"
                ></textarea>
              </div>

              <div className="flex justify-end pt-4 border-t border-paper-border">
                <button className="px-6 py-2 bg-navy text-white rounded-md text-sm font-medium hover:bg-navy-light transition-colors shadow-sm">
                  Save Changes
                </button>
              </div>
            </div>
          </section>

          {/* Integrations */}
          <section className="bg-white border border-paper-border rounded-lg shadow-sm p-6">
            <h2 className="font-serif text-xl text-navy mb-6">Integrations</h2>
            
            <div className="flex items-center justify-between p-4 border border-paper-border rounded-md bg-ivory">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white rounded-md border border-paper-border flex items-center justify-center shadow-sm">
                  <Mail className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-navy">Google Workspace / Gmail</div>
                  <div className="text-xs text-ink-light">Connected as twashin@example.com</div>
                </div>
              </div>
              <button className="px-4 py-2 bg-white border border-paper-border rounded-md text-sm font-medium text-postal-red hover:bg-red-50 transition-colors shadow-sm">
                Disconnect
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
