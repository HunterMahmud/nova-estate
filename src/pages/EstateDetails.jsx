import React from "react";
import { useParams, useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FaLocationDot } from "react-icons/fa6";

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
      <div className="">
        <div className="title-and-text">
          <h1 className="text-3xl mt-10 ">{estate_title}</h1>

          <p className="flex items-center gap-2">
            <span>
              {" "}
              <FaLocationDot />{" "}
            </span>
            <span>
              {location} | {segment_name}
            </span>
          </p>
        </div>
        <div>
          <div>
            <figure className="w-[640px] h-[427px]">
              <img className="" src={image} alt={estate_title} />
            </figure>
            <div className="details-container">
              <h3 className="text-2xl uppercase font-poppins">Details</h3>
              {/* table */}
              <div className="flex justify-between font-bold font-poppins">
                <div className="overflow-x-auto w-1/2">
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>ID:</td>

                        <td>{id}</td>
                      </tr>
                      <tr>
                        <td>Number of Rooms:</td>
                        <td>
                          {parseInt(facilities[0].split(" ")[0]) +
                            parseInt(facilities[1].split(" ")[0])}
                        </td>
                      </tr>
                      <tr>
                        <td>Number of Bedrooms:</td>
                        <td>{facilities[0].split(" ")[0]}</td>
                      </tr>
                      <tr>
                        <td>Number of Bathrooms:</td>
                        <td>{facilities[1].split(" ")[0]}</td>
                      </tr>
                      <tr>
                        <td>Parking Facilities:</td>
                        <td>{parking_facilities}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="overflow-x-auto w-1/2">
                  <table className="table">
                    <tbody>
                      {facilities.slice(2).map((facility, i) => (
                        
                          <tr  key={i}>
                            <td className="capitalize">
                              {facility}:
                            </td>

                            <td>Yes</td>
                          </tr>
                     
                      ))}

                      <tr>
                        <td>abc</td>
                        <td>bdc</td>
                      </tr>
                    </tbody>
                  </table>
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
    </div>
  );
};

export default EstateDetails;
