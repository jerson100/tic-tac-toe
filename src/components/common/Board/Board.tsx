import { useState } from "react";
import Square from "./components/Square";
import { BoardContainerStyle } from "./board.style";
import { containerVariants } from "./board.variants";
import LoadingBoard from "./components/LoadingBoard";
import CurrentUser from "./components/CurrentUser";
import { ISquare, UserType } from "../../../types";

const Board = () => {
  const [grid, setGrid] = useState<ISquare[]>([
    { active: false, character: "", index: 1 },
    { active: false, character: "", index: 2 },
    { active: false, character: "", index: 3 },
    { active: false, character: "", index: 4 },
    { active: false, character: "", index: 5 },
    { active: false, character: "", index: 6 },
    { active: false, character: "", index: 7 },
    { active: false, character: "", index: 8 },
    { active: false, character: "", index: 9 },
  ]);
  const [isCompleteShowAnimation, setIsCompleteShowAnimation] =
    useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<UserType>("x");
  const handleClick = ({ index }: ISquare) => {
    if (isCompleteShowAnimation) {
      const copy_grid = [...grid];
      const square: ISquare | undefined = copy_grid.find(
        ({ index: indexC }: ISquare) => index === indexC
      );
      if (square && !square.active) {
        square.active = !square.active;
        square.character = currentUser;
        setGrid(copy_grid);
        setCurrentUser((prev) => (prev === "x" ? "o" : "x"));
      }
    }
  };
  return (
    <>
      <BoardContainerStyle
        variants={containerVariants}
        initial="hidden"
        animate="show"
        exit="exit"
        onAnimationComplete={() => setIsCompleteShowAnimation(true)}
      >
        {grid.map(({ active, character, index }: ISquare) => (
          <Square
            key={index}
            character={character}
            active={active}
            index={index}
            onclick={handleClick}
          />
        ))}
      </BoardContainerStyle>
      <CurrentUser current={currentUser} />
      <LoadingBoard isLoading={!isCompleteShowAnimation} />
    </>
  );
};

export default Board;
