import { useLocation } from 'react-router-dom';
import contextProvider from './contextProvider';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const NonProtectRedirectRoute = ({children}) => {
    const location = useLocation();
    const navigate = useNavigate();
    const {user} = contextProvider();

   
useEffect(() => {
    if (!user) {
        return;
    }
    toast.info(`Logout to see ${location?.pathname === '/login' ? 'login' : 'register'}`);
    navigate('/');
}, [user, location.pathname, navigate]);

return children;
};

export default NonProtectRedirectRoute;

/*
if(!user)  {
    return children;
 }
 // return <Navigate to='/' state={location?.pathname}/>
    else {  useEffect(()=>{
         toast.info(`Logout to see ${location?.pathname =='/login'?'login':'register'}`)
         navigate('/');
     },[])}

     */