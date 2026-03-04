import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine, PieChart, Pie, Cell, ComposedChart } from 'recharts';
import { T } from '../data/theme';
import { MARKET, INFLUENCERS, REGIONAL } from '../data/constants';
import KPI from '../components/ui/KPI';
import Panel from '../components/ui/Panel';
import ProgressBar from '../components/ui/ProgressBar';
import Tip from '../components/ui/Tip';

export default function Overview() {
  return (
    <div className="flex flex-col gap-4 sm:gap-6 w-full">
      {/* Banner */}
      <div className="bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-blue rounded shadow-md p-5 sm:p-7 text-white flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="flex-1 max-w-[600px]">
          <div className="text-xs sm:text-[14px] tracking-[0.15em] text-[#93c5de] mb-1.5 uppercase font-semibold">
            Executive Summary
          </div>
          <div className="font-serif text-[28px] sm:text-[36px] font-bold mb-2 leading-tight">
            Global AI Influencer Industry
          </div>
          <div className="text-sm sm:text-base text-[#b8d8ea] leading-relaxed">
            The virtual influencer market is projected to grow from $9.27B in 2026 to $87.6B by 2032,
            driven by generative AI adoption and brand demand for scalable, risk-free content assets.
          </div>
        </div>
        <div className="flex flex-wrap md:flex-nowrap gap-4 sm:gap-6 text-left md:text-center w-full md:w-auto overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
          {[
            ["$35.1B", "Total Market 2026"],
            ["$9.27B", "Virtual AI Mkt"],
            ["17%", "CAGR"],
            ["63.4%", "Adoption Rate"]
          ].map(([v, l], i) => (
            <div key={i} className="min-w-[110px]">
              <div className="text-[28px] sm:text-[34px] font-bold font-serif text-brand-gold leading-none pb-1">{v}</div>
              <div className="text-[10px] sm:text-[11px] text-[#93c5de] tracking-widest uppercase">{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* KPI Row flex wrap */}
      <div className="flex flex-wrap justify-between gap-3 sm:gap-4 md:grid md:grid-cols-3 lg:flex lg:flex-nowrap">
        <KPI label="Virtual Influencer Mkt" value="$9.27B" sub="2026 baseline" delta={17} deltaLabel="YoY" accent />
        <KPI label="Total Influencer Mkt" value="$35.1B" sub="All influencer types" delta={24.9} deltaLabel="YoY" />
        <KPI label="2032 Projection" value="$87.6B" sub="~17% CAGR" />
        <KPI label="Marketer Adoption" value="63.4%" sub="Plan AI avatar use" delta={11.5} deltaLabel="vs 2025" />
        <KPI label="Cost Reduction" value="Up to 70%" sub="vs human campaigns" />
        <KPI label="Avg Engagement Lift" value="+3%" sub="AI vs human" />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 w-full">
        <Panel 
          className="lg:col-span-2 w-full" 
          title="Global AI Influencer Market Growth (2016–2032)"
          subtitle="USD Billion · Dashed line indicates projected values post-2026"
        >
          <div className="w-full h-[250px] sm:h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={MARKET} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <defs>
                  <linearGradient id="gTotal" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={T.blue} stopOpacity={0.15}/>
                    <stop offset="95%" stopColor={T.blue} stopOpacity={0.01}/>
                  </linearGradient>
                  <linearGradient id="gVirt" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={T.navy} stopOpacity={0.25}/>
                    <stop offset="95%" stopColor={T.navy} stopOpacity={0.01}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke={T.gridLine} vertical={false}/>
                <XAxis dataKey="yr" tick={{ fill: T.textLight, fontSize: 13 }} axisLine={false} tickLine={false}/>
                <YAxis tick={{ fill: T.textLight, fontSize: 13 }} axisLine={false} tickLine={false} tickFormatter={v => `$${v}B`}/>
                <Tooltip content={<Tip fmt={v => `$${v}B`}/>}/>
                <Legend wrapperStyle={{ fontSize: 14, paddingTop: 10 }} iconType="circle" iconSize={8}/>
                <ReferenceLine x="2026" stroke={T.gold} strokeDasharray="4 4" label={{ value: "2026 →", fill: T.gold, fontSize: 13, position: "top" }}/>
                <Area type="monotone" dataKey="total" name="Total Market" stroke={T.blue} strokeWidth={2} fill="url(#gTotal)" dot={false}/>
                <Area type="monotone" dataKey="virtual" name="Virtual AI Mkt" stroke={T.navy} strokeWidth={2.5} fill="url(#gVirt)" 
                      dot={(p) => {
                        const { cx, cy, payload } = p;
                        return payload.status === "A"
                          ? <circle key={cx} cx={cx} cy={cy} r={3.5} fill={T.navy} stroke="#fff" strokeWidth={1.5}/>
                          : <circle key={cx} cx={cx} cy={cy} r={3} fill="#fff" stroke={T.navy} strokeWidth={2}/>;
                      }}/>
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </Panel>

        <div className="flex flex-col gap-4 sm:gap-6 w-full lg:col-span-1">
          <Panel title="Market Share 2026" subtitle="Virtual AI vs Traditional" className="w-full">
            <div className="w-full h-[160px] sm:h-[180px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={[{name: "Virtual AI", value: 9.27},{name: "Traditional", value: 25.83}]}
                       cx="50%" cy="50%" innerRadius={45} outerRadius={70} dataKey="value" paddingAngle={3}>
                    <Cell fill={T.navy} stroke="none"/>
                    <Cell fill={T.bluePale} stroke={T.blue} strokeWidth={1}/>
                  </Pie>
                  <Tooltip content={<Tip fmt={v => `$${v}B`}/>}/>
                  <Legend wrapperStyle={{ fontSize: 14 }} iconType="circle" iconSize={8}/>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </Panel>
          <Panel className="flex-1 w-full">
            <div className="grid grid-cols-2 gap-3 h-full items-center">
              {[
                { l: "Reach Multiplier", v: "12×", note: "Virtual micro-influencers" },
                { l: "Prod. Time", v: "<15min", note: "Full reel pipeline" },
                { l: "AI Wins", v: "11/15", note: "Performance metrics" },
                { l: "Influencers", v: "12+", note: "Active globally tracked" },
              ].map(({ l, v, note }) => (
                <div key={l} className="text-center p-3 sm:p-4 bg-brand-bg rounded-md flex flex-col justify-center h-full">
                  <div className="text-[22px] sm:text-[26px] font-bold text-brand-navy font-serif leading-none mb-2">{v}</div>
                  <div className="text-xs text-brand-text font-semibold uppercase tracking-wider">{l}</div>
                  <div className="text-[10px] sm:text-[11px] text-brand-text-light mt-1">{note}</div>
                </div>
              ))}
            </div>
          </Panel>
        </div>
      </div>

      {/* Bottom Insights Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full">
        <Panel title="Technology Evolution" subtitle="Key milestones in AI influencer development" noPad>
          <div className="py-4">
            {[
              { yr: "2016", note: "Lil Miquela — first AI influencer" },
              { yr: "2019", note: "CGI influencer boom begins" },
              { yr: "2022", note: "Midjourney / Stable Diffusion" },
              { yr: "2023", note: "Generative video tools emerge" },
              { yr: "2024", note: "Miss AI global competition" },
              { yr: "2026", note: "Autonomous AI agents — current" },
            ].map(({ yr, note }, i) => (
              <div key={i} className={`
                flex items-center gap-4 px-6 py-[9px] ml-5 mb-0.5
                border-l-[3px]
                ${i === 5 ? 'border-brand-gold' : i > 3 ? 'border-brand-blue' : 'border-brand-border'}
              `}>
                <span className="text-sm font-bold text-brand-navy w-12 shrink-0">{yr}</span>
                <span className="text-[13px] sm:text-[14px] text-brand-text-mid truncate">{note}</span>
              </div>
            ))}
          </div>
        </Panel>
        <Panel title="Regional Adoption Snapshot" subtitle="Adoption index by region">
          <div className="flex flex-col gap-[14px] mt-1">
            {REGIONAL.slice(0, 5).map(r => (
              <div key={r.region}>
                <div className="flex justify-between mb-1.5">
                  <span className="text-sm text-brand-text font-bold">{r.region}</span>
                  <span className="text-sm text-brand-text-light font-medium">{r.score}%</span>
                </div>
                <ProgressBar value={r.score} color={r.score >= 80 ? T.navy : r.score >= 60 ? T.blue : r.score >= 45 ? T.gold : "#ccc"} showLabel={false}/>
              </div>
            ))}
          </div>
        </Panel>
        <Panel title="Top AI Influencers" subtitle="By Instagram following (thousands)">
          <div className="flex flex-col gap-2.5 mt-1">
            {INFLUENCERS.slice(0, 5).map((inf, i) => (
              <div key={i} className={`flex justify-between items-center pb-2.5 ${i < 4 ? 'border-b border-brand-border' : ''}`}>
                <div className="flex items-center gap-3">
                  <div className={`
                    w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0
                    ${i === 0 ? 'bg-brand-navy text-white' : i === 1 ? 'bg-brand-blue text-white' : 'bg-brand-blue-pale text-brand-navy'}
                  `}>
                    {i + 1}
                  </div>
                  <div className="flex flex-col">
                    <div className="text-[14px] font-bold text-brand-text leading-tight">{inf.name}</div>
                    <div className="text-xs text-brand-text-light mt-0.5">{inf.country} · {inf.niche}</div>
                  </div>
                </div>
                <span className="text-sm sm:text-base font-bold text-brand-navy font-serif">
                  {inf.followers.toLocaleString()}K
                </span>
              </div>
            ))}
          </div>
        </Panel>
      </div>
    </div>
  );
}
