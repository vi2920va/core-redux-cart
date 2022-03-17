import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import CartIcon from "./CartIcon/CartIcon";
import { addCart } from '../store/actions/index';

export default function ProductCard({ item }) {
  const dispatch = useDispatch();

  return (
    <Card>
      <Img src={item.product_img} />
      <Title>{item.product_name}</Title>
      <Price>{item.price.toLocaleString()} 원</Price>
      <AddCartBtn onClick={() => dispatch(addCart(item))}>
        <CartIcon width={16} height={16} />
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
  border: 1px solid transparent;
  border-radius: 3px;
  cursor: pointer;

  svg{
    fill: white;
  }

  &:hover{
    border: 1px solid #000;
    border-radius: 3px;
    background: #fff;
    span{
      color: #000000;
    }

    svg{
      fill: #000000;
    }
  }

  span {
    padding-left: 14px;
    font-family: Noto Sans KR;
    font-weight: bold;
    font-size: 13px;
    color: #ffffff;
  }
`;
