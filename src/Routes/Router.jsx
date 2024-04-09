import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from './../pages/Home';
import Root from '../Layout/Root';
import NotFound from './../pages/NotFound';
import Login from './../pages/Login';
import Register from './../pages/Register';
import NonProtectRedirectRoute from '../components/NonProtectRedirectRoute';
import EstatePage from '../pages/EstatePage';
import EstateDetails from './../components/EstateDetails';

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
                element: <NonProtectRedirectRoute><Login/></NonProtectRedirectRoute>
            },
            {
                path: '/register',
                element: <NonProtectRedirectRoute><Register/></NonProtectRedirectRoute>
            },
            {
                path:'/estates',
                loader: ()=> fetch('/estateData.json'),
                element: <EstatePage></EstatePage>
            },
            {
                path:'/estates/:id',
                loader: ()=> fetch('/estateData.json'),
                element: <EstateDetails></EstateDetails>
            },
            {
                path:'/updateprofile',
                element: <h1>update profile</h1>
            }
        ]
    }
])

export default router;