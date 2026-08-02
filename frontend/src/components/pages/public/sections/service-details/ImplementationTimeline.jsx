export default function ImplementationTimeline({
    service
}) {


    const timeline = [

        {
            number: "1",
            title: "Discovery & Planning",
            description:
                "Understanding requirements, analyzing goals, and defining the best approach for delivering the solution.",
            duration: "Week 1-2"
        },


        {
            number: "2",
            title: "Design & Development",
            description:
                "Creating, developing, and integrating the required features using modern technologies and best practices.",
            duration: "Week 3-8"
        },


        {
            number: "3",
            title: "Testing & Deployment",
            description:
                "Testing the solution, improving performance, ensuring reliability, and preparing for production release.",
            duration: "Week 9-12"
        },


        {
            number: "4",
            title: "Optimization & Support",
            description:
                "Continuous improvements, maintenance, and scaling to meet future business and user needs.",
            duration: "Ongoing"
        }

    ];




    return (

        <div
            className="timeline-section"
            data-aos="fade-up"
            data-aos-delay="500"
        >


            <h3>

                Implementation Journey

            </h3>





            <div className="timeline">



                {
                    timeline.map(

                        (item, index) => (


                            <div
                                className="timeline-item"
                                key={index}
                            >



                                <div className="timeline-marker">


                                    <span>

                                        {
                                            item.number
                                        }

                                    </span>


                                </div>






                                <div className="timeline-content">


                                    <h4>

                                        {
                                            item.title
                                        }

                                    </h4>





                                    <p>

                                        {
                                            item.description
                                        }

                                    </p>





                                    <small>

                                        {
                                            item.duration
                                        }

                                    </small>




                                </div>





                            </div>


                        )

                    )
                }



            </div>



        </div>

    );

}