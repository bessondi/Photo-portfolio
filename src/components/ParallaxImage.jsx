import React from "react";
import styled from "styled-components";
import s from './ParallaxImage.module.css';

import { Parallax } from "react-scroll-parallax";

function ParallaxImageRender(props) {

  const { image, portrait, landscape, box } = props;

  const PortraitImage = styled.img`
    /* //display: block; */
    background-image: url(${image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 350px;
    height: 500px;
    margin-right: -100px;
    z-index: 10;
  `;
  const SquareImage = styled.img`
    /* //display: block; */
    background-image: url(${image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 500px;
    height: 500px;
    z-index: 10;
  `;
  const LandscapeImage = styled.img`
    /* //display: block; */
    background-image: url(${image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 500px;
    height: 350px;
    margin-left: -100px;
    z-index: 11;
  `;


  const Left = () => (
    <Parallax className={s.indexx} y={[10, 80]} tagOuter="div">
      <PortraitImage />
    </Parallax>
  );
  const Center = () => (
    <Parallax className={`${s.indexx} ${s.indexxMain}`} y={[0, 0]} tagOuter="div">
      <SquareImage />
    </Parallax>
  );
  const Right = () => (
    <Parallax className={s.indexx} y={[10, -100]} tagOuter="div">
      <LandscapeImage />
    </Parallax>
  );


  return (
    <React.Fragment>
      {portrait ? <Left /> : landscape ? <Center /> : box ? <Right /> : null}
    </React.Fragment>
  );
}

export default ParallaxImageRender;