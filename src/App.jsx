import { useSelector, useDispatch } from "react-redux";
import Board from "./components/Board";
import { boardActions } from "./store/board/boardSlice.js";

function App() {
  const dispatch = useDispatch();
  const isNoting = useSelector((state) => state.board.isNoting);

  function handleChange() {
    dispatch(boardActions.toggleIsNoting());
  }

  function handleClear() {
    dispatch(boardActions.enteredValue({ value: 0 }));
  }

  function handleUndo() {
    dispatch(boardActions.undo());
  }

  return (
    <main className="flex flex-col gap-4 p-4">
      <div className="flex items-center gap-2">
        <input type="checkbox" onChange={handleChange} checked={isNoting} />
        <label>Noting Mode</label>
      </div>
      <div className="flex items-center gap-2">
        <button onClick={handleClear}>Clear</button>
      </div>
      <div className="flex items-center gap-2">
        <button onClick={handleUndo}>Undo</button>
      </div>
      <Board />
    </main>
  );
}

export default App;
