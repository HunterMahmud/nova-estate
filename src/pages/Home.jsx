import React from 'react';
import { Helmet } from 'react-helmet-async';
import PhotoGallery from '../components/PhotoGallery';
import Slider from './../components/Slider';
import EstatePage from './EstatePage';
import SmartHourseGallery from './../components/SmartHourseGallery';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | Nova Estate</title>
            </Helmet>
            <Slider/>
           <EstatePage/>
           <SmartHourseGallery/>
        </div>
    );
};

export default Home;