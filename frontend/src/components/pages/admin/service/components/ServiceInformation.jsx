import React from "react";



const ServiceInformation = ({
    service
}) => {



    if (!service) {

        return (

            <div className="text-center">

                Loading service...

            </div>

        );

    }







    return (


        <>



            {/* ICON + CATEGORY */}


            <h5 className="font-size-14">


                <span className="text-muted">


                    <i className={`${service.icon} me-2`}></i>


                    Service


                </span>


            </h5>









            {/* TITLE */}


            <h4 className="font-size-20 mb-3">


                {service.title}


            </h4>









            {/* CATEGORY + FEATURED */}


            <div className="text-muted">


                <span className="badge bg-success font-size-14 me-2">


                    <i className="bi bi-folder me-1"></i>


                    {service.category || "Uncategorized"}


                </span>





                {
                    service.isFeatured && (


                        <span className="badge bg-warning text-dark">


                            <i className="bi bi-star-fill me-1"></i>


                            Featured Service


                        </span>


                    )
                }



            </div>









            {/* SHORT DESCRIPTION */}


            <p className="mt-4 text-muted">


                {
                    service.shortDescription ||

                    "No short description available."

                }


            </p>









            {/* FULL DESCRIPTION */}


            <p className="mt-3 text-muted">


                {
                    service.description ||

                    "No description available."

                }


            </p>









            <div className="row">





                {/* FEATURES */}


                <div className="col-md-12">


                    <div className="mt-3">


                        <h5 className="font-size-14">


                            Features:

                        </h5>





                        <ul className="list-unstyled product-desc-list text-muted">


                            {
                                service.features?.length > 0 ?



                                    service.features.map(


                                        (feature, index) => (


                                            <li key={index}>


                                                <i className="bi bi-check-circle text-success me-1"></i>


                                                {feature}


                                            </li>


                                        )


                                    )



                                    :



                                    (

                                        <li>

                                            No features available

                                        </li>

                                    )

                            }


                        </ul>



                    </div>


                </div>







            </div>









            {/* SERVICE INFORMATION */}


            <div className="mt-4">


                <h5 className="font-size-14 mb-3">


                    <i className="bi bi-info-circle text-primary me-2"></i>


                    Service Information


                </h5>





                <div className="d-flex gap-2 flex-wrap">



                    {

                        service.status ?


                            (

                                <span className="badge bg-success p-2">


                                    <i className="bi bi-check-circle me-1"></i>


                                    Active Service


                                </span>


                            )


                            :


                            (

                                <span className="badge bg-danger p-2">


                                    <i className="bi bi-x-circle me-1"></i>


                                    Hidden Service


                                </span>


                            )


                    }





                </div>



            </div>












        </>


    );


};



export default ServiceInformation;