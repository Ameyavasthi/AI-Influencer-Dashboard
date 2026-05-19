# AI Influencer Analytics Dashboard

A professional, full-stack data analytics dashboard analyzing the global **AI Influencer Industry**, including market growth, regional adoption, monetization models, and performance comparisons. Built with a **React + Vite** frontend and a **FastAPI** backend, designed with consulting-firm aesthetics (McKinsey / Deloitte / BCG grade).

---

## Live Dashboard

Access the live frontend dashboard here:
https://ai-influencer-dashboard.vercel.app

---

## Project Structure

```
AI-Influencer-Dashboard/
├── frontend/                # React + Vite + Tailwind CSS v4
│   ├── src/
│   │   ├── components/      # Header, Sidebar, UI primitives
│   │   │   └── ui/          # KPI, Panel, Badge, ProgressBar, Tip, Divider
│   │   ├── layouts/         # DashboardLayout (responsive shell)
│   │   ├── pages/           # Overview, Performance, Segmentation, Regional,
│   │   │                    # Monetisation, Forecast, About
│   │   ├── data/            # Theme constants & mock datasets
│   │   └── assets/          # Static assets (SVG icons, images)
│   ├── public/
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
├── backend/                 # FastAPI + Python
│   ├── main.py              # App entry point, CORS, router mounting
│   ├── routers/
│   │   ├── analytics.py     # /api/analytics — KPIs, performance, forecast
│   │   └── influencers.py   # /api/influencers — CRUD for influencer data
│   ├── utils/
│   │   └── helpers.py       # Formatting & calculation utilities
│   ├── requirements.txt
│   └── .env.example
│
├── .gitignore
└── README.md
```

---

## Dashboard Pages

### Industry Overview
High-level KPIs and global market growth trends.

### Market Segmentation
Breakdown of influencer segments across industries.

### Regional Adoption
Analysis of global adoption of AI influencers by region.

### Performance Comparison
Comparison between AI influencers and human influencers across engagement and scalability metrics.

### Monetization Models
How AI influencers generate revenue through brand partnerships, affiliate marketing, subscriptions, and digital products.

### Future Forecast
Projected market growth and industry expansion through 2032.

### About
Information about the dashboard creator and project background.

---

## Features

- **Executive-level analytics dashboard** with interactive charts
- **Consulting-Grade UI/UX** — Clean IBM Plex typography, exact spacing, subtle shadows, sophisticated color palette
- **Fully Responsive** — Mobile (< 640px), Tablet (640–1024px), Desktop (> 1024px) with adaptive layouts
- **Dynamic Charts** — Recharts with `ResponsiveContainer` for fluid resizing
- **Modular Architecture** — Isolated components, layouts, pages, and data layers
- **RESTful API** — FastAPI backend with analytics and influencer management endpoints
- **CORS Ready** — Pre-configured for local development (port 5173 ↔ 8000)

---

## Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **Python** ≥ 3.10

### Frontend

```bash
cd frontend
npm install
npm run dev
```

The dashboard will be live at **http://localhost:5173**

### Backend

```bash
cd backend
python -m venv venv
venv\Scripts\activate        # Windows
# source venv/bin/activate   # macOS / Linux
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

The API will be live at **http://localhost:8000**
API docs at **http://localhost:8000/docs**

---

## Production Build

### Frontend

```bash
cd frontend
npm run build
npm run preview
```

### Deploy to Vercel

Vercel has zero-configuration support for Vite projects:

1. Go to [Vercel](https://vercel.com)
2. Click **Add New Project** → select your GitHub repo
3. Set root directory to `frontend`
4. Vercel auto-detects Vite → **Deploy**

---

## Tech Stack

| Layer      | Technology                          |
|------------|-------------------------------------|
| Frontend   | React 18, Vite, Tailwind CSS v4     |
| Charts     | Recharts                            |
| Icons      | Lucide React                        |
| Backend    | FastAPI, Uvicorn, Pydantic          |
| Language   | JavaScript (frontend), Python (backend) |

---

## Author

**Amey S. Avasthi**

Dashboard Creator & Data Analyst

LinkedIn:
https://linkedin.com/in/amey-avasthi

GitHub:
https://github.com/Ameyavasthi

---

## Project Purpose

This dashboard was created as part of a research and data analytics project exploring the emerging **AI Influencer ecosystem** and its impact on digital marketing.

---

## License

This project is open for educational and portfolio purposes.
