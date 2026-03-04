= # AI Influencer Consulting Dashboard

A production-grade, highly responsive, and modular React analytics dashboard. Built with React, Recharts, and Tailwind CSS v4, this dashboard is designed for consulting firms (McKinsey, Deloitte, BCG aesthetics) to analyze the AI Influencer market.

## Features

- **Consulting-Grade UI/UX:** Clean typography (IBM Plex), exact spacing, subtle shadows, and a sophisticated color palette.
- **Fully Responsive:**
  - **Mobile (< 640px):** Hamburger menu, stacked charts, single-column KPI metrics.
  - **Tablet (640px - 1024px):** Dual-column KPIs, accessible sidebar navigation.
  - **Desktop (> 1024px):** Fixed 260px sidebar, powerful 4-6 column grids, up to 1600px max-width scaling.
- **Dynamic Charts:** All Recharts implement `ResponsiveContainer` to fluidly resize without horizontal scrolling.
- **Modular Architecture:**
  - `src/components/ui/` for granular parts like `KPI`, `Panel`, `Badge`, `ProgressBar`.
  - `src/layouts/` for controlling the flexible page shell and responsive sidebar.
  - `src/pages/` for isolated route views.
  - `src/data/` for clean separation of theme constants and mock datasets.

## Development

Install dependencies and start the development server:

```bash
# Install packages
npm install

# Start the local development server (http://localhost:5173 by default)
npm run dev
```

## Production Deployment (Vercel / GitHub)

This application is powered by Vite. It is optimized and ready for immediate deployment.

### 1. Build locally

To verify the production build works locally:

```bash
npm run build
npm run preview
```

### 2. Deploy to GitHub

Initialize your git repository and push to GitHub:

```bash
git init
git add .
git commit -m "Initial commit: AI Influencer Dashboard"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

### 3. Deploy to Vercel

Vercel has zero-configuration support for Vite projects.

1. Go to [Vercel](https://vercel.com).
2. Click **Add New Project** and select your GitHub repository.
3. Vercel will automatically detect the **Vite** framework.
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Click **Deploy**. Your professional analytics dashboard will be live in seconds.
