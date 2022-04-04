import React from "react";
import Container from "./components/container/container";
import SideBar from "./components/sidebar/sidebar";
import { Route, Switch } from "react-router-dom";
import User from "./components/layouts/user";
import Main from "./components/layouts/main";
// import Cart from "./components/layouts/cart";
// import Products from "./components/layouts/products";
// import Favorites from "./components/layouts/favorites";
// import Settings from "./components/layouts/settings";

function App() {
  return (
    <>
      <Container>
        <SideBar />
      </Container>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/user" component={User} />
      </Switch>

      {/* <Route path={"/user/:userId?/Cart"} component={Cart}></Route>
      <Route path={"/products"} component={Products}></Route>
      <Route path={"/user/:userId?/favorites"} component={Favorites}></Route>
      <Route path={"/user/:userId?/settings"} component={Settings}></Route>  */}
    </>
  );
}

export default App;
