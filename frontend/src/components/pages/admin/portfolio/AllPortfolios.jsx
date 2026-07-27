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

import PortfolioFilters from "./components/PortfolioFilters";
import PortfolioToolbar from "./components/PortfolioToolbar";
import PortfolioCard from "./components/PortfolioCard";
import PortfolioPagination from "./components/PortfolioPagination";



// API

import {
    getPortfolios,
    deletePortfolio
} from "../../../../api/portfolio.api";





const AllPortfolios = () => {


    const [portfolios, setPortfolios] = useState([]);


    const [loading, setLoading] = useState(false);


    const [search, setSearch] = useState("");


    const [category, setCategory] = useState("All Categories");


    const [featured, setFeatured] = useState(false);


    const [selectedTechnologies, setSelectedTechnologies] = useState([]);


    const [status, setStatus] = useState(true);


    // FIXED
    const [sort, setSort] = useState("newest");


    const [currentPage, setCurrentPage] = useState(1);


    const [totalPages, setTotalPages] = useState(1);


    const limit = 6;









    /*
    ==========================
    FETCH PORTFOLIOS
    ==========================
    */


    const fetchPortfolios = async () => {

        try {

            setLoading(true);


            const response =
                await getPortfolios(
                    currentPage,
                    limit
                );


            setPortfolios(
                response.data.portfolios || []
            );


            setTotalPages(
                response.data.pagination?.totalPages || 1
            );


        }
        catch (error) {

            console.log(error);


            toast.error(
                "Failed loading portfolios"
            );

        }
        finally {

            setLoading(false);

        }

    };









    useEffect(() => {


        fetchPortfolios();



        const interval = setInterval(() => {


            fetchPortfolios();


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


    const filteredPortfolios = portfolios.filter(

        portfolio => {


            const matchSearch =

                portfolio.title

                    ?.toLowerCase()

                    .includes(
                        search.toLowerCase()
                    );





            const matchCategory =

                category && category !== "All Categories"

                    ?

                    portfolio.category === category

                    :

                    true;





            const matchFeatured =

                featured

                    ?

                    portfolio.isFeatured

                    :

                    true;





            const matchStatus =

                portfolio.status === status;



            const matchTechnologies =

                selectedTechnologies.length === 0

                    ?

                    true

                    :

                    selectedTechnologies.every(
                        tech =>
                            portfolio.technologies?.includes(tech)
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


    const sortedPortfolios = [

        ...filteredPortfolios

    ].sort(

        (a, b) => {


            /*
            Popularity button
            currently mapped to oldest
            */

            if (sort === "oldest") {


                return (

                    new Date(a.createdAt)

                    -

                    new Date(b.createdAt)

                );

            }





            /*
            Newest projects
            */


            if (sort === "newest") {


                return (

                    new Date(b.createdAt)

                    -

                    new Date(a.createdAt)

                );

            }





            /*
            Featured first
            */


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


    const handleDelete = async (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this portfolio?"
        );


        if (!confirmDelete) return;


        try {

            await deletePortfolio(id);


            setPortfolios(prev =>
                prev.filter(
                    item => item._id !== id
                )
            );


            toast.success(
                "Portfolio deleted successfully"
            );


        } catch (error) {


            console.error(error);


            toast.error(
                "Failed deleting portfolio"
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

                                    Portfolios

                                </h4>




                                <div className="page-title-right">


                                    <ol className="breadcrumb m-0">


                                        <li className="breadcrumb-item">

                                            <Link to="#">

                                                Portfolio

                                            </Link>

                                        </li>



                                        <li className="breadcrumb-item active">

                                            Portfolios

                                        </li>


                                    </ol>


                                </div>


                            </div>


                        </div>


                    </div>









                    <div className="row">



                        <PortfolioFilters

                            category={category}

                            setCategory={setCategory}


                            featured={featured}

                            setFeatured={setFeatured}


                            selectedTechnologies={selectedTechnologies}

                            setSelectedTechnologies={setSelectedTechnologies}


                            status={status}

                            setStatus={setStatus}

                        />









                        <div className="col-xl-9 col-lg-8">


                            <div className="card">


                                <div className="card-body">



                                    <PortfolioToolbar


                                        search={search}

                                        setSearch={setSearch}


                                        sort={sort}

                                        setSort={setSort}


                                        category={category}


                                    />









                                    <div className="row">


                                        {

                                            loading ?


                                                (

                                                    <div className="text-center">

                                                        Loading portfolios...

                                                    </div>

                                                )


                                                :


                                                sortedPortfolios.length === 0


                                                    ?


                                                    (

                                                        <div className="text-center">

                                                            No portfolios found

                                                        </div>

                                                    )


                                                    :


                                                    sortedPortfolios.map(

                                                        portfolio => (

                                                            <PortfolioCard

                                                                key={
                                                                    portfolio._id
                                                                }


                                                                portfolio={
                                                                    portfolio
                                                                }

                                                                handleDelete={handleDelete}


                                                            />

                                                        )

                                                    )

                                        }


                                    </div>









                                    <PortfolioPagination

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


export default AllPortfolios;