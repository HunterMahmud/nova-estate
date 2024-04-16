import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import { Link } from "react-router-dom";

const SmartHourseGallery = () => {
  return (
    <div className="mx-2">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row text-center lg:text-left">
        <div className="p-3">
          <h2 className="text-4xl">Introducing a New Smart House</h2>
          <p className="text-lg mt-8">
            You are welcome to check out our house gallery to make sure that all
            apartments are in prime condition which makes them a perfect living
            space.
          </p>
          <Link to='/properties' className="btn btn-primary bg-violet-500 mt-5">Learn More</Link>
        </div>
        <div className="lg:mx-3">
          <Swiper
            slidesPerView={"auto"}
            centeredSlides={true}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
            autoplay={true}
          >
            <SwiperSlide>
             <img className="w-full h-[300px] sm:h-[400px]" src="https://source.unsplash.com/white-kitchen-room-set-G7sE2S4Lab4" alt="" />
             
            </SwiperSlide>
            <SwiperSlide >
             <img className="w-full h-[300px] sm:h-[400px]" src="https://source.unsplash.com/white-kitchen-room-set-G7sE2S4Lab4" alt="" />
             
            </SwiperSlide>
            <SwiperSlide className="">
             <img className="w-full h-[300px] sm:h-[400px]" src="https://source.unsplash.com/white-kitchen-room-set-G7sE2S4Lab4" alt="" />
             
            </SwiperSlide>
            <SwiperSlide className="">
             <img className="w-full h-[300px] sm:h-[400px]" src="https://source.unsplash.com/white-kitchen-room-set-G7sE2S4Lab4" alt="" />
             
            </SwiperSlide>

            <SwiperSlide>
              {" "}
              <div className="w-full h-[300px] sm:h-[400px] object-cover bg-cover bg-[url('https://source.unsplash.com/round-brown-wooden-table-with-six-white-leather-padded-chairs-Mx_W2atEaDo')] bg-center bg-no-repeat"></div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="w-full h-[300px] sm:h-[400px] object-cover bg-cover bg-[url('https://source.unsplash.com/a-living-room-with-a-large-window-fobX0HI9vVo')] bg-center bg-no-repeat"></div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="w-full h-[300px] sm:h-[400px] object-cover bg-cover bg-[url('https://source.unsplash.com/two-green-and-white-pillows-on-empty-bed-w1RE0lBbREo')] bg-center bg-no-repeat"></div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="w-full h-[300px] sm:h-[400px] object-cover bg-cover bg-[url('https://source.unsplash.com/brown-and-grey-room-interior-LL9V0iMpStM')] bg-center bg-no-repeat"></div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SmartHourseGallery;


/*
brown-and-grey-room-interior-LL9V0iMpStM
a-living-room-filled-with-furniture-and-a-large-window-TBJrxAvVx_M
living-room-L7EwHkq1B2s
photo-of-flat-screen-television-4HG3Ca3EzWw
black-and-white-wooden-table-and-chairs-wRzBarqn3hs

*/