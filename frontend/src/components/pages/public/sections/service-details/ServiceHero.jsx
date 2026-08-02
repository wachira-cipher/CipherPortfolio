export default function ServiceHero({
    service
}) {


    if (!service) {


        return null;


    }



    return (

        <div
            className="service-hero"
            data-aos="fade-up"
            data-aos-delay="100"
        >


            <div className="service-meta">


                <span className="service-category">

                    {
                        service.category ||
                        "Software Development"
                    }

                </span>




                <span className="reading-time">

                    5 min read

                </span>


            </div>





            <h1>

                {
                    service.title
                }

            </h1>






            <p className="service-description">

                {
                    service.shortDescription
                }

            </p>





        </div>

    );

}