import React, { useContext, useEffect } from "react";
import products from "../../Data/Products";
import { CartContext } from "../Cart/context";
import styled from "styled-components";
import { StyledButton } from "../../Styled/Button";
import { ic_shopping_cart } from "react-icons-kit/md/ic_shopping_cart";
import { withBaseIcon } from "react-icons-kit";
import {NavLink} from 'react-router-dom';
import {ic_code} from 'react-icons-kit/md/ic_code';
export default function Store({addCourse, radius}) {
  const cartCtx = useContext(CartContext);

    useEffect(() => {   
    window.scrollTo(0,0)
  })

  const nav = "=>"
  return (
    <>
    <StyledDesc radius={radius} className="counter">Kliknij w zdjęcie aby zobaczyć opis
    {addCourse&&<div className="add-course">Popularne kursy programowania</div>}
    </StyledDesc>
    
    <Container>
      {products.map((product) => (
        <div key={product.name} className="course">
          <div>
            <NavLink exact to={`/course/${product.id}`}>
              <img
                src={`/images/${product.price}.jpg`}
                alt={product.name}
              />
            </NavLink>
          </div>
          <div>{product.name}</div>
          <div>
            <StyledButton
              color={product.color}
              onClick={() => {
                cartCtx.localAddToCart(product);
              }}
            >
              Dodaj do koszyka
              <SiceIconCart icon={ic_shopping_cart} />
            </StyledButton>
          </div>
          <div className="nav">
              <div className=""><NavLink exact to={`/course/${product.id}`}>{nav}</NavLink></div>
          </div>
        </div>
      ))}
    </Container>
    </>
  );
}


const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  max-width: 1280px;
  min-height: 100vh;
  /* display: block; */
  margin: 0 auto;
  position: relative;
  text-align: center;
  background-color: #ecf0f1;


  .nav {
    position: absolute;
    top: 10px; 
    right: 60px;
    width: 20px;
    @media(min-width: 600px) {
      right: 10%;
    }
    @media(min-width: 800px) {
      right: 10%;
    }
    @media(min-width: 1100px) {
      right: 50px;
    }
  }
  .course {
    max-width: 540px;
    display: block;
    margin: 0 auto;
    a{color:black}

    position: relative;
    padding: 20px;
    font-size: 20px;
    div {
      padding-top: 10px;
    }
  }
  img {
    width: 90%;
    border-radius: 20px;
    max-height: 240px;

  }


@media(min-width: 600px) {
  img {
    width: 500px;
  }
}
@media(min-width: 1100px) {
  grid-template-columns: repeat(2, 1fr);
}
`;

const SiceIconCart = withBaseIcon({
  size: 20,
  style: {
    color: "#fffff",
    marginLeft: "4px",
  },
});

const StyledDesc = styled.div`

  max-width: 1280px;
  margin: 0 auto;
  text-align: center;
  background-color: #ecf0f1;
  font-size: 20px;
  padding: 15px 0;
  border-top-right-radius: ${props => props.radius?'30px':'0px'};
  border-top-left-radius: ${props => props.radius?'30px':'0px'};
  .add-course {
    font-size: 20px;
    text-align: center;
    padding: 20px;
    background-color: #ecf0f1;
    border-radius: 30px 30px 0px 0px;
    text-decoration: underline;
  }


`

