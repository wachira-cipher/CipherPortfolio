import React, {
    useEffect,
    useState
} from "react";


import {
    Link,
    useNavigate
} from "react-router-dom";


import {
    toast
} from "react-toastify";



// API

import {
    getResume,
    deleteResume
} from "../../../../api/resume.api";






const AllResume = () => {


    const navigate = useNavigate();



    const [resume, setResume] =
        useState(null);



    const [loading, setLoading] =
        useState(false);








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


            console.log(error);



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









    /*
    ==========================
        DELETE RESUME
    ==========================
    */


    const handleDelete = async () => {


        const confirmDelete =

            window.confirm(

                "Are you sure you want to delete resume?"

            );



        if (!confirmDelete)

            return;





        try {


            await deleteResume();



            setResume(null);



            toast.success(

                "Resume deleted successfully"

            );


        }
        catch (error) {


            console.log(error);



            toast.error(

                "Failed deleting resume"

            );


        }


    };









    return (


        <div className="page-content">


            <div className="container-fluid">





                {/* PAGE TITLE */}


                <div className="row">


                    <div className="col-12">


                        <div className="page-title-box d-flex align-items-center justify-content-between">


                            <h4 className="mb-0">

                                Resume

                            </h4>



                            <div className="page-title-right">


                                <ol className="breadcrumb m-0">


                                    <li className="breadcrumb-item">


                                        <Link to="#">

                                            Resume

                                        </Link>


                                    </li>


                                    <li className="breadcrumb-item active">

                                        All Resume

                                    </li>


                                </ol>


                            </div>



                        </div>


                    </div>


                </div>









                {
                    loading ?


                        (

                            <div className="text-center">

                                Loading resume...

                            </div>

                        )


                        :



                        !resume ?


                            (

                                <div className="card">


                                    <div className="card-body text-center">


                                        <h5>

                                            No Resume Found

                                        </h5>



                                        <Link

                                            to="/admin/resume/create"

                                            className="btn btn-primary mt-3"

                                        >

                                            <i className="bi bi-plus-circle"></i>

                                            Create Resume

                                        </Link>



                                    </div>


                                </div>


                            )



                            :





                            (

                                <div className="row">





                                    {/* EDUCATION */}


                                    <div className="col-lg-6">


                                        <div className="card">


                                            <div className="card-header d-flex justify-content-between">


                                                <h5 className="mb-0">

                                                    Education

                                                </h5>


                                                <i className="bi bi-mortarboard"></i>


                                            </div>




                                            <div className="card-body">


                                                {
                                                    resume.education?.map(
                                                        (item, index) => (

                                                            <div

                                                                key={index}

                                                                className="border rounded p-3 mb-3"

                                                            >


                                                                <h6>

                                                                    {item.title}

                                                                </h6>


                                                                <p className="mb-1 text-muted">

                                                                    {item.institution}

                                                                </p>


                                                                <span className="badge bg-primary-subtle text-primary">

                                                                    {item.period}

                                                                </span>


                                                                <p className="mt-2 mb-0">

                                                                    {item.description}

                                                                </p>


                                                            </div>


                                                        )
                                                    )
                                                }


                                            </div>


                                        </div>


                                    </div>









                                    {/* EXPERIENCE */}


                                    <div className="col-lg-6">


                                        <div className="card">


                                            <div className="card-header">


                                                <h5 className="mb-0">

                                                    Experience

                                                </h5>


                                            </div>





                                            <div className="card-body">


                                                {
                                                    resume.experience?.map(

                                                        (item, index) => (


                                                            <div

                                                                key={index}

                                                                className="border rounded p-3 mb-3"

                                                            >


                                                                <h6>

                                                                    {item.title}

                                                                </h6>



                                                                <p className="text-muted mb-1">

                                                                    {item.company}

                                                                </p>



                                                                <span className="badge bg-success-subtle text-success">

                                                                    {item.period}

                                                                </span>





                                                                <ul className="mt-3 mb-0">


                                                                    {
                                                                        item.responsibilities?.map(

                                                                            (resp, i) => (

                                                                                <li key={i}>

                                                                                    {resp}

                                                                                </li>

                                                                            )

                                                                        )
                                                                    }


                                                                </ul>



                                                            </div>


                                                        )

                                                    )
                                                }


                                            </div>


                                        </div>


                                    </div>









                                    {/* ACTIONS */}


                                    <div className="col-12">


                                        <div className="d-flex justify-content-end gap-2">


                                            <button

                                                className="btn btn-danger"

                                                onClick={handleDelete}

                                            >


                                                <i className="bi bi-trash"></i>

                                                Delete


                                            </button>





                                            <button

                                                className="btn btn-primary"

                                                onClick={() =>
                                                    navigate(
                                                        "/admin/resume/edit"
                                                    )
                                                }

                                            >

                                                <i className="bi bi-pencil"></i>

                                                Edit Resume


                                            </button>


                                        </div>


                                    </div>




                                </div>

                            )

                }




            </div>


        </div>


    );


};



export default AllResume;
