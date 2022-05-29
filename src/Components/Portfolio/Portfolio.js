import React from "react";
import style from "./Portfolio.module.css";
import {FormattedMessage} from "react-intl";

const Portfolio = () => {
  return (
    <div name="Portfolio" className={style.Portfolio}>
      <div className={style.PortfolioHeader}>
        <FormattedMessage id='port_header' />
      </div>
      <div className={style.PortfolioBoxes}>
        <div className={style.PortfolioWork}>
          <div className={style.PortfolioWorkContent}>
            <span className={style.Description}>
              <FormattedMessage id='portFirst_usages' />
            </span>
            <span className={style.Functions}>
              <FormattedMessage id='portFirst_func' />
            </span>
          </div>
          <div className={style.PortfolioWorkPic1}>
            <a
              href="https://monchusay.github.io/ds-test-task-complited/"
              target="_blank"
              className={style.PortfolioWorkButton}
            >
              <FormattedMessage id='portToSite_button' />
            </a>
          </div>
        </div>
        <div className={style.PortfolioWork}>
          <div className={style.PortfolioWorkContent}>
            <span className={style.Description}>
              <FormattedMessage id='portSecond_usages' />
            </span>
            <span className={style.Functions}>
              <FormattedMessage id='portSecond_func' />
            </span>
          </div>
          <div className={style.PortfolioWorkPic2}>
            <a
              href="https://monchusay.github.io/RooX-test-task-completed/"
              target="_blank"
              className={style.PortfolioWorkButton}
            >
              <FormattedMessage id='portToSite_button' />
            </a>
          </div>
        </div>
        <div className={style.PortfolioWork}>
          <div className={style.PortfolioWorkContent}>
            <span className={style.Description}>
              <FormattedMessage id='portThird_usages' />
            </span>
            <span className={style.Functions}>
              <FormattedMessage id='portThird_func' />
            </span>
          </div>
          <div className={style.PortfolioWorkPic3}>
            <a
              href="https://monchusay.github.io/Krayt-test-task-completed/"
              target="_blank"
              className={style.PortfolioWorkButton}
            >
              <FormattedMessage id='portToSite_button' />
            </a>
          </div>
        </div>
        <div className={style.PortfolioWork}>
          <div className={style.PortfolioWorkContent}>
            <span className={style.Description}>
              <FormattedMessage id='portFourth_usages' />
            </span>
            <span className={style.Functions}>
              <FormattedMessage id='portFourth_func' />
            </span>
          </div>
          <div className={style.PortfolioWorkPic4}>
            <a
              href="https://monchusay.github.io/Online-Store/"
              target="_blank"
              className={style.PortfolioWorkButton}
            >
              <FormattedMessage id='portToSite_button' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
