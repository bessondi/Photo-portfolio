import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { NavLink } from "react-router-dom";

import styled from "styled-components";
import s from "./Header.module.css";
import NavSideBar from "./NavMenu/NavSideBar";

function Header() {

  const randomColor = function getRandomColor() {
    let characters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += characters[getRandomNumber(0, 15)];
    }
    return color;
  };
  function getRandomNumber(low, high) {
    let r = Math.floor(Math.random() * (high - low + 1)) + low;
    return r;
  }

  const Word = styled.ul`
    display: flex;
    flex-flow: row nowrap;
  `;
  const Letter = styled.li`
    transition: all 2.5s ease;
    &:hover {
      transition: all 0.2s ease;
      transform: scale(1.2);
      color: ${randomColor};
    }
  `;
  const Header = styled.header`
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
    /* border-bottom: 1px solid gray; */
    background-color: #fff;
    z-index: 100;
  `;
  const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 10px 20px;
  `;
  const PageTitle = styled.div`
    display: flex;
    align-items: center;
  `;
  const Title = styled.div`
    font-size: 2.5rem;
    font-weight: 900;
    //letter-spacing: -1px;
    line-height: 90%;
    font-family: "Circe Extra Bold", sans-serif;

    & > :last-child {
      position: relative;
      left: 12px;
    }
    transition: all 1s ease;
    &:hover {
      transition: all 0.5s ease;
      transform: translateX(5px);
    }
  `;
  const Nav = styled.nav`
    display: flex;
    justify-content: space-around;
    width: 600px;
    @media screen and (max-width: 992px) {
      display: none;
    }
  `;
  const NavItem = styled.span`
    display: inline-block;
    font-size: 1.7rem;
    font-weight: 700;
    font-family: "Circe Bold", sans-serif;

    transition: all 0.5s ease;
    &:hover {
      color: #5f23bc;
      transition: all 0.3s ease;
      transform: translateX(-5px);
    }
  `;

  return (
    <Header>
      <Wrapper>

        <PageTitle>
          <Link to="/">
            <Title>
              <Word>
                <Letter>d</Letter>
                <Letter>m</Letter>
                <Letter>i</Letter>
                <Letter>t</Letter>
                <Letter>r</Letter>
                <Letter>y</Letter>
              </Word>
              <Word>
                <Letter>b</Letter>
                <Letter>e</Letter>
                <Letter>s</Letter>
                <Letter>s</Letter>
                <Letter>o</Letter>
                <Letter>n</Letter>
                <Letter>o</Letter>
                <Letter>v</Letter>
              </Word>
            </Title>
          </Link>
        </PageTitle>

        <NavSideBar/>

        <Nav>
          <NavLink to="/beauty" activeClassName={s.activeLinkAbout}>
            <NavItem>beauty</NavItem>
          </NavLink>

          <NavLink to="/product" activeClassName={s.activeLinkAbout}>
            <NavItem>product</NavItem>
          </NavLink>

          <NavLink to="/portrait" activeClassName={s.activeLinkAbout}>
            <NavItem>portrait</NavItem>
          </NavLink>

          <NavLink to="/about" activeClassName={s.activeLinkAbout}>
            <NavItem>about / contact</NavItem>
          </NavLink>
        </Nav>
      </Wrapper>
    </Header>
  );
}

export default Header;
