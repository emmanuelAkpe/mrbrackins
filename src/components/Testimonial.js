import React from "react";
import { testData } from "./TesData";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Testimonial = () => {
  return (
    <div className="mt-12 h-screen flex items-center justify-center flex-col rounded-2xl">
      <div className="mx-auto  lg:max-w-xl sm:text-center">
        <p className="text-2xl md:text-3xl lg:text-4xl  tracking-tight font-bold">
          What others have <span className="text-dzoma-yellow">gained</span>
        </p>
      </div>
      <p className="text-base text-center text-gray-700 md:text-lg md:w-1/3 mb-3">
        This is just a fraction of the lives we have imparted
      </p>

      <Swiper
        className="mx-auto w-2/3 h-1/2 "
        modules={[Navigation, Pagination, A11y, Autoplay]}
        style={{
          "--swiper-navigation-color": "#ec7505",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={40}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        loop={true}
      >
        {testData.map((testimonial) => {
          return (
            <SwiperSlide className="bg-tutor-testimonial text-center p-8 rounded-2xl select-none flex items-center justify-center flex-col">
              <div className="border-4 border-dzoma-yellow rounded-full overflow-hidden w-32 aspect-auto mx-auto">
                <img
                  src={testimonial.avatar}
                  alt="avatar"
                  width={100}
                  height={100}
                  className=" object-contain rounded-full w-32 h-32"
                />
              </div>
              <div className=" testimonial__cont rounded-lg md:w-2/3 p-2 h-11/12 w-11/12 mt-1">
                <h5 className="font-semibold">{testimonial.name}</h5>
                <small className=" h-1/3 text-gray-600  font-semibold w-full text-left">
                  {testimonial.review}
                </small>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
