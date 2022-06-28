import React from "react";
import { Splide, SplideSlide } from "splide-nextjs/react-splide";
import "splide-nextjs/splide/dist/css/themes/splide-default.min.css";
function HomeScreen() {
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
        <SplideSlide>
          <img height="200px" src="/images/test.jpg" alt="Image 1" />
        </SplideSlide>
        <SplideSlide>
          <img
            height="200px"
            src="/images/webdesifn_basics.png"
            alt="Image 2"
          />
        </SplideSlide>
        <SplideSlide>
          <img height="200px" src="/images/test.jpg" alt="Image 1" />
        </SplideSlide>
        <SplideSlide>
          <img
            height="200px"
            src="/images/webdesifn_basics.png"
            alt="Image 2"
          />
        </SplideSlide>
      </Splide>
    </div>
  );
}

export default HomeScreen;
