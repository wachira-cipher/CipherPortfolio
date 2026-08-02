export default function ServiceBenefits({
    service
}) {


    if (!service) {


        return null;


    }



    const icons = [

        "bi-lightning-charge",

        "bi-shield-check",

        "bi-graph-up",

        "bi-people"

    ];





    return (

        <div
            className="benefits-grid"
            data-aos="fade-up"
            data-aos-delay="400"
        >


            {
                service.features?.map(

                    (feature, index) => (


                        <div
                            className="benefit-card"
                            key={index}
                        >



                            <div className="benefit-icon">


                                <i

                                    className={
                                        `bi ${icons[index % icons.length]
                                        }`
                                    }

                                ></i>


                            </div>





                            <h4>

                                {
                                    feature
                                }

                            </h4>





                            <p>

                                {

                                    service.shortDescription

                                }

                            </p>




                        </div>


                    )

                )
            }



        </div>

    );

}