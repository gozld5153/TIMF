import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    height: 100%;
    width: 100%;
  }
  ul {
    list-style: none;
  }

  h1 {
    font-size: 3rem;
    @media screen and (max-width: 993px) {
      font-size: 1.8rem;
    }
    @media screen and (max-width: 769px) {
      font-size: 1.2rem;
    }
  }
  h2 {
    font-size: 2.3rem;
    @media screen and (max-width: 993px) {
      font-size: 1.3rem;
    }
    @media screen and (max-width: 769px) {
      font-size: 0.8rem;
    }
  }
  a {
    text-decoration: none;
    color: rgb(96, 96, 96);
  }
`;

export default GlobalStyle;
