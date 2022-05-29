import React from "react";
import style from "./NavBar.module.css";
import { Link, animateScroll } from "react-scroll";
import { FormattedMessage } from 'react-intl'
import {LOCALES} from "../../i18n/locales";

const NavBar = ({ currentLocale, handleChange }) => {

  const languages = [
    { name: 'English', code: LOCALES.ENGLISH },
    { name: 'Русский', code: LOCALES.RUSSIAN },
  ]

  let scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  return (
    <div className={style.NavBar}>
      <div onClick={scrollToTop} className={style.MyName}>
        <div className={style.NavBarPhoto} />
        <span><FormattedMessage id='navbar_name' /></span>
      </div>
      <div className={style.Switcher}>
        Lang: <select onChange={handleChange} value={currentLocale}>
        {languages.map(({ name, code }) => (
            <option key={code} value={code}>
              {name}
            </option>
        ))}
      </select>
      </div>
      <div className={style.NavBarLinks}>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-200}
          duration={400}
          className={style.NavBarLinksElement}
        >
          <FormattedMessage id='navbar_about' />
        </Link>
        <Link
          activeClass="active"
          to="Tech"
          spy={true}
          smooth={true}
          offset={-200}
          duration={400}
          className={style.NavBarLinksElement}
        >
          <FormattedMessage id='navbar_tech' />
        </Link>
        <Link
          activeClass="active"
          to="Portfolio"
          spy={true}
          smooth={true}
          offset={-50}
          duration={400}
          className={style.NavBarLinksElement}
        >
          <FormattedMessage id='navbar_port' />
        </Link>
        <Link
          activeClass="active"
          to="Contacts"
          spy={true}
          smooth={true}
          offset={-50}
          duration={400}
          className={style.NavBarLinksElement}
        >
          <FormattedMessage id='navbar_cont' />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
