import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Room from "./pages/Room/Room";
import RoomList from "./pages/RoomList/RoomList";
import Login from "./pages/Login/Login";
import Contact from "./pages/Contact/Contact";
import Restaurant from "./pages/Restaurant/Restaurant";
import RestaurantInfo from "./pages/RestaurantInfo/RestaurantInfo";
import Cart from "./pages/Cart/Cart";
import Register from "./pages/Register/Register";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/rooms" component={RoomList} />
        <Route exact path="/room" component={Room} />
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/restaurants" component={Restaurant} />
        <Route path="/restaurant" component={RestaurantInfo} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </BrowserRouter>
  );
}
