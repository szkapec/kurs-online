import React from 'react'
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import {ic_play_for_work} from 'react-icons-kit/md/ic_play_for_work';
import { withBaseIcon } from 'react-icons-kit'
export default function Navbar() {
    return (
  


        <StyledNav>
            <div className="course">
                <NavLink exact to="/">Kursy</NavLink>
            </div>
            <div className="cart">
                <NavLink exact to="cart">Koszyk  <SiceIconNav icon={ic_play_for_work}/> </NavLink>
            </div>
        </StyledNav>
    )
}


const StyledNav = styled.nav`
    width:100%;
    height: 40px;
    background-color: #7f8fa6;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 40px; 

    a {
        text-decoration: none;
        list-style: none;
        color:black;
        :hover {
            text-decoration: underline;
        }
    }
    .cart {
        text-align: right;
        padding: 10px 30px;
    }
    .course {
        padding: 10px 30px;
        
    }
    button {
        background-color: #fff;
        padding: 3px 7px;
        border: none;
        border-radius: 4px;
    }
`

const SiceIconNav = withBaseIcon({
    size: 24,
    style: {
        color: 'black',
    }
})
