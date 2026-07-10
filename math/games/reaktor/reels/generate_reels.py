"""Deterministic reel-strip generator for REAKTOR.

Generates BR0 (base), BRB (bonushunt/ante base), FR0 (Bonus free spins),
FRS (Super Bonus free spins) and WCAP (wincap-forcing) strips.

Constraints:
  - Scatter (S): minimum gap of 8 positions per reel, so at most one scatter
    can ever be visible in a 5-row window (required by force_special_board).
  - Fuel rod (M): minimum gap of 4 positions per reel to limit stacking.
"""

import csv
import os
import random

STRIP_LENGTH = 300
NUM_REELS = 6
SEED = 20260710

# symbol: (weight, min_gap)
STRIP_SPECS = {
    "BR0": {
        "L5": (40, 0), "L4": (38, 0), "L3": (34, 0), "L2": (30, 0), "L1": (26, 0),
        "H4": (20, 0), "H3": (16, 0), "H2": (12, 0), "H1": (8, 0),
        "S": (3, 8), "M": (6, 4),
    },
    "BRB": {
        "L5": (40, 0), "L4": (38, 0), "L3": (34, 0), "L2": (30, 0), "L1": (26, 0),
        "H4": (20, 0), "H3": (16, 0), "H2": (12, 0), "H1": (8, 0),
        "S": (6, 8), "M": (6, 4),
    },
    "FR0": {
        "L5": (36, 0), "L4": (34, 0), "L3": (32, 0), "L2": (30, 0), "L1": (26, 0),
        "H4": (22, 0), "H3": (18, 0), "H2": (13, 0), "H1": (9, 0),
        "S": (2, 8), "M": (13, 4),
    },
    "FRS": {
        "L5": (34, 0), "L4": (32, 0), "L3": (30, 0), "L2": (28, 0), "L1": (26, 0),
        "H4": (22, 0), "H3": (18, 0), "H2": (14, 0), "H1": (10, 0),
        "S": (2, 8), "M": (8, 4),
    },
    "WCAP": {
        "L5": (20, 0), "L4": (20, 0), "L3": (22, 0), "L2": (24, 0), "L1": (26, 0),
        "H4": (30, 0), "H3": (26, 0), "H2": (20, 0), "H1": (14, 0),
        "S": (2, 8), "M": (22, 4),
    },
}


def generate_strip(spec: dict, rng: random.Random) -> list:
    """Generate one reel strip satisfying per-symbol minimum gaps (with wrap-around)."""
    symbols = list(spec.keys())
    weights = [spec[s][0] for s in symbols]
    while True:
        strip = []
        last_seen = {s: -10**9 for s in symbols}
        for i in range(STRIP_LENGTH):
            for _ in range(1000):
                sym = rng.choices(symbols, weights)[0]
                if i - last_seen[sym] > spec[sym][1]:
                    break
            else:
                sym = "L5"
            strip.append(sym)
            last_seen[sym] = i
        # wrap-around gap check (strip is circular)
        ok = True
        for sym in symbols:
            gap = spec[sym][1]
            if gap == 0:
                continue
            positions = [i for i, s in enumerate(strip) if s == sym]
            for a, b in zip(positions, positions[1:] + [positions[0] + STRIP_LENGTH] if positions else []):
                if b - a <= gap:
                    ok = False
                    break
            if not ok:
                break
        if ok:
            return strip


def main():
    rng = random.Random(SEED)
    out_dir = os.path.dirname(os.path.abspath(__file__))
    for name, spec in STRIP_SPECS.items():
        reels = [generate_strip(spec, rng) for _ in range(NUM_REELS)]
        rows = list(zip(*reels))
        path = os.path.join(out_dir, f"{name}.csv")
        with open(path, "w", newline="") as f:
            writer = csv.writer(f)
            for row in rows:
                writer.writerow(row)
        counts = {s: sum(r.count(s) for r in reels) for s in spec}
        print(f"{name}: {counts}")


if __name__ == "__main__":
    main()
