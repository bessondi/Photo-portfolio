import React, {Component} from 'react';
import {HashLink as Link} from "react-router-hash-link";
import styled from "styled-components";

import s from './NavSideBar.module.css';

import instagram from "../../img/icons/instagram_white.svg";
import facebook from "../../img/icons/facebook_white.svg";
import telegram from "../../img/icons/telegram_white.svg";


class NavSideBar extends Component {
  constructor() {
    super();
    this.state = {
      activeMenu: false
    };
  }

  toggleMenuClass = () => {
    let currentState = this.state.activeMenu;
    this.setState({activeMenu: !currentState});
  };

  render() {

    const List = styled.ul`
        display: flex;
        margin: auto;
        flex-flow: column nowrap;
        align-content: center;
    `;
    const ListItems = styled.li`
      padding: 10px 0;
        
      &>a {
        font-size: 3rem;
        font-family: "Circe Extra Bold", sans-serif;
        color: #fff;
        text-decoration: none;
      }
      &>a:hover {
        color: #5f23bc;
      }
    `;

    const Contacts = styled.div`
        display: flex;
        margin: auto;
        flex-flow: column nowrap;
        align-content: center;
        justify-content: space-between;
        height: 150px;
    `;
    const Mail = styled.a`
        font-size: 1.4rem;
        font-family: "Circe Bold", sans-serif;
        color: #fff;
  `;
    const SocialMedia = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    fill: #fff;
  `;
    const Icon = styled.img`
    display: block;
    width: 50px;
    height: 50px;
    
    transition: all 0.3s ease;  
    &:hover {
      transform: scale(1.1);
      transition: all 0.3s ease;  
    }
  `;
    return (
        <React.Fragment>

          <div className={s.navMenuBtn}>
            <button className={this.state.activeMenu
                ? `${s.menuBtn} ${s.menuBtn_active}`
                : `${s.menuBtn}`}
                    onClick={this.toggleMenuClass}>
              <span/>
            </button>
          </div>

          <div
              className={this.state.activeMenu
                  ? `${s.leftMenuSection_active}`
                  : `${s.leftMenuSection_closed}`}
          >
            <List
                // className={this.state.activeMenu
                // ? `${s.listItems_active}`
                // : `${s.listItems}`}
            >
              <ListItems><Link to='/beauty' onClick={this.toggleMenuClass}>Beauty</Link></ListItems>
              <ListItems><Link to='/product-photography' onClick={this.toggleMenuClass}>Product</Link></ListItems>
              <ListItems><Link to='/portraits' onClick={this.toggleMenuClass}>Portraits</Link></ListItems>
              <ListItems><Link to='/models-tests' onClick={this.toggleMenuClass}>Models Tests</Link></ListItems>
            </List>
          </div>

          <div className={this.state.activeMenu
              ? `${s.rightMenuSection_active}`
              : `${s.rightMenuSection_closed}`}
          >
            <Contacts
                // className={this.state.activeMenu
                // ? `${s.listItems_active}`
                // : `${s.listItems}`}
            >
              <Mail href='mailto:dmitrybessonov@icloud.com'>dmitrybessonov@icloud.com</Mail>
              <SocialMedia>
                <a href='https://www.instagram.com/bessondi'><Icon src={instagram} alt='instagram'/></a>
                <a href='https://www.facebook.com/bessondi'><Icon src={facebook} alt='facebook'/></a>
                <a href='https://t.me/bessondi'><Icon src={telegram} alt='telegram'/></a>
              </SocialMedia>
            </Contacts>
          </div>

        </React.Fragment>
    )
  }
}

export default NavSideBar;