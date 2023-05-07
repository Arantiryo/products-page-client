import type { HeadFC, PageProps } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";

const AboutPage: React.FC<PageProps> = () => {
  return (
    <Layout pageTitle="About the project">
      <p>
        Implemented by <a href="https://github.com/arantiryo">Ivan Tsenilov</a>.
      </p>
    </Layout>
  );
};

export const Head: HeadFC = () => <title>About the project</title>;

export default AboutPage;
