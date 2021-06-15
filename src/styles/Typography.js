import { createGlobalStyle } from "styled-components";

const Typography = createGlobalStyle`
  :root {
    /* Typography */
    --unit: 16;
    --font-micro-size: calc(10 / var(--unit) * 1rem); /* 10px */
    --font-micro-line-height: calc(14 / 10); /* 12px */
    --font-small-size: calc(14 / var(--unit) * 1rem); /* 14px */
    --font-small-line-height: calc(26 / 14); /* 21px */
    --font-base-size: 1em; /* 16px */
    --font-base-line-height: calc(30 / var(--unit)); /* 30px */
    --font-large-size: calc(18 / var(--unit) * 1rem); /* 18px */
    --font-large-line-height: calc(27 / 18); /* 27px */

    --font-title4-size: calc(21 / var(--unit) * 1rem); /* 21px */
    --font-title4-line-height: calc(30 / 21); /* 30px */
    --font-title3-size: calc(24 / var(--unit) * 1rem); /* 24px */
    --font-title3-line-height: calc(42 / 24); /* 42px */
    --font-title2-size: calc(34 / var(--unit) * 1rem); /* 34px */
    --font-title2-line-height: calc(57 / 34); /* 57px */
    --font-title1-size: calc(42 / var(--unit) * 1rem); /* 42px */
    --font-title1-line-height: calc(68 / 42); /* 68x */

    --font-hero-size: calc(65 / var(--unit) * 1rem);
    --font-hero-line-height: calc(85 / 65);
    --font-herotablet-size: calc(55 / var(--unit) * 1rem);
    --font-herotablet-line-height: calc(70 / 55);
    --font-herophone-size: calc(40 / var(--unit) * 1rem);
    --font-herophone-line-height: calc(60 / 40);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Poppins", Arial, sans-serif;
    font-weight: 300;
    color: var(--color-black);
    margin-bottom: 0.5em;
  }

  p {
    font-family: "Roboto", Arial, sans-serif;
    color: var(--color-gray);
    font-size: var(--font-base-size);
    line-height: var(--font-base-line-height);
  }

  .intro-title{
    font-family: "Poppins", Arial, sans-serif;
    font-weight: 300;
    color: var(--color-black);
    margin-bottom: 2.5em;
    font-size: var(--font-title3-size);
    line-height: var(--font-title3-line-height);
  }

  h1{
    font-size: var(--font-title1-size);
    line-height: var(--font-title1-line-height);
  }

  h2{
    font-size: var(--font-title2-size);
    line-height: var(--font-title2-line-height);
  }

  h3{
    font-size: var(--font-title3-size);
    line-height: var(--font-title3-line-height);
  }

  h4{
    font-size: var(--font-title4-size);
    line-height: var(--font-title4-line-height);
  }

  html {
    font-family: "Roboto", Arial, sans-serif;
    font-weight: 300;
    color: var(--color-black);
    font-size: var(--font-base-size);
    line-height: var(--font-base-line-height);
  }

  a {
    font-weight: 300;
  }

`;

export default Typography;
