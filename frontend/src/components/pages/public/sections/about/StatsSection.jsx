export default function StatsSection() {
    return (
        <>
            {/* Stats Section */}
            <section id="stats" className="stats section dark-background">

                <div
                    className="container"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >

                    <div className="row align-items-center">

                        <div
                            className="col-lg-4"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >

                            <div className="avatars d-flex align-items-center">

                                <img
                                    src="/assets/portfolio/img/person/person-m-2.webp"
                                    alt="Avatar 1"
                                    className="rounded-circle"
                                    loading="lazy"
                                />

                                <img
                                    src="/assets/portfolio/img/person/person-m-3.webp"
                                    alt="Avatar 2"
                                    className="rounded-circle"
                                    loading="lazy"
                                />

                                <img
                                    src="/assets/portfolio/img/person/person-f-5.webp"
                                    alt="Avatar 3"
                                    className="rounded-circle"
                                    loading="lazy"
                                />

                                <img
                                    src="/assets/portfolio/img/person/person-m-5.webp"
                                    alt="Avatar 4"
                                    className="rounded-circle"
                                    loading="lazy"
                                />

                            </div>

                        </div>

                        <div className="col-lg-8">

                            <div className="row counters">

                                <div
                                    className="col-md-4"
                                    data-aos="fade-up"
                                    data-aos-delay="300"
                                >

                                    <h2>
                                        <span
                                            data-purecounter-start="0"
                                            data-purecounter-end="185"
                                            data-purecounter-duration="1"
                                            className="purecounter"
                                        ></span>
                                        +
                                    </h2>

                                    <p>Nemo enim ipsam</p>

                                </div>

                                <div
                                    className="col-md-4"
                                    data-aos="fade-up"
                                    data-aos-delay="400"
                                >

                                    <h2>
                                        <span
                                            data-purecounter-start="0"
                                            data-purecounter-end="32"
                                            data-purecounter-duration="1"
                                            className="purecounter"
                                        ></span>
                                        K
                                    </h2>

                                    <p>Voluptatem sequi</p>

                                </div>

                                <div
                                    className="col-md-4"
                                    data-aos="fade-up"
                                    data-aos-delay="500"
                                >

                                    <h2>
                                        <span
                                            data-purecounter-start="0"
                                            data-purecounter-end="128"
                                            data-purecounter-duration="1"
                                            className="purecounter"
                                        ></span>
                                        +
                                    </h2>

                                    <p>Dolor sit consectetur</p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>
            {/* /Stats Section */}
        </>
    );
}