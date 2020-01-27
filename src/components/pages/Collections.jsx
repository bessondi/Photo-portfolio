import React from "react";
import styled from "styled-components";
import ImageViewer from "../ImageViewer/ImageViewer";

import { ContentData } from "../ContentData";


const {
  beautyFullSize,
  productFullSize,
  portraitFullSize,
  modelsFullSize
} = ContentData;

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

const BeautyCollection = () => {
  return (
    <Wrapper>
      <ImageViewer collection={beautyFullSize} />
    </Wrapper>
  );
};

const ProductCollection = () => {
  return (
      <Wrapper>
        <ImageViewer collection={productFullSize} />
      </Wrapper>
  );
};

const PortraitCollection = () => {
  return (
    <Wrapper>
      <ImageViewer collection={portraitFullSize} />
    </Wrapper>
  );
};

const ModelsCollection = () => {
  return (
      <Wrapper>
        <ImageViewer collection={modelsFullSize} />
      </Wrapper>
  );
};

export {
  BeautyCollection,
  ProductCollection,
  PortraitCollection,
  ModelsCollection
}