import generateSolution from "./randomSolution.js";

export default function initializeBoard() {
  const solution = generateSolution();
  const initial = [];

  for (let i = 0; i < solution.length; i++) {
    initial[i] = [];
    for (let j = 0; j < solution[i].length; j++) {
      initial[i][j] = 0;
    }
  }

  for (let i = 0; i < 30; i++) {
    let hasBeenChanged = false;
    while (!hasBeenChanged) {
      const randomY = Math.round(Math.random() * (solution.length - 1));
      const randomX = Math.round(
        Math.random() * (solution[randomY].length - 1),
      );
      if (initial[randomY][randomX] === 0) {
        hasBeenChanged = !hasBeenChanged;
        initial[randomY][randomX] = solution[randomY][randomX];
      }
    }
  }

  console.log(solution);

  return { solution, initial };
}
