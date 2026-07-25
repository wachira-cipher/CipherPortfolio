import React from "react";

export default function ProjectAccordion() {
    const accordionItems = [
        {
            id: 1,
            icon: "bi bi-clipboard-data",
            title: "Project Overview",
            show: true,
            body: (
                <>
                    <p>
                        Cras ultricies ligula sed magna dictum porta. Nulla quis lorem ut
                        libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus
                        convallis quis ac lectus. Pellentesque in ipsum id orci porta
                        dapibus. Vestibulum ac diam sit amet quam vehicula elementum sed sit
                        amet dui.
                    </p>
                </>
            ),
        },
        {
            id: 2,
            icon: "bi bi-exclamation-diamond",
            title: "The Challenge",
            show: false,
            body: (
                <>
                    <p>
                        Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus
                        suscipit tortor eget felis porttitor volutpat. Curabitur aliquet
                        quam id dui posuere blandit. Praesent sapien massa, convallis a
                        pellentesque nec, egestas non nisi. Sed porttitor lectus nibh.
                    </p>
                </>
            ),
        },
        {
            id: 3,
            icon: "bi bi-award",
            title: "The Solution",
            show: false,
            body: (
                <>
                    <p>
                        Donec sollicitudin molestie malesuada. Curabitur arcu erat,
                        accumsan id imperdiet et, porttitor at sem. Vestibulum ante ipsum
                        primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                        Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet
                        ligula.
                    </p>
                </>
            ),
        },
    ];

    return (
        <div
            className="accordion project-accordion"
            id="portfolio-details-projectAccordion"
        >
            {accordionItems.map((item, index) => (
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
            ))}
        </div>
    );
}