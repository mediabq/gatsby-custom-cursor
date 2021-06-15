import React from "react";
import styled from "styled-components";
import Link from "gatsby";

const HeaderStyles = styled.header``;

const Header = () => {
  return (
    <HeaderStyles>
      <div className="logo">Cursor Tutorial</div>
      <nav>
        <ul>
          <li>
            <Link>Home</Link>
          </li>
        </ul>
      </nav>
    </HeaderStyles>
  );
};

export default Header;
