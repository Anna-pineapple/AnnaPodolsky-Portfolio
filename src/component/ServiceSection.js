import React from 'react';
import styled from 'styled-components';
import { MdDesktopMac, MdCode, MdPhonelinkSetup } from 'react-icons/md';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';
import PText from './PText';

const ServicesItemsStyles = styled.div`
  padding: 10rem 0;
  .container {
    text-align: center;
  }
  /* .projectItem__info {
    margin-top: 1rem;
    height: 185px;
    background-color: var(--gray-2);
    padding: 1rem;
    display: inline-block;
    border-radius: 12px;
  } */
  .services__col1,
  .services__col2,
  .services__col3 {
    float: left;
    width: 33.33%;
    padding: 10px;
    height: 250px;
    text-align: center;
    /* column-gap: 100px; */
    color: var(--hex);
  }
  @media only screen and (max-width: 768px) {
    .container {
      text-align: center;
      flex-direction: column;
      gap: 0;
      .services__col1 {
        /* padding: 2em 0; */
        text-align: center;
        display: inline-block;
        width: 100%;
      }
      .services__col2 {
        /* padding: 2em 0; */
        text-align: center;
        display: inline-block;
        width: 100%;
        margin-top: -15.5rem;
      }
      .services__col3 {
        padding: 2em 0;
        text-align: center;
        display: inline-block;
        width: 100%;
        margin-top: -16rem;
      }
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <SectionTitle
          subheading="Fields of interests"
          heading="Practice fields"
        />
        {/* <div className="projectItem__info"> */}
        <div className="services__col1">
          <h1 className="services__col1__title">HTML, CSS, JS</h1>
          <PText>
            I finished couse on SoloLearn and used this languages in my first
            project 'Gig' and on this site.
          </PText>
        </div>
        <div className="services__col2">
          <h1 className="services__col2__title">React JS</h1>
          <PText>
            I have finished React JS course on YouTube and used it in my 'Gig'
            project and this site.
          </PText>
        </div>
        <div className="services__col3">
          <h1 className="services__col3__title">TypeScript</h1>
          <PText>
            I just have started to learn this language. And I am not going to
            give up.
          </PText>
        </div>
        {/* </div> */}
      </div>
    </ServicesItemsStyles>
  );
}
