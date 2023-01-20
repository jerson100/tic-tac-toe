import { useState } from "react";
import Square from "../Square";
import { BoardContainerStyle } from "./board.style";
import { containerVariants } from "./board.variants";
import LoadingBoard from "./components/LoadingBoard";

const Board = () => {
  const grid: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [isCompleteShowAnimation, setIsCompleteShowAnimation] =
    useState<boolean>(true);
  return (
    <>
      <BoardContainerStyle
        variants={containerVariants}
        initial="hidden"
        animate="show"
        exit="exit"
        onAnimationComplete={() => setIsCompleteShowAnimation(false)}
      >
        {grid.map((g) => (
          <Square key={g}>{g}</Square>
        ))}
      </BoardContainerStyle>
      <LoadingBoard isLoading={isCompleteShowAnimation} />
    </>
  );
};

export default Board;
