import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import { GlobalStyles } from "./styles/GlobalStyles.ts";
import "./styles/reset.css";

import App from "./App.tsx";

import { store } from "./store";
import { theme } from "./styles/theme.ts";
import { ThemeProvider } from "styled-components";
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
