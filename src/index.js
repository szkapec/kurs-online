import React from 'react';
import ReactDOM from 'react-dom';
import CartProvider from "./components/Cart/context";
import './Styled/styleGlobal.css'
import Root from './Root/Root';


ReactDOM.render(
  <CartProvider>
    <Root/>
  </CartProvider>,
     document.getElementById('root'));
