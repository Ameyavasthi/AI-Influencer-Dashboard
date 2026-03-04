import React from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { T } from '../data/theme';
import { SEGMENTS } from '../data/constants';
import KPI from '../components/ui/KPI';
import Panel from '../components/ui/Panel';
import Tip from '../components/ui/Tip';

export default function Segmentation() {
  const COLORS = [T.navy, T.blue, "#5BAAD4", "#8ABFD4", T.gold, "#C8A020", "#9BB0C0"];
  
  return (
    <div className="flex flex-col gap-4 sm:gap-6 w-full">
      {/* KPIs layout */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:flex gap-3 sm:gap-4 w-full">
        <KPI label="Market Segments" value="7" sub="Active content verticals" accent />
        <KPI label="Mature Segments" value="4" sub="Fashion, Gaming, Retail" />
        <KPI label="Total Brands" value="62" sub="Across all segments" />
        <KPI label="Highest Maturity" value="90%" sub="Fashion & Luxury" delta={5} deltaLabel="YoY" />
        <KPI label="Fastest Growing" value="Wellness" sub="Rapid brand investment" />
        <KPI label="Lowest Barrier" value="Cultural" sub="High opportunity" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 w-full">
        <Panel title="Influencer Market Segmentation by Industry" subtitle="Estimated market share % by content vertical">
          <div className="flex flex-col sm:flex-row items-center sm:items-start md:items-center gap-6 pt-2 h-full">
            <div className="w-[200px] sm:w-[220px] h-[200px] sm:h-[220px] mx-auto shrink-0">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={SEGMENTS} dataKey="share" nameKey="seg" cx="50%" cy="50%" innerRadius="55%" outerRadius="85%" paddingAngle={2}>
                    {SEGMENTS.map((d, i) => <Cell key={i} fill={COLORS[i]} stroke="#fff" strokeWidth={2}/>)}
                  </Pie>
                  <Tooltip content={<Tip fmt={v => `${v}%`}/>}/>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex-1 flex flex-col gap-2.5 w-full">
              {SEGMENTS.map((d, i) => (
                <div key={i} className="flex items-center gap-3 w-full">
                  <div className="w-2.5 h-2.5 rounded-sm shrink-0" style={{ backgroundColor: COLORS[i] }}/>
                  <div className="flex-1 text-[11px] sm:text-xs text-brand-text font-medium truncate">{d.seg}</div>
                  <div className="text-[11px] sm:text-xs font-bold text-brand-navy">{d.share}%</div>
                </div>
              ))}
            </div>
          </div>
        </Panel>

        <Panel title="Segment Maturity Score" subtitle="Market development index per niche (0–100)">
          <div className="w-full h-[250px] sm:h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={[...SEGMENTS].sort((a,b) => b.maturity - a.maturity)} layout="vertical" margin={{ top: 10, right: 40, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke={T.gridLine} horizontal={false}/>
                <XAxis type="number" domain={[0, 100]} tick={{ fill: T.textLight, fontSize: 10 }} axisLine={false} tickLine={false}/>
                <YAxis type="category" dataKey="seg" tick={{ fill: T.textMid, fontSize: 10 }} axisLine={false} tickLine={false} width={115}/>
                <Tooltip content={<Tip fmt={v => `${v}%`}/>}/>
                <Bar dataKey="maturity" name="Maturity Score" radius={[0, 3, 3, 0]} label={{ position: "right", fill: T.textLight, fontSize: 10, formatter: v => `${v}%` }}>
                  {[...SEGMENTS].sort((a,b) => b.maturity - a.maturity).map((d, i) => (
                    <Cell key={i} fill={d.maturity >= 85 ? T.navy : d.maturity >= 70 ? T.blue : d.maturity >= 55 ? T.blueLight : T.gold}/>
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Panel>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 w-full">
        <Panel title="Brand Engagement by Segment" subtitle="Number of brands actively partnering per content vertical">
          <div className="w-full h-[220px] sm:h-[260px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={SEGMENTS} margin={{ top: 10, right: 10, left: -20, bottom: 40 }}>
                <CartesianGrid strokeDasharray="3 3" stroke={T.gridLine} vertical={false}/>
                <XAxis dataKey="seg" tick={{ fill: T.textLight, fontSize: 10 }} axisLine={false} tickLine={false} angle={-35} textAnchor="end" height={60}/>
                <YAxis tick={{ fill: T.textLight, fontSize: 10 }} axisLine={false} tickLine={false}/>
                <Tooltip content={<Tip/>}/>
                <Bar dataKey="brands" name="Brands" fill={T.blue} radius={[4, 4, 0, 0]}>
                  {SEGMENTS.map((d, i) => <Cell key={i} fill={COLORS[i]}/>)}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Panel>

        <Panel title="Segment Intelligence Table" subtitle="Full overview by vertical" noPad className="overflow-hidden w-full">
          <div className="w-full overflow-x-auto hide-scrollbar">
            <table className="w-full min-w-[500px] text-left border-collapse text-[11px] sm:text-xs">
              <thead>
                <tr className="bg-brand-bg">
                  {["Segment", "Age Range", "Brands", "Platform", "Maturity"].map(h => (
                    <th key={h} className="py-2.5 px-4 text-brand-text-light font-semibold tracking-wide uppercase border-b border-brand-border whitespace-nowrap">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {SEGMENTS.map((d, i) => (
                  <tr key={i} className={`border-b border-brand-border ${i % 2 === 0 ? 'bg-brand-surface' : 'bg-brand-bg'}`}>
                    <td className="py-2.5 px-4 font-bold text-brand-text whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-sm shrink-0" style={{ backgroundColor: COLORS[i] }}/>
                        {d.seg}
                      </div>
                    </td>
                    <td className="py-2.5 px-4 text-brand-text-mid whitespace-nowrap">{d.ageRange}</td>
                    <td className="py-2.5 px-4 font-bold text-brand-navy whitespace-nowrap">{d.brands}</td>
                    <td className="py-2.5 px-4 text-brand-text-mid whitespace-nowrap">
                      {["Instagram", "YouTube/TikTok", "TikTok/IG", "YouTube", "Instagram", "LinkedIn", "Instagram"][i]}
                    </td>
                    <td className="py-2.5 px-4 whitespace-nowrap">
                      <div className="flex items-center gap-2 max-w-[100px]">
                        <div className="flex-1 h-1.5 bg-brand-border rounded-full overflow-hidden">
                          <div className={`h-full ${d.maturity >= 85 ? 'bg-brand-navy' : d.maturity >= 65 ? 'bg-brand-blue' : 'bg-brand-gold'}`} 
                               style={{ width: `${d.maturity}%` }}/>
                        </div>
                        <span className="text-[10px] text-brand-text-light">{d.maturity}%</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Panel>
      </div>
    </div>
  );
}
