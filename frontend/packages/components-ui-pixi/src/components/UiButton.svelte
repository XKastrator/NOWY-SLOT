<script lang="ts">
	import { Container, Circle } from 'pixi-svelte';
	import { Button, type ButtonProps } from 'components-pixi';

	import UiIcon, { type IconName } from './UiIcon.svelte';
	import type { ButtonIcon } from '../types';
	import type { Snippet } from 'svelte';

	type Props = Omit<ButtonProps, 'children'> & {
		icon: ButtonIcon;
		sizes: { width: number; height: number };
		active?: boolean;
		children?: Snippet;
		variant?: 'dark' | 'light';
	};

	const {
		icon,
		active,
		variant = 'dark',
		children: childrenFromParent,
		...buttonProps
	}: Props = $props();

	// Okragly przycisk-ikona w stylu referencyjnego paska: ciemne polprzezroczyste
	// kolo, cienka obwodka (zlota na hover/active), wektorowa ikona w srodku.
	const diameter = $derived(Math.min(buttonProps.sizes.width, buttonProps.sizes.height));
</script>

<Button {...buttonProps}>
	{#snippet children({ center, hovered, pressed })}
		<Container {...center}>
			<Circle
				anchor={0.5}
				{diameter}
				backgroundColor={variant === 'light' ? 0xf5c542 : 0x080a0e}
				backgroundAlpha={variant === 'light' ? 0.9 : 0.62}
				borderColor={active || hovered ? 0xf5c542 : 0xffffff}
				borderWidth={active ? 4 : 2}
				borderAlpha={active || hovered ? 1 : 0.85}
				{...buttonProps.disabled
					? { backgroundColor: 0x3a3f46, backgroundAlpha: 0.5, borderAlpha: 0.25 }
					: {}}
			/>

			<UiIcon
				name={icon as IconName}
				size={diameter * 0.5}
				color={variant === 'light' ? 0x101418 : buttonProps.disabled ? 0x777d85 : hovered ? 0xf5c542 : 0xffffff}
				width={5}
			/>

			{@render childrenFromParent?.()}
		</Container>
	{/snippet}
</Button>
