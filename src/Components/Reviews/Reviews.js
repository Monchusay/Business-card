import React from "react";
import style from "./Reviews.module.css";
import { FormattedMessage } from "react-intl";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-scroll";

const Reviews = () => {
  return (
    <div className={style.Reviews}>
      <div className={style.ReviewsBox}>
        <div className={style.DReview}>
          <div className={style.PicAndName}>
            <a href="https://vk.com/dman25" target="_blank">
              <div className={style.DimaPic} />
            </a>
            <div className={style.NameBox}>
              <span className={style.Name}>
                <FormattedMessage id="reviews_DimaName" />
              </span>
              <span className={style.About}>
                <FormattedMessage id="reviews_DimaAbout" />
              </span>
            </div>
          </div>
          <div className={style.Content}><FormattedMessage id="reviews_DimaText"/></div>
        </div>
        <div className={style.PReview}>
          <div className={style.PicAndName}>
            <a href="https://vk.com/frolova_poli" target="_blank">
              <div className={style.PolyaPic} />
            </a>
            <div className={style.NameBox}>
              <span className={style.Name}>
                <FormattedMessage id="reviews_PolyaName" />
              </span>
              <span className={style.About}>
                <FormattedMessage id="reviews_PolyaAbout" />
              </span>
            </div>
          </div>
          <div className={style.Content}><FormattedMessage id="reviews_PolyaText"/></div>
        </div>
      </div>
      <Link
          to="contacts"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
      >
      <FaChevronDown className={style.Icon} />
      </Link>
    </div>
  );
};

export default Reviews;
