"""Extract a pool of sample books per bet mode from the math publish files.

Usage: python3 extract-books.py  (run from this directory)
Writes mock_books.json consumed by mock-rgs.mjs.
"""

import io
import json
import os

import zstandard

LIB = os.path.join(
    os.path.dirname(os.path.abspath(__file__)),
    "../../../math/games/reaktor/library/publish_files/",
)


def iter_books(path):
    with open(path, "rb") as f:
        dctx = zstandard.ZstdDecompressor()
        with dctx.stream_reader(f) as r:
            for line in io.TextIOWrapper(r, encoding="utf-8"):
                line = line.strip()
                if line:
                    yield json.loads(line)


def take(mode, n, predicate=lambda b: True, max_size=110000):
    out = []
    for b in iter_books(os.path.join(LIB, f"books_{mode}.jsonl.zst")):
        if len(json.dumps(b)) < max_size and predicate(b):
            out.append(b)
        if len(out) >= n:
            break
    return out


books = {
    "base": take("base", 18),
    "bonushunt": take("bonushunt", 8),
    "bonus": take("bonus", 5),
    "superbonus": take("superbonus", 5),
}
out_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), "mock_books.json")
json.dump(books, open(out_path, "w"))
print("wrote", out_path, {k: len(v) for k, v in books.items()})
