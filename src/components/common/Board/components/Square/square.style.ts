import styled from "styled-components";
import { motion } from "framer-motion";
import { SquareStyleProps } from "../../../../../types";
import { HTMLProps } from "react";

const SquareContainerStyle = styled(motion.div)<
  HTMLProps<HTMLDivElement> & SquareStyleProps
>`
  border: solid 1px ${({ theme }) => theme.colors.BORDER};
  background-color: ${({ active, character }) =>
    active
      ? `${
          character === "x" ? "rgba(0,0,255,.3)" : "rgba(255,0,0,.3)"
        } !important`
      : "transparent"};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.TEXT};
  box-shadow: 0px 0px 4px 0px ${({ theme }) => theme.colors.BORDER};
  cursor: pointer;
  transition: transform 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover {
    transform: scale(0.9);
  }
`;

export { SquareContainerStyle };
