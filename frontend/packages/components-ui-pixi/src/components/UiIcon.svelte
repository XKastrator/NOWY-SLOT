<script lang="ts" module>
	// Luzny typ pixi.Graphics (pakiet nie importuje pixi.js bezposrednio).
	type G = {
		clear: () => G;
		moveTo: (x: number, y: number) => G;
		lineTo: (x: number, y: number) => G;
		arc: (x: number, y: number, r: number, a0: number, a1: number) => G;
		circle: (x: number, y: number, r: number) => G;
		roundRect: (x: number, y: number, w: number, h: number, r: number) => G;
		poly: (points: number[]) => G;
		fill: (color: number) => G;
		stroke: (style: { color: number; width: number; cap?: string }) => G;
	};

	// Wektorowe ikony paska (styl referencyjny: cienka bialo/zlota kreska).
	// Rysowane w lokalnym ukladzie 100x100 wysrodkowanym w (0,0): [-50..50].
	export type IconName =
		| 'spin'
		| 'stop'
		| 'menu'
		| 'turbo'
		| 'autoSpin'
		| 'decrease'
		| 'increase'
		| 'menuExit'
		| 'buyBonus'
		| 'payTable'
		| 'info'
		| 'settings'
		| 'soundOn'
		| 'soundOff';

	const drawers: Record<IconName, (g: G, c: number, w: number) => void> = {
		spin: (g, c, w) => {
			// okragla strzalka (obieg)
			g.arc(0, 0, 30, Math.PI * 0.62, Math.PI * 2.35).stroke({ color: c, width: w, cap: 'round' });
			const a = Math.PI * 2.35;
			const tx = Math.cos(a) * 30;
			const ty = Math.sin(a) * 30;
			g.poly([tx + 2, ty - 16, tx + 17, ty + 2, tx - 5, ty + 6]).fill(c);
		},
		stop: (g, c) => {
			g.roundRect(-20, -20, 40, 40, 7).fill(c);
		},
		menu: (g, c, w) => {
			[-16, 0, 16].forEach((y) =>
				g.moveTo(-22, y).lineTo(22, y).stroke({ color: c, width: w, cap: 'round' }),
			);
		},
		turbo: (g, c) => {
			// blyskawica
			g.poly([6, -30, -14, 4, 0, 4, -6, 30, 16, -6, 2, -6]).fill(c);
		},
		autoSpin: (g, c, w) => {
			// dwie zakrzywione strzalki (odswiez)
			g.arc(0, 0, 24, Math.PI * 1.15, Math.PI * 1.95).stroke({ color: c, width: w, cap: 'round' });
			g.arc(0, 0, 24, Math.PI * 0.15, Math.PI * 0.95).stroke({ color: c, width: w, cap: 'round' });
			g.poly([26, -20, 30, -2, 14, -8]).fill(c);
			g.poly([-26, 20, -30, 2, -14, 8]).fill(c);
		},
		decrease: (g, c, w) => {
			g.moveTo(-16, 0).lineTo(16, 0).stroke({ color: c, width: w, cap: 'round' });
		},
		increase: (g, c, w) => {
			g.moveTo(-16, 0).lineTo(16, 0).moveTo(0, -16).lineTo(0, 16).stroke({ color: c, width: w, cap: 'round' });
		},
		menuExit: (g, c, w) => {
			g.moveTo(-15, -15).lineTo(15, 15).moveTo(15, -15).lineTo(-15, 15).stroke({ color: c, width: w, cap: 'round' });
		},
		buyBonus: (g, c, w) => {
			// symbol radioaktywnosci (trojlistek)
			g.circle(0, 0, 6).fill(c);
			for (let k = 0; k < 3; k++) {
				const a0 = (k * 120 - 30) * (Math.PI / 180);
				const a1 = (k * 120 + 30) * (Math.PI / 180);
				g.moveTo(0, 0)
					.arc(0, 0, 26, a0, a1)
					.lineTo(0, 0)
					.fill(c);
			}
			g.circle(0, 0, 9).stroke({ color: 0x000000, width: 3 });
		},
		payTable: (g, c, w) => {
			g.roundRect(-20, -24, 40, 48, 5).stroke({ color: c, width: w });
			[-10, 2, 14].forEach((y) => g.moveTo(-12, y).lineTo(12, y).stroke({ color: c, width: 3 }));
		},
		info: (g, c, w) => {
			g.circle(0, 0, 24).stroke({ color: c, width: w });
			g.circle(0, -11, 3.5).fill(c);
			g.moveTo(0, -3).lineTo(0, 14).stroke({ color: c, width: w, cap: 'round' });
		},
		settings: (g, c, w) => {
			g.circle(0, 0, 10).stroke({ color: c, width: w });
			for (let k = 0; k < 8; k++) {
				const a = (k * 45 * Math.PI) / 180;
				g.moveTo(Math.cos(a) * 16, Math.sin(a) * 16)
					.lineTo(Math.cos(a) * 24, Math.sin(a) * 24)
					.stroke({ color: c, width: w, cap: 'round' });
			}
		},
		soundOn: (g, c, w) => {
			g.poly([-22, -8, -8, -8, 4, -20, 4, 20, -8, 8, -22, 8]).fill(c);
			g.arc(6, 0, 12, -Math.PI / 3, Math.PI / 3).stroke({ color: c, width: w, cap: 'round' });
			g.arc(6, 0, 20, -Math.PI / 3, Math.PI / 3).stroke({ color: c, width: w, cap: 'round' });
		},
		soundOff: (g, c, w) => {
			g.poly([-22, -8, -8, -8, 4, -20, 4, 20, -8, 8, -22, 8]).fill(c);
			g.moveTo(12, -10).lineTo(28, 10).moveTo(28, -10).lineTo(12, 10).stroke({ color: c, width: w, cap: 'round' });
		},
	};
</script>

<script lang="ts">
	import { Graphics } from 'pixi-svelte';

	type Props = {
		name: IconName;
		size?: number;
		color?: number;
		width?: number;
	};
	const props: Props = $props();
	const size = $derived(props.size ?? 60);
	const color = $derived(props.color ?? 0xffffff);
	const strokeWidth = $derived(props.width ?? 5);
</script>

<Graphics
	scale={size / 100}
	draw={(g) => {
		g.clear();
		drawers[props.name]?.(g, color, strokeWidth);
	}}
/>
