import React from "react";
import style from "./MainInfo.module.css";

const MainInfo = () => {
  return (
    <div className={style.MainInfo}>
      <div className={style.MainInfoContent}>
        <div className={style.Header}>
          <span className={style.Name}> Моисеев Тимур Рамилевич</span>
          <span className={style.JobTitle}> Junior Frontend Developer</span>
        </div>
        <span className={style.Content}>
          Начинающий React-JS специалист, создание функционала пользовательского
          интерфейса сайта, разработка элементов прямого взаимодействия сайта с
          пользователем, вертка веб-страниц.
        </span>
      </div>
      <div className={style.MainInfoPicBox}>
        <div className={style.MainInfoPicture}></div>
      </div>
    </div>
  );
};

export default MainInfo;
