import style from "./App.module.css";
import NavBar from "./Components/NavBar/NavBar";
import MainInfo from "./Components/MainInfo/MainInfo";
import MyTechnology from "./Components/MyTechnology/MyTechnology";
import AboutMe from "./Components/AboutMe/AboutMe";
import Portfolio from "./Components/Portfolio/Portfolio";
import MyContacts from "./Components/MyContacts/MyContacts";

const App = () => {
  return (
    <div className={style.App}>
      <NavBar />
      <MainInfo />
      <AboutMe />
      <MyTechnology />
      <Portfolio />
      <MyContacts />
    </div>
  );
};

export default App;
