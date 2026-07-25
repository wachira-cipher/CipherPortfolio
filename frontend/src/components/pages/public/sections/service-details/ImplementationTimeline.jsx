export default function ImplementationTimeline() {

    const timeline = [
        {
            number: "1",
            title: "Discovery & Assessment",
            description:
                "Comprehensive analysis of current processes and identification of optimization opportunities.",
            duration: "Week 1-2"
        },

        {
            number: "2",
            title: "Strategic Planning",
            description:
                "Development of customized optimization roadmap with clear milestones and success metrics.",
            duration: "Week 3-4"
        },

        {
            number: "3",
            title: "Implementation",
            description:
                "Systematic rollout of process improvements with continuous monitoring and adjustment.",
            duration: "Week 5-12"
        },

        {
            number: "4",
            title: "Optimization & Scale",
            description:
                "Fine-tuning of implemented solutions and preparation for organization-wide scaling.",
            duration: "Week 13-16"
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


                {timeline.map((item, index) => (

                    <div
                        className="timeline-item"
                        key={index}
                    >


                        <div className="timeline-marker">

                            <span>
                                {item.number}
                            </span>

                        </div>



                        <div className="timeline-content">


                            <h4>
                                {item.title}
                            </h4>


                            <p>
                                {item.description}
                            </p>


                            <small>
                                {item.duration}
                            </small>


                        </div>


                    </div>

                ))}


            </div>


        </div>

    );
}