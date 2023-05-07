import * as React from "react";
import { HeadFC, PageProps } from "gatsby";

const IndexPage: React.FC<PageProps> = () => {
  return <div>Products page</div>;
};

export default IndexPage;

export const Head: HeadFC = () => <title>Products page</title>;
