import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :root {
    --font-family-sans: -apple-system, BlinkMacSystemFont, sans-serif;

    --color-accent: #B52024;
    --color-black: #0f0f0f;
    --color-dark-gray: #535353;
    --color-gray: #757575;
    --color-light-gray: #e6e8e5;
    --color-watermark: #e0e0e0;
    --color-very-light-gray: #e7e7e7;
    --color-white: #fff;
    --color-accent-rgb: rgba(181, 32, 36, 0.99);
    --color-accent-rgb-light: rgba(181, 32, 36, 0.2);
    --color-accent-light: #d7548f;
  }


  .space{
    height:200rem;
  }
`;

export default GlobalStyles;
