import React, {
    useEffect,
    useState
} from "react";


import {
    toast
} from "react-toastify";


import {
    getContacts,
    deleteContact,
    updateContact
} from "../../../../api/contact.api";
import { Link } from "react-router-dom";




export default function AllContacts() {


    const [contacts, setContacts] = useState([]);

    const [loading, setLoading] = useState(true);

    const [search, setSearch] = useState("");

    const [selected, setSelected] = useState([]);




    /*
    ==========================
    FETCH CONTACTS
    ==========================
    */


    const fetchContacts = async () => {


        try {


            setLoading(true);


            const res = await getContacts();



            setContacts(
                res.data.contacts
            );



        }
        catch (error) {


            console.error(error);


            toast.error(
                "Failed loading contacts"
            );


        }
        finally {


            setLoading(false);


        }


    };







    useEffect(() => {


        fetchContacts();


    }, []);









    /*
    ==========================
    SELECT ALL
    ==========================
    */


    const toggleAll = () => {


        if (selected.length === contacts.length) {


            setSelected([]);


        }
        else {


            setSelected(
                contacts.map(
                    item => item._id
                )
            );


        }


    };







    const toggleOne = (id) => {


        setSelected(prev =>


            prev.includes(id)

                ?

                prev.filter(
                    item => item !== id
                )

                :

                [
                    ...prev,
                    id
                ]

        );


    };









    /*
    ==========================
    DELETE
    ==========================
    */


    const handleDelete = async (id) => {


        const confirmDelete =
            window.confirm(
                "Delete this message?"
            );


        if (!confirmDelete)
            return;



        try {


            await deleteContact(id);



            setContacts(prev =>

                prev.filter(
                    item => item._id !== id
                )

            );



            toast.success(
                "Contact deleted"
            );



        }
        catch (error) {


            toast.error(
                "Delete failed"
            );


        }


    };











    /*
    ==========================
    UPDATE STATUS
    ==========================
    */


    const markRead = async (id) => {


        try {


            await updateContact(

                id,

                {
                    status: "Read"
                }

            );



            setContacts(prev =>

                prev.map(item =>

                    item._id === id

                        ?

                        {
                            ...item,
                            status: "Read"
                        }

                        :

                        item

                )

            );


        }
        catch (error) {


            toast.error(
                "Status update failed"
            );


        }


    };











    const filteredContacts = contacts.filter(item =>


        item.name
            .toLowerCase()
            .includes(
                search.toLowerCase()
            )

        ||

        item.email
            .toLowerCase()
            .includes(
                search.toLowerCase()
            )

        ||

        item.subject
            .toLowerCase()
            .includes(
                search.toLowerCase()
            )


    );








    return (

        <div className="page-content">

            <div className="container-fluid">





                {/* PAGE TITLE */}


                <div className="row">

                    <div className="col-12">


                        <div className="page-title-box d-flex align-items-center justify-content-between">


                            <h4 className="mb-0">
                                Contacts
                            </h4>



                            <div className="page-title-right">

                                <ol className="breadcrumb m-0">

                                    <li className="breadcrumb-item">
                                        Portfolio
                                    </li>


                                    <li className="breadcrumb-item active">
                                        Messages
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





                                <div className="row mb-2">


                                    <div className="col-md-6">


                                        <h5>
                                            Visitor Messages
                                        </h5>


                                    </div>





                                    <div className="col-md-6">


                                        <div className="form-inline float-md-end mb-3">


                                            <div className="search-box ms-2">


                                                <div className="position-relative">


                                                    <input

                                                        type="text"

                                                        className="form-control rounded bg-light border-0"

                                                        placeholder="Search..."

                                                        value={search}

                                                        onChange={
                                                            e => setSearch(
                                                                e.target.value
                                                            )
                                                        }

                                                    />


                                                    <i className="bi bi-search search-icon"></i>


                                                </div>


                                            </div>


                                        </div>


                                    </div>


                                </div>










                                <div className="table-responsive mb-4">


                                    <table className="table table-centered table-nowrap mb-0">


                                        <thead>


                                            <tr>


                                                <th style={{
                                                    width: "50px"
                                                }}>


                                                    <div className="form-check font-size-16">


                                                        <input

                                                            type="checkbox"

                                                            className="form-check-input"

                                                            checked={
                                                                selected.length === contacts.length &&
                                                                contacts.length > 0
                                                            }

                                                            onChange={toggleAll}

                                                        />


                                                    </div>


                                                </th>



                                                <th>
                                                    Name
                                                </th>


                                                <th>
                                                    Subject
                                                </th>


                                                <th>
                                                    Email
                                                </th>


                                                <th>
                                                    Status
                                                </th>


                                                <th>
                                                    Action
                                                </th>



                                            </tr>


                                        </thead>






                                        <tbody>



                                            {
                                                loading

                                                    ?

                                                    <tr>

                                                        <td colSpan="6"
                                                            className="text-center">

                                                            Loading...

                                                        </td>

                                                    </tr>


                                                    :


                                                    filteredContacts.length === 0

                                                        ?

                                                        <tr>

                                                            <td colSpan="6"
                                                                className="text-center">

                                                                No messages found

                                                            </td>

                                                        </tr>



                                                        :

                                                        filteredContacts.map(contact => (



                                                            <tr key={contact._id}>


                                                                <th>


                                                                    <div className="form-check font-size-16">


                                                                        <input

                                                                            type="checkbox"

                                                                            className="form-check-input"

                                                                            checked={
                                                                                selected.includes(
                                                                                    contact._id
                                                                                )
                                                                            }

                                                                            onChange={() =>
                                                                                toggleOne(
                                                                                    contact._id
                                                                                )
                                                                            }

                                                                        />


                                                                    </div>


                                                                </th>







                                                                <td>


                                                                    <a href="#"
                                                                        className="text-body">


                                                                        {contact.name}


                                                                    </a>


                                                                </td>





                                                                <td>


                                                                    {contact.subject}


                                                                </td>





                                                                <td>


                                                                    {contact.email}


                                                                </td>







                                                                <td>


                                                                    {
                                                                        contact.status === "New"

                                                                            ?

                                                                            <span className="badge bg-primary">
                                                                                New
                                                                            </span>


                                                                            :

                                                                            contact.status === "Read"


                                                                                ?

                                                                                <span className="badge bg-warning">
                                                                                    Read
                                                                                </span>


                                                                                :

                                                                                <span className="badge bg-success">
                                                                                    {contact.status}
                                                                                </span>

                                                                    }



                                                                </td>









                                                                <td>


                                                                    <ul className="list-inline mb-0">


                                                                        <li className="list-inline-item">
                                                                            <Link
                                                                                to={`/admin/contact/${contact._id}`}
                                                                                className="px-2 text-primary"
                                                                            >
                                                                                <i className="uil uil-eye font-size-18"></i>
                                                                            </Link>


                                                                        </li>






                                                                        <li className="list-inline-item">


                                                                            <a
                                                                                href="#"
                                                                                className="px-2 text-danger"
                                                                                onClick={(e) => {

                                                                                    e.preventDefault();


                                                                                    const confirmed = window.confirm(
                                                                                        `Are you sure you want to delete the message from ${contact.name}?`
                                                                                    );


                                                                                    if (confirmed) {

                                                                                        handleDelete(
                                                                                            contact._id
                                                                                        );

                                                                                    }

                                                                                }}
                                                                            >
                                                                                <i className="uil uil-trash-alt font-size-18"></i>
                                                                            </a>


                                                                        </li>




                                                                    </ul>


                                                                </td>






                                                            </tr>



                                                        ))

                                            }





                                        </tbody>


                                    </table>


                                </div>








                                <div className="row mt-4">


                                    <div className="col-sm-6">


                                        <p className="mb-sm-0">

                                            Showing {filteredContacts.length} messages

                                        </p>


                                    </div>


                                </div>







                            </div>


                        </div>


                    </div>


                </div>









            </div>

        </div >




    );


}