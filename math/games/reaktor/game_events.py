"""Custom book events for REAKTOR."""

FUEL_ROD_INFO = "boardMultiplierInfo"
TEMPERATURE_UPDATE = "temperatureUpdate"
MUTATION = "mutation"
SCATTER_PAY_INFO = "scatterPayInfo"


def _padded_positions(gamestate, positions):
    """Offset row indices when board padding is included."""
    offset = 1 if gamestate.config.include_padding else 0
    return [{**p, "row": p["row"] + offset} for p in positions]


def fuel_rod_event(gamestate, board_mult: int, applied_mult: int, mult_info: list,
                   base_win: float, updated_win: float) -> None:
    """End-of-tumble-sequence fuel rod application.

    board_mult: sum of rod values on the final board.
    applied_mult: multiplier actually applied to the sequence win
    (equals board_mult in the basegame, reactor Temperature in the freegame).
    """
    positions = _padded_positions(
        gamestate,
        [{"reel": m["reel"], "row": m["row"], "multiplier": m["value"]} for m in mult_info],
    )
    event = {
        "index": len(gamestate.book.events),
        "type": FUEL_ROD_INFO,
        "multInfo": {"positions": positions},
        "winInfo": {
            "tumbleWin": int(round(min(base_win, gamestate.config.wincap) * 100)),
            "boardMult": board_mult,
            "appliedMult": applied_mult,
            "totalWin": int(round(min(updated_win, gamestate.config.wincap) * 100)),
        },
    }
    gamestate.book.add_event(event)


def temperature_event(gamestate, temperature: int) -> None:
    """Reactor Temperature (persistent freegame multiplier) update."""
    event = {
        "index": len(gamestate.book.events),
        "type": TEMPERATURE_UPDATE,
        "temperature": temperature,
    }
    gamestate.book.add_event(event)


def mutation_event(gamestate, source_symbol: str, target_symbol: str, positions: list) -> None:
    """Super Bonus: all instances of a low symbol mutate into a high symbol."""
    event = {
        "index": len(gamestate.book.events),
        "type": MUTATION,
        "sourceSymbol": source_symbol,
        "targetSymbol": target_symbol,
        "positions": _padded_positions(gamestate, positions),
    }
    gamestate.book.add_event(event)


def scatter_pay_event(gamestate, win: float, positions: list) -> None:
    """Direct scatter payout on a 4+ scatter trigger board."""
    event = {
        "index": len(gamestate.book.events),
        "type": SCATTER_PAY_INFO,
        "win": int(round(min(win, gamestate.config.wincap) * 100)),
        "positions": _padded_positions(gamestate, positions),
    }
    gamestate.book.add_event(event)
