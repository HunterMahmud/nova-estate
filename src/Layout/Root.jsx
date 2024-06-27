import React from 'react';
import Navbar from './../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const Root = () => {
    return (
        <div className='bg-white object-cover bg-cover bg-[linear-gradient(45deg,rgba(3,7,18,0.1),rgba(3,7,18,0)),url("https://i.ibb.co/6W7XHnN/background.jpg")] bg-center bg-no-repeat bg-fixed'>
            <Navbar/>
           <div className="min-h-[calc(100vh-349px)]">
           <Outlet/>
           </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;