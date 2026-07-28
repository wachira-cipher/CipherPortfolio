import React from "react";

import {
    Link
} from "react-router-dom";




const SkillInformation = ({
    skill
}) => {



    if (!skill) {

        return (

            <div className="text-center">

                Loading skill...

            </div>

        );

    }







    return (


        <>





            {/* TECHNOLOGY */}


            <h5 className="font-size-14">


                <span className="text-muted">

                    {skill.technology || "ICT Skill"}

                </span>


            </h5>









            {/* TITLE */}


            <h4 className="font-size-20 mb-3">


                {skill.name}


            </h4>









            {/* CATEGORY + FEATURED */}


            <div className="text-muted">



                <span className="badge bg-success font-size-14 me-2">


                    <i className="bi bi-folder me-1"></i>


                    {skill.category}


                </span>







                {

                    skill.isFeatured && (


                        <span className="badge bg-warning text-dark">


                            <i className="bi bi-star-fill me-1"></i>


                            Featured Skill


                        </span>


                    )

                }



            </div>









            {/* PROFICIENCY */}


            <h5 className="mt-4 pt-2">


                <span className="text-muted me-2">


                    Proficiency:

                </span>


                {skill.percentage || 0}%


            </h5>









            {/* PROGRESS BAR */}


            <div className="progress mt-3">


                <div


                    className="progress-bar bg-primary"


                    role="progressbar"


                    style={{

                        width: `${skill.percentage || 0}%`

                    }}


                    aria-valuenow={
                        skill.percentage
                    }


                    aria-valuemin="0"


                    aria-valuemax="100"


                >


                    {skill.percentage}%


                </div>


            </div>









            {/* DESCRIPTION */}


            <p className="mt-4 text-muted">


                {

                    skill.description ||

                    "No description available."

                }


            </p>









            <div className="row">





                {/* TECHNOLOGIES */}


                <div className="col-md-6">


                    <div className="mt-3">


                        <h5 className="font-size-14">


                            Technologies:

                        </h5>





                        <ul className="list-unstyled product-desc-list text-muted">


                            {

                                skill.technologies?.length > 0 ?



                                    skill.technologies.map(

                                        (item, index) => (


                                            <li key={index}>


                                                <i className="bi bi-code-slash text-primary me-1"></i>


                                                {item}


                                            </li>


                                        )

                                    )


                                    :


                                    (


                                        <li>

                                            No technologies listed

                                        </li>


                                    )


                            }



                        </ul>



                    </div>


                </div>









                {/* DETAILS */}


                <div className="col-md-6">


                    <div className="mt-3">


                        <h5 className="font-size-14">


                            Skill Details:

                        </h5>





                        <ul className="list-unstyled product-desc-list text-muted">



                            <li>


                                <i className="bi bi-award text-success me-1"></i>


                                Level:

                                <strong className="ms-1">

                                    {skill.level || "N/A"}

                                </strong>


                            </li>







                            <li>


                                <i className="bi bi-clock text-primary me-1"></i>


                                Experience:

                                <strong className="ms-1">

                                    {skill.yearsOfExperience || 0} Years

                                </strong>


                            </li>







                            <li>


                                <i className="bi bi-layers text-warning me-1"></i>


                                Display Order:

                                <strong className="ms-1">

                                    {skill.displayOrder || 0}

                                </strong>


                            </li>



                        </ul>



                    </div>


                </div>






            </div>









            {/* CERTIFICATION LINKS */}


            <div className="mt-4">


                <h5 className="font-size-14 mb-3">


                    <i className="bi bi-link-45deg text-primary me-2"></i>


                    Skill Resources


                </h5>





                <div className="d-flex gap-2 flex-wrap">





                    {

                        skill.certificateUrl && (


                            <a


                                href={skill.certificateUrl}


                                target="_blank"


                                rel="noopener noreferrer"


                                className="btn btn-primary"


                            >


                                <i className="bi bi-award me-1"></i>


                                Certificate


                            </a>


                        )

                    }









                    {

                        skill.learningSource && (


                            <span

                                className="btn btn-light"


                            >


                                <i className="bi bi-book me-1"></i>


                                {skill.learningSource}


                            </span>


                        )

                    }





                </div>



            </div>









            {/* ACTION BUTTONS */}


            <div className="row text-center mt-4">


                <div className="col-sm-6">


                    <div className="d-grid">


                        <Link


                            to="/admin/skill/create"


                            className="btn btn-primary waves-effect waves-light mt-2 me-1"


                        >


                            <i className="bi bi-plus-circle me-2"></i>


                            Add Skill


                        </Link>


                    </div>


                </div>









                <div className="col-sm-6">


                    <div className="d-grid">


                        <Link


                            to={`/admin/skill/${skill._id}/edit`}


                            className="btn btn-light waves-effect mt-2 waves-light"


                        >


                            <i className="bi bi-pencil-square me-2"></i>


                            Edit


                        </Link>


                    </div>


                </div>



            </div>








        </>


    );


};



export default SkillInformation;