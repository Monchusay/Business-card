import { LOCALES } from "./locales";

export const messages = {
  [LOCALES.ENGLISH]: {
    mainInfo_name: "Timur Moiseev",
    mainInfo_content:
      "React-JS Specialist's personal website.",
    myWorks_header: "MY PROJECTS",
    aboutMe_Header: "ABOUT ME",
    aboutMe_Who:"WHO AM I",
    aboutMe_info:"I am a beginner front-end developer from St. Petersburg. I am 25 years old and the decision to connect my future career with Frontend development came to me half a year ago.",
    aboutMe_content:
      "I started my React-JS training with a course of 100 YouTube video tutorials. Passed courses at HTML-academy. I keep reading learn.javascript. Completed a free course on hexlet on working with the command line. I am confident with GIT and NPM. I keep learning CSS-flex/grid to improve my layout skills.",
    aboutMe_vector: "Graduated from paid courses of spoken English (B2) in a private educational institution \n < School of Informatics and Applied Mathematics with in-depth study of English <VECTOR++> > (2016-2018)",
    aboutMe_tech_header: "I USE",
    aboutMe_tech:
      "At the moment, I have no experience in commercial development, but I give all my best in my training and strive very hard for this. I understand that I still have a lot to learn, but I continue to follow my life principle - at the cost of any effort, always bring what you started to the end.",
    portFirst_header: "Platform for online purchase of tickets for music concerts \n < CONCERT CLUB >",
    portFirst_usages:
      "Used libraries and functions: \n React, Redux, React Hooks (useState, useEffect) + one custom, Typescript, axios.",
    portFirst_func:
      "Functionality: \n Landing with a list of users, profile of each user with a list of his posts, Route to the detailed page of each post with comments, the ability to leave your own. Data via API from the my-json-server service (.get .post (working, but fake, due to the free service)). Additional comment rendering path via dispatch/action. Adaptive layout.",
    portSecond_header: "List of users with personal data",
    portSecond_usages:
      "Used libraries and functions: \n React, Redux, Typescript, Axios, React Hooks (useState, useEffect).",
    portSecond_func:
      "Functionality: \n Getting a list and user data via API (ajax requests), sorting the list, Route by user id to the page with his information, the ability to edit it, the presence of required fields.",
    portThird_header: "Modern co-working area \n < Frispes >",
    portThird_usages: "Used libraries and functions: \n React.",
    portThird_func: "Functionality: \n Landing layout using React-components.",
    portFourth_header: "Online store website layout.\n The project is under development and continues to improve.",
    portFourth_usages:
      "Used libraries and functions: \n React, Npm-Yandex-maps, React-icons, Redux, React Hooks (useState).",
    portFourth_func:
      'Functionality: \n Displaying an array of a list of goods, Yandex maps on the Delivery tab, "Burger-menu" on the Cart tab. Adding items from the list of products to the shopping cart.',
    portToSite_button: 'TO SITE',
    reviews_Header: "WHAT OTHERS CAN SAY",
    reviews_DimaName: "Dmitry Puris",
    reviews_DimaAbout: "< Tinkoff > Senior Frontend Developer",
    contacts_header: "Contacts:",
    contacts_HH: "HH Resume:",
    contacts_phone: "Phone:",
    contacts_VK: "VK:",
    contacts_mail: "E-mail:",
    contacts_telegram: "Telegram:",
  },
  [LOCALES.RUSSIAN]: {
    mainInfo_name: "Тимур Моисеев",
    mainInfo_content:
        "Личный сайт React-JS специалиста.",
    myWorks_header: "МОИ РАБОТЫ",
    aboutMe_Header: "ОБО МНЕ",
    aboutMe_Who:"КТО Я",
    aboutMe_info:"Я - начинающий фронтенд разработчик из Санкт-Петербурга. Мне 25 лет и решение связать свою будущую карьеру с Frontend-разработкой я принял пол года назад.",
    aboutMe_content:
        "Я начал свое обучение React-JS с курса в 100 видео-уроков на YouTube. Прошел курсы на HTML-academy. Продолжаю читать learn.javascript. Закончил бесплатный курс на hexlet по работе с командной строкой. Уверенно работаю с GIT и NPM. Продолжаю изучать CSS-flex/grid что-бы улучшить свои навыки в верстке.",
    aboutMe_vector: "Окончил платные курсы разговорного английского языка (В2) в частном образовательном учреждении \n < Школа информатики и прикладной математики с углубленным изучением английского языка <ВЕКТОР++> > (2016-2018)",
    aboutMe_tech_header: "МОЙ СТЭК",
    aboutMe_tech:
        "На данный момент, у меня нет опыта коммерческой разработки, но я выкладываюсь на полную в своем обучении и очень стремлюсь к этому. Я понимаю что мне еще многому предстоит научиться, но я продолжаю следовать своему жизненному принципу - ценой любых усилий, всегда доводи начатое до конца.",
    portFirst_header: "Платформа для онлайн-покупки билетов музыкальных групп \n < CONCERT CLUB >",
    portFirst_usages:
        "Использованные библиотеки и функции: \n React, Redux, React Hooks (useState, useEffect) + один кастомный, Typescript, axios.",
    portFirst_func:
        "Функционал: \n Лэндинг с списком пользователей, профиль каждого пользователя с списком его постов, Route на детальную страницу каждого поста с комментариями, возможность оставить свой. Data по API с сервиса my-json-server (.get .post (рабочий, но фейковый, в силу бесплатности сервиса)). Дополнительный путь рендера комментария через dispatch/action. Адаптивная верстка.",
    portSecond_header: "Список пользователей с персональными данными",
    portSecond_usages:
        "Использованные библиотеки и функции: \n React, Redux, Typescript, Axios, React Hooks (useState, useEffect).",
    portSecond_func:
        "Функционал: \n Получение списка и данных пользователей по API (ajax-запросы), сортировка списка, Route по id пользователя на страницу с его информацией, возможность ее редактировать, наличие обязательных для заполнения полей.",
    portThird_header: "Современная co-working площадка \n < Frispes >",
    portThird_usages: "Использованные библиотеки и функции: \n React.",
    portThird_func: "Функционал: \n Верстка лэндинга по макету с использованием React-components.",
    portFourth_header: "Макет сайта онлайн-магазина. \n Проект в состоянии разработки и продолжает улучшаться.",
    portFourth_usages:
        "Использованные библиотеки и функции: \n React, Npm-Yandex-maps, React-icons, Redux, React Hooks (useState).",
    portFourth_func:
        'Функционал: \n Вывод массива списка товаров, Яндекс-карты на вкладке Delivery, "Burger-menu" на вкладке Cart. Добавление элементов из списка товаров в корзину.',
    portToSite_button: 'ПЕРЕЙТИ К САЙТУ',
    reviews_Header: "ЧТО ГОВОРЯТ ОБО МНЕ",
    reviews_DimaName: "Дмитрий Пурис",
    reviews_DimaAbout: "< Tinkoff > Senior Frontend Developer",
    reviews_PolyaName: "Полина Фролова",
    reviews_PolyaAbout: "Разработчик дизайна сайта",
    contacts_header: "Контактные данные:",
    contacts_HH: "HH Резюме:",
    contacts_phone: "Телефон:",
    contacts_VK: "ВКонтакте:",
    contacts_mail: "E-mail:",
    contacts_telegram: "Telegram:",
  }
};
