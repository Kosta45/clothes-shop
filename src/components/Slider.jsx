import React, { useState } from "react";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import Button from "../elements/Button";
import { ApiSlides } from "../api/SliderApi";
import "./Slider.css";

const Slider = () => {
  // styles for arrow
  const arrowStyle =
    "rounded-full bg-grey flex justify-center items-center shadow-sm hover:cursor-pointer";

  // useState hooks for slider
  const [slides] = useState(ApiSlides);
  const [activeSlide, setActiveSlide] = useState(0);

  // slider function
  const nextSlide = () => {
    if (activeSlide === 0) {
      setActiveSlide(activeSlide + 1);
    } else {
      setActiveSlide(activeSlide - 1);
    }
  };

  const prevSlide = () => {
    if (activeSlide === 0) {
      setActiveSlide(activeSlide + 1);
    } else {
      setActiveSlide(activeSlide - 1);
    }
  };

  return (
    <div
      className="parentDiv h-[540px] bg-white flex 
    items-center justify-between"
    >
      {/* left arrow */}
      <div className={arrowStyle}>
        <KeyboardDoubleArrowLeftIcon
          style={{ fontSize: "50px" }}
          onClick={prevSlide}
        />
      </div>
      {/* slide */}
      {slides.map((slide, index) => {
        if (index === activeSlide) {
          return (
            <div
              key={index}
              className={
                `wrapperSlider flex w-[100%] h-[500px] 
      justify-center items-center shadow-2xl rounded-lg 
      border-[#c0c0c0] border-10px overflow-hidden relative` + slide.background
              }
            >
              <div className="slide flex items-center justify-center h-[100%]">
                <div className="forImage flex flex-1 justify-center items-center h-[100%]">
                  <img
                    key={index}
                    src={slide.src}
                    alt="slide_image"
                    className="h-[100%] object-cover"
                  />
                </div>
                <div className="description flex flex-col flex-1 place-items-start justify-center ml-11">
                  <h2 className="text-[55px]">{slide.content.h2}</h2>
                  <p className="text-[30px]">{slide.content.p}</p>
                  <Button />
                </div>
              </div>
            </div>
          );
        }
      })}

      {/* right arrow */}
      <div className={arrowStyle}>
        <KeyboardDoubleArrowRightIcon
          style={{ fontSize: "50px" }}
          onClick={nextSlide}
        />
      </div>
    </div>
  );
};

export default Slider;
