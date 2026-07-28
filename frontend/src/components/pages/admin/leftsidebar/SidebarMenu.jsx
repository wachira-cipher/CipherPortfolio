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
                    icon="uil-envelope"
                    title="Email"
                    hasArrow
                    children={[
                        {
                            title: "Inbox",
                            link: "email-inbox.html"
                        },
                        {
                            title: "Read Email",
                            link: "email-read.html"
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
                    icon="uil-book-alt"
                    title="Services"
                    hasArrow
                    children={[
                        {
                            title: "Services",
                            link: "Add service"
                        },
                        {
                            title: "User List",
                            link: "contacts-list.html"
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