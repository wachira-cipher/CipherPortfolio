import React from "react";
import { Link } from "react-router-dom";


import { getImageUrl } from "../../../../../utils/imageUrl";



const PortfolioCard = ({
    portfolio, handleDelete
}) => {



    const image =

        portfolio?.images?.length > 0

            ?

            getImageUrl(
                portfolio.images[0]
            )

            :

            getImageUrl(
                "/assets/images/portfolio/default.jpg"
            );







    return (


        <div className="col-xl-4 col-sm-6">


            <div className="product-box portfolio-box">





                {/* IMAGE AREA */}


                <div className="product-img pt-4 px-4">







                    {
                        portfolio.isFeatured && (


                            <div className="product-ribbon badge bg-warning">


                                Featured


                            </div>


                        )

                    }








                    {/* VIEW BUTTON */}


                    <div className="product-wishlist">

                        <Link
                            to={`/admin/portfolio/${portfolio._id}`}
                            className="btn btn-light btn-sm"
                            title="View Portfolio"
                        >

                            <i className="bi bi-eye-fill"></i>

                        </Link>

                        {/* DELETE */}

                        <button
                            type="button"
                            className="btn btn-light btn-sm"
                            title="Delete Portfolio"
                            onClick={() =>
                                handleDelete(portfolio._id)
                            }
                        >

                            <i className="bi bi-trash-fill"></i>

                        </button>

                    </div>









                    <img


                        src={image}


                        alt={
                            portfolio.title
                        }


                        className="img-fluid mx-auto d-block"


                        onError={(e) => {


                            e.target.src = getImageUrl(
                                "assets/images/portfolio/default.jpg"
                            );


                        }}


                    />




                </div>









                {/* CONTENT */}


                <div className="text-center product-content p-4">








                    <h5 className="mb-1">


                        <Link


                            to={`/admin/portfolio/view/${portfolio._id}`}


                            className="text-reset"


                        >


                            {
                                portfolio.title
                            }


                        </Link>


                    </h5>









                    <p className="text-muted font-size-13">


                        {
                            portfolio.category
                        }


                    </p>









                    {/* TECHNOLOGIES */}


                    <div className="mt-3 mb-3">


                        <p className="text-muted mb-1">


                            Technologies


                        </p>





                        <div>


                            {
                                portfolio.technologies

                                    ?.slice(0, 3)

                                    .map(
                                        (tech, index) => (


                                            <span


                                                key={index}


                                                className="badge bg-light text-dark me-1"


                                            >


                                                {
                                                    tech
                                                }


                                            </span>


                                        )

                                    )

                            }


                        </div>


                    </div>









                    {/* STATUS */}


                    <ul className="list-inline mb-0 text-muted product-color">


                        <li className="list-inline-item">


                            Status :


                        </li>






                        <li className="list-inline-item">



                            <i


                                className={

                                    portfolio.status

                                        ?

                                        "bi bi-circle-fill text-success"

                                        :

                                        "bi bi-circle-fill text-danger"

                                }


                            ></i>





                            {
                                portfolio.status

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



export default PortfolioCard;