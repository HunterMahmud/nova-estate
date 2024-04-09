import { useLoaderData } from "react-router-dom";
import EstateSection from "../components/EstateSection";

const EstatePage = () => {
  const homes = useLoaderData();
  console.log(homes);
  return (
    <div>
      
      <h1 className="text-xl md:text-3xl lg:text-5xl font-bold font-poppins text-center my-14  text-gray-100">
        Featured Properties
      </h1>
      <EstateSection homes={homes}></EstateSection>
    </div>
  );
};

export default EstatePage;
