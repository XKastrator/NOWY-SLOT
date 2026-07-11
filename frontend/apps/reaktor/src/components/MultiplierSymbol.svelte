<script lang="ts">
	import { BitmapText } from 'pixi-svelte';

	import { getSymbolBackgroundInfo, getSymbolInfo } from '../game/utils';
	import { MULTIPLIER_BAKED_VALUES, SYMBOL_SIZE } from '../game/constants';
	import type { MultiplierSymbol } from '../game/stateGame.svelte';
	import SymbolSpineMain from './SymbolSpineMain.svelte';
	import SymbolSpineBackground from './SymbolSpineBackground.svelte';

	type Props = {
		reelIndex: number;
		multiplierSymbol: MultiplierSymbol;
	};

	const props: Props = $props();

	const symbolInfo = $derived(
		getSymbolInfo({
			rawSymbol: props.multiplierSymbol.rawSymbol,
			state: props.multiplierSymbol.symbolState,
		}),
	);

	const symbolBackgroundInfo = $derived(
		getSymbolBackgroundInfo({
			rawSymbol: props.multiplierSymbol.rawSymbol,
			state: props.multiplierSymbol.symbolState,
		}),
	);

	// Wartości bez wypalonej cyfry w animacji (poza 2/4/5/7/10) dostają
	// nakładkę tekstową, która podąża za symbolem podczas animacji.
	const multiplierText = $derived(
		props.multiplierSymbol.rawSymbol.multiplier !== undefined &&
			!MULTIPLIER_BAKED_VALUES.includes(props.multiplierSymbol.rawSymbol.multiplier)
			? `${props.multiplierSymbol.rawSymbol.multiplier}X`
			: null,
	);
</script>

<SymbolSpineBackground
	{symbolBackgroundInfo}
	x={props.multiplierSymbol.initX}
	y={props.multiplierSymbol.initY}
/>

<SymbolSpineMain
	{symbolInfo}
	x={props.multiplierSymbol.symbolX.current}
	y={props.multiplierSymbol.symbolY.current}
	listener={{
		complete: props.multiplierSymbol.oncomplete,
	}}
/>

{#if multiplierText}
	<BitmapText
		anchor={0.5}
		x={props.multiplierSymbol.symbolX.current}
		y={props.multiplierSymbol.symbolY.current}
		text={multiplierText}
		style={{
			fontFamily: 'gold',
			fontSize: SYMBOL_SIZE * 0.34,
			letterSpacing: -2,
		}}
	/>
{/if}
