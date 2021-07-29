import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import projectImg from '../assets/images/projectImg.png';

const ProjectItemStyles = styled.div`
  .projectItem__img {
    width: 100%;
    height: 400px;
    overflow: hidden;
    border-radius: 12px;
    display: inline-block;
    border: 3px solid var(--gray-2);
    img {
      height: 100%;
    }
  }
  .projectItem__info {
    margin-top: 1rem;
    height: 185px;
    background-color: var(--gray-2);
    padding: 1rem;
    border-radius: 12px;
  }
  .projectItem__title {
    font-size: 2.5rem;
    color: var(--hex);
  }
  .projectItem__desc {
    font-size: 1.3rem;
    font-family: 'RobotoMono Regular';
    margin-top: 1rem;
    font-size: 1.8rem;
    color: var(--hex);
  }
  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 350px;
    }
    .projectItem__info {
      height: 120px;
    }
    .projectItem__title {
      font-size: 1.8rem;
    }
    .projectItem__desc {
      font-size: 1.3rem;
    }
  }
`;

export default function projectItem({
  img = projectImg,
  title = 'Future Project',
  desc = 'To be continued...',
}) {
  return (
    <ProjectItemStyles>
      <Link to="/projects" className="projectItem__img">
        <img src={img} alt="project img" />
      </Link>
      <div className="projectItem__info">
        <Link to="#">
          <h3 className="projectItem__title">{title}</h3>
        </Link>
        <p className="projectItem__desc">{desc}</p>
      </div>
    </ProjectItemStyles>
  );
}
