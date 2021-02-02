import React from 'react'
import styled from 'styled-components';
import flash from '../../../image/team/flash.png';
import nbc from '../../../image/team/nbc.png';
import netflix from '../../../image/team/netflix.png';
import ups from '../../../image/team/ups.png';
import visa from '../../../image/team/visa.png';
import intel from '../../../image/team/intel.png';
import online from '../../../image/team/online-learning.png';
import teaching from '../../../image/team/teaching.png';
import training from '../../../image/team/training.png';
import certyficate from '../../../image/team/certificate.png';

const Team = () => {
    return (
        <StyledContainer>
            <h3>Chcesz przeszkolić swój zespół?</h3>
            <span className="line"></span>
            <div className="offer">
                Oferujemy elastyczne, opłacalne członkostwo grupowe dla
            Twojej firmy, szkoły lub organizacji rządowej. <br />
                <a href="mailto:mateusz.kapron24@gmail.com"> Skontaktuj się z nami, aby dowiedzieć się więcej. </a>
            </div>
            <div className="image">
                <img src={flash} alt="flash" srcset="" />
                <img src={nbc} alt="nbc" srcset="" />
                <img src={intel} alt="intel" srcset="" />
                <img src={visa} alt="nbc" srcset="" />

            </div>
            <div className="education">
                <h3>Nieograniczona nauka, nieograniczone możliwości</h3>
                <span className="line"></span>
                <div>
                    <span>Nauka może odbywać się w dowolnym miejscu dzięki naszym aplikacjom na komputerze, urządzeniu mobilnym i telewizorze, oferując ulepszoną nawigację i szybsze przesyłanie strumieniowe do nauki w dowolnym momencie. </span>
                    <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8ZWR1Y2F0aW9ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                </div>
            </div>
            <h3 style={{marginTop: '40px'}}>Ucz się i jednocześnie rozwijaj karierę!</h3>
            <span className="line"></span>
            <ul className="innovation">
                <li>
                    <img src={training} alt="training"/>
                    <p>Szybka nauka</p>
                </li>
                <li>
                    <img src={certyficate} alt="Certyficate"/>
                    <p>Certyfikat</p>
                </li>
                <li>
                    <img src={teaching} alt="teaching"/>
                    <p>Wsparcie</p>
                </li>
               
                <li>
                    <img src={online} alt="online"/>
                    <p>Materiały</p>
                </li>
            </ul>
        </StyledContainer>
    )
}

export default Team;


const StyledContainer = styled.div`
    text-align: center;
    margin-top: 30px;
    padding: 0 10px;
    letter-spacing: 1px;
    h3 {
        font-size: 30px;
        line-height: 40px;
    }
    .offer {
        line-height: 25px;
        margin-top: 20px;
        font-size: 16px;
       
        a {
            color: black;
            text-decoration: none;
            font-weight: bold;
        }
    }
    @media(min-width: 1000px){
        .offer {
            font-size: 20px;
            line-height: 30px;
        }
        h3 {
            font-size: 32px;
          
        }
    }

    .image {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: 30px 0;
        img {
        width: 80px;
        height: 80px;
        filter: grayscale(100%);
        margin: 30px;
        }
    }

    .education {
        max-width: 1200px;
        margin: 10px auto;
        div {
            display: flex;
            flex-wrap: wrap;
            margin-top: 20px;
            line-height: 25px;
            span {
                padding: 20px;
                max-width: 580px;
                margin: 0 auto;
            }
            img {
                border-radius: 50%;
                max-width: 400px;
                justify-content: center;
                margin: 0 auto;
                width: 90%;
            }
        }
        @media(min-width: 800px){
            letter-spacing: 1px;
            div {
                flex-wrap: nowrap;
                margin: 40px auto;
                font-size: 22px;
                line-height: 35px;
            }
        }
    }

    .innovation {
        margin: 50px 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        li {
            width: 40%;
            list-style: none;
            padding: 10px;
            margin-top: 20px;
        }
        img {
            width: 80px;
        }
        p {
            font-size: 18px;
            margin-top: 10px;
            font-weight: bold;
        }
        @media(min-width: 800px){
            li {
                width: auto;
                margin: 20px;
            }
        }
        @media(min-width: 1200px){
            
        }
    }
  
`