import styled from 'styled-components';

export const CardItem = styled.li`
  flex: 0 0 23%;
  margin-bottom: 2%;
`;

export const CardImg = styled.img`
  width: 100%;
  border-radius: 3px;
`;

export const CardTitle = styled.h3`
  margin-bottom: 12px;
  font-size: 15px;
  font-weight: 900;
  font-family: Noto Sans KR;
  font-style: normal;
`;

export const CardText = styled.p`
  font-size: 15px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  color: #e82c23;
`;

export const CartBtn = styled.button`
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

  svg {
    fill: white;
  }

  &:hover {
    border: 1px solid #000;
    border-radius: 3px;
    background: #fff;

    span {
      color: #000000;
    }

    svg {
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
