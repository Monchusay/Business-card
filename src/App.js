import style from "./App.module.css";
import { IntlProvider } from "react-intl";
import { LOCALES } from "./i18n/locales";
import { messages } from "./i18n/messages";
import React, { useState } from "react";
import FirstPage from "./Components/FirstPage/FirstPage";
import MyWorksHeader from "./Components/MyWorksHeader/MyWorksHeader";
import MyWorksSlider from "./Components/MyWorksSlider/MyWorksSlider";
import AboutMeInfoHeader from "./Components/AboutMeInfoHeader/AboutMeInfoHeader";
import AboutMeInfo from "./Components/AboutMeInfo/AboutMeInfo";
import ReviewsHeader from "./Components/ReviewsHeader/ReviewsHeader";
import Reviews from "./Components/Reviews/Reviews";
import Contacts from "./Components/Contacts/Contacts";

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
        <AboutMeInfoHeader />
        <AboutMeInfo/>
        <MyWorksHeader />
        <MyWorksSlider />
        <ReviewsHeader/>
        <Reviews/>
        <Contacts/>
      </div>
    </IntlProvider>
  );
};

export default App;
