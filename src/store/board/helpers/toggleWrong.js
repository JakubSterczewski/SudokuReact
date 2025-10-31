import isPeerCell from "./isPeerCell";
import checkColiding from "./checkColiding";
import isCorrectValue from "./isCorrectValue";

export default function toggleWrong(state, action) {
  const squareId = action.payload.squareId;
  const cellId = action.payload.cellId;
  const valueEntered = action.payload.val;

  state.board[squareId][cellId].styles = {
    ...state.board[squareId][cellId].styles,
    isCorrect: false,
  };

  for (let a = 0; a < state.board.length; a++) {
    for (let b = 0; b < state.board[a].length; b++) {
      const peerCell = { squareId: a, cellId: b };
      if (isPeerCell({ squareId, cellId }, peerCell)) {
        const peerCellValue =
          state.board[a][b].value !== 0
            ? state.board[a][b].value
            : state.board[a][b].initialValue;
        if (
          peerCellValue === valueEntered &&
          isCorrectValue(state.board[a][b])
        ) {
          // prettier-ignore
          console.log(`Cell ${a} ${b} is coliding with wrong value: ${squareId} ${cellId}`);
          state.board[a][b].styles.isColiding = true;
        } else if (state.board[a][b].styles.isColiding) {
          console.log(`Cell ${a} ${b} was coliding. Checking if it still does`);
          checkColiding(state, peerCell);
        }
      }
    }
  }
}
