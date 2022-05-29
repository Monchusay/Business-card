import React from "react";
import style from "./AboutMe.module.css";
import {FormattedMessage} from "react-intl";

const AboutMe = () => {
  return (
    <div name="about" className={style.AboutMe}>
      <div className={style.AboutMeHeader}><FormattedMessage id='aboutMe_Header' /></div>
      <div className={style.AboutMeContent}>
          <FormattedMessage id='aboutMe_content' />
      </div>
      <div className={style.AboutMePS}>
          <FormattedMessage id='aboutMe_PS' />
      </div>
    </div>
  );
};

export default AboutMe;
