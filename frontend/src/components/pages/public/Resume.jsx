import React, {
    useEffect,
    useState
} from "react";


import {
    toast
} from "react-toastify";



import { getResume } from "../../../api/resume.api";


import { getSkills } from "../../../api/skills.api";






export default function Resume() {



    const [resume, setResume] = useState(null);


    const [skills, setSkills] = useState([]);


    const [loading, setLoading] = useState(true);









    useEffect(() => {


        const fetchData = async () => {


            try {


                const resumeResponse = await getResume();


                const skillsResponse = await getSkills(
                    1,
                    100
                );



                setResume(

                    resumeResponse.data.resume

                );



                setSkills(

                    skillsResponse.data.skills || []

                );



            }

            catch (error) {


                console.error(
                    error
                );


                toast.error(
                    "Failed loading resume"
                );


            }


            finally {


                setLoading(false);


            }


        };



        fetchData();


    }, []);










    if (loading) {


        return (

            <section className="resume section">

                <div className="container text-center">

                    Loading resume...

                </div>

            </section>

        );


    }










    if (!resume) {


        return null;


    }









    return (


        <section id="resume" className="resume section">





            {/* Section Title */}


            <div
                className="container section-title"
                data-aos="fade-up"
            >

                <h2>
                    Resume
                </h2>



                <p>

                    A summary of my academic background,
                    professional journey, technical expertise,
                    and experience building modern digital solutions.

                </p>


            </div>









            <div
                className="container"
                data-aos="fade-up"
                data-aos-delay="100"
            >




                <div className="row">







                    {/* LEFT COLUMN */}


                    <div className="col-lg-6">







                        {/* EDUCATION */}


                        <div
                            className="resume-item"
                            data-aos="fade-up"
                        >


                            <h3 className="resume-title">

                                Education

                            </h3>





                            <div className="resume-content">


                                {
                                    resume.education?.map(
                                        (education, index) => (


                                            <article
                                                className="education-item"
                                                key={index}
                                            >


                                                <h4>

                                                    {
                                                        education.title
                                                    }

                                                </h4>




                                                <h5>

                                                    {
                                                        education.period
                                                    }

                                                </h5>






                                                <p className="institution">

                                                    <em>

                                                        {
                                                            education.institution
                                                        }

                                                    </em>


                                                </p>






                                                <p>

                                                    {
                                                        education.description
                                                    }

                                                </p>



                                            </article>


                                        )
                                    )
                                }





                            </div>


                        </div>













                        {/* SKILLS */}



                        <div
                            className="resume-item skills-animation"
                            data-aos="fade-up"
                        >



                            <h3 className="resume-title">

                                Professional Skills

                            </h3>






                            <div className="resume-content">



                                {
                                    skills.map(

                                        (skill, index) => (



                                            <div
                                                className="skill-item"
                                                key={skill._id}
                                            >


                                                <h4>

                                                    {
                                                        skill.name
                                                    }

                                                </h4>





                                                <div className="progress">


                                                    <div

                                                        className="progress-bar"

                                                        role="progressbar"


                                                        aria-valuenow={
                                                            skill.percentage
                                                        }


                                                        aria-valuemin="0"


                                                        aria-valuemax="100"


                                                        style={{

                                                            width:

                                                                `${skill.percentage}%`

                                                        }}

                                                    >


                                                    </div>



                                                </div>




                                            </div>


                                        )

                                    )
                                }



                            </div>


                        </div>







                    </div>















                    {/* RIGHT COLUMN */}



                    <div className="col-lg-6">






                        {/* EXPERIENCE */}



                        <div
                            className="resume-item"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >



                            <h3 className="resume-title">

                                Professional Experience

                            </h3>






                            <div className="resume-content">



                                {
                                    resume.experience?.map(

                                        (experience, index) => (



                                            <article

                                                className="experience-item"

                                                key={index}

                                            >




                                                <h4>

                                                    {
                                                        experience.title
                                                    }

                                                </h4>






                                                <h5>

                                                    {
                                                        experience.period
                                                    }

                                                </h5>






                                                <p className="company">

                                                    <em>

                                                        {
                                                            experience.company
                                                        }

                                                    </em>


                                                </p>








                                                <ul>


                                                    {
                                                        experience.responsibilities?.map(

                                                            (item, i) => (


                                                                <li key={i}>

                                                                    {
                                                                        item
                                                                    }


                                                                </li>


                                                            )

                                                        )
                                                    }



                                                </ul>





                                            </article>




                                        )


                                    )
                                }





                            </div>






                        </div>








                    </div>







                </div>






            </div>





        </section>


    );


}