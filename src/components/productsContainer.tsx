import * as React from "react";
import styled from "styled-components";

const ProductsContainer: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <ProductsContainerStyled>{children}</ProductsContainerStyled>;
};

const ProductsContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  align-self: center;
  flex-grow: 1;
  width: 100%;
  padding-bottom: 40px;
`;

export default ProductsContainer;
