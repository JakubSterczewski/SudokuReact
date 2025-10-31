import toggleFocus from "./toggleFocus";

export default function enteredValue(state, action) {
  let { squareId, cellId, value } = action.payload;
  console.log(
    `Entering value ${value} in ${squareId} ${cellId}. Noting: ${state.isNoting}`,
  );

  if (!state.isNoting || value === 0) {
    if (value === 0) {
      if (
        state.selectedCell.squareId === null ||
        state.selectedCell.cellId === null
      ) {
        console.log("Illegal action: Clearing undefined (selected) cell");
        return;
      } else if (squareId === undefined || cellId === undefined) {
        squareId = state.selectedCell.squareId;
        cellId = state.selectedCell.cellId;
        state.board[squareId][cellId].notedValues = [];
        console.log(`Clearing ${squareId} ${cellId}`);
      }
    }
    state.board[squareId][cellId].value = value;

    toggleFocus(state, {
      payload: {
        squareId,
        cellId,
        value,
        isCheckingCorrectness: true,
      },
    });
  } else {
    const notedValues = state.board[squareId][cellId].notedValues;
    if (state.board[squareId][cellId].value === 0) {
      if (notedValues.includes(value)) {
        const index = notedValues.indexOf(value);
        notedValues.splice(index, 1);
      } else {
        notedValues.push(value);
      }
    } else {
      if (!notedValues.includes(value)) {
        notedValues.push(value);
      }
      state.board[squareId][cellId].value = 0;

      toggleFocus(state, {
        payload: {
          squareId,
          cellId,
          value: 0,
          isCheckingCorrectness: true,
        },
      });
    }
  }

  const isNoting = state.isNoting;
  state.history.push({ squareId, cellId, value, isNoting });
}
