import React from "react";
import style from "./Portfolio.module.css";

const Portfolio = () => {
  return (
    <div name="Portfolio" className={style.Portfolio}>
      <div className={style.PortfolioHeader}>
        Некоторые мои работы, созданные в процессе обучения:
      </div>
      <div className={style.PortfolioBoxes}>
        <div className={style.PortfolioWork}>
          <div className={style.PortfolioWorkContent}>
            <span className={style.Description}>
              Использованные библиотеки и функции: React, Redux, React Hooks
              (useState, useEffect) + один кастомный, Typescript, axios.
            </span>
            <span className={style.Functions}>
              Функционал: Лэндинг с списком пользователей, профиль каждого
              пользователя с списком его постов, Route на детальную страницу
              каждого поста с комментариями, возможность оставить свой. Data по
              API с сервиса my-json-server (.get .post (рабочий, но фейковый, в
              силу бесплатности сервиса)). Дополнительный путь рендера
              комментария через dispatch/action. Адаптивная верстка.
            </span>
          </div>
          <div className={style.PortfolioWorkPic1}>
            <a
              href="https://monchusay.github.io/ds-test-task-complited/"
              target="_blank"
              className={style.PortfolioWorkButton}
            >
              Перейти к сайту
            </a>
          </div>
        </div>
        <div className={style.PortfolioWork}>
          <div className={style.PortfolioWorkContent}>
            <span className={style.Description}>
              Использованные библиотеки и функции: React, Redux, Typescript,
              Axios, React Hooks (useState, useEffect).
            </span>
            <span className={style.Functions}>
              Функционал: Получение списка и данных пользователей по API
              (ajax-запросы), сортировка списка, Route по id пользователя на
              страницу с его информацией, возможность ее редактировать, наличие
              обязательных для заполнения полей.
            </span>
          </div>
          <div className={style.PortfolioWorkPic2}>
            <a
              href="https://monchusay.github.io/RooX-test-task-completed/"
              target="_blank"
              className={style.PortfolioWorkButton}
            >
              Перейти к сайту
            </a>
          </div>
        </div>
        <div className={style.PortfolioWork}>
          <div className={style.PortfolioWorkContent}>
            <span className={style.Description}>
              Использованные библиотеки и функции: React.
            </span>
            <span className={style.Functions}>
              Функционал: Верстка лэндинга по макету с использованием
              React-components.
            </span>
          </div>
          <div className={style.PortfolioWorkPic3}>
            <a
              href="https://monchusay.github.io/Krayt-test-task-completed/"
              target="_blank"
              className={style.PortfolioWorkButton}
            >
              Перейти к сайту
            </a>
          </div>
        </div>
        <div className={style.PortfolioWork}>
          <div className={style.PortfolioWorkContent}>
            <span className={style.Description}>
              Использованные библиотеки и функции: React, Npm-Yandex-maps,
              React-icons, Redux, React Hooks (useState).
            </span>
            <span className={style.Functions}>
              Функционал: Вывод массива списка товаров, Яндекс-карты на вкладке
              Delivery, "Burger-menu" на вкладке Cart. Добавление элементов из
              списка товаров в корзину.
            </span>
          </div>
          <div className={style.PortfolioWorkPic4}>
            <a
              href="https://monchusay.github.io/Online-Store/"
              target="_blank"
              className={style.PortfolioWorkButton}
            >
              Перейти к сайту
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
