import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./components/routers/AppRouter";
import { ThemeContextProvider } from "./providers/theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <AppRouter />
    </ThemeContextProvider>
  </React.StrictMode>
);
