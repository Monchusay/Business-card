import React from 'react';
import style from "./Project3.module.css"
import {FormattedMessage} from "react-intl";

const Project3 = () => {
    return (
        <div className={style.Project3}>
            <div className={style.ProjectInfo}>
                <span className={style.ProjectInfoHeader}><FormattedMessage id='portThird_header' /></span>
                <span className={style.ProjectInfoTech}><FormattedMessage id='portThird_usages' /></span>
                <span className={style.ProjectInfoFunc}><FormattedMessage id='portThird_func' /></span>
            </div>
            <div className={style.ProjectPic}>
                <div className={style.ProjectPicImg}/>
                <a
                    href="https://monchusay.github.io/Krayt-test-task-completed/"
                    target="_blank"
                    className={style.LinkToProj}
                >
                    <FormattedMessage id='portToSite_button' />
                </a>
            </div>
        </div>
    );
};

export default Project3;