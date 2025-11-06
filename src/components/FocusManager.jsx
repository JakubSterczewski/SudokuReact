import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function FocusManager() {
  const selectedCell = useSelector((state) => state.board.selectedCell);

  useEffect(() => {
    function handleClick() {
      setTimeout(() => {
        const active = document.activeElement;
        const selector = `[data-squareid="${selectedCell.squareId}"][data-cellid="${selectedCell.cellId}"]`;
        const selectedInput = document.querySelector(selector);
        if (
          (!(active instanceof HTMLInputElement) ||
            !active.hasAttribute("data-squareid") ||
            !active.hasAttribute("data-cellid")) &&
          selectedInput &&
          active !== selectedInput
        ) {
          selectedInput.focus();
        }
      }, 50);
    }

    window.addEventListener("mousedown", handleClick);
    return () => window.removeEventListener("mousedown", handleClick);
  }, [selectedCell]);
}
