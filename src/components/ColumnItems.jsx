import React from "react";
import styled from "styled-components";


function ColumnItems(props) {

    // const Wrapper = styled.div`
    //   display: flex;
    //   flex-direction: column;
    //
    //   //margin: 30px auto;
    //   //max-height: 100vh;
    //   //max-width: 300px;
    //   //overflow: hidden;
    // `;

    const Image = styled.img`
      //display: block;
      //background-image: url(${props.img});
      // background-position: center;
      // background-repeat: no-repeat;
      // background-size: cover;

      //margin: 0 auto;
      //border: 1px solid yellowgreen;

      //max-width:100%;
      // height:auto;
      //height: 500px;
      //width: 100px;
      //object-fit: contain;
      //      overflow: hidden;


         //background-position: center;
         //background-repeat: no-repeat;
         //background-size: cover;
         //max-width: 100%;
         //max-height: 100%;
         //margin-bottom: 32px;
    `;

    return (
        <img src={props.img} alt='photo'
             style={{
                 backgroundPosition: 'center',
                 backgroundRepeat: 'no-repeat',
                 backgroundSize: 'cover',
                 maxWidth: 100 + '%',
                 maxHeight: 100 + '%',
                 // width: 350 + 'px',
                 // height: 500 + 'px',
                 marginBottom: 32 + 'px'
             }}
        />
    );
}

export default ColumnItems;

