import React from "react";

import ProjectAccordion from "./ProjectAccordion";
import ProjectFeatures from "./ProjectFeatures";



export default function PortfolioContent({

    portfolio

}) {


    if (!portfolio) {

        return null;

    }


    return (

        <div className="portfolio-details-content">


            {/* Project Meta */}

            <div className="project-meta">


                <div className="badge-wrapper">

                    <span className="project-badge">

                        {portfolio.category}

                    </span>

                </div>



                <div className="date-client">


                    {

                        portfolio.projectDate && (

                            <div className="meta-item">

                                <i className="bi bi-calendar-check"></i>

                                <span>

                                    {portfolio.projectDate}

                                </span>

                            </div>

                        )

                    }



                    {

                        portfolio.client && (

                            <div className="meta-item">

                                <i className="bi bi-buildings"></i>

                                <span>

                                    {portfolio.client}

                                </span>

                            </div>

                        )

                    }


                </div>


            </div>



            {/* Project Title */}

            <h2 className="project-title">

                {portfolio.title}

            </h2>



            {/* Website */}

            {

                portfolio.website && (

                    <div className="project-website">

                        <i className="bi bi-link-45deg"></i>

                        <a

                            href={portfolio.website}

                            target="_blank"

                            rel="noopener noreferrer"

                        >

                            {portfolio.website}

                        </a>

                    </div>

                )

            }



            {/* GitHub */}

            {

                portfolio.github && (

                    <div className="project-website mt-2">

                        <i className="bi bi-github"></i>

                        <a

                            href={portfolio.github}

                            target="_blank"

                            rel="noopener noreferrer"

                        >

                            View Source Code

                        </a>

                    </div>

                )

            }



            {/* Overview */}

            <div className="project-overview">


                <p className="lead">

                    {portfolio.description}

                </p>


                <ProjectAccordion

                    portfolio={portfolio}

                />


            </div>



            {/* Features */}

            <ProjectFeatures

                features={portfolio.features}

            />


        </div>

    );

}