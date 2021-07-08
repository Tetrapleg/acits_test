import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle `
  body {
    background: rgb(45, 45, 45);
    overflow-x: hidden;
    font-family: 'Bona Nova', serif;
  }

  h1 {
    color: #f8c555;
    color: #e2777a;
    color: #ccc;
    color: #d0021b;
    color: #7ec699;
    color: #cc99cd;
    text-align: center;
  }

  h3 {
    background: #5f9ea0;
    color: #fff;
    font-size: 36px;
    line-height: 100px;
    margin: 10px;
    padding: 2%;
    position: relative;
    text-align: center;
  }

  a {
    cursor: pointer;
  }
`;

export default GlobalStyles;