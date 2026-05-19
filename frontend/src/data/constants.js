export const MARKET = [
  { yr: "2016", total: 1.7, virtual: 0.4, status: "A" },
  { yr: "2018", total: 4.6, virtual: 0.9, status: "A" },
  { yr: "2019", total: 6.5, virtual: 1.5, status: "A" },
  { yr: "2021", total: 13.8, virtual: 2.3, status: "A" },
  { yr: "2022", total: 16.4, virtual: 3.1, status: "A" },
  { yr: "2023", total: 21.1, virtual: 4.5, status: "A" },
  { yr: "2024", total: 24.0, virtual: 6.3, status: "A" },
  { yr: "2025", total: 28.1, virtual: 9.2, status: "A" },
  { yr: "2026", total: 35.1, virtual: 9.27, status: "A" },
  { yr: "2028", total: 48.0, virtual: 28.0, status: "P" },
  { yr: "2030", total: 66.0, virtual: 50.0, status: "P" },
  { yr: "2032", total: 87.6, virtual: 87.6, status: "P" },
];

export const REGIONAL = [
  { region: "Japan", score: 95, maturity: "Mature", focus: "Fashion / Tech", brands: 42 },
  { region: "South Korea", score: 85, maturity: "Mature", focus: "K-Pop / Beauty", brands: 38 },
  { region: "USA", score: 82, maturity: "Mature", focus: "Fashion / Gaming", brands: 55 },
  { region: "Brazil", score: 78, maturity: "Mature", focus: "Retail / E-Comm", brands: 29 },
  { region: "Europe", score: 65, maturity: "Growing", focus: "Luxury / Auto", brands: 31 },
  { region: "Middle East", score: 48, maturity: "Emerging", focus: "Culture / Luxury", brands: 18 },
  { region: "SE Asia", score: 42, maturity: "Growing", focus: "E-Comm / Fintech", brands: 22 },
  { region: "India", score: 35, maturity: "Early Stage", focus: "Bollywood / FMCG", brands: 14 },
];

export const SEGMENTS = [
  { seg: "Fashion & Luxury", count: 3, brands: 12, maturity: 90, ageRange: "18–35", share: 24 },
  { seg: "Gaming & Esports", count: 4, brands: 8, maturity: 85, ageRange: "16–28", share: 20 },
  { seg: "Lifestyle", count: 5, brands: 15, maturity: 82, ageRange: "18–34", share: 22 },
  { seg: "Retail / E-Comm", count: 2, brands: 6, maturity: 78, ageRange: "All", share: 14 },
  { seg: "Wellness", count: 3, brands: 9, maturity: 65, ageRange: "22–40", share: 10 },
  { seg: "Technology", count: 2, brands: 7, maturity: 55, ageRange: "20–40", share: 6 },
  { seg: "Cultural", count: 2, brands: 5, maturity: 45, ageRange: "Varies", share: 4 },
];

export const PERFORMANCE = [
  { metric: "Engagement Rate", human: 7.8, ai: 8.5, advantage: "AI" },
  { metric: "Consistency", human: 6.0, ai: 10.0, advantage: "AI" },
  { metric: "Cost Efficiency", human: 4.5, ai: 9.5, advantage: "AI" },
  { metric: "Brand Control", human: 5.0, ai: 10.0, advantage: "AI" },
  { metric: "Scalability", human: 4.0, ai: 10.0, advantage: "AI" },
  { metric: "Availability", human: 5.0, ai: 10.0, advantage: "AI" },
  { metric: "Crisis Resilience", human: 3.0, ai: 10.0, advantage: "AI" },
  { metric: "Authenticity", human: 8.5, ai: 6.0, advantage: "Human" },
  { metric: "Trend Response", human: 6.0, ai: 9.5, advantage: "AI" },
  { metric: "Emotional Bond", human: 9.0, ai: 6.0, advantage: "Human" },
];

export const RADAR = [
  { dim: "Engagement", human: 78, ai: 85 },
  { dim: "Control", human: 50, ai: 100 },
  { dim: "Efficiency", human: 45, ai: 95 },
  { dim: "Scale", human: 40, ai: 100 },
  { dim: "Trust", human: 85, ai: 60 },
  { dim: "Resilience", human: 30, ai: 100 },
];

export const MONO = [
  { model: "Brand Ambassador", potential: 100, scalability: 60, difficulty: 55, minRev: 10000, maxRev: 100000, type: "Retainer" },
  { model: "Sponsored Posts", potential: 85, scalability: 90, difficulty: 25, minRev: 5000, maxRev: 50000, type: "Per Post" },
  { model: "Livestream Commerce", potential: 80, scalability: 95, difficulty: 50, minRev: 5000, maxRev: 50000, type: "Per Event" },
  { model: "Affiliate Mktg.", potential: 60, scalability: 92, difficulty: 20, minRev: 2000, maxRev: 20000, type: "Commission" },
  { model: "Digital Products", potential: 55, scalability: 88, difficulty: 20, minRev: 3000, maxRev: 30000, type: "Per Campaign" },
  { model: "Subscriptions", potential: 45, scalability: 80, difficulty: 40, minRev: 500, maxRev: 5000, type: "Recurring" },
  { model: "Persona Licensing", potential: 40, scalability: 60, difficulty: 70, minRev: 2000, maxRev: 20000, type: "Royalty" },
  { model: "Virtual Merch", potential: 30, scalability: 55, difficulty: 65, minRev: 1000, maxRev: 10000, type: "Per Drop" },
];

export const INFLUENCERS = [
  { name: "Lu do Magalu", followers: 7100, country: "Brazil", niche: "Retail", year: 2009, revenue: "N/A" },
  { name: "Lil Miquela", followers: 2500, country: "USA", niche: "Lifestyle", year: 2016, revenue: "$10K+" },
  { name: "Noonoouri", followers: 499, country: "Germany", niche: "Fashion", year: 2018, revenue: "N/A" },
  { name: "K/DA", followers: 493, country: "USA", niche: "Gaming", year: 2018, revenue: "N/A" },
  { name: "Aitana Lopez", followers: 393, country: "Spain", niche: "Fitness", year: 2023, revenue: "$10K+" },
  { name: "Imma", followers: 386, country: "Japan", niche: "Fashion", year: 2018, revenue: "N/A" },
  { name: "Leya Love", followers: 349, country: "Global", niche: "Wellness", year: 2022, revenue: "N/A" },
  { name: "Shudu Gram", followers: 237, country: "UK", niche: "Fashion", year: 2017, revenue: "N/A" },
  { name: "Rozy", followers: 165, country: "S. Korea", niche: "Wellness", year: 2020, revenue: "N/A" },
];

export const FORECAST = [
  { yr: "2022", value: 3.1, low: null, high: null, actual: true },
  { yr: "2023", value: 4.5, low: null, high: null, actual: true },
  { yr: "2024", value: 6.3, low: null, high: null, actual: true },
  { yr: "2025", value: 9.2, low: null, high: null, actual: true },
  { yr: "2026", value: 9.27, low: null, high: null, actual: true },
  { yr: "2027", value: 18.5, low: 15.0, high: 22.0, actual: false },
  { yr: "2028", value: 28.0, low: 22.0, high: 35.0, actual: false },
  { yr: "2029", value: 38.0, low: 30.0, high: 47.0, actual: false },
  { yr: "2030", value: 50.0, low: 40.0, high: 63.0, actual: false },
  { yr: "2031", value: 68.0, low: 54.0, high: 84.0, actual: false },
  { yr: "2032", value: 87.6, low: 70.0, high: 107.0, actual: false },
];
