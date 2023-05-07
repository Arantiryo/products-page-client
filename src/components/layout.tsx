import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Nav from "./nav";
import styled from "styled-components";
import GlobalStyle from "../globalStyles";

interface LayoutProps extends React.PropsWithChildren {
  pageTitle: string;
}

const Layout: React.FC<LayoutProps> = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <GlobalStyle />
      <Container>
        <Header>{data.site.siteMetadata.title}</Header>
        <Nav />
        <main>
          <Heading>{pageTitle}</Heading>
          {children}
        </main>
      </Container>
    </>
  );
};

const Container = styled.div`
  margin: auto;
  max-width: 1200px;
  font-family: sans-serif;
  padding: 0 2rem;
`;

const Header = styled.header`
  font-size: 2rem;
  color: gray;
  font-weight: 700;
  margin: 2rem 0;
`;

const Heading = styled.h1`
  color: #232129;
  margin-bottom: 20px;
`;

export default Layout;
