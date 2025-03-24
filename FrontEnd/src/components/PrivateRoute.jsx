import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = ({ element }) => {
    const { isAuthenticated } = useAuth();

    if (isAuthenticated === null) {
        return <p className="text-center text-gray-500">Checking authentication...</p>;
    }

    return isAuthenticated ? element : <Navigate to="/login" replace />;
};

export default PrivateRoute;
