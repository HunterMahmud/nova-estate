import { ScrollRestoration, useLoaderData } from "react-router-dom";
import EstateSection from "../components/EstateSection";
import { Helmet } from "react-helmet-async";

const EstatePage = () => {
  const homes = useLoaderData();
  // console.log(homes);
  return (
    <div>
      <ScrollRestoration/>
      {homes && (
        <Helmet>
          <title>Properties | Nova Estate</title>
        </Helmet>
      )}
     
      <h1 className="text-xl md:text-3xl lg:text-5xl font-bold font-poppins text-center mt-14 my-3 text-gray-100">
        Featured Properties
      </h1>
      <p className="text-base font-poppins text-center mb-14 text-gray-100">Explore your dream home for sale or discover comfortable rental options tailored to your lifestyle.</p>
      
      <EstateSection homes={homes}></EstateSection>
    </div>
  );
};

export default EstatePage;
