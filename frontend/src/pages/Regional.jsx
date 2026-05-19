import React from 'react';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Cell, ResponsiveContainer, PieChart, Pie } from 'recharts';
import { T } from '../data/theme';
import { REGIONAL } from '../data/constants';
import KPI from '../components/ui/KPI';
import Panel from '../components/ui/Panel';
import Badge from '../components/ui/Badge';
import ProgressBar from '../components/ui/ProgressBar';
import Tip from '../components/ui/Tip';

export default function Regional() {
  return (
    <div className="flex flex-col gap-4 sm:gap-6 w-full">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:flex gap-3 sm:gap-4 w-full">
        <KPI label="Regions Tracked" value="8" sub="Global coverage" accent />
        <KPI label="Highest Adoption" value="Japan" sub="95% adoption index" delta={3} deltaLabel="YoY" />
        <KPI label="Mature Markets" value="4" sub="Japan, Korea, USA" />
        <KPI label="Fastest Growing" value="India" sub="Early stage" />
        <KPI label="Emerging Markets" value="3" sub="ME, SE Asia, India" />
        <KPI label="Avg Global Score" value="66.3%" sub="Mean index score" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-4 sm:gap-6 w-full">
        <Panel title="Regional Adoption of AI Influencers" subtitle="Adoption index 0–100 · Coloured by maturity stage">
          <div className="w-full h-[300px] sm:h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={[...REGIONAL].sort((a,b) => b.score - a.score)} layout="vertical" margin={{ top: 10, right: 50, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke={T.gridLine} horizontal={false}/>
                <XAxis type="number" domain={[0, 100]} tick={{ fill: T.textLight, fontSize: 13 }} axisLine={false} tickLine={false} tickFormatter={v => `${v}%`}/>
                <YAxis type="category" dataKey="region" tick={{ fill: T.textMid, fontSize: 14, fontWeight: 600 }} axisLine={false} tickLine={false} width={100}/>
                <Tooltip content={<Tip fmt={v => `${v}%`}/>}/>
                <Bar dataKey="score" name="Adoption Index" radius={[0, 4, 4, 0]} label={{ position: "right", fill: T.textLight, fontSize: 14, formatter: v => `${v}%` }}>
                  {[...REGIONAL].sort((a,b) => b.score - a.score).map((d, i) => (
                    <Cell key={i} fill={d.score >= 80 ? T.navy : d.score >= 65 ? T.blue : d.score >= 48 ? T.gold : "#C0C8D0"}/>
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Panel>

        <div className="flex flex-col gap-4 sm:gap-6 w-full">
          <Panel title="Market Maturity Mix" subtitle="By stage of development">
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3 mb-4">
              {[
                ["Mature", "4", T.navy],
                ["Growing", "2", T.blue],
                ["Emerging", "1", T.gold],
                ["Early Stage", "1", "#C0392B"]
              ].map(([l, v, c]) => (
                <div key={l} className="text-center p-2.5 bg-brand-bg rounded border border-brand-border flex flex-col items-center justify-center">
                  <div className="text-[26px] font-bold font-serif leading-none" style={{ color: c }}>{v}</div>
                  <div className="text-[11px] text-brand-text-light font-medium tracking-wide mt-1.5 uppercase">{l}</div>
                </div>
              ))}
            </div>
            <div className="w-full h-[140px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={[{ n: "Mature", v: 4 }, { n: "Growing", v: 2 }, { n: "Emerging", v: 1 }, { n: "Early Stage", v: 1 }]}
                       dataKey="v" nameKey="n" cx="50%" cy="50%" innerRadius="40%" outerRadius="75%" paddingAngle={4}>
                    <Cell fill={T.navy}/><Cell fill={T.blue}/><Cell fill={T.gold}/><Cell fill="#C0392B"/>
                  </Pie>
                  <Tooltip content={<Tip/>}/>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </Panel>

          <Panel className="flex-1" title="Regional Brand Count" subtitle="Active brand partnerships per region">
            <div className="flex flex-col gap-3.5 mt-2">
              {[...REGIONAL].sort((a,b) => b.brands - a.brands).slice(0, 5).map(r => (
                <div key={r.region}>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-sm font-semibold text-brand-text">{r.region}</span>
                    <span className="text-sm font-bold text-brand-navy">{r.brands}</span>
                  </div>
                  <ProgressBar value={r.brands} max={60} color={r.brands >= 40 ? T.navy : r.brands >= 30 ? T.blue : T.gold} showLabel={false} height={8}/>
                </div>
              ))}
            </div>
          </Panel>
        </div>
      </div>

      <Panel title="Regional Adoption — Full Detail Table" subtitle="Complete regional breakdown with maturity stage and industry focus" noPad className="w-full">
        <div className="w-full overflow-x-auto hide-scrollbar">
          <table className="w-full min-w-[700px] text-left border-collapse text-[11px] sm:text-xs">
            <thead>
              <tr className="bg-brand-navy">
                {["Region", "Adoption Index", "Maturity Stage", "Industry Focus", "Leading Influencers", "Brands", "Key Insight"].map(h => (
                  <th key={h} className="py-2.5 px-4 text-[#a8c8e0] font-semibold tracking-wide uppercase whitespace-nowrap border-b border-brand-navy-dark">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[...REGIONAL].sort((a,b) => b.score - a.score).map((r, i) => {
                const insights = [
                  "Virtual idol culture; billions in market", "K-pop ecosystem integration",
                  "Highest brand-sponsored campaign volume", "World's most-followed virtual influencer",
                  "Luxury digital lookbooks & virtual runways", "Miss AI 2024 winner signals momentum",
                  "TikTok & Shopee live commerce adoption", "Regional language AI mascot exploration"
                ];
                const leads = [
                  "Imma, Hatsune Miku", "Rozy, Ethan", "Lil Miquela, K/DA", "Lu do Magalu",
                  "Shudu, Noonoouri", "Kenza Layli", "Virtual retail personas", "New entrants"
                ];
                return (
                  <tr key={i} className={`border-b border-brand-border ${i % 2 === 0 ? 'bg-brand-surface' : 'bg-brand-bg'}`}>
                    <td className="py-3 px-4 font-bold text-brand-text whitespace-nowrap">{r.region}</td>
                    <td className="py-3 px-4 whitespace-nowrap">
                      <div className="flex items-center gap-2 max-w-[120px]">
                        <div className="flex-1 h-1.5 bg-brand-border rounded-full overflow-hidden">
                          <div className={`h-full ${r.score >= 80 ? 'bg-brand-navy' : r.score >= 60 ? 'bg-brand-blue' : 'bg-brand-gold'}`} style={{ width: `${r.score}%` }}/>
                        </div>
                        <span className="font-bold text-brand-navy text-[10px] w-8 text-right shrink-0">{r.score}%</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 whitespace-nowrap"><Badge type={r.maturity}>{r.maturity}</Badge></td>
                    <td className="py-3 px-4 text-brand-text-mid whitespace-nowrap">{r.focus}</td>
                    <td className="py-3 px-4 text-brand-text-mid text-[10px] sm:text-[11px]">{leads[i]}</td>
                    <td className="py-3 px-4 font-bold text-brand-navy">{r.brands}</td>
                    <td className="py-3 px-4 text-brand-text-light text-[10px] sm:text-[11px]">{insights[i]}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Panel>
    </div>
  );
}
