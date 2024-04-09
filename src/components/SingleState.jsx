import { IoLocation } from "react-icons/io5";
import {
  FaVectorSquare ,
  FaBed,
  FaCircleDollarToSlot,
  FaBath,
} from "react-icons/fa6";
const SingleState = ({ data }) => {
  console.log(data);
  const { image, estate_title, short_desc, location,area,price,facilities,status } = data;
  return (
    <div className="mx-2">
      <div className="flex flex-col max-w-sm mx-auto space-y-6 overflow-hidden shadow-md hover:shadow-xl bg-gray-900 text-gray-100">
      <div>
        <img
          src={image}
          alt={estate_title}
          className="object-cover w-full h-60 bg-gray-500"
        />
        <div className="p-4">
          <div className="flex text-sm mb-3 gap-2 items-center">
            <IoLocation />
            <p>{location}</p>
          </div>
         <div className="flex flex-col flex-grow">
         <h2 className="mb-1 text-xl font-semibold">{estate_title}</h2>
          <p className="text-sm text-gray-400">{short_desc}</p>
         </div>
          <div className="flex flex-wrap justify-between mt-5">
            <div className="flex flex-col gap-3">
              <div
                className="flex items-center space-x-3"
              >
                <FaVectorSquare/>
                <span>{area}</span>
              </div>
              <div
                className="flex items-center space-x-3"
              >
                 <FaCircleDollarToSlot  />
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
        </div>
      </div>
    </div>
    </div>
  );
};

export default SingleState;
