import { Link } from "react-router-dom";

export default function Footer() {

    return (

        <footer
            id="footer"
            className="footer"
        >

            <div className="container">


                <div className="copyright text-center">

                    <p>
                        Copyright
                        © <span>{new Date().getFullYear()}</span>

                        <strong className="px-1 sitename">
                            <Link to="/">
                                CipherPortfolio
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
                        href="https://x.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="bi bi-twitter-x"></i>
                    </a>


                    <a
                        href="https://facebook.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="bi bi-facebook"></i>
                    </a>


                    <a
                        href="https://instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="bi bi-instagram"></i>
                    </a>


                    <a
                        href="https://linkedin.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="bi bi-linkedin"></i>
                    </a>


                </div>





                <div className="credits">

                    Designed by{" "}

                    <a
                        href="https://www.cyberspheresystems.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        CybersphereSystems.com
                    </a>


                </div>



            </div>


        </footer>

    );

}