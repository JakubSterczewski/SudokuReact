import checkSimilarCells from "../helpers/checkSimilarCells";
import checkCorrectness from "../helpers/checkCorrectness";

export default function toggleFocus(state, action) {
  const { squareId, cellId, value, isCheckingCorrectness } = action.payload;
  console.log("Focusing: " + squareId + " " + cellId + " Value: " + value);

  if (
    state.selectedCell.squareId !== squareId ||
    state.selectedCell.cellId !== cellId ||
    state.selectedCell.value !== value
  ) {
    console.log("Square or cell has changed");
    if (
      state.selectedCell.squareId !== null &&
      state.selectedCell.cellId !== null
    ) {
      state.board[state.selectedCell.squareId][
        state.selectedCell.cellId
      ].styles.isSelected = false;
    }

    state.board[squareId][cellId].styles.isSelected = true;

    state.selectedCell = {
      squareId: squareId,
      cellId: cellId,
      value: value,
    };

    console.log("Checking notedValues if includes and should be highlighted");
    for (let i = 0; i < state.board.length; i++) {
      for (let j = 0; j < state.board[i].length; j++) {
        if (state.board[i][j].notedValues.includes(value)) {
          state.board[i][j].highlightNotedValue = value;
        } else {
          state.board[i][j].highlightNotedValue = null;
        }
      }
    }

    if (isCheckingCorrectness) {
      checkCorrectness(state, squareId, cellId, value);
    }

    checkSimilarCells(state);
  } else {
    console.log("Square or cell hasn't changed");
  }
}
