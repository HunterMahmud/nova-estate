import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

const SmartHourseGallery = () => {
  return (
    <div data-aos="fade-up" className="mx-2 my-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row text-center lg:text-left text-black ">
        <div className="p-3">
          <h2
            data-aos="fade-down"
            data-aos-delay={100}
            className="text-3xl lg:text-4xl font-semibold"
          >
            Introducing a New Smart House
          </h2>
          <p className="md:text-lg mt-8 text-gray-800">
            You are welcome to check out our house gallery to make sure that all
            apartments are in prime condition which makes them a perfect living
            space.
          </p>
          <Link
            to="/properties"
            className="btn btn-primary bg-violet-500 text-white mt-5"
          >
            Learn More
          </Link>
        </div>
        <div data-aos="fade-up" data-aos-delay={100} className="lg:mx-3">
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
              <img
                className="w-full h-[300px] sm:h-[400px]"
                src="https://i.ibb.co/0qxVkmy/gallery1.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-full h-[300px] sm:h-[400px]"
                src="https://i.ibb.co/j8dDwGp/gallery2.jpg"
                alt=""
              />
            </SwiperSlide>

            <SwiperSlide>
              {" "}
              <div className="w-full h-[300px] sm:h-[400px] object-cover bg-cover bg-[url('https://i.ibb.co/m8H3hTH/gallery3.jpg')] bg-center bg-no-repeat"></div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="w-full h-[300px] sm:h-[400px] object-cover bg-cover bg-[url('https://i.ibb.co/RjKsPzc/gallery4.jpg')] bg-center bg-no-repeat"></div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="w-full h-[300px] sm:h-[400px] object-cover bg-cover bg-[url('https://i.ibb.co/CH2Q1Kk/gallery5.jpg')] bg-center bg-no-repeat"></div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SmartHourseGallery;

/*

a-living-room-filled-with-furniture-and-a-large-window-TBJrxAvVx_M
living-room-L7EwHkq1B2s
photo-of-flat-screen-television-4HG3Ca3EzWw
black-and-white-wooden-table-and-chairs-wRzBarqn3hs

*/
