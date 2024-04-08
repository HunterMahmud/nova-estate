import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from './../pages/Home';
import Root from '../Layout/Root';
import NotFound from './../pages/NotFound';
import Login from './../pages/Login';
import Register from './../pages/Register';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        errorElement: <NotFound/>,
        children:[
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            },
            {
                path:'/updateprofile',
                element: <h1>update profile</h1>
            }
        ]
    }
])

export default router;