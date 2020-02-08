import React from "react";
import styled from "styled-components";
import {HashLink as Link} from 'react-router-hash-link';
import {Route} from "react-router-dom";


const ImageViewer = (props) => {

  // prevImg = () => {
  // 			let newIndex = this.state.image.index - 1;
  // 			if (newIndex < 0) {
  // 					this.setState({
  // 							image: this.props.collection[this.state.collection.length-1] // last
  // 					})
  // 			} else {
  // 					this.setState({
  // 							image: this.props.collection[newIndex]
  // 					})
  // 			}
  // 	};
  //
  // nextImg = () => {
  // 	let newIndex = this.state.image.index + 1;
  //   if (newIndex < this.state.collection.length) {
  //     this.setState({
  //       image: this.props.collection[newIndex]
  //     });
  //   } else {
  //     this.setState({
  //       image: this.props.collection[0]
  //     });
  //   }
  // };

  const {closeImagePath} = props,
      imageCollection = props.collection;

  const ImageTemplate = imageCollection.map((item, id) => {

    const Wrapper = styled.div`
      display: flex;
      //flex-direction: column;
      //justify-content: center;
      //align-items: center;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom:0;
      width: 100%;
      height: 100vh;
      max-width: 2000px;
      margin: 0 auto;
      //height: calc(100vh - 120px);
      //background-color: rgba(0,0,0,0.95);
      background-color: #fff;
      z-index: 10;
    `;

    const Image = styled.img`
      display: block;
      margin: auto;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      max-width: 85%;
      max-height: 85%;
      animation-duration: 1s;
      animation-name: showPic;
    `;

    const ImageChangerBtn = styled.div`
      display: flex;
      position: absolute;
      top: 50%;
      width: 20px;
      height: 20px;
			background-color: darkgray;
			border: 1px solid #fff;
			border-radius: 50%;
			//z-index: 15;
      transition: all .4s ease;
      ${ props => {
        if (props.leftSide) {
          return `${props.leftSide}`;
        } else if (props.rightSide) {
          return `${props.rightSide}`;
        }
      }};
      @media screen and (min-width: 992px) {
        &:hover {
          width: 25px;
          height: 25px;
          background-color: gray;
          transition: all .4s ease;
          transform: translateY(-2px);
          cursor: pointer;
        };
      };
      @media screen and (max-width: 992px) {
        width: 30px;
        height: 30px;
      }
      &:hover {
        cursor: pointer;
      }
      `;

    const ImageCloser = () => {
      const Wrapper = styled.div`
        width: 45px;
        height: 45px;
        position: absolute;
        top: 20px;
        right: 20px;
        &:hover span::before,
        &:hover span::after {
          background-color: gray;
          transition: all .4s ease;
        }         
      `;
      const CloseBtn = styled.div`
        display: flex;
        position: relative;
        top: 20px;
        left: 20px;
        width: 30px;
        height: 4px;
        //background-color: red;
        transition: all .4s ease;
        &:hover {
          cursor: pointer;
        }      
      `;
      const Pseudo = styled.span`
        &::before,
        &::after {
          content: '';
          display: block;
          position: absolute;
          height: 4px;
          margin-left: -10px;
          width: 30px;
          background-color: darkgray;
          transition: all .4s ease;
        }
        &::before {
          transform: rotate(-45deg);
        }
        &::after {
          transform: rotate(45deg);
        }
      `;

      return (
          <Link to={closeImagePath}>
            <Wrapper>
              <CloseBtn>
                <Pseudo/>
              </CloseBtn>
            </Wrapper>
          </Link>
      )
    };

    const ComponentRender = () => {
      return (
        <React.Fragment>
          <Wrapper>
            <ImageCloser/>
            <Image src={item.picture} alt="Image"/>
            { item.pathId <= 1 ?
            null :
                <Link to={closeImagePath + '/' + (parseInt(item.pathId) - 1)}>
                  <ImageChangerBtn leftSide='left: 20px;'/>
                </Link>
            }
            { item.pathId >= imageCollection.length ?
            null :
                <Link to={closeImagePath + '/' + (parseInt(item.pathId) + 1)}>
                  <ImageChangerBtn rightSide='right: 20px;'/>
                </Link>
            }
          </Wrapper>
        </React.Fragment>
      )
    };

    return (
      <Route path={item.path} key={id} component={ComponentRender}/>
    )
  });

  return (
    <React.Fragment>
      {ImageTemplate}
    </React.Fragment>
  );
};

export default ImageViewer;
