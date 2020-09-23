import { withBaseIcon } from "react-icons-kit";
import styled from 'styled-components';

export const StyledComponent = styled.div`
  max-width: 1280px;
  min-height: 100vh;
  display: block;
  margin: 0 auto;
position: relative;
background-color: #F4F0F0;



.opinion {
    max-width: 900px;
    display: block;
    margin: 0 auto;
    background-color: ${(props) => props.color};
    min-height: 200px;
    padding: 20px 0;
    .container {
        background-color: #fbfbf8;
        width: 80%;
        display: block;
        margin: 0px auto;
        border: 1px solid black;
        border-radius: 5px;

        h3 {
            margin: 15px;
        }
        .image {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            grid-area: 1 / 1 / 2 / 2;
        }
        .star {
            width: 15px;
            padding-left: 8px;
        }
        .star-time {
            padding-left: 10px;
            color: #bdc3c7;
        }
        .users {
            display: grid;
            grid-template-columns: 50px 1fr;
            margin: 0 10px 10px;
        }
        .name { grid-area: 1 / 2 / 2 / 3; }
        .descriptionOpinion {
            margin: 15px 8px;
            text-align: center;
        }
  }
}
.list {
    max-width: 900px;
    display: block;
    margin: 0 auto;
    ul {
        background-color: ${(props) => props.color};
        padding: 0 10px 10px 40px;
        list-style: circle;
        li {padding-top: 10px;}
    }
    h2 {
        background-color: ${(props) => props.color};
        padding: 20px 10px 10px 10px;
        border-top-left-radius: 30px;
        border-top-right-radius: 30px;
    }
    img {
        width: 80%;
        display: block;
        margin: 25px auto;
        border-radius: 10px;
        max-width: 550px;
    }
    div {
        font-size: 25px;
        font-weight: bold;
        padding-bottom: 20px;
        text-align: center;
    }
}


.description {
    max-width: 1000px;
    display: block;
    margin: 0 auto;
    padding-top: 60px;
    text-align: center;
    div {
        font-size: 25px;
        font-weight: bold;
        padding-bottom: 20px;
    }
    p {
        font-size: 16px;
        margin: 0 15px 15px;
        line-height: 20px;
    }

}
.course {
    max-width: 480px;
    position: absolute;
    top: 150px; 
    left: 50%;
    transform: translate(-50%, 0);
    width: 80%;
    height: 80px;
    background-color: #F4F0F0;
    border-radius: 20px;
    text-align: center;
    box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.75);
    font-size: 18px;
    padding-top: 5px;
    div {
        padding-top: 10px;
        font-size: 20px;
        b {
            font-weight: 700;
            font-size: 22px;
        }
    }
}

`;

export const StyledSection = styled.section`
    background-color: ${(props) => props.color};
    height: 150px;
    text-align: center;
    padding: 40px 10px 0 10px;
    font-size: 18px;
  
div {
    padding-top: 10px;
}
`;

export const SideIcon = withBaseIcon({ size: 20, style: { color: "#EF233C" } });