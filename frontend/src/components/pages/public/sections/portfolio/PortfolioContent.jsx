import React from "react";
import ProjectAccordion from "./ProjectAccordion";
import ProjectFeatures from "./ProjectFeatures";

export default function PortfolioContent() {
    return (
        <div className="portfolio-details-content">
            {/* Project Meta */}
            <div className="project-meta">
                <div className="badge-wrapper">
                    <span className="project-badge">UX/UI Design</span>
                </div>

                <div className="date-client">
                    <div className="meta-item">
                        <i className="bi bi-calendar-check"></i>
                        <span>September 2024</span>
                    </div>

                    <div className="meta-item">
                        <i className="bi bi-buildings"></i>
                        <span>DigitalCraft Solutions</span>
                    </div>
                </div>
            </div>

            {/* Project Title */}
            <h2 className="project-title">
                Innovative Financial Dashboard App
            </h2>

            {/* Website */}
            <div className="project-website">
                <i className="bi bi-link-45deg"></i>

                <a
                    href="https://projectwebsite.example.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    projectwebsite.example.com
                </a>
            </div>

            {/* Overview */}
            <div className="project-overview">
                <p className="lead">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas varius tortor nibh, sit amet tempor nibh finibus
                    et. Aenean eu enim justo. Vestibulum aliquam hendrerit
                    molestie.
                </p>

                <ProjectAccordion />
            </div>

            {/* Features */}
            <ProjectFeatures />


        </div>
    );
}