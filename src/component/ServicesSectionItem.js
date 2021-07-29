import React from 'react';
import styled from 'styled-components';
import { MdDesktopMac } from 'react-icons/md';
import PText from './PText';

const ItemStyles = styled.div`
  text-align: center;
  /* .projectItem__info {
    margin-top: 1rem;
    height: 185px;
    background-color: var(--gray-2);
    padding: 1rem;
    display: inline-block;
    border-radius: 12px;
  } */
  /* .servicesItem__icon {
    svg {
      width: 3rem;
    } */
  }
  .servicesItem__title {
    font-size: 2.5rem;
    font-family: 'Montserrat SemiBold';
  }
  .para {
    margin-top: 2rem;
  }
`;

export default function ServicesSectionItem({
  icon = <MdDesktopMac />,
  title = 'Web Design',
  desc = 'Lorem Ipsum is simply dummy',
}) {
  return (
    <ItemStyles className="servicesItem">
      {/* <div className="projectItem__info"> */}
      {/* <div className="servicesItem__icon">{icon}</div> */}
      <div className="servcesItem__title">{title}</div>
      <PText>{desc}</PText>
      {/* </div> */}
    </ItemStyles>
  );
}
