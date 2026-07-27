import React from "react";



const PortfolioPagination = ({
    currentPage,
    totalPages,
    setCurrentPage
}) => {



    const pages = Array.from(
        {
            length: totalPages
        },
        (_, index) => index + 1
    );





    const handlePrevious = () => {


        if (currentPage > 1) {

            setCurrentPage(
                currentPage - 1
            );

        }


    };







    const handleNext = () => {


        if (currentPage < totalPages) {

            setCurrentPage(
                currentPage + 1
            );

        }


    };








    return (

        <div className="row mt-4">





            <div className="col-sm-6">


                <div>


                    <p className="mb-sm-0">


                        Page {currentPage} of {totalPages}


                    </p>


                </div>


            </div>









            <div className="col-sm-6">


                <div className="float-sm-end">


                    <ul className="pagination pagination-rounded mb-sm-0">






                        {/* PREVIOUS */}


                        <li
                            className={
                                `page-item ${currentPage === 1
                                    ? "disabled"
                                    : ""
                                }`
                            }
                        >


                            <button

                                type="button"

                                className="page-link"

                                onClick={handlePrevious}

                            >

                                <i className="bi bi-chevron-left"></i>


                            </button>


                        </li>









                        {/* PAGE NUMBERS */}


                        {
                            pages.map(
                                page => (


                                    <li

                                        key={page}

                                        className={
                                            `page-item ${currentPage === page
                                                ? "active"
                                                : ""
                                            }`
                                        }

                                    >


                                        <button

                                            type="button"

                                            className="page-link"

                                            onClick={() =>
                                                setCurrentPage(page)
                                            }

                                        >

                                            {page}


                                        </button>


                                    </li>


                                )

                            )
                        }









                        {/* NEXT */}


                        <li

                            className={
                                `page-item ${currentPage === totalPages
                                    ? "disabled"
                                    : ""
                                }`
                            }

                        >


                            <button

                                type="button"

                                className="page-link"

                                onClick={handleNext}

                            >

                                <i className="bi bi-chevron-right"></i>


                            </button>


                        </li>





                    </ul>


                </div>


            </div>





        </div>


    );

};



export default PortfolioPagination;