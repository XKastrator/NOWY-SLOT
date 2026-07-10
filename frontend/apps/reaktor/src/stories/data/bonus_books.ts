export default [
	{
		"id": 10,
		"payoutMultiplier": 6030,
		"events": [
			{
				"index": 0,
				"type": "reveal",
				"board": [
					[
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
							"name": "L4"
						},
						{
							"name": "L2"
						},
						{
							"name": "S",
							"scatter": true
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
						},
						{
							"name": "L5"
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
							"name": "H4"
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
							"name": "S",
							"scatter": true
						},
						{
							"name": "L5"
						},
						{
							"name": "H3"
						},
						{
							"name": "H4"
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
							"name": "S",
							"scatter": true
						},
						{
							"name": "M",
							"multiplier": 2
						},
						{
							"name": "L3"
						},
						{
							"name": "H1"
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
							"name": "L4"
						},
						{
							"name": "L4"
						},
						{
							"name": "L4"
						},
						{
							"name": "L2"
						},
						{
							"name": "H2"
						},
						{
							"name": "M",
							"multiplier": 6
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
					281,
					155,
					287,
					212,
					72,
					241
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
						"row": 5
					},
					{
						"reel": 2,
						"row": 2
					},
					{
						"reel": 3,
						"row": 1
					},
					{
						"reel": 5,
						"row": 4
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
						"row": 5
					},
					{
						"reel": 2,
						"row": 2
					},
					{
						"reel": 3,
						"row": 1
					},
					{
						"reel": 5,
						"row": 4
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
							"name": "L5"
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
							"name": "H4"
						},
						{
							"name": "M",
							"multiplier": 2
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
							"name": "L4"
						},
						{
							"name": "L4"
						},
						{
							"name": "L1"
						},
						{
							"name": "L5"
						},
						{
							"name": "S",
							"scatter": true
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
							"name": "L5"
						},
						{
							"name": "H4"
						},
						{
							"name": "L4"
						},
						{
							"name": "H4"
						},
						{
							"name": "L2"
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
							"name": "L4"
						},
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
							"name": "L4"
						},
						{
							"name": "H4"
						}
					],
					[
						{
							"name": "L4"
						},
						{
							"name": "M",
							"multiplier": 2
						},
						{
							"name": "L5"
						},
						{
							"name": "H2"
						},
						{
							"name": "L4"
						},
						{
							"name": "L4"
						},
						{
							"name": "H2"
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
							"name": "L5"
						},
						{
							"name": "H4"
						},
						{
							"name": "L5"
						},
						{
							"name": "H1"
						},
						{
							"name": "H3"
						}
					]
				],
				"paddingPositions": [
					21,
					202,
					231,
					80,
					7,
					270
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
				"totalWin": 40,
				"wins": [
					{
						"symbol": "L4",
						"win": 40,
						"positions": [
							{
								"reel": 0,
								"row": 3
							},
							{
								"reel": 1,
								"row": 1
							},
							{
								"reel": 1,
								"row": 2
							},
							{
								"reel": 2,
								"row": 3
							},
							{
								"reel": 3,
								"row": 1
							},
							{
								"reel": 3,
								"row": 5
							},
							{
								"reel": 4,
								"row": 4
							},
							{
								"reel": 4,
								"row": 5
							}
						],
						"meta": {
							"globalMult": 1,
							"clusterMult": 1,
							"winWithoutMult": 40,
							"overlay": {
								"reel": 2,
								"row": 3
							}
						}
					}
				]
			},
			{
				"index": 8,
				"type": "updateTumbleWin",
				"amount": 40
			},
			{
				"index": 9,
				"type": "tumbleBoard",
				"newSymbols": [
					[
						{
							"name": "H3"
						}
					],
					[
						{
							"name": "M",
							"multiplier": 10
						},
						{
							"name": "L2"
						}
					],
					[
						{
							"name": "L1"
						}
					],
					[
						{
							"name": "L5"
						},
						{
							"name": "H2"
						}
					],
					[
						{
							"name": "H1"
						},
						{
							"name": "L5"
						}
					],
					[]
				],
				"explodingSymbols": [
					{
						"reel": 0,
						"row": 3
					},
					{
						"reel": 1,
						"row": 1
					},
					{
						"reel": 1,
						"row": 2
					},
					{
						"reel": 2,
						"row": 3
					},
					{
						"reel": 3,
						"row": 1
					},
					{
						"reel": 3,
						"row": 5
					},
					{
						"reel": 4,
						"row": 4
					},
					{
						"reel": 4,
						"row": 5
					}
				]
			},
			{
				"index": 10,
				"type": "winInfo",
				"totalWin": 100,
				"wins": [
					{
						"symbol": "L5",
						"win": 100,
						"positions": [
							{
								"reel": 0,
								"row": 1
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
								"row": 2
							},
							{
								"reel": 3,
								"row": 4
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
							"winWithoutMult": 100,
							"overlay": {
								"reel": 3,
								"row": 4
							}
						}
					}
				]
			},
			{
				"index": 11,
				"type": "updateTumbleWin",
				"amount": 140
			},
			{
				"index": 12,
				"type": "tumbleBoard",
				"newSymbols": [
					[
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
						}
					],
					[
						{
							"name": "L4"
						}
					],
					[
						{
							"name": "L1"
						}
					],
					[
						{
							"name": "L1"
						},
						{
							"name": "L3"
						}
					],
					[
						{
							"name": "M",
							"multiplier": 4
						},
						{
							"name": "L2"
						},
						{
							"name": "L4"
						}
					]
				],
				"explodingSymbols": [
					{
						"reel": 0,
						"row": 1
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
						"row": 2
					},
					{
						"reel": 3,
						"row": 4
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
						"row": 2
					},
					{
						"reel": 5,
						"row": 4
					}
				]
			},
			{
				"index": 13,
				"type": "temperatureUpdate",
				"temperature": 14
			},
			{
				"index": 14,
				"type": "boardMultiplierInfo",
				"multInfo": {
					"positions": [
						{
							"reel": 0,
							"row": 5,
							"multiplier": 2
						},
						{
							"reel": 1,
							"row": 2,
							"multiplier": 10
						},
						{
							"reel": 4,
							"row": 4,
							"multiplier": 2
						}
					]
				},
				"winInfo": {
					"tumbleWin": 140,
					"boardMult": 14,
					"appliedMult": 14,
					"totalWin": 1960
				}
			},
			{
				"index": 15,
				"type": "updateTumbleWin",
				"amount": 1960
			},
			{
				"index": 16,
				"type": "setWin",
				"amount": 1960,
				"winLevel": 6
			},
			{
				"index": 17,
				"type": "setTotalWin",
				"amount": 2260
			},
			{
				"index": 18,
				"type": "updateFreeSpin",
				"amount": 1,
				"total": 10
			},
			{
				"index": 19,
				"type": "reveal",
				"board": [
					[
						{
							"name": "L2"
						},
						{
							"name": "L1"
						},
						{
							"name": "H3"
						},
						{
							"name": "H3"
						},
						{
							"name": "H1"
						},
						{
							"name": "H4"
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
							"name": "H3"
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
							"name": "H4"
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
							"name": "L1"
						},
						{
							"name": "L2"
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
							"name": "L2"
						},
						{
							"name": "M",
							"multiplier": 4
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
							"name": "L2"
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
							"name": "L5"
						}
					]
				],
				"paddingPositions": [
					167,
					225,
					100,
					265,
					119,
					150
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
				"index": 20,
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
								"reel": 2,
								"row": 2
							},
							{
								"reel": 2,
								"row": 4
							},
							{
								"reel": 3,
								"row": 4
							},
							{
								"reel": 3,
								"row": 5
							},
							{
								"reel": 4,
								"row": 2
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
								"reel": 3,
								"row": 4
							}
						}
					}
				]
			},
			{
				"index": 21,
				"type": "updateTumbleWin",
				"amount": 80
			},
			{
				"index": 22,
				"type": "tumbleBoard",
				"newSymbols": [
					[],
					[],
					[
						{
							"name": "L2"
						},
						{
							"name": "L2"
						},
						{
							"name": "M",
							"multiplier": 5
						}
					],
					[
						{
							"name": "L3"
						},
						{
							"name": "L1"
						}
					],
					[
						{
							"name": "L1"
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
							"name": "H1"
						}
					]
				],
				"explodingSymbols": [
					{
						"reel": 2,
						"row": 1
					},
					{
						"reel": 2,
						"row": 2
					},
					{
						"reel": 2,
						"row": 4
					},
					{
						"reel": 3,
						"row": 4
					},
					{
						"reel": 3,
						"row": 5
					},
					{
						"reel": 4,
						"row": 2
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
				"index": 23,
				"type": "temperatureUpdate",
				"temperature": 19
			},
			{
				"index": 24,
				"type": "boardMultiplierInfo",
				"multInfo": {
					"positions": [
						{
							"reel": 2,
							"row": 2,
							"multiplier": 5
						}
					]
				},
				"winInfo": {
					"tumbleWin": 80,
					"boardMult": 5,
					"appliedMult": 19,
					"totalWin": 1520
				}
			},
			{
				"index": 25,
				"type": "updateTumbleWin",
				"amount": 1520
			},
			{
				"index": 26,
				"type": "setWin",
				"amount": 1520,
				"winLevel": 6
			},
			{
				"index": 27,
				"type": "setTotalWin",
				"amount": 3780
			},
			{
				"index": 28,
				"type": "updateFreeSpin",
				"amount": 2,
				"total": 10
			},
			{
				"index": 29,
				"type": "reveal",
				"board": [
					[
						{
							"name": "H4"
						},
						{
							"name": "L2"
						},
						{
							"name": "H4"
						},
						{
							"name": "M",
							"multiplier": 6
						},
						{
							"name": "L4"
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
							"name": "L3"
						},
						{
							"name": "H3"
						},
						{
							"name": "H1"
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
							"name": "L5"
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
							"name": "L5"
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
							"name": "L3"
						},
						{
							"name": "H3"
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
							"name": "M",
							"multiplier": 4
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
							"name": "L1"
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
							"name": "H4"
						},
						{
							"name": "L1"
						}
					]
				],
				"paddingPositions": [
					142,
					208,
					282,
					42,
					130,
					161
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
				"amount": 3780
			},
			{
				"index": 31,
				"type": "updateFreeSpin",
				"amount": 3,
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
						},
						{
							"name": "H2"
						}
					],
					[
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
							"name": "H4"
						},
						{
							"name": "L2"
						},
						{
							"name": "H1"
						},
						{
							"name": "H4"
						}
					],
					[
						{
							"name": "H4"
						},
						{
							"name": "M",
							"multiplier": 2
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
							"name": "L5"
						},
						{
							"name": "L1"
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
							"name": "L3"
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
							"name": "L3"
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
							"name": "H2"
						},
						{
							"name": "H1"
						},
						{
							"name": "L5"
						},
						{
							"name": "L1"
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
							"name": "H2"
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
							"name": "L4"
						},
						{
							"name": "H1"
						}
					]
				],
				"paddingPositions": [
					288,
					55,
					205,
					55,
					148,
					197
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
				"type": "setTotalWin",
				"amount": 3780
			},
			{
				"index": 34,
				"type": "updateFreeSpin",
				"amount": 4,
				"total": 10
			},
			{
				"index": 35,
				"type": "reveal",
				"board": [
					[
						{
							"name": "L1"
						},
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
							"name": "L5"
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
							"name": "H1"
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
							"name": "L2"
						},
						{
							"name": "L5"
						},
						{
							"name": "M",
							"multiplier": 25
						},
						{
							"name": "L3"
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
							"name": "L5"
						},
						{
							"name": "M",
							"multiplier": 3
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
							"name": "L1"
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
							"name": "M",
							"multiplier": 2
						},
						{
							"name": "L2"
						},
						{
							"name": "L4"
						},
						{
							"name": "H4"
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
							"name": "H4"
						},
						{
							"name": "L3"
						},
						{
							"name": "S",
							"scatter": true
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
							"name": "H2"
						}
					]
				],
				"paddingPositions": [
					0,
					109,
					107,
					26,
					240,
					192
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
				"index": 36,
				"type": "setTotalWin",
				"amount": 3780
			},
			{
				"index": 37,
				"type": "updateFreeSpin",
				"amount": 5,
				"total": 10
			},
			{
				"index": 38,
				"type": "reveal",
				"board": [
					[
						{
							"name": "L4"
						},
						{
							"name": "L2"
						},
						{
							"name": "H4"
						},
						{
							"name": "H1"
						},
						{
							"name": "H4"
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
							"name": "L1"
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
							"name": "L4"
						},
						{
							"name": "L3"
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
							"name": "L4"
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
							"name": "L4"
						},
						{
							"name": "L3"
						},
						{
							"name": "L3"
						},
						{
							"name": "H1"
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
							"name": "L2"
						},
						{
							"name": "L1"
						},
						{
							"name": "L2"
						},
						{
							"name": "M",
							"multiplier": 20
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
							"name": "H2"
						},
						{
							"name": "L1"
						},
						{
							"name": "M",
							"multiplier": 6
						},
						{
							"name": "L5"
						},
						{
							"name": "L2"
						},
						{
							"name": "L3"
						},
						{
							"name": "H1"
						}
					]
				],
				"paddingPositions": [
					138,
					172,
					44,
					159,
					170,
					7
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
				"index": 39,
				"type": "winInfo",
				"totalWin": 50,
				"wins": [
					{
						"symbol": "L3",
						"win": 50,
						"positions": [
							{
								"reel": 1,
								"row": 2
							},
							{
								"reel": 1,
								"row": 3
							},
							{
								"reel": 2,
								"row": 2
							},
							{
								"reel": 2,
								"row": 4
							},
							{
								"reel": 3,
								"row": 1
							},
							{
								"reel": 3,
								"row": 3
							},
							{
								"reel": 3,
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
								"reel": 3,
								"row": 3
							}
						}
					}
				]
			},
			{
				"index": 40,
				"type": "updateTumbleWin",
				"amount": 50
			},
			{
				"index": 41,
				"type": "tumbleBoard",
				"newSymbols": [
					[],
					[
						{
							"name": "L1"
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
							"name": "L1"
						}
					],
					[
						{
							"name": "M",
							"multiplier": 2
						},
						{
							"name": "L3"
						},
						{
							"name": "H4"
						}
					],
					[],
					[
						{
							"name": "L5"
						}
					]
				],
				"explodingSymbols": [
					{
						"reel": 1,
						"row": 2
					},
					{
						"reel": 1,
						"row": 3
					},
					{
						"reel": 2,
						"row": 2
					},
					{
						"reel": 2,
						"row": 4
					},
					{
						"reel": 3,
						"row": 1
					},
					{
						"reel": 3,
						"row": 3
					},
					{
						"reel": 3,
						"row": 4
					},
					{
						"reel": 5,
						"row": 5
					}
				]
			},
			{
				"index": 42,
				"type": "temperatureUpdate",
				"temperature": 45
			},
			{
				"index": 43,
				"type": "boardMultiplierInfo",
				"multInfo": {
					"positions": [
						{
							"reel": 4,
							"row": 4,
							"multiplier": 20
						},
						{
							"reel": 5,
							"row": 3,
							"multiplier": 6
						}
					]
				},
				"winInfo": {
					"tumbleWin": 50,
					"boardMult": 26,
					"appliedMult": 45,
					"totalWin": 2250
				}
			},
			{
				"index": 44,
				"type": "updateTumbleWin",
				"amount": 2250
			},
			{
				"index": 45,
				"type": "setWin",
				"amount": 2250,
				"winLevel": 6
			},
			{
				"index": 46,
				"type": "setTotalWin",
				"amount": 6030
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
							"name": "H4"
						},
						{
							"name": "L2"
						},
						{
							"name": "L4"
						},
						{
							"name": "M",
							"multiplier": 5
						},
						{
							"name": "H4"
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
							"name": "H4"
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
							"name": "L1"
						},
						{
							"name": "H1"
						},
						{
							"name": "L1"
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
							"name": "H3"
						},
						{
							"name": "L5"
						},
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
							"name": "H4"
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
							"name": "L3"
						}
					],
					[
						{
							"name": "L4"
						},
						{
							"name": "H2"
						},
						{
							"name": "L5"
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
							"name": "H2"
						}
					]
				],
				"paddingPositions": [
					51,
					5,
					30,
					238,
					249,
					90
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
				"amount": 6030
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
							"name": "L3"
						},
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
							"name": "H3"
						},
						{
							"name": "L1"
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
							"name": "L4"
						},
						{
							"name": "L3"
						},
						{
							"name": "H1"
						},
						{
							"name": "H2"
						},
						{
							"name": "L3"
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
							"name": "L2"
						},
						{
							"name": "L3"
						},
						{
							"name": "L1"
						},
						{
							"name": "H4"
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
							"name": "L5"
						},
						{
							"name": "H2"
						},
						{
							"name": "H3"
						},
						{
							"name": "L5"
						},
						{
							"name": "M",
							"multiplier": 3
						},
						{
							"name": "H4"
						},
						{
							"name": "L1"
						}
					],
					[
						{
							"name": "H2"
						},
						{
							"name": "L1"
						},
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
							"name": "L4"
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
							"name": "L1"
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
							"name": "L2"
						},
						{
							"name": "L5"
						}
					]
				],
				"paddingPositions": [
					260,
					97,
					67,
					214,
					196,
					59
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
				"amount": 6030
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
							"name": "L1"
						},
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
							"name": "L3"
						},
						{
							"name": "H4"
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
							"name": "L5"
						},
						{
							"name": "L3"
						},
						{
							"name": "L5"
						},
						{
							"name": "L3"
						},
						{
							"name": "L1"
						},
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
							"name": "L3"
						},
						{
							"name": "M",
							"multiplier": 3
						},
						{
							"name": "L2"
						},
						{
							"name": "H2"
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
							"name": "M",
							"multiplier": 8
						},
						{
							"name": "H3"
						},
						{
							"name": "L5"
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
							"name": "H4"
						}
					],
					[
						{
							"name": "L2"
						},
						{
							"name": "H2"
						},
						{
							"name": "H2"
						},
						{
							"name": "H2"
						},
						{
							"name": "H1"
						},
						{
							"name": "L3"
						},
						{
							"name": "L1"
						}
					]
				],
				"paddingPositions": [
					0,
					138,
					155,
					10,
					107,
					95
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
				"amount": 6030
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
							"name": "H4"
						},
						{
							"name": "L2"
						},
						{
							"name": "L4"
						},
						{
							"name": "M",
							"multiplier": 2
						},
						{
							"name": "H4"
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
							"name": "L1"
						},
						{
							"name": "H3"
						},
						{
							"name": "M",
							"multiplier": 4
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
							"name": "H3"
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
							"name": "L5"
						},
						{
							"name": "L3"
						},
						{
							"name": "L5"
						},
						{
							"name": "H4"
						}
					],
					[
						{
							"name": "L4"
						},
						{
							"name": "H2"
						},
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
							"name": "L3"
						},
						{
							"name": "H2"
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
							"name": "H2"
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
							"name": "L5"
						},
						{
							"name": "L2"
						},
						{
							"name": "M",
							"multiplier": 8
						},
						{
							"name": "L5"
						},
						{
							"name": "L1"
						}
					]
				],
				"paddingPositions": [
					51,
					21,
					74,
					109,
					226,
					132
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
				"amount": 6030
			},
			{
				"index": 59,
				"type": "freeSpinEnd",
				"amount": 5730,
				"winLevel": 6
			},
			{
				"index": 60,
				"type": "finalWin",
				"amount": 6030
			}
		],
		"criteria": "freegame",
		"baseGameWins": 3.0,
		"freeGameWins": 57.3
	},
	{
		"id": 0,
		"payoutMultiplier": 50050,
		"events": [
			{
				"index": 0,
				"type": "reveal",
				"board": [
					[
						{
							"name": "L2"
						},
						{
							"name": "H1"
						},
						{
							"name": "L4"
						},
						{
							"name": "L2"
						},
						{
							"name": "S",
							"scatter": true
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
							"name": "H3"
						},
						{
							"name": "L4"
						},
						{
							"name": "L3"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L3"
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
							"name": "L2"
						},
						{
							"name": "H2"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "H4"
						},
						{
							"name": "L5"
						},
						{
							"name": "H3"
						},
						{
							"name": "H2"
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
							"name": "L2"
						},
						{
							"name": "L1"
						},
						{
							"name": "L4"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "H4"
						}
					],
					[
						{
							"name": "M",
							"multiplier": 2
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "H4"
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
							"name": "L4"
						}
					],
					[
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
							"name": "S",
							"scatter": true
						},
						{
							"name": "L3"
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
					282,
					59,
					203,
					102,
					104,
					2
				],
				"gameType": "basegame",
				"anticipation": [
					0,
					0,
					0,
					1,
					2,
					3
				]
			},
			{
				"index": 1,
				"type": "scatterPayInfo",
				"win": 10000,
				"positions": [
					{
						"reel": 0,
						"row": 4
					},
					{
						"reel": 1,
						"row": 3
					},
					{
						"reel": 2,
						"row": 2
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
						"row": 3
					}
				]
			},
			{
				"index": 2,
				"type": "setWin",
				"amount": 10000,
				"winLevel": 9
			},
			{
				"index": 3,
				"type": "setTotalWin",
				"amount": 10000
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
						"row": 3
					},
					{
						"reel": 2,
						"row": 2
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
						"row": 3
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
							"name": "L5"
						},
						{
							"name": "H4"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "H1"
						},
						{
							"name": "L2"
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
							"name": "H3"
						},
						{
							"name": "L3"
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
							"name": "L3"
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
							"name": "L2"
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
							"name": "H2"
						},
						{
							"name": "L3"
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
							"name": "L3"
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
							"name": "H3"
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
							"name": "L1"
						},
						{
							"name": "H4"
						},
						{
							"name": "L3"
						},
						{
							"name": "L1"
						}
					]
				],
				"paddingPositions": [
					195,
					110,
					216,
					14,
					270,
					113
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
				"type": "mutation",
				"sourceSymbol": "L5",
				"targetSymbol": "H4",
				"positions": [
					{
						"reel": 1,
						"row": 5
					},
					{
						"reel": 3,
						"row": 1
					},
					{
						"reel": 4,
						"row": 1
					},
					{
						"reel": 5,
						"row": 1
					}
				]
			},
			{
				"index": 8,
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
								"reel": 0,
								"row": 5
							},
							{
								"reel": 1,
								"row": 4
							},
							{
								"reel": 2,
								"row": 2
							},
							{
								"reel": 2,
								"row": 4
							},
							{
								"reel": 3,
								"row": 4
							},
							{
								"reel": 3,
								"row": 5
							},
							{
								"reel": 4,
								"row": 4
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
				"index": 9,
				"type": "updateTumbleWin",
				"amount": 80
			},
			{
				"index": 10,
				"type": "tumbleBoard",
				"newSymbols": [
					[
						{
							"name": "L2"
						},
						{
							"name": "L4"
						}
					],
					[
						{
							"name": "L1"
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
					[
						{
							"name": "L5"
						},
						{
							"name": "S",
							"scatter": true
						}
					],
					[
						{
							"name": "H4"
						}
					],
					[]
				],
				"explodingSymbols": [
					{
						"reel": 0,
						"row": 4
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
						"reel": 2,
						"row": 2
					},
					{
						"reel": 2,
						"row": 4
					},
					{
						"reel": 3,
						"row": 4
					},
					{
						"reel": 3,
						"row": 5
					},
					{
						"reel": 4,
						"row": 4
					}
				]
			},
			{
				"index": 11,
				"type": "temperatureUpdate",
				"temperature": 5
			},
			{
				"index": 12,
				"type": "boardMultiplierInfo",
				"multInfo": {
					"positions": [
						{
							"reel": 4,
							"row": 4,
							"multiplier": 5
						}
					]
				},
				"winInfo": {
					"tumbleWin": 80,
					"boardMult": 5,
					"appliedMult": 5,
					"totalWin": 400
				}
			},
			{
				"index": 13,
				"type": "updateTumbleWin",
				"amount": 400
			},
			{
				"index": 14,
				"type": "setWin",
				"amount": 400,
				"winLevel": 4
			},
			{
				"index": 15,
				"type": "setTotalWin",
				"amount": 10400
			},
			{
				"index": 16,
				"type": "updateFreeSpin",
				"amount": 1,
				"total": 10
			},
			{
				"index": 17,
				"type": "reveal",
				"board": [
					[
						{
							"name": "H4"
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
							"name": "L1"
						},
						{
							"name": "H3"
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
							"name": "L1"
						},
						{
							"name": "L5"
						},
						{
							"name": "H3"
						},
						{
							"name": "H4"
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
							"name": "L1"
						},
						{
							"name": "H1"
						},
						{
							"name": "H4"
						},
						{
							"name": "L3"
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
							"name": "L5"
						},
						{
							"name": "L5"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L2"
						},
						{
							"name": "L5"
						},
						{
							"name": "H2"
						},
						{
							"name": "L3"
						}
					],
					[
						{
							"name": "H3"
						},
						{
							"name": "H4"
						},
						{
							"name": "M",
							"multiplier": 2
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
						}
					],
					[
						{
							"name": "H1"
						},
						{
							"name": "H2"
						},
						{
							"name": "H2"
						},
						{
							"name": "H4"
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
					]
				],
				"paddingPositions": [
					112,
					235,
					148,
					11,
					213,
					284
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
				"index": 18,
				"type": "mutation",
				"sourceSymbol": "L3",
				"targetSymbol": "H3",
				"positions": [
					{
						"reel": 2,
						"row": 4
					},
					{
						"reel": 5,
						"row": 4
					}
				]
			},
			{
				"index": 19,
				"type": "setTotalWin",
				"amount": 10400
			},
			{
				"index": 20,
				"type": "updateFreeSpin",
				"amount": 2,
				"total": 10
			},
			{
				"index": 21,
				"type": "reveal",
				"board": [
					[
						{
							"name": "L2"
						},
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
							"name": "H2"
						},
						{
							"name": "L3"
						},
						{
							"name": "L3"
						}
					],
					[
						{
							"name": "H3"
						},
						{
							"name": "H2"
						},
						{
							"name": "H4"
						},
						{
							"name": "L5"
						},
						{
							"name": "L5"
						},
						{
							"name": "L1"
						},
						{
							"name": "H2"
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
							"name": "L3"
						},
						{
							"name": "L4"
						},
						{
							"name": "H2"
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
							"name": "H3"
						},
						{
							"name": "L3"
						},
						{
							"name": "L2"
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
							"name": "H3"
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
							"name": "L4"
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
							"name": "L2"
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
							"name": "L2"
						},
						{
							"name": "H4"
						},
						{
							"name": "H3"
						},
						{
							"name": "H3"
						},
						{
							"name": "H4"
						}
					]
				],
				"paddingPositions": [
					256,
					216,
					259,
					97,
					155,
					145
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
				"index": 22,
				"type": "mutation",
				"sourceSymbol": "L4",
				"targetSymbol": "H4",
				"positions": [
					{
						"reel": 0,
						"row": 2
					},
					{
						"reel": 2,
						"row": 3
					},
					{
						"reel": 2,
						"row": 5
					},
					{
						"reel": 4,
						"row": 2
					}
				]
			},
			{
				"index": 23,
				"type": "setTotalWin",
				"amount": 10400
			},
			{
				"index": 24,
				"type": "updateFreeSpin",
				"amount": 3,
				"total": 10
			},
			{
				"index": 25,
				"type": "reveal",
				"board": [
					[
						{
							"name": "H1"
						},
						{
							"name": "L2"
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
							"name": "L2"
						},
						{
							"name": "H2"
						}
					],
					[
						{
							"name": "H3"
						},
						{
							"name": "H2"
						},
						{
							"name": "L1"
						},
						{
							"name": "L5"
						},
						{
							"name": "H2"
						},
						{
							"name": "L1"
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
							"name": "H2"
						},
						{
							"name": "M",
							"multiplier": 4
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
							"name": "L5"
						},
						{
							"name": "H2"
						},
						{
							"name": "L5"
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
							"name": "L5"
						},
						{
							"name": "H3"
						},
						{
							"name": "H4"
						},
						{
							"name": "H2"
						},
						{
							"name": "L2"
						},
						{
							"name": "L5"
						},
						{
							"name": "L1"
						}
					],
					[
						{
							"name": "S",
							"scatter": true
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
							"name": "H4"
						},
						{
							"name": "L5"
						},
						{
							"name": "H3"
						}
					]
				],
				"paddingPositions": [
					17,
					245,
					124,
					206,
					212,
					88
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
				"index": 26,
				"type": "mutation",
				"sourceSymbol": "L3",
				"targetSymbol": "H2",
				"positions": [
					{
						"reel": 3,
						"row": 1
					},
					{
						"reel": 3,
						"row": 5
					},
					{
						"reel": 5,
						"row": 3
					}
				]
			},
			{
				"index": 27,
				"type": "winInfo",
				"totalWin": 250,
				"wins": [
					{
						"symbol": "H2",
						"win": 250,
						"positions": [
							{
								"reel": 1,
								"row": 1
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
								"reel": 3,
								"row": 1
							},
							{
								"reel": 3,
								"row": 3
							},
							{
								"reel": 3,
								"row": 5
							},
							{
								"reel": 4,
								"row": 3
							},
							{
								"reel": 5,
								"row": 3
							}
						],
						"meta": {
							"globalMult": 1,
							"clusterMult": 1,
							"winWithoutMult": 250,
							"overlay": {
								"reel": 3,
								"row": 3
							}
						}
					}
				]
			},
			{
				"index": 28,
				"type": "updateTumbleWin",
				"amount": 250
			},
			{
				"index": 29,
				"type": "tumbleBoard",
				"newSymbols": [
					[],
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
							"name": "H4"
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
							"name": "L2"
						}
					],
					[
						{
							"name": "L1"
						}
					],
					[
						{
							"name": "L1"
						}
					]
				],
				"explodingSymbols": [
					{
						"reel": 1,
						"row": 1
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
						"reel": 3,
						"row": 1
					},
					{
						"reel": 3,
						"row": 3
					},
					{
						"reel": 3,
						"row": 5
					},
					{
						"reel": 4,
						"row": 3
					},
					{
						"reel": 5,
						"row": 3
					}
				]
			},
			{
				"index": 30,
				"type": "winInfo",
				"totalWin": 20,
				"wins": [
					{
						"symbol": "L5",
						"win": 20,
						"positions": [
							{
								"reel": 1,
								"row": 1
							},
							{
								"reel": 1,
								"row": 4
							},
							{
								"reel": 2,
								"row": 4
							},
							{
								"reel": 2,
								"row": 5
							},
							{
								"reel": 3,
								"row": 4
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
								"reel": 4,
								"row": 5
							},
							{
								"reel": 5,
								"row": 5
							}
						],
						"meta": {
							"globalMult": 1,
							"clusterMult": 1,
							"winWithoutMult": 20,
							"overlay": {
								"reel": 3,
								"row": 4
							}
						}
					}
				]
			},
			{
				"index": 31,
				"type": "updateTumbleWin",
				"amount": 270
			},
			{
				"index": 32,
				"type": "tumbleBoard",
				"newSymbols": [
					[],
					[
						{
							"name": "L5"
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
							"name": "L2"
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
					[
						{
							"name": "H4"
						},
						{
							"name": "H4"
						}
					],
					[
						{
							"name": "L5"
						}
					]
				],
				"explodingSymbols": [
					{
						"reel": 1,
						"row": 1
					},
					{
						"reel": 1,
						"row": 4
					},
					{
						"reel": 2,
						"row": 4
					},
					{
						"reel": 2,
						"row": 5
					},
					{
						"reel": 3,
						"row": 4
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
						"reel": 4,
						"row": 5
					},
					{
						"reel": 5,
						"row": 5
					}
				]
			},
			{
				"index": 33,
				"type": "winInfo",
				"totalWin": 100,
				"wins": [
					{
						"symbol": "L1",
						"win": 100,
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
								"reel": 1,
								"row": 2
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
								"reel": 3,
								"row": 1
							},
							{
								"reel": 4,
								"row": 2
							},
							{
								"reel": 5,
								"row": 1
							}
						],
						"meta": {
							"globalMult": 1,
							"clusterMult": 1,
							"winWithoutMult": 100,
							"overlay": {
								"reel": 4,
								"row": 2
							}
						}
					}
				]
			},
			{
				"index": 34,
				"type": "updateTumbleWin",
				"amount": 370
			},
			{
				"index": 35,
				"type": "tumbleBoard",
				"newSymbols": [
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
							"name": "L5"
						},
						{
							"name": "H3"
						},
						{
							"name": "H4"
						}
					],
					[],
					[
						{
							"name": "M",
							"multiplier": 4
						}
					],
					[
						{
							"name": "L2"
						}
					],
					[
						{
							"name": "H2"
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
						"reel": 1,
						"row": 2
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
						"reel": 3,
						"row": 1
					},
					{
						"reel": 4,
						"row": 2
					},
					{
						"reel": 5,
						"row": 1
					}
				]
			},
			{
				"index": 36,
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
								"reel": 0,
								"row": 5
							},
							{
								"reel": 2,
								"row": 1
							},
							{
								"reel": 2,
								"row": 3
							},
							{
								"reel": 3,
								"row": 1
							},
							{
								"reel": 3,
								"row": 4
							},
							{
								"reel": 4,
								"row": 5
							},
							{
								"reel": 5,
								"row": 3
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
				"index": 37,
				"type": "updateTumbleWin",
				"amount": 450
			},
			{
				"index": 38,
				"type": "tumbleBoard",
				"newSymbols": [
					[
						{
							"name": "L4"
						},
						{
							"name": "L1"
						}
					],
					[],
					[
						{
							"name": "L3"
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
							"name": "L2"
						}
					],
					[
						{
							"name": "L5"
						}
					],
					[
						{
							"name": "L2"
						}
					]
				],
				"explodingSymbols": [
					{
						"reel": 0,
						"row": 3
					},
					{
						"reel": 0,
						"row": 5
					},
					{
						"reel": 2,
						"row": 1
					},
					{
						"reel": 2,
						"row": 3
					},
					{
						"reel": 3,
						"row": 1
					},
					{
						"reel": 3,
						"row": 4
					},
					{
						"reel": 4,
						"row": 5
					},
					{
						"reel": 5,
						"row": 3
					}
				]
			},
			{
				"index": 39,
				"type": "temperatureUpdate",
				"temperature": 13
			},
			{
				"index": 40,
				"type": "boardMultiplierInfo",
				"multInfo": {
					"positions": [
						{
							"reel": 2,
							"row": 4,
							"multiplier": 4
						},
						{
							"reel": 3,
							"row": 2,
							"multiplier": 4
						}
					]
				},
				"winInfo": {
					"tumbleWin": 450,
					"boardMult": 8,
					"appliedMult": 13,
					"totalWin": 5850
				}
			},
			{
				"index": 41,
				"type": "updateTumbleWin",
				"amount": 5850
			},
			{
				"index": 42,
				"type": "setWin",
				"amount": 5850,
				"winLevel": 8
			},
			{
				"index": 43,
				"type": "setTotalWin",
				"amount": 16250
			},
			{
				"index": 44,
				"type": "updateFreeSpin",
				"amount": 4,
				"total": 10
			},
			{
				"index": 45,
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
							"name": "M",
							"multiplier": 3
						},
						{
							"name": "L1"
						},
						{
							"name": "L1"
						},
						{
							"name": "H3"
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
							"name": "L1"
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
							"name": "L4"
						}
					],
					[
						{
							"name": "L5"
						},
						{
							"name": "H2"
						},
						{
							"name": "H2"
						},
						{
							"name": "L3"
						},
						{
							"name": "L3"
						},
						{
							"name": "H4"
						},
						{
							"name": "M",
							"multiplier": 2
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
							"name": "L5"
						},
						{
							"name": "H4"
						},
						{
							"name": "L3"
						},
						{
							"name": "L3"
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
							"name": "H4"
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
							"name": "L5"
						}
					],
					[
						{
							"name": "L5"
						},
						{
							"name": "H2"
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
							"name": "L1"
						}
					]
				],
				"paddingPositions": [
					83,
					266,
					201,
					189,
					250,
					15
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
				"type": "mutation",
				"sourceSymbol": "L5",
				"targetSymbol": "H4",
				"positions": [
					{
						"reel": 1,
						"row": 1
					},
					{
						"reel": 1,
						"row": 3
					},
					{
						"reel": 3,
						"row": 2
					}
				]
			},
			{
				"index": 47,
				"type": "winInfo",
				"totalWin": 50,
				"wins": [
					{
						"symbol": "L3",
						"win": 50,
						"positions": [
							{
								"reel": 0,
								"row": 1
							},
							{
								"reel": 1,
								"row": 4
							},
							{
								"reel": 2,
								"row": 3
							},
							{
								"reel": 2,
								"row": 4
							},
							{
								"reel": 3,
								"row": 1
							},
							{
								"reel": 3,
								"row": 4
							},
							{
								"reel": 3,
								"row": 5
							},
							{
								"reel": 4,
								"row": 1
							}
						],
						"meta": {
							"globalMult": 1,
							"clusterMult": 1,
							"winWithoutMult": 50,
							"overlay": {
								"reel": 3,
								"row": 4
							}
						}
					}
				]
			},
			{
				"index": 48,
				"type": "updateTumbleWin",
				"amount": 50
			},
			{
				"index": 49,
				"type": "tumbleBoard",
				"newSymbols": [
					[
						{
							"name": "L2"
						}
					],
					[
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
							"multiplier": 3
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
							"name": "L1"
						}
					],
					[
						{
							"name": "L3"
						}
					],
					[]
				],
				"explodingSymbols": [
					{
						"reel": 0,
						"row": 1
					},
					{
						"reel": 1,
						"row": 4
					},
					{
						"reel": 2,
						"row": 3
					},
					{
						"reel": 2,
						"row": 4
					},
					{
						"reel": 3,
						"row": 1
					},
					{
						"reel": 3,
						"row": 4
					},
					{
						"reel": 3,
						"row": 5
					},
					{
						"reel": 4,
						"row": 1
					}
				]
			},
			{
				"index": 50,
				"type": "temperatureUpdate",
				"temperature": 19
			},
			{
				"index": 51,
				"type": "boardMultiplierInfo",
				"multInfo": {
					"positions": [
						{
							"reel": 0,
							"row": 2,
							"multiplier": 3
						},
						{
							"reel": 2,
							"row": 1,
							"multiplier": 3
						}
					]
				},
				"winInfo": {
					"tumbleWin": 50,
					"boardMult": 6,
					"appliedMult": 19,
					"totalWin": 950
				}
			},
			{
				"index": 52,
				"type": "updateTumbleWin",
				"amount": 950
			},
			{
				"index": 53,
				"type": "setWin",
				"amount": 950,
				"winLevel": 5
			},
			{
				"index": 54,
				"type": "setTotalWin",
				"amount": 17200
			},
			{
				"index": 55,
				"type": "updateFreeSpin",
				"amount": 5,
				"total": 10
			},
			{
				"index": 56,
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
							"name": "H2"
						},
						{
							"name": "L3"
						},
						{
							"name": "L3"
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
							"name": "L5"
						},
						{
							"name": "M",
							"multiplier": 2
						},
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
							"name": "L2"
						}
					],
					[
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
							"name": "H4"
						},
						{
							"name": "L3"
						},
						{
							"name": "L2"
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
							"name": "H3"
						},
						{
							"name": "H4"
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
							"name": "H3"
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
							"name": "H3"
						},
						{
							"name": "S",
							"scatter": true
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
							"name": "L3"
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
							"name": "H1"
						},
						{
							"name": "H2"
						},
						{
							"name": "H2"
						}
					]
				],
				"paddingPositions": [
					257,
					116,
					6,
					102,
					276,
					280
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
				"index": 57,
				"type": "mutation",
				"sourceSymbol": "L5",
				"targetSymbol": "H3",
				"positions": [
					{
						"reel": 1,
						"row": 1
					},
					{
						"reel": 3,
						"row": 4
					},
					{
						"reel": 4,
						"row": 5
					}
				]
			},
			{
				"index": 58,
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
								"reel": 1,
								"row": 4
							},
							{
								"reel": 1,
								"row": 5
							},
							{
								"reel": 2,
								"row": 2
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
								"row": 2
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
								"reel": 4,
								"row": 4
							}
						}
					}
				]
			},
			{
				"index": 59,
				"type": "updateTumbleWin",
				"amount": 40
			},
			{
				"index": 60,
				"type": "tumbleBoard",
				"newSymbols": [
					[
						{
							"name": "L2"
						}
					],
					[
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
							"name": "L4"
						},
						{
							"name": "L2"
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
						"reel": 1,
						"row": 4
					},
					{
						"reel": 1,
						"row": 5
					},
					{
						"reel": 2,
						"row": 2
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
						"row": 2
					},
					{
						"reel": 5,
						"row": 3
					}
				]
			},
			{
				"index": 61,
				"type": "winInfo",
				"totalWin": 50,
				"wins": [
					{
						"symbol": "L3",
						"win": 50,
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
								"row": 4
							},
							{
								"reel": 0,
								"row": 5
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
								"reel": 3,
								"row": 5
							},
							{
								"reel": 5,
								"row": 3
							}
						],
						"meta": {
							"globalMult": 1,
							"clusterMult": 1,
							"winWithoutMult": 50,
							"overlay": {
								"reel": 2,
								"row": 4
							}
						}
					}
				]
			},
			{
				"index": 62,
				"type": "updateTumbleWin",
				"amount": 90
			},
			{
				"index": 63,
				"type": "tumbleBoard",
				"newSymbols": [
					[
						{
							"name": "L5"
						},
						{
							"name": "H2"
						},
						{
							"name": "L3"
						},
						{
							"name": "H2"
						}
					],
					[
						{
							"name": "L1"
						}
					],
					[
						{
							"name": "L4"
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
						"row": 2
					},
					{
						"reel": 0,
						"row": 4
					},
					{
						"reel": 0,
						"row": 5
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
						"reel": 3,
						"row": 5
					},
					{
						"reel": 5,
						"row": 3
					}
				]
			},
			{
				"index": 64,
				"type": "temperatureUpdate",
				"temperature": 21
			},
			{
				"index": 65,
				"type": "boardMultiplierInfo",
				"multInfo": {
					"positions": [
						{
							"reel": 1,
							"row": 4,
							"multiplier": 2
						}
					]
				},
				"winInfo": {
					"tumbleWin": 90,
					"boardMult": 2,
					"appliedMult": 21,
					"totalWin": 1890
				}
			},
			{
				"index": 66,
				"type": "updateTumbleWin",
				"amount": 1890
			},
			{
				"index": 67,
				"type": "setWin",
				"amount": 1890,
				"winLevel": 6
			},
			{
				"index": 68,
				"type": "setTotalWin",
				"amount": 19090
			},
			{
				"index": 69,
				"type": "updateFreeSpin",
				"amount": 6,
				"total": 10
			},
			{
				"index": 70,
				"type": "reveal",
				"board": [
					[
						{
							"name": "L3"
						},
						{
							"name": "L5"
						},
						{
							"name": "H2"
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
							"name": "H3"
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
							"name": "L1"
						},
						{
							"name": "L5"
						},
						{
							"name": "H3"
						},
						{
							"name": "H4"
						},
						{
							"name": "L5"
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
							"name": "L2"
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
							"name": "L1"
						},
						{
							"name": "L5"
						},
						{
							"name": "L3"
						},
						{
							"name": "H4"
						},
						{
							"name": "L1"
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
							"name": "L5"
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
							"name": "L5"
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
							"name": "L4"
						},
						{
							"name": "M",
							"multiplier": 15
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
						}
					]
				],
				"paddingPositions": [
					180,
					235,
					137,
					280,
					2,
					196
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
				"index": 71,
				"type": "mutation",
				"sourceSymbol": "L5",
				"targetSymbol": "H4",
				"positions": [
					{
						"reel": 0,
						"row": 1
					},
					{
						"reel": 0,
						"row": 3
					},
					{
						"reel": 1,
						"row": 3
					},
					{
						"reel": 2,
						"row": 3
					},
					{
						"reel": 2,
						"row": 4
					},
					{
						"reel": 3,
						"row": 3
					},
					{
						"reel": 4,
						"row": 2
					}
				]
			},
			{
				"index": 72,
				"type": "winInfo",
				"totalWin": 500,
				"wins": [
					{
						"symbol": "H4",
						"win": 500,
						"positions": [
							{
								"reel": 0,
								"row": 1
							},
							{
								"reel": 0,
								"row": 3
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
								"row": 3
							},
							{
								"reel": 2,
								"row": 4
							},
							{
								"reel": 3,
								"row": 3
							},
							{
								"reel": 3,
								"row": 5
							},
							{
								"reel": 4,
								"row": 2
							},
							{
								"reel": 5,
								"row": 5
							}
						],
						"meta": {
							"globalMult": 1,
							"clusterMult": 1,
							"winWithoutMult": 500,
							"overlay": {
								"reel": 3,
								"row": 3
							}
						}
					}
				]
			},
			{
				"index": 73,
				"type": "updateTumbleWin",
				"amount": 500
			},
			{
				"index": 74,
				"type": "tumbleBoard",
				"newSymbols": [
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
							"name": "M",
							"multiplier": 3
						},
						{
							"name": "H2"
						}
					],
					[
						{
							"name": "L2"
						},
						{
							"name": "H4"
						}
					],
					[
						{
							"name": "L5"
						},
						{
							"name": "H4"
						}
					],
					[
						{
							"name": "H3"
						}
					],
					[
						{
							"name": "L5"
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
						"row": 3
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
						"row": 3
					},
					{
						"reel": 2,
						"row": 4
					},
					{
						"reel": 3,
						"row": 3
					},
					{
						"reel": 3,
						"row": 5
					},
					{
						"reel": 4,
						"row": 2
					},
					{
						"reel": 5,
						"row": 5
					}
				]
			},
			{
				"index": 75,
				"type": "temperatureUpdate",
				"temperature": 36
			},
			{
				"index": 76,
				"type": "boardMultiplierInfo",
				"multInfo": {
					"positions": [
						{
							"reel": 5,
							"row": 4,
							"multiplier": 15
						}
					]
				},
				"winInfo": {
					"tumbleWin": 500,
					"boardMult": 15,
					"appliedMult": 36,
					"totalWin": 18000
				}
			},
			{
				"index": 77,
				"type": "updateTumbleWin",
				"amount": 18000
			},
			{
				"index": 78,
				"type": "setWin",
				"amount": 18000,
				"winLevel": 9
			},
			{
				"index": 79,
				"type": "setTotalWin",
				"amount": 37090
			},
			{
				"index": 80,
				"type": "updateFreeSpin",
				"amount": 7,
				"total": 10
			},
			{
				"index": 81,
				"type": "reveal",
				"board": [
					[
						{
							"name": "H3"
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
							"name": "L3"
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
							"name": "L5"
						},
						{
							"name": "L4"
						},
						{
							"name": "M",
							"multiplier": 12
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
							"name": "H4"
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
							"name": "L5"
						},
						{
							"name": "L3"
						},
						{
							"name": "L4"
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
							"name": "L4"
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
							"name": "L5"
						},
						{
							"name": "H4"
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
							"name": "H4"
						},
						{
							"name": "H3"
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
							"name": "L4"
						},
						{
							"name": "H1"
						},
						{
							"name": "H2"
						},
						{
							"name": "H2"
						},
						{
							"name": "H4"
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
					218,
					28,
					246,
					186,
					291,
					283
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
				"index": 82,
				"type": "mutation",
				"sourceSymbol": "L5",
				"targetSymbol": "H4",
				"positions": [
					{
						"reel": 0,
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
						"reel": 3,
						"row": 5
					},
					{
						"reel": 4,
						"row": 1
					}
				]
			},
			{
				"index": 83,
				"type": "winInfo",
				"totalWin": 150,
				"wins": [
					{
						"symbol": "H4",
						"win": 150,
						"positions": [
							{
								"reel": 0,
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
								"reel": 3,
								"row": 5
							},
							{
								"reel": 4,
								"row": 1
							},
							{
								"reel": 4,
								"row": 2
							},
							{
								"reel": 4,
								"row": 3
							},
							{
								"reel": 5,
								"row": 4
							}
						],
						"meta": {
							"globalMult": 1,
							"clusterMult": 1,
							"winWithoutMult": 150,
							"overlay": {
								"reel": 4,
								"row": 3
							}
						}
					}
				]
			},
			{
				"index": 84,
				"type": "updateTumbleWin",
				"amount": 150
			},
			{
				"index": 85,
				"type": "tumbleBoard",
				"newSymbols": [
					[
						{
							"name": "L5"
						}
					],
					[
						{
							"name": "H4"
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
							"name": "H3"
						}
					],
					[
						{
							"name": "L5"
						},
						{
							"name": "H1"
						},
						{
							"name": "M",
							"multiplier": 3
						}
					],
					[
						{
							"name": "L4"
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
						"reel": 3,
						"row": 5
					},
					{
						"reel": 4,
						"row": 1
					},
					{
						"reel": 4,
						"row": 2
					},
					{
						"reel": 4,
						"row": 3
					},
					{
						"reel": 5,
						"row": 4
					}
				]
			},
			{
				"index": 86,
				"type": "winInfo",
				"totalWin": 40,
				"wins": [
					{
						"symbol": "L4",
						"win": 40,
						"positions": [
							{
								"reel": 1,
								"row": 2
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
								"reel": 3,
								"row": 1
							},
							{
								"reel": 3,
								"row": 2
							},
							{
								"reel": 3,
								"row": 4
							},
							{
								"reel": 4,
								"row": 5
							},
							{
								"reel": 5,
								"row": 1
							}
						],
						"meta": {
							"globalMult": 1,
							"clusterMult": 1,
							"winWithoutMult": 40,
							"overlay": {
								"reel": 3,
								"row": 4
							}
						}
					}
				]
			},
			{
				"index": 87,
				"type": "updateTumbleWin",
				"amount": 190
			},
			{
				"index": 88,
				"type": "tumbleBoard",
				"newSymbols": [
					[],
					[
						{
							"name": "H2"
						},
						{
							"name": "H4"
						},
						{
							"name": "H4"
						}
					],
					[
						{
							"name": "L2"
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
							"name": "L3"
						}
					],
					[
						{
							"name": "L4"
						}
					],
					[
						{
							"name": "L4"
						}
					]
				],
				"explodingSymbols": [
					{
						"reel": 1,
						"row": 2
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
						"reel": 3,
						"row": 1
					},
					{
						"reel": 3,
						"row": 2
					},
					{
						"reel": 3,
						"row": 4
					},
					{
						"reel": 4,
						"row": 5
					},
					{
						"reel": 5,
						"row": 1
					}
				]
			},
			{
				"index": 89,
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
								"reel": 0,
								"row": 5
							},
							{
								"reel": 2,
								"row": 2
							},
							{
								"reel": 2,
								"row": 4
							},
							{
								"reel": 3,
								"row": 2
							},
							{
								"reel": 3,
								"row": 5
							},
							{
								"reel": 4,
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
								"reel": 2,
								"row": 4
							}
						}
					}
				]
			},
			{
				"index": 90,
				"type": "updateTumbleWin",
				"amount": 240
			},
			{
				"index": 91,
				"type": "tumbleBoard",
				"newSymbols": [
					[
						{
							"name": "H2"
						},
						{
							"name": "L4"
						}
					],
					[],
					[
						{
							"name": "L3"
						},
						{
							"name": "M",
							"multiplier": 3
						}
					],
					[
						{
							"name": "L5"
						},
						{
							"name": "L4"
						}
					],
					[
						{
							"name": "H4"
						}
					],
					[
						{
							"name": "L3"
						}
					]
				],
				"explodingSymbols": [
					{
						"reel": 0,
						"row": 4
					},
					{
						"reel": 0,
						"row": 5
					},
					{
						"reel": 2,
						"row": 2
					},
					{
						"reel": 2,
						"row": 4
					},
					{
						"reel": 3,
						"row": 2
					},
					{
						"reel": 3,
						"row": 5
					},
					{
						"reel": 4,
						"row": 4
					},
					{
						"reel": 5,
						"row": 5
					}
				]
			},
			{
				"index": 92,
				"type": "temperatureUpdate",
				"temperature": 54
			},
			{
				"index": 93,
				"type": "boardMultiplierInfo",
				"multInfo": {
					"positions": [
						{
							"reel": 1,
							"row": 5,
							"multiplier": 12
						},
						{
							"reel": 2,
							"row": 1,
							"multiplier": 3
						},
						{
							"reel": 4,
							"row": 4,
							"multiplier": 3
						}
					]
				},
				"winInfo": {
					"tumbleWin": 240,
					"boardMult": 18,
					"appliedMult": 54,
					"totalWin": 12960
				}
			},
			{
				"index": 94,
				"type": "updateTumbleWin",
				"amount": 12960
			},
			{
				"index": 95,
				"type": "setWin",
				"amount": 12960,
				"winLevel": 9
			},
			{
				"index": 96,
				"type": "setTotalWin",
				"amount": 50050
			},
			{
				"index": 97,
				"type": "updateFreeSpin",
				"amount": 8,
				"total": 10
			},
			{
				"index": 98,
				"type": "reveal",
				"board": [
					[
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
							"name": "H3"
						},
						{
							"name": "H3"
						},
						{
							"name": "H2"
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
							"name": "L5"
						},
						{
							"name": "L2"
						},
						{
							"name": "L1"
						},
						{
							"name": "L5"
						},
						{
							"name": "H3"
						},
						{
							"name": "H4"
						}
					],
					[
						{
							"name": "L3"
						},
						{
							"name": "H4"
						},
						{
							"name": "L4"
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
							"name": "H2"
						}
					],
					[
						{
							"name": "H2"
						},
						{
							"name": "H3"
						},
						{
							"name": "L4"
						},
						{
							"name": "L5"
						},
						{
							"name": "M",
							"multiplier": 2
						},
						{
							"name": "H1"
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
							"name": "L4"
						},
						{
							"name": "L4"
						},
						{
							"name": "H1"
						},
						{
							"name": "H2"
						},
						{
							"name": "H2"
						},
						{
							"name": "H4"
						}
					]
				],
				"paddingPositions": [
					169,
					234,
					14,
					117,
					90,
					281
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
				"index": 99,
				"type": "mutation",
				"sourceSymbol": "L1",
				"targetSymbol": "H4",
				"positions": [
					{
						"reel": 0,
						"row": 1
					},
					{
						"reel": 1,
						"row": 3
					},
					{
						"reel": 4,
						"row": 5
					}
				]
			},
			{
				"index": 100,
				"type": "setTotalWin",
				"amount": 50050
			},
			{
				"index": 101,
				"type": "updateFreeSpin",
				"amount": 9,
				"total": 10
			},
			{
				"index": 102,
				"type": "reveal",
				"board": [
					[
						{
							"name": "L1"
						},
						{
							"name": "L4"
						},
						{
							"name": "L1"
						},
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
							"name": "L1"
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
							"name": "H1"
						},
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
							"name": "L2"
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
							"name": "L3"
						},
						{
							"name": "L5"
						},
						{
							"name": "L2"
						},
						{
							"name": "L3"
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
							"name": "L4"
						},
						{
							"name": "L5"
						},
						{
							"name": "H3"
						},
						{
							"name": "H4"
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
							"name": "L5"
						},
						{
							"name": "L2"
						},
						{
							"name": "H2"
						},
						{
							"name": "M",
							"multiplier": 2
						},
						{
							"name": "L5"
						},
						{
							"name": "L4"
						},
						{
							"name": "H2"
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
							"name": "L4"
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
							"name": "H4"
						}
					]
				],
				"paddingPositions": [
					130,
					16,
					36,
					42,
					8,
					231
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
				"index": 103,
				"type": "mutation",
				"sourceSymbol": "L3",
				"targetSymbol": "H3",
				"positions": [
					{
						"reel": 2,
						"row": 2
					},
					{
						"reel": 2,
						"row": 5
					},
					{
						"reel": 5,
						"row": 1
					}
				]
			},
			{
				"index": 104,
				"type": "setTotalWin",
				"amount": 50050
			},
			{
				"index": 105,
				"type": "freeSpinEnd",
				"amount": 40050,
				"winLevel": 7
			},
			{
				"index": 106,
				"type": "finalWin",
				"amount": 50050
			}
		],
		"criteria": "superfreegame",
		"baseGameWins": 100.0,
		"freeGameWins": 400.5
	}
];
