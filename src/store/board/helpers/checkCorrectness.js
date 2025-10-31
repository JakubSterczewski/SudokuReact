import toggleWrong from "./toggleWrong";
import toggleCorrect from "./toggleCorrect";

export default function checkCorrectness(state, squareId, cellId, value) {
  if (value !== state.board[squareId][cellId].correctValue && value !== 0) {
    // prettier-ignore
    console.log("Entered value is not okay: " + value + "!==" + state.board[squareId][cellId].correctValue);

    toggleWrong(state, {
      payload: { squareId: squareId, cellId: cellId, val: value },
    });
  } else {
    // prettier-ignore
    console.log("Entered value is okay or 0: " + value + "===" + state.board[squareId][cellId].correctValue);

    toggleCorrect(state, {
      payload: { squareId: squareId, cellId: cellId, val: value },
    });
  }
}
