import { difficulties } from "../constants/difficulties.js";

export default function Difficulties({ handleChangeDifficulty }) {
  return (
    <div className="flex gap-4">
      <p>Difficulties: </p>
      {Object.entries(difficulties).map(([name, value]) => (
        <button
          key={name}
          onClick={() => handleChangeDifficulty(name)}
          className="rounded bg-gray-200 px-4 py-2 hover:bg-gray-300"
        >
          {name}
        </button>
      ))}
    </div>
  );
}
