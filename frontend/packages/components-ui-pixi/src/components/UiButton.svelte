<script lang="ts">
	import { Text } from 'pixi-svelte';
	import { Button, type ButtonProps } from 'components-pixi';

	import UiSprite from './UiSprite.svelte';
	import type { ButtonIcon } from '../types';
	import type { Snippet } from 'svelte';
	import { i18nDerived } from '../i18n/i18nDerived';
	import { UI_BASE_FONT_SIZE } from '../constants';

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
</script>

<Button {...buttonProps}>
	{#snippet children({ center, hovered, pressed })}
		<UiSprite
			{...center}
			anchor={0.5}
			width={buttonProps.sizes.width}
			height={buttonProps.sizes.height}
			backgroundColor={variant === 'dark' ? 0x06080c : 0xffffff}
			backgroundAlpha={variant === 'dark' ? 0.62 : 1}
			borderWidth={2}
			borderColor={hovered ? 0xf5c542 : 0xffffff}
			borderAlpha={hovered ? 1 : 0.9}
			{...buttonProps.disabled
				? {
						backgroundColor: 0x3a3f46,
						backgroundAlpha: 0.5,
						borderAlpha: 0.25,
					}
				: {}}
			{...active
				? {
						borderWidth: 6,
						borderColor: 0xf5c542,
						borderAlpha: 1,
					}
				: {}}
		/>

		<Text
			{...center}
			anchor={0.5}
			text={i18nDerived[icon]()}
			style={{
				align: 'center',
				wordWrap: true,
				wordWrapWidth: 200,
				fontFamily: 'proxima-nova',
				fontWeight: '600',
				fontSize: UI_BASE_FONT_SIZE * 0.9,
				fill: variant === 'dark' ? 0xffffff : 0x000000,
			}}
		/>

		{@render childrenFromParent?.()}
	{/snippet}
</Button>
