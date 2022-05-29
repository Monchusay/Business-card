import React from "react";
import style from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    <div name="about" className={style.AboutMe}>
      <div className={style.AboutMeHeader}>Обо мне:</div>
      <div className={style.AboutMeContent}>
        Решение связать свою будущую карьеру с Frontend-разработкой пришло ко
        мне 4 месяца назад. Я начал свое обучение React-JS с бесплатных
        видео-уроков на YouTube. Прошел курсы на HTML-academy. Продолжаю читать
        learn.javascript. Закончил бесплатный курс на hexlet по работе с
        командной строкой. Уверенно работаю с GIT и NPM. Продолжаю изучать
        CSS-flex/grid что-бы улучшить свои навыки в верстке. В свободное от
        подготовки к работе время люблю играть в видео-игры, смотреть сериалы и
        уделять внимание своей девушке.
      </div>
      <div className={style.AboutMePS}>
        На данный момент, у меня нет опыта коммерческой разработки, но я
        выкладываюсь на полную в своем обучении и очень стремлюсь к этому. Я
        понимаю что мне еще многому предстоит научиться, но я продолжаю
        следовать своему жизненному принципу - ценой любых усилий, всегда доводи начатое до конца.
      </div>
    </div>
  );
};

export default AboutMe;
