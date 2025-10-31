import isPeerCell from "./isPeerCell";

export default function checkSimilarCells(state) {
  for (let i = 0; i < state.board.length; i++) {
    for (let j = 0; j < state.board[i].length; j++) {
      const isTheSameValue =
        (state.selectedCell.value === state.board[i][j].value &&
          state.board[i][j].value !== 0) ||
        (state.selectedCell.value === state.board[i][j].initialValue &&
          state.board[i][j].initialValue !== 0);

      if (!isTheSameValue) {
        state.board[i][j].styles.isSimilar = false;
      }
      if (
        state.board[i][j].styles.isSelected &&
        (state.selectedCell.squareId !== i || state.selectedCell.cellId !== j)
      ) {
        state.board[i][j].styles.isSelected = false;
      }
      if (isTheSameValue && !state.board[i][j].styles.isSimilar) {
        state.board[i][j].styles.isSimilar = true;
      } else if (
        state.board[i][j].styles.isCorrect &&
        !state.board[i][j].styles.isColiding &&
        !state.board[i][j].styles.isSimilar
      ) {
        if (isPeerCell(state.selectedCell, { squareId: i, cellId: j })) {
          state.board[i][j].styles.isAround = true;
        } else {
          state.board[i][j].styles.isAround = false;
        }
      }
    }
  }
}
