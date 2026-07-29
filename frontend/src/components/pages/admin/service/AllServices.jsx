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




// Components

import ServiceFilters from "./components/ServiceFilters";
import ServiceToolbar from "./components/ServiceToolbar";
import ServiceCard from "./components/ServiceCard";
import ServicePagination from "./components/ServicePagination";



// API

import {
    getServices,
    deleteService
} from "../../../../api/services.api";






const AllServices = () => {



    const [services, setServices] =
        useState([]);



    const [loading, setLoading] =
        useState(false);




    const [search, setSearch] =
        useState("");




    const [category, setCategory] =
        useState("All Categories");




    const [featured, setFeatured] =
        useState(false);




    const [selectedTechnologies, setSelectedTechnologies] =
        useState([]);




    const [status, setStatus] =
        useState(true);




    const [sort, setSort] =
        useState("newest");




    const [currentPage, setCurrentPage] =
        useState(1);




    const [totalPages, setTotalPages] =
        useState(1);




    const limit = 6;









    /*
    ==========================
        FETCH SERVICES
    ==========================
    */


    const fetchServices = async () => {


        try {


            setLoading(true);



            const response =
                await getServices(
                    currentPage,
                    limit
                );



            setServices(

                response.data.services || []

            );



            setTotalPages(

                response.data.pagination?.totalPages || 1

            );



        }
        catch (error) {


            console.log(error);



            toast.error(
                "Failed loading services"
            );


        }
        finally {


            setLoading(false);


        }


    };









    useEffect(() => {


        fetchServices();



        const interval = setInterval(() => {


            fetchServices();



        }, 5 * 60 * 1000);





        return () => {


            clearInterval(interval);


        };



    }, [currentPage]);









    /*
    ==========================
        FILTER DATA
    ==========================
    */


    const filteredServices = services.filter(

        service => {



            const matchSearch =

                service.title

                    ?.toLowerCase()

                    .includes(

                        search.toLowerCase()

                    );







            const matchCategory =


                category &&
                    category !== "All Categories"


                    ?


                    service.category === category


                    :


                    true;








            const matchFeatured =


                featured


                    ?


                    service.isFeatured


                    :


                    true;








            const matchStatus =


                service.status === status;








            const matchTechnologies =


                selectedTechnologies.length === 0


                    ?


                    true


                    :


                    selectedTechnologies.every(

                        tech =>

                            service.technologies

                                ?.includes(tech)

                    );








            return (

                matchSearch &&

                matchCategory &&

                matchFeatured &&

                matchTechnologies &&

                matchStatus

            );



        }

    );












    /*
    ==========================
        SORT DATA
    ==========================
    */


    const sortedServices = [

        ...filteredServices


    ].sort(


        (a, b) => {


            if (sort === "oldest") {


                return (

                    new Date(a.createdAt)

                    -

                    new Date(b.createdAt)

                );


            }





            if (sort === "newest") {


                return (

                    new Date(b.createdAt)

                    -

                    new Date(a.createdAt)

                );


            }







            if (sort === "featured") {


                return (

                    Number(b.isFeatured)

                    -

                    Number(a.isFeatured)

                );


            }




            return 0;


        }


    );









    /*
    ==========================
        DELETE SERVICE
    ==========================
    */


    const handleDelete = async (id) => {


        const confirmDelete =

            window.confirm(

                "Are you sure you want to delete this service?"

            );




        if (!confirmDelete)

            return;






        try {


            await deleteService(id);





            setServices(prev =>


                prev.filter(

                    item =>

                        item._id !== id

                )


            );





            toast.success(

                "Service deleted successfully"

            );



        }
        catch (error) {


            console.error(error);




            toast.error(

                "Failed deleting service"

            );



        }



    };









    return (


        <>


            <div className="page-content">


                <div className="container-fluid">








                    {/* PAGE TITLE */}



                    <div className="row">


                        <div className="col-12">


                            <div className="page-title-box d-flex align-items-center justify-content-between">


                                <h4 className="mb-0">

                                    Services

                                </h4>




                                <div className="page-title-right">


                                    <ol className="breadcrumb m-0">


                                        <li className="breadcrumb-item">


                                            <Link to="#">

                                                Services

                                            </Link>


                                        </li>



                                        <li className="breadcrumb-item active">


                                            All Services


                                        </li>



                                    </ol>



                                </div>



                            </div>


                        </div>


                    </div>












                    <div className="row">








                        <ServiceFilters


                            category={category}


                            setCategory={setCategory}



                            featured={featured}


                            setFeatured={setFeatured}




                            selectedTechnologies={selectedTechnologies}


                            setSelectedTechnologies={
                                setSelectedTechnologies
                            }



                            status={status}


                            setStatus={setStatus}



                        />












                        <div className="col-xl-9 col-lg-8">


                            <div className="card">


                                <div className="card-body">





                                    <ServiceToolbar


                                        search={search}


                                        setSearch={setSearch}



                                        sort={sort}


                                        setSort={setSort}



                                        category={category}



                                    />









                                    <div className="row">





                                        {

                                            loading


                                                ?



                                                (

                                                    <div className="text-center">

                                                        Loading services...

                                                    </div>


                                                )





                                                :





                                                sortedServices.length === 0



                                                    ?



                                                    (

                                                        <div className="text-center">

                                                            No services found

                                                        </div>


                                                    )





                                                    :





                                                    sortedServices.map(


                                                        service => (



                                                            <ServiceCard



                                                                key={service._id}




                                                                service={service}




                                                                handleDelete={
                                                                    handleDelete
                                                                }




                                                            />


                                                        )


                                                    )



                                        }





                                    </div>









                                    <ServicePagination



                                        currentPage={currentPage}



                                        totalPages={totalPages}



                                        setCurrentPage={setCurrentPage}



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




export default AllServices;