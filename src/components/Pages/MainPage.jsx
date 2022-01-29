import React from "react";
import styled from "styled-components";
import { ContentData } from "../ContentData";
import Flow from "../Viewer/ImagesFlow";
import { analyticsHelper } from '../analyticsHelper/analyticsHelper'


function MainPage({canUseWebp}) {

  const {
    beautyForMainPage,
    productForMainPage,
    portraitsForMainPage,
    modelsForMainPage
  } = ContentData;

  const Wrapper = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    max-height: calc(100vh - 100px);
    width: 100%;
    overflow: hidden;
    @media screen and (max-width: 576px) {
      max-height: 100%;
      overflow: scroll;
    }
  `;

  function imagesFlowClick (category, action, label) {
    analyticsHelper(category, action, label);
  }

  const Waterfall = () => {
    const Waterfall = styled.div`
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      width: 100%;
      max-width: 1600px;
      margin: 0 auto;
      @media screen and (max-width: 576px) {
        padding: 0;
        margin-top: 70px;
        flex-flow: column-reverse;
      }
    `;

    return (
      <Waterfall>
        <Flow slide="slideUp" duration="100s" content={beautyForMainPage} canUseWebp={canUseWebp}
          onClick={() => imagesFlowClick('main_page_flow', 'flow_click', 'beauty')}
        />
        <Flow slide="slideDown" duration="130s" content={productForMainPage} canUseWebp={canUseWebp}
          onClick={() => imagesFlowClick('main_page_flow', 'flow_click', 'product')}
        />
        <Flow slide="slideUp" duration="150s" content={portraitsForMainPage} canUseWebp={canUseWebp}
          onClick={() => imagesFlowClick('main_page_flow', 'flow_click', 'portraits')}
        />
        <Flow slide="slideDown" duration="90s" content={modelsForMainPage} canUseWebp={canUseWebp}
          onClick={() => imagesFlowClick('main_page_flow', 'flow_click', 'tests')}
        />
      </Waterfall>
    );
  };

  return (
    <Wrapper>
      <Waterfall/>
    </Wrapper>
  );
}

export default MainPage;
