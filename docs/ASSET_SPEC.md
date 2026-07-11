# REAKTOR — specyfikacja assetów do dostarczenia

Wszystko, co dostarczysz, integruję ja (tnę, pakuję w atlasy, składam audiosprite).
Format nazw plików = dokładnie jak niżej.

## 1. AUDIO (priorytet — jedyne, czego nie zrobię programowo w dobrej jakości)

Format: WAV lub MP3/OGG, min. 44.1 kHz, bez clippingu. Pętle muszą się zapętlać
bezszwowo. Nazwy plików jak nazwy sprite'ów:

### Muzyka (pętle)
| Plik | Opis | Długość |
|------|------|---------|
| `bgm_main` | base game: dark ambient industrial, tykanie Geigera w tle | 1.5–2.5 min |
| `bgm_freespin` | bonus: intensywniejsza, alarmowa, "reaktor się grzeje" | ~60–70 s |
| `bgm_winlevel_big` | fanfara BIG WIN (pętla) | 8 s |
| `bgm_winlevel_mega` | fanfara MEGA WIN (mocniejsza) | 8 s |
| `bgm_winlevel_epic` | fanfara EPIC WIN | 8 s |
| `bgm_winlevel_superwin` | fanfara SUPER WIN | 8 s |
| `bgm_winlevel_max` | fanfara MAX WIN (najmocniejsza) | 8 s |

### Jingle / stingi
| Plik | Opis | Długość |
|------|------|---------|
| `jng_intro_fs` | wejście do free spinów (syrena + uderzenie) | ~2 s |
| `sfx_superfreespin` | sting super bonusu (PEŁNY MELTDOWN) | ~6 s |
| `sfx_fs_respins` | retrigger (+spiny) | ~4 s |
| `sfx_youwon_panel` | panel YOU WON na koniec bonusu | ~3 s |

### SFX gry
| Plik | Opis | Długość |
|------|------|---------|
| `sfx_btn_spin` | przycisk spin | ~1 s |
| `sfx_btn_general` | klik UI | ~0.1 s |
| `sfx_reel_stop_1` … `sfx_reel_stop_5` | stuk zatrzymania bębna (5 wariantów) | ~0.2 s |
| `sfx_symbols_landing` | lądowanie symboli | ~1 s |
| `sfx_royals_landing` | lądowanie niskich symboli | ~1 s |
| `sfx_scatter_stop_1` … `_5` | kolejne scattery lądują (rosnące napięcie) | ~1 s |
| `sfx_scatter_reveal` | odsłona scattera | ~1.5 s |
| `sfx_scatter_win` / `sfx_scatter_win_v2` | wygrana scatterowa / trigger | 2–4 s |
| `sfx_anticipation_start` | start anticipation | ~1 s |
| `sfx_anticipation` | licznik Geigera przyspiesza do zatrzymania | ~7.5 s |
| `tumble_win_1` … `tumble_win_5` | pop wygranej tumble (rosnąca intensywność) | ~1 s |
| `sfx_wild_explode` | eksplozja symboli (para/rozpad) | ~1.4 s |
| `sfx_winlevel_small` / `_nice` / `_standard` / `_substantial` | końcówki mniejszych wygranych | 1–2.5 s |
| `sfx_winlevel_end` | zakończenie prezentacji wygranej | ~2 s |
| `sfx_bigwin_coinloop` | pętla monet/energii przy big win | 15–20 s |

### SFX prętów i Temperatury
| Plik | Opis | Długość |
|------|------|---------|
| `sfx_multiplier_landing` | pręt paliwowy ląduje | ~1 s |
| `sfx_multiplier_up` | Temperatura rośnie | ~1.5 s |
| `sfx_multiplier_update` | aktualizacja wartości | ~1.5 s |
| `sfx_multiplier_combine_a` / `_b` | sumowanie prętów | ~1 s |
| `sfx_multiplier_explosion_a` / `_b` / `_c` | wybuch mnożnika przy aplikacji | 1–2 s |
| `sfx_multiplier_reset` | reset po sekwencji | ~0.6 s |
| `sfx_multiplier_win` | mnożnik aplikowany do wygranej | ~4 s |

## 2. GRAFIKA (opcjonalny upgrade mojej programowej v1)

PNG z przezroczystością (poza tłami), rozmiary minimalne:

| Plik | Wymiar | Opis |
|------|--------|------|
| `logo_horizontal.png` | ~800×200 | logo REAKTOR ☢ MELTDOWN do górnego paska |
| `logo_square.png` | 512×512 | logo kwadratowe (loader/ikona) |
| `sym_h1_core.png` | 400×400 | rdzeń reaktora (złote jądro) |
| `sym_h2_valve.png` | 400×400 | zawór ciśnieniowy (miedź) |
| `sym_h3_geiger.png` | 400×400 | licznik Geigera |
| `sym_h4_hazmat.png` | 400×400 | hełm/maska hazmat (żółty) |
| `sym_l1_red.png` … `sym_l5_blue.png` | 400×400 | 5 fiolek izotopów: czerwona, pomarańczowa, żółta, zielona, niebieska |
| `sym_s_atom.png` | 500×500 | atom (scatter) — musi się wyróżniać |
| `sym_m_rod_low.png` | 400×400 | pręt paliwowy — słaby żar (pomarańcz), BEZ cyfry |
| `sym_m_rod_mid.png` | 400×400 | pręt — mocny żar (czerwień), BEZ cyfry |
| `sym_m_rod_high.png` | 400×400 | pręt — biało-niebieski żar, BEZ cyfry |
| `bg_base.png` | 2048×1024 | hala reaktora, zimna (cyjan/stal); środek zasłania plansza |
| `bg_feature.png` | 2048×1024 | hala w trakcie meltdownu (czerwień/żar) |
| `card_bonus.png` | 512×512 | obrazek karty BONUS w modalu zakupu |
| `card_superbonus.png` | 512×512 | obrazek karty SUPER BONUS |

Cyfry na prętach (2x, 25x, 500x…) nakładamy programowo — dlatego pręty bez cyfr.
Styl referencyjny: obecna v1 w grze (stal, miedź, poświata Czerenkowa, sowiecka żółć).

## 3. Czego NIE musisz dostarczać
- fonty bitmapowe, ramki, tabliczki, gruz przejścia, napisy BIG WIN — zrobione programowo
- teksty "press anywhere" (16 języków) — zostają
- moneta wygranej — neutralna, zostaje
