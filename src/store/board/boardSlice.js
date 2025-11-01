import { createSlice } from "@reduxjs/toolkit";

import toggleIsNoting from "./reducers/toggleIsNoting.js";
import enteredValue from "./reducers/enteredValue.js";
import toggleFocus from "./reducers/toggleFocus";
import undo from "./reducers/undo";
import initializeBoardState from "./initializeBoardState";
import clickedValue from "./reducers/clickedValue.js";

const initialState = initializeBoardState();

const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    undo,
    toggleIsNoting,
    toggleFocus,
    enteredValue,
    clickedValue,
    newGame: (state, action) => {
      return initializeBoardState(action.payload.difficulty);
    },
  },
});

export const boardActions = boardSlice.actions;

export default boardSlice.reducer;
