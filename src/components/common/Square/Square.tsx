import { FunctionComponent, PropsWithChildren } from "react";
import { SquareContainerStyle } from "./square.style";
import { containerVariants } from "./square.variants";

const Square: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <SquareContainerStyle variants={containerVariants}>
      {children}
    </SquareContainerStyle>
  );
};

export default Square;
