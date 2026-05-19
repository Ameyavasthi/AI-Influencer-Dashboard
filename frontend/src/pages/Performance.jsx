import React from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, Tooltip, ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, ReferenceLine, Bar, Cell } from 'recharts';
import { T } from '../data/theme';
import { PERFORMANCE, RADAR } from '../data/constants';
import KPI from '../components/ui/KPI';
import Panel from '../components/ui/Panel';
import Badge from '../components/ui/Badge';
import Tip from '../components/ui/Tip';

export default function Performance() {
  const aiWins = PERFORMANCE.filter(d => d.advantage === "AI").length;

  return (
    <div className="flex flex-col gap-4 sm:gap-6 w-full">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:flex gap-3 sm:gap-4 w-full">
        <KPI label="AI Wins" value={`${aiWins}/10`} sub="Performance categories" accent />
        <KPI label="Human Wins" value="2/10" sub="Authenticity & Bond" />
        <KPI label="Avg AI Score" value="8.85" sub="Mean across 10 metrics" delta={2.2} deltaLabel="vs human" />
        <KPI label="Avg Human Score" value="6.48" sub="Mean across 10 metrics" />
        <KPI label="Biggest AI Gap" value="+7.0" sub="Crisis resilience" />
        <KPI label="Human Advantage" value="Authenticity" sub="Score: 8.5 vs 6.0" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 w-full">
        <Panel title="AI vs Human Influencer — Performance Radar" subtitle="6-dimension strategic capability comparison">
          <div className="w-full h-[300px] sm:h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={RADAR} margin={{ top: 10, right: 30, left: 30, bottom: 20 }}>
                <PolarGrid stroke={T.gridLine} />
                <PolarAngleAxis dataKey="dim" tick={{ fill: T.textMid, fontSize: 13, fontWeight: 600 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fill: T.textLight, fontSize: 11 }} axisLine={false} tickCount={4} />
                <Radar name="AI Influencer" dataKey="ai" stroke={T.navy} fill={T.navy} fillOpacity={0.18} strokeWidth={2.5} />
                <Radar name="Human Influencer" dataKey="human" stroke={T.gold} fill={T.gold} fillOpacity={0.12} strokeWidth={2} />
                <Legend wrapperStyle={{ fontSize: 14, paddingTop: 10 }} iconType="circle" iconSize={8} />
                <Tooltip content={<Tip fmt={v => `${v}/100`} />} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </Panel>

        <Panel title="Score Comparison — All 10 Metrics" subtitle="Score out of 10 · Darker = AI Influencer">
          <div className="w-full h-[300px] sm:h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={PERFORMANCE} layout="vertical" margin={{ top: 10, right: 20, left: 25, bottom: 10 }}>
                <CartesianGrid strokeDasharray="3 3" stroke={T.gridLine} horizontal={false} />
                <XAxis type="number" domain={[0, 10]} tick={{ fill: T.textLight, fontSize: 13 }} axisLine={false} tickLine={false} />
                <YAxis type="category" dataKey="metric" tick={{ fill: T.textMid, fontSize: 13 }} axisLine={false} tickLine={false} width={125} />
                <Tooltip content={<Tip />} />
                <Legend wrapperStyle={{ fontSize: 14, paddingBottom: 10 }} iconType="circle" iconSize={8} />
                <Bar dataKey="ai" name="AI Influencer" fill={T.navy} radius={[0, 2, 2, 0]} barSize={9} />
                <Bar dataKey="human" name="Human Influencer" fill={T.gold} radius={[0, 2, 2, 0]} barSize={9} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Panel>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-4 sm:gap-6 w-full">
        <Panel title="Advantage Gap Analysis" subtitle="Positive value = AI advantage · Negative = Human advantage">
          <div className="w-full h-[240px] sm:h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={PERFORMANCE.map(d => ({ ...d, gap: parseFloat((d.ai - d.human).toFixed(1)) }))} margin={{ top: 15, right: 10, left: -20, bottom: 40 }}>
                <CartesianGrid strokeDasharray="3 3" stroke={T.gridLine} vertical={false} />
                <XAxis dataKey="metric" tick={{ fill: T.textLight, fontSize: 13 }} axisLine={false} tickLine={false} angle={-35} textAnchor="end" height={80} />
                <YAxis tick={{ fill: T.textLight, fontSize: 13 }} axisLine={false} tickLine={false} />
                <ReferenceLine y={0} stroke={T.borderMid} strokeWidth={1.5} />
                <Tooltip content={<Tip fmt={v => v > 0 ? `+${v} (AI)` : `${v} (Human)`} />} />
                <Bar dataKey="gap" name="Score Gap" radius={[3, 3, 0, 0]}>
                  {PERFORMANCE.map((d, i) => <Cell key={i} fill={d.advantage === "AI" ? T.navy : T.gold} />)}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Panel>

        <Panel title="Metric-by-Metric Verdict" noPad className="w-full flex-1 max-h-[400px]">
          <div className="w-full overflow-y-auto overflow-x-auto hide-scrollbar h-full min-h-[250px] max-h-full">
            <table className="w-full min-w-[300px] text-left border-collapse text-sm sm:text-[15px]">
              <thead className="sticky top-0 bg-brand-bg z-10 shadow-sm">
                <tr>
                  {["Metric", "AI", "Human", "Winner"].map(h => (
                    <th key={h} className="py-3 px-4 text-brand-text-light font-semibold tracking-wide uppercase border-b border-brand-border">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {PERFORMANCE.map((d, i) => (
                  <tr key={i} className={`border-b border-brand-border hover:bg-white/40 transition-colors ${i % 2 === 0 ? 'bg-brand-surface' : 'bg-brand-bg'}`}>
                    <td className="py-3 px-4 font-semibold text-brand-text whitespace-nowrap">{d.metric}</td>
                    <td className="py-3 px-4 font-bold text-brand-navy">{d.ai}</td>
                    <td className="py-3 px-4 text-brand-text-mid">{d.human}</td>
                    <td className="py-3 px-4 whitespace-nowrap"><Badge type={d.advantage}>{d.advantage}</Badge></td>
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
