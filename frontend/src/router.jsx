import { createBrowserRouter } from "react-router-dom";


// Layouts
import PublicLayout from "./layouts/PublicLayout";
import AuthLayout from "./layouts/AuthLayout";


// Public Pages
import Home from "./components/pages/public/Home";
import About from "./components/pages/public/About";
import Resume from "./components/pages/public/Resume";
import Services from "./components/pages/public/Services";
import ServiceDetails from "./components/pages/public/ServiceDetails";
import Portfolio from "./components/pages/public/Portfolio";
import Contact from "./components/pages/public/Contact";
import PortfolioDetails from "./components/pages/public/PortfolioDetails";


// Auth Pages
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import AdminLayout from "./layouts/AdminLayout";
import Dashboard from "./components/pages/admin/Dashboard";
// import ForgotPassword from "./auth/pages/ForgotPassword";
import Profile from "./components/pages/admin/profile/Profile";

import AllPortfolios from "./components/pages/admin/portfolio/AllPortfolios";
import CreatePortfolio from "./components/pages/admin/portfolio/CreatePortfolio";
import EditPortfolio from "./components/pages/admin/portfolio/EditPortfolio";
import ViewPortfolio from "./components/pages/admin/portfolio/ViewPortfolio";

// Skill Pages
import AllSkills from "./components/pages/admin/skill/AllSkills";
import CreateSkill from "./components/pages/admin/skill/CreateSkill";
import EditSkill from "./components/pages/admin/skill/EditSkill";
import ViewSkill from "./components/pages/admin/skill/ViewSkill";



const router = createBrowserRouter([



    /*
    ============================
        PUBLIC WEBSITE
    ============================
    */

    {
        path: "/",
        element: <PublicLayout />,

        children: [

            {
                index: true,
                element: <Home />,
            },

            {
                path: "about",
                element: <About />,
            },


            {
                path: "resume",
                element: <Resume />,
            },


            {
                path: "services",
                element: <Services />,
            },
            {
                path: "service-details",
                element: <ServiceDetails />,
            },


            {
                path: "portfolio-details",
                element: <PortfolioDetails />,
            },


            {
                path: "portfolio",
                element: <Portfolio />,
            },


            {
                path: "contact",
                element: <Contact />,
            },


        ],
    },





    /*
    ============================
        AUTHENTICATION
    ============================
    */

    {
        path: "/auth",
        element: <AuthLayout />,

        children: [

            {
                path: "login",
                element: <Login />,
            },

            {
                path: "register",
                element: <Register />,
            },

        ],
    },


    /*
    ============================
        404
    ============================
    */


    // {
    //     path: "*",
    //     element: <NotFound />,
    // },

    {
        path: "/admin",
        element: <AdminLayout />,
        children: [

            {
                path: "dashboard",
                element: <Dashboard />
            },
            {
                path: "profile",
                element: <Profile />
            },
            {
                path: "portfolio",
                children: [

                    {
                        path: "",
                        element: <AllPortfolios />
                    },

                    {
                        path: "create",
                        element: <CreatePortfolio />
                    },

                    {
                        path: ":id/edit",
                        element: <EditPortfolio />
                    },

                    {
                        path: ":id",
                        element: <ViewPortfolio />
                    }

                ]
            },
            {
                path: "skill",
                children: [

                    {
                        path: "",
                        element: <AllSkills />
                    },


                    {
                        path: "create",
                        element: <CreateSkill />
                    },


                    {
                        path: ":id/edit",
                        element: <EditSkill />
                    },


                    {
                        path: ":id",
                        element: <ViewSkill />
                    }

                ]
            }


        ]
    }


]);


export default router;