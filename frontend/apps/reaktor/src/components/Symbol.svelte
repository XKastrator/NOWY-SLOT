<script lang="ts">
	import { BitmapText } from 'pixi-svelte';

	import SymbolSpine from './SymbolSpine.svelte';
	import SymbolSprite from './SymbolSprite.svelte';
	import { getSymbolBackgroundInfo, getSymbolInfo } from '../game/utils';
	import { MULTIPLIER_BAKED_VALUES, SYMBOL_SIZE } from '../game/constants';
	import type { SymbolState, RawSymbol } from '../game/types';
	import { getContext } from '../game/context';

	type Props = {
		x?: number;
		y?: number;
		state: SymbolState;
		rawSymbol: RawSymbol;
		oncomplete?: () => void;
		loop?: boolean;
	};

	const props: Props = $props();
	const context = getContext();
	const symbolInfo = $derived(getSymbolInfo({ rawSymbol: props.rawSymbol, state: props.state }));
	const isSprite = $derived(symbolInfo.type === 'sprite');
	// Pręty o wartościach bez wypalonej cyfry w animacji (wszystko poza
	// 2/4/5/7/10) dostają nakładkę tekstową z wartością mnożnika.
	const multiplierText = $derived(
		props.rawSymbol.name === 'M' &&
			props.rawSymbol.multiplier !== undefined &&
			!MULTIPLIER_BAKED_VALUES.includes(props.rawSymbol.multiplier)
			? `${props.rawSymbol.multiplier}X`
			: null,
	);
</script>

{#if isSprite}
	<SymbolSprite {symbolInfo} x={props.x} y={props.y} oncomplete={props.oncomplete} />
{:else}
	{@const symbolBackgroundInfo = getSymbolBackgroundInfo({
		rawSymbol: props.rawSymbol,
		state: props.state,
	})}
	<SymbolSpine
		loop={props.loop}
		{symbolInfo}
		{symbolBackgroundInfo}
		x={props.x}
		y={props.y}
		showWinFrame={props.state === 'win' && !['S', 'M'].includes(props.rawSymbol.name)}
		listener={{
			complete: props.oncomplete,
			event: (_, event) => {
				if (event.data?.name === 'wildExplode') {
					context.eventEmitter?.broadcast({ type: 'soundOnce', name: 'sfx_wild_explode' });
				}
			},
		}}
	/>
{/if}

{#if multiplierText}
	<BitmapText
		anchor={0.5}
		x={props.x ?? 0}
		y={props.y ?? 0}
		text={multiplierText}
		style={{
			fontFamily: 'gold',
			fontSize: SYMBOL_SIZE * 0.34,
			letterSpacing: -2,
		}}
	/>
{/if}
