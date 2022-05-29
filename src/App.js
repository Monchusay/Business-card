import style from "./App.module.css";
import NavBar from "./Components/NavBar/NavBar";
import MainInfo from "./Components/MainInfo/MainInfo";
import MyTechnology from "./Components/MyTechnology/MyTechnology";
import AboutMe from "./Components/AboutMe/AboutMe";
import Portfolio from "./Components/Portfolio/Portfolio";
import MyContacts from "./Components/MyContacts/MyContacts";
import { IntlProvider } from "react-intl";
import { LOCALES } from "./i18n/locales";
import { messages } from "./i18n/messages";
import {useState} from "react";

const App = () => {

  const locale = LOCALES.RUSSIAN
  const [currentLocale, setCurrentLocale] = useState(locale)
  const handleChange = ({ target: { value } }) => {
    setCurrentLocale(value)
  }

  return (
    <IntlProvider
      messages={messages[currentLocale]}
      locale={currentLocale}
      defaultLocale={LOCALES.RUSSIAN}
    >
      <div className={style.App}>
        <NavBar currentLocale={currentLocale} handleChange={handleChange} />
        <MainInfo />
        <AboutMe />
        <MyTechnology />
        <Portfolio />
        <MyContacts />
      </div>
    </IntlProvider>
  );
};

export default App;
