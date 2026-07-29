import React, {
    useEffect,
    useState
} from "react";


import {
    Link
} from "react-router-dom";


import {
    toast
} from "react-toastify";



// API

import {
    getResume
} from "../../../../api/resume.api";



// Components

import ResumeGallery from "./components/ResumeGallery";

import ResumeInformation from "./components/ResumeInformation";

import ResumeDescription from "./components/ResumeDescription";








const ViewResume = () => {



    const [resume, setResume] =
        useState(null);



    const [loading, setLoading] =
        useState(true);









    /*
    ==========================
        FETCH RESUME
    ==========================
    */


    const fetchResume = async () => {


        try {


            setLoading(true);



            const response =

                await getResume();





            setResume(

                response.data.resume

            );



        }
        catch (error) {


            console.error(error);



            toast.error(

                "Failed loading resume"

            );


        }
        finally {


            setLoading(false);


        }


    };









    useEffect(() => {


        fetchResume();


    }, []);













    if (loading) {


        return (

            <div className="text-center p-5">

                Loading resume...

            </div>

        );


    }









    if (!resume) {


        return (

            <div className="text-center p-5">


                Resume not found


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

                                    Resume Detail

                                </h4>







                                <div className="page-title-right">


                                    <ol className="breadcrumb m-0">


                                        <li className="breadcrumb-item">


                                            <Link to="/admin/resume">

                                                Resume

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


                                                <ResumeGallery

                                                    resume={
                                                        resume
                                                    }

                                                />


                                            </div>


                                        </div>














                                        {/* INFORMATION */}



                                        <div className="col-xl-7">


                                            <div className="mt-4 mt-xl-3 ps-xl-4">


                                                <ResumeInformation

                                                    resume={
                                                        resume
                                                    }

                                                />


                                            </div>


                                        </div>





                                    </div>















                                    {/* RESUME DESCRIPTION */}



                                    <ResumeDescription

                                        resume={
                                            resume
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





export default ViewResume;