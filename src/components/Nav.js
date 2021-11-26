import React, { useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import CartNoti from "./CartNoti";

export default function Nav({ itemCount }) {
  const history = useHistory();

  useEffect(() => {
    console.log("Nav render");
  });

  return (
    <NavContainer>
      <NavWrapper>
        <NavTitle onClick={() => history.push("/")}>wemarket</NavTitle>
        <CartNoti itemCount={itemCount} width="32" height="32" />
      </NavWrapper>
    </NavContainer>
  );
}

const NavContainer = styled.nav`
  background:#000;
  color:#fff;
`;

const NavWrapper = styled.div`
  display: flex;
  padding: 0.5% 5%;
`;

const NavTitle = styled.span`
  font-family: Noto Sans;
  font-style: italic;
  font-weight: 900;
  font-size: 28px;
  color: #fffef8;
`;
