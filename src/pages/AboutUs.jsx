import React from "react";
import { Helmet } from "react-helmet-async";
import { ScrollRestoration } from "react-router-dom";

const AboutUs = () => {
    const handleSubmit = (e)=> {
        e.preventDefault();
        console.log('hello');
    }
  return (
    <div>
      <Helmet>
        <title>About Us | Nova Estate</title>
      </Helmet>

      <ScrollRestoration />
      <div className=" flex flex-col items-center justify-center h-[300px]  object-cover bg-cover bg-[linear-gradient(45deg,rgba(0,0,0,0.5),rgba(0,0,0,0)),url('https://source.unsplash.com/a-living-room-filled-with-furniture-and-a-large-window-TBJrxAvVx_M')] bg-center bg-no-repeat">
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-poppins text-white">
          About Us
        </h2>
        <span className="text-sm text-white text-center">Our Mission</span>
      </div>
      <div className="mx-2">
        <div className="max-w-7xl mx-auto">
          <div className="my-10">
            <h2 className="text-2xl mb-3 sm:text-3xl font-poppins text-black font-semibold text-center">
              About Our Company
            </h2>
            <p className="text-center text-gray-800 text-lg">
              Each apartments has been individually designed to maximise space
              and light. Smart Home Technology installed as standard in each
              apartment putting you in total control of your home at the touch
              of a button from wherever you might be.
            </p>
          </div>
          <div className="stats rounded-lg bg-card text-black shadow w-full">
            <div className="stat text-center">
              <div className="stat-title text-gray-700">Apartment Houses</div>
              <div className="stat-value">35</div>
            </div>

            <div className="stat text-center">
              <div className="stat-title text-gray-700">Total Houses</div>
              <div className="stat-value">2.3k</div>
            </div>

            <div className="stat text-center">
              <div className="stat-title text-gray-700">Happry Customers</div>
              <div className="stat-value">1.3k</div>
            </div>
          </div>
          <div className="my-10">
            <h2 className="text-2xl mb-7 sm:text-3xl  font-poppins text-black font-semibold text-center">
              What People Say
            </h2>
            <div className="flex flex-col md:flex-row mx-auto gap-3">
              <div className="max-w-md mx-auto p-6 overflow-hidden rounded-lg shadow bg-card text-black">
                <article>
                  <h2 className="text-center text-5xl">"</h2>
                  <p className=" text-xl text-black">
                    "City living at its best! Stylish interiors and vibrant
                    location create a perfect urban retreat."
                  </p>
                  <div className="flex items-center mt-8 space-x-4">
                    <img
                      src="https://source.unsplash.com/man-wearing-green-polo-shirt-6anudmpILw4"
                      alt=""
                      className="w-10 h-10 rounded-full bg-card"
                    />
                    <div>
                      <h3 className="text-sm font-medium">Mark Stivens</h3>
                      <p className="text-sm text-black">NYC</p>
                    </div>
                  </div>
                </article>
              </div>
              <div className="max-w-md mx-auto p-6 overflow-hidden rounded-lg shadow bg-card text-black">
                <article>
                  <h2 className="text-center text-5xl">"</h2>
                  <p className=" text-xl text-black">
                    "Sleek design, prime location, and upscale features make
                    city living a luxury experience."
                  </p>
                  <div className="flex items-center mt-8 space-x-4">
                    <img
                      src="https://source.unsplash.com/man-wearing-black-and-white-top-7omHUGhhmZ0"
                      alt=""
                      className="w-10 h-10 rounded-full bg-card"
                    />
                    <div>
                      <h3 className="text-sm font-medium">Michael Green</h3>
                      <p className="text-sm text-black">Los Angeles</p>
                    </div>
                  </div>
                </article>
              </div>
              <div className="max-w-md mx-auto p-6 overflow-hidden rounded-lg shadow bg-card text-black">
                <article>
                  <h2 className="text-center text-5xl">"</h2>
                  <p className=" text-xl text-black">
                    "Perfect suburban retreat, spacious layout and nearby
                    amenities make family life a joy."
                  </p>
                  <div className="flex items-center mt-8 space-x-4">
                    <img
                      src="https://source.unsplash.com/a-man-in-a-yellow-shirt-smiling-at-the-camera-ZjDbRtR_BcE"
                      alt=""
                      className="w-10 h-10 rounded-full bg-card"
                    />
                    <div>
                      <h3 className="text-sm font-medium">Wendy Moore</h3>
                      <p className="text-sm text-black">Washington</p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
          <section className="py-6 rounded-lg bg-card my-10 text-black">
            <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
              <div className="py-6 md:py-0 md:px-6">
                <h1 className="text-4xl font-bold">Get in touch</h1>
                <p className="pt-2 pb-4">
                  Fill in the form to start a conversation
                </p>
                <div className="space-y-4">
                  <p className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 mr-2 sm:mr-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>6000, Rajshahi, BD</span>
                  </p>
                  <p className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 mr-2 sm:mr-6"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                    </svg>
                    <span>+8801798120845</span>
                  </p>
                  <p className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 mr-2 sm:mr-6"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                    <span>info@novaestate.com</span>
                  </p>
                </div>
              </div>
              <form
                noValidate=""
                className="flex flex-col py-6 space-y-6 md:py-0 md:px-6"
              >
                <label className="block">
                  <span className="mb-1">Name</span>
                  <input
                    type="text"
                    required={true}
                    placeholder="Bill Gates"
                    
                    className="block w-full p-2 placeholder:text-gray-600 rounded-md shadow-sm  bg-gray-100 border border-gray-600 "
                  />
                </label>
                <label className="block">
                  <span className="mb-1">Email</span>
                  <input
                    type="email"
                    required={true}
                    placeholder="bill@gates.com"
                    className="block w-full p-2 placeholder:text-gray-600 rounded-md shadow-sm  bg-gray-100 border border-gray-600 "
                  />
                </label>
                <label className="block">
                  <span className="mb-1">Message</span>
                  <textarea
                  required={true}
                    rows="3"
                    placeholder="Your message"
                    className="block w-full p-2 placeholder:text-gray-600 rounded-md shadow-sm  bg-gray-100 border border-gray-600 "
                  ></textarea>
                </label>
                <input
                  type="submit"
                  value={'Submit'}
                  onClick={handleSubmit}
                  className="self-center px-8 py-3 text-lg rounded font-poppins font-bold text-white hover:cursor-pointer  bg-violet-500"
                />
                 
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
