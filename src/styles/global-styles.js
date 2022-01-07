import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5% //Setamos este valor para usar rem como se fosse pixel
  }

  body {
    font-size: 1.6rem; //Igual a 16px
    font-family: ${({ theme }) => theme.font.family.default};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.font.family.titles};
  }
`;
