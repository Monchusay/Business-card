import React from "react";
import style from "./Contacts.module.css";
import { MdAlternateEmail, MdOutlineSummarize } from "react-icons/md";
import { AiOutlinePhone } from "react-icons/ai";
import { BsTelegram, BsGithub } from "react-icons/bs";
import { FaVk } from "react-icons/fa";

const Contacts = () => {
  return (
    <div name="contacts" className={style.Contacts}>
      <div className={style.ContactsBox}>
        <a
          href="https://spb.hh.ru/resume/24bc33fbff09d719ae0039ed1f4f57376e3057"
          target="_blank"
          className={style.Contact}
        >
          <MdOutlineSummarize className={style.MyContactsIcon} />
          <span className={style.ContactText}>https://spb.hh.ru/resume/</span>
        </a>
        <a href="tel:+79047897143" className={style.Contact}>
          <AiOutlinePhone className={style.MyContactsIcon} />
          <span className={style.ContactText}>+7 (904) 789-71-43</span>
        </a>
        <a href="mailto:monchusay1@mail.ru" className={style.Contact}>
          <MdAlternateEmail className={style.MyContactsIcon} />
          <span className={style.ContactText}>monchusay1@mail.ru</span>
        </a>
        <a
          href="https://t.me/omegapepeg"
          target="_blank"
          className={style.Contact}
        >
          <BsTelegram className={style.MyContactsIcon} />
          <span className={style.ContactText}>@OmegaPepeg</span>
        </a>
        <a
          href="https://vk.com/kudalov"
          target="_blank"
          className={style.Contact}
        >
          <FaVk className={style.MyContactsIcon} />
          <span className={style.ContactText}>https://vk.com/kudalov</span>
        </a>
        <a
          href="https://github.com/Monchusay"
          target="_blank"
          className={style.Contact}
        >
          <BsGithub className={style.MyContactsIcon} />
          <span className={style.ContactText}>
            https://github.com/Monchusay
          </span>
        </a>
      </div>
    </div>
  );
};

export default Contacts;
