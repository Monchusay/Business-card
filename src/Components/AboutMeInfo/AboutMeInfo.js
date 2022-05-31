import React from "react";
import style from "./AboutMeInfo.module.css";
import { FormattedMessage } from "react-intl";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-scroll";

const AboutMeInfo = () => {
  return (
    <div className={style.AboutBox}>
      <div className={style.AboutMeInfo}>
        <div className={style.AboutMeInfoMain}>
          <div className={style.PhotoAndInfo}>
            <div className={style.Photo}>
              <div className={style.Img} />
              <span className={style.Header}>
                <FormattedMessage id="aboutMe_Who" />
              </span>
            </div>
            <div className={style.Info}>
              <FormattedMessage id="aboutMe_info" />
            </div>
          </div>
          <div className={style.MainContent}>
            <div className={style.About}>
              <FormattedMessage id="aboutMe_content" />
            </div>
            <div className={style.Vector}>
              <FormattedMessage id="aboutMe_vector" />
            </div>
          </div>
        </div>
        <div className={style.AboutMeInfoTech}>
          <div className={style.AboutMeInfoTechHeader}>
            <FormattedMessage id="aboutMe_tech_header" />
          </div>
          <div className={style.AboutMeInfoTechText}>
            <FormattedMessage id="aboutMe_tech" />
          </div>
          <div className={style.TechCards}>
            <span className={style.Card}>React</span>
            <span className={style.Card}>TypeScript</span>
            <span className={style.Card}>HTML</span>
            <span className={style.Card}>JavaScript</span>
            <span className={style.Card}>Redux</span>
            <span className={style.Card}>CSS</span>
            <span className={style.Card}>Node.js</span>
            <span className={style.Card}>Eng.lang</span>
            <span className={style.Card}>Webpack</span>
            <span className={style.Card}>Figma</span>
            <span className={style.Card}>Layout</span>
            <span className={style.Card}>Bootstrap</span>
          </div>
        </div>
      </div>
      <Link
        to="works_header"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        <FaChevronDown className={style.Icon} />
      </Link>
    </div>
  );
};

export default AboutMeInfo;
