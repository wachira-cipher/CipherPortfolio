import React from "react";
import {
    Link
} from "react-router-dom";


const SkillCard = ({
    skill,
    handleDelete
}) => {



    const icon =

        skill?.icon

            ?

            skill.icon

            :

            "bi bi-code-slash";








    return (


        <div className="col-xl-4 col-sm-6">



            <div className="product-box portfolio-box">








                {/* ICON AREA */}



                <div className="product-img pt-4 px-4 text-center">





                    {
                        skill.isFeatured && (


                            <div className="product-ribbon badge bg-warning">


                                Featured


                            </div>


                        )

                    }









                    {/* ACTION BUTTONS */}



                    <div className="product-wishlist">



                        {/* VIEW */}



                        <Link


                            to={`/admin/skill/${skill._id}`}


                            className="btn btn-light btn-sm"


                            title="View Skill"


                        >


                            <i className="bi bi-eye-fill"></i>


                        </Link>







                        {/* DELETE */}



                        <button


                            type="button"


                            className="btn btn-light btn-sm"


                            title="Delete Skill"


                            onClick={() =>

                                handleDelete(
                                    skill._id
                                )

                            }


                        >


                            <i className="bi bi-trash-fill"></i>


                        </button>





                    </div>









                    {/* ICON */}



                    <div className="avatar-xl mx-auto">


                        <div className="avatar-title rounded-circle bg-primary-subtle text-primary font-size-24">


                            <i className={icon}></i>


                        </div>


                    </div>





                </div>









                {/* CONTENT */}



                <div className="text-center product-content p-4">







                    <h5 className="mb-1">



                        <Link


                            to={`/admin/skill/${skill._id}`}


                            className="text-reset"


                        >


                            {
                                skill.name
                            }


                        </Link>



                    </h5>









                    {/* CATEGORY */}



                    <p className="text-muted font-size-13">


                        {
                            skill.category
                        }


                    </p>









                    {/* TECHNOLOGY */}



                    <div className="mt-3 mb-3">



                        <p className="text-muted mb-1">


                            Technology


                        </p>





                        <div>



                            {
                                skill.technology && (


                                    <span


                                        className="badge bg-light text-dark me-1"


                                    >


                                        {
                                            skill.technology
                                        }


                                    </span>


                                )

                            }





                        </div>



                    </div>









                    {/* PROFICIENCY */}



                    <div className="mb-3">



                        <p className="text-muted mb-1">


                            Proficiency


                        </p>





                        <h5 className="mb-0">


                            {
                                skill.percentage
                            }%


                        </h5>



                    </div>









                    {/* STATUS */}



                    <ul className="list-inline mb-0 text-muted product-color">



                        <li className="list-inline-item">


                            Status :


                        </li>







                        <li className="list-inline-item">



                            <i


                                className={

                                    skill.status

                                        ?

                                        "bi bi-circle-fill text-success"

                                        :

                                        "bi bi-circle-fill text-danger"

                                }


                            ></i>







                            {

                                skill.status

                                    ?

                                    " Active"

                                    :

                                    " Hidden"

                            }





                        </li>



                    </ul>







                </div>







            </div>




        </div>


    );


};



export default SkillCard;