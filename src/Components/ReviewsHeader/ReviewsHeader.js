import React from 'react';
import style from "./ReviewsHeader.module.css"
import {FormattedMessage} from "react-intl";

const ReviewsHeader = () => {
    return (
        <div name="Reviews" className={style.ReviewsHeader}>
            <div className={style.ReviewsHeaderImg}>
                <FormattedMessage id='reviews_Header' />
            </div>
        </div>
    );
};

export default ReviewsHeader;