const CampaignCard = () => {

    return (

        <div className="card bg-primary">

            <div className="card-body">


                <div className="row align-items-center">


                    <div className="col-sm-8">


                        <p className="text-white font-size-18">

                            Enhance your <b>Campaign</b> for better outreach

                            <i className="mdi mdi-arrow-right"></i>

                        </p>



                        <div className="mt-4">

                            <a
                                href="javascript: void(0);"
                                className="btn btn-success waves-effect waves-light"
                            >
                                Upgrade Account!
                            </a>

                        </div>


                    </div>




                    <div className="col-sm-4">


                        <div className="mt-4 mt-sm-0">


                            <img
                                src="/assets/auth/images/setup-analytics-amico.svg"
                                className="img-fluid"
                                alt=""
                            />


                        </div>


                    </div>



                </div>


            </div>


        </div>

    );

};


export default CampaignCard;