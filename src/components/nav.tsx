import * as React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { colors } from "../globalStyles";

const Nav: React.FC = () => {
  return (
    <NavContainer>
      <NavLinks>
        <NavLinkItem>
          <StyledLink to="/" activeStyle={{ color: colors.primary }}>
            Home
          </StyledLink>
        </NavLinkItem>
        <NavLinkItem>
          <StyledLink to="/about" activeStyle={{ color: colors.primary }}>
            About
          </StyledLink>
        </NavLinkItem>
      </NavLinks>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  margin: 2rem 0;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 0;
`;

const NavLinkItem = styled.ul`
  padding-right: 2rem;
`;

const StyledLink = styled((props) => <Link {...props} />)`
  text-decoration: none;
  color: ${colors.secondary};
  transition: color 0.2s;

  :hover {
    color: ${colors.primary};
  }
`;

export default Nav;
