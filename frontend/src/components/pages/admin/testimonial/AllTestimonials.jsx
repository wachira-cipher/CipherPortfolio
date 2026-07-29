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

import TestimonialFilters from "./components/TestimonialFilters";
import TestimonialToolbar from "./components/TestimonialToolbar";
import TestimonialCard from "./components/TestimonialCard";
import TestimonialPagination from "./components/TestimonialPagination";



// API

import {
    getTestimonials,
    deleteTestimonial
} from "../../../../api/testimonials.api";








const AllTestimonials = () => {



    const [testimonials, setTestimonials] =
        useState([]);




    const [loading, setLoading] =
        useState(false);




    const [search, setSearch] =
        useState("");




    const [rating, setRating] =
        useState("");




    const [hasImage, setHasImage] =
        useState(false);




    const [hasCompany, setHasCompany] =
        useState(false);




    const [sort, setSort] =
        useState("newest");




    const [currentPage, setCurrentPage] =
        useState(1);




    const [totalPages, setTotalPages] =
        useState(1);




    const limit = 6;









    /*
    ==========================
        FETCH TESTIMONIALS
    ==========================
    */


    const fetchTestimonials = async () => {


        try {


            setLoading(true);



            const response =

                await getTestimonials(
                    currentPage,
                    limit
                );





            setTestimonials(

                response.data.testimonials || []

            );





            setTotalPages(

                response.data.pagination?.totalPages || 1

            );



        }
        catch (error) {


            console.error(error);



            toast.error(

                "Failed loading testimonials"

            );


        }
        finally {


            setLoading(false);


        }


    };









    useEffect(() => {


        fetchTestimonials();



        const interval = setInterval(() => {


            fetchTestimonials();


        }, 500000);





        return () => {


            clearInterval(interval);


        };


    }, [currentPage]);













    /*
    ==========================
        FILTER DATA
    ==========================
    */


    const filteredTestimonials =

        testimonials.filter(

            testimonial => {



                const searchMatch =


                    testimonial.name

                        ?.toLowerCase()

                        .includes(

                            search.toLowerCase()

                        )



                    ||

                    testimonial.company

                        ?.toLowerCase()

                        .includes(

                            search.toLowerCase()

                        )



                    ||

                    testimonial.position

                        ?.toLowerCase()

                        .includes(

                            search.toLowerCase()

                        );









                const ratingMatch =


                    rating

                        ?


                        testimonial.rating >= rating


                        :


                        true;









                const imageMatch =


                    hasImage


                        ?


                        testimonial.image


                        :


                        true;









                const companyMatch =


                    hasCompany


                        ?


                        testimonial.company


                        :


                        true;







                return (

                    searchMatch &&

                    ratingMatch &&

                    imageMatch &&

                    companyMatch

                );


            }

        );












    /*
    ==========================
        SORT DATA
    ==========================
    */


    const sortedTestimonials = [

        ...filteredTestimonials


    ].sort((a, b) => {


        if (sort === "oldest") {


            return (

                new Date(a.createdAt)

                -

                new Date(b.createdAt)

            );


        }






        if (sort === "rating") {


            return (

                b.rating

                -

                a.rating

            );


        }







        return (

            new Date(b.createdAt)

            -

            new Date(a.createdAt)

        );


    });













    /*
    ==========================
        DELETE TESTIMONIAL
    ==========================
    */


    const handleDelete = async (id) => {


        const confirmDelete =

            window.confirm(

                "Are you sure you want to delete this testimonial?"

            );





        if (!confirmDelete)

            return;








        try {


            await deleteTestimonial(id);





            setTestimonials(prev =>


                prev.filter(

                    item =>

                        item._id !== id

                )


            );





            toast.success(

                "Testimonial deleted successfully"

            );



        }
        catch (error) {


            console.error(error);



            toast.error(

                "Failed deleting testimonial"

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

                                Testimonials

                            </h4>





                            <div className="page-title-right">


                                <ol className="breadcrumb m-0">


                                    <li className="breadcrumb-item">


                                        <Link to="#">

                                            Testimonials

                                        </Link>


                                    </li>




                                    <li className="breadcrumb-item active">


                                        All Testimonials


                                    </li>



                                </ol>



                            </div>



                        </div>



                    </div>


                </div>













                <div className="row">







                    {/* FILTERS */}



                    <TestimonialFilters


                        rating={rating}


                        setRating={setRating}



                        hasImage={hasImage}


                        setHasImage={setHasImage}



                        hasCompany={hasCompany}


                        setHasCompany={setHasCompany}



                    />












                    <div className="col-xl-9 col-lg-8">


                        <div className="card">


                            <div className="card-body">







                                <TestimonialToolbar


                                    search={search}


                                    setSearch={setSearch}



                                    sort={sort}


                                    setSort={setSort}



                                />









                                <div className="row">





                                    {

                                        loading



                                            ?



                                            (

                                                <div className="text-center">

                                                    Loading testimonials...

                                                </div>


                                            )






                                            :






                                            sortedTestimonials.length === 0



                                                ?



                                                (

                                                    <div className="text-center">

                                                        No testimonials found

                                                    </div>


                                                )






                                                :






                                                sortedTestimonials.map(


                                                    testimonial => (


                                                        <TestimonialCard


                                                            key={
                                                                testimonial._id
                                                            }



                                                            testimonial={
                                                                testimonial
                                                            }




                                                            handleDelete={
                                                                handleDelete
                                                            }


                                                        />

                                                    )


                                                )


                                    }





                                </div>









                                <TestimonialPagination


                                    currentPage={
                                        currentPage
                                    }



                                    totalPages={
                                        totalPages
                                    }



                                    setCurrentPage={
                                        setCurrentPage
                                    }


                                />







                            </div>


                        </div>


                    </div>







                </div>







            </div>


        </div>



    );


};




export default AllTestimonials;