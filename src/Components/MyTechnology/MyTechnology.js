import React from 'react';
import style from "./MyTechnology.module.css"

const MyTechnology = () => {
    return (
        <div name="Tech" className={style.MyTechnology}>
            <div className={style.Header}>
                Я достиг определенного опыта в использовании:
            </div>
            <div className={style.ContentBoxes}>
                <span className={style.ContentBox}>React</span>
                <span className={style.ContentBox}>JavaScript</span>
                <span className={style.ContentBox}>TypeScript</span>
                <span className={style.ContentBox}>Redux</span>
                <span className={style.ContentBox}>HTML</span>
                <span className={style.ContentBox}>CSS</span>
                <span className={style.ContentBox}>Node.js</span>
                <span className={style.ContentBox}>Webpack</span>
                <span className={style.ContentBox}>Английский язык</span>
                <span className={style.ContentBox}>REST Api</span>
                <span className={style.ContentBox}>Git</span>
                <span className={style.ContentBox}>NPM</span>
                <span className={style.ContentBox}>Адаптивная верстка</span>
                <span className={style.ContentBox}>React-Hooks</span>
            </div>
        </div>
    );
};

export default MyTechnology;