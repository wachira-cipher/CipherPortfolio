import React, {
    useEffect,
    useState
} from "react";


import {
    toast
} from "react-toastify";


import {
    getSkills
} from "../../../../../api/skills.api";






export default function SkillsSection() {



    const [skills, setSkills] = useState([]);


    const [loading, setLoading] = useState(true);


    const [expandedSkill, setExpandedSkill] = useState(null);









    /*
    ==========================
        FETCH SKILLS
    ==========================
    */


    useEffect(() => {


        const fetchSkills = async () => {


            try {


                const response = await getSkills(
                    1,
                    100
                );



                setSkills(

                    response.data.skills || []

                );



            }


            catch (error) {


                console.error(error);


                toast.error(
                    "Failed loading skills"
                );


            }


            finally {


                setLoading(false);


            }


        };



        fetchSkills();



    }, []);









    return (


        <section id="skills" className="skills section">





            {/* Section Title */}


            <div
                className="container section-title"
                data-aos="fade-up"
            >


                <h2>

                    Skills

                </h2>



                <p>

                    Technologies and tools I use to build modern,
                    scalable digital solutions.

                </p>


            </div>









            <div
                className="container"
                data-aos="fade-up"
                data-aos-delay="100"
            >



                <div className="row g-4 skills-animation">






                    {
                        loading

                            ?

                            (

                                <div className="text-center">

                                    Loading skills...

                                </div>

                            )


                            :


                            skills.length === 0


                                ?

                                (

                                    <div className="text-center">

                                        No skills available

                                    </div>


                                )


                                :


                                skills.map(

                                    (skill, index) => (


                                        <div

                                            key={skill._id}

                                            className="col-md-6 col-lg-3"

                                            data-aos="fade-up"

                                            data-aos-delay={
                                                (index + 1) * 100
                                            }

                                        >



                                            <div className="skill-box">






                                                <h3>

                                                    {
                                                        skill.name
                                                    }

                                                </h3>








                                                <p

                                                    tabIndex="0"

                                                    onBlur={() =>
                                                        setExpandedSkill(null)
                                                    }

                                                >


                                                    {
                                                        expandedSkill === skill._id

                                                            ?

                                                            skill.description

                                                            :

                                                            `${skill.description?.slice(0, 45)}${skill.description?.length > 45 ? "..." : ""}`

                                                    }




                                                    {
                                                        skill.description?.length > 45 &&


                                                        <button

                                                            type="button"

                                                            className="btn btn-link p-0 ms-2"

                                                            onClick={() =>

                                                                setExpandedSkill(

                                                                    expandedSkill === skill._id

                                                                        ?

                                                                        null

                                                                        :

                                                                        skill._id

                                                                )

                                                            }

                                                        >


                                                            {
                                                                expandedSkill === skill._id

                                                                    ?

                                                                    "Read Less"

                                                                    :

                                                                    "Read More"
                                                            }


                                                        </button>


                                                    }


                                                </p>









                                                <span className="text-end d-block">

                                                    {
                                                        skill.percentage
                                                    }%

                                                </span>









                                                <div className="progress">


                                                    <div

                                                        className="progress-bar"

                                                        role="progressbar"

                                                        style={{

                                                            width:

                                                                `${skill.percentage}%`

                                                        }}


                                                        aria-valuenow={
                                                            skill.percentage
                                                        }

                                                        aria-valuemin="0"

                                                        aria-valuemax="100"

                                                    >

                                                    </div>


                                                </div>





                                            </div>




                                        </div>



                                    )

                                )


                    }





                </div>





            </div>






        </section>


    );


}