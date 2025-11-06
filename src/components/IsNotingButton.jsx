import { useDispatch, useSelector } from "react-redux";
import { boardActions } from "../store/board/boardSlice";
import ControlsButton from "./ControlsButton";

export default function IsNotingButton() {
  const dispatch = useDispatch();
  const isNoting = useSelector((state) => state.board.isNoting);

  function handleChange() {
    dispatch(boardActions.toggleIsNoting());
  }

  return (
    <ControlsButton
      text={"Noting"}
      onClickHandler={handleChange}
      bgClassName={`${isNoting ? "bg-green-500 hover:bg-green-600" : ""}`}
    />
  );
}
