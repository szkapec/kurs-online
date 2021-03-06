import React, { useState, createContext } from "react";
export const CartContext = createContext(null);

export default function CartProvider({ children }) {
  let tabs = JSON.parse(localStorage.getItem("items")) || [];
  const [items, setItems] = useState([]);

  function addToCart(item) {
    setItems((prevState) => [...prevState, item]);
  }

  function localAddToCart(item) {
    let { color, name, pric, price, quantity, img, id, cart } = item;
    let product = { color, name, pric, price, quantity, img, id };
    let found = tabs.find((items) => items.price === product.price);
    cart = true;
    if (found) {
      let elTab = tabs.find((item) => item.price === found.price);
      elTab.quantity++;
    } else {
      product.quantity = 1;
      product.cart = true;
      tabs.push(product);
    }

    localStorage.setItem("items", JSON.stringify(tabs));
  }



  function localRemoveToCart(item) {
    let { color, name, pric, price, quantity, id } = item;
    let product = { color, name, pric, price, quantity, id };
    let found = tabs.find((items) => items.price === product.price);
    if (found.quantity >= 2) {
      localStorage.removeItem("items");
      found.quantity--;
      localStorage.setItem("items", JSON.stringify(tabs));
      console.log("wieksze od 1");
    } else if (found.quantity === 1) {
      let locTab = tabs.filter((item) => item.price !== found.price);
      console.log(locTab)
      product.cart = false;
      localStorage.removeItem("items");
      found.quantity = 0;
      tabs = locTab;
      localStorage.setItem("items", JSON.stringify(locTab));
    } else console.log("Błąd danych");
  }

  function itemsWithQuantities(items) {
    return items.reduce((acc, item) => {
      const found = acc.find((_item) => _item.price === item.price);
      if (found) {
        found.quantity++;
      } else {
        acc.push({
          quantity: 1,
          ...item,
        });
      }
      return acc;
    }, []);
  }
  return (
    <CartContext.Provider
      value={{
        items: itemsWithQuantities(items),
        addToCart,
        localAddToCart,
        localRemoveToCart,
        tabs: tabs,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
