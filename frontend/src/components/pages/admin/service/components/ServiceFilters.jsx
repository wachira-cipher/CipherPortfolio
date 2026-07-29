import React, {
    useState
} from "react";



const ServiceFilters = ({
    category,
    setCategory,

    featured,
    setFeatured,

    status,
    setStatus
}) => {



    const categories = [

        "All Categories",

        "Web Development",

        "Mobile Development",

        "Software Development",

        "Backend Development",

        "API Development",

        "Database Systems",

        "UI/UX Design",

        "Graphic Design",

        "E-Commerce Solutions",

        "CMS Development",

        "Enterprise Applications",

        "Cloud Computing",

        "DevOps",

        "Cybersecurity",

        "Network Solutions",

        "Systems Administration",

        "IT Support",

        "Data Science",

        "Artificial Intelligence",

        "Machine Learning",

        "Automation Systems",

        "Blockchain",

        "Digital Transformation",

        "ERP Systems",

        "CRM Solutions"

    ];








    const [openFilters, setOpenFilters] = useState({

        categories: true,

        featured: true,

        status: true

    });









    const toggleFilter = (name) => {


        setOpenFilters(prev => ({

            ...prev,

            [name]: !prev[name]

        }));


    };









    return (


        <div className="col-xl-3 col-lg-4">



            <div className="card">





                <div className="card-header bg-transparent border-bottom">


                    <h5 className="mb-0">

                        Filters

                    </h5>


                </div>









                {/* CATEGORIES */}


                <div className="p-4">


                    <h5 className="font-size-14 mb-3">

                        Categories

                    </h5>





                    <div className="custom-accordion">



                        <button

                            type="button"

                            className="text-body fw-semibold pb-2 d-block border-0 bg-transparent w-100 text-start"

                            onClick={() =>
                                toggleFilter("categories")
                            }

                        >



                            <i

                                className={`bi ${openFilters.categories

                                        ?

                                        "bi-chevron-up"

                                        :

                                        "bi-chevron-down"

                                    } accor-down-icon text-primary me-1`}

                            ></i>



                            Service Categories



                        </button>








                        <div

                            className={

                                openFilters.categories

                                    ?

                                    "collapse show"

                                    :

                                    "collapse"

                            }

                        >



                            <div

                                className="card p-2 border shadow-none"

                                style={{

                                    maxHeight: "320px",

                                    overflowY: "auto"

                                }}

                            >



                                <ul className="list-unstyled categories-list mb-0">



                                    {
                                        categories.map(

                                            item => (


                                                <li

                                                    key={item}

                                                    className={

                                                        category === item

                                                            ?

                                                            "active"

                                                            :

                                                            ""

                                                    }

                                                >



                                                    <a

                                                        href="#"

                                                        onClick={(e) => {

                                                            e.preventDefault();


                                                            setCategory(

                                                                item === "All Categories"

                                                                    ?

                                                                    ""

                                                                    :

                                                                    item

                                                            );


                                                        }}

                                                    >



                                                        <i className="bi bi-dot me-1"></i>


                                                        {item}



                                                    </a>



                                                </li>


                                            )

                                        )
                                    }



                                </ul>



                            </div>



                        </div>



                    </div>




                </div>













                {/* FEATURED */}


                <div className="p-4 border-top">



                    <h5 className="font-size-14 mb-0">


                        <button

                            type="button"

                            className="text-reset d-block border-0 bg-transparent w-100 text-start"

                            onClick={() =>
                                toggleFilter("featured")
                            }

                        >



                            Featured Services




                            <i

                                className={`bi ${openFilters.featured

                                        ?

                                        "bi-chevron-up"

                                        :

                                        "bi-chevron-down"

                                    } float-end accor-down-icon`}

                            ></i>



                        </button>


                    </h5>








                    <div

                        className={

                            openFilters.featured

                                ?

                                "collapse show"

                                :

                                "collapse"

                        }

                    >



                        <div className="mt-4">



                            <div className="form-check mt-2">


                                <input

                                    type="radio"

                                    id="featuredServices"

                                    name="featured"

                                    className="form-check-input"

                                    checked={featured === true}

                                    onChange={() =>
                                        setFeatured(true)
                                    }

                                />



                                <label

                                    className="form-check-label"

                                    htmlFor="featuredServices"

                                >

                                    Featured Only


                                </label>



                            </div>







                            <div className="form-check mt-2">


                                <input

                                    type="radio"

                                    id="allServices"

                                    name="featured"

                                    className="form-check-input"

                                    checked={featured === false}

                                    onChange={() =>
                                        setFeatured(false)
                                    }

                                />



                                <label

                                    className="form-check-label"

                                    htmlFor="allServices"

                                >

                                    All Services


                                </label>



                            </div>




                        </div>



                    </div>



                </div>













                {/* STATUS */}


                <div className="p-4 border-top">



                    <h5 className="font-size-14 mb-0">


                        <button

                            type="button"

                            className="text-reset d-block border-0 bg-transparent w-100 text-start"

                            onClick={() =>
                                toggleFilter("status")
                            }

                        >



                            Status




                            <i

                                className={`bi ${openFilters.status

                                        ?

                                        "bi-chevron-up"

                                        :

                                        "bi-chevron-down"

                                    } float-end accor-down-icon`}

                            ></i>



                        </button>


                    </h5>








                    <div

                        className={

                            openFilters.status

                                ?

                                "collapse show"

                                :

                                "collapse"

                        }

                    >



                        <div className="mt-4">



                            <div className="form-check mt-2">


                                <input

                                    type="radio"

                                    id="activeServices"

                                    name="status"

                                    className="form-check-input"

                                    checked={status === true}

                                    onChange={() =>
                                        setStatus(true)
                                    }

                                />



                                <label

                                    className="form-check-label"

                                    htmlFor="activeServices"

                                >

                                    Active Services


                                </label>



                            </div>







                            <div className="form-check mt-2">


                                <input

                                    type="radio"

                                    id="hiddenServices"

                                    name="status"

                                    className="form-check-input"

                                    checked={status === false}

                                    onChange={() =>
                                        setStatus(false)
                                    }

                                />



                                <label

                                    className="form-check-label"

                                    htmlFor="hiddenServices"

                                >

                                    Hidden Services


                                </label>



                            </div>




                        </div>



                    </div>



                </div>






            </div>



        </div>


    );

};


export default ServiceFilters;