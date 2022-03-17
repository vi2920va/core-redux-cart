import React from "react";
import CartIcon from "./CartIcon/CartIcon";
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import styled from "styled-components";

export default function CartNoti() {
  const items = useSelector(store => store.cartReducer);
  const navigate = useNavigate();

  return (
    <Icon onClick={() => navigate("/cart")}>
      <ItemCount>
        <span>{items.length}</span>
      </ItemCount>
      <CartIcon width={25} height={25} />
    </Icon>
  );
}

const Icon = styled.div`
  position: relative;
  margin-left: auto;
  padding: 2px 0;
  cursor: pointer;

  svg{
    fill: white;
  }
  &:hover{
    svg{
      fill: gray;
    }
  }
`;

const ItemCount = styled.div`
  position: absolute;
  top: -1px;
  right: -6px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15px;
  height: 15px;
  border-radius: 2px;
  background-color: #e82c23;
  font-size: 11px;
`;
