import * as React from "react";
import { HeadFC, PageProps, graphql } from "gatsby";
import Layout from "../components/layout";

type Product = {
  id: string;
  title: string;
};

type Data = {
  productList: {
    products: Product[];
  };
};

const IndexPage: React.FC<PageProps<Data>> = ({ data }) => {
  if (!data?.productList) return <div>No data</div>;

  const { products } = data.productList;

  return (
    <Layout pageTitle={"Products page"}>
      {products.map((product) => {
        return <p key={product.id}>{product.title}</p>;
      })}
    </Layout>
  );
};

export const query = graphql`
  {
    productList {
      products {
        id
        title
        price
        description
        category
        image
        rating {
          rate
          count
        }
      }
    }
  }
`;

export default IndexPage;

export const Head: HeadFC = () => <title>Products page</title>;
