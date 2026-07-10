export default [
	{
		"id": 4,
		"payoutMultiplier": 800,
		"events": [
			{
				"index": 0,
				"type": "reveal",
				"board": [
					[
						{
							"name": "H4"
						},
						{
							"name": "H3"
						},
						{
							"name": "L5"
						},
						{
							"name": "L5"
						},
						{
							"name": "L5"
						},
						{
							"name": "H2"
						},
						{
							"name": "L2"
						}
					],
					[
						{
							"name": "L1"
						},
						{
							"name": "L5"
						},
						{
							"name": "L1"
						},
						{
							"name": "L1"
						},
						{
							"name": "L4"
						},
						{
							"name": "L5"
						},
						{
							"name": "L2"
						}
					],
					[
						{
							"name": "L2"
						},
						{
							"name": "L2"
						},
						{
							"name": "H3"
						},
						{
							"name": "L4"
						},
						{
							"name": "H3"
						},
						{
							"name": "H3"
						},
						{
							"name": "L5"
						}
					],
					[
						{
							"name": "L3"
						},
						{
							"name": "L3"
						},
						{
							"name": "M",
							"multiplier": 8
						},
						{
							"name": "H2"
						},
						{
							"name": "L2"
						},
						{
							"name": "L4"
						},
						{
							"name": "L2"
						}
					],
					[
						{
							"name": "L1"
						},
						{
							"name": "L5"
						},
						{
							"name": "L2"
						},
						{
							"name": "H2"
						},
						{
							"name": "L2"
						},
						{
							"name": "L2"
						},
						{
							"name": "L3"
						}
					],
					[
						{
							"name": "L2"
						},
						{
							"name": "L5"
						},
						{
							"name": "H3"
						},
						{
							"name": "L2"
						},
						{
							"name": "L2"
						},
						{
							"name": "L2"
						},
						{
							"name": "L4"
						}
					]
				],
				"paddingPositions": [
					183,
					271,
					14,
					238,
					127,
					26
				],
				"gameType": "basegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 1,
				"type": "winInfo",
				"totalWin": 80,
				"wins": [
					{
						"symbol": "L2",
						"win": 80,
						"positions": [
							{
								"reel": 2,
								"row": 1
							},
							{
								"reel": 3,
								"row": 4
							},
							{
								"reel": 4,
								"row": 2
							},
							{
								"reel": 4,
								"row": 4
							},
							{
								"reel": 4,
								"row": 5
							},
							{
								"reel": 5,
								"row": 3
							},
							{
								"reel": 5,
								"row": 4
							},
							{
								"reel": 5,
								"row": 5
							}
						],
						"meta": {
							"globalMult": 1,
							"clusterMult": 1,
							"winWithoutMult": 80,
							"overlay": {
								"reel": 3,
								"row": 4
							}
						}
					}
				]
			},
			{
				"index": 2,
				"type": "updateTumbleWin",
				"amount": 80
			},
			{
				"index": 3,
				"type": "tumbleBoard",
				"newSymbols": [
					[],
					[],
					[
						{
							"name": "L5"
						}
					],
					[
						{
							"name": "L5"
						}
					],
					[
						{
							"name": "L1"
						},
						{
							"name": "L5"
						},
						{
							"name": "L2"
						}
					],
					[
						{
							"name": "L5"
						},
						{
							"name": "L5"
						},
						{
							"name": "L1"
						}
					]
				],
				"explodingSymbols": [
					{
						"reel": 2,
						"row": 1
					},
					{
						"reel": 3,
						"row": 4
					},
					{
						"reel": 4,
						"row": 2
					},
					{
						"reel": 4,
						"row": 4
					},
					{
						"reel": 4,
						"row": 5
					},
					{
						"reel": 5,
						"row": 3
					},
					{
						"reel": 5,
						"row": 4
					},
					{
						"reel": 5,
						"row": 5
					}
				]
			},
			{
				"index": 4,
				"type": "winInfo",
				"totalWin": 20,
				"wins": [
					{
						"symbol": "L5",
						"win": 20,
						"positions": [
							{
								"reel": 0,
								"row": 2
							},
							{
								"reel": 0,
								"row": 3
							},
							{
								"reel": 0,
								"row": 4
							},
							{
								"reel": 1,
								"row": 1
							},
							{
								"reel": 1,
								"row": 5
							},
							{
								"reel": 4,
								"row": 1
							},
							{
								"reel": 4,
								"row": 4
							},
							{
								"reel": 5,
								"row": 1
							},
							{
								"reel": 5,
								"row": 4
							}
						],
						"meta": {
							"globalMult": 1,
							"clusterMult": 1,
							"winWithoutMult": 20,
							"overlay": {
								"reel": 4,
								"row": 4
							}
						}
					}
				]
			},
			{
				"index": 5,
				"type": "updateTumbleWin",
				"amount": 100
			},
			{
				"index": 6,
				"type": "tumbleBoard",
				"newSymbols": [
					[
						{
							"name": "H2"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "H2"
						}
					],
					[
						{
							"name": "L1"
						},
						{
							"name": "H3"
						}
					],
					[],
					[],
					[
						{
							"name": "L1"
						},
						{
							"name": "L1"
						}
					],
					[
						{
							"name": "L3"
						},
						{
							"name": "H4"
						}
					]
				],
				"explodingSymbols": [
					{
						"reel": 0,
						"row": 2
					},
					{
						"reel": 0,
						"row": 3
					},
					{
						"reel": 0,
						"row": 4
					},
					{
						"reel": 1,
						"row": 1
					},
					{
						"reel": 1,
						"row": 5
					},
					{
						"reel": 4,
						"row": 1
					},
					{
						"reel": 4,
						"row": 4
					},
					{
						"reel": 5,
						"row": 1
					},
					{
						"reel": 5,
						"row": 4
					}
				]
			},
			{
				"index": 7,
				"type": "boardMultiplierInfo",
				"multInfo": {
					"positions": [
						{
							"reel": 3,
							"row": 3,
							"multiplier": 8
						}
					]
				},
				"winInfo": {
					"tumbleWin": 100,
					"boardMult": 8,
					"appliedMult": 8,
					"totalWin": 800
				}
			},
			{
				"index": 8,
				"type": "updateTumbleWin",
				"amount": 800
			},
			{
				"index": 9,
				"type": "setWin",
				"amount": 800,
				"winLevel": 5
			},
			{
				"index": 10,
				"type": "setTotalWin",
				"amount": 800
			},
			{
				"index": 11,
				"type": "finalWin",
				"amount": 800
			}
		],
		"criteria": "basegame",
		"baseGameWins": 8.0,
		"freeGameWins": 0.0
	},
	{
		"id": 0,
		"payoutMultiplier": 0,
		"events": [
			{
				"index": 0,
				"type": "reveal",
				"board": [
					[
						{
							"name": "L4"
						},
						{
							"name": "L5"
						},
						{
							"name": "L4"
						},
						{
							"name": "L5"
						},
						{
							"name": "L1"
						},
						{
							"name": "L3"
						},
						{
							"name": "L2"
						}
					],
					[
						{
							"name": "L4"
						},
						{
							"name": "H4"
						},
						{
							"name": "H4"
						},
						{
							"name": "L2"
						},
						{
							"name": "H3"
						},
						{
							"name": "L5"
						},
						{
							"name": "L4"
						}
					],
					[
						{
							"name": "L4"
						},
						{
							"name": "L4"
						},
						{
							"name": "L5"
						},
						{
							"name": "L4"
						},
						{
							"name": "L3"
						},
						{
							"name": "H4"
						},
						{
							"name": "L4"
						}
					],
					[
						{
							"name": "H4"
						},
						{
							"name": "H3"
						},
						{
							"name": "L2"
						},
						{
							"name": "L2"
						},
						{
							"name": "H3"
						},
						{
							"name": "L5"
						},
						{
							"name": "L4"
						}
					],
					[
						{
							"name": "L1"
						},
						{
							"name": "H2"
						},
						{
							"name": "L1"
						},
						{
							"name": "H3"
						},
						{
							"name": "L5"
						},
						{
							"name": "L1"
						},
						{
							"name": "M",
							"multiplier": 4
						}
					],
					[
						{
							"name": "H3"
						},
						{
							"name": "L4"
						},
						{
							"name": "L4"
						},
						{
							"name": "H1"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L5"
						},
						{
							"name": "L3"
						}
					]
				],
				"paddingPositions": [
					32,
					130,
					60,
					253,
					230,
					241
				],
				"gameType": "basegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 1,
				"type": "setTotalWin",
				"amount": 0
			},
			{
				"index": 2,
				"type": "finalWin",
				"amount": 0
			}
		],
		"criteria": "basegame",
		"baseGameWins": 0.0,
		"freeGameWins": 0.0
	},
	{
		"id": 25,
		"payoutMultiplier": 7250,
		"events": [
			{
				"index": 0,
				"type": "reveal",
				"board": [
					[
						{
							"name": "L4"
						},
						{
							"name": "H3"
						},
						{
							"name": "L3"
						},
						{
							"name": "L3"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L4"
						},
						{
							"name": "L2"
						}
					],
					[
						{
							"name": "L5"
						},
						{
							"name": "L2"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L1"
						},
						{
							"name": "L4"
						},
						{
							"name": "L3"
						},
						{
							"name": "L4"
						}
					],
					[
						{
							"name": "L2"
						},
						{
							"name": "L2"
						},
						{
							"name": "H3"
						},
						{
							"name": "L4"
						},
						{
							"name": "H3"
						},
						{
							"name": "H3"
						},
						{
							"name": "L5"
						}
					],
					[
						{
							"name": "H4"
						},
						{
							"name": "L3"
						},
						{
							"name": "H3"
						},
						{
							"name": "L1"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "H4"
						},
						{
							"name": "H3"
						}
					],
					[
						{
							"name": "H4"
						},
						{
							"name": "H3"
						},
						{
							"name": "H4"
						},
						{
							"name": "L5"
						},
						{
							"name": "H2"
						},
						{
							"name": "L2"
						},
						{
							"name": "L1"
						}
					],
					[
						{
							"name": "L4"
						},
						{
							"name": "H1"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L5"
						},
						{
							"name": "L3"
						},
						{
							"name": "L2"
						},
						{
							"name": "L5"
						}
					]
				],
				"paddingPositions": [
					163,
					31,
					14,
					78,
					113,
					243
				],
				"gameType": "basegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					1,
					2
				]
			},
			{
				"index": 1,
				"type": "scatterPayInfo",
				"win": 300,
				"positions": [
					{
						"reel": 0,
						"row": 4
					},
					{
						"reel": 1,
						"row": 2
					},
					{
						"reel": 3,
						"row": 4
					},
					{
						"reel": 5,
						"row": 2
					}
				]
			},
			{
				"index": 2,
				"type": "setWin",
				"amount": 300,
				"winLevel": 4
			},
			{
				"index": 3,
				"type": "setTotalWin",
				"amount": 300
			},
			{
				"index": 4,
				"type": "freeSpinTrigger",
				"totalFs": 10,
				"positions": [
					{
						"reel": 0,
						"row": 4
					},
					{
						"reel": 1,
						"row": 2
					},
					{
						"reel": 3,
						"row": 4
					},
					{
						"reel": 5,
						"row": 2
					}
				]
			},
			{
				"index": 5,
				"type": "updateFreeSpin",
				"amount": 0,
				"total": 10
			},
			{
				"index": 6,
				"type": "reveal",
				"board": [
					[
						{
							"name": "L1"
						},
						{
							"name": "H4"
						},
						{
							"name": "H4"
						},
						{
							"name": "L1"
						},
						{
							"name": "L2"
						},
						{
							"name": "L5"
						},
						{
							"name": "H1"
						}
					],
					[
						{
							"name": "L3"
						},
						{
							"name": "H3"
						},
						{
							"name": "L2"
						},
						{
							"name": "L2"
						},
						{
							"name": "H4"
						},
						{
							"name": "L2"
						},
						{
							"name": "L4"
						}
					],
					[
						{
							"name": "L4"
						},
						{
							"name": "L2"
						},
						{
							"name": "L2"
						},
						{
							"name": "H1"
						},
						{
							"name": "L3"
						},
						{
							"name": "L4"
						},
						{
							"name": "H4"
						}
					],
					[
						{
							"name": "L2"
						},
						{
							"name": "H1"
						},
						{
							"name": "L1"
						},
						{
							"name": "L5"
						},
						{
							"name": "L4"
						},
						{
							"name": "H4"
						},
						{
							"name": "H3"
						}
					],
					[
						{
							"name": "L1"
						},
						{
							"name": "L3"
						},
						{
							"name": "L3"
						},
						{
							"name": "L5"
						},
						{
							"name": "L4"
						},
						{
							"name": "L2"
						},
						{
							"name": "L3"
						}
					],
					[
						{
							"name": "L1"
						},
						{
							"name": "L2"
						},
						{
							"name": "H2"
						},
						{
							"name": "H4"
						},
						{
							"name": "L2"
						},
						{
							"name": "L5"
						},
						{
							"name": "L5"
						}
					]
				],
				"paddingPositions": [
					110,
					247,
					199,
					186,
					124,
					299
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 7,
				"type": "winInfo",
				"totalWin": 80,
				"wins": [
					{
						"symbol": "L2",
						"win": 80,
						"positions": [
							{
								"reel": 0,
								"row": 4
							},
							{
								"reel": 1,
								"row": 2
							},
							{
								"reel": 1,
								"row": 3
							},
							{
								"reel": 1,
								"row": 5
							},
							{
								"reel": 2,
								"row": 1
							},
							{
								"reel": 2,
								"row": 2
							},
							{
								"reel": 4,
								"row": 5
							},
							{
								"reel": 5,
								"row": 1
							},
							{
								"reel": 5,
								"row": 4
							}
						],
						"meta": {
							"globalMult": 1,
							"clusterMult": 1,
							"winWithoutMult": 80,
							"overlay": {
								"reel": 2,
								"row": 2
							}
						}
					}
				]
			},
			{
				"index": 8,
				"type": "updateTumbleWin",
				"amount": 80
			},
			{
				"index": 9,
				"type": "tumbleBoard",
				"newSymbols": [
					[
						{
							"name": "M",
							"multiplier": 2
						}
					],
					[
						{
							"name": "L1"
						},
						{
							"name": "L2"
						},
						{
							"name": "L4"
						}
					],
					[
						{
							"name": "L2"
						},
						{
							"name": "L1"
						}
					],
					[],
					[
						{
							"name": "L3"
						}
					],
					[
						{
							"name": "H2"
						},
						{
							"name": "H2"
						}
					]
				],
				"explodingSymbols": [
					{
						"reel": 0,
						"row": 4
					},
					{
						"reel": 1,
						"row": 2
					},
					{
						"reel": 1,
						"row": 3
					},
					{
						"reel": 1,
						"row": 5
					},
					{
						"reel": 2,
						"row": 1
					},
					{
						"reel": 2,
						"row": 2
					},
					{
						"reel": 4,
						"row": 5
					},
					{
						"reel": 5,
						"row": 1
					},
					{
						"reel": 5,
						"row": 4
					}
				]
			},
			{
				"index": 10,
				"type": "setWin",
				"amount": 80,
				"winLevel": 2
			},
			{
				"index": 11,
				"type": "setTotalWin",
				"amount": 380
			},
			{
				"index": 12,
				"type": "updateFreeSpin",
				"amount": 1,
				"total": 10
			},
			{
				"index": 13,
				"type": "reveal",
				"board": [
					[
						{
							"name": "L4"
						},
						{
							"name": "L5"
						},
						{
							"name": "L3"
						},
						{
							"name": "L3"
						},
						{
							"name": "L3"
						},
						{
							"name": "L5"
						},
						{
							"name": "L3"
						}
					],
					[
						{
							"name": "H4"
						},
						{
							"name": "L4"
						},
						{
							"name": "L3"
						},
						{
							"name": "L3"
						},
						{
							"name": "L2"
						},
						{
							"name": "L4"
						},
						{
							"name": "H4"
						}
					],
					[
						{
							"name": "H2"
						},
						{
							"name": "L5"
						},
						{
							"name": "L1"
						},
						{
							"name": "L4"
						},
						{
							"name": "H3"
						},
						{
							"name": "L1"
						},
						{
							"name": "H1"
						}
					],
					[
						{
							"name": "H4"
						},
						{
							"name": "L2"
						},
						{
							"name": "L5"
						},
						{
							"name": "H3"
						},
						{
							"name": "L3"
						},
						{
							"name": "L4"
						},
						{
							"name": "L2"
						}
					],
					[
						{
							"name": "L4"
						},
						{
							"name": "L2"
						},
						{
							"name": "L5"
						},
						{
							"name": "L1"
						},
						{
							"name": "L5"
						},
						{
							"name": "L5"
						},
						{
							"name": "L2"
						}
					],
					[
						{
							"name": "L4"
						},
						{
							"name": "H1"
						},
						{
							"name": "L2"
						},
						{
							"name": "L3"
						},
						{
							"name": "H4"
						},
						{
							"name": "M",
							"multiplier": 5
						},
						{
							"name": "L4"
						}
					]
				],
				"paddingPositions": [
					150,
					278,
					274,
					63,
					260,
					22
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 14,
				"type": "setTotalWin",
				"amount": 380
			},
			{
				"index": 15,
				"type": "updateFreeSpin",
				"amount": 2,
				"total": 10
			},
			{
				"index": 16,
				"type": "reveal",
				"board": [
					[
						{
							"name": "L3"
						},
						{
							"name": "L4"
						},
						{
							"name": "L3"
						},
						{
							"name": "L1"
						},
						{
							"name": "L3"
						},
						{
							"name": "L4"
						},
						{
							"name": "H1"
						}
					],
					[
						{
							"name": "L2"
						},
						{
							"name": "L2"
						},
						{
							"name": "L3"
						},
						{
							"name": "L3"
						},
						{
							"name": "L4"
						},
						{
							"name": "L4"
						},
						{
							"name": "H3"
						}
					],
					[
						{
							"name": "L3"
						},
						{
							"name": "H3"
						},
						{
							"name": "L2"
						},
						{
							"name": "M",
							"multiplier": 2
						},
						{
							"name": "L4"
						},
						{
							"name": "L2"
						},
						{
							"name": "H4"
						}
					],
					[
						{
							"name": "H3"
						},
						{
							"name": "L5"
						},
						{
							"name": "M",
							"multiplier": 15
						},
						{
							"name": "H4"
						},
						{
							"name": "L1"
						},
						{
							"name": "L3"
						},
						{
							"name": "L1"
						}
					],
					[
						{
							"name": "L3"
						},
						{
							"name": "L5"
						},
						{
							"name": "H4"
						},
						{
							"name": "L5"
						},
						{
							"name": "L2"
						},
						{
							"name": "L4"
						},
						{
							"name": "L3"
						}
					],
					[
						{
							"name": "L3"
						},
						{
							"name": "L4"
						},
						{
							"name": "L5"
						},
						{
							"name": "L4"
						},
						{
							"name": "L2"
						},
						{
							"name": "L1"
						},
						{
							"name": "L5"
						}
					]
				],
				"paddingPositions": [
					287,
					160,
					163,
					216,
					221,
					102
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 17,
				"type": "winInfo",
				"totalWin": 40,
				"wins": [
					{
						"symbol": "L4",
						"win": 40,
						"positions": [
							{
								"reel": 0,
								"row": 1
							},
							{
								"reel": 0,
								"row": 5
							},
							{
								"reel": 1,
								"row": 4
							},
							{
								"reel": 1,
								"row": 5
							},
							{
								"reel": 2,
								"row": 4
							},
							{
								"reel": 4,
								"row": 5
							},
							{
								"reel": 5,
								"row": 1
							},
							{
								"reel": 5,
								"row": 3
							}
						],
						"meta": {
							"globalMult": 1,
							"clusterMult": 1,
							"winWithoutMult": 40,
							"overlay": {
								"reel": 2,
								"row": 4
							}
						}
					}
				]
			},
			{
				"index": 18,
				"type": "updateTumbleWin",
				"amount": 40
			},
			{
				"index": 19,
				"type": "tumbleBoard",
				"newSymbols": [
					[
						{
							"name": "L4"
						},
						{
							"name": "L3"
						}
					],
					[
						{
							"name": "L5"
						},
						{
							"name": "L3"
						}
					],
					[
						{
							"name": "L3"
						}
					],
					[],
					[
						{
							"name": "L4"
						}
					],
					[
						{
							"name": "L3"
						},
						{
							"name": "L1"
						}
					]
				],
				"explodingSymbols": [
					{
						"reel": 0,
						"row": 1
					},
					{
						"reel": 0,
						"row": 5
					},
					{
						"reel": 1,
						"row": 4
					},
					{
						"reel": 1,
						"row": 5
					},
					{
						"reel": 2,
						"row": 4
					},
					{
						"reel": 4,
						"row": 5
					},
					{
						"reel": 5,
						"row": 1
					},
					{
						"reel": 5,
						"row": 3
					}
				]
			},
			{
				"index": 20,
				"type": "winInfo",
				"totalWin": 150,
				"wins": [
					{
						"symbol": "L3",
						"win": 150,
						"positions": [
							{
								"reel": 0,
								"row": 1
							},
							{
								"reel": 0,
								"row": 2
							},
							{
								"reel": 0,
								"row": 3
							},
							{
								"reel": 0,
								"row": 5
							},
							{
								"reel": 1,
								"row": 1
							},
							{
								"reel": 1,
								"row": 4
							},
							{
								"reel": 1,
								"row": 5
							},
							{
								"reel": 2,
								"row": 1
							},
							{
								"reel": 3,
								"row": 5
							},
							{
								"reel": 4,
								"row": 1
							},
							{
								"reel": 5,
								"row": 2
							}
						],
						"meta": {
							"globalMult": 1,
							"clusterMult": 1,
							"winWithoutMult": 150,
							"overlay": {
								"reel": 3,
								"row": 5
							}
						}
					}
				]
			},
			{
				"index": 21,
				"type": "updateTumbleWin",
				"amount": 190
			},
			{
				"index": 22,
				"type": "tumbleBoard",
				"newSymbols": [
					[
						{
							"name": "L3"
						},
						{
							"name": "H4"
						},
						{
							"name": "H2"
						},
						{
							"name": "H4"
						}
					],
					[
						{
							"name": "H3"
						},
						{
							"name": "L2"
						},
						{
							"name": "H1"
						}
					],
					[
						{
							"name": "L1"
						}
					],
					[
						{
							"name": "H2"
						}
					],
					[
						{
							"name": "M",
							"multiplier": 2
						}
					],
					[
						{
							"name": "H1"
						}
					]
				],
				"explodingSymbols": [
					{
						"reel": 0,
						"row": 1
					},
					{
						"reel": 0,
						"row": 2
					},
					{
						"reel": 0,
						"row": 3
					},
					{
						"reel": 0,
						"row": 5
					},
					{
						"reel": 1,
						"row": 1
					},
					{
						"reel": 1,
						"row": 4
					},
					{
						"reel": 1,
						"row": 5
					},
					{
						"reel": 2,
						"row": 1
					},
					{
						"reel": 3,
						"row": 5
					},
					{
						"reel": 4,
						"row": 1
					},
					{
						"reel": 5,
						"row": 2
					}
				]
			},
			{
				"index": 23,
				"type": "temperatureUpdate",
				"temperature": 17
			},
			{
				"index": 24,
				"type": "boardMultiplierInfo",
				"multInfo": {
					"positions": [
						{
							"reel": 2,
							"row": 4,
							"multiplier": 2
						},
						{
							"reel": 3,
							"row": 3,
							"multiplier": 15
						}
					]
				},
				"winInfo": {
					"tumbleWin": 190,
					"boardMult": 17,
					"appliedMult": 17,
					"totalWin": 3230
				}
			},
			{
				"index": 25,
				"type": "updateTumbleWin",
				"amount": 3230
			},
			{
				"index": 26,
				"type": "setWin",
				"amount": 3230,
				"winLevel": 7
			},
			{
				"index": 27,
				"type": "setTotalWin",
				"amount": 3610
			},
			{
				"index": 28,
				"type": "updateFreeSpin",
				"amount": 3,
				"total": 10
			},
			{
				"index": 29,
				"type": "reveal",
				"board": [
					[
						{
							"name": "L1"
						},
						{
							"name": "L3"
						},
						{
							"name": "L3"
						},
						{
							"name": "H3"
						},
						{
							"name": "H1"
						},
						{
							"name": "L3"
						},
						{
							"name": "H3"
						}
					],
					[
						{
							"name": "L4"
						},
						{
							"name": "H3"
						},
						{
							"name": "L4"
						},
						{
							"name": "L4"
						},
						{
							"name": "H4"
						},
						{
							"name": "L1"
						},
						{
							"name": "L4"
						}
					],
					[
						{
							"name": "L5"
						},
						{
							"name": "H4"
						},
						{
							"name": "L5"
						},
						{
							"name": "L2"
						},
						{
							"name": "L4"
						},
						{
							"name": "L2"
						},
						{
							"name": "L4"
						}
					],
					[
						{
							"name": "L3"
						},
						{
							"name": "L1"
						},
						{
							"name": "H3"
						},
						{
							"name": "L2"
						},
						{
							"name": "L3"
						},
						{
							"name": "L2"
						},
						{
							"name": "L5"
						}
					],
					[
						{
							"name": "L2"
						},
						{
							"name": "M",
							"multiplier": 2
						},
						{
							"name": "H1"
						},
						{
							"name": "L5"
						},
						{
							"name": "L2"
						},
						{
							"name": "L1"
						},
						{
							"name": "L4"
						}
					],
					[
						{
							"name": "H3"
						},
						{
							"name": "L3"
						},
						{
							"name": "L5"
						},
						{
							"name": "M",
							"multiplier": 4
						},
						{
							"name": "L5"
						},
						{
							"name": "L4"
						},
						{
							"name": "H3"
						}
					]
				],
				"paddingPositions": [
					219,
					265,
					79,
					30,
					50,
					38
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 30,
				"type": "setTotalWin",
				"amount": 3610
			},
			{
				"index": 31,
				"type": "updateFreeSpin",
				"amount": 4,
				"total": 10
			},
			{
				"index": 32,
				"type": "reveal",
				"board": [
					[
						{
							"name": "L4"
						},
						{
							"name": "H4"
						},
						{
							"name": "M",
							"multiplier": 3
						},
						{
							"name": "L2"
						},
						{
							"name": "L3"
						},
						{
							"name": "L1"
						},
						{
							"name": "L4"
						}
					],
					[
						{
							"name": "L1"
						},
						{
							"name": "L3"
						},
						{
							"name": "L2"
						},
						{
							"name": "H3"
						},
						{
							"name": "L3"
						},
						{
							"name": "L5"
						},
						{
							"name": "L2"
						}
					],
					[
						{
							"name": "L3"
						},
						{
							"name": "H3"
						},
						{
							"name": "H3"
						},
						{
							"name": "L4"
						},
						{
							"name": "L2"
						},
						{
							"name": "M",
							"multiplier": 3
						},
						{
							"name": "L3"
						}
					],
					[
						{
							"name": "L5"
						},
						{
							"name": "L4"
						},
						{
							"name": "H4"
						},
						{
							"name": "H3"
						},
						{
							"name": "H2"
						},
						{
							"name": "L5"
						},
						{
							"name": "L3"
						}
					],
					[
						{
							"name": "L2"
						},
						{
							"name": "L3"
						},
						{
							"name": "L2"
						},
						{
							"name": "L4"
						},
						{
							"name": "L2"
						},
						{
							"name": "M",
							"multiplier": 2
						},
						{
							"name": "H1"
						}
					],
					[
						{
							"name": "L1"
						},
						{
							"name": "L2"
						},
						{
							"name": "L2"
						},
						{
							"name": "L3"
						},
						{
							"name": "L2"
						},
						{
							"name": "L3"
						},
						{
							"name": "H2"
						}
					]
				],
				"paddingPositions": [
					24,
					208,
					111,
					189,
					46,
					278
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 33,
				"type": "winInfo",
				"totalWin": 80,
				"wins": [
					{
						"symbol": "L2",
						"win": 80,
						"positions": [
							{
								"reel": 0,
								"row": 3
							},
							{
								"reel": 1,
								"row": 2
							},
							{
								"reel": 2,
								"row": 4
							},
							{
								"reel": 4,
								"row": 2
							},
							{
								"reel": 4,
								"row": 4
							},
							{
								"reel": 5,
								"row": 1
							},
							{
								"reel": 5,
								"row": 2
							},
							{
								"reel": 5,
								"row": 4
							}
						],
						"meta": {
							"globalMult": 1,
							"clusterMult": 1,
							"winWithoutMult": 80,
							"overlay": {
								"reel": 2,
								"row": 4
							}
						}
					}
				]
			},
			{
				"index": 34,
				"type": "updateTumbleWin",
				"amount": 80
			},
			{
				"index": 35,
				"type": "tumbleBoard",
				"newSymbols": [
					[
						{
							"name": "L3"
						}
					],
					[
						{
							"name": "S",
							"scatter": true
						}
					],
					[
						{
							"name": "M",
							"multiplier": 3
						}
					],
					[],
					[
						{
							"name": "L2"
						},
						{
							"name": "L1"
						}
					],
					[
						{
							"name": "H1"
						},
						{
							"name": "H3"
						},
						{
							"name": "L3"
						}
					]
				],
				"explodingSymbols": [
					{
						"reel": 0,
						"row": 3
					},
					{
						"reel": 1,
						"row": 2
					},
					{
						"reel": 2,
						"row": 4
					},
					{
						"reel": 4,
						"row": 2
					},
					{
						"reel": 4,
						"row": 4
					},
					{
						"reel": 5,
						"row": 1
					},
					{
						"reel": 5,
						"row": 2
					},
					{
						"reel": 5,
						"row": 4
					}
				]
			},
			{
				"index": 36,
				"type": "winInfo",
				"totalWin": 50,
				"wins": [
					{
						"symbol": "L3",
						"win": 50,
						"positions": [
							{
								"reel": 0,
								"row": 4
							},
							{
								"reel": 1,
								"row": 2
							},
							{
								"reel": 1,
								"row": 4
							},
							{
								"reel": 2,
								"row": 1
							},
							{
								"reel": 4,
								"row": 3
							},
							{
								"reel": 5,
								"row": 2
							},
							{
								"reel": 5,
								"row": 4
							},
							{
								"reel": 5,
								"row": 5
							}
						],
						"meta": {
							"globalMult": 1,
							"clusterMult": 1,
							"winWithoutMult": 50,
							"overlay": {
								"reel": 4,
								"row": 3
							}
						}
					}
				]
			},
			{
				"index": 37,
				"type": "updateTumbleWin",
				"amount": 130
			},
			{
				"index": 38,
				"type": "tumbleBoard",
				"newSymbols": [
					[
						{
							"name": "L3"
						}
					],
					[
						{
							"name": "L1"
						},
						{
							"name": "L5"
						}
					],
					[
						{
							"name": "L5"
						}
					],
					[],
					[
						{
							"name": "L2"
						}
					],
					[
						{
							"name": "L5"
						},
						{
							"name": "H4"
						},
						{
							"name": "L5"
						}
					]
				],
				"explodingSymbols": [
					{
						"reel": 0,
						"row": 4
					},
					{
						"reel": 1,
						"row": 2
					},
					{
						"reel": 1,
						"row": 4
					},
					{
						"reel": 2,
						"row": 1
					},
					{
						"reel": 4,
						"row": 3
					},
					{
						"reel": 5,
						"row": 2
					},
					{
						"reel": 5,
						"row": 4
					},
					{
						"reel": 5,
						"row": 5
					}
				]
			},
			{
				"index": 39,
				"type": "temperatureUpdate",
				"temperature": 28
			},
			{
				"index": 40,
				"type": "boardMultiplierInfo",
				"multInfo": {
					"positions": [
						{
							"reel": 0,
							"row": 4,
							"multiplier": 3
						},
						{
							"reel": 2,
							"row": 1,
							"multiplier": 3
						},
						{
							"reel": 2,
							"row": 5,
							"multiplier": 3
						},
						{
							"reel": 4,
							"row": 5,
							"multiplier": 2
						}
					]
				},
				"winInfo": {
					"tumbleWin": 130,
					"boardMult": 11,
					"appliedMult": 28,
					"totalWin": 3640
				}
			},
			{
				"index": 41,
				"type": "updateTumbleWin",
				"amount": 3640
			},
			{
				"index": 42,
				"type": "setWin",
				"amount": 3640,
				"winLevel": 7
			},
			{
				"index": 43,
				"type": "setTotalWin",
				"amount": 7250
			},
			{
				"index": 44,
				"type": "updateFreeSpin",
				"amount": 5,
				"total": 10
			},
			{
				"index": 45,
				"type": "reveal",
				"board": [
					[
						{
							"name": "L4"
						},
						{
							"name": "L5"
						},
						{
							"name": "L5"
						},
						{
							"name": "H3"
						},
						{
							"name": "L1"
						},
						{
							"name": "L3"
						},
						{
							"name": "L2"
						}
					],
					[
						{
							"name": "L5"
						},
						{
							"name": "L1"
						},
						{
							"name": "H3"
						},
						{
							"name": "M",
							"multiplier": 20
						},
						{
							"name": "L5"
						},
						{
							"name": "H3"
						},
						{
							"name": "H3"
						}
					],
					[
						{
							"name": "L2"
						},
						{
							"name": "L4"
						},
						{
							"name": "L1"
						},
						{
							"name": "L4"
						},
						{
							"name": "L4"
						},
						{
							"name": "L4"
						},
						{
							"name": "L5"
						}
					],
					[
						{
							"name": "L4"
						},
						{
							"name": "L2"
						},
						{
							"name": "L5"
						},
						{
							"name": "L3"
						},
						{
							"name": "L2"
						},
						{
							"name": "H3"
						},
						{
							"name": "L1"
						}
					],
					[
						{
							"name": "L4"
						},
						{
							"name": "L3"
						},
						{
							"name": "L1"
						},
						{
							"name": "L3"
						},
						{
							"name": "L3"
						},
						{
							"name": "L5"
						},
						{
							"name": "L4"
						}
					],
					[
						{
							"name": "M",
							"multiplier": 5
						},
						{
							"name": "L5"
						},
						{
							"name": "L4"
						},
						{
							"name": "H3"
						},
						{
							"name": "L3"
						},
						{
							"name": "L3"
						},
						{
							"name": "H3"
						}
					]
				],
				"paddingPositions": [
					38,
					20,
					180,
					49,
					122,
					41
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 46,
				"type": "setTotalWin",
				"amount": 7250
			},
			{
				"index": 47,
				"type": "updateFreeSpin",
				"amount": 6,
				"total": 10
			},
			{
				"index": 48,
				"type": "reveal",
				"board": [
					[
						{
							"name": "H1"
						},
						{
							"name": "L3"
						},
						{
							"name": "H3"
						},
						{
							"name": "L4"
						},
						{
							"name": "H4"
						},
						{
							"name": "H3"
						},
						{
							"name": "H1"
						}
					],
					[
						{
							"name": "L1"
						},
						{
							"name": "L4"
						},
						{
							"name": "L4"
						},
						{
							"name": "L3"
						},
						{
							"name": "L4"
						},
						{
							"name": "L5"
						},
						{
							"name": "L5"
						}
					],
					[
						{
							"name": "H4"
						},
						{
							"name": "L1"
						},
						{
							"name": "H3"
						},
						{
							"name": "H4"
						},
						{
							"name": "L5"
						},
						{
							"name": "L3"
						},
						{
							"name": "H3"
						}
					],
					[
						{
							"name": "H2"
						},
						{
							"name": "H4"
						},
						{
							"name": "H3"
						},
						{
							"name": "L3"
						},
						{
							"name": "H3"
						},
						{
							"name": "L1"
						},
						{
							"name": "M",
							"multiplier": 20
						}
					],
					[
						{
							"name": "H4"
						},
						{
							"name": "H4"
						},
						{
							"name": "L4"
						},
						{
							"name": "L4"
						},
						{
							"name": "L4"
						},
						{
							"name": "L5"
						},
						{
							"name": "L4"
						}
					],
					[
						{
							"name": "L1"
						},
						{
							"name": "L1"
						},
						{
							"name": "H4"
						},
						{
							"name": "M",
							"multiplier": 2
						},
						{
							"name": "H3"
						},
						{
							"name": "L1"
						},
						{
							"name": "L4"
						}
					]
				],
				"paddingPositions": [
					223,
					177,
					266,
					240,
					199,
					16
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 49,
				"type": "setTotalWin",
				"amount": 7250
			},
			{
				"index": 50,
				"type": "updateFreeSpin",
				"amount": 7,
				"total": 10
			},
			{
				"index": 51,
				"type": "reveal",
				"board": [
					[
						{
							"name": "L4"
						},
						{
							"name": "L5"
						},
						{
							"name": "H4"
						},
						{
							"name": "H2"
						},
						{
							"name": "L5"
						},
						{
							"name": "L1"
						},
						{
							"name": "L4"
						}
					],
					[
						{
							"name": "L3"
						},
						{
							"name": "L1"
						},
						{
							"name": "L2"
						},
						{
							"name": "L4"
						},
						{
							"name": "L3"
						},
						{
							"name": "H3"
						},
						{
							"name": "L2"
						}
					],
					[
						{
							"name": "L4"
						},
						{
							"name": "L5"
						},
						{
							"name": "L1"
						},
						{
							"name": "M",
							"multiplier": 5
						},
						{
							"name": "L2"
						},
						{
							"name": "L1"
						},
						{
							"name": "L5"
						}
					],
					[
						{
							"name": "L2"
						},
						{
							"name": "L4"
						},
						{
							"name": "L4"
						},
						{
							"name": "L1"
						},
						{
							"name": "L2"
						},
						{
							"name": "L4"
						},
						{
							"name": "L5"
						}
					],
					[
						{
							"name": "H1"
						},
						{
							"name": "H3"
						},
						{
							"name": "H3"
						},
						{
							"name": "L5"
						},
						{
							"name": "M",
							"multiplier": 8
						},
						{
							"name": "L4"
						},
						{
							"name": "L5"
						}
					],
					[
						{
							"name": "L1"
						},
						{
							"name": "H4"
						},
						{
							"name": "M",
							"multiplier": 2
						},
						{
							"name": "H3"
						},
						{
							"name": "L1"
						},
						{
							"name": "L4"
						},
						{
							"name": "H1"
						}
					]
				],
				"paddingPositions": [
					57,
					243,
					17,
					297,
					93,
					17
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 52,
				"type": "setTotalWin",
				"amount": 7250
			},
			{
				"index": 53,
				"type": "updateFreeSpin",
				"amount": 8,
				"total": 10
			},
			{
				"index": 54,
				"type": "reveal",
				"board": [
					[
						{
							"name": "L4"
						},
						{
							"name": "L1"
						},
						{
							"name": "L2"
						},
						{
							"name": "M",
							"multiplier": 4
						},
						{
							"name": "L5"
						},
						{
							"name": "L4"
						},
						{
							"name": "L2"
						}
					],
					[
						{
							"name": "L1"
						},
						{
							"name": "L3"
						},
						{
							"name": "L2"
						},
						{
							"name": "H1"
						},
						{
							"name": "L3"
						},
						{
							"name": "H3"
						},
						{
							"name": "L2"
						}
					],
					[
						{
							"name": "H4"
						},
						{
							"name": "L4"
						},
						{
							"name": "L4"
						},
						{
							"name": "M",
							"multiplier": 2
						},
						{
							"name": "L2"
						},
						{
							"name": "H2"
						},
						{
							"name": "L5"
						}
					],
					[
						{
							"name": "H4"
						},
						{
							"name": "L5"
						},
						{
							"name": "H4"
						},
						{
							"name": "L3"
						},
						{
							"name": "H1"
						},
						{
							"name": "L2"
						},
						{
							"name": "H4"
						}
					],
					[
						{
							"name": "L2"
						},
						{
							"name": "M",
							"multiplier": 2
						},
						{
							"name": "H1"
						},
						{
							"name": "L5"
						},
						{
							"name": "L2"
						},
						{
							"name": "L1"
						},
						{
							"name": "L4"
						}
					],
					[
						{
							"name": "L4"
						},
						{
							"name": "M",
							"multiplier": 5
						},
						{
							"name": "L4"
						},
						{
							"name": "L5"
						},
						{
							"name": "H3"
						},
						{
							"name": "L3"
						},
						{
							"name": "L5"
						}
					]
				],
				"paddingPositions": [
					83,
					32,
					149,
					86,
					50,
					34
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 55,
				"type": "setTotalWin",
				"amount": 7250
			},
			{
				"index": 56,
				"type": "updateFreeSpin",
				"amount": 9,
				"total": 10
			},
			{
				"index": 57,
				"type": "reveal",
				"board": [
					[
						{
							"name": "H1"
						},
						{
							"name": "L4"
						},
						{
							"name": "H1"
						},
						{
							"name": "L1"
						},
						{
							"name": "M",
							"multiplier": 2
						},
						{
							"name": "L4"
						},
						{
							"name": "L2"
						}
					],
					[
						{
							"name": "H4"
						},
						{
							"name": "L5"
						},
						{
							"name": "L3"
						},
						{
							"name": "H3"
						},
						{
							"name": "H3"
						},
						{
							"name": "L2"
						},
						{
							"name": "H1"
						}
					],
					[
						{
							"name": "L4"
						},
						{
							"name": "H3"
						},
						{
							"name": "L1"
						},
						{
							"name": "L1"
						},
						{
							"name": "H4"
						},
						{
							"name": "L4"
						},
						{
							"name": "S",
							"scatter": true
						}
					],
					[
						{
							"name": "H1"
						},
						{
							"name": "L5"
						},
						{
							"name": "H3"
						},
						{
							"name": "H3"
						},
						{
							"name": "L2"
						},
						{
							"name": "L4"
						},
						{
							"name": "L1"
						}
					],
					[
						{
							"name": "H3"
						},
						{
							"name": "L2"
						},
						{
							"name": "H1"
						},
						{
							"name": "L5"
						},
						{
							"name": "L3"
						},
						{
							"name": "H2"
						},
						{
							"name": "L4"
						}
					],
					[
						{
							"name": "L4"
						},
						{
							"name": "H1"
						},
						{
							"name": "L5"
						},
						{
							"name": "H1"
						},
						{
							"name": "L2"
						},
						{
							"name": "L5"
						},
						{
							"name": "L5"
						}
					]
				],
				"paddingPositions": [
					11,
					141,
					251,
					164,
					280,
					202
				],
				"gameType": "freegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 58,
				"type": "setTotalWin",
				"amount": 7250
			},
			{
				"index": 59,
				"type": "freeSpinEnd",
				"amount": 6950,
				"winLevel": 6
			},
			{
				"index": 60,
				"type": "finalWin",
				"amount": 7250
			}
		],
		"criteria": "freegame",
		"baseGameWins": 3.0,
		"freeGameWins": 69.5
	}
];
