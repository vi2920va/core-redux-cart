import React from "react";
import styled from "styled-components";
import CartIcon from "./CartIcon";

export default function ProductCard({ addToCart, item }) {
  return (
    <Card>
      <Img src={item.product_img} />
      <Title>{item.product_name}</Title>
      <Price>{item.price.toLocaleString()} 원</Price>
      <AddCartBtn onClick={() => addToCart()}>
        <CartIcon width="16" height="16" />
        <span>장바구니 담기</span>
      </AddCartBtn>
    </Card>
  );
}

const Card = styled.li`
  flex: 0 0 23%;
  margin-bottom: 2%;
`;

const Img = styled.img`
  width: 100%;
  border-radius: 3px;
`;

const Title = styled.p`
  margin-bottom: 12px;
  font-size: 15px;
  font-weight: 900;
  font-family: Noto Sans KR;
  font-style: normal;

  @media screen and (min-width: 767px) {
    font-size: 12px;
  }
  `;

const Price = styled.span`
  font-size: 15px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  color: #e82c23;
`;

const AddCartBtn = styled.button`
  all: unset;
  display: flex;
  align-items: center;

  width: 122px;
  height: 30px;
  margin-top: 24px;
  padding-left: 12px;
  background: #000000;
  border-radius: 3px;

  span {
    padding-left: 14px;
    font-family: Noto Sans KR;
    font-weight: bold;
    font-size: 13px;
    color: #ffffff;
  }
`;
