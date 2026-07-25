export default function AboutSection() {
    return (
        <>
            {/* About Section */}
            <section id="about" className="about section">

                {/* Section Title */}
                <div className="container section-title" data-aos="fade-up">
                    <h2>About</h2>
                    <p>
                        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
                        consectetur velit. Sed ut perspiciatis unde omnis iste natus error
                        sit voluptatem accusantium doloremque laudantium totam rem aperiam
                    </p>
                </div>
                {/* End Section Title */}

                <div
                    className="container"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >

                    {/* Intro + Photo */}
                    <div className="row align-items-center justify-content-between gy-5 mb-5">

                        <div
                            className="col-lg-7"
                            data-aos="fade-right"
                            data-aos-delay="150"
                        >
                            <div className="intro-content">

                                <span className="eyebrow">
                                    Hello there
                                </span>

                                <h2 className="headline">
                                    Hi, I'm Wachira - a calm-minded creative developer crafting
                                    serene digital journeys
                                </h2>

                                <p className="lead">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Pellentesque habitant morbi tristique senectus et netus.
                                    Sed interdum, nunc non feugiat tempor, orci lorem luctus
                                    ligula, vitae rutrum nisl lorem non nulla.
                                </p>

                                <p>
                                    Integer posuere lacus in mi fringilla, eget luctus risus
                                    pulvinar. Curabitur a arcu a nisl tempus sagittis. Aenean
                                    varius, tortor sed porttitor dictum, augue eros viverra
                                    lectus, at efficitur magna lacus in risus.
                                </p>

                                <div className="cta-group">

                                    <a href="#portfolio" className="btn-ghost">
                                        View My Work{" "}
                                        <i className="bi bi-arrow-up-right"></i>
                                    </a>

                                    <a href="#" className="link-underline">
                                        Download Resume{" "}
                                        <i className="bi bi-download"></i>
                                    </a>

                                </div>

                            </div>
                        </div>

                        <div
                            className="col-lg-5"
                            data-aos="zoom-in"
                            data-aos-delay="250"
                        >

                            <figure className="profile-figure text-center text-lg-end">

                                <img
                                    src="/assets/portfolio/img/profile/cipher.webp"
                                    alt="Portrait of Alex"
                                    className="img-fluid profile-photo"
                                />

                            </figure>

                        </div>

                    </div>
                    {/* End Intro + Photo */}

                    {/* Skills Grid */}
                    <div className="mb-5">

                        <div className="row g-4">

                            <div
                                className="col-6 col-md-4 col-lg-3"
                                data-aos="fade-up"
                                data-aos-delay="120"
                            >

                                <div className="skill-item">
                                    <i className="bi bi-layout-text-window"></i>
                                    <h3>UI/UX</h3>
                                    <p>Vivamus sagittis lacus molestie placerat.</p>
                                </div>

                            </div>

                            <div
                                className="col-6 col-md-4 col-lg-3"
                                data-aos="fade-up"
                                data-aos-delay="180"
                            >

                                <div className="skill-item">
                                    <i className="bi bi-code-slash"></i>
                                    <h3>React.js</h3>
                                    <p>Maecenas pharetra magna sit amet risus.</p>
                                </div>

                            </div>

                            <div
                                className="col-6 col-md-4 col-lg-3"
                                data-aos="fade-up"
                                data-aos-delay="240"
                            >

                                <div className="skill-item">
                                    <i className="bi bi-phone"></i>
                                    <h3>Mobile-first</h3>
                                    <p>Donec id elit non mi porta gravida.</p>
                                </div>

                            </div>

                            <div
                                className="col-6 col-md-4 col-lg-3"
                                data-aos="fade-up"
                                data-aos-delay="300"
                            >

                                <div className="skill-item">
                                    <i className="bi bi-camera"></i>
                                    <h3>Photography</h3>
                                    <p>Aliquam euismod nunc at augue cursus.</p>
                                </div>

                            </div>

                        </div>

                    </div>
                    {/* End Skills Grid */}

                    {/* Journey Timeline */}

                    <div className="mb-5">

                        <div className="row g-4">

                            <div
                                className="col-md-6 col-lg-3"
                                data-aos="fade-up"
                                data-aos-delay="120"
                            >

                                <article className="timeline-item">
                                    <span className="dot"></span>

                                    <time>2018</time>

                                    <h4>B.A. in Design</h4>

                                    <p>
                                        Quisque euismod turpis ut sapien luctus bibendum.
                                    </p>
                                </article>

                            </div>

                            <div
                                className="col-md-6 col-lg-3"
                                data-aos="fade-up"
                                data-aos-delay="180"
                            >

                                <article className="timeline-item">
                                    <span className="dot"></span>

                                    <time>2020</time>

                                    <h4>Freelance Start</h4>

                                    <p>
                                        Mauris non arcu non urna convallis vulputate.
                                    </p>
                                </article>

                            </div>

                            <div
                                className="col-md-6 col-lg-3"
                                data-aos="fade-up"
                                data-aos-delay="240"
                            >

                                <article className="timeline-item">
                                    <span className="dot"></span>

                                    <time>2022</time>

                                    <h4>Joined Creative Studio</h4>

                                    <p>
                                        Nunc sed nibh et libero fermentum posuere.
                                    </p>
                                </article>

                            </div>

                            <div
                                className="col-md-6 col-lg-3"
                                data-aos="fade-up"
                                data-aos-delay="300"
                            >

                                <article className="timeline-item">
                                    <span className="dot"></span>

                                    <time>2024</time>

                                    <h4>Lead Frontend</h4>

                                    <p>
                                        Proin commodo massa sit amet urna pretium.
                                    </p>

                                </article>

                            </div>

                        </div>

                    </div>
                    {/* End Journey Timeline */}

                    {/* Quote */}

                    <blockquote
                        className="personal-quote text-center mb-5"
                        data-aos="fade-down"
                        data-aos-delay="200"
                    >
                        <p>
                            "Building clean and meaningful experiences through thoughtful code
                            and quiet design."
                        </p>
                    </blockquote>

                    {/* End Quote */}

                    {/* Fun Facts */}

                    <div className="row g-3 justify-content-center">

                        <div
                            className="col-6 col-md-3 col-lg-2"
                            data-aos="zoom-in"
                            data-aos-delay="120"
                        >

                            <div className="fact-pill">
                                <i className="bi bi-magic"></i>
                                <span>Minimalism</span>
                            </div>

                        </div>

                        <div
                            className="col-6 col-md-3 col-lg-2"
                            data-aos="zoom-in"
                            data-aos-delay="160"
                        >

                            <div className="fact-pill">
                                <i className="bi bi-headphones"></i>
                                <span>Lo-fi Beats</span>
                            </div>

                        </div>

                        <div
                            className="col-6 col-md-3 col-lg-2"
                            data-aos="zoom-in"
                            data-aos-delay="200"
                        >

                            <div className="fact-pill">
                                <i className="bi bi-geo-alt"></i>
                                <span>City Walks</span>
                            </div>

                        </div>

                        <div
                            className="col-6 col-md-3 col-lg-2"
                            data-aos="zoom-in"
                            data-aos-delay="240"
                        >

                            <div className="fact-pill">
                                <i className="bi bi-brush"></i>
                                <span>Sketching</span>
                            </div>

                        </div>

                    </div>
                    {/* End Fun Facts */}

                </div>

            </section>
            {/* /About Section */}
        </>
    );
}