import React, {
    useEffect,
    useState
} from "react";


import {
    Link,
    useParams
} from "react-router-dom";


import {
    toast
} from "react-toastify";



// API

import { getTestimonialById } from "../../../../api/testimonials.api";



// Components

import TestimonialGallery from "./components/TestimonialGallery";

import TestimonialInformation from "./components/TestimonialInformation";

import TestimonialDescription from "./components/TestimonialDescription";









const ViewTestimonial = () => {



    const {
        id
    } = useParams();





    const [testimonial, setTestimonial] =
        useState(null);




    const [loading, setLoading] =
        useState(true);









    /*
    ==========================
        FETCH TESTIMONIAL
    ==========================
    */


    const fetchTestimonial = async () => {


        try {


            setLoading(true);



            const response =

                await getTestimonialById(id);





            setTestimonial(

                response.data.testimonial

            );



        }
        catch (error) {


            console.error(error);



            toast.error(

                "Failed loading testimonial"

            );


        }
        finally {


            setLoading(false);


        }


    };









    useEffect(() => {


        fetchTestimonial();


    }, [id]);












    if (loading) {


        return (

            <div className="text-center p-5">

                Loading testimonial...

            </div>

        );


    }









    if (!testimonial) {


        return (

            <div className="text-center p-5">

                Testimonial not found

            </div>

        );


    }












    return (


        <>


            <div className="page-content">


                <div className="container-fluid">







                    {/* PAGE TITLE */}



                    <div className="row">


                        <div className="col-12">


                            <div className="page-title-box d-flex align-items-center justify-content-between">



                                <h4 className="mb-0">

                                    Testimonial Detail

                                </h4>








                                <div className="page-title-right">


                                    <ol className="breadcrumb m-0">


                                        <li className="breadcrumb-item">


                                            <Link to="/admin/testimonial">

                                                Testimonials

                                            </Link>


                                        </li>






                                        <li className="breadcrumb-item active">


                                            Details


                                        </li>



                                    </ol>


                                </div>



                            </div>


                        </div>


                    </div>













                    <div className="row">


                        <div className="col-lg-12">


                            <div className="card">


                                <div className="card-body">








                                    <div className="row">







                                        {/* IMAGE */}



                                        <div className="col-xl-5">


                                            <div className="product-detail">


                                                <TestimonialGallery

                                                    testimonial={
                                                        testimonial
                                                    }

                                                />


                                            </div>


                                        </div>














                                        {/* INFORMATION */}



                                        <div className="col-xl-7">


                                            <div className="mt-4 mt-xl-3 ps-xl-4">


                                                <TestimonialInformation

                                                    testimonial={
                                                        testimonial
                                                    }

                                                />


                                            </div>


                                        </div>





                                    </div>














                                    {/* MESSAGE */}



                                    <TestimonialDescription

                                        testimonial={
                                            testimonial
                                        }

                                    />









                                </div>


                            </div>


                        </div>


                    </div>







                </div>


            </div>


        </>


    );


};




export default ViewTestimonial;