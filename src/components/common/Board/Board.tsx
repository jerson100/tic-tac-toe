import { useState } from "react";
import Square from "./components/Square";
import { BoardContainerStyle } from "./board.style";
import { containerVariants } from "./board.variants";
import LoadingBoard from "./components/LoadingBoard";
import CurrentUser from "./components/CurrentUser";
import { UserType } from "../../../types";

const Board = () => {
  const grid: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [isCompleteShowAnimation, setIsCompleteShowAnimation] =
    useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<UserType>("x");
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
      <CurrentUser current={currentUser} />
      <LoadingBoard isLoading={!isCompleteShowAnimation} />
    </>
  );
};

export default Board;
