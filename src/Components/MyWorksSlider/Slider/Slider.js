import React, { Children, cloneElement, useEffect, useState } from "react";
import style from "./Slider.module.css";
import { FaChevronDown, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const PAGE_WIDTH = 1700;

const Slider = ({ children }) => {
  const [pages, setPages] = useState([]);

  const [offset, setOffset] = useState(0);

  const handleLeftArrowClick = () => {
    setOffset((offset) => {
      let newOffset = offset + PAGE_WIDTH;
      if (newOffset > 0) newOffset = -5100;
      return newOffset;
    });
  };

  const handleRightArrowClick = () => {
    setOffset((offset) => {
      let newOffset = offset - PAGE_WIDTH;
      if (newOffset < -5100) newOffset = 0;
      return newOffset;
    });
  };

  useEffect(() => {
    setPages(
      Children.map(children, (child) => {
        return cloneElement(child, {
          style: {
            height: "100%",
            minWidth: `${PAGE_WIDTH}px`,
            maxWidth: `${PAGE_WIDTH}px`,
          },
        });
      })
    );
  }, []);

  return (
    <div className={style.Car}>
      <div className={style.Carousel}>
        <FaChevronLeft className={style.Arrow} onClick={handleLeftArrowClick} />
        <div className={style.MyWorksSlider}>
          <div
            className={style.List}
            style={{
              transform: `translateX(${offset}px)`,
            }}
          >
            {pages}
          </div>
        </div>
        <FaChevronRight
          className={style.Arrow}
          onClick={handleRightArrowClick}
        />
      </div>
      <FaChevronDown className={style.Icon} />
    </div>
  );
};

export default Slider;
