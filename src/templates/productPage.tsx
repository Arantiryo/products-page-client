import { HeadFC, PageProps, graphql, navigate } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";
import ProductCard from "../components/productCard";
import { Product } from "../pages";

type Data = {
  getProduct: {
    product: Product;
  };
};

const ProductPage: React.FC<PageProps<Data>> = ({ data }) => {
  const {
    getProduct: { product },
  } = data;

  return (
    <Layout pageTitle="Product page">
      <ProductCard product={product} />
    </Layout>
  );
};

export const query = graphql`
  query getProduct($prodId: Int) {
    getProduct {
      product(id: $prodId) {
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

export const Head: HeadFC<Data> = ({ data }) => {
  return <title>{data.getProduct.product.title || "Product page"}</title>;
};

export default ProductPage;
