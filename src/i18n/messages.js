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
      "Functionality: \n Landing with a list of users, profile of each user with a list of his posts, Route to the detailed page of each post with comments, the ability to leave your own. Data via API from the my-json-server service (.get .post (working, but fake, due to the free service)).",
    portSecond_header: "List of users with personal data",
    portSecond_usages:
      "Used libraries and functions: \n React, Redux, Typescript, Axios, React Hooks (useState, useEffect).",
    portSecond_func:
      "Functionality: \n Getting a list and user data via API (ajax requests), sorting the list, Route by user id to the page with his information, the ability to edit it, the presence of required fields.",
    portThird_header: "CRM-system",
    portThird_usages: "Used libraries and functions: \n React, Redux, Redux-toolkit, Axios, React Hooks (useState, useEffect), date-fns, react-select.",
    portThird_func: "Functionality: \n Listing of calls list, API data, sorting by call types, sources and errors, selection of time interval for displaying calls, custom MP3 players.",
    portFourth_header: "Admin dashboard",
    portFourth_usages:
      "Used libraries and functions: \n React, React Hooks (useState, useEffect, useContext), Syncfusion, Tailwind, React-icons.",
    portFourth_func:
      'Functionality: \n Full functionality with custom and universal charts/applications from the Syncfusion library. State management with createContext/useContext. Ability to choose a color scheme for the design and switch between light / dark themes. Adaptive layout.',
    portToSite_button: 'TO SITE',
    reviews_Header: "WHAT OTHERS CAN SAY",
    reviews_DimaName: "Dmitry Puris",
    reviews_DimaAbout: "< Tinkoff > Senior Frontend Developer",
    reviews_DimaText: "As Timur's mentor, I can say that he is moving very quickly in development. Always tries to solve problems on his own, but knows the balance and asks for advice in time. Made a lot of independent projects and test tasks. Possesses the most important skill of a programmer - perseverance. Timur still has a lot to learn and try, but I am sure that he will succeed!",
    reviews_PolyaText: "I am developing with Timur not the first site, the work always goes very clearly and competently. Special thanks for the attention to detail, as a designer, this is very important to me. Everything is always done on time. My graphic interactive ideas are executed and brought to life. Thanks Timur for the work, everything is great."
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
        "Функционал: \n Лэндинг с списком пользователей, профиль каждого пользователя с списком его постов, Route на детальную страницу каждого поста с комментариями, возможность оставить свой. Data по API с сервиса my-json-server (.get .post (рабочий, но фейковый, в силу бесплатности сервиса)).",
    portSecond_header: "Список пользователей с персональными данными",
    portSecond_usages:
        "Использованные библиотеки и функции: \n React, Redux, Typescript, Axios, React Hooks (useState, useEffect).",
    portSecond_func:
        "Функционал: \n Получение списка и данных пользователей по API (ajax-запросы), сортировка списка, Route по id пользователя на страницу с его информацией, возможность ее редактировать, наличие обязательных для заполнения полей.",
    portThird_header: "CRM-система",
    portThird_usages: "Использованные библиотеки и функции: \n React, Redux, Redux-toolkit, Axios, React Hooks (useState, useEffect), date-fns, react-select.",
    portThird_func: "Функционал: \n Листинг списка звонков, data по API, сортировка по типам звонка, источникам и ошибкам, выбор временного промежутка отображения звонков, кастомный проигрывателей MP3 записей.",
    portFourth_header: "Контрольная панель администратора.",
    portFourth_usages:
        "Использованные библиотеки и функции: \n React, React Hooks (useState, useEffect, useContext), Syncfusion, Tailwind, React-icons.",
    portFourth_func:
        'Функционал: \n Полный функционал с кастомными и универсальными графиками/приложениями из библиотеки Syncfusion. State management с помощью createContext/useContext. Возможность выбора цветовой схемы оформления и переключения между светлой/темной темами. Адаптивная верстка.',
    portToSite_button: 'ПЕРЕЙТИ К САЙТУ',
    reviews_Header: "ЧТО ГОВОРЯТ ОБО МНЕ",
    reviews_DimaName: "Дмитрий Пурис",
    reviews_DimaAbout: "< Tinkoff > Senior Frontend Developer",
    reviews_PolyaName: "Полина Фролова",
    reviews_PolyaAbout: "Разработчик дизайна сайта",
    reviews_DimaText: "Как ментор Тимура, могу сказать, что он очень быстро движется в развитии. Всегда пытается решить проблемы самостоятельно, но знает баланс и вовремя просит совета. Сделал много самостоятельных проектов и тестовых заданий. Обладает самым главным навыком программиста - усидчивостью. Еще много чего Тимуру предстоит узнать и попробовать, но я уверен, что у него все получится!",
    reviews_PolyaText: "Разрабатываю с Тимуром не первый сайт, работа всегда проходит очень чётко и грамотно. Отдельное спасибо за внимание к деталям, мне как дизайнеру, это очень важно. Все всегда сделано вовремя. Мои графические интерактивные идеи исполняются и воплощаются в жизнь. Спасибо Тимуру за работу, все великолепно."
  }
};
