import React from "react";
import style from "./NavBar.module.css";
import { Link, animateScroll } from "react-scroll";

const NavBar = () => {
  let scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  return (
    <div className={style.NavBar}>
      <div onClick={scrollToTop} className={style.MyName}>
        <div className={style.NavBarPhoto} />
        <span>Моисеев Тимур</span>
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
          Обо мне
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
          Мой стэк
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
          Портфолио
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
          Контакты
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
