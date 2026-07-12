# REAKTOR — prompty do generatorów audio

Muzykę rób w **Suno / Udio** (prompty "MUZYKA"), efekty w **ElevenLabs Sound
Effects** (lub podobnym generatorze SFX — prompty "SFX", po angielsku działają
najlepiej). Po wygenerowaniu zapisz plik pod nazwą z nagłówka (format WAV/MP3).

Wspólny klimat (możesz doklejać do każdego promptu muzycznego):
> Soviet-era nuclear power plant on the edge of meltdown; dark industrial
> ambient, Geiger counter ticking, deep concrete reverb, analog synths,
> distant alarms, ominous but hypnotic. Instrumental only, no vocals.

## MUZYKA (Suno/Udio)

### `bgm_main` (pętla ~2 min, base game)
> Dark industrial ambient loop for a slot game set in a soviet nuclear power
> plant. Slow hypnotic pulse around 90 BPM, deep analog bass drone, soft
> Geiger counter ticking as percussion, metallic clangs echoing in a concrete
> hall, faint cyrillic-era cold-war synth melody, subtle tension that never
> resolves. Seamless loop, instrumental, no vocals, no drops.

### `bgm_freespin` (pętla ~60–70 s, bonus "Meltdown")
> Intense industrial techno-ambient loop, reactor meltdown in progress:
> driving 120 BPM pulse, alarm sirens woven into the rhythm, aggressive
> analog acid bassline, accelerating Geiger counter clicks, rising heat and
> danger, triumphant dark energy. Seamless loop, instrumental, no vocals.

### `bgm_winlevel_big` (pętla 8 s)
> Short 8-second triumphant loop: industrial fanfare with brass-like synth
> stabs over a pulsing bass, celebratory but gritty, nuclear-plant control
> room celebration. Seamless loop, instrumental.

### `bgm_winlevel_mega` (pętla 8 s)
> Same style as before but bigger: 8-second heroic industrial fanfare loop,
> pounding drums, layered synth brass, alarm accents, escalating excitement.
> Seamless loop, instrumental.

### `bgm_winlevel_epic` (pętla 8 s)
> 8-second epic industrial-orchestral fanfare loop, huge drums, choir-like
> synth pads, sirens blending into harmony, overwhelming victory in a
> burning reactor hall. Seamless loop, instrumental.

### `bgm_winlevel_superwin` (pętla 8 s)
> 8-second massive victory loop: orchestral hits fused with industrial
> techno, relentless percussion, soaring lead, dangerous euphoria.
> Seamless loop, instrumental.

### `bgm_winlevel_max` (pętla 8 s)
> 8-second ultimate win loop: apocalyptic triumphant anthem, full orchestral
> and industrial wall of sound, deep impacts, radiant major-key resolution
> over meltdown sirens. Seamless loop, instrumental.

## JINGLE (ElevenLabs SFX albo Suno na krótkie formy)

### `jng_intro_fs` (~2 s)
> Two-second cinematic stinger: nuclear alarm klaxon burst followed by a
> deep metallic impact and rising radioactive shimmer.

### `sfx_superfreespin` (~6 s)
> Six-second dramatic stinger: reactor breach alarm, cascading metallic
> impacts, rising synth surge ending in a massive explosion with a glowing
> aftermath shimmer.

### `sfx_fs_respins` (~4 s)
> Four-second reward stinger: alarm whoop, energetic rising arpeggio,
> mechanical ratchet adding extra charges, positive metallic chime finish.

### `sfx_youwon_panel` (~3 s)
> Three-second victory reveal: heavy steel door slam, triumphant industrial
> chord with shimmering radioactive glow tail.

## SFX (ElevenLabs Sound Effects — prompt per plik)

| Plik | Prompt |
|------|--------|
| `sfx_btn_spin` | Chunky industrial button press with a brief servo whirr, arcade feel, short |
| `sfx_btn_general` | Tiny mechanical click of a control panel switch, very short, dry |
| `sfx_reel_stop_1..5` | Heavy metallic thunk of a machine column locking into place, short, slight pitch variation (wygeneruj 5 wariantów) |
| `sfx_symbols_landing` | Cluster of small metallic objects landing softly on steel, quick |
| `sfx_royals_landing` | Glass vials clinking gently as they settle into slots, short |
| `sfx_scatter_stop_1` | Deep resonant metallic gong with radioactive shimmer, building tension, 1s |
| `sfx_scatter_stop_2..5` | Same gong rising in pitch and intensity each time (kolejne warianty coraz mocniejsze) |
| `sfx_scatter_reveal` | Bright radioactive energy bloom with crystal shimmer, 1.5s |
| `sfx_scatter_win` | Energetic alarm burst with triumphant metallic resonance, 2s |
| `sfx_scatter_win_v2` | Bigger version: alarm cascade with deep impact and glowing tail, 3.5s |
| `sfx_anticipation_start` | Geiger counter starts crackling rapidly, tension rising, 1s |
| `sfx_anticipation` | Geiger counter accelerating from slow clicks to frantic crackle with rising drone, 7.5 seconds, ends abruptly |
| `tumble_win_1..5` | Satisfying energetic pop of exploding glass with metallic sparkle, short, each variant slightly bigger and brighter than previous (5 wariantów) |
| `sfx_wild_explode` | Steam burst explosion with metal debris and hissing tail, 1.4s |
| `sfx_winlevel_small` | Short positive metallic chime with soft glow, 1s |
| `sfx_winlevel_nice` | Warm two-note industrial chime, satisfying, 1.5s |
| `sfx_winlevel_standard` | Confident three-note metallic fanfare, 1.2s |
| `sfx_winlevel_substantial` | Rich rising fanfare with deep impact finish, 2.5s |
| `sfx_winlevel_end` | Soft resolving chord with metallic shimmer fading out, 2s |
| `sfx_bigwin_coinloop` | Continuous cascade of coins and sparking energy, loopable, 17 seconds |
| `sfx_multiplier_landing` | Heavy fuel rod sliding into reactor socket with deep clunk and energy hum, 1s |
| `sfx_multiplier_up` | Rising power surge with turbine spin-up, 1.5s |
| `sfx_multiplier_update` | Electric charge-up with digital counter ticks, 1.5s |
| `sfx_multiplier_combine_a` | Two energy cores fusing with a deep magnetic pull, 1.2s |
| `sfx_multiplier_combine_b` | Variant: energy fusion with brighter crackle, 1s |
| `sfx_multiplier_explosion_a` | Sharp energy discharge explosion, 0.8s |
| `sfx_multiplier_explosion_b` | Bigger energy explosion with debris and glow tail, 2s |
| `sfx_multiplier_explosion_c` | Medium plasma burst with metallic echo, 1.2s |
| `sfx_multiplier_reset` | Power-down whir with pressure release hiss, 0.6s |
| `sfx_multiplier_win` | Massive energy release with triumphant resonance and long glowing tail, 4s |

## Wskazówki
- Pętle (`bgm_*`, `sfx_bigwin_coinloop`): sprawdź, czy koniec skleja się z
  początkiem; w Suno użyj trybu instrumental i utnij ogon ciszy.
- Nie martw się idealnymi długościami SFX — przytnę i znormalizuję sam.
- Wystarczy MP3 320 kbps albo WAV; nazwij pliki dokładnie jak w nagłówkach.
