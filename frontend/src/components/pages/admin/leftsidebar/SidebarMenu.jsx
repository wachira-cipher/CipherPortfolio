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


                <MenuItem
                    icon="uil-window-section"
                    title="Layouts"
                    hasArrow
                    children={[
                        {
                            title: "Vertical",
                            children: [
                                {
                                    title: "Dark Sidebar",
                                    link: "layouts-dark-sidebar.html"
                                },
                                {
                                    title: "Compact Sidebar",
                                    link: "layouts-compact-sidebar.html"
                                },
                                {
                                    title: "Icon Sidebar",
                                    link: "layouts-icon-sidebar.html"
                                },
                                {
                                    title: "Boxed Width",
                                    link: "layouts-boxed.html"
                                },
                                {
                                    title: "Preloader",
                                    link: "layouts-preloader.html"
                                },
                                {
                                    title: "Colored Sidebar",
                                    link: "layouts-colored-sidebar.html"
                                }
                            ]
                        },

                        {
                            title: "Horizontal",
                            children: [
                                {
                                    title: "Horizontal",
                                    link: "layouts-horizontal.html"
                                },
                                {
                                    title: "Topbar Dark",
                                    link: "layouts-hori-topbar-dark.html"
                                },
                                {
                                    title: "Boxed Width",
                                    link: "layouts-hori-boxed-width.html"
                                },
                                {
                                    title: "Preloader",
                                    link: "layouts-hori-preloader.html"
                                }
                            ]
                        }
                    ]}
                />


                <MenuSection title="Apps" />


                <MenuItem
                    icon="uil-calender"
                    title="Calendar"
                    link="calendar.html"
                />


                <MenuItem
                    icon="uil-comments-alt"
                    title="Chat"
                    link="chat.html"
                />


                <MenuItem
                    icon="uil-comments-alt"
                    title="File Manager"
                    link="file-manager.html"
                />



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
                    icon="uil-invoice"
                    title="Invoices"
                    hasArrow
                    children={[
                        {
                            title: "Invoice List",
                            link: "invoices-list.html"
                        },
                        {
                            title: "Invoice Detail",
                            link: "invoices-detail.html"
                        }
                    ]}
                />



                <MenuItem
                    icon="uil-book-alt"
                    title="Contacts"
                    hasArrow
                    children={[
                        {
                            title: "User Grid",
                            link: "contacts-grid.html"
                        },
                        {
                            title: "User List",
                            link: "contacts-list.html"
                        },
                        {
                            title: "Profile",
                            link: "contacts-profile.html"
                        }
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


                <MenuItem
                    icon="uil-file-alt"
                    title="Utility"
                    hasArrow
                    children={[
                        {
                            title: "Starter Page",
                            link: "pages-starter.html"
                        },
                        {
                            title: "Maintenance",
                            link: "pages-maintenance.html"
                        },
                        {
                            title: "Coming Soon",
                            link: "pages-comingsoon.html"
                        },
                        {
                            title: "Timeline",
                            link: "pages-timeline.html"
                        },
                        {
                            title: "FAQs",
                            link: "pages-faqs.html"
                        },
                        {
                            title: "Pricing",
                            link: "pages-pricing.html"
                        },
                        {
                            title: "Error 404",
                            link: "pages-404.html"
                        },
                        {
                            title: "Error 500",
                            link: "pages-500.html"
                        }
                    ]}
                />



                <MenuSection title="Components" />



                <MenuItem
                    icon="uil-flask"
                    title="UI Elements"
                    hasArrow
                    children={[
                        {
                            title: "Alerts",
                            link: "ui-alerts.html"
                        },
                        {
                            title: "Buttons",
                            link: "ui-buttons.html"
                        },
                        {
                            title: "Cards",
                            link: "ui-cards.html"
                        },
                        {
                            title: "Carousel",
                            link: "ui-carousel.html"
                        },
                        {
                            title: "Dropdowns",
                            link: "ui-dropdowns.html"
                        }
                    ]}
                />


            </ul>

        </div>
    );
};


export default SidebarMenu;