"""REAKTOR - state overrides."""

from game_executables import *
from src.calculations.statistics import get_random_outcome


class GameStateOverride(GameExecutables):
    """Override and extend universal state.py functions for REAKTOR."""

    def reset_book(self):
        super().reset_book()
        self.tumble_win = 0
        self.scatter_pay_win = 0.0
        self.temperature = 0
        self.super_active = False
        self.global_multiplier = 1

    def reset_fs_spin(self):
        super().reset_fs_spin()
        # Reactor Temperature persists across free spins; reset only on entry
        self.temperature = 0
        self.global_multiplier = 1

    def assign_special_sym_function(self):
        self.special_symbol_functions = {"M": [self.assign_mult_property]}

    def assign_mult_property(self, symbol) -> None:
        """Assign fuel-rod value from the current distribution's value pool."""
        multiplier_value = get_random_outcome(
            self.get_current_distribution_conditions()["mult_values"][self.gametype]
        )
        symbol.assign_attribute({"multiplier": multiplier_value})

    def check_game_repeat(self):
        """Verify final win matches required betmode conditions."""
        if self.repeat is False:
            win_criteria = self.get_current_betmode_distributions().get_win_criteria()
            if win_criteria is not None and self.final_win != win_criteria:
                self.repeat = True
