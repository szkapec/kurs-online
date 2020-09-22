import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Store from "../components/Store/Store";
import Cart from "../components/Cart/Cart.jsx";
import Canceled from "../components/Cart/Promis/Canceled";
import Success from "../components/Cart/Promis/Success";
import Home from '../components/Home/Home';
import Course from '../components/Course/Course';
import Default from '../components/Navbar/Default';
import Usun from './usun';
class Root extends React.Component {
  state = {};

  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/course" component={Store} />
            <Route exact path="/course/:id" component={Course} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/canceled" component={Canceled} />
            <Route exact path="/success" component={Success} />
            <Route exact path="/usun" component={Usun} />
            <Route component={Default} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default Root;
