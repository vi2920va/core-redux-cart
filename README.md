# Redux Cart

## 프로젝트 소개

상품 목록을 기반으로 장바구니 서비스를 제공하는 프로젝트 입니다.

## 실행 방법

```bash
$ npm run start
```

## 프로젝트 링크

## 적용 기술

- React.js(Hooks)
- React-router-dom
- React-redux
- Styled-Components

## 구현 기능

## 폴더 구조

```bash
src
├── Components
│   ├── CartItem.js
│   ├── CartNoti.js
│   ├── ProductCard.js
│   └── Nav.js
├── Pages
│   ├── CartList.js // 상품 리스트 페이지
│   └── ProductList.js // 장바구니 페이지
├── Routes.js
├── index.js
└── store
    ├── actions
    │   └── index.js // 액션 객체들
    └── reducers
        ├── cartReducer.js // 개별 리듀서
        └── index.js // 루트 리듀서
```
