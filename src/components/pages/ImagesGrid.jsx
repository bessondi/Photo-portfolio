import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import styled from "styled-components";

import s from "./MainPage.module.css";

const GridLine = props => {

  const images = props.line;

  const ImagesFlow = images.map((img, id) => {
    const VerticalGrid = () => {

      const Image = styled.img`
        display: block;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        width: ${props.width || '100%'};
        max-width: ${props.maxWidth || `500px`};
        max-height: ${props.maxHeight || `700px`};
        margin: ${props.margin || `10px 0`};
        border-radius: ${props.radius || `10px`};
        animation-duration: 1s;
        animation-name: showPic;
      `;
      const ImageDescription = styled.div`
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        background-color: #fff;
        width: 100%;
        height: 100%;
        transition: all 0.3s ease-in-out;
        opacity: 0;
        @media screen and (max-width: 992px) {
          display: none;
        }
      `;
      const Text = styled.div`
        ${
          props.hoverNone ?
          `display: none;`
          : null
        };
      `;
      const Separator = styled.div`
        width: 30px;
        height: 1px;
        margin: 10px 0;
        border-bottom: 1px solid black;

        @media screen and (max-width: 992px) {
          display: none;
        }
      `;
      // const Plug = styled.div`
      //   background-color: #ebebeb;
      //   width: 300px;
      //   height: 400px;
      //   margin: 10px 0;
      //   border-radius: 10px;
      //   animation-duration: 1s;
      //   animation-name: showPic;
      // `;
      // const Wrapper = styled.div`
      //   display: flex;
      //   //padding: 0 10px;
      //   align-items: center;
      // `;

      return (
        <Link className={s.overlay}
              to={props.path ? props.path : `${images[id].path}` }
        >
          <ImageDescription className={s.overlayDescription}>
            <Text>
              <h2>{images[id].description}</h2>
              <Separator />
              <p>view</p>
            </Text>
          </ImageDescription>
          <Image src={images[id].picture} alt="Image" />

          {/* <Suspense fallback={ <Plug/> }>
                <LazyLoad>
                  <Image src={images[id].picture} alt="Image"/>
                </LazyLoad>
              </Suspense> */}
        </Link>
      );
    };
    return <VerticalGrid key={id} />;
  });

  const Line = styled.div`
    display: flex;
    flex-direction: ${props.direction || `column`};
    padding: 0 10px;
    justify-content: ${props.justify || `flex-start`};
    flex-wrap: ${props.wrap || `nowrap`};
    ${props.animation || `animation: ${props.duration} linear 0.01s ${props.slide} infinite`};
    ${props.add};
  `;

  return <Line className={`${s.column}`}>{ImagesFlow}</Line>;
};

export default GridLine;
