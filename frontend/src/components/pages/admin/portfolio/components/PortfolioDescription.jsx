import React from "react";

import { getImageUrl } from "../../../../../utils/imageUrl";



const PortfolioDescription = ({
    portfolio
}) => {



    if (!portfolio) {

        return (

            <div className="text-center">

                Loading description...

            </div>

        );

    }






    return (


        <div className="mt-4">


            <h5 className="font-size-14 mb-3">

                Portfolio Description:

            </h5>





            <div className="product-desc">





                <ul

                    className="nav nav-tabs nav-tabs-custom"

                    role="tablist"

                >



                    <li className="nav-item">


                        <a

                            className="nav-link active"

                            data-bs-toggle="tab"

                            href="#portfolio-description"

                            role="tab"

                        >

                            Description

                        </a>


                    </li>






                    <li className="nav-item">


                        <a

                            className="nav-link"

                            data-bs-toggle="tab"

                            href="#portfolio-specification"

                            role="tab"

                        >

                            Specifications

                        </a>


                    </li>






                    <li className="nav-item">


                        <a

                            className="nav-link"

                            data-bs-toggle="tab"

                            href="#portfolio-problem"

                            role="tab"

                        >

                            Problem

                        </a>


                    </li>






                    <li className="nav-item">


                        <a

                            className="nav-link"

                            data-bs-toggle="tab"

                            href="#portfolio-solution"

                            role="tab"

                        >

                            Solution

                        </a>


                    </li>



                </ul>









                <div className="tab-content border border-top-0 p-4">







                    {/* DESCRIPTION */}


                    <div

                        className="tab-pane fade show active"

                        id="portfolio-description"

                        role="tabpanel"

                    >


                        <div className="row">


                            <div className="col-sm-3 col-md-2">


                                <img


                                    src={

                                        getImageUrl(

                                            portfolio.images?.[0]

                                        )

                                    }


                                    alt={portfolio.title}


                                    className="img-fluid rounded"


                                    onError={(e) => {

                                        e.target.src =
                                            "/assets/images/product/default.jpg";

                                    }}


                                />


                            </div>







                            <div className="col-sm-9 col-md-10">


                                <div className="text-muted">


                                    <p>

                                        {
                                            portfolio.description ||

                                            "No description available."

                                        }

                                    </p>





                                    <ul className="list-unstyled product-desc-list">


                                        {
                                            portfolio.features?.length > 0 ?


                                                portfolio.features.map(

                                                    (feature, index) => (

                                                        <li key={index}>

                                                            <i className="bi bi-check-circle text-success me-1"></i>

                                                            {feature}

                                                        </li>

                                                    )

                                                )


                                                :

                                                (

                                                    <li>

                                                        No features available

                                                    </li>

                                                )

                                        }


                                    </ul>


                                </div>


                            </div>



                        </div>


                    </div>









                    {/* SPECIFICATIONS */}


                    <div

                        className="tab-pane fade"

                        id="portfolio-specification"

                        role="tabpanel"

                    >


                        <div className="table-responsive">


                            <table className="table table-nowrap mb-0">


                                <tbody>



                                    <tr>

                                        <th width="25%">

                                            Category

                                        </th>

                                        <td>

                                            {portfolio.category || "N/A"}

                                        </td>


                                    </tr>





                                    <tr>

                                        <th>

                                            Client

                                        </th>

                                        <td>

                                            {portfolio.client || "N/A"}

                                        </td>


                                    </tr>






                                    <tr>

                                        <th>

                                            Technologies

                                        </th>

                                        <td>

                                            {
                                                portfolio.technologies?.join(
                                                    ", "
                                                )
                                                ||
                                                "N/A"
                                            }

                                        </td>


                                    </tr>






                                    <tr>

                                        <th>

                                            Project Date

                                        </th>

                                        <td>

                                            {portfolio.projectDate || "N/A"}

                                        </td>


                                    </tr>






                                    <tr>

                                        <th>

                                            Status

                                        </th>

                                        <td>


                                            {
                                                portfolio.status

                                                    ?

                                                    <span className="badge bg-success">
                                                        Active
                                                    </span>

                                                    :

                                                    <span className="badge bg-danger">
                                                        Hidden
                                                    </span>

                                            }


                                        </td>


                                    </tr>






                                    <tr>

                                        <th>

                                            Featured

                                        </th>


                                        <td>

                                            {
                                                portfolio.isFeatured
                                                    ?
                                                    "Yes"
                                                    :
                                                    "No"
                                            }

                                        </td>


                                    </tr>


                                    <tr>

                                        <th>

                                            Completion Date

                                        </th>


                                        <td>
                                            {
                                                portfolio?.completedAt
                                                ||
                                                "N/A"
                                            }
                                        </td>


                                    </tr>



                                </tbody>


                            </table>


                        </div>


                    </div>









                    {/* PROBLEM */}


                    <div

                        className="tab-pane fade"

                        id="portfolio-problem"

                        role="tabpanel"

                    >


                        <div className="text-muted">


                            <h5 className="font-size-14">

                                Project Challenge

                            </h5>


                            <p>

                                {
                                    portfolio.challenge ||

                                    "No challenge information provided."

                                }

                            </p>


                        </div>


                    </div>









                    {/* SOLUTION */}


                    <div

                        className="tab-pane fade"

                        id="portfolio-solution"

                        role="tabpanel"

                    >


                        <div className="text-muted">


                            <h5 className="font-size-14">

                                Implemented Solution

                            </h5>



                            <p>

                                {
                                    portfolio.solution ||

                                    "No solution information provided."

                                }

                            </p>


                        </div>


                    </div>






                </div>


            </div>


        </div>


    );


};



export default PortfolioDescription;