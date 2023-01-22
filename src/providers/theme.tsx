import React, { PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";
import { COLORS } from "../configs/colors";

const ThemeContextProvider: React.FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  // const theme = { ...base, colors: COLORS.LIGHT }
  const theme = { colors: COLORS.DARK, theme: "dark" };

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export { ThemeContextProvider };
