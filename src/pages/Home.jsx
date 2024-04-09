import React from 'react';
import { Helmet } from 'react-helmet-async';
import Slider from './../components/Slider';
import EstatePage from './EstatePage';

const Home = () => {
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