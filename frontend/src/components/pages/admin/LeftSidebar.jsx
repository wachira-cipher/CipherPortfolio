import SidebarLogo from "./leftsidebar/SidebarLogo";
import SidebarToggle from "./leftsidebar/SidebarToggle";
import SidebarMenu from "./leftsidebar/SidebarMenu";


const LeftSidebar = ({ toggleSidebar, sidebarOpen }) => {


    return (

        <div
            className={`vertical-menu ${sidebarOpen ? "" : "vertical-collapsed"
                }`}
        >


            <SidebarLogo />


            <SidebarToggle
                toggleSidebar={toggleSidebar}
            />


            <div
                data-simplebar
                className="sidebar-menu-scroll"
            >

                <SidebarMenu />

            </div>


        </div>

    );

};


export default LeftSidebar;