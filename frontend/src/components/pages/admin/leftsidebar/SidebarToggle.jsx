import React from "react";


const SidebarToggle = ({ toggleSidebar }) => {



    const handleToggle = () => {

        try {


            console.log("Sidebar toggle clicked");


            if (typeof toggleSidebar !== "function") {

                console.error(
                    "SidebarToggle error: toggleSidebar is not a function",
                    toggleSidebar
                );

                return;

            }



            toggleSidebar();



            console.log("Sidebar toggle executed successfully");


        } catch (error) {


            console.error(
                "SidebarToggle failed:",
                error
            );


        }

    };



    return (

        <button

            type="button"

            onClick={handleToggle}

            className="btn btn-sm px-3 font-size-16 header-item waves-effect vertical-menu-btn"

            aria-label="Toggle sidebar"

        >

            <i className="fa fa-fw fa-bars"></i>


        </button>

    );

};


export default SidebarToggle;