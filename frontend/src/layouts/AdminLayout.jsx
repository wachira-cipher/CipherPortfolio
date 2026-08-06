import { useState, useEffect } from "react";

import Header from "../components/pages/admin/Header";
import Footer from "../components/pages/admin/Footer";
import LeftSidebar from "../components/pages/admin/LeftSidebar";
import RightSidebar from "../components/pages/admin/RightSidebar";
import BreadcrumbStyle from "./../utils/BreadcrumbStyle";


import AdminAssets from "../utils/AdminAssets";

import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


const AdminLayout = () => {

    const {
        loading,
        token,
        locked
    } = useAuth();

    const [sidebarOpen, setSidebarOpen] = useState(true);

    const [rightSidebarOpen, setRightSidebarOpen] = useState(false);



    const toggleSidebar = () => {
        setSidebarOpen(prev => !prev);
    };

    const toggleRightSidebar = () => {
        setRightSidebarOpen(prev => {
            const next = !prev;

            if (next) {
                document.body.classList.add("right-bar-enabled");
            } else {
                document.body.classList.remove("right-bar-enabled");
            }

            return next;
        });
    };

    useEffect(() => {
        console.log("Right Sidebar State:", rightSidebarOpen);

        if (rightSidebarOpen) {
            console.log("ADDING right-bar-enabled");
            document.body.classList.add("right-bar-enabled");
        } else {
            console.log("REMOVING right-bar-enabled");
            document.body.classList.remove("right-bar-enabled");
        }

        console.log(document.body.className);

    }, [rightSidebarOpen]);

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


    if (window.innerWidth < 992) {


        if (sidebarOpen) {


            document.body.classList.add(
                "sidebar-enable"
            );


            document.body.classList.remove(
                "vertical-collapsed"
            );


        } else {


            document.body.classList.remove(
                "sidebar-enable"
            );


        }


        return;


    }



    // Desktop behaviour

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



    // Now returns can happen safely
    if (loading) {
        return <div>Loading...</div>;
    }


    if (!token) {
        return <Navigate to="/auth/login" replace />;
    }

    if (locked) {
        return (
            <Navigate
                to="/auth/lock-screen"
                replace
            />
        );
    }



    return (

        <>
            <BreadcrumbStyle />
            <AdminAssets />


            <div id="layout-wrapper">


                <Header
                    toggleSidebar={toggleSidebar}
                    toggleRightSidebar={toggleRightSidebar}
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