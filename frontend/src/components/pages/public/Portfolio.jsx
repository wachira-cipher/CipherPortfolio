import React, { useEffect } from "react";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.css";
import { Link } from "react-router-dom";

export default function Portfolio() {

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
            keyboardNavigation: true,
        });

        return () => {
            lightbox.destroy();
        };
    }, []);

    return (
        <section id="portfolio" className="portfolio section">
            {/* Section Title */}
            <div className="container section-title" data-aos="fade-up">
                <h2>Portfolio</h2>
                <p>
                    Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
                    consectetur velit. Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium totam rem aperiam
                </p>
            </div>
            {/* End Section Title */}

            <div
                className="container"
                data-aos="fade-up"
                data-aos-delay="100"
            >
                <div
                    className="isotope-layout"
                    data-default-filter="*"
                    data-layout="masonry"
                    data-sort="original-order"
                >
                    <ul
                        className="portfolio-filters isotope-filters"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <li data-filter="*" className="filter-active">
                            All
                        </li>
                        <li data-filter=".filter-strategy">Strategy</li>
                        <li data-filter=".filter-finance">Finance</li>
                        <li data-filter=".filter-operations">Operations</li>
                        <li data-filter=".filter-technology">Technology</li>
                    </ul>
                    {/* End Portfolio Filters */}

                    <div
                        className="row gy-4 isotope-container"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        {/* Portfolio Item */}
                        <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-strategy">
                            <div className="portfolio-card">
                                <div className="portfolio-img">
                                    <img
                                        src="/assets/portfolio/img/portfolio/portfolio-1.webp"
                                        alt="Portfolio Item"
                                        className="img-fluid"
                                    />
                                    <div className="portfolio-overlay">
                                        <a
                                            href="/assets/portfolio/img/portfolio/portfolio-1.webp"
                                            className="portfolio-lightbox"
                                            data-gallery="portfolio-gallery"
                                        >
                                            <i className="bi bi-plus"></i>
                                        </a>
                                        <Link to="/portfolio-details" className="portfolio-details-link">
                                            <i className="bi bi-link"></i>
                                        </Link>
                                    </div>
                                </div>

                                <div className="portfolio-info">
                                    <h4>Business Growth Strategy</h4>
                                    <p>Strategic Planning</p>

                                    <div className="portfolio-tags">
                                        <span>Strategy</span>
                                        <span>Consulting</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Portfolio Item */}
                        <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-finance">
                            <div className="portfolio-card">
                                <div className="portfolio-img">
                                    <img
                                        src="/assets/portfolio/img/portfolio/portfolio-2.webp"
                                        alt="Portfolio Item"
                                        className="img-fluid"
                                    />
                                    <div className="portfolio-overlay">
                                        <a
                                            href="/assets/portfolio/img/portfolio/portfolio-2.webp"
                                            className="portfolio-lightbox"
                                            data-gallery="portfolio-gallery"
                                        >
                                            <i className="bi bi-plus"></i>
                                        </a>
                                        <Link to="/portfolio-details" className="portfolio-details-link">
                                            <i className="bi bi-link"></i>
                                        </Link>
                                    </div>
                                </div>

                                <div className="portfolio-info">
                                    <h4>Financial Restructuring</h4>
                                    <p>Financial Advisory</p>

                                    <div className="portfolio-tags">
                                        <span>Finance</span>
                                        <span>Investment</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Portfolio Item */}
                        <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-operations">
                            <div className="portfolio-card">
                                <div className="portfolio-img">
                                    <img
                                        src="/assets/portfolio/img/portfolio/portfolio-3.webp"
                                        alt="Portfolio Item"
                                        className="img-fluid"
                                    />
                                    <div className="portfolio-overlay">
                                        <a
                                            href="/assets/portfolio/img/portfolio/portfolio-3.webp"
                                            className="portfolio-lightbox"
                                            data-gallery="portfolio-gallery"
                                        >
                                            <i className="bi bi-plus"></i>
                                        </a>
                                        <Link to="/portfolio-details" className="portfolio-details-link">
                                            <i className="bi bi-link"></i>
                                        </Link>
                                    </div>
                                </div>

                                <div className="portfolio-info">
                                    <h4>Supply Chain Optimization</h4>
                                    <p>Operations Management</p>

                                    <div className="portfolio-tags">
                                        <span>Operations</span>
                                        <span>Logistics</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Portfolio Item */}
                        <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-technology">
                            <div className="portfolio-card">
                                <div className="portfolio-img">
                                    <img
                                        src="/assets/portfolio/img/portfolio/portfolio-4.webp"
                                        alt="Portfolio Item"
                                        className="img-fluid"
                                    />
                                    <div className="portfolio-overlay">
                                        <a
                                            href="/assets/portfolio/img/portfolio/portfolio-4.webp"
                                            className="portfolio-lightbox"
                                            data-gallery="portfolio-gallery"
                                        >
                                            <i className="bi bi-plus"></i>
                                        </a>
                                        <Link to="/portfolio-details" className="portfolio-details-link">
                                            <i className="bi bi-link"></i>
                                        </Link>
                                    </div>
                                </div>

                                <div className="portfolio-info">
                                    <h4>Digital Transformation</h4>
                                    <p>Technology Consulting</p>

                                    <div className="portfolio-tags">
                                        <span>Technology</span>
                                        <span>Innovation</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Portfolio Item */}
                        <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-strategy">
                            <div className="portfolio-card">
                                <div className="portfolio-img">
                                    <img
                                        src="/assets/portfolio/img/portfolio/portfolio-5.webp"
                                        alt="Portfolio Item"
                                        className="img-fluid"
                                    />
                                    <div className="portfolio-overlay">
                                        <a
                                            href="/assets/portfolio/img/portfolio/portfolio-5.webp"
                                            className="portfolio-lightbox"
                                            data-gallery="portfolio-gallery"
                                        >
                                            <i className="bi bi-plus"></i>
                                        </a>
                                        <Link to="/portfolio-details" className="portfolio-details-link">
                                            <i className="bi bi-link"></i>
                                        </Link>
                                    </div>
                                </div>

                                <div className="portfolio-info">
                                    <h4>Market Expansion</h4>
                                    <p>Strategic Planning</p>

                                    <div className="portfolio-tags">
                                        <span>Strategy</span>
                                        <span>Growth</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Portfolio Item */}
                        <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-finance">
                            <div className="portfolio-card">
                                <div className="portfolio-img">
                                    <img
                                        src="/assets/portfolio/img/portfolio/portfolio-6.webp"
                                        alt="Portfolio Item"
                                        className="img-fluid"
                                    />
                                    <div className="portfolio-overlay">
                                        <a
                                            href="/assets/portfolio/img/portfolio/portfolio-6.webp"
                                            className="portfolio-lightbox"
                                            data-gallery="portfolio-gallery"
                                        >
                                            <i className="bi bi-plus"></i>
                                        </a>
                                        <Link to="/portfolio-details" className="portfolio-details-link">
                                            <i className="bi bi-link"></i>
                                        </Link>
                                    </div>
                                </div>

                                <div className="portfolio-info">
                                    <h4>Investment Strategy</h4>
                                    <p>Financial Advisory</p>

                                    <div className="portfolio-tags">
                                        <span>Finance</span>
                                        <span>Investment</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Portfolio Items */}
                </div>

                <div
                    className="text-center mt-5"
                    data-aos="fade-up"
                    data-aos-delay="400"
                >
                    <a href="#portfolio" className="btn btn-primary">
                        View All Case Studies
                    </a>
                </div>
            </div>
        </section>
    );
}