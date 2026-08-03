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
    getServices
} from "../../../api/services.api";





export default function Services() {



    const [services, setServices] = useState([]);


    const [loading, setLoading] = useState(true);









    useEffect(() => {


        const fetchServices = async () => {


            try {


                const response = await getServices(
                    1,
                    100
                );


                console.log(
                    "SERVICES API RESPONSE:",
                    response.data
                );


                setServices(
                    response.data?.services || []
                );


            }

            catch (error) {


                console.error(error);


                toast.error(
                    "Failed loading services"
                );


            }


            finally {


                setLoading(false);


            }


        };



        fetchServices();



    }, []);









    return (


        <section id="services" className="services section">



            {/* Section Title */}

            <div className="container section-title" data-aos="fade-up">

                <h2>
                    Services
                </h2>


                <p>
                    I provide reliable digital solutions including
                    software development, modern web applications,
                    user-focused designs, and technology services
                    tailored to solve real-world problems.
                </p>


            </div>





            <div
                className="container"
                data-aos="fade-up"
                data-aos-delay="100"
            >



                <div className="row justify-content-center g-5">







                    {
                        loading ?


                            (

                                <div className="text-center">

                                    Loading services...

                                </div>

                            )


                            :


                            services.length === 0 ?


                                (

                                    <div className="text-center">

                                        No services available

                                    </div>

                                )


                                :



                                services.map(

                                    (service, index) => (


                                        <div

                                            key={service._id}

                                            className="col-md-6"

                                            data-aos={
                                                index % 2 === 0

                                                    ?

                                                    "fade-right"

                                                    :

                                                    "fade-left"
                                            }

                                            data-aos-delay={
                                                ((index % 3) + 1) * 100
                                            }

                                        >



                                            <div className="service-item">





                                                <div className="service-icon">


                                                    <i

                                                        className={
                                                            service.icon ||
                                                            "bi bi-code-slash"
                                                        }

                                                    ></i>


                                                </div>









                                                <div className="service-content">





                                                    <h3>

                                                        {
                                                            service.title
                                                        }

                                                    </h3>








                                                    <p>

                                                        {
                                                            service.shortDescription
                                                        }

                                                    </p>









                                                    <Link
                                                        to={`/service-details/${service._id}`}
                                                        className="service-link"
                                                    >

                                                        <span>

                                                            Learn More

                                                        </span>


                                                        <i className="bi bi-arrow-right"></i>


                                                    </Link>







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