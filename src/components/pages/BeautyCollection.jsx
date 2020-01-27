import React from "react";
// import {HashLink as Link} from 'react-router-hash-link';
import styled from "styled-components";
import ImageViewer from "../ImageViewer/ImageViewer";

import { ContentData } from "../ContentData";

const BeautyCollection = () => {

  const { beautyFullSize } = ContentData;

  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: calc(100vh - 100px);
  `;

  return (
    <Wrapper>
      <ImageViewer collection={beautyFullSize} />
    </Wrapper>
  );
};

export default BeautyCollection;
