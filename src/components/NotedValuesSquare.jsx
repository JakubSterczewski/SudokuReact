import { notedValuesStyles } from "../myStyles";
import { useSelector } from "react-redux";

export default function NotedValuesSquare({ squareId, cellId }) {
  console.log("Rendering NotedValuesSquare: " + squareId + " " + cellId);

  const selectedCellValue = useSelector(
    (state) => state.board.board[squareId][cellId].highlightNotedValue,
  );

  const notedValues = useSelector(
    (state) => state.board.board[squareId][cellId].notedValues,
  );

  const noted = [];

  for (let notedValue = 1; notedValue <= 9; notedValue++) {
    const isPresent = notedValues.includes(notedValue);
    const isSelected = isPresent && notedValue === selectedCellValue;
    noted.push(
      <div
        key={notedValue}
        className={`flex items-center justify-center text-center text-xs ${notedValuesStyles.notedValueTextColor} ${isSelected ? notedValuesStyles.notedValueSelectedBg : ""}`}
      >
        {isPresent ? notedValue : " "}
      </div>,
    );
  }

  return <div className="grid h-full grid-cols-3 grid-rows-3">{noted}</div>;
}
