import React from "react";
import PortfolioMedia from "./sections/portfolio/PortfolioMedia";
import PortfolioContent from "./sections/portfolio/PortfolioContent";

export default function PortfolioDetails() {
    return (
        <section
            id="portfolio-details"
            className="portfolio-details section"
        >
            {/* Section Title */}
            <div className="container section-title" data-aos="fade-up">
                <h2>Portfolio Details</h2>

                <p>
                    Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
                    consectetur velit. Sed ut perspiciatis unde omnis iste natus error
                    sit voluptatem accusantium doloremque laudantium totam rem aperiam.
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
                        <PortfolioMedia />
                    </div>

                    <div
                        className="col-lg-6"
                        data-aos="fade-left"
                    >
                        <PortfolioContent />
                    </div>

                </div>
            </div>
        </section>
    );
}