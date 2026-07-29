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

import {
    getServiceById
} from "../../../../api/services.api";



// Components

import ServiceGallery from "./components/ServiceGallery";
import ServiceInformation from "./components/ServiceInformation";
import ServiceDescription from "./components/ServiceDescription";
//import ServiceSpecifications from "./components/ServiceSpecifications";
//import ServiceReviews from "./components/ServiceReviews";







const ViewService = () => {



    const {
        id
    } = useParams();




    const [service, setService] =
        useState(null);



    const [loading, setLoading] =
        useState(true);








    /*
    ==========================
        FETCH SERVICE
    ==========================
    */


    const fetchService = async () => {


        try {


            setLoading(true);



            const response =

                await getServiceById(id);





            setService(

                response.data.service

            );



        }
        catch (error) {


            console.error(error);



            toast.error(

                "Failed loading service"

            );


        }
        finally {


            setLoading(false);


        }


    };








    useEffect(() => {


        if (id) {


            fetchService();


        }


    }, [id]);













    if (loading) {


        return (

            <div className="text-center p-5">

                Loading service...

            </div>

        );


    }









    if (!service) {


        return (

            <div className="text-center p-5">


                Service not found


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

                                    Service Detail

                                </h4>







                                <div className="page-title-right">


                                    <ol className="breadcrumb m-0">


                                        <li className="breadcrumb-item">


                                            <Link to="/admin/service">

                                                Services

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








                                        {/* GALLERY */}


                                        <div className="col-xl-5">


                                            <div className="product-detail">


                                                <ServiceGallery

                                                    service={
                                                        service
                                                    }

                                                />


                                            </div>


                                        </div>














                                        {/* INFORMATION */}


                                        <div className="col-xl-7">


                                            <div className="mt-4 mt-xl-3 ps-xl-4">


                                                <ServiceInformation

                                                    service={
                                                        service
                                                    }

                                                />


                                            </div>


                                        </div>





                                    </div>















                                    {/* DESCRIPTION */}



                                    <ServiceDescription

                                        service={
                                            service
                                        }

                                    />












                                    {/* SPECIFICATIONS */}



                                    {/*
                                    
                                    <ServiceSpecifications

                                        service={
                                            service
                                        }

                                    />

                                    */}





                                    {/* REVIEWS */}



                                    {/*
                                    
                                    <ServiceReviews

                                        service={
                                            service
                                        }

                                    />

                                    */}





                                </div>


                            </div>


                        </div>


                    </div>







                </div>


            </div>


        </>


    );


};





export default ViewService;