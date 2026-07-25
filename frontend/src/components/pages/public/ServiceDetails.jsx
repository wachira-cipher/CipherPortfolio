import ServiceHero from "./sections/service-details/ServiceHero";
import ServiceBenefits from "./sections/service-details/ServiceBenefits";
import ImplementationTimeline from "./sections/service-details/ImplementationTimeline";
import ServiceOverview from "./sections/service-details/ServiceOverview";
import SuccessStory from "./sections/service-details/SuccessStory";
import ConsultationForm from "./sections/service-details/ConsultationForm";


export default function ServiceDetails() {

    return (

        <section id="service-details" className="service-details section">


            {/* Section Title */}
            <div className="container section-title" data-aos="fade-up">

                <h2>Service Details</h2>

                <p>
                    Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
                    consectetur velit. Sed ut perspiciatis unde omnis iste natus error
                    sit voluptatem accusantium doloremque laudantium totam rem aperiam
                </p>

            </div>
            {/* End Section Title */}



            <div
                className="container"
                data-aos="fade-up"
                data-aos-delay="100"
            >


                <div className="row">


                    {/* Main Content Area */}
                    <div className="col-lg-7">


                        <ServiceHero />


                        <div
                            className="service-visual"
                            data-aos="zoom-in"
                            data-aos-delay="200"
                        >

                            <img
                                src="/assets/img/services/services-7.webp"
                                alt="Business Process Optimization"
                                className="img-fluid"
                            />

                        </div>



                        <div
                            className="service-narrative"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >

                            <h3>
                                Transform Your Operations
                            </h3>


                            <p>
                                Donec rutrum congue leo eget malesuada. Vivamus magna justo,
                                lacinia eget consectetur sed, convallis at tellus.
                                Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                            </p>


                            <p>
                                Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam
                                vehicula elementum sed sit amet dui.
                            </p>


                            <ServiceBenefits />


                        </div>



                        <ImplementationTimeline />


                    </div>
                    {/* End Main Content */}




                    {/* Sidebar */}

                    <div className="col-lg-5">


                        <div
                            className="service-sidebar"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >


                            <ServiceOverview />


                            <SuccessStory />


                            <ConsultationForm />


                        </div>


                    </div>
                    {/* End Sidebar */}



                </div>


            </div>


        </section>

    );

}