import React from "react";



const PortfolioInformation = ({
    portfolio
}) => {



    if (!portfolio) {
        return (
            <div className="text-center">
                Loading portfolio...
            </div>
        );
    }







    return (


        <>


            {/* CLIENT */}


            <h5 className="font-size-14">


                <span className="text-muted">

                    {portfolio.client || "Unknown Client"}

                </span>


            </h5>









            {/* TITLE */}


            <h4 className="font-size-20 mb-3">


                {portfolio.title}


            </h4>









            {/* CATEGORY + FEATURED */}


            <div className="text-muted">


                <span className="badge bg-success font-size-14 me-2">


                    <i className="bi bi-folder me-1"></i>


                    {portfolio.category}


                </span>





                {
                    portfolio.isFeatured && (

                        <span className="badge bg-warning text-dark">

                            <i className="bi bi-star-fill me-1"></i>

                            Featured Project

                        </span>

                    )
                }



            </div>









            {/* DATE */}


            <h5 className="mt-4 pt-2">


                <span className="text-muted me-2">


                    Project Date:

                </span>


                {portfolio.projectDate || "N/A"}


            </h5>









            {/* DESCRIPTION */}


            <p className="mt-4 text-muted">


                {portfolio.description || "No description available."}


            </p>









            <div className="row">





                {/* FEATURES */}


                <div className="col-md-6">


                    <div className="mt-3">


                        <h5 className="font-size-14">


                            Features:

                        </h5>





                        <ul className="list-unstyled product-desc-list text-muted">


                            {
                                portfolio.features?.length > 0 ?


                                    portfolio.features.map(

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









                {/* TECHNOLOGIES */}


                <div className="col-md-6">


                    <div className="mt-3">


                        <h5 className="font-size-14">


                            Technologies:

                        </h5>





                        <ul className="list-unstyled product-desc-list text-muted">


                            {
                                portfolio.technologies?.length > 0 ?


                                    portfolio.technologies.map(

                                        (technology, index) => (


                                            <li key={index}>


                                                <i className="bi bi-code-slash text-primary me-1"></i>


                                                {technology}


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









            {/* PROJECT LINKS */}


            <div className="mt-4">


                <h5 className="font-size-14 mb-3">


                    <i className="bi bi-link-45deg text-primary me-2"></i>


                    Project Links


                </h5>





                <div className="d-flex gap-2 flex-wrap">



                    {
                        portfolio.website && (

                            <a

                                href={portfolio.website}

                                target="_blank"

                                rel="noopener noreferrer"

                                className="btn btn-primary"

                            >

                                <i className="bi bi-globe me-1"></i>

                                Visit Website

                            </a>

                        )
                    }







                    {
                        portfolio.github && (

                            <a

                                href={portfolio.github}

                                target="_blank"

                                rel="noopener noreferrer"

                                className="btn btn-dark"

                            >

                                <i className="bi bi-github me-1"></i>

                                Github

                            </a>

                        )
                    }





                </div>



            </div>


























        </>


    );


};



export default PortfolioInformation;