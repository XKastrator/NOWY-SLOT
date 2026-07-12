<script lang="ts">
	import { Container, Circle } from 'pixi-svelte';
	import { Button, type ButtonProps } from 'components-pixi';
	import { OnHotkey } from 'components-shared';
	import { stateBetDerived } from 'state-shared';

	import UiIcon from './UiIcon.svelte';
	import ButtonBetProvider from './ButtonBetProvider.svelte';
	import { UI_BASE_SIZE } from '../constants';

	const props: Partial<Omit<ButtonProps, 'children'>> = $props();
	const disabled = $derived(!stateBetDerived.isBetCostAvailable());
	// Duzy centralny przycisk spin (wiekszy niz pozostale okragle przyciski)
	const diameter = UI_BASE_SIZE * 1.35;
	const sizes = { width: diameter, height: diameter };
</script>

<ButtonBetProvider>
	{#snippet children({ key, onpress })}
		<OnHotkey hotkey="Space" {disabled} {onpress} />
		<Button {...props} {sizes} {onpress} {disabled}>
			{#snippet children({ center, hovered })}
				{@const isStop = !['spin_default', 'spin_disabled'].includes(key)}
				<Container {...center}>
					<Circle
						anchor={0.5}
						{diameter}
						backgroundColor={0x04060a}
						backgroundAlpha={0.82}
						borderColor={disabled ? 0x777d85 : hovered ? 0xf5c542 : 0xffffff}
						borderWidth={5}
						borderAlpha={1}
					/>
					<UiIcon
						name={isStop ? 'stop' : 'spin'}
						size={diameter * 0.52}
						color={disabled ? 0x777d85 : hovered ? 0xf5c542 : 0xffffff}
						width={7}
					/>
				</Container>
			{/snippet}
		</Button>
	{/snippet}
</ButtonBetProvider>
