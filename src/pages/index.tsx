import * as React from "react";
import { HeadFC, PageProps, graphql } from "gatsby";
import Layout from "../components/layout";
import ProductCard from "../components/productCard";
import ProductsContainer from "../components/productsContainer";

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
};

export type Rating = {
  rate: number;
  count: number;
};

type Data = {
  productList: {
    products: Product[];
  };
};

const IndexPage: React.FC<PageProps<Data>> = ({ data }) => {
  console.log(data.productList.products[0]);
  if (!data?.productList) return <div>No data</div>;

  const { products } = data.productList;

  return (
    <Layout pageTitle={"Products page"}>
      <ProductsContainer>
        {products.map((product) => {
          return <ProductCard key={product.id} product={product}></ProductCard>;
        })}
      </ProductsContainer>
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
