import React from "react";


import {
    Link
} from "react-router-dom";


import {
    getImageUrl
} from "../../../../../utils/imageUrl";





const TestimonialCard = ({
    testimonial,
    handleDelete
}) => {



    const image =

        testimonial?.image

            ?

            getImageUrl(
                `uploads/${testimonial.image}`
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





                    {/* ACTION BUTTONS */}


                    <div className="product-wishlist">





                        {/* VIEW */}


                        <Link


                            to={`/admin/testimonial/${testimonial._id}`}


                            className="btn btn-light btn-sm"


                            title="View Testimonial"


                        >


                            <i className="bi bi-eye-fill"></i>


                        </Link>









                        {/* DELETE */}



                        <button


                            type="button"


                            className="btn btn-light btn-sm"


                            title="Delete Testimonial"


                            onClick={() =>

                                handleDelete(
                                    testimonial._id
                                )

                            }


                        >


                            <i className="bi bi-trash-fill"></i>


                        </button>





                    </div>









                    <img



                        src={image}



                        alt={
                            testimonial.name
                        }



                        className="img-fluid mx-auto d-block rounded-circle"




                        style={{

                            width: "120px",

                            height: "120px",

                            objectFit: "cover"

                        }}




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


                            to={`/admin/testimonial/${testimonial._id}`}


                            className="text-reset"


                        >


                            {
                                testimonial.name
                            }


                        </Link>



                    </h5>









                    <p className="text-muted font-size-13 mb-1">


                        {
                            testimonial.position
                        }


                    </p>







                    <p className="text-muted font-size-13">


                        {
                            testimonial.company
                        }


                    </p>









                    {/* RATING */}



                    <div className="mb-3">


                        {

                            [...Array(5)]

                                .map((_, index) => (


                                    <i

                                        key={index}

                                        className={

                                            index < testimonial.rating

                                                ?

                                                "bi bi-star-fill text-warning"

                                                :

                                                "bi bi-star text-muted"

                                        }

                                    ></i>


                                ))

                        }



                    </div>









                    {/* MESSAGE */}



                    <p className="text-muted font-size-13">


                        {

                            testimonial.message?.length > 120

                                ?

                                testimonial.message.substring(
                                    0,
                                    120
                                ) + "..."

                                :

                                testimonial.message


                        }


                    </p>









                    {/* INFO */}



                    <ul className="list-inline mb-0 text-muted product-color">


                        <li className="list-inline-item">


                            Created :


                        </li>





                        <li className="list-inline-item">


                            {

                                testimonial.createdAt

                                    ?

                                    new Date(
                                        testimonial.createdAt
                                    ).toLocaleDateString()

                                    :

                                    "N/A"

                            }



                        </li>



                    </ul>







                </div>







            </div>




        </div>


    );


};



export default TestimonialCard;