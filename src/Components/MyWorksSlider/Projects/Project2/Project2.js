import React from 'react';
import style from "./Project2.module.css"
import {FormattedMessage} from "react-intl";

const Project2 = () => {
    return (
        <div className={style.Project2}>
            <div className={style.ProjectInfo}>
                <span className={style.ProjectInfoHeader}><FormattedMessage id='portSecond_header' /></span>
                <span className={style.ProjectInfoTech}><FormattedMessage id='portSecond_usages' /></span>
                <span className={style.ProjectInfoFunc}><FormattedMessage id='portSecond_func' /></span>
            </div>
            <div className={style.ProjectPic}>
                <div className={style.ProjectPicImg}/>
                <a
                    href="https://monchusay.github.io/RooX-test-task-complited/"
                    target="_blank"
                    className={style.LinkToProj}
                >
                    <FormattedMessage id='portToSite_button' />
                </a>
            </div>
        </div>
    );
};

export default Project2;