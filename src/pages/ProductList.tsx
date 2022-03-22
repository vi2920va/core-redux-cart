import React from "react";
import ProductCard from "components/ProductCard/ProductCard";
import CART_ITEM from "data/CART_ITEM";
import * as S from './Product.styled';

const ProductList = () => {
  return (
    <S.ProductWrapper>
      <S.ProductTitle>상품 목록</S.ProductTitle>
      <S.ProductList>
        {CART_ITEM.map((e, i) => (
          <ProductCard key={i} item={e} />
        ))}
      </S.ProductList>
    </S.ProductWrapper>
  );
}

export default ProductList;