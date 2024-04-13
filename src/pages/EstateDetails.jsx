import React from "react";
import { useParams, useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FaLocationDot } from "react-icons/fa6";
import { ScrollRestoration } from "react-router-dom";

import { collection, addDoc, getDocs ,doc } from "firebase/firestore";

// import { Marker, Popup } from "leaflet";
import { TileLayer, MapContainer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { db } from './../Firebase/firebase.config';
import { toast } from 'react-toastify';
import contextProvider from './../components/contextProvider';

const EstateDetails = () => {
  const { id: pId } = useParams();
  const homes = useLoaderData();
  const {user} = contextProvider();
  // console.log(user.uid);

  const home = homes.find((h) => h.id == pId);
  // console.log(home);
  const {
    id,
    estate_title,
    location,
    segment_name,
    details_desc,
    price,
    status,
    area,
    area_description,
    gps_location,
    facilities,
    year_of_build,
    parking_facilities,
    image,
  } = home;
  const details_paras = details_desc.split("|");
  const handleAddToWishList = async(data)=>{
  //  console.log({...data});
   try {
      const docRef = await addDoc(collection(db, `favorite-properties-${user.uid}`), {
        ...data
      });
      toast.success("Data Saved to Firebase Database");
    } catch (e) {
      toast.error("Error adding Data");
    }
  }

  return (
    <div className="mx-3 mb-40">
      <Helmet>
        <title>{estate_title} | Nova Estate</title>
      </Helmet>
      <ScrollRestoration />
      <div className="max-w-7xl mx-auto">
        <div>
          <div className="flex flex-col lg:flex-row justify-between gap-5 mt-10 ">
            <div data-aos="fade-right" data-aos-duration="1000" className="lg:w-1/2">
              <div className="title-and-text">
                <h1 className="text-3xl text-gray-200">
                  {estate_title} ( For{" "}
                  <span className="capitalize">{status} )</span>
                </h1>

                <p className="flex items-center text-sm gap-2 my-2">
                  <span>
                    {" "}
                    <FaLocationDot />{" "}
                  </span>
                  <span className="capitalize">
                    {location} | {segment_name}
                  </span>
                </p>
              </div>
              <div className="w-full relative">
                {" "}
                <img className="w-full " src={image} alt={estate_title} />
                <span className="absolute p-3 bottom-0 right-0 text-white font-poppins font-bold tracking-wide bg-gradient-to-r from-purple-500 to-pink-500">
                  Rate: {price}
                </span>
              </div>
            </div>

            <div data-aos="fade-left" data-aos-duration="800" className="details-container mt-5 w-full lg:w-1/2">
              <h3 className="text-2xl text-gray-200 uppercase font-poppins">
                Property Details
              </h3>
              {/* table */}
              <div className="bg-gray-600 text-gray-200 rounded-md mt-5 w-full font-bold font-poppins">
                <div className="overflow-x-auto">
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>Property ID</td>
                        <td>{id}</td>
                      </tr>
                      <tr>
                        <td>Area Type</td>
                        <td>{area_description}</td>
                      </tr>
                      <tr>
                        <td>Year of Build</td>
                        <td>{year_of_build}</td>
                      </tr>
                      <tr>
                        <td>Total Area</td>
                        <td>{area}</td>
                      </tr>
                      <tr>
                        <td>Number of Rooms</td>
                        <td>
                          {parseInt(facilities[0].split(" ")[0]) +
                            parseInt(facilities[1].split(" ")[0])}
                        </td>
                      </tr>
                      <tr>
                        <td>Number of Bedrooms</td>
                        <td>{facilities[0].split(" ")[0]}</td>
                      </tr>
                      <tr>
                        <td>Number of Bathrooms</td>
                        <td>{facilities[1].split(" ")[0]}</td>
                      </tr>
                      <tr>
                        <td>Parking Facilities</td>
                        <td>{parking_facilities}</td>
                      </tr>
                      {facilities.slice(2).map((facility, i) => (
                        <tr key={i}>
                          <td className="capitalize">{facility}</td>
                          <td>Yes</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 data-aos="fade-left" data-aos-duration="500"  className="text-2xl text-gray-200 mt-10 uppercase font-poppins">
              Descriptions
            </h3>
            {details_paras.map((para, i) => (
              <p data-aos="fade-left" data-aos-duration="200"   className="py-2 font-poppins text-gray-300" key={i}>
                {para}
              </p>
            ))}
          </div>
          <div data-aos="fade-left" data-aos-duration="200" >
            <h3 className="text-2xl text-gray-200 mt-10 uppercase font-poppins mb-5">
              Location : <span className="capitalize">{location}</span>
            </h3>

            <div className="w-full max-w-5xl h-[400px] lg:h-[500px] ">
              <MapContainer
                center={gps_location}
                zoom={13}
                scrollWheelZoom={false}
                style={{ height: "100%", width: "100%" }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={gps_location}>
                  <Popup>
                    {location}
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        </div>
        <div className="flex justify-start items-center my-5">
          <button onClick={()=>{handleAddToWishList(home)}} className="btn btn-primary text-white capitalize">add to wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default EstateDetails;
