import { Navigate } from "react-router-dom";

const AuthedRoute = ({ children }) => {
    const access_token = localStorage.getItem('access_token');

    if(access_token) return <Navigate to={'/todo'} />;
    else return children;
}

export default AuthedRoute;