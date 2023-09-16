import React from "react";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const Slider = () => {
  return (
    <div
      className="parentDiv h-[540px] bg-white flex 
    items-center justify-between"
    >
      {/* left arrow */}
      <div className="leftArrow">
        <KeyboardDoubleArrowLeftIcon style={{ fontSize: "50px" }} />
      </div>
      {/* slide */}
      <div className="slide"></div>
      {/* right arrow */}
      <div className="rightArrow">
        <KeyboardDoubleArrowRightIcon style={{ fontSize: "50px" }} />
      </div>
    </div>
  );
};

export default Slider;
