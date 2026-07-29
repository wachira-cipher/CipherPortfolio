import React from "react";

import {
    getImageUrl
} from "../../../../../utils/imageUrl";


const fallbackImage = getImageUrl(
    "uploads/default.jpg"
);

const ServiceDescription = ({
    service
}) => {



    if (!service) {

        return (

            <div className="text-center">

                Loading description...

            </div>

        );

    }







    return (


        <div className="mt-4">


            <h5 className="font-size-14 mb-3">

                Service Description:

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

                            href="#service-description"

                            role="tab"

                        >

                            Description

                        </a>


                    </li>






                    <li className="nav-item">


                        <a

                            className="nav-link"

                            data-bs-toggle="tab"

                            href="#service-specification"

                            role="tab"

                        >

                            Specifications

                        </a>


                    </li>






                    <li className="nav-item">


                        <a

                            className="nav-link"

                            data-bs-toggle="tab"

                            href="#service-features"

                            role="tab"

                        >

                            Features

                        </a>


                    </li>






                    <li className="nav-item">


                        <a

                            className="nav-link"

                            data-bs-toggle="tab"

                            href="#service-solution"

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

                        id="service-description"

                        role="tabpanel"

                    >


                        <div className="row">


                            <div className="col-sm-3 col-md-2">


                                <img
                                    src={
                                        service.images?.length > 0
                                            ? getImageUrl(service.images[0])
                                            : fallbackImage
                                    }
                                    alt={service.title}
                                    className="img-fluid rounded"
                                    onError={(e) => {
                                        e.target.onerror = null; // Prevent infinite loop
                                        e.target.src = fallbackImage;
                                    }}
                                />


                            </div>







                            <div className="col-sm-9 col-md-10">


                                <div className="text-muted">


                                    <p>

                                        {
                                            service.description ||

                                            "No description available."

                                        }

                                    </p>





                                </div>


                            </div>



                        </div>


                    </div>









                    {/* SPECIFICATIONS */}


                    <div

                        className="tab-pane fade"

                        id="service-specification"

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

                                            {
                                                service.category ||

                                                "N/A"
                                            }

                                        </td>


                                    </tr>





                                    <tr>

                                        <th>

                                            Icon

                                        </th>


                                        <td>

                                            {
                                                service.icon ||

                                                "N/A"
                                            }

                                        </td>


                                    </tr>






                                    <tr>

                                        <th>

                                            Status

                                        </th>

                                        <td>


                                            {
                                                service.status

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
                                                service.isFeatured

                                                    ?

                                                    "Yes"

                                                    :

                                                    "No"
                                            }

                                        </td>


                                    </tr>





                                    <tr>

                                        <th>

                                            Created

                                        </th>


                                        <td>

                                            {
                                                service.createdAt

                                                    ?

                                                    new Date(
                                                        service.createdAt
                                                    ).toLocaleDateString()

                                                    :

                                                    "N/A"
                                            }

                                        </td>


                                    </tr>



                                </tbody>


                            </table>


                        </div>


                    </div>









                    {/* FEATURES */}


                    <div

                        className="tab-pane fade"

                        id="service-features"

                        role="tabpanel"

                    >


                        <div className="text-muted">


                            <h5 className="font-size-14">

                                Service Features

                            </h5>





                            <ul className="list-unstyled product-desc-list">


                                {
                                    service.features?.length > 0 ?


                                        service.features.map(

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

                                                No features available.

                                            </li>

                                        )

                                }


                            </ul>


                        </div>


                    </div>









                    {/* SOLUTION */}


                    <div

                        className="tab-pane fade"

                        id="service-solution"

                        role="tabpanel"

                    >


                        <div className="text-muted">


                            <h5 className="font-size-14">

                                Service Solution

                            </h5>



                            <p>

                                {
                                    service.description ||

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



export default ServiceDescription;