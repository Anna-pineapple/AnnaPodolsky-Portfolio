import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import PText from './PText';
import SectionTitle from './SectionTitle';
import AboutImg from '../assets/images/about-section-img.png';

const AboutSectionStyle = styled.div`
  padding: 18rem 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }
  .aboutSection__left,
  .aboutSection__right {
    flex: 1;
    /* div {
      line-height: 20px;
      color: var(--hex);
    } */
  }
  .section-title {
    text-align: left;
    /* color: var(--gray-2); */
  }
  .para {
    margin-top: 2rem;
    margin-left: 0;
  }
  .aboutSection__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1.5rem;
    margin-top: 2rem;
  }
  /* span {
    font-family: 'Monserrat SemiBold';
    color: var(--hex);
  }  */
  /* } */
  @media only screen and (max-width: 950px) {
    .aboutSection__left {
      flex: 4;
    }
    .aboutSection__right {
      flex: 3;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
    }
    .aboutSection__left,
    .aboutSection__right {
      width: 100%;
    }
    .aboutSection__right {
      margin-top: 3rem;
      float: right;
    }
    .section-title {
      text-align: center;
    }
    .para {
      margin: 0 auto;
      margin-top: 2rem;
    }
    /* .aboutMe_left {
      font-family: 'Monserrat SemiBold';
      color: var(--hex);
    } */
    .aboutSection__buttons {
      flex-direction: column;
      gap: 0;
      .button_wrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
  }
`;

export default function AboutSection() {
  return (
    <AboutSectionStyle>
      <div className="container">
        <div className="aboutSection__left">
          <SectionTitle
            subheading="Let me introduce myself"
            heding="About me"
          />
          <PText>
            <div>
              I am keen on coding and constantly developing (HTML, CSS, JS and
              React JS) skills.
            </div>
          </PText>
          <div className="aboutSection__buttons">
            <Button btnLink="/projects" btnText="Works" outline />
            <Button btnLink="/about" btnText="Read More" outline />
          </div>
        </div>
        <div className="aboutSection__right">
          <img src={AboutImg} alt="" />
        </div>
      </div>
    </AboutSectionStyle>
  );
}
