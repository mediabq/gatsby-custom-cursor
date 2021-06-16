import React from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/GlobalStyles";
import Typography from "../styles/Typography";
import Theme from "../styles/theme";
import Header from "./Header";

const LayoutStyles = styled.div`
  width: 100%;
  margin: 0 auto;
  background-color: var(--color-white);
  .container {
    width: 1460px;
    margin: 0 auto;
  }
`;

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Typography />

      <ThemeProvider theme={Theme}>
        <LayoutStyles>
          <div className="container">
            <Header />
            {children}
            <Footer />
          </div>
        </LayoutStyles>
      </ThemeProvider>
    </>
  );
};

export default Layout;
