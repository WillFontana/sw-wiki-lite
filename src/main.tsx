import { StrictMode } from "react";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";

import { GlobalStyles } from "./styles/GlobalStyles.ts";

import { store } from "./store";
import { theme } from "./styles/theme.ts";

import "./styles/reset.css";

import App from "./App";
import SkyParallax from "./components/Frames/SkyParallax/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <SkyParallax />
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
