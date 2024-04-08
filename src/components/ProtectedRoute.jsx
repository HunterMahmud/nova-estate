import { Navigate, useLocation } from "react-router-dom";
import contextProvider from "./contextProvider";

const ProtectedRoute = ({children}) => {
    const location = useLocation();
    const {user} = contextProvider();
    if(user)  {
       return children;
    }
    return <Navigate to='/login' state={location.pathname}/>
};

export default ProtectedRoute;