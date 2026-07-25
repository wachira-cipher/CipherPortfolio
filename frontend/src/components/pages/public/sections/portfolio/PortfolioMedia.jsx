import React, { useEffect } from "react";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectCreative } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-creative";

export default function PortfolioMedia() {
    useEffect(() => {
        const lightbox = GLightbox({
            selector: ".portfolio-gallery",
            loop: true,
            touchNavigation: true,
            zoomable: true,
            draggable: true,
            openEffect: "zoom",
            closeEffect: "fade",
        });

        return () => {
            lightbox.destroy();
        };
    }, []);

    const sliderImages = [
        "/assets/portfolio/img/portfolio/portfolio-5.webp",
        "/assets/portfolio/img/portfolio/portfolio-7.webp",
        "/assets/portfolio/img/portfolio/portfolio-8.webp",
    ];

    const thumbnails = [
        "/assets/portfolio/img/portfolio/portfolio-4.webp",
        "/assets/portfolio/img/portfolio/portfolio-6.webp",
        "/assets/portfolio/img/portfolio/portfolio-11.webp",
        "/assets/portfolio/img/portfolio/portfolio-12.webp",
    ];

    const technologies = [
        "Angular",
        "Express.js",
        "PostgreSQL",
        "GraphQL",
        "Firebase",
    ];

    return (
        <div className="portfolio-details-media">
            {/* =========================
          Main Portfolio Slider
      ========================== */}

            <div className="main-image">
                <Swiper
                    modules={[Navigation, Autoplay, EffectCreative]}
                    navigation={{
                        nextEl: ".portfolio-next",
                        prevEl: ".portfolio-prev",
                    }}
                    loop
                    autoplay={{
                        delay: 6000,
                        disableOnInteraction: false,
                    }}
                    speed={1000}
                    effect="creative"
                    creativeEffect={{
                        prev: {
                            shadow: true,
                            translate: [0, 0, -400],
                        },
                        next: {
                            translate: ["100%", 0, 0],
                        },
                    }}
                    className="portfolio-details-slider"
                >
                    {sliderImages.map((image, index) => (
                        <SwiperSlide key={index}>
                            <a
                                href={image}
                                className="portfolio-gallery"
                                data-gallery="portfolio-details"
                            >
                                <img
                                    src={image}
                                    alt={`Portfolio ${index + 1}`}
                                    className="img-fluid"
                                />
                            </a>
                        </SwiperSlide>
                    ))}



                </Swiper>
            </div>

            {/* =========================
            Thumbnail Gallery
      ========================== */}

            <div
                className="thumbnail-grid"
                data-aos="fade-up"
                data-aos-delay="200"
            >
                <div className="row g-2 mt-3">
                    {thumbnails.map((image, index) => (
                        <div
                            className="col-3"
                            key={index}
                        >
                            <a
                                href={image}
                                className="portfolio-gallery"
                                data-gallery="portfolio-details"
                            >
                                <img
                                    src={image}
                                    alt={`Thumbnail ${index + 1}`}
                                    className="img-fluid rounded"
                                />
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            {/* =========================
            Tech Stack
      ========================== */}

            <div
                className="tech-stack-badges"
                data-aos="fade-up"
                data-aos-delay="300"
            >
                {technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                ))}
            </div>
        </div>
    );
}