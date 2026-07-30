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



import {
    getStats,
    deleteStat
} from "../../../../api/stats.api";







const AllStats = () => {


    const [stats, setStats] = useState([]);


    const [loading, setLoading] = useState(true);


    const [search, setSearch] = useState("");



    const [sort, setSort] = useState(
        "newest"
    );









    /*
    ==========================
        FETCH STATS
    ==========================
    */


    const fetchStats = async () => {


        try {


            setLoading(true);



            const response = await getStats();



            setStats(

                response.data.stats || []

            );



        }
        catch (error) {


            console.error(error);



            toast.error(
                "Failed loading stats"
            );


        }
        finally {


            setLoading(false);


        }


    };








    useEffect(() => {


        fetchStats();


    }, []);












    /*
    ==========================
        DELETE STAT
    ==========================
    */


    const handleDelete = async (id) => {



        const confirmDelete = window.confirm(

            "Are you sure you want to delete this stat?"

        );



        if (!confirmDelete)
            return;





        try {


            await deleteStat(id);



            setStats(prev =>

                prev.filter(

                    item => item._id !== id

                )

            );



            toast.success(

                "Stat deleted successfully"

            );


        }
        catch (error) {


            console.error(error);



            toast.error(

                "Failed deleting stat"

            );


        }



    };









    /*
    ==========================
        SEARCH
    ==========================
    */


    const filteredStats = stats.filter(stat => {


        return (

            stat.value
                ?.toLowerCase()
                .includes(
                    search.toLowerCase()
                )


            ||

            stat.label
                ?.toLowerCase()
                .includes(
                    search.toLowerCase()
                )


            ||

            stat.icon
                ?.toLowerCase()
                .includes(
                    search.toLowerCase()
                )

        );


    });









    /*
    ==========================
        SORT
    ==========================
    */


    const sortedStats = [

        ...filteredStats

    ].sort((a, b) => {


        if (sort === "oldest") {


            return (

                new Date(a.createdAt)

                -

                new Date(b.createdAt)

            );


        }





        if (sort === "order") {


            return (

                a.order

                -

                b.order

            );


        }





        return (

            new Date(b.createdAt)

            -

            new Date(a.createdAt)

        );


    });













    return (


        <div className="page-content">


            <div className="container-fluid">







                {/* TITLE */}


                <div className="row">


                    <div className="col-12">


                        <div className="page-title-box d-flex align-items-center justify-content-between">


                            <h4 className="mb-0">

                                Stats

                            </h4>



                            <div className="page-title-right">


                                <ol className="breadcrumb m-0">


                                    <li className="breadcrumb-item">

                                        Portfolio

                                    </li>


                                    <li className="breadcrumb-item active">

                                        All Stats

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





                                <div className="row mb-3">


                                    <div className="col-md-6">


                                        <Link

                                            to="/admin/stats/create"

                                            className="btn btn-success"

                                        >

                                            <i className="bi bi-plus me-2"></i>

                                            Add Stat

                                        </Link>


                                    </div>





                                    <div className="col-md-6">


                                        <div className="float-md-end d-flex gap-2">


                                            <input

                                                type="text"

                                                className="form-control"

                                                placeholder="Search..."

                                                value={search}

                                                onChange={
                                                    e =>
                                                        setSearch(
                                                            e.target.value
                                                        )
                                                }

                                            />



                                            <select

                                                className="form-select"

                                                value={sort}

                                                onChange={
                                                    e =>
                                                        setSort(
                                                            e.target.value
                                                        )
                                                }

                                            >

                                                <option value="newest">

                                                    Newest

                                                </option>


                                                <option value="oldest">

                                                    Oldest

                                                </option>


                                                <option value="order">

                                                    Order

                                                </option>


                                            </select>



                                        </div>


                                    </div>



                                </div>












                                <div className="table-responsive">


                                    <table className="table table-centered table-nowrap">


                                        <thead>


                                            <tr>


                                                <th>

                                                    Icon

                                                </th>


                                                <th>

                                                    Value

                                                </th>


                                                <th>

                                                    Label

                                                </th>


                                                <th>

                                                    Order

                                                </th>


                                                <th>

                                                    Created

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

                                                        <td
                                                            colSpan="6"
                                                            className="text-center"
                                                        >

                                                            Loading stats...

                                                        </td>

                                                    </tr>


                                                    :


                                                    sortedStats.length === 0


                                                        ?


                                                        <tr>

                                                            <td
                                                                colSpan="6"
                                                                className="text-center"
                                                            >

                                                                No stats found

                                                            </td>

                                                        </tr>


                                                        :



                                                        sortedStats.map(stat => (


                                                            <tr key={stat._id}>


                                                                <td>


                                                                    <i className={`${stat.icon} font-size-20 text-primary`}></i>


                                                                </td>



                                                                <td>

                                                                    <strong>

                                                                        {stat.value}

                                                                    </strong>

                                                                </td>



                                                                <td>

                                                                    {stat.label}

                                                                </td>




                                                                <td>

                                                                    {stat.order}

                                                                </td>




                                                                <td>

                                                                    {
                                                                        new Date(
                                                                            stat.createdAt
                                                                        )
                                                                            .toLocaleDateString()
                                                                    }

                                                                </td>




                                                                <td>


                                                                    <Link

                                                                        to={`/admin/stats/${stat._id}`}

                                                                        className="px-2 text-primary"

                                                                    >

                                                                        <i className="uil uil-eye font-size-18"></i>

                                                                    </Link>





                                                                    <Link

                                                                        to={`/admin/stats/${stat._id}/edit`}

                                                                        className="px-2 text-success"

                                                                    >

                                                                        <i className="uil uil-pen font-size-18"></i>

                                                                    </Link>





                                                                    <a

                                                                        href="#"

                                                                        className="px-2 text-danger"

                                                                        onClick={
                                                                            e => {

                                                                                e.preventDefault();

                                                                                handleDelete(
                                                                                    stat._id
                                                                                );

                                                                            }
                                                                        }

                                                                    >

                                                                        <i className="uil uil-trash-alt font-size-18"></i>


                                                                    </a>



                                                                </td>


                                                            </tr>


                                                        ))


                                            }



                                        </tbody>


                                    </table>


                                </div>







                            </div>


                        </div>


                    </div>


                </div>






            </div>


        </div>


    );


};



export default AllStats;