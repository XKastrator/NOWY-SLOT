# REAKTOR ☢️ — Game Design Document

> Slot 6×5, scatter-pays (pay anywhere) + tumble, z mnożnikami "prętów paliwowych",
> globalnym mnożnikiem **Temperatury Reaktora** w free spinach oraz dwoma poziomami
> bonusu: **BONUS (Meltdown)** i **SUPER BONUS (Pełny Meltdown + Mutacja)**.
> Zaprojektowany pod publikację na **Stake Engine** (statyczna matematyka, books + lookup tables).

| Parametr              | Wartość                                    |
|-----------------------|--------------------------------------------|
| Siatka                | 6 bębnów × 5 rzędów                        |
| Mechanika wygranych   | Scatter pays — 8+ identycznych symboli gdziekolwiek |
| Tumble                | Tak — wygrywające symbole znikają, nowe spadają |
| RTP (każdy tryb)      | 96.5%                                      |
| Max win               | **10 000× stawki**                         |
| Wolatylność           | Wysoka (m2m base ~5–10)                    |
| Hit rate (base)       | ~29% (1 na ~3.4 spina)                     |
| Trigger bonusu        | ~1 na 220 spinów (1 na ~115 z Sondą)       |
| Trigger super bonusu  | ~1 na 5000 spinów (naturalny, 6 scatterów) |
| Bonus Buy             | 100× stawki                                |
| Super Bonus Buy       | 500× stawki                                |
| Ante ("Sonda")        | 1.25× stawki, 2× szansa na bonus           |

Benchmark: Gates of Olympus 1000 (Pragmatic Play) — 96.5% RTP, max win 15 000×,
kule mnożnikowe do ×1000, akumulowany mnożnik w FS. REAKTOR używa tej samej,
sprawdzonej rodziny matematyki (scatter-pays + tumble + addytywne mnożniki
z akumulacją), ale dokłada drugi poziom bonusu z własną mechaniką (Mutacja)
oraz spójny, mocny motyw.

---

## 1. Temat i narracja

Radziecka elektrownia atomowa, noc, syreny. Gracz jest operatorem reaktora,
który balansuje na granicy meltdownu. Im "goręcej", tym większe wygrane —
temperatura rdzenia jest wprost mechaniką gry (globalny mnożnik).

Art direction: retro-sowiecki industrial (beton, miedź, zielone CRT, żółte
oznaczenia PRL-owskie), poświata Czerenkowa (cyjan/zieleń) na wygranych,
pręty paliwowe świecące pomarańczem. UI stylizowane na pulpit sterowniczy:
analogowe wskaźniki, przełączniki, taśma alarmowa. Soundtrack: dark ambient +
industrialne tykanie licznika Geigera, które przyspiesza przy anticipation.

## 2. Symbole

### Wypłacające (scatter pays, 8+ gdziekolwiek)

Trzy progi wypłat: **8–9**, **10–11**, **12+** symboli (mnożnik stawki):

| ID | Symbol (motyw)                  | 8–9  | 10–11 | 12+  |
|----|---------------------------------|------|-------|------|
| H1 | Rdzeń reaktora (złote jądro)    | 10   | 25    | 50   |
| H2 | Zawór ciśnieniowy (miedź)       | 2.5  | 10    | 25   |
| H3 | Licznik Geigera                 | 2    | 5     | 15   |
| H4 | Hełm hazmat                     | 1.5  | 5     | 12   |
| L1 | Izotop czerwony (fiolka)        | 1    | 2.5   | 10   |
| L2 | Izotop pomarańczowy             | 0.8  | 2     | 8    |
| L3 | Izotop żółty                    | 0.5  | 1.5   | 5    |
| L4 | Izotop zielony                  | 0.4  | 1.2   | 4    |
| L5 | Izotop niebieski                | 0.25 | 1     | 3    |

### Specjalne

| ID | Symbol | Działanie |
|----|--------|-----------|
| S  | **Atom** (scatter) | 4+ w base → trigger bonusu + wypłata scattera (4: 3×, 5: 5×, 6: 100×). 6 → **SUPER BONUS**. W FS: 3+ → retrigger. Max 1 na bęben (taśmy bez stackowania). |
| M  | **Pręt paliwowy** (mnożnik) | Ląduje z wartością ×2–×500 (w Super Bonusie do **×1000**). Nie znika przy tumble. Na koniec sekwencji tumble, jeśli był win: suma prętów mnoży wygraną sekwencji. |

## 3. Przebieg gry (base game)

1. Spin → plansza 6×5.
2. Ewaluacja: każdy symbol występujący 8+ razy wypłaca wg tabeli.
3. **Tumble**: wygrywające symbole eksplodują, reszta opada, nowe symbole
   dosypują się z góry. Pręty (M) i scattery (S) nie eksplodują — zostają.
4. Pętla tumble trwa, dopóki padają wygrane.
5. **Koniec sekwencji**: jeśli suma wygranych sekwencji > 0 i na planszy są
   pręty — wygrana sekwencji × suma wartości prętów.
6. 4+ scatterów → wypłata scattera + **BONUS** (10 FS). 6 scatterów → **SUPER BONUS**.

## 4. BONUS — "MELTDOWN" (10 free spinów)

Jak base game, plus **Temperatura Reaktora** — globalny mnożnik, który
**nie resetuje się między spinami**:

- Gdy spin kończy się wygraną i na planszy są pręty: ich suma **dodaje się
  do Temperatury**, a wygrana sekwencji mnożona jest przez **całą aktualną
  Temperaturę** (mechanika sprawdzona w GoO — addytywna akumulacja).
- Spin z wygraną bez prętów wypłaca bez mnożnika (Temperatura bez zmian).
- 3+ scatterów w FS → retrigger: 3 → +5, 4 → +8, 5 → +10, 6 → +15 spinów.
- Wizualnie: wskaźnik temperatury na pulpicie rośnie, tło coraz bardziej
  "płonie", przy wysokiej temperaturze pękają rury, sypie się beton.

## 5. SUPER BONUS — "PEŁNY MELTDOWN" (10 free spinów)

Wszystko z BONUSU, plus **dwie dodatkowe mechaniki**:

1. **Gwarantowany pręt**: na każdym spinie ląduje co najmniej jeden pręt
   paliwowy (M). Wartości prętów z rozszerzonej puli — do **×1000**.
2. **MUTACJA ☢️**: na starcie każdego spina promieniowanie mutuje jeden
   losowy typ niskiego symbolu (L1–L5) obecny na planszy — wszystkie jego
   instancje zamieniają się w jeden losowy symbol wysoki (H1–H4).
   Wizualnie: zielona fala promieniowania przechodzi przez planszę,
   symbole "bulgoczą" i transformują. Mutacja drastycznie zwiększa
   szansę na duże klastry wysokich symboli, które następnie łapią
   mnożniki prętów.

Wejście: naturalnie 6 scatterów (1 na ~5000 spinów) albo Super Bonus Buy (500×).

## 6. Tryby zakładów (bet modes)

| Tryb        | Koszt  | Opis |
|-------------|--------|------|
| `base`      | 1.00×  | Standardowy spin. |
| `bonushunt` | 1.25×  | **"Sonda neutronowa"** (ante): 2× większa szansa na trigger bonusu, wyłącza buy. |
| `bonus`     | 100×   | **Bonus Buy** — natychmiastowy trigger BONUSU (4 lub 5 scatterów). |
| `superbonus`| 500×   | **Super Bonus Buy** — natychmiastowy trigger SUPER BONUSU (6 scatterów). |

Każdy tryb balansowany niezależnie do RTP 96.5% (optymalizator Rust z math-sdk).

## 7. Alokacja RTP i hit-rate'y (cele optymalizacji)

### base (koszt 1.0)
| Kryterium      | RTP   | Hit rate      | Śr. wygrana |
|----------------|-------|---------------|-------------|
| wincap (10000×)| 0.5%  | 1 / 2 000 000 | 10 000×     |
| superfreegame  | 6.0%  | 1 / 5 000     | 300×        |
| freegame       | 30.0% | 1 / 220       | 66×         |
| basegame       | 60.0% | 1 / 3.4       | —           |
| 0 (przegrana)  | 0%    | wolna zmienna | 0           |
| **Razem**      | **96.5%** | | |

### bonushunt (koszt 1.25)
| Kryterium      | RTP   | Hit rate      | Śr. wygrana |
|----------------|-------|---------------|-------------|
| wincap         | 0.5%  | 1 / 1 600 000 | 10 000×     |
| superfreegame  | 7.0%  | 1 / 3 430     | 300×        |
| freegame       | 42.0% | 1 / 110       | 58×         |
| basegame       | 47.0% | 1 / 3.4       | —           |
| **Razem**      | **96.5%** | | |

### bonus buy (koszt 100)
| Kryterium | RTP    | Hit rate | Śr. wygrana |
|-----------|--------|----------|-------------|
| wincap    | 0.5%   | 1 / 20 000 | 10 000×   |
| freegame  | 96.0%  | reszta   | ~96×        |
| **Razem** | **96.5%** | | |

### superbonus buy (koszt 500)
| Kryterium      | RTP    | Hit rate  | Śr. wygrana |
|----------------|--------|-----------|-------------|
| wincap         | 1.0%   | 1 / 2 000 | 10 000×     |
| superfreegame  | 95.5%  | reszta    | ~478×       |
| **Razem**      | **96.5%** | | |

## 8. Wartości prętów paliwowych (wagi losowania)

| Kontekst        | Pula wartości |
|-----------------|---------------|
| Base game       | 2–500, ciężko ważone niskie (mediana ×2–×4) |
| Bonus FS        | 2–500, grubszy ogon (więcej ×10–×50) |
| Super Bonus FS  | 2–**1000**, najgrubszy ogon + gwarancja 1 pręta/spin |
| Wincap sims     | tylko wysokie wartości (wymuszenie 10 000×) |

Dokładne wagi w `math/games/reaktor/game_config.py` (`mult_values` per dystrybucja).

## 9. Eventy do frontendu (books)

Standardowe z SDK: `reveal`, `winInfo`, `tumbleBoard`, `updateTumbleWin`,
`setWin`, `setTotalWin`, `freeSpinTrigger`, `updateFreeSpin`, `freeSpinEnd`,
`wincap`, `finalWin`.

Customowe dla REAKTORA:
| Event | Payload | Kiedy |
|-------|---------|-------|
| `boardMultiplierInfo` | pozycje + wartości prętów, win przed/po | koniec sekwencji tumble z winem i prętami |
| `temperatureUpdate` | `{temperature}` | po dodaniu prętów do Temperatury (FS) |
| `mutation` | `{sourceSymbol, targetSymbol, positions[]}` | start spina w Super Bonusie |
| `scatterPayInfo` | `{win, positions[]}` | 4+ S na triggerze |

## 10. Struktura repo

```
NOWY-SLOT/
├── docs/GAME_DESIGN.md        ← ten dokument
├── math/                      ← fork Stake Engine math-sdk (MIT) + gra
│   └── games/reaktor/
│       ├── game_config.py     ← paytable, bet modes, dystrybucje
│       ├── gamestate.py       ← przebieg spina (base/FS/super)
│       ├── game_override.py   ← reset, przypisania symboli specjalnych
│       ├── game_executables.py← temperatura, pręty, mutacja, scatter pay
│       ├── game_calculations.py
│       ├── game_events.py     ← eventy custom
│       ├── game_optimization.py ← cele RTP/hit-rate dla optymalizatora
│       ├── reels/             ← taśmy BR0, BRB, FR0, FRS, WCAP (+generator)
│       └── run.py             ← symulacje + optymalizacja + PAR sheet
└── frontend/                  ← (etap 2) web-sdk: Svelte + PIXI
```

## 11. Taśmy bębnów (reelsets)

| Taśma | Użycie | Charakterystyka |
|-------|--------|-----------------|
| BR0   | base game | S: ~3/bęben (bez stacków, odstęp ≥7), M: rzadkie |
| BRB   | bonushunt base | jak BR0, S gęstsze (anticipation częstsze) |
| FR0   | Bonus FS | brak triggera 4+? — S obecne (retrigger), M gęstsze |
| FRS   | Super Bonus FS | M bardzo gęste, S obecne, mniej najniższych lowów |
| WCAP  | wincap sims (FS) | M gęste + high syms — do wymuszania 10 000× |

## 12. Dlaczego to jest "top 1%"

1. **Matematyka z rodziny GoO** — najbardziej dochodowy archetyp slotu
   ostatnich lat, ale nie klon 1:1: drugi poziom bonusu z Mutacją daje
   własną tożsamość i "reason to buy" na dwóch progach cenowych.
2. **Temperatura = temat = mechanika.** Meltdown nie jest skórką — globalny
   mnożnik JEST fabułą gry. To poziom spójności Sugar Rush/Wanted.
3. **Pełna siatka trybów** (ante + 2 buye) = maksymalna monetyzacja na Stake,
   gdzie bonus buy generuje większość obrotu.
4. **Zbalansowane cele hit-rate** przeniesione z realnych benchmarków
   (trigger 1/220, avg bonus 66×, super 1/5000, avg 300×, wincap punchy
   1/2000 w super buy).
5. **Eventy zaprojektowane pod frontend** — każda mechanika ma zdarzenie
   w books, więc prezentacja (anticipation, mutacja, temperatura) jest
   deterministyczna i zgodna z RGS.
