import React from "react";
import styled from "styled-components";
import { StyledButton } from "../../Styled/Button";
import { NavLink } from "react-router-dom";
export default function Default() {
  return (
    <StyledDefault>
      Error 404 <div>Nie ma takiej strony</div>
      <NavLink to="/">
        <StyledButton color="#7f8c8d">Wróć do strony głównej</StyledButton>
      </NavLink>
    </StyledDefault>
  );
}

const StyledDefault = styled.div`
  color: red;
  text-align: center;
  padding-top: 100px;
  height: 100vh;
  background-color: #ecf0f1;
  font-size: 28px;
  font-weight: 700;
  div {
    color: black;
    padding: 30px;
  }
  a {
    text-decoration: none;
  }
`;
