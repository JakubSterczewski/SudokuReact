function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function pattern(row, col) {
  return (3 * (row % 3) + Math.floor(row / 3) + col) % 9;
}

export default function generateSudoku() {
  const base = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const nums = shuffle(base);

  const rowBase = [0, 1, 2];
  const colBase = [0, 1, 2];

  const rows = shuffle(rowBase).flatMap((r) =>
    shuffle(rowBase).map((c) => r * 3 + c),
  );

  const cols = shuffle(colBase).flatMap((r) =>
    shuffle(colBase).map((c) => r * 3 + c),
  );

  const board = Array.from({ length: 9 }, (_, r) =>
    Array.from({ length: 9 }, (_, c) => nums[pattern(rows[r], cols[c])]),
  );

  return board;
}
