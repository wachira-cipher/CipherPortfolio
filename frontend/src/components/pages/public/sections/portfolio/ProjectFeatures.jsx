import React from "react";

export default function ProjectFeatures() {
    const leftFeatures = [
        "Real-time Data Visualization",
        "User Role Management",
        "Secure Authentication",
    ];

    const rightFeatures = [
        "Customizable Dashboards",
        "Data Export Options",
        "Multi-device Support",
    ];

    return (
        <>
            {/* Project Features */}
            <div
                className="project-features"
                data-aos="fade-up"
                data-aos-delay="300"
            >
                <h3>
                    <i className="bi bi-stars"></i> Key Features
                </h3>

                <div className="row g-3">
                    <div className="col-md-6">
                        <ul className="feature-list">
                            {leftFeatures.map((feature, index) => (
                                <li key={index}>
                                    <i className="bi bi-check2-circle"></i>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-md-6">
                        <ul className="feature-list">
                            {rightFeatures.map((feature, index) => (
                                <li key={index}>
                                    <i className="bi bi-check2-circle"></i>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* CTA Buttons */}
            <div
                className="cta-buttons"
                data-aos="fade-up"
                data-aos-delay="400"
            >
                <a href="#" className="btn-view-project">
                    View Live Project
                </a>

                <a href="#" className="btn-next-project">
                    Next Project <i className="bi bi-arrow-right"></i>
                </a>
            </div>
        </>
    );
}