import React from 'react';
import { ComposedChart, Area, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ReferenceLine, ResponsiveContainer } from 'recharts';
import { T } from '../data/theme';
import { FORECAST } from '../data/constants';
import KPI from '../components/ui/KPI';
import Panel from '../components/ui/Panel';
import Tip from '../components/ui/Tip';

export default function Forecast() {
  return (
    <div className="flex flex-col gap-4 sm:gap-6 w-full">
      <div className="bg-gradient-to-br from-[#0B3C5D] to-[#082d47] rounded shadow-md p-5 sm:p-7 text-white flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="flex-1 max-w-[600px]">
          <div className="text-xs sm:text-[14px] tracking-[0.15em] text-[#93c5de] mb-1.5 uppercase font-semibold">
            Market Forecast
          </div>
          <div className="font-serif text-[28px] sm:text-[36px] font-bold mb-2 leading-tight">
            Future AI Influencer Market Forecast (2026–2032)
          </div>
          <div className="text-sm sm:text-base text-[#b8d8ea] leading-relaxed">
            Based on 17% CAGR, the virtual influencer market is projected to reach $87.6B by 2032.
            By 2030, AI influencers may represent ~30% of all branded social media content.
          </div>
        </div>
        <div className="text-left md:text-right shrink-0">
          <div className="text-4xl sm:text-[40px] font-bold font-serif text-brand-gold leading-none pb-1">$87.6B</div>
          <div className="text-xs sm:text-[14px] text-[#93c5de]">2032 projected market size</div>
          <div className="text-sm sm:text-[15px] text-white mt-1.5 font-semibold">22× growth from 2022</div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:flex gap-3 sm:gap-4 w-full">
        <KPI label="2026 Baseline" value="$9.27B" sub="Current virtual mkt" accent />
        <KPI label="2028 Forecast" value="$28B" sub="High confidence range" delta={17} deltaLabel="CAGR" />
        <KPI label="2030 Forecast" value="$50B" sub="30% branded content" />
        <KPI label="2032 Target" value="$87.6B" sub="Full market projection" />
        <KPI label="10-yr Multiple" value="22×" sub="2022→2032 growth factor" />
        <KPI label="Autonomous AI" value="2028" sub="Self-managing agents" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4 sm:gap-6 w-full">
        <Panel title="Virtual Influencer Market Forecast 2022–2032" subtitle="USD Billion · Solid line = actual · Dashed = projected · Shaded band = confidence interval">
          <div className="w-full h-[300px] sm:h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={FORECAST} margin={{ top: 15, right: 15, left: -10, bottom: 0 }}>
                <defs>
                  <linearGradient id="gConf" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={T.blue} stopOpacity={0.12}/>
                    <stop offset="95%" stopColor={T.blue} stopOpacity={0.01}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke={T.gridLine} vertical={false}/>
                <XAxis dataKey="yr" tick={{ fill: T.textLight, fontSize: 13 }} axisLine={false} tickLine={false}/>
                <YAxis tick={{ fill: T.textLight, fontSize: 13 }} axisLine={false} tickLine={false} tickFormatter={v => `$${v}B`}/>
                <Tooltip content={<Tip fmt={v => `$${v}B`}/>}/>
                <Legend wrapperStyle={{ fontSize: 14, paddingTop: 10 }} iconType="circle" iconSize={8}/>
                <ReferenceLine x="2026" stroke={T.gold} strokeDasharray="5 3" label={{ value: "Actual | Projected →", fill: T.gold, fontSize: 13, position: "insideTopLeft", dy: -10 }}/>
                <Area type="monotone" dataKey="high" name="Upper Bound" stroke="none" fill="url(#gConf)" fillOpacity={1}/>
                <Area type="monotone" dataKey="low" name="Lower Bound" stroke="none" fill="#fff" fillOpacity={1}/>
                <Line type="monotone" dataKey="value" name="Market Size" stroke={T.navy} strokeWidth={3}
                      strokeDasharray={(d) => d?.payload?.actual === false ? "6 4" : undefined}
                      dot={(p) => {
                        const { cx, cy, payload } = p;
                        return <circle key={cx} cx={cx} cy={cy} r={payload.actual ? 4.5 : 3} fill={payload.actual ? T.navy : "#fff"} stroke={T.navy} strokeWidth={2}/>;
                      }}/>
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </Panel>

        <div className="flex flex-col gap-3 sm:gap-3.5 w-full">
          {[
            { yr: "2026", v: "$9.27B", note: "Autonomous agents & disclosure laws", actual: true },
            { yr: "2027", v: "$18.5B", note: "Unified cross-platform AI identity" },
            { yr: "2028", v: "$28.0B", note: "Personalised content per user" },
            { yr: "2030", v: "$50.0B", note: "AI = 30% of all branded social content" },
            { yr: "2032", v: "$87.6B", note: "AI influencer ecosystems fully mainstream" },
          ].map(({ yr, v, note, actual }, i) => (
            <div key={i} className={`
              border rounded shadow-sm p-3.5 sm:p-4 transition-all duration-200 hover:-translate-y-0.5
              flex flex-col justify-center flex-1
              border-l-4 ${actual ? 'bg-brand-navy border-brand-navy border-l-brand-gold' : 'bg-brand-surface border-brand-border'} 
              ${!actual && i === 4 ? 'border-l-brand-navy' : !actual ? 'border-l-brand-blue' : ''}
            `}>
              <div className="flex justify-between items-center mb-1">
                <span className={`text-sm sm:text-[15px] font-bold tracking-wider ${actual ? 'text-[#a8c8e0]' : 'text-brand-text-light'}`}>{yr}</span>
                <span className={`text-[22px] sm:text-[28px] font-bold font-serif leading-none ${actual ? 'text-brand-gold' : 'text-brand-navy'}`}>{v}</span>
              </div>
              <div className={`text-xs sm:text-[14px] leading-relaxed mt-1 ${actual ? 'text-[#93c5de]' : 'text-brand-text-mid'}`}>{note}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4 w-full">
        {[
          { title: "Hyper-Realism", yr: "2027", desc: "AI personas become visually indistinguishable from real humans with authentic micro-expressions and natural skin rendering." },
          { title: "Real-Time Conversations", yr: "2028", desc: "NLP-powered influencers engage followers in live autonomous interactions — comments, DMs, and live Q&A sessions." },
          { title: "Autonomous AI Agents", yr: "2028", desc: "AI personas independently manage content calendars, respond to trends, publish, and optimise performance without oversight." },
          { title: "Mandatory Disclosure", yr: "2026", desc: "Global regulatory frameworks enforce clear labelling requirements for all AI-generated influencer content across platforms." },
          { title: "AI × Human Hybrids", yr: "2027", desc: "Brands blend real celebrity personas with AI-enhanced digital counterparts to balance authenticity and production cost." },
          { title: "30% Content Share", yr: "2030", desc: "AI influencers represent approximately 30% of all branded social media content as generative media becomes mainstream." },
        ].map((t, i) => (
          <div key={i} className={`
            bg-brand-surface border border-brand-border rounded shadow-sm p-4 sm:p-5
            border-t-[3px] flex flex-col gap-2 
            ${i < 2 ? 'border-t-brand-navy' : i < 4 ? 'border-t-brand-blue' : 'border-t-brand-gold'}
          `}>
            <div className="flex justify-between items-start gap-4 mb-1">
              <div className="text-[15px] font-bold text-brand-text leading-tight">{t.title}</div>
              <div className="bg-brand-bg border border-brand-border px-2.5 py-1 rounded-full text-[11px] font-bold text-brand-text-light whitespace-nowrap shrink-0">
                {t.yr}
              </div>
            </div>
            <div className="text-sm sm:text-[15px] text-brand-text-mid leading-relaxed">{t.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
