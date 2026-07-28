import React from "react";



const SkillDescription = ({
    skill
}) => {



    if (!skill) {

        return (

            <div className="text-center">

                Loading description...

            </div>

        );

    }





    return (


        <div className="mt-4">


            <h5 className="font-size-14 mb-3">

                More Description:

            </h5>





            <div className="product-desc">





                <ul

                    className="nav nav-tabs nav-tabs-custom"

                    role="tablist"

                >



                    <li className="nav-item">


                        <a

                            className="nav-link active"

                            data-bs-toggle="tab"

                            href="#skill-description"

                            role="tab"

                        >

                            Description

                        </a>


                    </li>






                    <li className="nav-item">


                        <a

                            className="nav-link"

                            data-bs-toggle="tab"

                            href="#skill-specification"

                            role="tab"

                        >

                            Specifications

                        </a>


                    </li>






                    <li className="nav-item">


                        <a

                            className="nav-link"

                            data-bs-toggle="tab"

                            href="#skill-learning"

                            role="tab"

                        >

                            Learning

                        </a>


                    </li>






                    <li className="nav-item">


                        <a

                            className="nav-link"

                            data-bs-toggle="tab"

                            href="#skill-certification"

                            role="tab"

                        >

                            Certification

                        </a>


                    </li>



                </ul>









                <div className="tab-content border border-top-0 p-4">







                    {/* DESCRIPTION */}


                    <div

                        className="tab-pane fade show active"

                        id="skill-description"

                        role="tabpanel"

                    >


                        <div className="row">



                            <div className="col-sm-3 col-md-2">


                                <div className="avatar-lg">


                                    <div className="avatar-title bg-primary-subtle text-primary rounded">


                                        {

                                            skill.icon

                                                ?

                                                <i className={skill.icon}></i>

                                                :

                                                <i className="bi bi-code-slash"></i>

                                        }


                                    </div>


                                </div>


                            </div>







                            <div className="col-sm-9 col-md-10">


                                <div className="text-muted">


                                    <p>

                                        {
                                            skill.description ||

                                            "No description available."

                                        }

                                    </p>





                                    <ul className="list-unstyled product-desc-list">


                                        {
                                            skill.technologies?.length > 0 ?


                                                skill.technologies.map(

                                                    (item, index) => (

                                                        <li key={index}>

                                                            <i className="bi bi-check-circle text-success me-1"></i>

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



                        </div>


                    </div>









                    {/* SPECIFICATIONS */}


                    <div

                        className="tab-pane fade"

                        id="skill-specification"

                        role="tabpanel"

                    >


                        <div className="table-responsive">


                            <table className="table table-nowrap mb-0">


                                <tbody>



                                    <tr>

                                        <th width="25%">

                                            Category

                                        </th>


                                        <td>

                                            {skill.category || "N/A"}

                                        </td>


                                    </tr>







                                    <tr>

                                        <th>

                                            Technology

                                        </th>


                                        <td>

                                            {skill.technology || "N/A"}

                                        </td>


                                    </tr>







                                    <tr>

                                        <th>

                                            Proficiency

                                        </th>


                                        <td>

                                            {skill.percentage}%

                                        </td>


                                    </tr>







                                    <tr>

                                        <th>

                                            Level

                                        </th>


                                        <td>

                                            {skill.level || "N/A"}

                                        </td>


                                    </tr>







                                    <tr>

                                        <th>

                                            Experience

                                        </th>


                                        <td>

                                            {skill.yearsOfExperience || 0} Years

                                        </td>


                                    </tr>







                                    <tr>

                                        <th>

                                            Status

                                        </th>


                                        <td>


                                            {
                                                skill.status

                                                    ?

                                                    <span className="badge bg-success">

                                                        Active

                                                    </span>

                                                    :

                                                    <span className="badge bg-danger">

                                                        Hidden

                                                    </span>

                                            }


                                        </td>


                                    </tr>







                                    <tr>

                                        <th>

                                            Featured

                                        </th>


                                        <td>

                                            {
                                                skill.isFeatured

                                                    ?

                                                    "Yes"

                                                    :

                                                    "No"

                                            }

                                        </td>


                                    </tr>



                                </tbody>


                            </table>


                        </div>


                    </div>









                    {/* LEARNING */}


                    <div

                        className="tab-pane fade"

                        id="skill-learning"

                        role="tabpanel"

                    >


                        <div className="text-muted">


                            <h5 className="font-size-14">

                                Learning Source

                            </h5>



                            <p>

                                {
                                    skill.learningSource ||

                                    "No learning source provided."

                                }

                            </p>


                        </div>


                    </div>









                    {/* CERTIFICATION */}


                    <div

                        className="tab-pane fade"

                        id="skill-certification"

                        role="tabpanel"

                    >


                        <div className="text-muted">


                            <h5 className="font-size-14">

                                Certification

                            </h5>



                            <p>

                                {
                                    skill.certification ||

                                    "No certification information provided."

                                }

                            </p>




                            {
                                skill.certificateUrl &&

                                <a

                                    href={skill.certificateUrl}

                                    target="_blank"

                                    rel="noopener noreferrer"

                                    className="btn btn-primary"

                                >

                                    <i className="bi bi-award me-1"></i>

                                    View Certificate

                                </a>

                            }



                        </div>


                    </div>






                </div>


            </div>


        </div>


    );


};



export default SkillDescription;