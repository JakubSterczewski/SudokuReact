import { memo } from "react";
import NotedValuesSquare from "./NotedValuesSquare.jsx";
import EnteredValueSquare from "./EnteredValueSquare.jsx";
import { myStyles } from "../myStyles.js";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { boardActions } from "../store/board/boardSlice.js";

function calculateBorders(squareId, cellId) {
  const borderTop =
    cellId / 3 < 1
      ? squareId / 3 < 1
        ? "border-t-4"
        : "border-t-2"
      : "border-t-1";

  const borderBottom =
    cellId / 3 >= 2
      ? squareId / 3 >= 2
        ? "border-b-4"
        : "border-b-2"
      : "border-b-1";

  const borderLeft =
    cellId % 3 === 0
      ? squareId % 3 === 0
        ? "border-l-4"
        : "border-l-2"
      : "border-l-1";

  const borderRight =
    cellId % 3 === 2
      ? squareId % 3 === 2
        ? "border-r-4"
        : "border-r-2"
      : "border-r-1";

  return `${borderTop} ${borderBottom} ${borderLeft} ${borderRight}`;
}

const Cell = memo(function Cell({ squareId, cellId }) {
  console.log(`Rendering cell ${squareId} ${cellId}`);
  const dispatch = useDispatch();

  const { initialValue, value, styles, correctValue } = useSelector((state) => {
    const cell = state.board.board[squareId][cellId];
    return {
      initialValue: cell.initialValue,
      value: cell.value,
      styles: cell.styles,
      correctValue: cell.correctValue,
    };
  }, shallowEqual);

  const borders = calculateBorders(squareId, cellId);

  function handleValueEntered(event) {
    const enteredValue = +event.target.value;
    if (enteredValue >= 1 && enteredValue <= 9) {
      dispatch(
        boardActions.enteredValue({ squareId, cellId, value: enteredValue }),
      );
    }
  }

  function handleFocus(squareId, cellId) {
    console.log("handleFocus");
    const val = initialValue > 0 ? initialValue : value;
    dispatch(boardActions.toggleFocus({ squareId, cellId, value: val }));
  }

  let styleBg = "";
  let styleText = myStyles["EnteredValueText"];

  if (initialValue !== 0) {
    styleText = myStyles["InitialValueText"];
  }

  if (styles.isAround) {
    styleBg = myStyles["AroundBg"];
  }

  if (styles.isSimilar) {
    styleBg = myStyles["SimilarBg"];
  }

  if (styles.isColiding) {
    console.log("colfsffsdifsufsdfb " + squareId + " " + cellId);
    styleBg = myStyles["ColidingBg"];
  }

  if (!styles.isCorrect) {
    styleBg = myStyles["WrongBg"];
    styleText = myStyles["WrongText"];
  }

  if (styles.isSelected) {
    styleBg = myStyles["SelectedBg"];
  }

  return (
    <div className={`relative h-21 w-21 ${styleText} ${styleBg}`}>
      <input
        className={`absolute inset-0 z-10 h-full w-full cursor-pointer caret-transparent outline-none ${borders} border-black`}
        onChange={handleValueEntered}
        value=""
        onClick={() => handleFocus(squareId, cellId)}
        readOnly={(value !== 0 && value === correctValue) || initialValue !== 0}
      />

      {initialValue !== 0 || value !== 0 ? (
        <EnteredValueSquare value={initialValue || value} />
      ) : (
        <NotedValuesSquare squareId={squareId} cellId={cellId} />
      )}
    </div>
  );
});

export default Cell;
