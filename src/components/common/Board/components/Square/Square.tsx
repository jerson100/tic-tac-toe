import { FunctionComponent, PropsWithChildren, MouseEventHandler } from "react";
import { SquareProps } from "../../../../../types";
import { SquareContainerStyle } from "./square.style";
import { containerVariants } from "./square.variants";

const Square: FunctionComponent<PropsWithChildren & SquareProps> = ({
  active,
  character,
  index,
  onclick,
}) => {
  const handleClick: MouseEventHandler<HTMLDivElement> = () =>
    onclick({ active, index, character });
  return (
    <SquareContainerStyle
      variants={containerVariants}
      onClick={handleClick}
      active={active}
      character={character}
    >
      {character}
    </SquareContainerStyle>
  );
};

export default Square;
