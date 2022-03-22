import styled from 'styled-components';

export const ProductWrapper = styled.div`
  padding: 0 5%;
`;

export const ProductTitle = styled.h2`
  line-height: 1.2;
  margin-top: 67px;
  margin-bottom: 25px;
  padding-bottom: 10px;
  font-weight: 900;
  font-size: 28px;
  border-bottom: 4px solid #000;
`;

export const ProductList = styled.ul`
  flex-direction: column;
  @media screen and (min-width: 767px) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
  }
`;
