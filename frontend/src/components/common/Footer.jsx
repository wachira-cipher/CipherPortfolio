import { Link } from "react-router-dom";
import siteConfig from "../../config/site.config";


export default function Footer() {


    return (

        <footer
            id="footer"
            className="footer"
        >

            <div className="container">


                <div className="copyright text-center">

                    <p>

                        Copyright ©

                        <span>
                            {new Date().getFullYear()}
                        </span>


                        <strong className="px-1 sitename">

                            <Link to="/">

                                {siteConfig.name}

                            </Link>

                        </strong>


                        <span>

                            All Rights Reserved
                            <br />

                        </span>


                    </p>

                </div>





                <div className="social-links d-flex justify-content-center">


                    <a
                        href={siteConfig.socialLinks.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                    >

                        <i className="bi bi-twitter-x"></i>

                    </a>



                    <a
                        href={siteConfig.socialLinks.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                    >

                        <i className="bi bi-facebook"></i>

                    </a>




                    <a
                        href={siteConfig.socialLinks.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                    >

                        <i className="bi bi-instagram"></i>

                    </a>




                    <a
                        href={siteConfig.socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                    >

                        <i className="bi bi-linkedin"></i>

                    </a>



                </div>






                <div className="credits">


                    Designed by{" "}


                    <a
                        href={siteConfig.designerUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >

                        {siteConfig.designer}

                    </a>



                </div>




            </div>


        </footer>

    );

}