import type { BetModeMeta } from 'state-shared';

const CDN = 'https://test-fart-cdn-bucket.s3.ap-southeast-2.amazonaws.com';

// Klucze i pola `mode` MUSZĄ być identyczne z nazwami trybów w matematyce
// (math index.json: base / bonushunt / bonus / superbonus) — RGS waliduje
// mode i koszt zakładu względem opublikowanych plików math.
export const betModeMeta: BetModeMeta = {
	base: {
		mode: 'base',
		costMultiplier: 1.0,
		type: 'default',
		parent: '',
		children: 'bonushunt',
		assets: {
			icon: `${CDN}/1_9_97/betModes/icon_bonusbuy.webp`,
			dialogImage: `${CDN}/1_9_97/betModes/bonus_image.webp`,
			dialogVolatility: `${CDN}/1_9_97/betModes/volatility/volatility_03.webp`,
			volatility: `${CDN}/1_9_97/betModes/volatility/volatility_white_03.webp`,
			button: `${CDN}/1_8_97/betModes/button_buy.webp`,
		},
		text: {
			title: 'BASE GAME',
			dialog: 'Standard spin.',
			button: 'SPIN',
			tickerIdle: 'PLACE YOUR BET',
			tickerSpin: 'GOOD LUCK',
		},
	},
	bonushunt: {
		mode: 'bonushunt',
		costMultiplier: 1.25,
		type: 'activate',
		parent: 'base',
		children: '',
		assets: {
			icon: `${CDN}/1_9_97/betModes/icon_bonusbuy.webp`,
			dialogImage: `${CDN}/1_9_97/betModes/bonus_image.webp`,
			dialogVolatility: `${CDN}/1_9_97/betModes/volatility/volatility_03.webp`,
			volatility: `${CDN}/1_9_97/betModes/volatility/volatility_white_03.webp`,
			button: `${CDN}/1_8_97/betModes/button_buy.webp`,
		},
		text: {
			title: 'NEUTRON PROBE',
			dialog:
				'Neutron Probe (ante bet): bet cost is increased to 1.25x and the chance of triggering the BONUS is doubled. Bonus Buy is disabled while active.',
			description: 'Doubled bonus chance for 1.25x bet cost.',
			betAmountLabel: 'Total bet',
			button: 'ACTIVATE',
			tickerIdle: 'NEUTRON PROBE ACTIVE',
			tickerSpin: 'GOOD LUCK',
		},
	},
	bonus: {
		mode: 'bonus',
		costMultiplier: 100,
		type: 'buy',
		parent: '',
		children: '',
		assets: {
			icon: `${CDN}/1_9_97/betModes/icon_bonusbuy.webp`,
			dialogImage: `${CDN}/1_9_97/betModes/bonus_image.webp`,
			dialogVolatility: `${CDN}/1_9_97/betModes/volatility/volatility_04.webp`,
			volatility: `${CDN}/1_9_97/betModes/volatility/volatility_white_04.webp`,
			button: `${CDN}/1_8_97/betModes/button_buy.webp`,
		},
		text: {
			title: 'BONUS — MELTDOWN',
			dialog:
				'Buy the MELTDOWN BONUS for 100x the bet amount: 10 free spins with the Reactor Temperature — fuel rod multipliers accumulate into a global multiplier that never resets between spins.',
			description: '10 free spins with accumulating Reactor Temperature multiplier.',
			button: 'BUY',
			tickerIdle: 'PLACE YOUR BET',
			tickerSpin: 'MELTDOWN INITIATED',
		},
	},
	superbonus: {
		mode: 'superbonus',
		costMultiplier: 500,
		type: 'buy',
		parent: '',
		children: '',
		assets: {
			icon: `${CDN}/1_9_97/betModes/icon_superbonusbuy.webp`,
			dialogImage: `${CDN}/1_9_97/betModes/superbonus_image.webp`,
			dialogVolatility: `${CDN}/1_9_97/betModes/volatility/volatility_05.webp`,
			volatility: `${CDN}/1_9_97/betModes/volatility/volatility_white_05.webp`,
			button: `${CDN}/1_8_97/betModes/button_buy.webp`,
		},
		text: {
			title: 'SUPER BONUS — FULL MELTDOWN',
			dialog:
				'Buy the FULL MELTDOWN for 500x the bet amount: 10 free spins with Reactor Temperature, a guaranteed fuel rod on every spin (values up to x1000) and the MUTATION — each spin one low symbol type mutates into a random high symbol.',
			description: 'Guaranteed fuel rods up to x1000 + MUTATION on every spin.',
			button: 'BUY',
			tickerIdle: 'PLACE YOUR BET',
			tickerSpin: 'FULL MELTDOWN INITIATED',
		},
	},
};
