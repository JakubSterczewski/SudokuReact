export default function isPeerCell(selectedCell, peerCell) {
  return (
    (selectedCell.squareId !== peerCell.squareId || // is not the same sell
      selectedCell.cellId !== peerCell.cellId) &&
    (peerCell.squareId === selectedCell.squareId || // square
      ((Math.floor(selectedCell.squareId / 3) * 3 === peerCell.squareId || // horizontal
        Math.floor(selectedCell.squareId / 3) * 3 + 1 === peerCell.squareId ||
        Math.floor(selectedCell.squareId / 3) * 3 + 2 === peerCell.squareId) &&
        (Math.floor(selectedCell.cellId / 3) * 3 === peerCell.cellId ||
          Math.floor(selectedCell.cellId / 3) * 3 + 1 === peerCell.cellId ||
          Math.floor(selectedCell.cellId / 3) * 3 + 2 === peerCell.cellId)) ||
      (selectedCell.cellId % 3 === peerCell.cellId % 3 && // vertical
        selectedCell.squareId % 3 === peerCell.squareId % 3))
  );
}
