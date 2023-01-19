import Square from "../Square";
import { BoardContainerStyle } from "./board.style";

const Board = () => {
  const grid: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <BoardContainerStyle>
      {grid.map((g) => (
        <Square key={g}>{g}</Square>
      ))}
    </BoardContainerStyle>
  );
};

export default Board;
