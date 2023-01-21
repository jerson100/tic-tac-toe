import { useState } from "react";
import Square from "./components/Square";
import { BoardContainerStyle } from "./board.style";
import { containerVariants } from "./board.variants";
import LoadingBoard from "./components/LoadingBoard";

const Board = () => {
  const grid: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [isCompleteShowAnimation, setIsCompleteShowAnimation] =
    useState<boolean>(false);
  return (
    <>
      <BoardContainerStyle
        variants={containerVariants}
        initial="hidden"
        animate="show"
        exit="exit"
        onAnimationComplete={() => setIsCompleteShowAnimation(true)}
      >
        {grid.map((g) => (
          <Square key={g}>{g}</Square>
        ))}
      </BoardContainerStyle>
      <LoadingBoard isLoading={!isCompleteShowAnimation} />
    </>
  );
};

export default Board;
