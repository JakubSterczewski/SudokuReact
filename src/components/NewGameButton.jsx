import { useState } from "react";
import DifficultiesModal from "./DifficultiesModal";
import { difficulties } from "../constants/difficulties";

export default function NewGameButton({ handleChangeDifficulty }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleNewGame() {
    setModalIsOpen(true);
  }

  function handleCloseModal() {
    setModalIsOpen(false);
  }

  function handleOnClick(name) {
    handleCloseModal();
    handleChangeDifficulty(name);
  }

  return (
    <>
      <DifficultiesModal open={modalIsOpen} onClose={handleCloseModal}>
        {Object.entries(difficulties).map(([name]) => (
          <button
            key={name}
            onClick={() => handleOnClick(name)}
            className="rounded bg-gray-200 px-4 py-2 hover:bg-gray-300"
          >
            {name}
          </button>
        ))}
        <button onClick={handleCloseModal}>Close</button>
      </DifficultiesModal>

      <button
        className="mt-2 h-16 rounded-xl bg-fuchsia-300 text-2xl font-bold text-white hover:bg-violet-600"
        onClick={handleNewGame}
      >
        New Game
      </button>
    </>
  );
}
