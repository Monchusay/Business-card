import React from 'react';
import style from "./AboutMeInfoHeader.module.css"
import {FormattedMessage} from "react-intl";

const AboutMeInfoHeader = () => {
    return (
        <div className={style.AboutMeInfo}>
            <div name="about" className={style.AboutMeInfoImg}>
                <FormattedMessage id='aboutMe_Header' />
            </div>
        </div>
    );
};

export default AboutMeInfoHeader;