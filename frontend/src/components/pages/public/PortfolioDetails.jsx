import React, {
    useEffect,
    useState
} from "react";

import {
    useParams
} from "react-router-dom";

import {
    toast
} from "react-toastify";

import {
    getPortfolioById
} from "../../../api/portfolio.api";

import PortfolioMedia from "./sections/portfolio/PortfolioMedia";
import PortfolioContent from "./sections/portfolio/PortfolioContent";



export default function PortfolioDetails() {


    const { id } = useParams();


    const [portfolio, setPortfolio] = useState(null);


    const [loading, setLoading] = useState(true);




    useEffect(() => {


        const fetchPortfolio = async () => {


            try {


                const response = await getPortfolioById(id);


                setPortfolio(

                    response.data.portfolio

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


        fetchPortfolio();


    }, [id]);




    if (loading) {


        return (

            <section className="portfolio-details section">

                <div className="container text-center">

                    Loading portfolio...

                </div>

            </section>

        );


    }




    if (!portfolio) {


        return (

            <section className="portfolio-details section">

                <div className="container text-center">

                    Portfolio not found.

                </div>

            </section>

        );


    }




    return (


        <section
            id="portfolio-details"
            className="portfolio-details section"
        >



            {/* Section Title */}

            <div
                className="container section-title"
                data-aos="fade-up"
            >

                <h2>

                    {portfolio.title}

                </h2>


                <p>

                    {portfolio.description}

                </p>


            </div>





            <div
                className="container"
                data-aos="fade-up"
                data-aos-delay="100"
            >



                <div className="row gy-4">



                    <div
                        className="col-lg-6"
                        data-aos="fade-right"
                    >

                        <PortfolioMedia
                            portfolio={portfolio}
                        />

                    </div>





                    <div
                        className="col-lg-6"
                        data-aos="fade-left"
                    >

                        <PortfolioContent
                            portfolio={portfolio}
                        />

                    </div>



                </div>



            </div>



        </section>

    );

}