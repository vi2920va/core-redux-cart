import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import CartIcon from "./CartIcon/CartIcon";

export default function CartNoti() {
  const items = useSelector(store => store.cartReducer);
  const history = useHistory();
  return (
    <Icon onClick={() => history.push("/cart")}>
      <ItemCount>
        <span>{items.length}</span>
      </ItemCount>
      <CartIcon width="32" height="32" />
    </Icon>
  );
}

const Icon = styled.div`
  position: relative;
  margin-left: auto;
`;

const ItemCount = styled.div`
  position: absolute;
  top: -7px;
  right: -7px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 19px;
  height: 20px;
  border-radius: 2px;
  background-color: #e82c23;
  font-size: 11px;
`;
