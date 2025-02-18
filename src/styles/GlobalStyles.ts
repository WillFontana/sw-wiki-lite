import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #111;
    border-radius: 6px;
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #00aaff, #0077ff);
    border-radius: 6px;
    box-shadow: 0 0 10px #00aaff, 0 0 20px #0077ff;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(180deg, #00ccff, #0088ff);
    box-shadow: 0 0 15px #00ccff, 0 0 30px #0088ff;
  }

  body.dark-theme ::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #ff4444, #cc0000);
    box-shadow: 0 0 10px #ff4444, 0 0 20px #cc0000;
  }

  body.dark-theme ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(180deg, #ff6666, #dd0000);
    box-shadow: 0 0 15px #ff6666, 0 0 30px #dd0000;
  }
`;
