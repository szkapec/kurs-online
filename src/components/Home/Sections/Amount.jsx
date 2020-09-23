import React, { useState, useEffect } from "react";
import styled from "styled-components";
import student from '../../../image/student.svg';
import book from '../../../image/book.svg';
import time from '../../../image/time.svg';
export default function Amount() {
  const [counter, setCounter] = useState(2000);
  const [course, setCourse] = useState(0);
  const [hourse, setHourse] = useState(700);
  const [flag, setFlag] = useState(true);

  let amount;
  useEffect(() => {
    const intervalCounter = setInterval(() => {
      if (amount < window.innerHeight) {
        setCounter((counter) => {
          if (counter < 2092) {
            setFlag(false);
            return counter + 1;
          } else {
            clearInterval(intervalCounter);
            return counter;
          }
        });
      }
    }, 30);

    const intervalCourse = setInterval(() => {
      if (amount < window.innerHeight) {
        setCourse((course) => {
          if (course < 6) {
            return course + 1;
          } else {
            clearInterval(intervalCourse);
            return course;
          }
        });
      }
    }, 400);

    const intervalHourse = setInterval(() => {
      if (amount < window.innerHeight) {
        setHourse((hourse) => {
          if (hourse < 800) {
            return hourse + 1;
          } else {
            clearInterval(intervalHourse);
            return hourse;
          }
        });
      }
    }, 30);
  }, []);
  try {
    window.addEventListener("scroll", function (ev) {
      if (flag) {
        amount = document.querySelector(".counter").getBoundingClientRect().top
          ? document.querySelector(".counter").getBoundingClientRect().top +
            1500
          : 200;
      }
    });
  } catch (error) {
    amount = 0;
  }

  return (
    <StyledCounter className="counter">
      <article>
        {" "}
        <img src={student} alt="student" />{" "}
        <div>
          Zadowolonych studentów <p>{counter}</p>
        </div>{" "}
      </article>
      <article>
        {" "}
        <img src={book} alt="course" />{" "}
        <div>
          Ilość kursów <p>{course}</p>
        </div>{" "}
      </article>
      <article>
        {" "}
        <img src={time} alt="time" />{" "}
        <div>
          Ilość godzin <p>{hourse}</p>
        </div>{" "}
      </article>
    </StyledCounter>
  );
}

const StyledCounter = styled.section`
  font-family: "Kumbh Sans", sans-serif;
  max-width: 1280px;
  display: block;
  margin: 0px auto;
  background-color: #ecf0f1;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  text-align: center;
  padding: 20px 0;
  img {
    width: 60px;
    height: 60px;
    filter: invert(30%);
  }
  article {
    padding: 10px;
    margin: 10px 60px;
    border-radius: 5px;
  }
  div {
  }
  p {
    padding: 10px;
    font-size: 28px;
    font-weight: 700;
  }

  @media (min-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
    padding: 40px 0;
    article {
      border: 1px solid #4c4c4c;
    }
  }
`;
