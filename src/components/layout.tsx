import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Nav from "./nav";
import styled from "styled-components";
import GlobalStyle, { colors } from "../globalStyles";

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
        <Nav />
        <Heading>{data.site.siteMetadata.title}</Heading>
        <main>
          <Subheading>{pageTitle}</Subheading>
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

const Heading = styled.h1`
  font-size: 3rem;
  color: ${colors.text};
  font-weight: 700;
  margin: 2rem 0;
`;

const Subheading = styled.h2`
  font-size: 2rem;
  color: ${colors.text};
  margin-bottom: 20px;
`;

export default Layout;
