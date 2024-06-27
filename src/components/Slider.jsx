import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Link } from 'react-router-dom';


const Slider = () => {
  return (
    <div className="relative">
      <div data-aos="fade-right" className="absolute top-1/3 left-12 md:left-20 w-[70%]  z-10">
        <div className=" h-[40%] max-w-[900px] text-white p-5">
          <h1 className="text-2xl md:text-5xl uppercase font-poppins ">
            Real Estate Residential services {'&'} promotions{" "}
          </h1>
          <div className="flex items-center gap-3">
            <span className="text-[35px] md:text-[50px] ">&rarr;</span>
            <Link to='/properties' className="uppercase mt-2 p-2 border border-blue-500 rounded-md text-sm lg:text-base">explore more</Link>
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
        modules={[Pagination, Navigation, Autoplay]}
        autoplay={true}
        className="mySwiper"
      >
        <SwiperSlide>
        <div
            className={`relative flex items-center justify-left h-[80vh] object-cover bg-cover bg-[linear-gradient(45deg,rgba(3,7,18,0.5),rgba(3,7,18,0)),url("https://i.ibb.co/QDtnfVN/home1.jpg")] bg-center bg-no-repeat`}
          ></div>
          

        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`relative flex items-center justify-left h-[80vh] object-cover bg-cover bg-[linear-gradient(45deg,rgba(3,7,18,0.5),rgba(3,7,18,0)),url("https://i.ibb.co/JxLL97N/home2.jpg")] bg-center bg-no-repeat`}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`relative flex items-center justify-left h-[80vh] object-cover bg-cover bg-[linear-gradient(45deg,rgba(3,7,18,0.5),rgba(3,7,18,0)),url("https://i.ibb.co/KXvNXbJ/home3.jpg")] bg-center bg-no-repeat`}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`relative flex items-center justify-left h-[80vh] object-cover bg-cover bg-[linear-gradient(45deg,rgba(3,7,18,0.5),rgba(3,7,18,0)),url("https://i.ibb.co/QMYQqfS/home4.jpg")] bg-center bg-no-repeat`}
          ></div>
          
            
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`relative flex items-center justify-left h-[80vh] object-cover bg-cover bg-[linear-gradient(45deg,rgba(3,7,18,0.5),rgba(3,7,18,0)),url("https://i.ibb.co/Bgd69fF/home5.jpg")] bg-center bg-no-repeat`}
          ></div>
        </SwiperSlide>
      </Swiper>



    </div>
  );
};

export default Slider;


