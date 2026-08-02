export default function ServiceOverview({
    service
}) {


    if (!service) {


        return null;


    }



    const stats = [

        {
            number: service.features?.length || "0",
            label: "Features Included"
        },


        {
            number: service.technologies?.length || "0",
            label: "Technologies"
        },


        {
            number: service.isFeatured ? "Yes" : "No",
            label: "Featured Service"
        }

    ];






    return (

        <div className="overview-card">



            <div className="overview-header">


                <h4>
                    Service Overview
                </h4>


            </div>








            <div className="overview-stats">



                {
                    stats.map(

                        (stat, index) => (


                            <div
                                className="stat-item"
                                key={index}
                            >


                                <div className="stat-number">

                                    {
                                        stat.number
                                    }

                                </div>



                                <div className="stat-label">

                                    {
                                        stat.label
                                    }

                                </div>


                            </div>


                        )

                    )
                }



            </div>









            <div className="overview-details">






                <div className="detail-row">


                    <span className="detail-label">

                        Category

                    </span>




                    <span className="detail-value">

                        {
                            service.category
                        }

                    </span>



                </div>








                <div className="detail-row">


                    <span className="detail-label">

                        Starting Price

                    </span>




                    <span className="detail-value">


                        {
                            service.startingPrice > 0

                                ?

                                `$${service.startingPrice}`

                                :

                                "Custom Quote"

                        }


                    </span>



                </div>









                <div className="detail-row">


                    <span className="detail-label">

                        Status

                    </span>




                    <span className="detail-value">


                        {
                            service.status

                                ?

                                "Available"

                                :

                                "Currently Unavailable"

                        }


                    </span>



                </div>






            </div>





        </div>

    );

}