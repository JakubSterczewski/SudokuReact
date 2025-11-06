import { useDispatch } from "react-redux";
import { boardActions } from "../store/board/boardSlice";

export default function NumbersPanel() {
  const dispatch = useDispatch();
  const numberButtons = [];

  function handleClickedNumber(value) {
    dispatch(boardActions.clickedValue({ value }));
  }

  for (let value = 1; value <= 9; value++) {
    numberButtons.push(
      <button
        key={value}
        onClick={() => handleClickedNumber(value)}
        className={`flex aspect-square w-full items-center justify-center rounded-xl bg-gray-200 text-center text-5xl hover:bg-gray-300`}
      >
        {value}
      </button>,
    );
  }

  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-2">{numberButtons}</div>
  );
}
