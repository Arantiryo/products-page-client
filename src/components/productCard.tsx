import React from "react";
import styled from "styled-components";
import { Product } from "../pages";
import { colors, mq } from "../globalStyles";

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { title, image, price, rating } = product;

  return (
    <CardContainer>
      <CardContent>
        <CardImageContainer>
          <CardImage src={image} alt={title} />
        </CardImageContainer>
        <CardBody>
          <CardTitle>{title || ""}</CardTitle>
          <CardPrice>{`$${price}`}</CardPrice>
          <CardFooter>
            <Stars rating={rating.rate} />
          </CardFooter>
        </CardBody>
      </CardContent>
    </CardContainer>
  );
};

export default ProductCard;

const CardContainer = styled.div`
  border-radius: 6px;
  color: ${colors.text};
  background-color: white;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.15);
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${mq[0]} {
    width: 90%;
  }
  ${mq[1]} {
    width: 47%;
  }
  ${mq[2]} {
    width: 31%;
  }
  height: 380px;
  margin: 10px;
  overflow: hidden;
  position: relative;
  transition: all 0.3s;
  :hover: {
    transform: scale(1.05);
  }
  cursor: pointer;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
`;

const CardTitle = styled.h3`
  text-align: center;
  font-size: 1.2rem;
  line-height: 1rem;
  font-weight: 700;
`;

const CardPrice = styled.h4`
  text-align: center;
  font-size: 1.1rem;
  line-height: 1rem;
  font-weight: 500;
  margin-bottom: 1rem;
`;

const CardImageContainer = styled.div`
  height: 220px;
  position: relative;
`;

const CardImage = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  filter: grayscale(30%);
`;

const CardBody = styled.div`
  padding: 18px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const CardFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Stars = styled.div.attrs((props: { rating: number }) => props)`
  --percent: calc(${(props) => props.rating} / 5 * 100%);
  --star-color: #fff;
  --star-background: #fc0;

  display: inline-block;
  font-size: 1rem;
  font-family: Times; // make sure ★ appears correctly
  line-height: 1;

  &::before {
    content: "★★★★★";
    letter-spacing: 3px;
    background: linear-gradient(
      90deg,
      var(--star-background) var(--percent),
      var(--star-color) var(--percent)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
