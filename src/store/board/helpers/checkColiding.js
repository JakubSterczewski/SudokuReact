import isPeerCell from "./isPeerCell";

export default function checkColiding(state, peer) {
  const peerSquareId = peer.squareId;
  const peerCellId = peer.cellId;
  let isStillColiding = false;

  for (let i = 0; i < state.board.length; i++) {
    for (let j = 0; j < state.board[i].length; j++) {
      if (isPeerCell(peer, { squareId: i, cellId: j })) {
        const peerValue =
          state.board[peerSquareId][peerCellId].value !== 0
            ? state.board[peerSquareId][peerCellId].value
            : state.board[peerSquareId][peerCellId].initialValue;
        const ijValue =
          state.board[i][j].value !== 0
            ? state.board[i][j].value
            : state.board[i][j].initialValue;
        if (!state.board[i][j].styles.isCorrect && peerValue === ijValue) {
          // prettier-ignore
          console.log(peerSquareId + " " + peerCellId + " is still coliding with: " + i + " " + j);
          isStillColiding = true;
        }
      }
    }
  }
  if (!isStillColiding) {
    console.log(peerSquareId + " " + peerCellId + " is no longer coliding");
    state.board[peerSquareId][peerCellId].styles.isColiding = false;
  }
}
