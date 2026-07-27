import React from "react";
import { Link } from "react-router-dom";

import { getImageUrl } from "../../../../../utils/imageUrl";


const PortfolioGallery = ({
    portfolio
}) => {



    const images = portfolio?.images || [];





    return (


        <div className="row">



            {/* THUMBNAILS */}


            <div className="col-3">


                <div

                    className="nav flex-column nav-pills"

                    id="v-pills-tab"

                    role="tablist"

                    aria-orientation="vertical"

                >



                    {
                        images.map(

                            (image, index) => (


                                <a


                                    key={index}


                                    className={
                                        `nav-link ${index === 0
                                            ? "active"
                                            : ""
                                        }`
                                    }


                                    id={`portfolio-${index}-tab`}


                                    data-bs-toggle="pill"


                                    href={`#portfolio-${index}`}


                                    role="tab"

                                >



                                    <img


                                        src={
                                            getImageUrl(image)
                                        }


                                        alt={
                                            portfolio.title
                                        }


                                        className="img-fluid mx-auto d-block tab-img rounded"


                                        onError={(e) => {

                                            e.target.src =
                                                "/assets/images/product/default.jpg";

                                        }}


                                    />



                                </a>



                            )

                        )
                    }




                </div>


            </div>









            {/* MAIN IMAGE */}



            <div className="col-9">



                <div

                    className="tab-content position-relative"

                    id="v-pills-tabContent"

                >




                    {/* Wishlist */}


                    <div className="product-wishlist">


                        <Link to={`/admin/portfolio/${portfolio._id}`}>

                            <i className="bi bi-eye-fill"></i>

                        </Link>
                    </div>









                    {
                        images.map(

                            (image, index) => (


                                <div


                                    key={index}


                                    className={
                                        `tab-pane fade ${index === 0
                                            ? "show active"
                                            : ""
                                        }`
                                    }


                                    id={`portfolio-${index}`}


                                    role="tabpanel"

                                >



                                    <div className="product-img">


                                        <img


                                            src={
                                                getImageUrl(image)
                                            }


                                            alt={
                                                portfolio.title
                                            }


                                            className="img-fluid mx-auto d-block"


                                            data-zoom={
                                                getImageUrl(image)
                                            }


                                            onError={(e) => {

                                                e.target.src =
                                                    "/assets/images/product/default.jpg";

                                            }}


                                        />


                                    </div>



                                </div>


                            )

                        )
                    }







                </div>








                {/* ACTION BUTTONS */}



                <div className="row text-center mt-2">


                    <div className="col-sm-6">


                        <div className="d-grid">


                            <Link

                                to="/admin/portfolio/create"

                                className="btn btn-primary waves-effect waves-light mt-2 me-1"

                            >

                                <i className="bi bi-plus-circle me-2"></i>

                                Add Portfolio


                            </Link>


                        </div>


                    </div>







                    <div className="col-sm-6">


                        <div className="d-grid">


                            <Link

                                to={`/admin/portfolio/${portfolio._id}/edit`}

                                className="btn btn-light waves-effect mt-2 waves-light"

                            >

                                <i className="bi bi-pencil-square me-2"></i>

                                Edit


                            </Link>


                        </div>


                    </div>


                </div>






            </div>




        </div>


    );


};



export default PortfolioGallery;