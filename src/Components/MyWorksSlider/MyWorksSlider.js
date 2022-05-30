import React from "react";
import Slider from "./Slider/Slider";
import Project1 from "./Projects/Project1/Project1";
import Project2 from "./Projects/Project2/Project2";
import Project3 from "./Projects/Project3/Project3";
import Project4 from "./Projects/Project4/Project4";

const MyWorksSlider = () => {
  return (
      <Slider>
          <div><Project1/></div>
          <div><Project2/></div>
          <div><Project3/></div>
          <div><Project4/></div>
      </Slider>
  );
};

export default MyWorksSlider;
