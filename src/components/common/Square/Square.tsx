import { FunctionComponent, PropsWithChildren } from "react";
import { SquareContainerStyle } from "./square.style";

const Square: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return <SquareContainerStyle>{children}</SquareContainerStyle>;
};

export default Square;
