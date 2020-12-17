import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "./context";
import styled from "styled-components";
import { StyledButton } from "../../Styled/Button";
import { NavLink } from "react-router-dom";


function formatPrice(price) {
  return `${(price * 0.01).toFixed(2)}zł`;
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

  const ctxNew = JSON.parse(localStorage.getItem("items")) || []; 
  
  useEffect(() => {
    if (window.Stripe) setStripe(window.Stripe(stripeToken));
  }, [stripeToken]);

  useEffect(() => {
  })

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
      <StyledCart>

      <div className="yourbasket">Twój koszyk</div>
      {ctxNew.length !== 0 ? (
        ctxNew.map((item) => (

          <div key={item.name} className="cart">
            {console.log(item)}
            <div className="counter">Nazwa: {item.name}</div>
            <div>Cena: {formatPrice(item.pric)}</div>
            <div>
              Koszt całkowity:{" "}
              {formatPrice(totalPriceNumber(item.pric, item.quantity))}
            </div>
            <div>Ilość: {item.quantity}</div>
            <div><NavLink to={`/course/${item.id}`}>
                <StyledButton
                widthSmall
                  color={item.color}
                >
                  Szczegóły
                </StyledButton>
              </NavLink></div>
            <NavLink to={`/course/${item.id}`}><img src={item.img} alt={item.name} /></NavLink>
          
            <div>
         
            
              <NavLink to="/cart">
                <StyledButton
                  color={item.color}
                  onClick={() => {
                    ctx.localRemoveToCart(item);
                  }}
                >
                  Usuń z koszyka
                </StyledButton>
              </NavLink>
            </div>
          </div>
        ))
      ) : (
        <div className="cart-blank">
          <div>Twój koszyk jest pusty</div>
          <div className="counter">
            Dodaj do koszyka przedmioty i kup je szybko i wygodnie.
          </div>
        </div>
      )}

      {ctxNew.length !== 0 && (
        <StyledButtonWrapper>
          <StyledButton shop onClick={checkout}>Kup teraz</StyledButton>
        </StyledButtonWrapper>
      )}
      </StyledCart>
    </Container>
  );
}
const Container = styled.div`
  background-color: #fff;
`


const StyledCart = styled.div`

  font-family: "Kumbh Sans", sans-serif;
  max-width: 1280px;
  display: block;
  margin: 0px auto;
  background-color: white;
  min-height: 100vh;

  .yourbasket {
    text-align: center;
    padding: 20px 0 0;
    font-size: 24px;
    font-weight: 700;
  }
  a {
    text-decoration: none;
  }

  .cart {
    margin-top: 40px;
    text-align: center;
    padding-bottom: 10px;
    border-bottom: 1px solid #95a5a6;
    img {
      width: 80%;
      max-width: 400px;
      border-radius: 10px;
      margin: 10px 0;
    }
    div {
      margin-top: 10px;
      font-size: 18px;
    }
    @media (min-width: 1100px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 0px;
      grid-row-gap: 0px;

      div:nth-child(1) {
        grid-area: 1 / 1 / 2 / 2;
        margin-top: 30px;
      }
      img {
        grid-area: 1 / 2 / 2 / 3;
      }
      div:nth-child(2) {
        grid-area: 1 / 1 / 2 / 2;
        margin-top: 60px;
      }
      div:nth-child(3) {
        grid-area: 1 / 1 / 2 / 2;
        margin-top: 90px;
      }
      div:nth-child(4) {
        grid-area: 1 / 1 / 2 / 2;
        margin-top: 120px;
      }
      div:nth-child(5) {
        grid-area: 1 / 1 / 2 / 2;
        margin-top: 150px;
      }
      div:nth-child(6) {
        grid-area: 1 / 1 / 2 / 2;
        margin-top: 150px;
      }
      .div8 {
        grid-area: 1 / 1 / 2 / 2;
      }
    }
  }
  .cart-blank {
    padding: 30px;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    text-align: center;
    :last-child {
      font-size: 20px;
    }
    div {
      padding: 20px;
      line-height: 25px;

    }
  }
`;

const StyledButtonWrapper = styled.div`
  padding: 20px;
`;
