import React from "react";
import { useParams, useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FaLocationDot } from "react-icons/fa6";

const EstateDetails = () => {
  const { id } = useParams();
  const homes = useLoaderData();

  const home = homes.find((h) => h.id == id);
  console.log(home);
  const {
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
    image,
  } = home;
  return (
    <div className="max-w-7xl mx-auto">
      <Helmet>
        <title>{estate_title} | Nova Estate</title>
      </Helmet>
      <div>
        <div>
          <h1 className="text-3xl mt-10 ">
            {estate_title} | {segment_name}
          </h1>

          <p className="flex items-center gap-2">
            <span>
              {" "}
              <FaLocationDot />{" "}
            </span>
            <span>{location}</span>
          </p>
        </div>
        <div>
          <div>
            <figure>
              <img src={image} alt={estate_title} />
            </figure>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstateDetails;
