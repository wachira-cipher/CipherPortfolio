import MenuSection from "./sidebarmenu/MenuSection";
import MenuItem from "./sidebarmenu/ MenuItem";


const SidebarMenu = () => {

    return (
        <div id="sidebar-menu">

            <ul
                className="metismenu list-unstyled"
                id="side-menu"
            >


                <MenuSection title="Menu" />


                <MenuItem
                    icon="uil-home-alt"
                    title="Dashboard"
                    badge="01"
                    badgeClass="bg-primary"
                    link="/admin/dashboard"
                />





                <MenuSection title="Apps" />






                <MenuItem
                    icon="bi-briefcase"
                    title="Portfolio"
                    hasArrow
                    children={[
                        {
                            title: "Portfolios",
                            link: "/admin/portfolio"
                        },

                        {
                            title: "Add Portfolio",
                            link: "/admin/portfolio/create"
                        }
                    ]}
                />







                <MenuItem
                    icon="bi bi-code-slash"
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
                    icon="bi bi-layers"
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
                        },

                    ]}
                />

                <MenuItem
                    icon="bi bi-file-earmark-text"
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
                        },

                    ]}
                />



                <MenuSection title="Pages" />


                <MenuItem
                    icon="uil-user-circle"
                    title="Authentication"
                    hasArrow
                    children={[
                        {
                            title: "Login",
                            link: "auth-login.html"
                        },
                        {
                            title: "Register",
                            link: "auth-register.html"
                        },
                        {
                            title: "Recover Password",
                            link: "auth-recoverpw.html"
                        },
                        {
                            title: "Lock Screen",
                            link: "auth-lock-screen.html"
                        }
                    ]}
                />





            </ul>

        </div>
    );
};


export default SidebarMenu;