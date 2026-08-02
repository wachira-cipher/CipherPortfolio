import React, {
    useEffect,
    useState
} from "react";


import {
    toast
} from "react-toastify";


import {
    Link
} from "react-router-dom";


import {
    getProfile
} from "../../../../../api/profile.api";





export default function AboutSection() {



    const [profile, setProfile] = useState(null);


    const [loading, setLoading] = useState(true);









    useEffect(() => {


        const fetchProfile = async () => {


            try {


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



        fetchProfile();


    }, []);









    if (loading) {


        return (

            <section className="about section">

                <div className="container text-center">

                    Loading...

                </div>

            </section>

        );


    }








    if (!profile) {


        return null;


    }









    return (

        <>

            {/* About Section */}

            <section id="about" className="about section">





                {/* Section Title */}

                <div className="container section-title" data-aos="fade-up">

                    <h2>
                        About
                    </h2>

                    <p>
                        Explore my background, skills, experience, and the journey
                        behind building modern digital solutions through technology,
                        creativity, and continuous learning.
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


                                    Hi, I'm {profile.name}

                                    {" - "}

                                    {profile.title}

                                    , crafting meaningful digital experiences


                                </h2>







                                <p className="lead">


                                    {profile.bio}



                                </p>








                                <p>

                                    My work focuses on creating reliable applications,
                                    solving technical challenges, and transforming ideas
                                    into scalable digital products through modern
                                    technologies.

                                </p>








                                <div className="cta-group">


                                    <Link
                                        to="/portfolio"
                                        className="btn-ghost"
                                    >

                                        View My Work

                                        <i className="bi bi-arrow-up-right"></i>

                                    </Link>






                                    <a
                                        href="#"
                                        className="link-underline"
                                    >

                                        Download Resume

                                        <i className="bi bi-download"></i>

                                    </a>


                                </div>









                                {/* Social Links */}


                                <div
                                    className="social-links mt-4 d-flex"
                                    style={{
                                        gap: "15px"
                                    }}
                                >


                                    {
                                        profile.socialLinks?.github &&

                                        <a
                                            href={profile.socialLinks.github}
                                            target="_blank"
                                            rel="noreferrer"
                                        >

                                            <i className="bi bi-github"></i>

                                        </a>

                                    }





                                    {
                                        profile.socialLinks?.linkedin &&

                                        <a
                                            href={profile.socialLinks.linkedin}
                                            target="_blank"
                                            rel="noreferrer"
                                        >

                                            <i className="bi bi-linkedin"></i>

                                        </a>

                                    }





                                    {
                                        profile.socialLinks?.twitter &&

                                        <a
                                            href={profile.socialLinks.twitter}
                                            target="_blank"
                                            rel="noreferrer"
                                        >

                                            <i className="bi bi-twitter"></i>

                                        </a>

                                    }


                                    { }


                                    {
                                        profile.socialLinks?.website &&

                                        <a
                                            href={profile.socialLinks.website}
                                            target="_blank"
                                            rel="noreferrer"
                                        >

                                            <i className="bi bi-globe"></i>

                                        </a>

                                    }


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

                                    src={
                                        profile.image

                                            ?

                                            `http://localhost:5000${profile.image}`

                                            :

                                            "/assets/portfolio/img/profile/cipher.webp"
                                    }

                                    alt={profile.name}

                                    className="img-fluid profile-photo"

                                />

                            </figure>


                        </div>





                    </div>

                    {/* End Intro + Photo */}









                    {/* Skills Grid */}

                    {/* KEEP HARDCODED */}

                    {/* Journey Timeline */}

                    {/* KEEP HARDCODED */}

                    {/* Quote */}

                    {/* KEEP HARDCODED */}

                    {/* Fun Facts */}

                    {/* KEEP HARDCODED */}







                </div>


            </section>

            {/* /About Section */}


        </>

    );


}