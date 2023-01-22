import { ISquare } from "../../types";

const winningConditions: number[][] = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const validateGame = (grid: ISquare[]): string | null => {
  for (let [a, b, c] of winningConditions) {
    if (
      grid[a].character === grid[b].character &&
      grid[a].character === grid[c].character
    ) {
      return grid[a].character;
    }
  }
  return null;
};

export { validateGame };
