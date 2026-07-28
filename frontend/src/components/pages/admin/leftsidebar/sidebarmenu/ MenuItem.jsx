import React from "react";
import { Link } from "react-router-dom";


const MenuItem = ({
    icon,
    title,
    link = "#",
    badge,
    badgeClass = "",
    children
}) => {


    const hasChildren = children && children.length > 0;



    return (

        <li>


            {
                hasChildren ?


                    (
                        <a
                            href="#"
                            className="has-arrow waves-effect d-flex align-items-center"
                        >


                            {
                                icon && (

                                    <i className={icon}></i>

                                )
                            }



                            <span>
                                {title}
                            </span>



                            {
                                badge && (

                                    <span
                                        className={`badge rounded-pill ${badgeClass} float-end`}
                                    >
                                        {badge}
                                    </span>

                                )
                            }



                            <i className="bi bi-chevron-right menu-arrow"></i>



                        </a>
                    )


                    :


                    (

                        <Link
                            to={link}
                            className="waves-effect d-flex align-items-center"
                        >


                            {
                                icon && (

                                    <i className={icon}></i>

                                )
                            }



                            <span>
                                {title}
                            </span>



                            {
                                badge && (

                                    <span
                                        className={`badge rounded-pill ${badgeClass} float-end`}
                                    >
                                        {badge}
                                    </span>

                                )
                            }


                        </Link>

                    )

            }








            {
                hasChildren && (

                    <ul
                        className="sub-menu"
                        aria-expanded="false"
                    >

                        {
                            children.map((item, index) => (

                                <MenuItem
                                    key={index}
                                    {...item}
                                />

                            ))
                        }


                    </ul>

                )
            }



        </li>

    );

};


export default MenuItem;