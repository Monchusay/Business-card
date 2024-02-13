import React from "react";
import Slider from "./Slider/Slider";
import Project1 from "./Projects/Project1/Project1";
import Project2 from "./Projects/Project2/Project2";
import Project3 from "./Projects/Project3/Project3";

const MyWorksSlider = () => {
  return (
      <Slider>
          <div><Project1/></div>
          <div><Project2/></div>
          <div><Project3/></div>
      </Slider>
  );
};

export default MyWorksSlider;
