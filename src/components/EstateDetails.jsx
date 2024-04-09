import React from 'react';
import { useParams, useLoaderData } from 'react-router-dom';

const EstateDetails = () => {
    const {id} = useParams();
    const homes = useLoaderData();
    
    const home = homes.find((h)=>h.id==id);
    console.log(home);
    
    return (
        <div>
            this is estate details{home.estate_title}
        </div>
    );
};

export default EstateDetails;