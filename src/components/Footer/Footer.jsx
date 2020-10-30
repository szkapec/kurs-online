import React from "react";
import styled from "styled-components";
import fb from "../../image/facebook.PNG";
import ln from "../../image/linkedin.PNG";
import gh from "../../image/github.svg";
import mail from "../../image/nav/mail.svg";
import phone from "../../image/nav/phone.svg";
export default function Footer() {
  return (
    <StyledContainer>
    <StyledComponentsFooter>
      <StyledComponents>
        <section>
          <h2>Aplikacja</h2>
          <p>
            To jest testowa aplikacja napisana w React, react-hook, stripe, local-storage, context-api, styled-components. Zapraszam do testowania! :)
          </p>
          <span className="heading">
            <a href="https://www.facebook.com/NoweStronyInternetowe">
              <img src={fb} alt="Faceebok" />
            </a>
            <a href="https://github.com/szkapec">
              <img src={gh} alt="Github" />
            </a>
            <a href="https://www.linkedin.com/in/mateusz-kapro%C5%84-664b92197/">
              <img src={ln} alt="Linkedin" />
            </a>
          </span>
        </section>

        <section>
          <h2>Linki</h2>
          <ul>
            <li>
              <a href="https://github.com/szkapec">Github</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/mateusz-kapro%C5%84-664b92197">Linkedin</a>
            </li>
            <li>
              <a href="https://szkapec.github.io/portfolio/">Portfolio</a>
            </li>
            <li>
              <a href="https://www.facebook.com/NoweStronyInternetowe">Facebook</a>
            </li>
            <li>
              <a href="https://github.com/szkapec/kurs-online">Kod aplikacji</a>
            </li>
          </ul>
        </section>
        <section>
          <h2>Kontakt</h2>
          <p> Janów Lubelski 23-300</p>
          <p>
            {" "}
            <img className="contact" src={phone} alt="telefon" />
            <a href="tel:+48661360889">661-360-889</a>
          </p>
          <p>
            {" "}
            <img className="contact" src={mail} alt="mail" />{" "}
            <a href="mailto:mateusz.kapron24@gmail.com">mateusz.kapron24@gmail.com</a>
          </p>
        </section>
      </StyledComponents>
      <StyledCoppy><p className="counter"></p>© 2020. All Rights Reserved.</StyledCoppy>
    </StyledComponentsFooter>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
    position: sticky;
    z-index: -1;
    bottom: 0;
    background-color: #152f4f;

   ::before {
     background-color: white;
     display: block;
     width: 40px;
     height: 40px;
     position: absolute;
     top: -35px;
     left: 50%;
     content: '';
     transform: rotate(-45deg) translateX(-50%);
   }
`

const StyledComponentsFooter = styled.footer`
  font-family: "Kumbh Sans", sans-serif;
  max-width: 1280px;
  display: block;
  margin: 0px auto;
  overflow: hidden;
`

const StyledComponents = styled.div`
  z-index: -1;
  background-color: #152f4f;
  color: white;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  font-family: "Kumbh Sans", sans-serif;
  padding: 0 10px;
  section {
    padding: 15px 15px 0 15px;
    line-height: 25px;
    font-size: 16px;
  }

  h2 {
    /* padding: 10px 10px 5px; */
    padding: 10px 10px 5px;
    font-size: 20px;
  }
  p, ul {
    color: rgba(255, 255, 255, 0.5);
    font-size: 12px;
    /* padding: 3px; */
    @media(min-width: 600px){
      padding: 6px;
      font-size: 14px;
    }
    @media(min-width: 1000px){
      padding: 10px;
      font-size: 16px;
    }
    a{
        color: rgba(255, 255, 255, 0.5);
        text-decoration: none;
        :hover {
            text-decoration: underline;
            color: white;
            
        }
    }
  }
  ul {
    list-style: none;
    padding-left: 15px;

    li {
        list-style: circle;
      a {
        
        text-decoration: none;
        color: rgba(255, 255, 255, 0.5);
        :hover {
            text-decoration: underline;
            color:white;
        }
      }
    }
  }
  .contact {
    width: 15px;
    height: 15px;
    filter: invert(100%);
    margin-right: 10px;
  }
  .heading {
    width: 200px;
    display: block;
    margin: 10px auto 0;
    img {
      margin: 0px 15px;
      border-radius: 50%;
      transition-duration: .5s;
      :hover {
          transform: scale(1.1);
      }
    }
  }
  @media (min-width: 400px) {
    padding: 10px 35px 0;
    section {
      font-size: 18px;
    }
  }
  @media (min-width: 600px) {
    padding: 10px 45px 0;
    font-size: 20px;
    .heading {
      margin: 15px auto;
      width: 220px;
      img {
        width: 40px;
        height: 40px;
      }
    }
  }
  @media (min-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);

    section {
      line-height: 25px;
    }
  }

  img {
    width: 35px;
    height: 35px;
  }
`;

const StyledCoppy = styled.div`
    font-family: "Kumbh Sans", sans-serif;
    font-size: 12px;
    padding: 4px 25px;
  background-color: #152f4f;
  width: 100%;
  height: 40px;
  color: rgba(255, 255, 255, 0.5);

  p {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    width: 80%;
    padding-bottom:4px;
  }
  @media (min-width: 400px) {
    padding: 4px 50px;
  }
  @media (min-width: 600px) {
    padding: 4px 60px;
  }
  @media (min-width: 1000px) {
    padding: 4px 11%;
  }
`