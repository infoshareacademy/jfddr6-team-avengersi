import React from "react";
import SlideOne from "./Sliders/SildeOne";
import SlideTwo from "./Sliders/SildeTwo";

function SliderContent({ activeIndex, sliderImage }) {
  return (
    <section>
      {sliderImage.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <SlideOne />
          <SlideTwo />
        </div>
      ))}
    </section>
  );
}

export default SliderContent;
