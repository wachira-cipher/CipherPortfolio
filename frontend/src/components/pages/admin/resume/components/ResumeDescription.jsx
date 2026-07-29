import React from "react";



const ResumeDescription = ({
    resume
}) => {



    if (!resume) {

        return (

            <div className="text-center">

                Loading resume details...

            </div>

        );

    }








    return (


        <div className="mt-4">



            <h5 className="font-size-14 mb-3">

                Resume Details:

            </h5>







            <div className="product-desc">







                <ul

                    className="nav nav-tabs nav-tabs-custom"

                    role="tablist"

                >





                    {/* EDUCATION TAB */}


                    <li className="nav-item">


                        <a

                            className="nav-link active"

                            data-bs-toggle="tab"

                            href="#resume-education"

                            role="tab"

                        >

                            Education

                        </a>


                    </li>









                    {/* EXPERIENCE TAB */}


                    <li className="nav-item">


                        <a

                            className="nav-link"

                            data-bs-toggle="tab"

                            href="#resume-experience"

                            role="tab"

                        >

                            Experience

                        </a>


                    </li>









                    {/* INFORMATION TAB */}


                    <li className="nav-item">


                        <a

                            className="nav-link"

                            data-bs-toggle="tab"

                            href="#resume-information"

                            role="tab"

                        >

                            Information

                        </a>


                    </li>





                </ul>













                <div className="tab-content border border-top-0 p-4">







                    {/* EDUCATION */}


                    <div

                        className="tab-pane fade show active"

                        id="resume-education"

                        role="tabpanel"

                    >



                        {

                            resume.education?.length > 0 ?



                                resume.education.map(

                                    (education, index) => (


                                        <div

                                            className="mb-4"

                                            key={index}

                                        >



                                            <h5 className="font-size-15">


                                                <i className="bi bi-mortarboard text-primary me-2"></i>


                                                {
                                                    education.title
                                                }


                                            </h5>






                                            <div className="text-muted">



                                                <p className="mb-1">


                                                    <strong>

                                                        Institution:

                                                    </strong>


                                                    {" "}

                                                    {
                                                        education.institution ||
                                                        "N/A"
                                                    }


                                                </p>







                                                <p className="mb-1">


                                                    <strong>

                                                        Period:

                                                    </strong>


                                                    {" "}


                                                    {
                                                        education.period ||
                                                        "N/A"
                                                    }


                                                </p>







                                                <p>


                                                    {
                                                        education.description ||
                                                        "No description available."
                                                    }


                                                </p>



                                            </div>



                                        </div>


                                    )


                                )



                                :



                                (

                                    <p className="text-muted">

                                        No education records available.

                                    </p>

                                )


                        }



                    </div>














                    {/* EXPERIENCE */}


                    <div

                        className="tab-pane fade"

                        id="resume-experience"

                        role="tabpanel"

                    >




                        {

                            resume.experience?.length > 0 ?



                                resume.experience.map(

                                    (experience, index) => (


                                        <div

                                            className="mb-4"

                                            key={index}

                                        >





                                            <h5 className="font-size-15">


                                                <i className="bi bi-briefcase text-primary me-2"></i>


                                                {
                                                    experience.title
                                                }


                                            </h5>








                                            <div className="text-muted">





                                                <p className="mb-1">


                                                    <strong>

                                                        Company:

                                                    </strong>


                                                    {" "}


                                                    {
                                                        experience.company ||
                                                        "N/A"
                                                    }


                                                </p>







                                                <p className="mb-2">


                                                    <strong>

                                                        Period:

                                                    </strong>


                                                    {" "}


                                                    {
                                                        experience.period ||
                                                        "N/A"
                                                    }


                                                </p>









                                                <h6 className="font-size-14">


                                                    Responsibilities

                                                </h6>







                                                <ul className="list-unstyled product-desc-list">



                                                    {

                                                        experience.responsibilities?.length > 0 ?



                                                            experience.responsibilities.map(

                                                                (
                                                                    responsibility,
                                                                    respIndex
                                                                ) => (


                                                                    <li

                                                                        key={respIndex}

                                                                    >


                                                                        <i className="bi bi-check-circle text-success me-1"></i>


                                                                        {
                                                                            responsibility
                                                                        }


                                                                    </li>


                                                                )


                                                            )



                                                            :



                                                            (

                                                                <li>

                                                                    No responsibilities available.

                                                                </li>

                                                            )

                                                    }



                                                </ul>






                                            </div>





                                        </div>


                                    )


                                )



                                :



                                (

                                    <p className="text-muted">

                                        No experience records available.

                                    </p>

                                )



                        }





                    </div>














                    {/* INFORMATION */}


                    <div

                        className="tab-pane fade"

                        id="resume-information"

                        role="tabpanel"

                    >



                        <div className="table-responsive">


                            <table className="table table-nowrap mb-0">


                                <tbody>




                                    <tr>

                                        <th width="25%">

                                            Education Records

                                        </th>


                                        <td>

                                            {
                                                resume.education?.length || 0
                                            }


                                        </td>


                                    </tr>








                                    <tr>


                                        <th>

                                            Experience Records

                                        </th>


                                        <td>

                                            {
                                                resume.experience?.length || 0
                                            }


                                        </td>


                                    </tr>









                                    <tr>

                                        <th>

                                            Created

                                        </th>


                                        <td>


                                            {

                                                resume.createdAt

                                                    ?

                                                    new Date(
                                                        resume.createdAt
                                                    )
                                                        .toLocaleDateString()

                                                    :

                                                    "N/A"

                                            }


                                        </td>


                                    </tr>









                                    <tr>

                                        <th>

                                            Updated

                                        </th>


                                        <td>


                                            {

                                                resume.updatedAt

                                                    ?

                                                    new Date(
                                                        resume.updatedAt
                                                    )
                                                        .toLocaleDateString()

                                                    :

                                                    "N/A"

                                            }


                                        </td>


                                    </tr>




                                </tbody>


                            </table>


                        </div>





                    </div>







                </div>







            </div>






        </div>


    );


};



export default ResumeDescription;