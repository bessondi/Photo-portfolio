import React, { Component } from "react";
// import {HashLink as Link} from 'react-router-hash-link';
import styled from "styled-components";

import Slider from "./Slider";

// import {ContentData} from "../ContentData";

class ImageViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
			collection: this.props.collection,
      image: this.props.collection[0]
    };
  }

  	prevImg = () => {
				let newIndex = this.state.image.index - 1;
  			if (newIndex < 0) {
  					this.setState({
  							image: this.props.collection[this.state.collection.length-1] // last
  					})
  			} else {
  					this.setState({
  							image: this.props.collection[newIndex]
  					})
  			}
  	}

  nextImg = () => {
		let newIndex = this.state.image.index + 1;
    if (newIndex < this.state.collection.length) {
      this.setState({
        image: this.props.collection[newIndex]
      });
    } else {
      this.setState({
        image: this.props.collection[0]
      });
    }
  };

  render() {
    // console.log(this.state.image);
		console.log(this.state.collection.length);

    const Wrapper = styled.div`
      display: flex;
      width: 100%;
      height: 100%;
      /* display: grid; */
      /* grid-gap: 20px;
      grid-template-rows: repeat(3, auto);
      grid-template-columns: repeat(3, 1fr);
      grid-template-areas:
        ". . ."
        ". photo ."
        ". . ."; */
    `;
    // const Image = styled.img`
    //   grid-area: photo;
    //   margin: auto;
    //   display: block;
    //   background-position: center;
    //   background-repeat: no-repeat;
    //   background-size: cover;
    //   max-width: 250px;
    //   max-height: 250px;
    //   border-radius: 50%;
    //   animation-duration: 1s;
    //   animation-name: showPic;
		// `;
		
		const PrevImageBtn = styled.div`
      /* grid-area: nextBtn; */
      display: flex;
      position: fixed;
      top: 50%;
      left: 20px;
      width: 20px;
      height: 20px;
			background-color: gray;
			border-radius: 50%;
    `;

    const NextImageBtn = styled.div`
      /* grid-area: nextBtn; */
      display: flex;
      position: fixed;
      top: 50%;
      right: 20px;
      width: 20px;
      height: 20px;
			background-color: gray;
			border-radius: 50%;
    `;

    return (
      <Wrapper>
				<PrevImageBtn onClick={() => this.prevImg()} />
        <Slider image={this.state.image.picture} />
        <NextImageBtn onClick={() => this.nextImg()} />
      </Wrapper>
    );
  }
}

export default ImageViewer;
