# REAKTOR ☢️ — slot na Stake Engine

Autorski slot 6×5 **scatter-pays + tumble** w klimacie radzieckiej elektrowni
atomowej na granicy meltdownu. Pełna dokumentacja designu:
[docs/GAME_DESIGN.md](docs/GAME_DESIGN.md).

## Najważniejsze mechaniki

- **Pręty paliwowe (M)** — mnożniki ×2–×500 (w Super Bonusie do ×1000),
  sumują się i mnożą wygraną sekwencji tumble.
- **Temperatura Reaktora** — w free spinach mnożniki prętów akumulują się
  w globalny mnożnik, który nie resetuje się między spinami.
- **BONUS (Meltdown)** — 10 FS, trigger 4–5 scatterów lub buy 100×.
- **SUPER BONUS (Pełny Meltdown)** — 10 FS, trigger 6 scatterów lub buy 500×.
  Dodatkowo: gwarantowany pręt na każdym spinie + **MUTACJA** (jeden typ
  niskiego symbolu mutuje co spin w symbol wysoki).
- **Sonda neutronowa** (ante 1.25×) — podwojona szansa na bonus.
- RTP 96.5% (każdy tryb), max win **10 000×**, wysoka wolatylność.

## Struktura

```
docs/GAME_DESIGN.md    — pełny design doc (symbole, paytable, alokacja RTP)
math/                  — Stake Engine math-sdk (MIT, vendored) + gra
math/games/reaktor/    — konfiguracja, mechaniki, taśmy, optymalizacja
```

## Jak wygenerować matematykę

```sh
cd math
pip install numpy zstandard xlsxwriter toml python-dotenv
python3 games/reaktor/reels/generate_reels.py   # regeneracja taśm (deterministyczna)
PYTHONPATH=. python3 games/reaktor/run.py       # symulacje + optymalizacja RTP + PAR sheet
```

Wyniki (books, lookup tables, pliki publikacyjne dla RGS) trafiają do
`math/games/reaktor/library/` (poza gitem — generowane odtwarzalnie).
Optymalizator RTP wymaga Rusta: `cd math/optimization_program && cargo build --release`.

## Status

- [x] Research (SDK, benchmarki top slotów: Gates of Olympus 1000, Sugar Rush 1000)
- [x] Design doc
- [x] Model matematyczny (4 tryby zakładów, custom eventy dla frontendu)
- [x] Symulacje + optymalizacja RTP + weryfikacja formatu RGS
- [ ] Frontend (web-sdk: Svelte + PIXI) — etap 2
- [ ] Assety graficzne i dźwiękowe — etap 2
- [ ] Upload na Stake Engine ACP — etap 3
