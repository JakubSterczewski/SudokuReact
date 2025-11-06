import { difficulties } from "../constants/difficulties.js";

export default function Difficulties({ handleChangeDifficulty, difficulty }) {
  return (
    <div className="my-2 flex items-center gap-3">
      <p>Difficulty:</p>
      {Object.entries(difficulties).map(([name]) => (
        <button
          key={name}
          onClick={() => handleChangeDifficulty(name)}
          className={`rounded bg-gray-200 px-4 py-2 text-sm font-bold ${difficulty === name ? "text-violet-600" : ""} hover:bg-violet-400`}
        >
          {name}
        </button>
      ))}
    </div>
  );
}
