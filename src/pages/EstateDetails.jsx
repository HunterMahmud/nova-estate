import React from "react";
import { useParams, useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FaLocationDot } from "react-icons/fa6";
import { ScrollRestoration } from "react-router-dom";

const EstateDetails = () => {
  const { id: pId } = useParams();
  const homes = useLoaderData();

  const home = homes.find((h) => h.id == pId);
  console.log(home);
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

  return (
    <div className="max-w-7xl mx-auto">
      <Helmet>
        <title>{estate_title} | Nova Estate</title>
      </Helmet>
      <ScrollRestoration/>
      <div className="">
        <div>
          <div className="flex flex-col lg:flex-row justify-between gap-5 mt-10 ">
            <div className="lg:w-1/2">
              <div className="title-and-text">
                <h1 className="text-3xl ">{estate_title}</h1>

                <p className="flex items-center gap-2 my-2">
                  <span>
                    {" "}
                    <FaLocationDot />{" "}
                  </span>
                  <span>
                    {location} | {segment_name}
                  </span>
                </p>
              </div>
              <img className="w-full " src={image} alt={estate_title} />
            </div>

            <div className="details-container mt-6 w-full lg:w-1/2">
              <h3 className="text-2xl uppercase font-poppins">
                Property Details
              </h3>
              {/* table */}
              <div className="bg-gray-600 rounded-md mt-5 w-full font-bold font-poppins">
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
            {details_paras.map((para, i) => (
              <p className="py-2 font-poppins text-gray-300" key={i}>
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstateDetails;
