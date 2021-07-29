import React from 'react';
import styled from 'styled-components';
import MeImg from '../assets/images/MeImg.png';
import PText from './PText';
import Button from './Button';
import SocialMediaArrow from '../assets/images/social-media-arrow.svg';
import ScrollDownArrow from '../assets/images/scroll-down-arrow.svg';

const MeStyles = styled.div`
  .me {
    height: 100vh;
    min-height: 1000px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .me__heading {
    font-size: 2rem;
    margin-bottom: -10rem;
    position: relative;
    color: var(--hex);
    padding-top: 25rem;
    span {
      display: inline-block;
      width: 100%;
      padding-top: 0;
    }
    span {
      display: inline-block;
      width: 100%;
      padding-top: 0;
    }
    .me__name {
      font-size: 4rem;
      /* padding-top: 25rem; */
      font-family: 'Monserrat SemiBold';
      color: var(--hex);
    }
  }
  .me__img {
    max-width: 900px;
    width: 100%;
    height: 600px;
    margin: 0 auto;
    margin-top: 13rem;
    border: 2px solid var(--gray-2);
  }
  .me__info {
    margin-top: 4rem;
    color: var(--hex);
    span {
      color: var(--gray-2);
    }
  }
  .me__social,
  .me__scrollDown {
    top: 30px;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    position: relative;
    width: 50px;
    color: var(--hex);
  }
  .me__social {
    left: 50px;
  }
  .me__scrollDown {
    right: 50px;
  }
  .me__social__indicator,
  .me__scrollDown {
    width: 50px;
    p {
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
    }
    img {
      max-height: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
  }
  .me__scrollDown {
    img {
      max-height: 70px;
    }
  }
  .me__social__text {
    ul {
      li {
        margin-bottom: 1rem;
      }
      a {
        display: inline-block;
        font-size: 1.6rem;
        transform: rotate(-90deg);
        letter-spacing: 5px;
        margin-bottom: 2rem;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .me {
      min-height: 750;
    }
    .me__heading {
      font-size: 1.4rem;
      margin-bottom: -3rem;
      .me__name {
        font-size: 4.5rem;
      }
    }
    .me__img {
      height: 300px;
    }
    .me__info {
      margin-top: 3rem;
    }
    .me__social {
      left: 0px;
      bottom: 15%;
      width: 20px;
      padding-top: 95px;
      .me__social__indicator {
        width: 20px;
        padding: 1em 0;
        p {
          font-size: 1.2rem;
          padding: 0;
        }
        img {
          /* max-height: 35px; */
          height: 35px;
          padding: 0;
        }
      }
      .me__social__text {
        ul {
          li {
            a {
              font-size: 1.3rem;
              margin-bottom: 4rem;
            }
          }
        }
      }
    }
    .me__scrollDown {
      right: 0;
      width: 20px;
      padding: 9em 0;
      gap: 1rem;
      p {
        font-size: 1.3rem;
      }
    }
  }
`;

export default function MeSection() {
  return (
    <MeStyles>
      <div className="me">
        <div className="container">
          <h1 className="me__heading">
            <span>Hello, This is</span>
            <span className="me_name">Podolsky Anna</span>
          </h1>
          <div className="me__img">
            <img src={MeImg} alt="" />
          </div>
          <div className="me__info">
            <PText>I am a student and I am interested in programming</PText>
            <span>
              <Button btnLink="/projects" btnText="see my works" />
            </span>
          </div>
          <div className="me__social">
            <div className="me__social__indicator">
              <p>Follow</p>
              <img src={SocialMediaArrow} alt="social media arrow" />
            </div>
            <div className="me_social_text">
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/anna.tee.5099/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    FB
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/anna-terenik-0055ab203"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LI
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="me__scrollDown">
            <p>Scroll</p>
            <img src={ScrollDownArrow} alt="" />
          </div>
        </div>
      </div>
    </MeStyles>
  );
}
