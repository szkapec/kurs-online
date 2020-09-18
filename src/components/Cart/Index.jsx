import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "./context";

function formatPrice(price) {
  return `$${(price * 0.01).toFixed(2)}`;
}

function totalPrice(items) {
  return items.reduce((acc, item) => acc + item.quantity * item.pric, 0.0);
}

export default function Cart({ stripeToken }) {
  const [stripe, setStripe] = useState(null);
  const ctx = useContext(CartContext);

  useEffect(() => {
    if (window.Stripe) setStripe(window.Stripe(stripeToken));
  }, [stripeToken]);

  function checkout() {
    const testing = ctx.items.map((item) => item.price);
    console.log(testing.length);
    let tabs = [];

    for (let i = 0; i < testing.length; i++) {
      console.log(ctx.items[i].price);
      tabs.push(ctx.items[i].price);
    }

    console.log(tabs[0]);
    console.log(tabs[1]);
    console.log(tabs[2]);

    if (testing.length == 1) {
      stripe.redirectToCheckout({
        lineItems: [{ price: tabs[0], quantity: ctx.items[0].quantity }],
        mode: "payment",
        successUrl: "http://localhost:3000/success",
        cancelUrl: "http://localhost:3000/canceled",
      });
    } else if (testing.length == 2) {
      stripe.redirectToCheckout({
        lineItems: [
          { price: tabs[0], quantity: ctx.items[0].quantity },
          { price: tabs[1], quantity: ctx.items[1].quantity },
        ],
        mode: "payment",
        successUrl: "http://localhost:3000/success",
        cancelUrl: "http://localhost:3000/canceled",
      });
    } else if (testing.length == 3) {
      stripe.redirectToCheckout({
        lineItems: [
          { price: tabs[0], quantity: ctx.items[0].quantity },
          { price: tabs[1], quantity: ctx.items[1].quantity },
          { price: tabs[2], quantity: ctx.items[2].quantity },
        ],
        mode: "payment",
        successUrl: "http://localhost:3000/success",
        cancelUrl: "http://localhost:3000/canceled",
      });
    }
  }
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Quenity</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          {ctx.items.map((item) => (
            <tr key={item.name}>
              <th>{item.name}</th>
              <th>
                <img
                  src={`/images/${item.price}.jpg`}
                  alt={item.name}
                  width={50}
                />
              </th>
              <th>{item.quantity}</th>
              <th>{formatPrice(item.pric)}</th>
            </tr>
          ))}

          <tr>
            <td style={{ textAlign: "right" }} colSpan={4}>
              Total:{" "}
            </td>
          </tr>

          <tr>
            <td>{formatPrice(totalPrice(ctx.items))}</td>
          </tr>
        </tbody>
      </table>
      <button onClick={checkout}>Checkout now Stripe</button>
    </>
  );
}
