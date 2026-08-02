import React, {
    useEffect,
    useState
} from "react";


import {
    useParams
} from "react-router-dom";


import {
    toast
} from "react-toastify";


import {
    getServiceById
} from "../../../api/services.api";



import ServiceHero from "./sections/service-details/ServiceHero";
import ServiceBenefits from "./sections/service-details/ServiceBenefits";
import ImplementationTimeline from "./sections/service-details/ImplementationTimeline";
import ServiceOverview from "./sections/service-details/ServiceOverview";
import SuccessStory from "./sections/service-details/SuccessStory";
import ConsultationForm from "./sections/service-details/ConsultationForm";





export default function ServiceDetails() {


    const {
        id
    } = useParams();



    const [
        service,
        setService
    ] = useState(null);



    const [
        loading,
        setLoading
    ] = useState(true);








    useEffect(() => {


        const fetchService = async () => {


            try {


                const response =
                    await getServiceById(id);



                setService(

                    response.data.service

                );


            }


            catch (error) {


                console.error(error);


                toast.error(
                    "Failed loading service details"
                );


            }


            finally {


                setLoading(false);


            }


        };



        fetchService();



    }, [id]);










    if (loading) {


        return (

            <section className="service-details section">

                <div className="container text-center">

                    Loading service...

                </div>

            </section>

        );


    }








    if (!service) {


        return null;


    }










    return (

        <section
            id="service-details"
            className="service-details section"
        >




            {/* Section Title */}

            <div
                className="container section-title"
                data-aos="fade-up"
            >

                <h2>
                    {service.title}
                </h2>


                <p>

                    {service.shortDescription}

                </p>


            </div>









            <div
                className="container"
                data-aos="fade-up"
                data-aos-delay="100"
            >



                <div className="row">






                    <div className="col-lg-7">





                        <ServiceHero
                            service={service}
                        />







                        <div
                            className="service-visual"
                            data-aos="zoom-in"
                            data-aos-delay="200"
                        >

                            <img

                                src={

                                    service.images?.length

                                        ?

                                        `http://localhost:5000/${service.images[0]}`

                                        :

                                        "/assets/img/services/services-7.webp"

                                }

                                alt={service.title}

                                className="img-fluid"

                            />

                        </div>








                        <div
                            className="service-narrative"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >



                            <h3>

                                {service.title}

                            </h3>




                            <p>

                                {service.description}

                            </p>






                            <ServiceBenefits
                                service={service}
                            />



                        </div>








                        <ImplementationTimeline
                            service={service}
                        />





                    </div>









                    <div className="col-lg-5">



                        <div
                            className="service-sidebar"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >



                            <ServiceOverview
                                service={service}
                            />




                            <SuccessStory
                                service={service}
                            />





                            <ConsultationForm
                                service={service}
                            />




                        </div>


                    </div>





                </div>



            </div>




        </section>

    );


}