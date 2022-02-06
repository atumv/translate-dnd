import * as styled from 'styled-components';

import RobotoLW from 'assets/fonts/roboto-light.woff';
import RobotoLW2 from 'assets/fonts/roboto-light.woff2';
import RobotoRW from 'assets/fonts/roboto-regular.woff';
import RobotoRW2 from 'assets/fonts/roboto-regular.woff2';

export const GlobalStyles = styled.createGlobalStyle`
  @font-face {
    font-family: 'Roboto Light';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local('Roboto Light'), url(${RobotoLW}) format('woff'),
      url(${RobotoLW2}) format('woff2');
  }

  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Roboto'), url(${RobotoRW}) format('woff'),
      url(${RobotoRW2}) format('woff2');
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    font-family: 'Roboto', 'Open Sans', 'Arial', 'Tahoma', sans-serif;
  }

  html {
    overflow-y: scroll;
  }

  body {
    min-height: 100vh;
    word-break: break-word;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
  }
`;
