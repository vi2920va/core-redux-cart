import React from "react";
import ReactDOM from "react-dom";
import store from 'store/store';
import { Provider } from "react-redux";
import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";
import App from 'App';


const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
    font-family: Noto Sans KR;
  }
`;

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById("root")
);
