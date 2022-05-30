import React from "react";
import style from "./FirstPage.module.css";
import arrow from "../../Pictures/STRELKA_AI.png";
import VK from "../../Pictures/VK_logo.jpg";
import HH from "../../Pictures/HH_logo.jpg";
import Telegram from "../../Pictures/Telegram_logo.jpg";
import Mail from "../../Pictures/Mail_logo.png";
import Phone from "../../Pictures/Phone_logo.jpg";
import { FormattedMessage } from "react-intl";
import { LOCALES } from "../../i18n/locales";
import { Link } from "react-scroll";

const FirstPage = ({ currentLocale, handleChange }) => {
  const languages = [
    { name: "English", code: LOCALES.ENGLISH },
    { name: "Русский", code: LOCALES.RUSSIAN },
  ];

  return (
    <div className={style.FirstPage}>
      <div className={style.ContLangSelector}>
        <div className={style.Contacts}>
          <span className={style.ContactsElement}>
            <img src={VK} />
            <span className={style.ContactsElementText}></span>
          </span>
          <span className={style.ContactsElement}>
            <img src={Telegram} />
            <span className={style.ContactsElementText}></span>
          </span>
          <span className={style.ContactsElement}>
            <img src={Phone} />
            <span className={style.ContactsElementText}></span>
          </span>
          <span className={style.ContactsElement}>
            <img src={Mail} />
            <span className={style.ContactsElementText}></span>
          </span>
          <span className={style.ContactsElement}>
            <img src={HH} />
            <span className={style.ContactsElementText}></span>
          </span>
        </div>
        <div className={style.LangSelector}>
          Lang:{" "}
          <select onChange={handleChange} value={currentLocale}>
            {languages.map(({ name, code }) => (
              <option key={code} value={code}>
                {name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className={style.FirstPageImage} />
      <span className={style.FirstPageName}>
        <FormattedMessage id="mainInfo_name" />
      </span>
      <span className={style.FirstPageProf}>Junior Frontend Developer</span>
      <span className={style.FirstPageSite}>
        <FormattedMessage id="mainInfo_content" />
      </span>
      <Link
        to="works_header"
        spy={true}
        smooth={true}
        offset={100}
        duration={500}
      >
        <img src={arrow} className={style.arrow} />
      </Link>
    </div>
  );
};

export default FirstPage;
