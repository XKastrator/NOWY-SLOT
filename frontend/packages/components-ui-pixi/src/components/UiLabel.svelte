<script lang="ts">
	import { Text } from 'pixi-svelte';
	import { WHITE } from 'constants-shared/colors';

	import UiSprite from './UiSprite.svelte';
	import { UI_BASE_FONT_SIZE } from '../constants';

	type Props = {
		label: string;
		value: string;
		tiled?: boolean;
		stacked?: boolean;
	};

	const props: Props = $props();

	// Kapsuły w stylu REAKTOR: szara etykieta, biała pogrubiona kwota,
	// ciemna półprzezroczysta kapsuła z delikatną obwódką.
	const labelStyle = {
		fontFamily: 'proxima-nova',
		fontWeight: '600',
		fontSize: UI_BASE_FONT_SIZE * 0.8,
		fill: 0x9aa2ad,
		letterSpacing: 1,
	} as const;

	const valueStyle = {
		fontFamily: 'proxima-nova',
		fontWeight: '800',
		fontSize: UI_BASE_FONT_SIZE * 1.05,
		fill: WHITE,
	} as const;

	const capsuleStyle = {
		backgroundColor: 0x080a0e,
		backgroundAlpha: 0.62,
		borderWidth: 2,
		borderColor: 0xffffff,
		borderAlpha: 0.22,
	} as const;
</script>

{#if props.stacked}
	{#if props.tiled}
		<UiSprite
			y={-20}
			anchor={{ x: 0.5, y: 0 }}
			key="base_ticker"
			width={UI_BASE_FONT_SIZE * 3 * (326 / 73)}
			height={UI_BASE_FONT_SIZE * 3}
			borderRadius={35}
			{...capsuleStyle}
		/>
	{/if}
	<Text anchor={{ x: 0.5, y: 0 }} text={props.label} style={labelStyle} />
	<Text anchor={{ x: 0.5, y: 0 }} text={props.value} style={valueStyle} y={UI_BASE_FONT_SIZE} />
{:else}
	{#if props.tiled}
		<UiSprite
			x={-90}
			anchor={{ x: 0, y: 0.5 }}
			key="base_ticker"
			width={UI_BASE_FONT_SIZE * 3 * (326 / 73)}
			height={UI_BASE_FONT_SIZE * 3}
			borderRadius={35}
			{...capsuleStyle}
		/>
	{/if}
	<Text anchor={{ x: 0, y: 0.5 }} text={props.label} style={labelStyle} />
	<Text
		anchor={{ x: 1, y: 0.5 }}
		text={props.value}
		style={valueStyle}
		x={UI_BASE_FONT_SIZE * 10}
	/>
{/if}
