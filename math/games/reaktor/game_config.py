"""REAKTOR - game configuration.

6x5 scatter-pays + tumble game with fuel-rod multipliers,
persistent 'Reactor Temperature' multiplier during free spins,
and a Super Bonus featuring guaranteed rods + symbol Mutation.
"""

import os
from src.config.config import Config
from src.config.distributions import Distribution
from src.config.betmode import BetMode


class GameConfig(Config):
    """Load all game specific parameters and elements"""

    _instance = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
        return cls._instance

    def __init__(self):
        super().__init__()
        self.game_id = "reaktor"
        self.game_name = "reaktor"
        self.provider_numer = 0
        self.working_name = "REAKTOR (Meltdown)"
        self.wincap = 10000.0
        self.win_type = "scatter"
        self.rtp = 0.965
        self.construct_paths()

        # Game Dimensions
        self.num_reels = 6
        self.num_rows = [5] * self.num_reels

        # Paytable: pays anywhere, 3 tiers (8-9, 10-11, 12+)
        t1, t2, t3 = (8, 9), (10, 11), (12, 36)
        pay_group = {
            (t1, "H1"): 10.0,
            (t2, "H1"): 25.0,
            (t3, "H1"): 50.0,
            (t1, "H2"): 2.5,
            (t2, "H2"): 10.0,
            (t3, "H2"): 25.0,
            (t1, "H3"): 2.0,
            (t2, "H3"): 5.0,
            (t3, "H3"): 15.0,
            (t1, "H4"): 1.5,
            (t2, "H4"): 5.0,
            (t3, "H4"): 12.0,
            (t1, "L1"): 1.0,
            (t2, "L1"): 2.5,
            (t3, "L1"): 10.0,
            (t1, "L2"): 0.8,
            (t2, "L2"): 2.0,
            (t3, "L2"): 8.0,
            (t1, "L3"): 0.5,
            (t2, "L3"): 1.5,
            (t3, "L3"): 5.0,
            (t1, "L4"): 0.4,
            (t2, "L4"): 1.2,
            (t3, "L4"): 4.0,
            (t1, "L5"): 0.25,
            (t2, "L5"): 1.0,
            (t3, "L5"): 3.0,
        }
        self.paytable = self.convert_range_table(pay_group)

        # Direct scatter pays, awarded on basegame trigger boards (4+ scatters)
        self.scatter_pay_table = {4: 3.0, 5: 5.0, 6: 100.0}

        self.include_padding = True
        self.special_symbols = {"wild": ["W"], "scatter": ["S"], "multiplier": ["M"]}

        # Basegame: 4+ scatters trigger 10 free spins (6 scatters -> Super Bonus).
        # Freegame: 3+ scatters retrigger.
        self.freespin_triggers = {
            self.basegame_type: {4: 10, 5: 10, 6: 10},
            self.freegame_type: {3: 5, 4: 8, 5: 10, 6: 15},
        }
        self.anticipation_triggers = {
            self.basegame_type: min(self.freespin_triggers[self.basegame_type].keys()) - 1,
            self.freegame_type: min(self.freespin_triggers[self.freegame_type].keys()) - 1,
        }
        # Scatter count at/above which the freegame is a Super Bonus
        self.super_trigger_count = 6
        # Mutation target weights (Super Bonus): low symbol type -> random high symbol
        self.mutation_target_weights = {"H1": 3, "H2": 9, "H3": 33, "H4": 55}
        self.low_symbols = ["L1", "L2", "L3", "L4", "L5"]

        # Reels
        reels = {
            "BR0": "BR0.csv",
            "BRB": "BRB.csv",
            "FR0": "FR0.csv",
            "FRS": "FRS.csv",
            "WCAP": "WCAP.csv",
        }
        self.reels = {}
        for r, f in reels.items():
            self.reels[r] = self.read_reels_csv(os.path.join(self.reels_path, f))

        self.padding_reels[self.basegame_type] = self.reels["BR0"]
        self.padding_reels[self.freegame_type] = self.reels["FR0"]

        # Fuel-rod multiplier value pools
        mult_base = {2: 420, 3: 260, 4: 190, 5: 130, 6: 85, 8: 55, 10: 38, 12: 26,
                     15: 18, 20: 13, 25: 9, 50: 4, 100: 2, 250: 1, 500: 1}
        mult_fs = {2: 340, 3: 210, 4: 160, 5: 120, 6: 90, 8: 65, 10: 50, 12: 36,
                   15: 28, 20: 20, 25: 15, 50: 8, 100: 4, 250: 2, 500: 1}
        mult_super = {2: 400, 3: 250, 4: 180, 5: 120, 6: 80, 8: 55, 10: 40, 12: 28,
                      15: 20, 20: 14, 25: 10, 50: 5, 100: 3, 250: 1, 500: 1, 1000: 1}
        mult_wcap_bonus = {25: 10, 50: 25, 100: 35, 250: 20, 500: 10}
        mult_wcap_super = {50: 15, 100: 30, 250: 30, 500: 15, 1000: 10}

        self.bet_modes = [
            BetMode(
                name="base",
                cost=1.0,
                rtp=self.rtp,
                max_win=self.wincap,
                auto_close_disabled=False,
                is_feature=True,
                is_buybonus=False,
                distributions=[
                    Distribution(
                        criteria="wincap",
                        quota=0.002,
                        win_criteria=self.wincap,
                        conditions={
                            "reel_weights": {
                                self.basegame_type: {"BR0": 1},
                                self.freegame_type: {"FRS": 1, "WCAP": 5},
                            },
                            "mult_values": {
                                self.basegame_type: mult_base,
                                self.freegame_type: mult_wcap_super,
                            },
                            "scatter_triggers": {6: 1},
                            "force_wincap": True,
                            "force_freegame": True,
                        },
                    ),
                    Distribution(
                        criteria="superfreegame",
                        quota=0.04,
                        conditions={
                            "reel_weights": {
                                self.basegame_type: {"BR0": 1},
                                self.freegame_type: {"FRS": 1},
                            },
                            "mult_values": {
                                self.basegame_type: mult_base,
                                self.freegame_type: mult_super,
                            },
                            "scatter_triggers": {6: 1},
                            "force_wincap": False,
                            "force_freegame": True,
                        },
                    ),
                    Distribution(
                        criteria="freegame",
                        quota=0.13,
                        conditions={
                            "reel_weights": {
                                self.basegame_type: {"BR0": 1},
                                self.freegame_type: {"FR0": 1},
                            },
                            "mult_values": {
                                self.basegame_type: mult_base,
                                self.freegame_type: mult_fs,
                            },
                            "scatter_triggers": {4: 8, 5: 2},
                            "force_wincap": False,
                            "force_freegame": True,
                        },
                    ),
                    Distribution(
                        criteria="0",
                        quota=0.3,
                        win_criteria=0.0,
                        conditions={
                            "reel_weights": {self.basegame_type: {"BR0": 1}},
                            "mult_values": {
                                self.basegame_type: mult_base,
                                self.freegame_type: mult_fs,
                            },
                            "force_wincap": False,
                            "force_freegame": False,
                        },
                    ),
                    Distribution(
                        criteria="basegame",
                        quota=0.5,
                        conditions={
                            "reel_weights": {self.basegame_type: {"BR0": 1}},
                            "mult_values": {
                                self.basegame_type: mult_base,
                                self.freegame_type: mult_fs,
                            },
                            "force_wincap": False,
                            "force_freegame": False,
                        },
                    ),
                ],
            ),
            BetMode(
                name="bonushunt",
                cost=1.25,
                rtp=self.rtp,
                max_win=self.wincap,
                auto_close_disabled=False,
                is_feature=True,
                is_buybonus=False,
                distributions=[
                    Distribution(
                        criteria="wincap",
                        quota=0.002,
                        win_criteria=self.wincap,
                        conditions={
                            "reel_weights": {
                                self.basegame_type: {"BRB": 1},
                                self.freegame_type: {"FRS": 1, "WCAP": 5},
                            },
                            "mult_values": {
                                self.basegame_type: mult_base,
                                self.freegame_type: mult_wcap_super,
                            },
                            "scatter_triggers": {6: 1},
                            "force_wincap": True,
                            "force_freegame": True,
                        },
                    ),
                    Distribution(
                        criteria="superfreegame",
                        quota=0.05,
                        conditions={
                            "reel_weights": {
                                self.basegame_type: {"BRB": 1},
                                self.freegame_type: {"FRS": 1},
                            },
                            "mult_values": {
                                self.basegame_type: mult_base,
                                self.freegame_type: mult_super,
                            },
                            "scatter_triggers": {6: 1},
                            "force_wincap": False,
                            "force_freegame": True,
                        },
                    ),
                    Distribution(
                        criteria="freegame",
                        quota=0.2,
                        conditions={
                            "reel_weights": {
                                self.basegame_type: {"BRB": 1},
                                self.freegame_type: {"FR0": 1},
                            },
                            "mult_values": {
                                self.basegame_type: mult_base,
                                self.freegame_type: mult_fs,
                            },
                            "scatter_triggers": {4: 8, 5: 2},
                            "force_wincap": False,
                            "force_freegame": True,
                        },
                    ),
                    Distribution(
                        criteria="0",
                        quota=0.28,
                        win_criteria=0.0,
                        conditions={
                            "reel_weights": {self.basegame_type: {"BRB": 1}},
                            "mult_values": {
                                self.basegame_type: mult_base,
                                self.freegame_type: mult_fs,
                            },
                            "force_wincap": False,
                            "force_freegame": False,
                        },
                    ),
                    Distribution(
                        criteria="basegame",
                        quota=0.45,
                        conditions={
                            "reel_weights": {self.basegame_type: {"BRB": 1}},
                            "mult_values": {
                                self.basegame_type: mult_base,
                                self.freegame_type: mult_fs,
                            },
                            "force_wincap": False,
                            "force_freegame": False,
                        },
                    ),
                ],
            ),
            BetMode(
                name="bonus",
                cost=100.0,
                rtp=self.rtp,
                max_win=self.wincap,
                auto_close_disabled=False,
                is_feature=False,
                is_buybonus=True,
                distributions=[
                    Distribution(
                        criteria="wincap",
                        quota=0.002,
                        win_criteria=self.wincap,
                        conditions={
                            "reel_weights": {
                                self.basegame_type: {"BR0": 1},
                                self.freegame_type: {"FR0": 1, "WCAP": 5},
                            },
                            "mult_values": {
                                self.basegame_type: mult_base,
                                self.freegame_type: mult_wcap_bonus,
                            },
                            "scatter_triggers": {4: 3, 5: 2},
                            "force_wincap": True,
                            "force_freegame": True,
                        },
                    ),
                    Distribution(
                        criteria="freegame",
                        quota=0.998,
                        conditions={
                            "reel_weights": {
                                self.basegame_type: {"BR0": 1},
                                self.freegame_type: {"FR0": 1},
                            },
                            "mult_values": {
                                self.basegame_type: mult_base,
                                self.freegame_type: mult_fs,
                            },
                            "scatter_triggers": {4: 8, 5: 2},
                            "force_wincap": False,
                            "force_freegame": True,
                        },
                    ),
                ],
            ),
            BetMode(
                name="superbonus",
                cost=500.0,
                rtp=self.rtp,
                max_win=self.wincap,
                auto_close_disabled=False,
                is_feature=False,
                is_buybonus=True,
                distributions=[
                    Distribution(
                        criteria="wincap",
                        quota=0.005,
                        win_criteria=self.wincap,
                        conditions={
                            "reel_weights": {
                                self.basegame_type: {"BR0": 1},
                                self.freegame_type: {"FRS": 1, "WCAP": 4},
                            },
                            "mult_values": {
                                self.basegame_type: mult_base,
                                self.freegame_type: mult_wcap_super,
                            },
                            "scatter_triggers": {6: 1},
                            "force_wincap": True,
                            "force_freegame": True,
                        },
                    ),
                    Distribution(
                        criteria="superfreegame",
                        quota=0.995,
                        conditions={
                            "reel_weights": {
                                self.basegame_type: {"BR0": 1},
                                self.freegame_type: {"FRS": 1},
                            },
                            "mult_values": {
                                self.basegame_type: mult_base,
                                self.freegame_type: mult_super,
                            },
                            "scatter_triggers": {6: 1},
                            "force_wincap": False,
                            "force_freegame": True,
                        },
                    ),
                ],
            ),
        ]
