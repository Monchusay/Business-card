import React from "react";
import style from "./Reviews.module.css";
import {FormattedMessage} from "react-intl";
import {FaChevronDown} from "react-icons/fa";

const Reviews = () => {
  return (
    <div className={style.Reviews}>
      <div className={style.ReviewsBox}>
        <div className={style.Review}>
            <div className={style.PicAndName}>
                <div className={style.DimaPic}/>
                <div className={style.NameBox}>
                    <span className={style.Name}>
                        <FormattedMessage id="reviews_DimaName" />
                    </span>
                    <span className={style.About}>
                        <FormattedMessage id="reviews_DimaAbout" />
                    </span>
                </div>
            </div>
            <div className={style.Content}>

            </div>
        </div>
        <div className={style.Review}>
            <div className={style.PicAndName}>
                <div className={style.PolyaPic}/>
                <div className={style.NameBox}>
                    <span className={style.Name}>
                        <FormattedMessage id="reviews_PolyaName" />
                    </span>
                    <span className={style.About}>
                        <FormattedMessage id="reviews_PolyaAbout" />
                    </span>
                </div>
            </div>
            <div className={style.Content}>

            </div>
        </div>
      </div>
        <FaChevronDown className={style.Icon} />
    </div>
  );
};

export default Reviews;
