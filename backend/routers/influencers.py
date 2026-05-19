"""
Influencers Router — Endpoints for influencer data management.
"""

from fastapi import APIRouter

router = APIRouter()


@router.get("/")
async def list_influencers():
    """Return a list of top AI influencers."""
    return {
        "influencers": [
            {"id": 1, "name": "Lil Miquela", "platform": "Instagram", "followers": 2_600_000, "category": "Fashion"},
            {"id": 2, "name": "Shudu Gram", "platform": "Instagram", "followers": 240_000, "category": "Fashion"},
            {"id": 3, "name": "Imma", "platform": "Instagram", "followers": 400_000, "category": "Lifestyle"},
            {"id": 4, "name": "Noonoouri", "platform": "Instagram", "followers": 400_000, "category": "Luxury"},
            {"id": 5, "name": "Aitana Lopez", "platform": "Instagram", "followers": 300_000, "category": "Fitness"},
        ]
    }


@router.get("/{influencer_id}")
async def get_influencer(influencer_id: int):
    """Return detailed data for a specific influencer."""
    return {
        "id": influencer_id,
        "name": "Lil Miquela",
        "platform": "Instagram",
        "followers": 2_600_000,
        "engagement_rate": 5.2,
        "avg_likes": 135_000,
        "category": "Fashion",
        "brand_deals": 48,
    }
