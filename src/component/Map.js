import React from 'react';
import styled from 'styled-components';
import MapImg from '../assets/images/MapImg.png';
import PText from './PText';

const MapStyles = styled.div`
  background: url(${MapImg}) no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 400px;
  .container {
    position: relative;
    min-height: 400px;
  }
  .map__card {
    position: absolute;
    right: 54.5%;
    bottom: 10%;
    padding: 1.7rem;
    background-color: var(--gray-2);
    width: 70%;
    height: auto;
    max-width: 220px;
    border-radius: 12px;
  }
  .map__card__heading {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: var(--hex);
  }
  .map__card__text {
    color: var(--hex);
  }
  .map__card__link {
    display: inline-block;
    font-size: 1.6rem;
    margin-top: 1.5rem;
    text-decoration: underline;
    color: var(--hex);
  }
  @media only screen and (max-width: 768px) {
    background-position: 80% center;
  }
  @media only screen and (max-width: 400px) {
    .map__card {
      max-width: none;
      right: auto;
    }
  }
`;

export default function Map() {
  return (
    <MapStyles>
      <div className="container">
        <div className="map__card">
          <h3 className="map__card__heading">Here is me</h3>
          <div className="map__card__text">
            <PText>Kharkiv, Ukraine</PText>
          </div>
          <a
            href="https://www.google.com/maps/place/%D0%9C%D0%B5%D0%B6%D0%B4%D1%83%D0%BD%D0%B0%D1%80%D0%BE%D0%B4%D0%BD%D1%8B%D0%B9+%D0%B0%D1%8D%D1%80%D0%BE%D0%BF%D0%BE%D1%80%D1%82+%C2%AB%D0%A5%D0%B0%D1%80%D1%8C%D0%BA%D0%BE%D0%B2%C2%BB/@49.9229559,36.262854,17z/data=!4m5!3m4!1s0x41270b28b0a654d3:0x2d2a4df8eaef57f6!8m2!3d49.92183!4d36.279988"
            target="_blank"
            rel="noreferrer"
            className="map__card__link"
          >
            Open in Google Map
          </a>
        </div>
      </div>
    </MapStyles>
  );
}
