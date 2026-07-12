<script lang="ts">
	import { Container, Circle } from 'pixi-svelte';
	import { Button, type ButtonProps } from 'components-pixi';
	import { stateModal, stateBet, stateBetDerived } from 'state-shared';

	import UiIcon from './UiIcon.svelte';
	import { UI_BASE_SIZE } from '../constants';
	import { getContext } from '../context';

	const props: Partial<Omit<ButtonProps, 'children'>> = $props();
	const { stateXstateDerived, eventEmitter } = getContext();
	const sizes = { width: UI_BASE_SIZE, height: UI_BASE_SIZE };
	const disabled = $derived(!stateXstateDerived.isIdle());
	const active = $derived(stateBetDerived.activeBetMode()?.type === 'activate');

	const openModal = () => (stateModal.modal = { name: 'buyBonus' });
	const disableActiveBetMode = () => (stateBet.activeBetModeKey = 'BASE');
	const onpress = () => {
		eventEmitter.broadcast({ type: 'soundPressGeneral' });

		if (active) {
			disableActiveBetMode();
		} else {
			openModal();
		}
	};

</script>

<Button {...props} {sizes} {disabled} {onpress}>
	{#snippet children({ center, hovered, pressed })}
		<Container {...center}>
			<Circle
				anchor={0.5}
				diameter={sizes.width}
				backgroundColor={0x080a0e}
				backgroundAlpha={0.62}
				borderColor={active || hovered ? 0xf5c542 : 0xffffff}
				borderWidth={active ? 4 : 2}
				borderAlpha={active || hovered ? 1 : 0.85}
				{...disabled ? { backgroundColor: 0x3a3f46, backgroundAlpha: 0.5, borderAlpha: 0.25 } : {}}
			/>
			<UiIcon
				name="buyBonus"
				size={sizes.width * 0.5}
				color={disabled ? 0x777d85 : active || hovered ? 0xf5c542 : 0xffffff}
				width={5}
			/>
		</Container>
	{/snippet}
</Button>
