import React from "react";



const ResumeInformation = ({
    resume
}) => {



    if (!resume) {

        return (

            <div className="text-center">

                Loading resume...

            </div>

        );

    }







    return (

        <>





            {/* HEADER */}


            <h5 className="font-size-14">


                <span className="text-muted">


                    <i className="bi bi-file-earmark-person me-2"></i>


                    Resume


                </span>


            </h5>









            <h4 className="font-size-20 mb-4">


                Professional Resume


            </h4>









            {/* EDUCATION */}


            <div className="mt-4">


                <h5 className="font-size-14 mb-3">


                    <i className="bi bi-mortarboard text-primary me-2"></i>


                    Education


                </h5>





                {

                    resume.education?.length > 0 ?



                        (

                            <div className="timeline">


                                {
                                    resume.education.map(

                                        (item, index) => (


                                            <div

                                                key={index}

                                                className="mb-4"

                                            >



                                                <h6 className="mb-1">


                                                    {item.title}


                                                </h6>





                                                <p className="text-muted mb-1">


                                                    <i className="bi bi-building me-1"></i>


                                                    {
                                                        item.institution ||
                                                        "Institution not provided"
                                                    }


                                                </p>





                                                <p className="text-muted mb-1">


                                                    <i className="bi bi-calendar me-1"></i>


                                                    {
                                                        item.period ||
                                                        "Period not provided"
                                                    }


                                                </p>





                                                <p className="text-muted">


                                                    {
                                                        item.description ||
                                                        "No description available."
                                                    }


                                                </p>



                                            </div>


                                        )

                                    )

                                }


                            </div>

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


            <div className="mt-5">


                <h5 className="font-size-14 mb-3">


                    <i className="bi bi-briefcase text-primary me-2"></i>


                    Experience


                </h5>





                {

                    resume.experience?.length > 0 ?



                        (

                            <div>


                                {

                                    resume.experience.map(

                                        (item, index) => (


                                            <div

                                                key={index}

                                                className="mb-4"

                                            >





                                                <h6 className="mb-1">


                                                    {item.title}


                                                </h6>







                                                <p className="text-muted mb-1">


                                                    <i className="bi bi-building me-1"></i>


                                                    {
                                                        item.company ||
                                                        "Company not provided"
                                                    }


                                                </p>







                                                <p className="text-muted mb-2">


                                                    <i className="bi bi-calendar me-1"></i>


                                                    {
                                                        item.period ||
                                                        "Period not provided"
                                                    }


                                                </p>









                                                <h6 className="font-size-13">


                                                    Responsibilities:


                                                </h6>






                                                <ul className="list-unstyled product-desc-list text-muted">


                                                    {

                                                        item.responsibilities?.length > 0 ?


                                                            item.responsibilities.map(

                                                                (
                                                                    responsibility,
                                                                    respIndex
                                                                ) => (


                                                                    <li

                                                                        key={respIndex}

                                                                    >


                                                                        <i className="bi bi-check-circle text-success me-1"></i>


                                                                        {responsibility}


                                                                    </li>


                                                                )

                                                            )



                                                            :



                                                            (

                                                                <li>

                                                                    No responsibilities added

                                                                </li>

                                                            )

                                                    }


                                                </ul>






                                            </div>


                                        )

                                    )

                                }


                            </div>


                        )



                        :



                        (

                            <p className="text-muted">

                                No experience records available.

                            </p>

                        )


                }



            </div>









            {/* RESUME INFORMATION */}


            <div className="mt-4">


                <h5 className="font-size-14 mb-3">


                    <i className="bi bi-info-circle text-primary me-2"></i>


                    Resume Information


                </h5>







                <div className="d-flex gap-2 flex-wrap">


                    <span className="badge bg-success p-2">


                        <i className="bi bi-check-circle me-1"></i>


                        Resume Available


                    </span>






                    <span className="badge bg-light text-dark p-2">


                        <i className="bi bi-mortarboard me-1"></i>


                        {

                            resume.education?.length || 0

                        }

                        {" "}Education Records


                    </span>






                    <span className="badge bg-light text-dark p-2">


                        <i className="bi bi-briefcase me-1"></i>


                        {

                            resume.experience?.length || 0

                        }

                        {" "}Experience Records


                    </span>


                </div>



            </div>





        </>


    );


};



export default ResumeInformation;