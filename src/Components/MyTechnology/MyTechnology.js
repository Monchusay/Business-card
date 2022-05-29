import React from 'react';
import style from "./MyTechnology.module.css"
import {FormattedMessage} from "react-intl";

const MyTechnology = () => {
    return (
        <div name="Tech" className={style.MyTechnology}>
            <div className={style.Header}>
                <FormattedMessage id='tech_header' />
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
                <span className={style.ContentBox}><FormattedMessage id='tech_ENG' /></span>
                <span className={style.ContentBox}>REST Api</span>
                <span className={style.ContentBox}>Git</span>
                <span className={style.ContentBox}>NPM</span>
                <span className={style.ContentBox}><FormattedMessage id='tech_layout' /></span>
                <span className={style.ContentBox}>React-Hooks</span>
                <span className={style.ContentBox}>Figma</span>
            </div>
        </div>
    );
};

export default MyTechnology;