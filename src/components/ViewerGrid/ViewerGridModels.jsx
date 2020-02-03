import React from "react";
import styled from "styled-components";
import ImagesGrid from "./ImagesGrid";

import {ContentData} from "../ContentData";
import ImageViewer from "./ImageViewer";


const ViewerGridModels = () => {

  const {modelsForGridSection, modelsFullSize} = ContentData;

  const Wrapper = styled.div`
      display: flex;
      margin: 100px auto 0;
  `;

  return (
      <Wrapper>
        <ImageViewer
            collection={modelsFullSize}
            closeImagePath='/models-tests'
        />
        <ImagesGrid
            direction='row'
            wrap='wrap'
            width='auto'
            maxWidth='auto'
            maxHeight='300px'
            radius='0'
            margin='10px'
            padding='0'
            justify='center'
            hoverNone
            add=''
            content={modelsForGridSection}
        />
      </Wrapper>
  );
};

export default ViewerGridModels;
