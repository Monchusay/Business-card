import React from "react";
import style from "./MyContacts.module.css";
import { MdOutlineSummarize, MdAlternateEmail } from "react-icons/md";
import { AiOutlinePhone } from "react-icons/ai";
import {FaVk} from "react-icons/fa"
import {BsTelegram} from "react-icons/bs"
import {FormattedMessage} from "react-intl";

const MyContacts = () => {
  return (
    <div name="Contacts" className={style.MyContacts}>
      <div className={style.Header}><FormattedMessage id='contacts_header' /></div>
      <div className={style.MyContactsBox}>
        <span className={style.Contact}>
          <MdOutlineSummarize className={style.MyContactsIcon} />
          <a
            href="https://spb.hh.ru/resume/24bc33fbff09d719ae0039ed1f4f57376e3057"
            target="_blank"
            className={style.Link}
          >
            <FormattedMessage id='contacts_HH' /> https://spb.hh.ru/resume/24bc33fbff09d719ae0039ed1f4f57376e3057
          </a>
        </span>
        <span className={style.Contact}>
          <AiOutlinePhone className={style.MyContactsIcon} />
          <span className={style.Link}> <FormattedMessage id='contacts_phone' /> 8(904)789-71-43</span>
        </span>
        <span className={style.Contact}>
          <FaVk className={style.MyContactsIcon} />
          <a
              href="https://vk.com/kudalov"
              target="_blank"
              className={style.Link}
          >
            <FormattedMessage id='contacts_VK' /> https://vk.com/kudalov
          </a>
        </span>
        <span className={style.Contact}>
          <MdAlternateEmail className={style.MyContactsIcon} />
          <span className={style.Link}><FormattedMessage id='contacts_mail' /> monchusay1@mail.ru</span>
        </span>
        <span className={style.ContactCenter}>
          <BsTelegram className={style.MyContactsIcon} />
          <span className={style.Link}><FormattedMessage id='contacts_telegram' /> @OmegaPepeg</span>
        </span>
      </div>
    </div>
  );
};

export default MyContacts;
