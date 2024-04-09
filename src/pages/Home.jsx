import React from 'react';
import { Helmet } from 'react-helmet-async';
import Slider from './../components/Slider';
import EstatePage from './EstatePage';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

const Home = () => {
    const location = useLocation();
    console.log(location);
    if(location?.state){
        toast.info(`Logout to see ${location?.pathname =='/login'?'login':'register'}`)
    }
    return (
        <div>
            <Helmet>
                <title>Home | Nova Estate</title>
            </Helmet>
            <Slider/>
           <EstatePage/>
        </div>
    );
};

export default Home;