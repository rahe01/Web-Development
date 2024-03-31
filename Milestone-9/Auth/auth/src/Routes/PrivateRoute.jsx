import { useContext } from "react";
import { AuthContext } from "../Provider/Authprovider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {

    const {user , loading} = useContext(AuthContext);

    if(loading){
        return <span className="loading loading-dots loading-lg"></span>
    }

    if(user) {
        return children
    }

    return <Navigate to={'/login'}></Navigate>;
};

export default PrivateRoute;