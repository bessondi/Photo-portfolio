import React from "react";
import styled from "styled-components";


function Footer() {

    const Footer = styled.footer`
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 20px;
        background-color: #fff;
        //z-index: 5;
    `;

    return (
        <Footer/>
    );
}

export default Footer;
