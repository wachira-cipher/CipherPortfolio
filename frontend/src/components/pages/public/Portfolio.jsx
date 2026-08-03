import React, {
    useEffect,
    useMemo,
    useState
} from "react";

import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.css";

import {
    Link
} from "react-router-dom";

import {
    toast
} from "react-toastify";

import {
    getPortfolios
} from "../../../api/portfolio.api";

import {
    getImageUrl
} from "../../../utils/imageUrl";



export default function Portfolio() {


    const [portfolios, setPortfolios] = useState([]);


    const [loading, setLoading] = useState(true);


    const [activeFilter, setActiveFilter] = useState("All");





    /*
    ==========================
        FETCH PORTFOLIOS
    ==========================
    */

    useEffect(() => {


        const fetchPortfolios = async () => {


            try {


                const response = await getPortfolios(
                    1,
                    100
                );


                setPortfolios(

                    response.data.portfolios || []

                );


            }

            catch (error) {


                console.error(error);


                toast.error(
                    "Failed loading portfolio."
                );


            }

            finally {


                setLoading(false);


            }


        };


        fetchPortfolios();


    }, []);





    /*
    ==========================
        GLIGHTBOX
    ==========================
    */

    useEffect(() => {


        const lightbox = GLightbox({

            selector: ".portfolio-lightbox",

            touchNavigation: true,

            loop: true,

            zoomable: true,

            draggable: true,

            openEffect: "zoom",

            closeEffect: "fade",

            slideEffect: "slide",

            closeButton: true,

            keyboardNavigation: true

        });


        return () => {

            lightbox.destroy();

        };


    }, [portfolios]);





    /*
    ==========================
        FILTERS
    ==========================
    */

    const categories = useMemo(() => {


        return [

            "All",

            ...new Set(

                portfolios.map(

                    portfolio => portfolio.category

                )

            )

        ];


    }, [portfolios]);





    const filteredPortfolios = useMemo(() => {


        if (activeFilter === "All") {

            return portfolios;

        }


        return portfolios.filter(

            portfolio =>

                portfolio.category === activeFilter

        );


    }, [

        portfolios,

        activeFilter

    ]);





    return (


        <section
            id="portfolio"
            className="portfolio section"
        >




            {/* Section Title */}

            <div
                className="container section-title"
                data-aos="fade-up"
            >

                <h2>

                    Portfolio

                </h2>


                <p>

                    Explore some of my recent projects covering web
                    applications, APIs, UI/UX, backend systems,
                    DevOps and modern software solutions.

                </p>


            </div>





            <div
                className="container"
                data-aos="fade-up"
                data-aos-delay="100"
            >



                <div className="isotope-layout">



                    {/* FILTERS */}

                    <ul
                        className="portfolio-filters isotope-filters"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >


                        {

                            categories.map(

                                category => (

                                    <li

                                        key={category}

                                        className={

                                            activeFilter === category

                                                ?

                                                "filter-active"

                                                :

                                                ""

                                        }

                                        onClick={() =>

                                            setActiveFilter(category)

                                        }

                                        style={{

                                            cursor: "pointer"

                                        }}

                                    >

                                        {category}

                                    </li>

                                )

                            )

                        }


                    </ul>





                    {/* PORTFOLIOS */}

                    <div
                        className="row gy-4 isotope-container"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >



                        {

                            loading

                                ?

                                (

                                    <div className="text-center">

                                        Loading portfolio...

                                    </div>

                                )

                                :

                                filteredPortfolios.length === 0

                                    ?

                                    (

                                        <div className="text-center">

                                            No portfolio projects found.

                                        </div>

                                    )

                                    :

                                    filteredPortfolios.map(

                                        portfolio => (


                                            <div

                                                key={portfolio._id}

                                                className="col-lg-4 col-md-6 portfolio-item"

                                            >



                                                <div className="portfolio-card">





                                                    <div className="portfolio-img">



                                                        <img

                                                            src={

                                                                portfolio.images?.length

                                                                    ?

                                                                    getImageUrl(

                                                                        portfolio.images[0]

                                                                    )

                                                                    :

                                                                    "/assets/img/placeholder.jpg"

                                                            }

                                                            alt={

                                                                portfolio.title

                                                            }

                                                            className="img-fluid"

                                                        />





                                                        <div className="portfolio-overlay">



                                                            {

                                                                portfolio.images?.length >

                                                                0 && (

                                                                    <a

                                                                        href={

                                                                            getImageUrl(

                                                                                portfolio.images[0]

                                                                            )

                                                                        }

                                                                        className="portfolio-lightbox"

                                                                        data-gallery="portfolio-gallery"

                                                                    >

                                                                        <i className="bi bi-plus"></i>

                                                                    </a>

                                                                )

                                                            }





                                                            <Link

                                                                to={`/portfolio/${portfolio._id}`}

                                                                className="portfolio-details-link"

                                                            >

                                                                <i className="bi bi-link"></i>

                                                            </Link>



                                                        </div>



                                                    </div>






                                                    <div className="portfolio-info">



                                                        <h4>

                                                            {

                                                                portfolio.title

                                                            }

                                                        </h4>





                                                        <p>

                                                            {

                                                                portfolio.description.length >

                                                                    80

                                                                    ?

                                                                    portfolio.description.slice(

                                                                        0,

                                                                        80

                                                                    ) + "..."

                                                                    :

                                                                    portfolio.description

                                                            }

                                                        </p>






                                                        <div className="portfolio-tags">



                                                            {

                                                                portfolio.technologies?.length >

                                                                    0

                                                                    ?

                                                                    portfolio.technologies.map(

                                                                        (

                                                                            tech,

                                                                            index

                                                                        ) => (

                                                                            <span

                                                                                key={

                                                                                    index

                                                                                }

                                                                            >

                                                                                {

                                                                                    tech

                                                                                }

                                                                            </span>

                                                                        )

                                                                    )

                                                                    :

                                                                    (

                                                                        <span>

                                                                            {

                                                                                portfolio.category

                                                                            }

                                                                        </span>

                                                                    )

                                                            }



                                                        </div>



                                                    </div>




                                                </div>



                                            </div>

                                        )

                                    )

                        }



                    </div>





                </div>





                <div
                    className="text-center mt-5"
                    data-aos="fade-up"
                    data-aos-delay="400"
                >

                    <a
                        href="#portfolio"
                        className="btn btn-primary"
                    >

                        View All Projects

                    </a>

                </div>



            </div>



        </section>

    );

}