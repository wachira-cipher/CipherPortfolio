export default function SuccessStory({
    service
}) {


    if (!service) {


        return null;


    }




    return (

        <div className="success-story">





            <div className="story-quote">


                <p>

                    "{service.shortDescription}"

                </p>


            </div>







            <div className="story-author">



                <img

                    src="/assets/img/person/person-m-8.webp"

                    alt="Client Success"

                    className="author-avatar"

                />






                <div className="author-details">



                    <h5>

                        Client Success Story

                    </h5>




                    <span>

                        {service.category}

                    </span>




                    <small>

                        Digital Solutions Partner

                    </small>



                </div>




            </div>









            <div className="story-metrics">



                <div className="metric">


                    <span className="metric-value">

                        {
                            service.features?.length || 0
                        }

                    </span>



                    <span className="metric-label">

                        Features Delivered

                    </span>


                </div>









                <div className="metric">


                    <span className="metric-value">

                        {
                            service.technologies?.length || 0
                        }

                    </span>



                    <span className="metric-label">

                        Technologies Used

                    </span>


                </div>





            </div>





        </div>

    );

}