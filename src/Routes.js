import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductList from "./pages/ProductList";
import CartList from "./pages/CartList";
import Nav from "./components/Nav";

function Routes() {

  return (
    <Router>
      <Nav />
      <Switch>
        <Route
          exact
          path="/"
          component={ProductList}
        />
        <Route
          exact
          path="/cart"
          component={CartList}
        />
      </Switch>
    </Router>
  );
}

export default Routes;