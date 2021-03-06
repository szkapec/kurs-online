import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ic_play_for_work } from "react-icons-kit/md/ic_play_for_work";
import { withBaseIcon } from "react-icons-kit";
import mail from '../../image/nav/mail.svg';
import phone from '../../image/nav/phone.svg'
export default function Navbar() {
  return (
   <StyledContainer>
      <StyledNav>
      <div className="home">
          <NavLink exact to="/">
            Główna
          </NavLink>
      </div>
      
      <div className="course">
        <NavLink exact to="/course">
          Kursy
        </NavLink>
      </div>

      
      <div className="responsive-mail"> 
        <img src={mail} alt="mail"/> <a href="mailto:mateusz.kapron24@gmail.com">E-mail</a>
      </div>
      <div className="responsive-phone"> 
       <img src={phone} alt="mail"/> <a href="tel:+48661360889">661-360-889 </a> 
      </div>

      <div className="cart">
        <NavLink exact to="/cart">
          Koszyk <SiceIconNav icon={ic_play_for_work} />{" "}
        </NavLink>
      </div>

    </StyledNav>
   </StyledContainer>
  );
}
const StyledContainer = styled.nav`
    background-color: #535c68;
`
const StyledNav = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  width: 100%;
  height: 40px;

  display: grid;
  grid-template-columns: 80px 80px 1fr;
  grid-template-rows: 40px;
  text-align: center;
  z-index: 9999;
  @media(min-width: 900px) {
    grid-template-columns: repeat(5,180px);
    justify-content: space-around;
  }

  .responsive-mail, .responsive-phone {
    display: none;
    @media(min-width: 900px) {
      color:white;
      cursor: pointer;
      display: inline;
      padding: 10px 0px 0px 5px;
    }
  }



  a {
    text-decoration: none;
    list-style: none;
    color: white;
    :hover {
      text-decoration: underline;
    }
  }
  img {
    width: 15px;
    height: 15px;
    filter: invert(100%);
  }

  button {
    background-color: #fff;
    padding: 3px 7px;
    border: none;
    border-radius: 4px;
  }
  .home {
    padding: 10px 0px;
  }
  .cart {
    padding: 10px 0px;
    text-align:right;
    margin: 0 5px 0 0;
  }
  .course {
    padding: 10px 0px;
  }
`;

const SiceIconNav = withBaseIcon({
  size: 24,
  style: {
    color: "white",
  },
});
