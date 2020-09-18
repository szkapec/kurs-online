import React from 'react'
import {StyledButton} from '../../../Styled/Button';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';


export default function Success() {
    localStorage.removeItem("items");


    return (
        <StyledSecrion>
            <div><b>Dziękujemy za zakupy w naszym sklepie</b></div>
            <div>Administrator niedługo skontaktuje się z Tobą na mail</div>
            <StyledButton color="green"> <a href="/">Idź do strony głównej</a></StyledButton>
        </StyledSecrion>
    )
}

const StyledSecrion = styled.section`
    text-align:center;
    padding: 30px 0;
    min-height: 100vh;
    font-size: 18px;
    background-color: #ecf0f1;

    div {
        padding: 10px 0;
    }
`


