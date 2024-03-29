import React, { Component } from 'react';
import { HashLink as Link } from "react-router-hash-link";
import styled from "styled-components";
import s from './NavSideBar.module.css';
import instagram from "../../img/icons/instagram.svg";
import telegram from "../../img/icons/telegram.svg";
import facebook from "../../img/icons/facebook.svg";
import { analyticsHelper } from '../analyticsHelper/analyticsHelper'


class NavSideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMenu: false
    };
  }

  navMenuItemClick = (category, action, label) => {
    analyticsHelper(category, action, label);
    this.toggleMenuClass();
  };

  toggleMenuClass = () => {
    this.setState({ activeMenu: !this.state.activeMenu });
  };

  render() {
    const List = styled.ul`
      display: flex;
      margin: auto;
      flex-flow: column nowrap;
      align-content: center;
    `;
    const ListItems = styled.li`
      & > a {
        font-size: 3rem;
        font-family: "Circe Extra Bold", sans-serif;
        color: #fff;
        @media screen and (max-width: 576px) {
          font-size: 2rem;
        }
      }

      & > a:hover {
        color: #5f23bc;
      }
    `;

    const Contacts = styled.div`
      display: flex;
      margin: auto;
      flex-flow: column nowrap;
      align-content: center;
      justify-content: space-between;
      height: 180px;
    `;
    const ContactsTitle = styled.p`
      font-size: 3rem;
      font-family: "Circe Extra Bold", sans-serif;
      color: #fff;
      text-align: center;
      transition: all 0.3s ease;

      &:hover {
        transform: scale(1.05);
        transition: all 0.3s ease;
      }

      @media screen and (max-width: 576px) {
        font-size: 2rem;
      }
    `;
    const Mail = styled.a`
      font-size: 1.4rem;
      color: #fff;
      margin-top: -15px;
      transition: all 0.3s ease;
    `;
    const SocialMedia = styled.div`
      display: flex;
      justify-content: center;
      align-items: flex-start;
    `;
    const Icon = styled.img`
      display: block;
      width: 50px;
      height: 50px;
      transition: all 0.3s ease;
      margin: 0 10px;
      filter: invert(94%) sepia(0%) saturate(7494%) hue-rotate(317deg) brightness(106%) contrast(109%);
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
          <List>
            <ListItems><Link to='/beauty' onClick={() => this.navMenuItemClick('sidebar_menu(mobile)', 'nav_click', 'beauty')}>Beauty</Link></ListItems>
            <ListItems><Link to='/product-photography' onClick={() => this.navMenuItemClick('sidebar_menu(mobile)', 'nav_click', 'product')}>Product</Link></ListItems>
            <ListItems><Link to='/portraits' onClick={() => this.navMenuItemClick('sidebar_menu(mobile)', 'nav_click', 'portraits')}>Portraits</Link></ListItems>
            <ListItems><Link to='/models-tests' onClick={() => this.navMenuItemClick('sidebar_menu(mobile)', 'nav_click', 'tests')}>Models Tests</Link></ListItems>
          </List>
        </div>

        <div className={this.state.activeMenu
          ? `${s.rightMenuSection_active}`
          : `${s.rightMenuSection_closed}`}
        >
          <Contacts>
            <Link to='/about' onClick={() => this.navMenuItemClick('sidebar_menu(mobile)', 'nav_click', 'about')}><ContactsTitle>About</ContactsTitle></Link>
            <Mail href='mailto:dmitrybessonov@icloud.com' onClick={() => this.navMenuItemClick('sidebar_menu(mobile)', 'email_click', 'email')}>dmitrybessonov@icloud.com</Mail>
            <SocialMedia>
              <a href='https://www.instagram.com/bessondi' onClick={() => this.navMenuItemClick('sidebar_menu(mobile)', 'social_media_click', 'instagram')}><Icon src={instagram} alt='instagram'/></a>
              <a href='https://t.me/bessondi' onClick={() => this.navMenuItemClick('sidebar_menu(mobile)', 'social_media_click', 'telegram')}><Icon src={telegram} alt='telegram'/></a>
              <a href='https://www.facebook.com/bessondi' onClick={() => this.navMenuItemClick('sidebar_menu(mobile)', 'social_media_click', 'facebook')}><Icon src={facebook} alt='facebook'/></a>
            </SocialMedia>
          </Contacts>
        </div>

      </React.Fragment>
    )
  }
}

export default NavSideBar;
