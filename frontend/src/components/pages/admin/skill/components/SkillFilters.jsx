import React, {
    useState
} from "react";



const SkillFilters = ({
    category,
    setCategory,

    featured,
    setFeatured,

    level,
    setLevel,

    status,
    setStatus
}) => {



    const categories = [

        "All Categories",

        "Frontend Development",

        "Backend Development",

        "Mobile Development",

        "Database & Data Management",

        "DevOps & Cloud",

        "Cybersecurity",

        "UI/UX & Design",

        "Artificial Intelligence",

        "Machine Learning",

        "Networking",

        "Systems Administration",

        "Enterprise Solutions",

        "Other"

    ];






    const levels = [

        "All Levels",

        "Beginner",

        "Intermediate",

        "Advanced",

        "Expert"

    ];








    const [openFilters, setOpenFilters] = useState({

        categories: true,

        levels: true,

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



                            Skill Categories



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













                {/* LEVELS */}


                <div className="p-4 border-top">



                    <h5 className="font-size-14 mb-0">


                        <button

                            type="button"

                            className="text-reset d-block border-0 bg-transparent w-100 text-start"

                            onClick={() =>
                                toggleFilter("levels")
                            }

                        >



                            Skill Levels




                            <i

                                className={`bi ${openFilters.levels

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

                            openFilters.levels

                                ?

                                "collapse show"

                                :

                                "collapse"

                        }

                    >



                        <div className="mt-4">



                            {
                                levels.map(

                                    item => (


                                        <div

                                            className="form-check mt-2"

                                            key={item}

                                        >



                                            <input

                                                type="radio"

                                                className="form-check-input"

                                                id={item}

                                                name="level"

                                                checked={

                                                    level === item

                                                }

                                                onChange={() => {

                                                    setLevel(

                                                        item === "All Levels"

                                                            ?

                                                            ""

                                                            :

                                                            item

                                                    );

                                                }}

                                            />




                                            <label

                                                className="form-check-label"

                                                htmlFor={item}

                                            >


                                                <i className="bi bi-circle-fill text-primary mx-1"></i>


                                                {item}


                                            </label>



                                        </div>


                                    )

                                )
                            }



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



                            Featured Skills




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

                                    id="featuredSkills"

                                    name="featured"

                                    className="form-check-input"

                                    checked={featured === true}

                                    onChange={() =>
                                        setFeatured(true)
                                    }

                                />



                                <label

                                    className="form-check-label"

                                    htmlFor="featuredSkills"

                                >

                                    Featured Only


                                </label>



                            </div>







                            <div className="form-check mt-2">


                                <input

                                    type="radio"

                                    id="allSkills"

                                    name="featured"

                                    className="form-check-input"

                                    checked={featured === false}

                                    onChange={() =>
                                        setFeatured(false)
                                    }

                                />



                                <label

                                    className="form-check-label"

                                    htmlFor="allSkills"

                                >

                                    All Skills


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

                                    id="activeSkills"

                                    name="status"

                                    className="form-check-input"

                                    checked={status === true}

                                    onChange={() =>
                                        setStatus(true)
                                    }

                                />



                                <label

                                    className="form-check-label"

                                    htmlFor="activeSkills"

                                >

                                    Active Skills


                                </label>



                            </div>







                            <div className="form-check mt-2">


                                <input

                                    type="radio"

                                    id="hiddenSkills"

                                    name="status"

                                    className="form-check-input"

                                    checked={status === false}

                                    onChange={() =>
                                        setStatus(false)
                                    }

                                />



                                <label

                                    className="form-check-label"

                                    htmlFor="hiddenSkills"

                                >

                                    Hidden Skills


                                </label>



                            </div>




                        </div>



                    </div>



                </div>






            </div>



        </div>


    );

};


export default SkillFilters;