import React from 'react';
import Navbar from './../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const Root = () => {
    return (
        <div>
            <Navbar/>
           <div className='min-h-[calc(100vh-341px)]'>
           <Outlet/>
           </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;