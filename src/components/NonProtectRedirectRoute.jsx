import { useLocation } from 'react-router-dom';
import contextProvider from './contextProvider';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

const NonProtectRedirectRoute = ({children}) => {
    const location = useLocation();
    const navigate = useNavigate();
    const {user} = contextProvider();

    if(!user)  {
       return children;
    }
    else {
        // <Navigate to='/'/>
        useEffect(()=>{
            toast.info(`Logout to see ${location?.pathname =='/login'?'login':'register'}`)
            navigate('/');
        },[])
    }
};

export default NonProtectRedirectRoute;