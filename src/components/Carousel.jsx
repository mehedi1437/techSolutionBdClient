// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import carouselImg1 from "../assets/images/carousel.png"; // Adjust the path if needed

const Carousel = () => {
  return (
    <div>
      <Swiper className="mySwiper">
        {/* Slide 1 with */}
        <SwiperSlide>
          <div className="relative w-full h-[650px]">
            {/* Background image */}
            <img
              src={carouselImg1}
              alt="Carousel"
              className="w-full h-full object-cover"
            />
            {/* paragraph and button section */}
            <div className="absolute top-0 left-0 w-full h-full flex flex-col gap-16 items-center justify-center text-white text-4xl md:text-6xl font-bold px-4 text-center bg-black/30">
              <p>
                Creative & Innovative <br /> Digital Solution
              </p>

              <div className="flex gap-6">
                <a
                  href=""
                  className="p-4 bg-[#00A3F7] rounded text-xl font-normal"
                >
                  Free Quote
                </a>
                <a
                  href=""
                  className="p-4 border border-white rounded text-xl font-normal"
                >
                  Free Quote
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[650px] flex items-center justify-center bg-gray-300 text-4xl font-bold">
            Slide 2
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[650px] flex items-center justify-center bg-gray-300 text-4xl font-bold">
            Slide 3
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
