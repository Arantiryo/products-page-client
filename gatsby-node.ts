// @ts-nocheck
import { GatsbyNode } from "gatsby";
import { resolve } from "path";

export const createPages: GatsbyNode["createPages"] = async ({
  actions,
  graphql,
}) => {
  const { createPage } = actions;

  const productsDTO = await graphql(`
    query productList {
      productList {
        products {
          id
          title
        }
      }
    }
  `);

  productsDTO.data.productList.products.forEach(({ id }) =>
    createPage({
      path: `/products/${id}`,
      component: resolve("./src/templates/productPage.tsx"),
      context: {
        prodId: id,
      },
    })
  );
};
