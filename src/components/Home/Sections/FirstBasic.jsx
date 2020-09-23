import React from "react";
import styled from "styled-components";
import homes from '../../../images/home.jpg';
export default function FirstBasic() {
  return (
    <StyledFirstBasic>
      <section className="home-picture">
        <img src={homes} alt="Homes" />
        <div className="home-description">Zdobądź zawód marzeń!</div>
        <div className="home-school">W szkole programowania #1</div>
      </section>

      <div className="whyus">Dlaczego akurat my? </div>
      <section className="article-container">
        <article>
          <img src="/images/article/house.svg" alt="zdalny dostęp" />
          <h2>Zdalny dostęp</h2>
          <div>
            Do moich kursów masz dożywotni dostęp, czyli możesz z niego
            korzystać kiedy tylko chcesz i gdzie chcesz.
          </div>
        </article>
        <article>
          <img src="/images/article/data.svg" alt="aktualizacje" />
          <h2>Aktualizacje</h2>
          <div>
            Wszystkie aktualizacje w kursach są dla Ciebie natychmiast dostępne.
          </div>
        </article>
        <article>
          <img src="/images/article/rocket.svg" alt="zatrudnienie" />
          <h2>Zatrudnienie</h2>
          <div>
            Pod koniec każdego kursu programowania, przygotowujemy naszych
            uczestników do pierwszych rozmów kwalifikacyjnych w branży IT.
          </div>
        </article>
        <article>
          <img src="/images/article/adress.svg" alt="certyfikat" />
          <i className="far fa-address-card"></i>
          <h2>Certyfikat</h2>
          <div>
            Po zdaniu egzaminu każdy uczestnik otrzymuje od nas certyfikat
            ukończenia
          </div>
        </article>
      </section>
    </StyledFirstBasic>
  );
}

const StyledFirstBasic = styled.div`
  .home-picture {
    width: 100%;
    height: 400px;
    position: relative;
    /* overflow: hidden; */
    img {
      width: 100%;
      height: 400px;

    }
    .home-description,
    .home-school {
      position: absolute;
      width: 100%;
      text-align: center;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 18px;
      text-transform: uppercase;
      font-weight: bold;
      @media (min-width: 360px) {
        font-size: 20px;
      }
      @media (min-width: 600px) {
        font-size: 26px;
      }
    }
    .home-description {
      top: 45%;
      color: white;
      font-family: "Kumbh Sans", sans-serif;
      font-weight: 900;
    }
    .home-school {
      top: 55%;
      color: white;
      font-family: "Kumbh Sans", sans-serif;
    }
  }

  .whyus {
    background-color: #535c68;
    font-size: 22px;
    text-align: center;
    padding: 10px;
    color: white;
    font-weight: 700;
  }

  .article-container {
    max-width: 1280px;
    display: block;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    color: white;
    
    

    @media (min-width: 800px) {
      grid-template-columns: repeat(4, 1fr);
    }
    img {
      width: 50px;
      height: 50px;
      margin: 20px;
      filter: invert(100%);
    }

    h2 {
      margin: 0px 0px 10px 0;
    }
    article {
      transition-duration: .5s;
      padding: 30px;
      :hover {
        font-size: 18px;
        transform: scale(1,1);

        img {
          width: 55px;
          height: 55px;
          transition-duration: 1s;
          overflow: hidden;
        }
      }


      @media (min-width: 800px) {
        :hover {
          transform: translate(0, -10%);

          :first-child {
            transform: translate(10%, -10%);
            z-index: 10;
          }
          :last-child {
            transform: translate(-10%, -10%);
            z-index: 10;
          }
        }
      }
    }
    article:nth-child(1) {
      background-color: #22a6b3;
    }
    article:nth-child(2) {
      background-color: #e056fd;
    }
    article:nth-child(3) {
      background-color: #6ab04c;
    }
    article:nth-child(4) {
      background-color: #f9ca24;
    }
  }
`;
