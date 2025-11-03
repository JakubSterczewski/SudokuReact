import { useSelector, useDispatch } from "react-redux";
import Board from "./Board";
import { boardActions } from "../store/board/boardSlice.js";
import { useState } from "react";
import Difficulties from "./Difficulties";
import { useEffect } from "react";
import Controls from "./Controls";
import NumbersPanel from "./NumbersPanel";

import NewGameButton from "./NewGameButton";

export default function Game() {
  const [difficulty, setDifficulty] = useState("Medium");

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Dispatching newGame " + difficulty);
    dispatch(boardActions.newGame({ difficulty }));
  }, [dispatch, difficulty]);

  function handleChangeDifficulty(difficulty) {
    setDifficulty(difficulty);
  }

  return (
    <main className="mt-10 flex justify-center">
      <div className="flex flex-col items-start">
        <Difficulties handleChangeDifficulty={handleChangeDifficulty} />
        <Board />
      </div>
      <div className="flex flex-col">
        <Controls />
        <NumbersPanel />
        <NewGameButton handleChangeDifficulty={handleChangeDifficulty} />
      </div>
    </main>
  );
}
