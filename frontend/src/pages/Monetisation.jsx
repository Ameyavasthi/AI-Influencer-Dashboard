import React from 'react';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, ScatterChart, Scatter, ZAxis, Cell, ResponsiveContainer } from 'recharts';
import { T } from '../data/theme';
import { MONO } from '../data/constants';
import KPI from '../components/ui/KPI';
import Panel from '../components/ui/Panel';
import Tip from '../components/ui/Tip';

export default function Monetisation() {
  return (
    <div className="flex flex-col gap-4 sm:gap-6 w-full">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:flex gap-3 sm:gap-4 w-full">
        <KPI label="Revenue Models" value="8" sub="Distinct streams" accent />
        <KPI label="Max /mo Potential" value="$100K+" sub="Brand ambassador" delta={22} deltaLabel="YoY growth" />
        <KPI label="Fastest-Scale" value="Affiliate" sub="Volume, low effort" />
        <KPI label="Lowest Barrier" value="Sponsored" sub="Quick to execute" />
        <KPI label="Highest Barrier" value="Licensing" sub="IP complexity" />
        <KPI label="Best ROI" value="Livestream" sub="Commerce conversion" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-4 sm:gap-6 w-full">
        <Panel title="AI Influencer Monetisation Models — Revenue Potential" subtitle="Maximum monthly revenue index (0–100 scale)">
          <div className="w-full h-[280px] sm:h-[320px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={MONO} layout="vertical" margin={{ top: 10, right: 50, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke={T.gridLine} horizontal={false}/>
                <XAxis type="number" domain={[0, 110]} tick={{ fill: T.textLight, fontSize: 13 }} axisLine={false} tickLine={false}/>
                <YAxis type="category" dataKey="model" tick={{ fill: T.textMid, fontSize: 13 }} axisLine={false} tickLine={false} width={150}/>
                <Tooltip content={<Tip/>}/>
                <Bar dataKey="potential" name="Revenue Potential" radius={[0, 4, 4, 0]} label={{ position: "right", fill: T.textLight, fontSize: 13, formatter: v => `${v}` }}>
                  {MONO.map((d, i) => (
                    <Cell key={i} fill={d.potential >= 80 ? T.navy : d.potential >= 55 ? T.blue : d.potential >= 40 ? T.blueLight : T.gold}/>
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Panel>

        <Panel title="Scalability vs Difficulty Matrix" subtitle="Each bubble = one revenue model · Size = revenue potential">
          <div className="w-full h-[280px] sm:h-[320px]">
            <ResponsiveContainer width="100%" height="100%">
              <ScatterChart margin={{ top: 20, right: 20, left: -10, bottom: 30 }}>
                <CartesianGrid strokeDasharray="3 3" stroke={T.gridLine}/>
                <XAxis dataKey="difficulty" name="Difficulty" type="number" domain={[0, 100]} tick={{ fill: T.textLight, fontSize: 13 }} axisLine={false} tickLine={false}
                       label={{ value: "← Ease of Execution →", position: "insideBottom", dy: 22, fill: T.textLight, fontSize: 14 }}/>
                <YAxis dataKey="scalability" name="Scalability" type="number" domain={[0, 100]} tick={{ fill: T.textLight, fontSize: 13 }} axisLine={false} tickLine={false}
                       label={{ value: "Scalability →", angle: -90, position: "insideLeft", dx: -5, fill: T.textLight, fontSize: 14 }}/>
                <ZAxis dataKey="potential" range={[60, 400]}/>
                <Tooltip cursor={{ strokeDasharray: "3 3" }} content={({ active, payload }) => {
                  if(!active || !payload?.length) return null;
                  const d = payload[0]?.payload;
                  return (
                    <div className="bg-white border border-brand-border p-4 rounded shadow-md text-sm z-50">
                      <div className="font-bold text-brand-navy mb-1.5 text-base">{d.model}</div>
                      <div className="text-brand-text-mid mb-0.5">Range: ${d.minRev.toLocaleString()}–${d.maxRev.toLocaleString()}/mo</div>
                      <div className="text-brand-text-mid mb-0.5">Scalability: {d.scalability}%</div>
                      <div className="text-brand-text-mid">Type: {d.type}</div>
                    </div>
                  );
                }}/>
                <Scatter data={MONO} fill={T.navy} fillOpacity={0.75}/>
              </ScatterChart>
            </ResponsiveContainer>
          </div>
        </Panel>
      </div>

      <Panel title="Monetisation Models — Complete Reference Table" subtitle="All 8 revenue models with range, scalability, difficulty, and revenue type" noPad className="w-full">
        <div className="w-full overflow-x-auto hide-scrollbar">
          <table className="w-full min-w-[800px] text-left border-collapse text-[11px] sm:text-xs">
            <thead>
              <tr className="bg-brand-navy">
                {["Revenue Model", "Description", "Monthly Range (USD)", "Type", "Scalability", "Execution Difficulty", "Best For"].map(h => (
                  <th key={h} className="py-2.5 px-4 text-[#a8c8e0] font-semibold tracking-wide uppercase whitespace-nowrap border-b border-brand-navy-dark">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["Brand Ambassador",   "Long-term exclusive persona deal",        "$10K–$100K",  "Retainer",    "Medium", "Medium", "Established AI personas"],
                ["Sponsored Posts",    "Per-post product placement fee",          "$5K–$50K",   "Per Post",    "High",   "Low",    "Any niche or scale"],
                ["Livestream Commerce","AI host for live shopping",               "$5K–$50K",   "Per Event",   "V. High","Medium", "E-commerce brands"],
                ["Affiliate Marketing","Commission via trackable product links",  "$2K–$20K",   "Commission",  "High",   "Low",    "Fashion, beauty, tech"],
                ["Digital Products",   "Promote apps, SaaS, courses, downloads",  "$3K–$30K",   "Per Campaign","High",   "Low",    "B2B / creator economy"],
                ["Subscriptions",      "Exclusive content for paying members",    "$500–$5K",   "Recurring",   "High",   "Medium", "Niche wellness"],
                ["Persona Licensing",  "License AI image & identity",             "$2K–$20K",   "Royalty",     "Medium", "High",   "High-IP personas"],
                ["Virtual Merch",      "Digital products, art prints",            "$1K–$10K",   "Per Drop",    "Medium", "High",   "Gaming / culture niches"],
              ].map(([model, desc, range, type, scal, diff, bestFor], i) => (
                <tr key={i} className={`border-b border-brand-border ${i % 2 === 0 ? 'bg-brand-surface' : 'bg-brand-bg'}`}>
                  <td className="py-3 px-4 font-bold text-brand-navy whitespace-nowrap">{model}</td>
                  <td className="py-3 px-4 text-brand-text-mid text-[10px] sm:text-[11px] min-w-[180px]">{desc}</td>
                  <td className="py-3 px-4 font-bold text-brand-positive whitespace-nowrap">{range}</td>
                  <td className="py-3 px-4 text-brand-text-mid whitespace-nowrap">{type}</td>
                  <td className="py-3 px-4 whitespace-nowrap">
                    <span className={`${scal === "V. High" || scal === "High" ? 'text-brand-navy font-bold' : 'text-brand-text-mid font-medium'}`}>{scal}</span>
                  </td>
                  <td className="py-3 px-4 whitespace-nowrap">
                    <span className={`font-semibold ${diff === "High" ? 'text-brand-negative' : diff === "Medium" ? 'text-[#8B6914]' : 'text-brand-positive'}`}>{diff}</span>
                  </td>
                  <td className="py-3 px-4 text-brand-text-light text-[10px] sm:text-[11px] whitespace-nowrap">{bestFor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Panel>
    </div>
  );
}
