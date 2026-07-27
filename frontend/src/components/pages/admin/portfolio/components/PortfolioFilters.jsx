import React, {
    useState
} from "react";


const PortfolioFilters = ({
    category,
    setCategory,

    featured,
    setFeatured,

    selectedTechnologies,
    setSelectedTechnologies,

    status,
    setStatus
}) => {


    const categories = [
        "All Categories",

        "Web Development",

        "Mobile Development",

        "Software Development",

        "Desktop Applications",

        "Backend Development",

        "API Development",

        "Database Systems",

        "UI/UX Design",

        "Graphic Design",

        "E-Commerce Solutions",

        "Content Management Systems",

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

        "Internet of Things (IoT)",

        "Blockchain",

        "Automation Systems",

        "Digital Transformation",

        "ERP Systems",

        "CRM Solutions",

        "Business Intelligence",

        "Research & Innovation"

    ];



    const technologies = [

        // Frontend
        "HTML5",

        "CSS3",

        "JavaScript",

        "TypeScript",

        "React",

        "Next.js",

        "Vue.js",

        "Angular",

        "Bootstrap",

        "Tailwind CSS",


        // Backend
        "Node.js",

        "Express.js",

        "Laravel",

        "PHP",

        "Python",

        "Django",

        "Java",

        "Spring Boot",

        ".NET",


        // Databases
        "MongoDB",

        "MySQL",

        "PostgreSQL",

        "SQL Server",

        "Redis",

        "Firebase",


        // Mobile Development
        "React Native",

        "Flutter",

        "Android",

        "iOS",


        // APIs & Integration
        "REST API",

        "GraphQL",

        "WebSockets",

        "JWT Authentication",


        // Cloud & DevOps
        "Docker",

        "Kubernetes",

        "AWS",

        "Azure",

        "Google Cloud",

        "Linux",

        "CI/CD",


        // CMS & E-Commerce
        "WordPress",

        "Shopify",

        "WooCommerce",


        // AI & Data
        "Python AI",

        "Machine Learning",

        "TensorFlow",

        "Data Analytics",

        "Power BI",


        // Cybersecurity
        "Cybersecurity",

        "Ethical Hacking",

        "SSL Security",

        "OAuth",


        // Other ICT
        "Git",

        "GitHub",

        "Figma",

        "Adobe XD",

        "IoT",

        "Blockchain"

    ];





    const [openFilters, setOpenFilters] = useState({

        categories: true,

        technologies: true,

        featured: true,

        status: true

    });






    const toggleFilter = (name) => {


        setOpenFilters(prev => ({

            ...prev,

            [name]: !prev[name]

        }));


    };



    const handleTechnologyChange = (tech) => {


        setSelectedTechnologies(prev => {


            if (prev.includes(tech)) {


                return prev.filter(
                    item => item !== tech
                );


            }


            return [
                ...prev,
                tech
            ];


        });


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



                            Project Categories



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


                                                            if (item === "All Categories") {

                                                                setCategory("");

                                                            }
                                                            else {

                                                                setCategory(item);

                                                            }


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












                {/* TECHNOLOGIES */}


                <div className="p-4 border-top">



                    <h5 className="font-size-14 mb-0">


                        <button

                            type="button"

                            className="text-reset d-block border-0 bg-transparent w-100 text-start"

                            onClick={() =>
                                toggleFilter("technologies")
                            }

                        >



                            Technologies




                            <i

                                className={`bi ${openFilters.technologies

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

                            openFilters.technologies

                                ?

                                "collapse show"

                                :

                                "collapse"

                        }

                    >


                        <div

                            className="mt-4"

                            style={{

                                maxHeight: "320px",

                                overflowY: "auto",

                                paddingRight: "8px"

                            }}

                        >


                            {
                                technologies.map(

                                    tech => (

                                        <div
                                            className="form-check mt-2"
                                            key={tech}
                                        >

                                            <input
                                                type="checkbox"
                                                className="form-check-input"
                                                id={tech}

                                                checked={
                                                    selectedTechnologies.includes(tech)
                                                }

                                                onChange={() =>
                                                    handleTechnologyChange(tech)
                                                }

                                            />


                                            <label
                                                className="form-check-label"
                                                htmlFor={tech}
                                            >

                                                <i className="bi bi-circle-fill text-primary mx-1"></i>

                                                {tech}

                                            </label>


                                        </div>

                                    )

                                )
                            }





                            {
                                selectedTechnologies.length > 0 && (

                                    <button

                                        type="button"

                                        className="btn btn-sm btn-light mt-3"

                                        onClick={() =>
                                            setSelectedTechnologies([])
                                        }

                                    >

                                        Clear Technologies

                                    </button>

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



                            Featured Projects




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

                                    id="featuredYes"

                                    name="featured"

                                    className="form-check-input"

                                    checked={featured === true}

                                    onChange={() =>
                                        setFeatured(true)
                                    }

                                />



                                <label

                                    className="form-check-label"

                                    htmlFor="featuredYes"

                                >

                                    Featured Only


                                </label>



                            </div>







                            <div className="form-check mt-2">


                                <input

                                    type="radio"

                                    id="featuredAll"

                                    name="featured"

                                    className="form-check-input"

                                    checked={featured === false}

                                    onChange={() =>
                                        setFeatured(false)
                                    }

                                />



                                <label

                                    className="form-check-label"

                                    htmlFor="featuredAll"

                                >

                                    All Projects


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

                                    id="statusActive"

                                    name="status"

                                    className="form-check-input"

                                    checked={status === true}

                                    onChange={() =>
                                        setStatus(true)
                                    }

                                />



                                <label

                                    className="form-check-label"

                                    htmlFor="statusActive"

                                >

                                    Active Projects


                                </label>



                            </div>







                            <div className="form-check mt-2">


                                <input

                                    type="radio"

                                    id="statusHidden"

                                    name="status"

                                    className="form-check-input"

                                    checked={status === false}

                                    onChange={() =>
                                        setStatus(false)
                                    }

                                />



                                <label

                                    className="form-check-label"

                                    htmlFor="statusHidden"

                                >

                                    Hidden Projects


                                </label>



                            </div>




                        </div>



                    </div>



                </div>






            </div>



        </div>


    );

};


export default PortfolioFilters;