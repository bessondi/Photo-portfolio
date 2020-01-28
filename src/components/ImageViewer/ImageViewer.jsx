import React, { Component } from "react";
import styled from "styled-components";


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
  	};

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
		// console.log(this.state.collection.length);

    const Wrapper = styled.div`
      display: flex;
      width: 100%;
      height: 100%;
    `;

    const Image = styled.img`
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

    const ImageChanger = styled.div`
      display: flex;
      position: fixed;
      top: 50%;
      width: 20px;
      height: 20px;
			background-color: darkgray;
			border: 1px solid #fff;
			border-radius: 50%;
      transition: all .4s ease;
        ${ props => {
          if (props.leftSide) {
              return `${props.leftSide}`;
          } else if (props.rightSide) {
              return `${props.rightSide}`;
          }
        }}
        &:hover {
          width: 25px;
          height: 25px;
          background-color: gray;
          transition: all .4s ease;
          transform: translateY(-2px);
          cursor: pointer;
        }
      `;

    return (
      <Wrapper>
        <Image src={this.state.image.picture} alt="Image" />
        <ImageChanger onClick={() => this.prevImg()} leftSide='left: 20px;'/>
        <ImageChanger onClick={() => this.nextImg()} rightSide='right: 20px;'/>
      </Wrapper>
    );
  }
}

export default ImageViewer;
