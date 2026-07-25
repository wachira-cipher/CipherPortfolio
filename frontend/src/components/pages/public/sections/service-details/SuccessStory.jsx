export default function SuccessStory() {

    return (

        <div className="success-story">


            <div className="story-quote">

                <p>
                    "Curabitur non nulla sit amet nisl tempus convallis quis
                    ac lectus. Pellentesque habitant morbi tristique senectus
                    et netus et malesuada fames ac turpis egestas."
                </p>

            </div>




            <div className="story-author">


                <img
                    src="/assets/img/person/person-m-8.webp"
                    alt="Michael Chen"
                    className="author-avatar"
                />



                <div className="author-details">


                    <h5>
                        Michael Chen
                    </h5>


                    <span>
                        Operations Director
                    </span>


                    <small>
                        TechCorp Industries
                    </small>


                </div>


            </div>





            <div className="story-metrics">


                <div className="metric">

                    <span className="metric-value">
                        45%
                    </span>

                    <span className="metric-label">
                        Cost Reduction
                    </span>

                </div>





                <div className="metric">

                    <span className="metric-value">
                        3x
                    </span>

                    <span className="metric-label">
                        Speed Increase
                    </span>

                </div>



            </div>



        </div>

    );
}