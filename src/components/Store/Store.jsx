import React, { useContext } from "react";
import products from "../../Data/Products";
import { CartContext } from "../Cart/context";
import styled from "styled-components";
import { StyledButton } from "../../Styled/Button";
import { ic_shopping_cart } from "react-icons-kit/md/ic_shopping_cart";
import { withBaseIcon } from "react-icons-kit";
import {NavLink} from 'react-router-dom';


export default function Store() {
  const cartCtx = useContext(CartContext);
  
  return (
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
        </div>
      ))}
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
  background-color: #ecf0f1;
  .course {
    padding: 20px;
    font-size: 20px;
    div {
      padding-top: 10px;
    }
  }
  img {
    width: 90%;
    border-radius: 20px;
  }
`;

const SiceIconCart = withBaseIcon({
  size: 20,
  style: {
    color: "#fffff",
    marginLeft: "4px",
  },
});
