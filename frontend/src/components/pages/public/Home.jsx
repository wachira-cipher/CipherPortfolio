import React, {
    useEffect,
    useState
} from "react";

import {
    Link
} from "react-router-dom";

import {
    toast
} from "react-toastify";

import {
    getProfile
} from "../../../api/profile.api";

import {
    getImageUrl
} from "../../../utils/imageUrl";

const Home = () => {

    const [profile, setProfile] = useState(null);

    const [loading, setLoading] = useState(true);





    /*
    ==========================
        FETCH PROFILE
    ==========================
    */

    const fetchProfile = async () => {

        try {

            setLoading(true);

            const response = await getProfile();

            setProfile(
                response.data.profile
            );

        }

        catch (error) {

            console.error(error);

            toast.error(
                "Failed loading profile"
            );

        }

        finally {

            setLoading(false);

        }

    };





    useEffect(() => {

        fetchProfile();

    }, []);





    if (loading) {

        return (

            <section
                className="hero section"
            >

                <div className="container py-5 text-center">

                    Loading...

                </div>

            </section>

        );

    }





    if (!profile) {

        return (

            <section
                className="hero section"
            >

                <div className="container py-5 text-center">

                    Profile not found.

                </div>

            </section>

        );

    }





    return (

        <>

            <section
                id="hero"
                className="hero section"
            >

                <div
                    className="container"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >

                    <div className="row gy-4 align-items-center">





                        {/* LEFT */}

                        <div className="col-lg-6 order-2 order-lg-1">

                            <div className="hero-content">

                                <h1
                                    data-aos="fade-up"
                                    data-aos-delay="200"
                                >

                                    Hello, I'm{" "}

                                    <span className="highlight">

                                        {profile.name}

                                    </span>

                                </h1>





                                <h2
                                    data-aos="fade-up"
                                    data-aos-delay="300"
                                >
                                    <span
                                        className="typed"
                                        data-typed-items="
            Full Stack Developer,
            Software Engineer,
            UI/UX Designer,
            DevOps Engineer,
            Backend Developer
        "
                                    >
                                        {profile.title}
                                    </span>
                                </h2>





                                <p
                                    data-aos="fade-up"
                                    data-aos-delay="400"
                                >

                                    {profile.bio}

                                </p>





                                <div
                                    className="hero-actions"
                                    data-aos="fade-up"
                                    data-aos-delay="500"
                                >

                                    <Link
                                        to="/portfolio"
                                        className="btn btn-primary"
                                    >

                                        View My Work

                                    </Link>





                                    <Link
                                        to="/contact"
                                        className="btn btn-outline"
                                    >

                                        Get In Touch

                                    </Link>

                                </div>





                                <div
                                    className="social-links"
                                    data-aos="fade-up"
                                    data-aos-delay="600"
                                >

                                    {

                                        profile.socialLinks?.twitter && (

                                            <a
                                                href={profile.socialLinks.twitter}
                                                target="_blank"
                                                rel="noreferrer"
                                            >

                                                <i className="bi bi-twitter"></i>

                                            </a>

                                        )

                                    }






                                    {

                                        profile.socialLinks?.linkedin && (

                                            <a
                                                href={profile.socialLinks.linkedin}
                                                target="_blank"
                                                rel="noreferrer"
                                            >

                                                <i className="bi bi-linkedin"></i>

                                            </a>

                                        )

                                    }






                                    {

                                        profile.socialLinks?.github && (

                                            <a
                                                href={profile.socialLinks.github}
                                                target="_blank"
                                                rel="noreferrer"
                                            >

                                                <i className="bi bi-github"></i>

                                            </a>

                                        )

                                    }






                                    {

                                        profile.socialLinks?.website && (

                                            <a
                                                href={profile.socialLinks.website}
                                                target="_blank"
                                                rel="noreferrer"
                                            >

                                                <i className="bi bi-globe"></i>

                                            </a>

                                        )

                                    }

                                </div>

                            </div>

                        </div>







                        {/* RIGHT */}

                        <div className="col-lg-6 order-1 order-lg-2">

                            <div
                                className="hero-image"
                                data-aos="zoom-in"
                                data-aos-delay="300"
                            >

                                <div className="image-wrapper">

                                    <img

                                        src={getImageUrl(profile.image)}

                                        alt={profile.name}

                                        className="img-fluid"

                                    />





                                    {/* Floating cards remain static */}

                                    <div className="floating-elements">

                                        <div
                                            className="floating-card design"
                                            data-aos="fade-left"
                                            data-aos-delay="700"
                                        >

                                            <i className="bi bi-palette"></i>

                                            <span>

                                                Design

                                            </span>

                                        </div>





                                        <div
                                            className="floating-card code"
                                            data-aos="fade-right"
                                            data-aos-delay="800"
                                        >

                                            <i className="bi bi-code-slash"></i>

                                            <span>

                                                Code

                                            </span>

                                        </div>





                                        <div
                                            className="floating-card creativity"
                                            data-aos="fade-up"
                                            data-aos-delay="900"
                                        >

                                            <i className="bi bi-lightbulb"></i>

                                            <span>

                                                Ideas

                                            </span>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>





                    </div>

                </div>

            </section>

        </>

    );

};

export default Home;