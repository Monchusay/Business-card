import React from 'react';
import style from "./Project4.module.css"
import {FormattedMessage} from "react-intl";

const Project4 = () => {
    return (
        <div className={style.Project4}>
            <div className={style.ProjectInfo}>
                <span className={style.ProjectInfoHeader}><FormattedMessage id='portFourth_header' /></span>
                <span className={style.ProjectInfoTech}><FormattedMessage id='portFourth_usages' /></span>
                <span className={style.ProjectInfoFunc}><FormattedMessage id='portFourth_func' /></span>
            </div>
            <div className={style.ProjectPic}>
                <div className={style.ProjectPicImg}/>
                <a
                    href="https://monchusay.github.io/Admin-dashboard/"
                    target="_blank"
                    className={style.LinkToProj}
                >
                    <FormattedMessage id='portToSite_button' />
                </a>
            </div>
        </div>
    );
};

export default Project4;