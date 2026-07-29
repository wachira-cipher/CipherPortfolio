import React from "react";



const TestimonialInformation = ({
    testimonial
}) => {



    if (!testimonial) {


        return (

            <div className="text-center">

                Loading testimonial...

            </div>

        );


    }








    return (

        <>






            {/* HEADER */}


            <h5 className="font-size-14">


                <span className="text-muted">


                    <i className="bi bi-chat-quote me-2"></i>


                    Testimonial


                </span>


            </h5>









            <h4 className="font-size-20 mb-4">


                Client Feedback


            </h4>









            {/* CLIENT INFORMATION */}


            <div className="mt-4">


                <h5 className="font-size-14 mb-3">


                    <i className="bi bi-person-circle text-primary me-2"></i>


                    Client Information


                </h5>








                <div className="mb-4">





                    <h6 className="mb-1">


                        {testimonial.name}


                    </h6>







                    {
                        testimonial.position && (


                            <p className="text-muted mb-1">


                                <i className="bi bi-person-badge me-1"></i>


                                {testimonial.position}


                            </p>


                        )
                    }








                    {
                        testimonial.company && (


                            <p className="text-muted mb-1">


                                <i className="bi bi-building me-1"></i>


                                {testimonial.company}


                            </p>


                        )
                    }







                </div>



            </div>









            {/* RATING */}


            <div className="mt-4">


                <h5 className="font-size-14 mb-3">


                    <i className="bi bi-star-fill text-warning me-2"></i>


                    Client Rating


                </h5>







                <div>


                    {
                        [...Array(5)].map(

                            (_, index) => (


                                <i

                                    key={index}

                                    className={

                                        `bi bi-star-fill me-1 ${index < testimonial.rating

                                            ?

                                            "text-warning"

                                            :

                                            "text-muted"

                                        }`

                                    }

                                ></i>


                            )

                        )

                    }





                    <span className="text-muted ms-2">


                        ({testimonial.rating}/5)


                    </span>


                </div>




            </div>









            {/* MESSAGE */}


            <div className="mt-5">


                <h5 className="font-size-14 mb-3">


                    <i className="bi bi-chat-left-text text-primary me-2"></i>


                    Testimonial Message


                </h5>







                <div className="border rounded p-3 bg-light">


                    <p className="text-muted mb-0">


                        {testimonial.message}


                    </p>


                </div>




            </div>









            {/* TESTIMONIAL INFORMATION */}


            <div className="mt-4">


                <h5 className="font-size-14 mb-3">


                    <i className="bi bi-info-circle text-primary me-2"></i>


                    Testimonial Information


                </h5>








                <div className="d-flex gap-2 flex-wrap">





                    <span className="badge bg-success p-2">


                        <i className="bi bi-check-circle me-1"></i>


                        Published Testimonial


                    </span>








                    <span className="badge bg-light text-dark p-2">


                        <i className="bi bi-star me-1"></i>


                        {

                            testimonial.rating

                        }

                        {" "}Star Rating


                    </span>








                    <span className="badge bg-light text-dark p-2">


                        <i className="bi bi-calendar me-1"></i>


                        {

                            new Date(
                                testimonial.createdAt
                            ).toLocaleDateString()

                        }


                    </span>




                </div>




            </div>







        </>


    );


};





export default TestimonialInformation;