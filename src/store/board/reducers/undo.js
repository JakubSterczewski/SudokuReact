import toggleFocus from "./toggleFocus";

export default function undo(state) {
  const lastEntry = state.history[state.history.length - 1];

  if (lastEntry) {
    state.history.pop();
    const { squareId, cellId } = lastEntry;

    let revertingValue = 0;
    let revertingNotedValues = [];
    for (let i = 0; i < state.history.length; i++) {
      const el = state.history[i];

      if (el.squareId === squareId && el.cellId === cellId) {
        if (el.isNoting) {
          if (revertingNotedValues.includes(el.value)) {
            const index = revertingNotedValues.indexOf(el.value);
            revertingNotedValues.splice(index, 1);
          } else {
            revertingNotedValues.push(el.value);
          }
          revertingValue = 0;
        } else {
          revertingValue = el.value;
        }
      }
    }

    console.log(
      `Reverting cell: ${squareId} ${cellId} to value ${revertingValue} noted: ${revertingNotedValues}`,
    );

    state.board[squareId][cellId].value = revertingValue;
    state.board[squareId][cellId].notedValues = revertingNotedValues;

    toggleFocus(state, {
      payload: {
        squareId,
        cellId,
        value: revertingValue,
        isCheckingCorrectness: true,
      },
    });
  }
}
