import React from 'react'
import {StyledButton} from '../../../Styled/Button';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';


export default function Canceled() {
    return (
        <StyledSection>
            <div><b>Błąd podczas wprowadzania danych</b></div>
            <div>Wróć do strony głównej</div>
            <StyledButton color="red"><NavLink to="/"> Wróć </NavLink></StyledButton>
        </StyledSection>
    )
}

const StyledSection = styled.section`
    text-align:center;
    padding: 30px 0;
    min-height: 100vh;
    font-size: 18px;
    background-color: #ecf0f1;

    div {
        padding: 10px 0;
    }
`


