import React, { Component } from "react";
import Product from "../../Data/Products";
import { power } from "react-icons-kit/icomoon/power";
import { SideIcon, StyledSection, StyledComponent, StyledContainer } from "./Course.css";
import stars from '../../image/star.png';
export default class Course extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    let product = Product.find((item) => item.id == this.props.match.params.id);
    const {
      color,
      img,
      name,
      stage,
      description,
      pric,
      price,
      popular,
      who,
      nickName,
      numberOpinon,
      descriptionOpinion,
    } = product;

    console.log(window);

    return (
      <StyledContainer>
      <StyledComponent color={color}>
        <StyledSection color={color}>
          <b>{name}</b>
          <div>{stage}</div>
        </StyledSection>
        <section className="course">
          Zapraszamy <SideIcon color={color} icon={power} />
          <div>
            {" "}
            <b>{popular}</b> studentów kupiło!
          </div>
        </section>
        <section className="description">
          <div >Opis kursu</div>
          <p>{description}</p>
        </section>
        <section className="list">
          <img src={img} alt={name} />
          <div>{name}</div>
          
        </section>
        
        <section className="opinion">
          <h2>Dla kogo jest ten kurs?</h2>
          <ul>
            {who.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="container">
            <h3>Wyróżniona recenzja</h3>
            <div className="users">
              <img
                className="image"
                src="https://placeimg.com/640/480/any"
                alt="zdjecie człowieka"
              />
              <div className="name">
                <p>{nickName}</p>
                <p>{numberOpinon} recenzji</p>
              </div>
            </div>
            <div className="counter"></div>
            <div>
              <img className="star" src={stars} alt="star" />
              <img className="star" src={stars} alt="star" />
              <img className="star" src={stars} alt="star" />
              <img className="star" src={stars} alt="star" />
              <img className="star" src={stars} alt="star" />
              <span className="star-time">rok temu</span>
            </div>
            <div className="descriptionOpinion">{descriptionOpinion}</div>
          </div>
        </section>

      </StyledComponent>
      </StyledContainer>
    );
  }
}
