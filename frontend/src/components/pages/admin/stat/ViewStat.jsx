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
    getStatById
} from "../../../../api/stats.api";





const ViewStat = () => {



    const {
        id
    } = useParams();




    const [stat, setStat] =
        useState(null);



    const [loading, setLoading] =
        useState(true);









    /*
    ==========================
        FETCH STAT
    ==========================
    */


    const fetchStat = async () => {


        try {


            setLoading(true);



            const response =

                await getStatById(id);





            setStat(

                response.data.stat

            );



        }
        catch (error) {


            console.error(error);



            toast.error(
                "Failed loading stat"
            );


        }
        finally {


            setLoading(false);


        }


    };









    useEffect(() => {


        fetchStat();


    }, [id]);









    if (loading) {


        return (

            <div className="text-center p-5">

                Loading stat...

            </div>

        );


    }








    if (!stat) {


        return (

            <div className="text-center p-5">

                Stat not found

            </div>

        );


    }









    return (


        <div className="page-content">


            <div className="container-fluid">





                {/* PAGE TITLE */}


                <div className="row">


                    <div className="col-12">


                        <div className="page-title-box d-flex align-items-center justify-content-between">


                            <h4 className="mb-0">

                                Stat Details

                            </h4>




                            <div className="page-title-right">


                                <ol className="breadcrumb m-0">


                                    <li className="breadcrumb-item">


                                        <Link to="/admin/stat">

                                            Stats

                                        </Link>


                                    </li>



                                    <li className="breadcrumb-item active">

                                        View

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







                                    {/* STAT PREVIEW */}



                                    <div className="col-xl-5">


                                        <div className="border rounded p-4 text-center">



                                            <div className="avatar-lg mx-auto mb-4">


                                                <div className="avatar-title bg-primary-subtle rounded-circle text-primary font-size-32">


                                                    <i className={stat.icon}></i>


                                                </div>


                                            </div>






                                            <h1 className="mb-2">

                                                {stat.value}

                                            </h1>





                                            <h5 className="text-muted">

                                                {stat.label}

                                            </h5>





                                        </div>


                                    </div>














                                    {/* INFORMATION */}



                                    <div className="col-xl-7">


                                        <div className="border rounded p-4">


                                            <h5 className="mb-4">

                                                Stat Information

                                            </h5>






                                            <p>

                                                <strong>
                                                    Value:
                                                </strong>

                                                <br />

                                                {stat.value}

                                            </p>






                                            <p>

                                                <strong>
                                                    Label:
                                                </strong>

                                                <br />

                                                {stat.label}

                                            </p>







                                            <p>

                                                <strong>
                                                    Icon:
                                                </strong>

                                                <br />

                                                <code>
                                                    {stat.icon}
                                                </code>

                                            </p>







                                            <p>

                                                <strong>
                                                    Display Order:
                                                </strong>

                                                <br />

                                                {stat.order}

                                            </p>








                                            <p>

                                                <strong>
                                                    Created:
                                                </strong>

                                                <br />

                                                {
                                                    new Date(
                                                        stat.createdAt
                                                    )
                                                        .toLocaleString()
                                                }

                                            </p>






                                            <p>

                                                <strong>
                                                    Updated:
                                                </strong>

                                                <br />

                                                {
                                                    new Date(
                                                        stat.updatedAt
                                                    )
                                                        .toLocaleString()
                                                }

                                            </p>






                                            <div className="mt-4">


                                                <Link

                                                    to={`/admin/stats/${stat._id}/edit`}

                                                    className="btn btn-primary"

                                                >

                                                    Edit Stat

                                                </Link>


                                            </div>





                                        </div>


                                    </div>








                                </div>




                            </div>


                        </div>


                    </div>


                </div>






            </div>


        </div>


    );


};



export default ViewStat;