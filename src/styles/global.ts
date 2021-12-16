import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }

  .page {
    overflow-y: scroll;
    font-family: "Roboto", "Open Sans", "Noto Sans", "Arial", "Tahoma", "Verdana", sans-serif;
  }

  body {
    min-height: 100vh;
    word-break: break-word;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ffffff;
  }
`;
