import React from "react";



const TestimonialDescription = ({
    testimonial
}) => {



    if (!testimonial) {


        return (

            <div className="text-center">

                Loading testimonial details...

            </div>

        );


    }









    return (


        <div className="mt-4">



            <h5 className="font-size-14 mb-3">

                Testimonial Details:

            </h5>









            <div className="product-desc">







                <ul

                    className="nav nav-tabs nav-tabs-custom"

                    role="tablist"

                >






                    {/* MESSAGE TAB */}


                    <li className="nav-item">


                        <a

                            className="nav-link active"

                            data-bs-toggle="tab"

                            href="#testimonial-message"

                            role="tab"

                        >

                            Message

                        </a>


                    </li>









                    {/* CLIENT TAB */}


                    <li className="nav-item">


                        <a

                            className="nav-link"

                            data-bs-toggle="tab"

                            href="#testimonial-client"

                            role="tab"

                        >

                            Client

                        </a>


                    </li>









                    {/* INFORMATION TAB */}


                    <li className="nav-item">


                        <a

                            className="nav-link"

                            data-bs-toggle="tab"

                            href="#testimonial-information"

                            role="tab"

                        >

                            Information

                        </a>


                    </li>






                </ul>













                <div className="tab-content border border-top-0 p-4">







                    {/* MESSAGE */}


                    <div

                        className="tab-pane fade show active"

                        id="testimonial-message"

                        role="tabpanel"

                    >



                        <div className="mb-4">





                            <h5 className="font-size-15">


                                <i className="bi bi-chat-left-text text-primary me-2"></i>


                                Client Feedback


                            </h5>







                            <div className="text-muted">





                                <p>

                                    {

                                        testimonial.message ||

                                        "No testimonial message available."

                                    }


                                </p>






                            </div>



                        </div>








                        {/* RATING */}



                        <div>


                            <h6 className="font-size-14">


                                Rating


                            </h6>





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





                            </div>



                        </div>





                    </div>














                    {/* CLIENT */}


                    <div

                        className="tab-pane fade"

                        id="testimonial-client"

                        role="tabpanel"

                    >





                        <div className="mb-4">





                            <h5 className="font-size-15">


                                <i className="bi bi-person text-primary me-2"></i>


                                Client Information


                            </h5>









                            <div className="text-muted">





                                <p className="mb-1">


                                    <strong>

                                        Name:

                                    </strong>


                                    {" "}


                                    {

                                        testimonial.name ||

                                        "N/A"

                                    }


                                </p>









                                <p className="mb-1">


                                    <strong>

                                        Position:

                                    </strong>


                                    {" "}


                                    {

                                        testimonial.position ||

                                        "N/A"

                                    }


                                </p>









                                <p>


                                    <strong>

                                        Company:

                                    </strong>


                                    {" "}


                                    {

                                        testimonial.company ||

                                        "N/A"

                                    }


                                </p>







                            </div>







                        </div>






                    </div>














                    {/* INFORMATION */}


                    <div

                        className="tab-pane fade"

                        id="testimonial-information"

                        role="tabpanel"

                    >




                        <div className="table-responsive">


                            <table className="table table-nowrap mb-0">


                                <tbody>





                                    <tr>


                                        <th width="25%">


                                            Rating


                                        </th>



                                        <td>


                                            {

                                                testimonial.rating || 0

                                            }


                                            /5


                                        </td>



                                    </tr>









                                    <tr>


                                        <th>


                                            Image


                                        </th>



                                        <td>


                                            {

                                                testimonial.image

                                                    ?

                                                    "Available"

                                                    :

                                                    "No Image"

                                            }


                                        </td>



                                    </tr>









                                    <tr>


                                        <th>


                                            Created


                                        </th>



                                        <td>


                                            {

                                                testimonial.createdAt

                                                    ?

                                                    new Date(
                                                        testimonial.createdAt
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

                                                testimonial.updatedAt

                                                    ?

                                                    new Date(
                                                        testimonial.updatedAt
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



export default TestimonialDescription;