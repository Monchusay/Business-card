import React from "react";
import style from "./FirstPage.module.css";
import arrow from "../../Pictures/STRELKA_AI.png";
import VK from "../../Pictures/VK_logo.jpg";
import HH from "../../Pictures/HH_logo.jpg";
import Telegram from "../../Pictures/Telegram_logo.jpg";
import Mail from "../../Pictures/Mail_logo.png";
import Phone from "../../Pictures/Phone_logo.jpg";
import Git from "../../Pictures/Git_logo.png";
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
            <a href="https://vk.com/kudalov" target="_blank">
              <img src={VK} />
            </a>
          </span>
          <span className={style.ContactsElement}>
            <a href="https://t.me/omegapepeg" target="_blank">
              <img src={Telegram} />
            </a>
          </span>
          <span className={style.ContactsElement}>
            <a href="tel:+79047897143">
              <img src={Phone} />
            </a>
          </span>
          <span className={style.ContactsElement}>
            <a href="mailto:monchusay1@mail.ru">
              <img src={Mail} />
            </a>
          </span>
          <span className={style.ContactsElement}>
            <a
              href="https://spb.hh.ru/resume/24bc33fbff09d719ae0039ed1f4f57376e3057"
              target="_blank"
            >
              <img src={HH} />
            </a>
          </span>
          <span className={style.ContactsGitElement}>
            <a href="https://github.com/Monchusay" target="_blank">
              <img src={Git} />
            </a>
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
      <div className={style.MyInfo}>
        <div className={style.FirstPageImage} />
        <span className={style.FirstPageName}>
          <FormattedMessage id="mainInfo_name" />
        </span>
        <span className={style.FirstPageProf}>Frontend Developer</span>
        <span className={style.FirstPageSite}>
          <FormattedMessage id="mainInfo_content" />
        </span>
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={90}
          duration={500}
        >
          <img src={arrow} className={style.arrow} />
        </Link>
      </div>
    </div>
  );
};

export default FirstPage;
