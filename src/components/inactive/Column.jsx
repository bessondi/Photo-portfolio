import React from "react";
import styled from "styled-components";

import ColumnItems from "./ColumnItems";

import Vertical from "../img/vertical.jpg";
import Horizontal from "../img/horizontal.jpg";


function Column(props) {

    const Wrapper = styled.div`
      display: flex;      
      flex-direction: column;
      //justify-content: space-around;
      
      //display: grid;  
      //row-gap: 32px;    
      //grid-template-columns: 1fr;
      //grid-template-rows: 1fr 1fr;
    `;

    return (
        <Wrapper>
            <ColumnItems img={Vertical}/>
            <ColumnItems img={Horizontal}/>
        </Wrapper>
    );
}

export default Column;
