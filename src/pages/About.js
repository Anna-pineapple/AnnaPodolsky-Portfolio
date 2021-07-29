import React from 'react';
import styled from 'styled-components';
import PText from '../component/PText';
import Button from '../component/Button';
import AboutImg from '../assets/images/AboutImg.png';
import AboutInfoItem from '../component/AboutInfoItem';
import ContactBanner from '../component/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    color: var(--hex);
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--dark-bg);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .about__button {
    align-items: center;
    display: inline-block;
    margin-top: -2.8rem;
    color: var(--gray-2);
  }
  .right {
    img {
      border: 2px solid var(--gray-2);
    }
  }
  .about__info__items {
    width: 100%;
    height: fit-content;
    padding: 3rem;
    background-color: var(--gray-2);
    border-radius: 12px;
    margin-top: 5rem;
    color: var(--hex);
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <AboutPageStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              Hi, I am <span>Podolsky Anna</span>
            </p>
            <h2 className="about__heading">A FrontEnd developer</h2>
            <div className="about__info">
              <PText>
                I am from Kharkiv, Ukraine. I am fascinated with learning
                languages and studying. I also love to create useful things.
                <br /> <br />I started coding last year but i was completely
                hooked on it. All the time I have a lot of ideas in my head and
                that's lit when you can create sites for them.
              </PText>
            </div>
            <div className="about__button">
              <Button btnText="Download CV" btnLink="#" />
            </div>
          </div>
          <div className="right">
            <img src={AboutImg} alt="Podolsy Anna img" />
          </div>
        </div>
        <div className="about__info__items">
          <div className="about__info__item">
            <h1 className="about__info__heading">Education</h1>
            <AboutInfoItem
              title="University"
              items={['Peoples Ukrainian Academy, Kharkiv']}
            />
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading">My Skill</h1>
            <AboutInfoItem
              title="FrontEnd"
              items={['HTML', 'CSS', 'JS', 'REACT']}
            />
            <AboutInfoItem title="BackEnd" items={['Node']} />
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading">Experience</h1>
            <AboutInfoItem
              title="2020 - now"
              items={['Junior Developer on Pet-projects']}
            />
          </div>
        </div>
      </div>
      <ContactBanner />
    </AboutPageStyles>
  );
}
