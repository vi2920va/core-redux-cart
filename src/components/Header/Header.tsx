import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Header.styled';
import CartNoti from 'components/CartNoti';

const Header = () => {
  const navigate = useNavigate();

  return (
    <S.Header>
      <S.Box>
        <S.Title onClick={() => navigate("/")}>wemarket</S.Title>
        <CartNoti />
      </S.Box>
    </S.Header>
  )
}

export default Header;