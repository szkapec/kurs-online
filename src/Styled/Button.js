import styled from 'styled-components';




export const StyledButton = styled.button `
        background-color: ${props => props.color?props.color:'orange'};
        padding: 8px 14px;
        display:block;
        margin: 20px auto;
        border: none;
        font-size: 18px;
        border-radius: 8px;
        text-decoration: none;
        list-style: none;

        :hover {
                text-decoration: underline;
        }
`