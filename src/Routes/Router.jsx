import { createBrowserRouter } from 'react-router-dom';
import Home from './../pages/Home';
import Root from '../Layout/Root';
import NotFound from './../pages/NotFound';
import Login from './../pages/Login';
import Register from './../pages/Register';
import EstatePage from '../pages/EstatePage';
import EstateDetails from '../pages/EstateDetails';
import ProtectedRoute from './../components/ProtectedRoute';
import UpdateProfile from './../pages/UpdateProfile';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        errorElement: <NotFound/>,
        children:[
            {
                path: '/',
                element: <Home/>,
            },
            {
                path: '/login',
                element: <Login/>,
            },
            {
                path: '/register',
                element: <Register/>,
            },
            {
                path:'/properties',
                loader: ()=> fetch('/estateData.json'),
                element: <EstatePage></EstatePage>
            },
            {
                path:'/properties/:id',
                loader: ()=> fetch('/estateData.json'),
                element: <ProtectedRoute><EstateDetails></EstateDetails></ProtectedRoute>,
            },
            {
                path:'/updateprofile',
                element: <ProtectedRoute><UpdateProfile></UpdateProfile></ProtectedRoute>,
            },
            
        ]
    }
])

export default router;