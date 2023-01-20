import React, { PropsWithChildren } from "react";
import { LoadingProps } from "../../../../../types";
import { LoadingBoardContainerStyle } from "./loadingBoard.style";
import { LoadingVariants } from "./loadingVariants";
import { AnimatePresence } from "framer-motion";

const LoadingBoard: React.FunctionComponent<
  PropsWithChildren & LoadingProps
> = ({ isLoading = false }) => {
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
            <p>Cargando...</p>
          </LoadingBoardContainerStyle>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default LoadingBoard;
