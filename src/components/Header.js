import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const HeaderStyles = styled.header`
  height: 14vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    a {
      text-decoration: none;
    }
  }
  nav {
    ul {
      li {
        list-style: none;
        a {
          margin-left: 2em;
          text-decoration: none;
          font-weight: 700;
          color: var(--color-black);
        }
      }
    }
  }
`;

const Header = () => {
  return (
    <HeaderStyles>
      <div className="logo">
        <Link to="/">
          <h1>Cursor Tutorial</h1>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
            <Link to="/page2">Page 2</Link>
          </li>
        </ul>
      </nav>
    </HeaderStyles>
  );
};

export default Header;
