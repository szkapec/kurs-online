import React from 'react';
import {BrowserRouter as Router, Route, Switch, HashRouter} from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar'
import Store from '../components/Store/Store'
import Cart from '../components/Cart/Cart.jsx';
import Canceled from '../components/Cart/Promis/Canceled';
import Success from '../components/Cart/Promis/Success';
class Root extends React.Component {
  state = {}

  render() {

    return(
      <>
      <Router>
          <Navbar/>  
          <Switch>
            <Route exact path="/" component={Store} /> 
            <Route path="/cart" component={Cart} /> 
            <Route path="/canceled" component={Canceled} /> 
            <Route path="/success" component={Success} /> 
          </Switch>
                    
      </Router>
      </>
    )
  }
}


export default Root;
