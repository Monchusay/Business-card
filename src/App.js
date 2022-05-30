import style from "./App.module.css";
import MyTechnology from "./Components/MyTechnology/MyTechnology";
import AboutMe from "./Components/AboutMe/AboutMe";
import MyContacts from "./Components/MyContacts/MyContacts";
import { IntlProvider } from "react-intl";
import { LOCALES } from "./i18n/locales";
import { messages } from "./i18n/messages";
import React, { useState } from "react";
import FirstPage from "./Components/FirstPage/FirstPage";
import MyWorksHeader from "./Components/MyWorksHeader/MyWorksHeader";
import MyWorksSlider from "./Components/MyWorksSlider/MyWorksSlider";

const App = () => {

  const locale = LOCALES.RUSSIAN;
  const [currentLocale, setCurrentLocale] = useState(locale);
  const handleChange = ({ target: { value } }) => {
    setCurrentLocale(value);
  };

  return (
      <IntlProvider
          messages={messages[currentLocale]}
          locale={currentLocale}
          defaultLocale={LOCALES.RUSSIAN}
      >
      <div className={style.App}>
        <FirstPage currentLocale={currentLocale} handleChange={handleChange} />
        <MyWorksHeader/>
        <MyWorksSlider/>
        {/*<AboutMe />
        <MyTechnology />*/}
        {/*<MyContacts />*/}
      </div>
    </IntlProvider>
  );
};

export default App;
