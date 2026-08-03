import React from "react";

export default function ProjectAccordion({

    portfolio

}) {


    const accordionItems = [

        {

            id: 1,

            icon: "bi bi-clipboard-data",

            title: "Project Overview",

            show: true,

            body: (

                <p>

                    {portfolio.description}

                </p>

            )

        },

        {

            id: 2,

            icon: "bi bi-exclamation-diamond",

            title: "The Challenge",

            show: false,

            body: (

                <p>

                    {

                        portfolio.challenge ||

                        "No challenge information available."

                    }

                </p>

            )

        },

        {

            id: 3,

            icon: "bi bi-award",

            title: "The Solution",

            show: false,

            body: (

                <p>

                    {

                        portfolio.solution ||

                        "No solution information available."

                    }

                </p>

            )

        }

    ];


    return (

        <div

            className="accordion project-accordion"

            id="portfolio-details-projectAccordion"

        >

            {

                accordionItems.map((item, index) => (

                    <div

                        className="accordion-item"

                        key={item.id}

                        data-aos="fade-up"

                        data-aos-delay={index * 100}

                    >

                        <h2 className="accordion-header">

                            <button

                                className={`accordion-button ${item.show ? "" : "collapsed"

                                    }`}

                                type="button"

                                data-bs-toggle="collapse"

                                data-bs-target={`#portfolio-details-collapse-${item.id}`}

                                aria-expanded={item.show}

                                aria-controls={`portfolio-details-collapse-${item.id}`}

                            >

                                <i className={`${item.icon} me-2`}></i>

                                {item.title}

                            </button>

                        </h2>



                        <div

                            id={`portfolio-details-collapse-${item.id}`}

                            className={`accordion-collapse collapse ${item.show ? "show" : ""

                                }`}

                            data-bs-parent="#portfolio-details-projectAccordion"

                        >

                            <div className="accordion-body">

                                {item.body}

                            </div>

                        </div>

                    </div>

                ))

            }

        </div>

    );

}