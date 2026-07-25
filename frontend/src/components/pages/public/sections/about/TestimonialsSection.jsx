import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function TestimonialsSection() {
    const testimonials = [
        {
            name: "Saul Goodman",
            role: "CEO & Founder",
            image: "/assets/portfolio/img/person/person-m-9.webp",
            quote:
                "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
        },
        {
            name: "Sara Wilsson",
            role: "Designer",
            image: "/assets/portfolio/img/person/person-f-5.webp",
            quote:
                "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
        },
        {
            name: "Jena Karlis",
            role: "Store Owner",
            image: "/assets/portfolio/img/person/person-f-12.webp",
            quote:
                "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
        },
        {
            name: "John Larson",
            role: "Entrepreneur",
            image: "/assets/portfolio/img/person/person-m-12.webp",
            quote:
                "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.",
        },
    ];

    return (
        <section id="testimonials" className="testimonials section">
            {/* Section Title */}
            <div className="container section-title" data-aos="fade-up">
                <h2>Testimonials</h2>
                <p>
                    Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
                    consectetur velit
                </p>
            </div>

            <div
                className="container"
                data-aos="fade-up"
                data-aos-delay="100"
            >
                <Swiper
                    modules={[Pagination, Autoplay]}
                    loop
                    speed={600}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    spaceBetween={30}
                >
                    {testimonials.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="testimonial-item">
                                <div className="row gy-4 justify-content-center">

                                    <div className="col-lg-6">
                                        <div className="testimonial-content">

                                            <p>
                                                <i className="bi bi-quote quote-icon-left"></i>

                                                <span>{item.quote}</span>

                                                <i className="bi bi-quote quote-icon-right"></i>
                                            </p>

                                            <h3>{item.name}</h3>

                                            <h4>{item.role}</h4>

                                            <div className="stars">
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="col-lg-2 text-center">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="img-fluid testimonial-img"
                                        />
                                    </div>

                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}