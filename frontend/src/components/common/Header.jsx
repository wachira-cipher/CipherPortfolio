import { Link } from "react-router-dom";
import { useState } from "react";
import "../../assets/styles/header.css";
import siteConfig from "../../config/site.config";


export default function Header() {
    const [open, setOpen] = useState(false);

    return (

        <header
            id="header"
            className="header d-flex align-items-center light-background sticky-top"
        >

            <div className="container position-relative d-flex align-items-center justify-content-between">


                <nav id="navmenu" className="navmenu">

                    <ul>

                        <li>
                            <Link to="/" className="active">
                                Home
                            </Link>
                        </li>


                        <li>
                            <Link to="/about">
                                About
                            </Link>
                        </li>


                        <li>
                            <Link to="/resume">
                                Resume
                            </Link>
                        </li>


                        <li>
                            <Link to="/services">
                                Services
                            </Link>
                        </li>


                        <li>
                            <Link to="/portfolio">
                                Portfolio
                            </Link>
                        </li>

                        {/*
                        <li className="dropdown">

                            <a href="#">
                                <span>Dropdown</span>
                                <i className="bi bi-chevron-down toggle-dropdown"></i>
                            </a>


                            <ul>

                                <li>
                                    <a href="#">
                                        Dropdown 1
                                    </a>
                                </li>


                                <li className="dropdown">

                                    <a href="#">
                                        <span>
                                            Deep Dropdown
                                        </span>

                                        <i className="bi bi-chevron-down toggle-dropdown"></i>

                                    </a>


                                    <ul>

                                        <li>
                                            <a href="#">
                                                Deep Dropdown 1
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#">
                                                Deep Dropdown 2
                                            </a>
                                        </li>


                                        <li>
                                            <a href="#">
                                                Deep Dropdown 3
                                            </a>
                                        </li>


                                        <li>
                                            <a href="#">
                                                Deep Dropdown 4
                                            </a>
                                        </li>


                                        <li>
                                            <a href="#">
                                                Deep Dropdown 5
                                            </a>
                                        </li>


                                    </ul>

                                </li>


                                <li><a href="#">Dropdown 2</a></li>

                                <li><a href="#">Dropdown 3</a></li>

                                <li><a href="#">Dropdown 4</a></li>


                            </ul>


                        </li>

*/}
                        <li>
                            <Link to="/contact">
                                Contact
                            </Link>
                        </li>


                    </ul>


                    <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>


                </nav>

                <div className="account-dropdown">

                    <button
                        className="account-icon"
                        onClick={() => setOpen(!open)}
                    >
                        <i className="bi bi-person-circle"></i>
                    </button>


                    <ul className={`dropdown-menu ${open ? "show" : ""}`}>

                        <li>
                            <a className="dropdown-item" href="/auth/login">
                                <i className="bi bi-box-arrow-in-right"></i>
                                Login
                            </a>
                        </li>


                        <li>
                            <a className="dropdown-item" href="/auth/register">
                                <i className="bi bi-person-plus"></i>
                                Sign Up
                            </a>
                        </li>

                    </ul>

                </div>

                <div className="header-social-links">



                </div>

                <div className="header-social-links">

                    <a
                        href={siteConfig.socialLinks.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="twitter"
                    >
                        <i className="bi bi-twitter-x"></i>
                    </a>


                    <a
                        href={siteConfig.socialLinks.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="facebook"
                    >
                        <i className="bi bi-facebook"></i>
                    </a>


                    <a
                        href={siteConfig.socialLinks.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="instagram"
                    >
                        <i className="bi bi-instagram"></i>
                    </a>


                    <a
                        href={siteConfig.socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="linkedin"
                    >
                        <i className="bi bi-linkedin"></i>
                    </a>

                </div>




            </div>


        </header>

    );

}