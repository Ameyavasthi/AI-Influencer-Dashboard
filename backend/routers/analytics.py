"""
Analytics Router — Endpoints for dashboard analytics data.
"""

from fastapi import APIRouter

router = APIRouter()


@router.get("/overview")
async def get_overview():
    """Return high-level KPI metrics for the dashboard overview."""
    return {
        "total_influencers": 12400,
        "market_value_usd": 21_500_000_000,
        "avg_engagement_rate": 4.7,
        "yoy_growth_pct": 28.3,
    }


@router.get("/performance")
async def get_performance():
    """Return performance metrics across platforms."""
    return {
        "platforms": [
            {"name": "Instagram", "followers": 4_200_000, "engagement": 5.1},
            {"name": "TikTok", "followers": 3_800_000, "engagement": 6.3},
            {"name": "YouTube", "followers": 2_100_000, "engagement": 3.8},
            {"name": "Twitter/X", "followers": 1_600_000, "engagement": 2.4},
        ]
    }


@router.get("/forecast")
async def get_forecast():
    """Return market forecast projections."""
    return {
        "projections": [
            {"year": 2024, "value": 21.5},
            {"year": 2025, "value": 27.8},
            {"year": 2026, "value": 35.2},
            {"year": 2027, "value": 44.1},
            {"year": 2028, "value": 55.0},
        ],
        "cagr_pct": 26.4,
    }
