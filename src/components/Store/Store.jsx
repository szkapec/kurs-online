import React, { useContext, useEffect, useState } from "react";
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

    const [alert, setAlert] = useState(false)
    useEffect(() => {   
    // window.scrollTo(0,0)
  })

  const addalert = (product) => {
    setAlert(true)
    setTimeout(() => setAlert(false), 3000)
  }
   
  

  return (
    <>
    <StyledDesc radius={radius} className="counter">
    {addCourse&&<div className="course-online">Popularne kursy programowania</div>}
    <span className="line"></span>
    </StyledDesc>
   
    <Container>
      <Product>
      {products.map((product) => (
        <div key={product.name} className="course">
           {alert&&<StyledAlert color={product.color}>
              <div>Dodano do koszyka</div>
      </StyledAlert>}
          <h3 >{product.name}</h3>
          <div className="description">
            {product.desc}
          </div>
        
          <div>
            <NavLink exact to={`/course/${product.id}`}>
              <img
                src={product.img}
                alt={product.name}
              />
            </NavLink>
            <StyledButton widthSmall color={product.color}>
              <NavLink exact to={`/course/${product.id}`}>
                Szczegóły
              </NavLink>
            </StyledButton>
          </div>
          <div>{product.name}</div>
          <div>
          

            <StyledButton
              color={product.color}
              onClick={() => {
                addalert(product)
                cartCtx.localAddToCart(product);
              }}
            >
              Dodaj do koszyka
              <SiceIconCart icon={ic_shopping_cart} />
            </StyledButton>
            
          </div>
     
          <div className="nav">
              <div className=""><NavLink exact to={`/course/${product.id}`}></NavLink></div>
          </div>
    
        </div>
      ))}
      </Product>
    </Container>
    </>
  );
}
const Container = styled.div`
  background-color: #fff;
  z-index: 3;
`

const StyledAlert = styled.div`
  position: fixed;
  top: 0;
  z-index:999999;
  left: 0px;
  right: 0px;
  width: 100%;
  background-color: white;
  box-shadow: 0 1px 1px 0 rgba(0,0,0,.06),0 2px 5px 0 rgba(0,0,0,.2);
  height: 40px;

  div {
    text-align: center;
    margin-bottom: 10px;
  }
`

const Product = styled.div`
  z-index: 3;
  background-color: #fff;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  max-width: 1280px;
  min-height: 100vh;
  margin: 0 auto;
  position: relative;
  text-align: center;
  padding-bottom: 50px;


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

      z-index: 3;
    width: 80%;
    display: block;
    margin: 0 auto;
    box-shadow: 0 1px 1px 0 rgba(0,0,0,.06),0 2px 5px 0 rgba(0,0,0,.2);
    margin: 10px auto 30px;
    border-radius: 10px;
    font-family: 'Exo 2', sans-serif;
   
    position: relative;
    padding: 20px;
    font-size: 20px;
    a{color:black}
    div {
      padding-top: 10px;
    }

    h3 {
      line-height: 25px;
      letter-spacing: 2px;
      margin: 10px 0;
    }
    .description {
     font-size:16px;
     line-height: 25px;
     margin-bottom: 20px;
     @media (min-width: 1000px) {
      font-size: 18px;
      line-height: 25px;
    }
    }
  }
  img {
    width: 80%;
    border-radius: 5px;
    max-height: 200px;
    max-width: 400px;

  }
  .line {
    background-color: #6ab04c;
    width: 80px;
    height: 5px;
    display: block;
    margin: 0 auto;
    content: '';
    border-radius: 50%;
  }
  .trust {
    text-align: center;
    font-size: 20px;
    text-transform: uppercase;
  }

@media(min-width: 600px) {
  img {
    width: 500px;
  }
}
@media(min-width: 1100px) {
  grid-template-columns: repeat(2, 1fr);
  .course {
    margin: 30px auto;
  }
  h3 {
    font-size: 26px;
    letter-spacing: 3px;
  }
  .description {
    font-size: 20px;
    line-height: 30px;
  }
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
  background-color: #fff;
z-index: 3;
.course-online {
    font-size: 28px;
    text-transform: uppercase;
    text-align: center;
    padding: 20px;
    font-weight: 700;
  }

  max-width: 1280px;
  margin: 0 auto;
  text-align: center;
  /* background-color: #ecf0f1; */
  font-size: 20px;
  padding: 15px 0;
  border-top-right-radius: ${props => props.radius?'30px':'0px'};
  border-top-left-radius: ${props => props.radius?'30px':'0px'};
  .add-course {
    font-size: 20px;
    text-align: center;
    padding: 10px;
    /* background-color: #ecf0f1; */
    border-radius: 30px 30px 0px 0px;
    text-decoration: underline;
  }


`

