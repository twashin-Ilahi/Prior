import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Users, Inbox, ShieldAlert, Zap } from 'lucide-react';

const data = [
  { name: 'Mon', inbound: 120, surfaced: 15, held: 105 },
  { name: 'Tue', inbound: 132, surfaced: 18, held: 114 },
  { name: 'Wed', inbound: 101, surfaced: 12, held: 89 },
  { name: 'Thu', inbound: 145, surfaced: 22, held: 123 },
  { name: 'Fri', inbound: 90, surfaced: 10, held: 80 },
  { name: 'Sat', inbound: 40, surfaced: 5, held: 35 },
  { name: 'Sun', inbound: 30, surfaced: 3, held: 27 },
];

const pieData = [
  { name: 'Inbox', value: 85, color: '#1A2B4C' },
  { name: 'Review', value: 45, color: '#C5A059' },
  { name: 'Filtered', value: 528, color: '#D34B4B' },
];

export const Analytics = () => {
  return (
    <div className="space-y-8 pb-12">
      <div>
        <h1 className="font-serif text-3xl text-navy mb-2">Analytics</h1>
        <p className="text-ink text-sm">Insights into your inbound correspondence and AI performance.</p>
      </div>

      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Total Inbound (7d)', value: '658', icon: Inbox, trend: '+12%' },
          { label: 'Surfaced to Inbox', value: '85', icon: Zap, trend: '+5%' },
          { label: 'Held / Filtered', value: '528', icon: ShieldAlert, trend: '+15%' },
          { label: 'Avg Signal Score', value: '88✦', icon: TrendingUp, trend: '+2✦' }
        ].map((stat, i) => (
          <div key={i} className="bg-white border border-paper-border rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-full bg-ivory border border-paper-border flex items-center justify-center text-navy">
                <stat.icon className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">{stat.trend}</span>
            </div>
            <div className="text-3xl font-serif text-navy mb-1">{stat.value}</div>
            <div className="text-xs font-semibold uppercase tracking-wider text-ink-light">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white border border-paper-border rounded-lg shadow-sm p-6">
          <h2 className="font-serif text-xl text-navy mb-6">Inbound Volume Over Time</h2>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2DCD0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#718096', fontSize: 12 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#718096', fontSize: 12 }} />
                <Tooltip 
                  cursor={{ fill: '#FDFCF9' }}
                  contentStyle={{ backgroundColor: '#1A2B4C', border: 'none', borderRadius: '8px', color: '#F9F6F0' }}
                  itemStyle={{ color: '#F9F6F0' }}
                />
                <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px' }} />
                <Bar dataKey="surfaced" name="Surfaced" stackId="a" fill="#1A2B4C" radius={[0, 0, 4, 4]} />
                <Bar dataKey="held" name="Held/Filtered" stackId="a" fill="#D34B4B" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white border border-paper-border rounded-lg shadow-sm p-6 flex flex-col">
          <h2 className="font-serif text-xl text-navy mb-6">Routing Distribution</h2>
          <div className="flex-1 flex items-center justify-center">
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1A2B4C', border: 'none', borderRadius: '8px', color: '#F9F6F0' }}
                    itemStyle={{ color: '#F9F6F0' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 mt-4 text-center">
            {pieData.map((entry, index) => (
              <div key={index}>
                <div className="text-lg font-bold text-navy">{entry.value}</div>
                <div className="text-[10px] uppercase tracking-wider font-semibold text-ink-light flex items-center justify-center gap-1">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color }}></span>
                  {entry.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Insights */}
      <div className="bg-ivory border border-paper-border rounded-lg shadow-sm p-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full bg-brass"></div>
        <h2 className="font-serif text-xl text-navy mb-6 flex items-center gap-2">
          <Zap className="w-5 h-5 text-brass" />
          AI Insights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-paper-border p-4 rounded-md shadow-sm">
            <div className="text-sm font-semibold text-navy mb-2">High Reply Rate</div>
            <p className="text-xs text-ink leading-relaxed">Founders in robotics and AI are generating your highest reply rate (85%).</p>
          </div>
          <div className="bg-white border border-paper-border p-4 rounded-md shadow-sm">
            <div className="text-sm font-semibold text-navy mb-2">Consistent Filtering</div>
            <p className="text-xs text-ink leading-relaxed">Generic recruiter outreach is being consistently held, saving you approx. 2 hours this week.</p>
          </div>
          <div className="bg-white border border-paper-border p-4 rounded-md shadow-sm">
            <div className="text-sm font-semibold text-navy mb-2">Referral Performance</div>
            <p className="text-xs text-ink leading-relaxed">Referred student messages outperform cold founder pitches by 2.4x in signal score.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
