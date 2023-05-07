import * as React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Nav: React.FC = () => {
  return (
    <NavContainer>
      <NavLinks>
        <NavLinkItem>
          <NavLinkText>
            <Link to="/">Home</Link>
          </NavLinkText>
        </NavLinkItem>
        <NavLinkItem>
          <NavLinkText>
            <Link to="/about">About</Link>
          </NavLinkText>
        </NavLinkItem>
      </NavLinks>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  margin-bottom: 2rem;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 0;
`;

const NavLinkItem = styled.ul`
  padding-right: 2rem;
`;

const NavLinkText = styled.span`
  color: black;
`;

export default Nav;
