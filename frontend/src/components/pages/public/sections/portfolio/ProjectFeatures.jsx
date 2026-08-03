import React from "react";

export default function ProjectFeatures({

    portfolio

}) {


    if (!portfolio) {

        return null;

    }


    const features = portfolio.features || [];


    const middle = Math.ceil(

        features.length / 2

    );


    const leftFeatures = features.slice(

        0,

        middle

    );


    const rightFeatures = features.slice(

        middle

    );



    return (

        <>

            {/* Project Features */}

            <div

                className="project-features"

                data-aos="fade-up"

                data-aos-delay="300"

            >

                <h3>

                    <i className="bi bi-stars"></i>

                    {" "}Key Features

                </h3>



                {

                    features.length > 0 ? (

                        <div className="row g-3">


                            <div className="col-md-6">

                                <ul className="feature-list">

                                    {

                                        leftFeatures.map(

                                            (feature, index) => (

                                                <li key={index}>

                                                    <i className="bi bi-check2-circle"></i>

                                                    {feature}

                                                </li>

                                            )

                                        )

                                    }

                                </ul>

                            </div>



                            <div className="col-md-6">

                                <ul className="feature-list">

                                    {

                                        rightFeatures.map(

                                            (feature, index) => (

                                                <li key={index}>

                                                    <i className="bi bi-check2-circle"></i>

                                                    {feature}

                                                </li>

                                            )

                                        )

                                    }

                                </ul>

                            </div>


                        </div>

                    ) : (

                        <p>

                            No features available.

                        </p>

                    )

                }


            </div>



            {/* CTA Buttons */}

            <div

                className="cta-buttons"

                data-aos="fade-up"

                data-aos-delay="400"

            >


                {

                    portfolio.website && (

                        <a

                            href={portfolio.website}

                            target="_blank"

                            rel="noopener noreferrer"

                            className="btn-view-project"

                        >

                            View Live Project

                        </a>

                    )

                }



                {

                    portfolio.github && (

                        <a

                            href={portfolio.github}

                            target="_blank"

                            rel="noopener noreferrer"

                            className="btn-next-project"

                        >

                            View Source

                            <i className="bi bi-github ms-2"></i>

                        </a>

                    )

                }


            </div>

        </>

    );

}