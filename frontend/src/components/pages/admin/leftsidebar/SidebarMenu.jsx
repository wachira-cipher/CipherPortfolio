import {
    useAuth
} from "../../../../context/AuthContext";


import MenuSection from "./sidebarmenu/MenuSection";
import MenuItem from "./sidebarmenu/ MenuItem";



const SidebarMenu = () => {


    const {
        user,
        token
    } = useAuth();




    const isAuthenticated =
        !!token;



    const isAdmin =
        user?.role === "admin";

    const authChildren = isAuthenticated
        ? [
            {
                title: "Lock Screen",
                link: "/auth/lock-screen"
            }
        ]
        : [
            {
                title: "Login",
                link: "/auth/login"
            },
            {
                title: "Register",
                link: "/auth/register"
            }
        ];


    return (

        <div id="sidebar-menu">


            <ul
                className="metismenu list-unstyled"
                id="side-menu"
            >



                <MenuSection title="Menu" />



                {
                    isAuthenticated && (

                        <MenuItem
                            icon="uil-home-alt"
                            title="Dashboard"
                            badgeClass="bg-primary"
                            link="/admin/dashboard"
                        />

                    )
                }








                <MenuSection title="Apps" />








                <MenuItem

                    icon="bi-briefcase"

                    title="Portfolio"

                    hasArrow

                    children={[

                        {
                            title: "All Portfolios",
                            link: "/admin/portfolio"
                        },

                        {
                            title: "Add Portfolio",
                            link: "/admin/portfolio/create"
                        }

                    ]}

                />










                <MenuItem

                    icon="bi-code-slash"

                    title="Skills"

                    hasArrow

                    children={[

                        {
                            title: "All Skills",
                            link: "/admin/skill"
                        },

                        {
                            title: "Add Skill",
                            link: "/admin/skill/create"
                        }

                    ]}

                />









                <MenuItem

                    icon="bi-layers"

                    title="Services"

                    hasArrow

                    children={[

                        {
                            title: "All Services",
                            link: "/admin/service"
                        },


                        {
                            title: "Add Service",
                            link: "/admin/service/create"
                        }


                    ]}

                />









                <MenuItem

                    icon="bi-file-earmark-text"

                    title="Resume"

                    hasArrow

                    children={[

                        {
                            title: "View Resume",
                            link: "/admin/resume"
                        },


                        {
                            title: "Add Resume",
                            link: "/admin/resume/create"
                        }

                    ]}

                />









                <MenuItem

                    icon="bi-chat-quote"

                    title="Testimonials"

                    hasArrow

                    children={[

                        {
                            title: "Testimonials",
                            link: "/admin/testimonial"
                        },


                        {
                            title: "Add Testimonial",
                            link: "/admin/testimonial/create"
                        }


                    ]}

                />









                <MenuItem

                    icon="bi-envelope"

                    title="Contacts"

                    hasArrow

                    children={[

                        {
                            title: "Messages",
                            link: "/admin/contact"
                        }

                    ]}

                />










                <MenuItem

                    icon="bi-bar-chart"

                    title="Stats"

                    hasArrow

                    children={[


                        {
                            title: "Stats",
                            link: "/admin/stats"
                        },


                        {
                            title: "Add Stat",
                            link: "/admin/stats/create"
                        }


                    ]}

                />










                <MenuSection title="Pages" />









                <MenuItem
                    icon="uil-user-circle"
                    title="Authentication"
                    hasArrow
                    children={authChildren}
                />






            </ul>



        </div>

    );

};



export default SidebarMenu;