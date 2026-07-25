const SocialSource = () => {


    const sources = [

        {
            icon: "mdi-facebook",
            name: "Facebook",
            sales: "125 sales",
            bg: "primary"
        },

        {
            icon: "mdi-twitter",
            name: "Twitter",
            sales: "112 sales",
            bg: "info"
        },

        {
            icon: "mdi-instagram",
            name: "Instagram",
            sales: "104 sales",
            bg: "pink"
        }

    ];



    return (

        <div className="card">


            <div className="card-body">



                <h4 className="card-title">
                    Social Source
                </h4>




                <div className="text-center">


                    <div className="avatar-sm mx-auto mb-4">

                        <span className="avatar-title rounded-circle bg-primary-subtle font-size-24">

                            <i className="mdi mdi-facebook text-primary"></i>

                        </span>

                    </div>



                    <h5>

                        <a href="#" className="text-reset">

                            Facebook -

                            <span className="text-muted font-16">
                                125 sales
                            </span>

                        </a>

                    </h5>



                    <p className="text-muted">

                        Maecenas nec odio et ante tincidunt tempus.
                        Donec vitae sapien ut libero venenatis faucibus tincidunt.

                    </p>


                </div>





                <div className="row mt-4">


                    {
                        sources.map((source, index) => (


                            <div
                                className="col-4"
                                key={index}
                            >


                                <div className="social-source text-center mt-3">


                                    <div className="avatar-xs mx-auto mb-3">


                                        <span
                                            className={`avatar-title rounded-circle bg-${source.bg} font-size-16`}
                                        >


                                            <i className={`mdi ${source.icon} text-white`}></i>


                                        </span>


                                    </div>



                                    <h5 className="font-size-15">

                                        {source.name}

                                    </h5>



                                    <p className="text-muted mb-0">

                                        {source.sales}

                                    </p>



                                </div>


                            </div>


                        ))
                    }


                </div>





                <div className="mt-3 text-center">


                    <a
                        href="#"
                        className="text-primary font-size-14 fw-medium"
                    >

                        View All Sources

                        <i className="mdi mdi-chevron-right"></i>

                    </a>


                </div>



            </div>


        </div>

    );

};


export default SocialSource;