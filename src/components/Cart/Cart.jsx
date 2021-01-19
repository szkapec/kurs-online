import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "./context";
import styled from "styled-components";
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
  const [price, setPrice] = useState(0);

console.log(stripe,'stripppe')
  const ctx = useContext(CartContext);

  const ctxNew = JSON.parse(localStorage.getItem("items")) || [];

  useEffect(() => {
    console.log(window.Stripe)
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
  const finalPrice = () => {
    let price = 0;
    ctxNew.map(item => {
      price = price + item.quantity * Number(item.pric)
    })
    return price;
  }
  return (
    <Container className="container">
      <StyledCart >
        <div className="yourbasket">Twój koszyk</div>
        {ctxNew.length !== 0 ? (
          ctxNew.map((item) => (

            <div className="container-m" key={item.name}>
              <div className="cart">
                <NavLink to={`/course/${item.id}`}><img src={item.img} alt={item.name} /></NavLink>
                <div className="counter">
                  <Rate color={item.color} className="rate">raty zero</Rate>
                  <div className="name"><b>{item.name}</b></div>
                </div>
              </div>

              <div className="price">
                <div>Cena: <b>{formatPrice(item.pric)}</b></div>
                <div>
                  Koszt całkowity:{" "}
                  <b>{formatPrice(totalPriceNumber(item.pric, item.quantity))}</b>
                </div>
                <div>Ilość: <b>{item.quantity}</b></div>
              </div>

              <StyledButtonWrapper className="navlink">
                <NavLink to={`/course/${item.id}`}>
                  <StyledButton
                    widthSmall
                    color={item.color}
                  >
                    Szczegóły
                </StyledButton>
                </NavLink>
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
              </StyledButtonWrapper>
            </div>
          ))
        ) : (
            <StyledCartBlank>
              <div>Twój koszyk jest pusty</div>
              <div className="counter">
                Dodaj do koszyka przedmioty i kup je szybko i wygodnie.
          </div>
            </StyledCartBlank>
          )}
        <StyledButtonPrice>
          <NavLink to="/">Kontynułuj zakupy</NavLink>
          {ctxNew.length !== 0 && <div>Do zapłaty: <br/> <b>{(finalPrice() * 0.01).toFixed(2)}zł</b></div>}
        </StyledButtonPrice>
        {ctxNew.length === 0 && (
          <Styledleng>
          </Styledleng>

        )}
        {ctxNew.length !== 0 && (
          <StyledButtonShop>
            <StyledButton shop onClick={checkout}>Kup teraz</StyledButton>
          </StyledButtonShop>

        )}
      </StyledCart>
    </Container>
  );
}
const Container = styled.div`
  background-color: #fff;
`


const StyledCart = styled.div`
    max-width: 1000px;
    width: 100%;
    margin: 0 auto;
    .cart {
      display: flex;
      margin-top: 30px;
      align-items: center;
      border-top: 1px solid #95a5a6;

      .counter {
        .rate {
          color: white;
          text-align: center;
          width: 70px;
          padding: 5px 10px;
        }
        .name {
          font-size: 18px;
          margin-top: 10px;
          letter-spacing: 1px;
        }
      }
    }
    .price {
      display: flex;
      margin-left: 20px;
      flex-wrap: wrap;
      font-size: 18px;
      div {
        width: 100%;
        margin-top: 7px;
        letter-spacing: 1px;
      }
      div:last-child {
        margin-bottom: 20px;
      }

    }

    img {
      margin: 20px;
      width: 120px;
      height: 80px;
    }

    .yourbasket {
      font-size: 26px;
      margin: 15px 20px;
      font-weight: 700;
      
    }
    @media(min-width: 800px) {
      .container-m {
        display: flex;
        flex-wrap: wrap;
        border-top: 1px solid #95a5a6;
      }
      .cart {
      border:none;
      margin-top: 40px;
      min-width: 500px;
      min-height: 180px;
      .counter {
        .rate {
          width: 90px;
          font-size: 18px;
        }
        .name {
          font-size: 24px;
          margin-top: 15px;
        }
      }
    }
    .price {
      margin-left: 30px;
      flex-wrap: wrap;
      font-size: 20px;
      max-width: 250px;
      height: 150px;
      margin-top: 50px;
      div {
        width: 100%;
        margin-top: 7px;
        letter-spacing: 1px;
      }
      div:last-child {
        margin-bottom: 20px;
      }

    }

    img {
      margin: 20px;
      width: 220px;
      height: 100%;
    }

    .yourbasket {
      font-size: 30px;
     
    }
    }
`;

const StyledButton = styled.div`
    background-color: ${props => props.color ? props.color : 'orange'};
    width: 120px;
    display: inline-block;
    padding: 10px 10px;
    margin: 10px 5px;
    text-align: center;
    color: white;
    border: none;
    :hover {
      text-decoration: underline;
    }
`

const StyledButtonWrapper = styled.div`
  text-align: center;

  @media(min-width: 800px) {
      display: block;
      width: 100%;
      font-size: 20px;
      div {
        width: 180px;
        margin: 20px;
      }
    }
`
const Rate = styled.div`
  background-color: ${({ color }) => color ? color : 'orange'};
`

const StyledButtonPrice = styled.div`
    border-top: 1px solid #95a5a6;
    margin-top: 30px;
    display: flex;
    align-items: center;
    a,div {
      width: 100%;
      text-align:center;
      font-size: 16px;
      line-height: 30px;
      b {
        font-size: 22px;
      }
    }
    a {
      color: black;
    }
  @media(min-width: 800px) {
    margin-top: 50px;
    a,div {
      width: 100%;
      text-align:center;
      font-size: 22px;
      line-height: 35px;
      b {
        font-size: 26px;
      }
    }
    a {
      color: black;
    }
  }
`

const StyledButtonShop = styled.div`
  text-align: center;
  margin: 10px;
  @media(min-width: 800px) {
      display: block;
      width: 100%;
      font-size: 20px;
      div {
        width: 180px;
        margin: 20px;
      }
    }
`

const StyledCartBlank = styled.div`
  margin-top: 30px;
  margin-left: 20px;
  font-size: 18px;
  line-height: 30px;
`

const Styledleng = styled.div`
  min-height: 40vh;
`