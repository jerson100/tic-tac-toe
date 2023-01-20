import React, { PropsWithChildren } from "react";
import { LoadingProps } from "../../../../../types";
import { LoadingBoardContainerStyle } from "./loadingBoard.style";
import { LoadingVariants } from "./loadingVariants";
import { AnimatePresence } from "framer-motion";
import useRepeatAnimation from "../../../../../hooks/useRepeatAnimation";

const LoadingBoard: React.FunctionComponent<
  PropsWithChildren & LoadingProps
> = ({ isLoading = false }) => {
  const points = useRepeatAnimation({ delay: 400 });
  return (
    <>
      <AnimatePresence>
        {isLoading ? (
          <LoadingBoardContainerStyle
            variants={LoadingVariants}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            <p>Cargando{points}</p>
          </LoadingBoardContainerStyle>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default LoadingBoard;
