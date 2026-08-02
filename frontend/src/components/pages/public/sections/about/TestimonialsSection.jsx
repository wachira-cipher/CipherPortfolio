import React, {
    useEffect,
    useState
} from "react";


import {
    toast
} from "react-toastify";


import {
    Swiper,
    SwiperSlide
} from "swiper/react";


import {
    Pagination,
    Autoplay
} from "swiper/modules";


import "swiper/css";
import "swiper/css/pagination";



import {
    getTestimonials
} from "../../../../../api/testimonials.api";







export default function TestimonialsSection() {



    const [testimonials, setTestimonials] = useState([]);


    const [loading, setLoading] = useState(true);









    /*
    ==========================
        FETCH TESTIMONIALS
    ==========================
    */


    useEffect(() => {


        const fetchTestimonials = async () => {


            try {


                const response = await getTestimonials();



                setTestimonials(

                    response.data.testimonials || []

                );



            }


            catch (error) {


                console.error(error);



                toast.error(
                    "Failed loading testimonials"
                );


            }


            finally {


                setLoading(false);


            }


        };



        fetchTestimonials();



    }, []);









    return (


        <section
            id="testimonials"
            className="testimonials section"
        >





            {/* Section Title */}


            <div
                className="container section-title"
                data-aos="fade-up"
            >


                <h2>

                    Testimonials

                </h2>



                <p>

                    What people say about my work and solutions.

                </p>


            </div>









            <div

                className="container"

                data-aos="fade-up"

                data-aos-delay="100"

            >






                {
                    loading


                        ?


                        (

                            <div className="text-center">

                                Loading testimonials...

                            </div>

                        )


                        :


                        testimonials.length === 0


                            ?


                            (

                                <div className="text-center">

                                    No testimonials available

                                </div>

                            )


                            :



                            <Swiper


                                modules={[

                                    Pagination,

                                    Autoplay

                                ]}


                                loop


                                speed={600}


                                autoplay={{

                                    delay: 5000,

                                    disableOnInteraction: false

                                }}


                                pagination={{

                                    clickable: true

                                }}


                                spaceBetween={30}



                            >





                                {

                                    testimonials.map(

                                        (item, index) => (



                                            <SwiperSlide

                                                key={item._id || index}

                                            >


                                                <div className="testimonial-item">


                                                    <div className="row gy-4 justify-content-center">






                                                        <div className="col-lg-6">


                                                            <div className="testimonial-content">



                                                                <p>


                                                                    <i className="bi bi-quote quote-icon-left"></i>



                                                                    <span>

                                                                        {
                                                                            item.quote ||
                                                                            item.message
                                                                        }

                                                                    </span>



                                                                    <i className="bi bi-quote quote-icon-right"></i>


                                                                </p>






                                                                <h3>

                                                                    {
                                                                        item.name
                                                                    }

                                                                </h3>





                                                                <h4>

                                                                    {
                                                                        item.role
                                                                    }

                                                                </h4>








                                                                <div className="stars">


                                                                    {

                                                                        Array.from(

                                                                            {

                                                                                length:

                                                                                    item.rating || 5

                                                                            }

                                                                        ).map(

                                                                            (_, i) => (


                                                                                <i

                                                                                    key={i}

                                                                                    className="bi bi-star-fill"

                                                                                ></i>


                                                                            )

                                                                        )


                                                                    }


                                                                </div>





                                                            </div>


                                                        </div>









                                                        <div className="col-lg-2 text-center">


                                                            <img

                                                                src={

                                                                    item.image

                                                                        ?

                                                                        `http://localhost:5000/uploads/${item.image}`

                                                                        :

                                                                        "/assets/portfolio/img/person/person-m-9.webp"

                                                                }


                                                                alt={item.name}


                                                                className="img-fluid testimonial-img"

                                                            />


                                                        </div>







                                                    </div>


                                                </div>



                                            </SwiperSlide>



                                        )

                                    )

                                }





                            </Swiper>


                }






            </div>







        </section>


    );


}