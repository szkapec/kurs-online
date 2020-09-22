import React from "react";
import styled from "styled-components";

export default function Contact() {
  return (
    <section className="contact">
      <div className="questions">Masz pytania o kursy albo strone testową?</div>
      <div className="questions">
        <b>Skontaktuj się ze mną!</b>
      </div>
      <span className="line"></span>
      <article>
        <div>
          <a href="https://www.facebook.com/NoweStronyInternetowe">
            <img className="fb" src="/images/facebook.png" alt="facebook" />
          </a>
          <span className="contact-description">
            Zajrzyj na moją strone i wyślij do mnie wiadomość.
          </span>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/mateusz-kapro%C5%84-664b92197/">
            <img className="in" src="/images/linkedin.png" alt="linkedin" />
          </a>
          <span className="contact-description">
            Zaproś mnie do kontaktów na LinkedIn i jeśli chcesz, porozmawiaj tam
            ze mną.
          </span>
        </div>

        <div>
          <a href="https://github.com/szkapec/kurs-online">
            <img src="/images/github.svg" alt="github" />{" "}
          </a>
          <span className="contact-description">
            {" "}
            Lub zobacz kod aplikacji - warto ;) Pozdrawiam
          </span>
        </div>
        <div>
          <a href="https://www.instagram.com/mateusz.kapron50/?hl=pl">
            <img src="/images/instagram.png" alt="instagram" />{" "}
          </a>
          <span className="contact-description">
            {" "}
            Zaproś do kontaktu na instagramie
          </span>
        </div>
      </article>
    </section>
  );
}

const StyledContact = styled.section`
  background-color: grey;
  max-width: 1280px;
  display: block;
  margin: 0 auto;
  background-color: #ecf0f1;
  img {
    width: 60px;
    height: 60px;
    border-radius: 48%;
    margin: 20px;
    transition-duration: 1s;
    :hover {
      width: 70px;
      height: 70px;
    }
  }
  article {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    @media (min-width: 800px) {
      padding-top: 20px;
      grid-template-columns: repeat(2, 1fr);
    }
    div {
      display: flex;
      text-align: center;
    }
  }
  .contact-description {
    padding: 25px 20px 0;
    text-align: left;
  }
  .questions {
    font-size: 20px;
    padding: 10px;
    text-align: center;
    line-height: 25px;
  }
`;
