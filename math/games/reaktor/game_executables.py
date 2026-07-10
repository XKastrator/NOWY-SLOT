"""REAKTOR - game specific executable actions."""

from copy import copy
import random

from game_calculations import GameCalculations
from src.calculations.scatter import Scatter
from src.calculations.statistics import get_random_outcome
from game_events import (
    fuel_rod_event,
    temperature_event,
    mutation_event,
    scatter_pay_event,
)
from src.events.events import (
    set_win_event,
    set_total_event,
    update_tumble_win_event,
)


class GameExecutables(GameCalculations):
    """Game specific executable functions."""

    def update_freespin_amount(self, scatter_key: str = "scatter") -> None:
        """Flag Super Bonus entry (6+ scatters on the triggering board)."""
        if self.gametype == self.config.basegame_type:
            self.super_active = (
                self.count_special_symbols(scatter_key) >= self.config.super_trigger_count
            )
        super().update_freespin_amount(scatter_key)

    def set_scatter_pay(self, scatter_key: str = "scatter") -> None:
        """Direct scatter payout on basegame trigger boards (4+ scatters)."""
        if self.gametype != self.config.basegame_type:
            return
        count = self.count_special_symbols(scatter_key)
        if count >= min(self.config.scatter_pay_table.keys()):
            win = self.config.scatter_pay_table[min(count, max(self.config.scatter_pay_table.keys()))]
            self.scatter_pay_win = win
            self.win_manager.update_spinwin(win)
            scatter_pay_event(self, win, self.get_scatter_positions(scatter_key))

    def get_scatterpays_update_wins(self) -> None:
        """Evaluate pay-anywhere wins; board 'explode' attributes assigned in-place."""
        self.win_data = Scatter.get_scatterpay_wins(
            self.config, self.board, global_multiplier=self.global_multiplier
        )
        Scatter.record_scatter_wins(self)
        self.win_manager.tumble_win = self.win_data["totalWin"]
        self.win_manager.update_spinwin(self.win_data["totalWin"])

    def set_end_tumble_event(self) -> None:
        """Apply fuel-rod multipliers once all tumbling has finished.

        Basegame: sequence win is multiplied by the sum of rods on the board.
        Freegame: rod sum is added to the persistent reactor Temperature and
        the sequence win is multiplied by the full Temperature (GoO-style
        additive accumulation). Direct scatter pays are excluded from
        multiplication.
        """
        board_mult, mult_info = self.get_board_multipliers()
        tumble_win = copy(self.win_manager.spin_win) - self.scatter_pay_win
        if tumble_win > 0 and board_mult > 1:
            if self.gametype == self.config.freegame_type:
                self.temperature += board_mult
                temperature_event(self, self.temperature)
                applied_mult = self.temperature
            else:
                applied_mult = board_mult
            updated_win = tumble_win * applied_mult + self.scatter_pay_win
            self.win_manager.set_spin_win(updated_win)
            fuel_rod_event(self, board_mult, applied_mult, mult_info, tumble_win, updated_win)
            update_tumble_win_event(self)
            self.evaluate_wincap()

        if self.win_manager.spin_win > 0:
            set_win_event(self)
        set_total_event(self)

    def ensure_fuel_rod(self, multiplier_key: str = "multiplier", scatter_key: str = "scatter") -> None:
        """Super Bonus guarantee: at least one fuel rod on every reveal.

        Called before the reveal event is emitted, so an injected rod is
        indistinguishable from a naturally landed one.
        """
        if len(self.special_syms_on_board[multiplier_key]) > 0:
            return
        candidates = [
            (reel, row)
            for reel, _ in enumerate(self.board)
            for row, _ in enumerate(self.board[reel])
            if not self.board[reel][row].name
            in self.config.special_symbols[scatter_key] + self.config.special_symbols[multiplier_key]
        ]
        reel, row = random.choice(candidates)
        self.board[reel][row] = self.create_symbol("M")
        self.get_special_symbols_on_board()

    def apply_mutation(self) -> None:
        """Super Bonus: mutate all instances of one low symbol into a high symbol."""
        counts = {}
        for reel, _ in enumerate(self.board):
            for row, _ in enumerate(self.board[reel]):
                name = self.board[reel][row].name
                if name in self.config.low_symbols:
                    counts.setdefault(name, []).append({"reel": reel, "row": row})
        if not counts:
            return
        source = random.choice(sorted(counts.keys()))
        target = get_random_outcome(self.config.mutation_target_weights)
        positions = counts[source]
        for p in positions:
            self.board[p["reel"]][p["row"]] = self.create_symbol(target)
        mutation_event(self, source, target, positions)

    def update_freespin(self) -> None:
        """Reset per-spin values before a freegame reveal."""
        super().update_freespin()
        self.scatter_pay_win = 0.0
        self.win_data = {}
