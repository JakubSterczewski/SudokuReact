import { boardActions } from "../store/board/boardSlice.js";
import { useDispatch } from "react-redux";
import IsNotingButton from "./isNotingButton.jsx";
import ControlsButton from "./ControlsButton.jsx";

export default function Controls() {
  const dispatch = useDispatch();

  function handleClear() {
    dispatch(boardActions.enteredValue({ value: 0 }));
  }

  function handleUndo() {
    dispatch(boardActions.undo());
  }

  return (
    <div className="flex flex-row gap-4">
      <IsNotingButton />
      <ControlsButton text="Clear" onClickHandler={handleClear} />
      <ControlsButton text="Undo" onClickHandler={handleUndo} />
    </div>
  );
}
