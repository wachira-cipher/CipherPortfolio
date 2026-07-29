import React from "react";

import {
    Link
} from "react-router-dom";

import {
    getImageUrl
} from "../../../../../utils/imageUrl";





const TestimonialGallery = ({
    testimonial
}) => {



    const images = [

        getImageUrl("uploads/testimonial1.jpeg"),

        getImageUrl("uploads/testimonial2.jpeg"),

        getImageUrl("uploads/testimonial3.jpeg"),

        getImageUrl("uploads/testimonial4.jpeg"),

        getImageUrl("uploads/testimonial5.png")


    ];








    return (


        <div className="row">






            {/* THUMBNAILS */}



            <div className="col-3">


                <div

                    className="nav flex-column nav-pills"

                    id="testimonial-tab"

                    role="tablist"

                    aria-orientation="vertical"

                >



                    {
                        images.map(

                            (image, index) => (



                                <a


                                    key={index}


                                    className={`nav-link ${index === 0

                                        ?

                                        "active"

                                        :

                                        ""

                                        }`}


                                    id={`testimonial-${index}-tab`}


                                    data-bs-toggle="pill"


                                    href={`#testimonial-${index}`}


                                    role="tab"


                                >




                                    <img


                                        src={image}


                                        alt={`Testimonial Preview ${index + 1}`}


                                        className="img-fluid mx-auto d-block tab-img rounded"



                                        onError={(e) => {


                                            e.target.style.display =
                                                "none";


                                        }}



                                    />




                                </a>



                            )


                        )
                    }




                </div>



            </div>













            {/* MAIN IMAGE */}



            <div className="col-9">



                <div

                    className="tab-content position-relative"

                    id="testimonial-tabContent"

                >







                    {/* VIEW BUTTON */}



                    <div className="product-wishlist">


                        <Link to="/admin/testimonial">


                            <i className="bi bi-eye-fill"></i>


                        </Link>


                    </div>









                    {
                        images.map(

                            (image, index) => (



                                <div



                                    key={index}



                                    className={`tab-pane fade ${index === 0

                                        ?

                                        "show active"

                                        :

                                        ""

                                        }`}



                                    id={`testimonial-${index}`}


                                    role="tabpanel"



                                >





                                    <div className="product-img">





                                        <img



                                            src={image}



                                            alt={`Testimonial Preview ${index + 1}`}



                                            className="img-fluid mx-auto d-block"




                                            onError={(e) => {


                                                e.target.style.display =
                                                    "none";


                                            }}



                                        />





                                    </div>





                                </div>



                            )


                        )
                    }





                </div>













                {/* ACTION BUTTONS */}




                <div className="row text-center mt-2">





                    <div className="col-sm-6">


                        <div className="d-grid">


                            <Link


                                to="/admin/testimonial/create"


                                className="btn btn-primary waves-effect waves-light mt-2 me-1"



                            >



                                <i className="bi bi-plus-circle me-2"></i>


                                Add Testimonial



                            </Link>



                        </div>


                    </div>













                    <div className="col-sm-6">


                        <div className="d-grid">



                            <Link



                                to={`/admin/testimonial/${testimonial._id}/edit`}



                                className="btn btn-light waves-effect mt-2 waves-light"



                            >




                                <i className="bi bi-pencil-square me-2"></i>


                                Edit Testimonial




                            </Link>



                        </div>


                    </div>







                </div>







            </div>






        </div>


    );


};




export default TestimonialGallery;