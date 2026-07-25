import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./context/AuthContext";


const AdminRoute = () => {


    const {
        user,
        token,
        loading
    } = useAuth();



    if (loading) {

        return (
            <div className="text-center mt-5">
                Loading...
            </div>
        );

    }



    // No token = logged out
    if (!token) {

        return (
            <Navigate
                to="/auth/login"
                replace
            />
        );

    }



    // Token exists but not admin
    if (
        user &&
        user.role !== "admin"
    ) {

        return (
            <Navigate
                to="/"
                replace
            />
        );

    }



    return <Outlet />;


};


export default AdminRoute;