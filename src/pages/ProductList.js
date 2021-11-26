import React, { useEffect } from "react";
import styled from "styled-components";
import ProductCard from "../components/ProductCard";

function ProductList({ addToCart }) {
  useEffect(() => {
    console.log("ProductList render");
  });

  return (
    <ListContainer>
      <Title>상품 목록</Title>
      <CardContainer>
        {CART_ITEM.map((e, i) => (
          <ProductCard key={i} item={e} addToCart={() => addToCart(e)} />
        ))}
      </CardContainer>
    </ListContainer>
  );
}

export default ProductList;

const ListContainer = styled.div`
  padding: 0 5%;
`;

const Title = styled.p`
  margin-top: 67px;
  margin-bottom: 22px;
  font-weight: 900;
  font-size: 28px;
  border-bottom: 4px solid #000;
`;


const CardContainer = styled.ul`
  flex-direction: column;
  
  @media screen and (min-width: 767px) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const CART_ITEM = [
  {
    isChecked: true,
    product_name: "플루크 new 피그먼트 오버핏 반팔 티셔츠 FST701",
    product_id: 1304,
    product_img: "/images/tShirt.jpg",
    price: 33250,
  },
  {
    isChecked: true,
    product_name: "르아브 미니멀리즘 네이비 블루 셔츠",
    product_id: 4204,
    product_img: "/images/blueShirts.png",
    price: 43250,
  },
  {
    isChecked: true,
    product_name: "랩12 20SS 오픈 카라/투 버튼 피케 티셔츠",
    product_id: 4204,
    product_img: "/images/piShirts.png",
    price: 103250,
  },
  {
    isChecked: true,
    product_name: "랩12 20SS 오픈 카라/투 버튼 피케 티셔츠",
    product_id: 4204,
    product_img: "/images/pants.png",
    price: 53250,
  },
  {
    isChecked: true,
    product_name: "플루크 new 피그먼트 오버핏 반팔 티셔츠 FST701",
    product_id: 1304,
    product_img: "/images/tShirt.jpg",
    price: 33250,
  },
  {
    isChecked: true,
    product_name: "르아브 미니멀리즘 네이비 블루 셔츠",
    product_id: 4204,
    product_img: "/images/blueShirts.png",
    price: 43250,
  },
  {
    isChecked: true,
    product_name: "랩12 20SS 오픈 카라/투 버튼 피케 티셔츠",
    product_id: 4204,
    product_img: "/images/piShirts.png",
    price: 103250,
  },
  {
    isChecked: true,
    product_name: "랩12 20SS 오픈 카라/투 버튼 피케 티셔츠",
    product_id: 4204,
    product_img: "/images/pants.png",
    price: 53250,
  },
];
