import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { Link } from 'react-router-dom';


const Slider = () => {
  return (
    <div className="relative">
      <div className="absolute top-1/3 left-12 md:left-20 w-[70%]  z-10">
        <div className=" h-[40%] max-w-[900px] text-white p-5">
          <h1 className="text-2xl md:text-5xl uppercase font-poppins ">
            Real Estate Residential services {'&'} promotions{" "}
          </h1>
          <div className="flex items-center gap-3">
            <span className="text-[50px] ">&rarr;</span>
            <Link to='/estates' className="uppercase mt-2 p-2 border border-blue-500 rounded-md">explore more</Link>
          </div>
        </div>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div
            className={`relative flex items-center justify-left h-[80vh] object-cover bg-cover bg-[linear-gradient(45deg,rgba(3,7,18,0.5),rgba(3,7,18,0)),url("https://source.unsplash.com/living-room-interior-6japTIjUQoI")] bg-center bg-no-repeat`}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`relative flex items-center justify-left h-[80vh] object-cover bg-cover bg-[linear-gradient(45deg,rgba(3,7,18,0.5),rgba(3,7,18,0)),url("https://source.unsplash.com/white-and-brown-quatrefoil-bedspread-set-on-bed-near-window-8xAn1QJU7gk")] bg-center bg-no-repeat`}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`relative flex items-center justify-left h-[80vh] object-cover bg-cover bg-[linear-gradient(45deg,rgba(3,7,18,0.5),rgba(3,7,18,0)),url("https://source.unsplash.com/a-porch-with-two-chairs-and-a-table-on-it-XcVm8mn7NUM")] bg-center bg-no-repeat`}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`relative flex items-center justify-left h-[80vh] object-cover bg-cover bg-[linear-gradient(45deg,rgba(3,7,18,0.5),rgba(3,7,18,0)),url("https://source.unsplash.com/round-clear-glass-top-table-and-five-gray-chairs-dining-se-9rYfG8sWRVo")] bg-center bg-no-repeat`}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`relative flex items-center justify-left h-[80vh] object-cover bg-cover bg-[linear-gradient(45deg,rgba(3,7,18,0.5),rgba(3,7,18,0)),url("https://source.unsplash.com/white-and-brown-concrete-building-b_79nOqf95I")] bg-center bg-no-repeat`}
          ></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;

/**
 * 
 * 

https://source.unsplash.com/white-and-brown-quatrefoil-bedspread-set-on-bed-near-window-8xAn1QJU7gk
https://source.unsplash.com/a-porch-with-two-chairs-and-a-table-on-it-XcVm8mn7NUM
https://source.unsplash.com/round-clear-glass-top-table-and-five-gray-chairs-dining-se-9rYfG8sWRVo
https://source.unsplash.com/living-room-interior-6japTIjUQoI
https://source.unsplash.com/white-and-brown-concrete-building-b_79nOqf95I
https://source.unsplash.com/a-white-house-sitting-in-the-middle-of-a-forest-5uiqnRQjEVo
https://source.unsplash.com/low-angle-view-of-building-wR11KBaB86U
https://source.unsplash.com/white-and-brown-concrete-building-under-blue-sky-during-daytime-_TPTXZd9mOo


 */
