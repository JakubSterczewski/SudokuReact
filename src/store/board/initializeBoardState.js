import initializeBoard from "../../utils/initializeBoard";

export const initialDifficulty = "Medium";

export default function initializeBoardState(difficulty) {
  const { solution, initial } = initializeBoard(
    difficulty !== undefined ? difficulty : initialDifficulty,
  );

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
  return {
    board: initialBoardState,
    selectedCell: { squareId: null, cellId: null, value: null },
    isNoting: false,
    history: [],
  };
}
