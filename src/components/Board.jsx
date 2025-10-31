import Cell from "./Cell";

export default function Board() {
  console.log("Rendering the board");

  const squares = [];

  for (let squareId = 0; squareId < 9; squareId++) {
    const cells = [];
    for (let cellId = 0; cellId < 9; cellId++) {
      cells.push(
        <Cell
          key={`${squareId}-${cellId}`}
          squareId={squareId}
          cellId={cellId}
        />,
      );
    }

    squares.push(
      <div key={squareId} className="grid grid-cols-3 border-gray-400">
        {cells}
      </div>,
    );
  }

  return <div className="inline-grid w-fit grid-cols-3">{squares}</div>;
}
