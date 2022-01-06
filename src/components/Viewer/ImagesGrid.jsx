import React, {Component} from "react";
import {HashLink as Link} from "react-router-hash-link";
import styled from "styled-components";
import LazyLoad from 'react-lazy-load'


class ImagesGrid extends Component {

  componentDidMount = () => {
    window.scrollTo(0, 0);
  };

  render() {
    const images = this.props.content;

    const ImagesFlow = images.map((img, id) => {

      const VerticalGrid = () => {

        const Wrapper = styled.div`
          margin: 10px;
          transition: 0.3s;
          
          @media screen and (min-width: 992px) {
            &:hover {
              opacity: 0.7;
              transition: 0.3s;
              box-shadow: 0 10px 20px rgba(0,0,0,0.3);
              border-radius: 10px;
            }
          }
        `;

        const Image = styled.img`
          display: block;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          object-fit: cover;
          background-color: #dadada;
          width: 100%;
          height: 100%;
          max-height: 400px;
          border-radius: 10px;
          animation-duration: 1s;
          animation-name: showPic;
        `;

        return (
          <Wrapper>
            <Link to={images[id].path}>
              <LazyLoad>
                <picture>
                  <source srcSet={images[id].pictureWebp} type="image/webp"/>
                  <Image src={images[id].picture} alt="Image" loading="lazy"/>
                </picture>
              </LazyLoad>
            </Link>
          </Wrapper>
        );
      };

      return <VerticalGrid key={id}/>;
    });

    const Grid = styled.div`
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      align-items: flex-start;
      width: 100%;
      max-width: 2000px;
      margin: 0 auto;
    `;

    return <Grid>{ImagesFlow}</Grid>;
  }
}

export default ImagesGrid;
