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
        //display: flex;
        ////position: relative;
        //max-width: 100%;
        //height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: absolute;
        bottom: 20px;
        width: 100%;
        height: calc(100vh - 120px);
        background-color: #ffffff;
        z-index: 10;
      `;

    const Image = styled.img`
      display: block;
      margin: auto;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      max-width: 100%;
      max-height: 100%;
      animation-duration: 1s;
      animation-name: showPic;
    `;

    const ImageChangerBtn = styled.div`
      display: flex;
      position: fixed;
      top: 50%;
      width: 20px;
      height: 20px;
			background-color: darkgray;
			border: 1px solid #fff;
			border-radius: 50%;
			//z-index: 15;
      transition: all .4s ease;
        ${props => {
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
      const CloseBtn = styled.div`
        display: flex;
        position: fixed;
        top: 10%;
        right: 20px;
        width: 35px;
        height: 35px;
        background-color: darkgray;
        border: 1px solid #fff;
        transition: all .4s ease;
          &:hover {
            background-color: gray;
            transition: all .4s ease;
            cursor: pointer;
          }
        `;
      return (
          <Link to={closeImagePath}>
            <CloseBtn/>
          </Link>
      )
    };

    const component = () => {
      return (
          <React.Fragment>
            <Wrapper>
              <ImageCloser/>

              <Image src={item.picture} alt="Image"/>

              <Link to={item.path.substring(0, item.path.length - 1) + (parseInt(item.pathId) - 1).toString()}>

                <ImageChangerBtn
                    // onClick={() => this.prevImg()}
                    leftSide='left: 20px;'/>
              </Link>
              <Link to={item.path.substring(0, item.path.length - 1) + (parseInt(item.pathId) + 1).toString()}>
                <ImageChangerBtn
                    // onClick={() => this.nextImg()}
                    rightSide='right: 20px;'/>
              </Link>
            </Wrapper>
          </React.Fragment>
      )
    };

    return (
        <Route path={item.path} key={id} component={component}/>
    )
  });

  return (
      <React.Fragment>
        {ImageTemplate}
      </React.Fragment>
  );
};

export default ImageViewer;
