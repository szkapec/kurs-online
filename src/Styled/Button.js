import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: ${(props) => (props.color ? props.color : "orange")};
  padding: 8px 14px;
  display: block;
  margin: 10px auto 0;
  border: none;
  font-size: 18px;
  border-radius: 8px;
  text-decoration: none;
  list-style: none;
  outline: 0;

  color: black;

  a {
    text-decoration: none;
    color: black;
    list-style: none;
  }

  :hover {
    color: #34495e;
    font-size: 20px;
    transition-duration: 1s;
    @media (min-width: 600px) {
      font-size: 18px;
      text-decoration: underline;
    }
  }

`;
