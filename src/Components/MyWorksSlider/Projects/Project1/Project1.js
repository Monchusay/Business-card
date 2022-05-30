import React from 'react';
import style from "./Project1.module.css"
import {FormattedMessage} from "react-intl";

const Project1 = () => {
    return (
        <div className={style.Project1}>
            <div className={style.ProjectInfo}>
                <span className={style.ProjectInfoHeader}><FormattedMessage id='portFirst_header' /></span>
                <span className={style.ProjectInfoTech}><FormattedMessage id='portFirst_usages' /></span>
                <span className={style.ProjectInfoFunc}><FormattedMessage id='portFirst_func' /></span>
            </div>
            <div className={style.ProjectPic}>
                <div className={style.ProjectPicImg}/>
                <a
                    href="https://monchusay.github.io/RooX-test-task-completed/"
                    target="_blank"
                    className={style.LinkToProj}
                >
                    <FormattedMessage id='portToSite_button' />
                </a>
            </div>
        </div>
    );
};

export default Project1;