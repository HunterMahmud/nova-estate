import { IoLocation } from "react-icons/io5";
import { Link } from "react-router-dom";
import {
  FaVectorSquare,
  FaBed,
  FaCircleDollarToSlot,
  FaBath,
} from "react-icons/fa6";
const SingleState = ({ home }) => {
  // console.log(home);
  const {
    id,
    image,
    estate_title,
    short_desc,
    location,
    area,
    price,
    facilities,
    status,
  } = home;
  return (
    <div className="mx-2">
      <div className="flex flex-col max-w-sm mx-auto space-y-6 overflow-hidden rounded-md border border-gray-100/25 hover:shadow-[20px,20px,20px,5px,rgba(255,255,255,0.01)] shadow-xl bg-main text-gray-100">
        <div>
          <img
            src={image}
            alt={estate_title}
            className="object-cover w-full h-60 bg-gray-500"
          />
          <div className="flex flex-col p-4">
            <div className="flex justify-between text-sm mb-3 gap-2 items-center flex-wrap">
              <div className="flex gap-2 items-center">
                <IoLocation />
                <p>{location}</p>
              </div>
              <div>
                <p className="bg-green-600 text-white px-2 p-1 rounded-md font-bold uppercase font-poppins">
                  {status}
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <h2 className="mb-1 text-xl font-semibold">
                {estate_title}
              </h2>
              <p className="text-sm text-gray-400">{short_desc}</p>
            </div>
            <div className="flex flex-wrap justify-between mt-5">
              <div className="flex flex-col gap-3">
                <div className="flex items-center space-x-3">
                  <FaVectorSquare />
                  <span>{area}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaCircleDollarToSlot />
                  <span>{price}</span>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center space-x-3">
                  <FaBed />
                  <span>{facilities[0]}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaBath />
                  <span>{facilities[1]}</span>
                </div>
              </div>
            </div>
            <div className="mt-3 w-full">
              <Link
                to={`/estates/${id}`}
                className="btn w-full btn-primary bg-violet-500"
              >
                See Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleState;
