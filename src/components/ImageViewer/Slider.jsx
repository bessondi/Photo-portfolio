import React from "react";
import styled from "styled-components";

// import mainHomeStyle from './home.module.css';

const Slider = props => {
  const Image = styled.img`
    grid-area: photo;
    margin: auto;
    display: block;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    max-width: 100%;
    max-height: 100%;
    animation-duration: 1s;
    animation-name: showPic;
  `;

  return (
    <Image
      src={props.image}
      alt="Image"
      // className={mainHomeStyle.ImgHome}
    />
  );
};

export default Slider;
