import React from "react";


const Footer = () => {


    return (

        <footer className="footer">

            <div className="container-fluid">

                <div className="row">


                    <div className="col-sm-6">

                        {new Date().getFullYear()} &copy; CipherPortfolio.

                    </div>





                    <div className="col-sm-6">


                        <div className="text-sm-end d-none d-sm-block">


                            Crafted with{" "}


                            <i className="bi bi-heart-fill text-danger"></i>


                            {" "}by{" "}



                            <span className="text-reset">

                                CyberSphereSystems

                            </span>



                        </div>


                    </div>



                </div>


            </div>


        </footer>

    );

};


export default Footer;