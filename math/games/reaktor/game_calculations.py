"""REAKTOR - board calculations."""

from src.executables.executables import Executables


class GameCalculations(Executables):
    """Game specific calculations for REAKTOR."""

    def get_board_multipliers(self, multiplier_key: str = "multiplier") -> tuple:
        """Sum fuel-rod multiplier values present on the board."""
        board_mult = 0
        mult_info = []
        for reel, _ in enumerate(self.board):
            for row, _ in enumerate(self.board[reel]):
                if self.board[reel][row].check_attribute(multiplier_key):
                    board_mult += self.board[reel][row].get_attribute(multiplier_key)
                    mult_info.append(
                        {"reel": reel, "row": row, "value": self.board[reel][row].get_attribute(multiplier_key)}
                    )

        return max(1, board_mult), mult_info

    def get_scatter_positions(self, scatter_key: str = "scatter") -> list:
        """Return positions of all scatter symbols on the board."""
        return [dict(p) for p in self.special_syms_on_board[scatter_key]]
