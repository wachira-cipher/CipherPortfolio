import { useState, useEffect } from "react";

import Header from "../components/pages/admin/Header";
import Footer from "../components/pages/admin/Footer";
import LeftSidebar from "../components/pages/admin/LeftSidebar";

import AdminAssets from "../utils/AdminAssets";

import { Outlet, Navigate } from "react-router-dom";
import RightSidebar from "../components/pages/admin/RightSidebar";
import { useAuth } from "../context/AuthContext";


const AdminLayout = () => {

    const { loading, token } = useAuth();

    const [sidebarOpen, setSidebarOpen] = useState(true);



    const toggleSidebar = () => {

        setSidebarOpen(prev => !prev);

    };


    if (loading) {
        return <div>Loading...</div>;
    }

    if (!token) {
        return <Navigate to="/auth/login" replace />;
    }

    useEffect(() => {


        if (sidebarOpen) {


            document.body.setAttribute(
                "data-sidebar-size",
                "lg"
            );


            document.body.classList.remove(
                "vertical-collapsed"
            );


        } else {


            document.body.setAttribute(
                "data-sidebar-size",
                "sm"
            );


            document.body.classList.add(
                "vertical-collapsed"
            );


        }


    }, [sidebarOpen]);




    useEffect(() => {


        console.log(
            "AdminLayout sidebar state:",
            sidebarOpen
        );



        if (sidebarOpen) {


            document.body.classList.remove(
                "vertical-collapsed"
            );


            document.body.classList.remove(
                "sidebar-enable"
            );


        } else {


            document.body.classList.add(
                "vertical-collapsed"
            );


            document.body.classList.add(
                "sidebar-enable"
            );


        }



        return () => {

            document.body.classList.remove(
                "vertical-collapsed"
            );


            document.body.classList.remove(
                "sidebar-enable"
            );

        };


    }, [sidebarOpen]);

    const [rightSidebarOpen, setRightSidebarOpen] = useState(false);


    const toggleRightSidebar = () => {

        setRightSidebarOpen(prev => !prev);

    };



    return (

        <>

            <AdminAssets />



            <div id="layout-wrapper">


                <Header
                    toggleSidebar={toggleSidebar}

                />



                <LeftSidebar

                    toggleSidebar={toggleSidebar}

                />



                <div className="main-content">


                    <Outlet />


                    <Footer />


                </div>

                <RightSidebar
                    open={rightSidebarOpen}
                    toggleRightSidebar={toggleRightSidebar}
                />

            </div>


        </>

    );

};


export default AdminLayout;