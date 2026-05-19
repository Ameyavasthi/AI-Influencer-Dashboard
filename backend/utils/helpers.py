"""
Utility helpers for the backend API.
"""


def format_currency(value: float) -> str:
    """Format a number as USD currency string."""
    if value >= 1_000_000_000:
        return f"${value / 1_000_000_000:.1f}B"
    elif value >= 1_000_000:
        return f"${value / 1_000_000:.1f}M"
    elif value >= 1_000:
        return f"${value / 1_000:.1f}K"
    return f"${value:.2f}"


def calculate_growth(current: float, previous: float) -> float:
    """Calculate percentage growth between two values."""
    if previous == 0:
        return 0.0
    return round(((current - previous) / previous) * 100, 2)
