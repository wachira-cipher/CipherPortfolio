import React from "react";



const PortfolioToolbar = ({
    search,
    setSearch,
    sort,
    setSort,
    category
}) => {


    return (

        <>


            <div className="row">


                <div className="col-md-6">


                    <div>


                        <h5>

                            Showing result for "{category || "All Projects"}"

                        </h5>




                        <ol className="breadcrumb p-0 bg-transparent mb-2">


                            <li className="breadcrumb-item">


                                <a href="#">

                                    Portfolio

                                </a>


                            </li>



                            <li className="breadcrumb-item active">


                                Projects


                            </li>



                        </ol>


                    </div>


                </div>







                <div className="col-md-6">


                    <div className="form-inline float-md-end">


                        <div className="search-box ms-2">


                            <div className="position-relative">


                                <input

                                    type="text"

                                    className="form-control bg-light border-light rounded"

                                    placeholder="Search portfolio..."

                                    value={search}

                                    onChange={(e) =>
                                        setSearch(e.target.value)
                                    }

                                />



                                <i className="bi bi-search search-icon"></i>



                            </div>


                        </div>


                    </div>


                </div>




            </div>









            <ul className="nav nav-tabs nav-tabs-custom mt-3 mb-2 ecommerce-sortby-list">





                <li className="nav-item">


                    <a

                        className="nav-link disabled fw-medium"

                        href="#"

                        tabIndex="-1"

                        aria-disabled="true"

                    >

                        Sort by:

                    </a>


                </li>








                <li className="nav-item">


                    <button

                        type="button"

                        className={
                            `nav-link ${sort === "oldest"
                                ? "active"
                                : ""
                            }`
                        }

                        onClick={() =>
                            setSort("oldest")
                        }

                    >

                        Oldest


                    </button>


                </li>








                <li className="nav-item">


                    <button

                        type="button"

                        className={
                            `nav-link ${sort === "newest"
                                ? "active"
                                : ""
                            }`
                        }

                        onClick={() =>
                            setSort("newest")
                        }

                    >

                        Newest


                    </button>


                </li>








                <li className="nav-item">


                    <button

                        type="button"

                        className={
                            `nav-link ${sort === "featured"
                                ? "active"
                                : ""
                            }`
                        }

                        onClick={() =>
                            setSort("featured")
                        }

                    >

                        Featured


                    </button>


                </li>






            </ul>



        </>

    );

};



export default PortfolioToolbar;