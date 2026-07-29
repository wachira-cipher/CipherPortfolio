import React from "react";

import {
    Link
} from "react-router-dom";


import {
    getImageUrl
} from "../../../../../utils/imageUrl";





const ServiceCard = ({
    service,
    handleDelete
}) => {



    const image =

        service?.images?.length > 0

            ?

            getImageUrl(
                service.images[0]
            )

            :

            getImageUrl(
                "uploads/default.jpg"
            );






    return (


        <div className="col-xl-4 col-sm-6">


            <div className="product-box portfolio-box">





                {/* IMAGE AREA */}


                <div className="product-img pt-4 px-4">







                    {
                        service.isFeatured && (


                            <div className="product-ribbon badge bg-warning">


                                Featured


                            </div>


                        )

                    }









                    {/* ACTION BUTTONS */}


                    <div className="product-wishlist">



                        {/* VIEW */}


                        <Link

                            to={`/admin/service/${service._id}`}

                            className="btn btn-light btn-sm"

                            title="View Service"

                        >


                            <i className="bi bi-eye-fill"></i>


                        </Link>









                        {/* DELETE */}


                        <button

                            type="button"

                            className="btn btn-light btn-sm"

                            title="Delete Service"

                            onClick={() =>
                                handleDelete(service._id)
                            }

                        >


                            <i className="bi bi-trash-fill"></i>


                        </button>





                    </div>









                    <img


                        src={image}


                        alt={
                            service.title
                        }


                        className="img-fluid mx-auto d-block"




                        onError={(e) => {


                            e.target.src =
                                getImageUrl(
                                    "uploads/default.jpg"
                                );


                        }}



                    />




                </div>









                {/* CONTENT */}


                <div className="text-center product-content p-4">







                    <h5 className="mb-1">


                        <Link


                            to={`/admin/service/view/${service._id}`}


                            className="text-reset"


                        >


                            {
                                service.title
                            }


                        </Link>


                    </h5>









                    <p className="text-muted font-size-13">


                        {
                            service.category
                        }


                    </p>









                    {/* ICON */}


                    <div className="mb-3">


                        <i

                            className={
                                `${service.icon} display-5 text-primary`
                            }

                        ></i>


                    </div>









                    {/* DESCRIPTION */}


                    <p className="text-muted font-size-13">


                        {
                            service.shortDescription
                        }


                    </p>









                    {/* FEATURES */}


                    <div className="mt-3 mb-3">


                        <p className="text-muted mb-1">


                            Features


                        </p>





                        <div>


                            {
                                service.features

                                    ?.slice(0, 3)

                                    .map(
                                        (feature, index) => (


                                            <span


                                                key={index}


                                                className="badge bg-light text-dark me-1"


                                            >


                                                {
                                                    feature
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

                                    service.status

                                        ?

                                        "bi bi-circle-fill text-success"

                                        :

                                        "bi bi-circle-fill text-danger"

                                }


                            ></i>





                            {
                                service.status

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



export default ServiceCard;