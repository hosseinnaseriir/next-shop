import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "splide-nextjs/react-splide";
import "splide-nextjs/splide/dist/css/themes/splide-default.min.css";
function Slider({homeData}) {

  return (
    <div>
      <Splide
        options={
          {
            //   perPage: 2,
          }
        }
        aria-label="My Favorite Images"
      >
        {homeData?.sliderItems?.map((slider) => (
          <SplideSlide key={slider.id}>
            <img src={slider.img} alt="Image 1" />
          </SplideSlide>
        ))}
      </Splide>

      <style jsx>
        {`
          img {
            object-fit: cover;
            width: 100%;
            height: 60vh;
          }
        `}
      </style>
    </div>
  );
}

export default Slider;
