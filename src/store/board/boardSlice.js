import { createSlice } from "@reduxjs/toolkit";
import initializeBoard from "../../initializeBoard";

import toggleIsNoting from "./reducers/toggleIsNoting.js";
import enteredValue from "./reducers/enteredValue.js";
import toggleFocus from "./reducers/toggleFocus";
import undo from "./reducers/undo";

const { solution, initial } = initializeBoard();

const initialBoardState = [];
for (let i = 0; i < solution.length; i++) {
  initialBoardState.push([]);
  for (let j = 0; j < solution[i].length; j++) {
    initialBoardState[i].push({
      initialValue: initial[i][j],
      value: 0,
      styles: {
        isSelected: false,
        isColiding: false,
        isAround: false,
        isCorrect: true,
        isSimilar: false,
      },
      notedValues: [],
      highlightNotedValue: null,
      notedValuesIncludes: false,
      correctValue: solution[i][j],
    });
  }
}

const boardSlice = createSlice({
  name: "board",
  initialState: {
    board: initialBoardState,
    selectedCell: { squareId: null, cellId: null, value: null },
    isNoting: false,
    history: [],
  },
  reducers: {
    undo,
    toggleIsNoting,
    toggleFocus,
    enteredValue,
  },
});

export const boardActions = boardSlice.actions;

export default boardSlice.reducer;
