import React, {
    useEffect,
    useState
} from "react";


import {
    Link,
    useParams,
    useNavigate
} from "react-router-dom";


import {
    toast
} from "react-toastify";



// API

import {
    getContactById,
    updateContact
} from "../../../../api/contact.api";





const ViewContact = () => {



    const {
        id
    } = useParams();



    const navigate = useNavigate();




    const [contact, setContact] =
        useState(null);



    const [loading, setLoading] =
        useState(true);









    /*
    ==========================
    FETCH CONTACT
    ==========================
    */


    const fetchContact = async () => {


        try {


            setLoading(true);



            const response =
                await getContactById(id);




            setContact(
                response.data.contact
            );




        }
        catch (error) {


            console.error(error);


            toast.error(
                "Failed loading contact"
            );


        }
        finally {


            setLoading(false);


        }


    };








    useEffect(() => {


        fetchContact();


    }, []);











    /*
    ==========================
    UPDATE STATUS
    ==========================
    */


    const changeStatus = async (status) => {


        try {


            const response =

                await updateContact(

                    id,

                    {
                        status
                    }

                );



            setContact(
                response.data.contact
            );



            toast.success(
                "Status updated"
            );



        }
        catch (error) {


            toast.error(
                "Failed updating status"
            );


        }


    };












    if (loading) {


        return (

            <div className="text-center p-5">

                Loading contact...

            </div>

        );


    }









    if (!contact) {


        return (

            <div className="text-center p-5">

                Contact not found

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

                                Contact Details

                            </h4>





                            <div className="page-title-right">


                                <ol className="breadcrumb m-0">


                                    <li className="breadcrumb-item">


                                        <Link to="/admin/contact">

                                            Contacts

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







                                    {/* CONTACT INFO */}


                                    <div className="col-xl-5">


                                        <div className="border rounded p-4">


                                            <h5 className="mb-4">

                                                Sender Information

                                            </h5>





                                            <p>

                                                <strong>Name:</strong>

                                                <br />

                                                {contact.name}

                                            </p>





                                            <p>

                                                <strong>Email:</strong>

                                                <br />

                                                <a href={`mailto:${contact.email}`}>

                                                    {contact.email}

                                                </a>

                                            </p>





                                            <p>

                                                <strong>Subject:</strong>

                                                <br />

                                                {contact.subject}

                                            </p>





                                            <p>

                                                <strong>Date:</strong>

                                                <br />

                                                {
                                                    new Date(
                                                        contact.createdAt
                                                    )
                                                        .toLocaleString()
                                                }

                                            </p>





                                            <p>


                                                <strong>Status:</strong>


                                                <br />


                                                {
                                                    contact.status
                                                }


                                            </p>








                                            <div className="mt-4">


                                                <button

                                                    className="btn btn-warning me-2"

                                                    onClick={() =>
                                                        changeStatus(
                                                            "Read"
                                                        )
                                                    }

                                                >

                                                    Mark Read

                                                </button>





                                                <button

                                                    className="btn btn-success"

                                                    onClick={() =>
                                                        changeStatus(
                                                            "Replied"
                                                        )
                                                    }

                                                >

                                                    Replied

                                                </button>


                                            </div>





                                        </div>


                                    </div>















                                    {/* MESSAGE */}



                                    <div className="col-xl-7">


                                        <div className="border rounded p-4">


                                            <h5 className="mb-4">

                                                Message

                                            </h5>





                                            <div className="bg-light rounded p-4">


                                                {
                                                    contact.message
                                                }


                                            </div>






                                            <div className="mt-4">


                                                <a

                                                    href={`mailto:${contact.email}?subject=Re:${contact.subject}`}

                                                    className="btn btn-primary"

                                                >

                                                    Reply Email

                                                </a>


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




export default ViewContact;