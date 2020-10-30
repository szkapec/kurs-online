import React from "react";
import styled from "styled-components";
export default function Programing() {
  return (
    <StyledPrograming className="school-programing">
      <div className="course-online">Kursy online</div>
      <span className="line"></span>
      <div className="training">
        <span className="training-s">T</span>o jest naprawdę kompletny kurs
        JavaScript, który wykracza poza to, czego uczą Cię inne kursy
        JavaScript. Przeprowadzę Cię od kompletnego początkującego JavaScript do
        zaawansowanego programisty. Nauczysz się nie tylko samego języka
        JavaScript, ale także nauczysz się programować. Jak rozwiązywać
        problemy. Jak strukturyzować i organizować kod przy użyciu typowych
        wzorców JavaScript.{" "}
      </div>
      <div className="course-online">Bootcamp Web Developer</div>
      <span className="line"></span>
      <div className="training">
        <span className="training-s">P</span>odczas kursu poznasz od podstaw
        języki html, css, js, react, node umożliwiające budowę stron i
        interfejsów aplikacji internetowych. Nauczysz się także wykorzystywać
        podstawowe narzędzia nowoczesnego front-end developera, takie jak
        Bootstrap, Sass, Git.
      </div>
      <div className="course-online">Programowanie w React</div>
      <span className="line"></span>
      <div className="training">
        <span className="training-s">T</span>en kurs rozpocznie się od podstaw i
        wyjaśni, czym dokładnie jest React i jak możesz go używać (i do jakiego
        rodzaju aplikacji). Następnie przejdziemy od podstawowego do
        zaawansowanego. Nie tylko zarysujemy powierzchnię, ale zagłębimy się w
        Reacta, a także w popularnych bibliotekach, takich jak React-router i
        Redux.
      </div>
    </StyledPrograming>
  );
}

const StyledPrograming = styled.section`
  z-index: 3;
  padding: 15px 10px 0 10px;
  max-width: 1280px;
  display: block;
  margin: 0 auto;
  .course-online {
    font-size: 28px;
    text-transform: uppercase;
    text-align: center;
    padding: 20px;
    font-weight: 700;
  }
  .training {
    padding: 20px;
    line-height: 25px;
  }
  .training-s {
    font-size: 22px;
    margin-left: 20px;
    font-weight: 700;
  }

  @media (min-width: 1000px) {
    padding: 15px 140px 0;
  }
`;
