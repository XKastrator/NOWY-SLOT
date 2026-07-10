"""REAKTOR - optimization targets (RTP allocation / hit-rates per bet mode).

RTP allocation (all modes balance to 96.5% of mode cost):
  base:       wincap 0.5% (1/2M), super 6% (1/5000, av ~300x),
              freegame 30% (1/220, av ~66x), basegame 60% (hr ~3.4)
  bonushunt:  ante 1.25x cost, ~2x bonus trigger rate
  bonus:      100x cost, av bonus ~96x, wincap 1/20k
  superbonus: 500x cost, av super ~478x, wincap 1/2000
"""

from optimization_program.optimization_config import (
    ConstructScaling,
    ConstructParameters,
    ConstructFenceBias,
    ConstructConditions,
    verify_optimization_input,
)


class OptimizationSetup:
    """Handle all game mode optimization parameters."""

    def __init__(self, game_config):
        self.game_config = game_config
        self.game_config.opt_params = {
            "base": {
                "conditions": {
                    "wincap": ConstructConditions(rtp=0.005, av_win=10000, search_conditions=10000).return_dict(),
                    "superfreegame": ConstructConditions(
                        rtp=0.06, hr=5000, search_conditions={"kind": 6, "symbol": "scatter"}
                    ).return_dict(),
                    "freegame": ConstructConditions(
                        rtp=0.30, hr=220, search_conditions={"symbol": "scatter"}
                    ).return_dict(),
                    "0": ConstructConditions(rtp=0, av_win=0, search_conditions=0).return_dict(),
                    "basegame": ConstructConditions(hr=3.4, rtp=0.60).return_dict(),
                },
                "scaling": ConstructScaling(
                    [
                        {"criteria": "basegame", "scale_factor": 1.2, "win_range": (1, 2), "probability": 1.0},
                        {"criteria": "basegame", "scale_factor": 1.4, "win_range": (10, 20), "probability": 1.0},
                        {"criteria": "freegame", "scale_factor": 1.2, "win_range": (100, 200), "probability": 1.0},
                        {"criteria": "freegame", "scale_factor": 0.9, "win_range": (4000, 8000), "probability": 1.0},
                    ]
                ).return_dict(),
                "parameters": ConstructParameters(
                    num_show=5000,
                    num_per_fence=10000,
                    min_m2m=5,
                    max_m2m=10,
                    pmb_rtp=1.0,
                    sim_trials=5000,
                    test_spins=[50, 100, 200],
                    test_weights=[0.3, 0.4, 0.3],
                    score_type="rtp",
                    max_trial_dist=15,
                ).return_dict(),
                "distribution_bias": ConstructFenceBias(
                    applied_criteria=["basegame"],
                    bias_ranges=[(3.0, 5.0)],
                    bias_weights=[0.5],
                ).return_dict(),
            },
            "bonushunt": {
                "conditions": {
                    "wincap": ConstructConditions(rtp=0.005, av_win=10000, search_conditions=10000).return_dict(),
                    "superfreegame": ConstructConditions(
                        rtp=0.07, hr=3430, search_conditions={"kind": 6, "symbol": "scatter"}
                    ).return_dict(),
                    "freegame": ConstructConditions(
                        rtp=0.42, hr=110, search_conditions={"symbol": "scatter"}
                    ).return_dict(),
                    "0": ConstructConditions(rtp=0, av_win=0, search_conditions=0).return_dict(),
                    "basegame": ConstructConditions(hr=3.4, rtp=0.47).return_dict(),
                },
                "scaling": ConstructScaling(
                    [
                        {"criteria": "basegame", "scale_factor": 1.2, "win_range": (1, 2), "probability": 1.0},
                        {"criteria": "freegame", "scale_factor": 1.2, "win_range": (100, 200), "probability": 1.0},
                        {"criteria": "freegame", "scale_factor": 0.9, "win_range": (4000, 8000), "probability": 1.0},
                    ]
                ).return_dict(),
                "parameters": ConstructParameters(
                    num_show=5000,
                    num_per_fence=10000,
                    min_m2m=5,
                    max_m2m=10,
                    pmb_rtp=1.0,
                    sim_trials=5000,
                    test_spins=[50, 100, 200],
                    test_weights=[0.3, 0.4, 0.3],
                    score_type="rtp",
                    max_trial_dist=15,
                ).return_dict(),
                "distribution_bias": ConstructFenceBias(
                    applied_criteria=["basegame"],
                    bias_ranges=[(3.0, 5.0)],
                    bias_weights=[0.5],
                ).return_dict(),
            },
            "bonus": {
                "conditions": {
                    "wincap": ConstructConditions(rtp=0.005, av_win=10000, search_conditions=10000).return_dict(),
                    "freegame": ConstructConditions(rtp=0.96, hr="x").return_dict(),
                },
                "scaling": ConstructScaling(
                    [
                        {"criteria": "freegame", "scale_factor": 1.2, "win_range": (50, 100), "probability": 1.0},
                        {"criteria": "freegame", "scale_factor": 0.9, "win_range": (4000, 8000), "probability": 1.0},
                    ]
                ).return_dict(),
                "parameters": ConstructParameters(
                    num_show=5000,
                    num_per_fence=10000,
                    min_m2m=3,
                    max_m2m=8,
                    pmb_rtp=1.0,
                    sim_trials=5000,
                    test_spins=[10, 20, 50],
                    test_weights=[0.6, 0.2, 0.2],
                    score_type="rtp",
                    max_trial_dist=15,
                ).return_dict(),
                "distribution_bias": ConstructFenceBias(
                    applied_criteria=["freegame"],
                    bias_ranges=[(90.0, 150.0)],
                    bias_weights=[0.1],
                ).return_dict(),
            },
            "superbonus": {
                "conditions": {
                    "wincap": ConstructConditions(rtp=0.01, av_win=10000, search_conditions=10000).return_dict(),
                    "superfreegame": ConstructConditions(rtp=0.955, hr="x").return_dict(),
                },
                "scaling": ConstructScaling(
                    [
                        {"criteria": "superfreegame", "scale_factor": 1.2, "win_range": (200, 500), "probability": 1.0},
                        {"criteria": "superfreegame", "scale_factor": 0.9, "win_range": (5000, 9000), "probability": 1.0},
                    ]
                ).return_dict(),
                "parameters": ConstructParameters(
                    num_show=5000,
                    num_per_fence=10000,
                    min_m2m=3,
                    max_m2m=8,
                    pmb_rtp=1.0,
                    sim_trials=5000,
                    test_spins=[10, 20, 50],
                    test_weights=[0.6, 0.2, 0.2],
                    score_type="rtp",
                    max_trial_dist=15,
                ).return_dict(),
                "distribution_bias": ConstructFenceBias(
                    applied_criteria=["superfreegame"],
                    bias_ranges=[(400.0, 700.0)],
                    bias_weights=[0.1],
                ).return_dict(),
            },
        }

        verify_optimization_input(self.game_config, self.game_config.opt_params)
