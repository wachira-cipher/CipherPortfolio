export default function ServiceBenefits() {

    const benefits = [
        {
            icon: "bi-lightning-charge",
            title: "Efficiency Boost",
            description:
                "Curabitur arcu erat accumsan id imperdiet et porttitor at sem."
        },

        {
            icon: "bi-shield-check",
            title: "Risk Mitigation",
            description:
                "Pellentesque in ipsum id orci porta dapibus vestibulum ante ipsum."
        },

        {
            icon: "bi-graph-up",
            title: "Growth Acceleration",
            description:
                "Vivamus suscipit tortor eget felis porttitor volutpat mauris blandit."
        },

        {
            icon: "bi-people",
            title: "Team Alignment",
            description:
                "Donec rutrum congue leo eget malesuada vivamus magna justo lacinia."
        }
    ];


    return (

        <div
            className="benefits-grid"
            data-aos="fade-up"
            data-aos-delay="400"
        >

            {benefits.map((benefit, index) => (

                <div
                    className="benefit-card"
                    key={index}
                >

                    <div className="benefit-icon">

                        <i className={`bi ${benefit.icon}`}></i>

                    </div>


                    <h4>
                        {benefit.title}
                    </h4>


                    <p>
                        {benefit.description}
                    </p>


                </div>

            ))}


        </div>

    );
}