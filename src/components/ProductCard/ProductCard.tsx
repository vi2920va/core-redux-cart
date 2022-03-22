import React from 'react'
import CardProps from './ProductCard.type';
import cart from 'store/cart';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'store/store';
import CartIcon from 'components/CartIcon/CartIcon';
import * as S from './ProductCard.styled';


const ProductCard = ({ item }: CardProps) => {
  const dispath: AppDispatch = useDispatch();

  return (
    <S.CardItem>
      <S.CardImg src={item.product_img} />
      <S.CardTitle>{item.product_name}</S.CardTitle>
      <S.CardText>{item.price}</S.CardText>
      <S.CartBtn onClick={() => dispath(cart.actions.addCart(item))}>
        <CartIcon width={16} height={16} />
        <span>장바구니 담기</span>
      </S.CartBtn>
    </S.CardItem>
  )
}

export default ProductCard;