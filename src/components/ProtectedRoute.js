import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const access_token = localStorage.getItem('access_token');

    if(!access_token) return <Navigate to={'/signin'} />;
    else return children;
}

export default ProtectedRoute;