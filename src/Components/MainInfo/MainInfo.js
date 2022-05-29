import React from "react";
import style from "./MainInfo.module.css";
import {FormattedMessage} from "react-intl";

const MainInfo = () => {
  return (
    <div className={style.MainInfo}>
      <div className={style.MainInfoContent}>
        <div className={style.Header}>
          <span className={style.Name}><FormattedMessage id='mainInfo_name' /></span>
          <span className={style.JobTitle}>Junior Frontend Developer</span>
        </div>
        <span className={style.Content}>
          <FormattedMessage id='mainInfo_content' />
        </span>
      </div>
      <div className={style.MainInfoPicBox}>
        <div className={style.MainInfoPicture}></div>
      </div>
    </div>
  );
};

export default MainInfo;
