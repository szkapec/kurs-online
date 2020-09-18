import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "./context";
import styled from "styled-components";
import { StyledButton } from "../../Styled/Button";

function formatPrice(price) {
  return `$${(price * 0.01).toFixed(2)}`;
}
function totalPrice(items) {
  return items.reduce((acc, item) => acc + item.quantity * item.pric, 0.0);
}

function totalPriceNumber(price, quantity) {
  return `${(price * 0.01).toFixed(2) * quantity * 100}`;
}

export default function Cart(props) {
  const stripeToken =
    "pk_test_51HRFuZHt5cjb9PVzBZ6OQ7nUtwkYJ1sowlw7kcof8eKWPcKiWT7X1gt3ZjxtaOIyTaUEWXQVJBk7OAAYeMnuC8df00bUimrTLA";
  const [stripe, setStripe] = useState(null);
  const ctx = useContext(CartContext);

  useEffect(() => {
    if (window.Stripe) setStripe(window.Stripe(stripeToken));
  }, [stripeToken]);


  function checkout() {
    const testing = ctx.tabs.map((item) => item.price);
    console.log(testing.length);
    let tabs = [];

    for (let i = 0; i < testing.length; i++) {
      console.log(ctx.tabs[i].price);
      tabs.push(ctx.tabs[i].price);
    }

    if (testing.length === 1) {
      stripe.redirectToCheckout({
        lineItems: [{ price: tabs[0], quantity: ctx.tabs[0].quantity }],
        mode: "payment",
        successUrl: "http://localhost:3000/success",
        cancelUrl: "http://localhost:3000/canceled",
      });
    } else if (testing.length === 2) {
      stripe.redirectToCheckout({
        lineItems: [
          { price: tabs[0], quantity: ctx.tabs[0].quantity },
          { price: tabs[1], quantity: ctx.tabs[1].quantity },
        ],
        mode: "payment",
        successUrl: "http://localhost:3000/success",
        cancelUrl: "http://localhost:3000/canceled",
      });
    } else if (testing.length === 3) {
      stripe.redirectToCheckout({
        lineItems: [
          { price: tabs[0], quantity: ctx.tabs[0].quantity },
          { price: tabs[1], quantity: ctx.tabs[1].quantity },
          { price: tabs[2], quantity: ctx.tabs[2].quantity },
        ],
        mode: "payment",
        successUrl: "http://localhost:3000/success",
        cancelUrl: "http://localhost:3000/canceled",
      });
    }
  }

  return (
    <Container className="container">
      <div className="yourbasket">Twój koszyk</div>
      {ctx.tabs.lenght !== 0 ? (
        ctx.tabs.map((item) => (
          <div key={item.name} className="cart">
            <div>Nazwa: {item.name}</div>
            <div>Cena: {formatPrice(item.pric)}</div>
            <div>
              Koszt całkowity:{" "}
              {formatPrice(totalPriceNumber(item.pric, item.quantity))}
            </div>
            <div>Ilość: {item.quantity}</div>
            <div>
              <img
                src={`/images/${item.price}.jpg`}
                alt={item.name}
                width={100}
              />
            </div>
            <div>
              <a href="/cart">
                <StyledButton
                  color={item.color}
                  onClick={() => {
                    ctx.localRemoveToCart(item);
                  }}
                >
                  Usuń z koszyka
                </StyledButton>
              </a>
            </div>
          </div>
        ))
      ) : (
        <div className="cart">
          Twój koszyk jest pusty
          <div>Dodaj do koszyka przedmioty i kup je szybko i wygodnie.</div>
        </div>
      )}

      <div>
        <StyledButton onClick={checkout}>Kup teraz</StyledButton>
      </div>
    </Container>
  );
}

const Container = styled.div`
  margin: 20px;
  .yourbasket {
    text-align: center;
    margin: 20px;
    font-weight: 700;
  }
  a {
    text-decoration: none;
  }
  .cart {
    margin-top: 40px;
    text-align: center;
    div {
      margin-top: 5px;
    }
  }
`;
