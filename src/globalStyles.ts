import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const breakpoints = [480, 768, 992, 1200];
export const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

export const colors = {
  text: "#191C23",
  primary: "#1053a0",
  secondary: "#74b0f4",
  background: "#B2B9C3",
};

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    background: white;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

export default GlobalStyle;
