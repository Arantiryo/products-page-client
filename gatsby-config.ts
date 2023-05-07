import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Your favorite brands`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "productList",
        fieldName: "productList",
        url: "http://localhost:4000/",
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "getProduct",
        fieldName: "getProduct",
        url: "http://localhost:4000/",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "ProductPageJS",
        short_name: "ProductPageJS",
        start_url: "/",
        display: "standalone",
        icon: "src/images/icon.png", // This path is relative to the root of the site.
      },
    },
  ],
};

export default config;
