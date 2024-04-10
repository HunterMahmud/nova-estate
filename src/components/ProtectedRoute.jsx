import { Navigate, useLocation } from "react-router-dom";
import contextProvider from "./contextProvider";

const ProtectedRoute = ({children}) => {
    const location = useLocation();
    const {user, loading} = contextProvider();
    if(loading) return;
    if(user)  {
       return children;
    }
    return <Navigate to='/login' state={location.pathname}/>
};

export default ProtectedRoute;