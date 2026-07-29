import React from "react";
import { Link } from "react-router-dom";

import {
    getImageUrl
} from "../../../../../utils/imageUrl";

const ServiceGallery = ({ service }) => {

    const fallbackImage = getImageUrl(
        "uploads/default.jpg"
    );

    const images =
        service?.images?.length > 0
            ? service.images
            : [fallbackImage];

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
                        images.map((image, index) => (

                            <a
                                key={index}
                                className={`nav-link ${index === 0 ? "active" : ""}`}
                                id={`service-${index}-tab`}
                                data-bs-toggle="pill"
                                href={`#service-${index}`}
                                role="tab"
                            >

                                <img
                                    src={
                                        image === fallbackImage
                                            ? fallbackImage
                                            : getImageUrl(image)
                                    }
                                    alt={service.title}
                                    className="img-fluid mx-auto d-block tab-img rounded"
                                    onError={(e) => {
                                        e.target.src = fallbackImage;
                                    }}
                                />

                            </a>

                        ))
                    }

                </div>

            </div>

            {/* MAIN IMAGE */}

            <div className="col-9">

                <div
                    className="tab-content position-relative"
                    id="v-pills-tabContent"
                >

                    <div className="product-wishlist">

                        <Link to={`/admin/service/${service._id}`}>

                            <i className="bi bi-eye-fill"></i>

                        </Link>

                    </div>

                    {
                        images.map((image, index) => (

                            <div
                                key={index}
                                className={`tab-pane fade ${index === 0 ? "show active" : ""}`}
                                id={`service-${index}`}
                                role="tabpanel"
                            >

                                <div className="product-img">

                                    <img
                                        src={
                                            image === fallbackImage
                                                ? fallbackImage
                                                : getImageUrl(image)
                                        }
                                        alt={service.title}
                                        className="img-fluid mx-auto d-block"
                                        data-zoom={
                                            image === fallbackImage
                                                ? fallbackImage
                                                : getImageUrl(image)
                                        }
                                        onError={(e) => {
                                            e.target.src = fallbackImage;
                                        }}
                                    />

                                </div>

                            </div>

                        ))
                    }

                </div>

                {/* ACTION BUTTONS */}

                <div className="row text-center mt-2">

                    <div className="col-sm-6">

                        <div className="d-grid">

                            <Link
                                to="/admin/service/create"
                                className="btn btn-primary waves-effect waves-light mt-2 me-1"
                            >

                                <i className="bi bi-plus-circle me-2"></i>

                                Add Service

                            </Link>

                        </div>

                    </div>

                    <div className="col-sm-6">

                        <div className="d-grid">

                            <Link
                                to={`/admin/service/${service._id}/edit`}
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

export default ServiceGallery;