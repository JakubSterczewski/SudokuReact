import { useDispatch } from "react-redux";
import { boardActions } from "../store/board/boardSlice";

export default function NumbersPanel() {
  const dispatch = useDispatch();
  const noted = [];

  function handleClickedNumber(value) {
    dispatch(boardActions.clickedValue({ value }));
  }

  for (let value = 1; value <= 9; value++) {
    noted.push(
      <button
        key={value}
        onClick={() => handleClickedNumber(value)}
        className={`flex aspect-square w-full items-center justify-center bg-amber-700 text-center text-xs`}
      >
        {value}
      </button>,
    );
  }

  return <div className="grid grid-cols-3 grid-rows-3">{noted}</div>;
}
