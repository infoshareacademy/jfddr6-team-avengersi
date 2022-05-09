import React from "react";
import HomePage from "../../routes/HomePage";

function SliderContent({ activeIndex, sliderImage }) {
  return (
    <section>
      {sliderImage.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <HomePage />
          <HomePage />
        </div>
      ))}
    </section>
  );
}

export default SliderContent;
