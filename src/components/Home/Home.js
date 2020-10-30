import React from "react";
import styled from "styled-components";
import Store from "../Store/Store";
import Amount from "./Sections/Amount";
import FirstBasic from "./Sections/FirstBasic";
import Programing from "./Sections/Programing";


export default function Home() {
  return (
    <StyledComponent className="main-container">
      <FirstBasic />
      <Programing />
      <Store addCourse radius/>
      <Amount />
    </StyledComponent>
  );
}

const StyledComponent = styled.div`
z-index: 3;
  font-family: "Kumbh Sans", sans-serif;
  z-index: 3;
  background-color: #fff;

  /* Global line */
  .line {
    background-color: #6ab04c;
    width: 80px;
    height: 5px;
    display: block;
    margin: 0 auto;
    content: "";
    border-radius: 50%;

    ::before {
      content: "";
      background-color: #6ab04c;
      display: block;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      margin: 0 auto;
    }
  }
`;
