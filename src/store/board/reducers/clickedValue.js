import enteredValue from "./enteredValue";

export default function clickedValue(state, action) {
  enteredValue(state, {
    payload: {
      squareId: state.selectedCell.squareId,
      cellId: state.selectedCell.cellId,
      value: action.payload.value,
    },
  });
}
