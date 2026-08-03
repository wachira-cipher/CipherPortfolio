import React, {
    useEffect
} from "react";

import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.css";

import {
    Swiper,
    SwiperSlide
} from "swiper/react";

import {
    Navigation,
    Autoplay,
    EffectCreative
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-creative";

import {
    getImageUrl
} from "../../../../../utils/imageUrl";



export default function PortfolioMedia({

    portfolio

}) {


    useEffect(() => {


        const lightbox = GLightbox({

            selector: ".portfolio-gallery",

            loop: true,

            touchNavigation: true,

            zoomable: true,

            draggable: true,

            openEffect: "zoom",

            closeEffect: "fade"

        });


        return () => {

            lightbox.destroy();

        };


    }, [portfolio]);



    if (!portfolio) {

        return null;

    }



    const images = portfolio.images || [];


    return (

        <div className="portfolio-details-media">


            {/* =========================
                Main Portfolio Slider
            ========================== */}

            <div className="main-image">

                <Swiper

                    modules={[
                        Navigation,
                        Autoplay,
                        EffectCreative
                    ]}

                    navigation={{

                        nextEl: ".portfolio-next",

                        prevEl: ".portfolio-prev"

                    }}

                    loop={images.length > 1}

                    autoplay={{

                        delay: 6000,

                        disableOnInteraction: false

                    }}

                    speed={1000}

                    effect="creative"

                    creativeEffect={{

                        prev: {

                            shadow: true,

                            translate: [0, 0, -400]

                        },

                        next: {

                            translate: ["100%", 0, 0]

                        }

                    }}

                    className="portfolio-details-slider"

                >


                    {

                        images.map((image, index) => (

                            <SwiperSlide key={index}>

                                <a

                                    href={getImageUrl(image)}

                                    className="portfolio-gallery"

                                    data-gallery="portfolio-details"

                                >

                                    <img

                                        src={getImageUrl(image)}

                                        alt={`${portfolio.title} ${index + 1}`}

                                        className="img-fluid"

                                    />

                                </a>

                            </SwiperSlide>

                        ))

                    }


                </Swiper>

            </div>



            {/* =========================
                Thumbnail Gallery
            ========================== */}

            {

                images.length > 1 && (

                    <div

                        className="thumbnail-grid"

                        data-aos="fade-up"

                        data-aos-delay="200"

                    >

                        <div className="row g-2 mt-3">

                            {

                                images.map((image, index) => (

                                    <div

                                        className="col-3"

                                        key={index}

                                    >

                                        <a

                                            href={getImageUrl(image)}

                                            className="portfolio-gallery"

                                            data-gallery="portfolio-details"

                                        >

                                            <img

                                                src={getImageUrl(image)}

                                                alt={`Thumbnail ${index + 1}`}

                                                className="img-fluid rounded"

                                            />

                                        </a>

                                    </div>

                                ))

                            }

                        </div>

                    </div>

                )

            }



            {/* =========================
                Tech Stack
            ========================== */}

            {

                portfolio.technologies?.length > 0 && (

                    <div

                        className="tech-stack-badges"

                        data-aos="fade-up"

                        data-aos-delay="300"

                    >

                        {

                            portfolio.technologies.map((tech) => (

                                <span key={tech}>

                                    {tech}

                                </span>

                            ))

                        }

                    </div>

                )

            }


        </div>

    );

}