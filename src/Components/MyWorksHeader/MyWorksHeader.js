import React from 'react';
import style from "./MyWorksHeader.module.css"
import {FormattedMessage} from "react-intl";

const MyWorksHeader = () => {
    return (
        <div name="works_header" className={style.MyWorksHeader}>
            <div className={style.MyWorksHeaderImg}>
                <FormattedMessage id="myWorks_header" />
            </div>
        </div>
    );
};

export default MyWorksHeader;