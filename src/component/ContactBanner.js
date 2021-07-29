import React from 'react';
import styled from 'styled-components';
import PText from './PText';
import Button from './Button';

const ContactBannerStyle = styled.div`
  padding: 10rem 0;
  .contactBanner__wrapper {
    background-color: var(--deep-dark); //gray-2?
    border-radius: 12px;
    padding: 5rem 0rem;
    text-align: center;
    color: var(--hex);
    h3 {
      color: var(--hex);
    }
  }
  .contactBanner__heading {
    font-size: 4rem;
    margin-bottom: 2rem;
  }
  .contactBanner__button {
    align-items: center;
    display: inline-block;
    margin-top: -2.8rem;
    color: var(--gray-2);
  }
  @media only screen and (man-width: 768px) {
    .contactBanner__heading {
      font-size: 1.8rem;
    }
    .contactBanner__heading {
      font-size: 1.6rem;
    }
  }
`;

export default function ContactBanner() {
  return (
    <ContactBannerStyle>
      <div className="container">
        <div className="contactBanner__wrapper">
          <PText>I'll be happy to</PText>
          <h3 className="contactBanner__heading">Help you</h3>
          <div className="contactBanner__button">
            <Button btnText="Contact Now" btnLink="/contact" />
          </div>
        </div>
      </div>
    </ContactBannerStyle>
  );
}
