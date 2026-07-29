import React from "react";

import {
    getImageUrl
} from "../../../../../../utils/imageUrl";



const EditTestimonialBasicForm = ({
    formData,
    handleInputChange,
    handleImageChange,
    handleRemoveExistingImage,
    errors
}) => {



    const fallbackImage = getImageUrl(
        "uploads/default.jpg"
    );




    return (

        <div>



            {
                errors.name && (

                    <div className="alert alert-danger mb-3">

                        {errors.name}

                    </div>

                )
            }








            {/* NAME */}

            <div className="mb-3">


                <label className="form-label">

                    Client Name

                </label>



                <input

                    type="text"

                    className={`form-control ${errors.name
                        ?
                        "is-invalid"
                        :
                        ""
                        }`}

                    placeholder="John Doe"

                    value={
                        formData.name
                    }

                    onChange={(e) =>

                        handleInputChange(
                            "name",
                            e.target.value
                        )

                    }

                />



                {
                    errors.name && (

                        <div className="invalid-feedback">

                            {errors.name}

                        </div>

                    )
                }


            </div>









            {/* POSITION */}

            <div className="mb-3">


                <label className="form-label">

                    Position

                </label>



                <input

                    type="text"

                    className="form-control"

                    placeholder="CEO / Software Engineer"

                    value={
                        formData.position
                    }

                    onChange={(e) =>

                        handleInputChange(
                            "position",
                            e.target.value
                        )

                    }

                />


            </div>









            {/* COMPANY */}

            <div className="mb-3">


                <label className="form-label">

                    Company

                </label>



                <input

                    type="text"

                    className="form-control"

                    placeholder="Company Name"

                    value={
                        formData.company
                    }

                    onChange={(e) =>

                        handleInputChange(
                            "company",
                            e.target.value
                        )

                    }

                />


            </div>









            {/* CURRENT IMAGE */}

            {
                formData.oldImage && (

                    <div className="mb-3">


                        <label className="form-label">

                            Current Image

                        </label>





                        <div className="position-relative d-inline-block">


                            <img

                                src={
                                    getImageUrl(
                                        `uploads/${formData.oldImage}`
                                    )
                                }

                                alt="Current testimonial"

                                className="rounded"

                                width="100"

                                height="100"

                                style={{
                                    objectFit: "cover"
                                }}

                            />



                            <button

                                type="button"

                                className="btn btn-danger btn-sm position-absolute top-0 end-0"

                                onClick={handleRemoveExistingImage}

                            >

                                <i className="bi bi-x"></i>

                            </button>



                        </div>


                    </div>

                )
            }









            {/* NEW IMAGE */}

            <div className="mb-3">


                <label className="form-label">

                    Replace Image

                </label>



                <input

                    type="file"

                    className="form-control"

                    accept="image/*"

                    onChange={(e) =>

                        handleImageChange(
                            e.target.files[0]
                        )

                    }

                />



                <small className="text-muted">

                    Leave empty to keep existing image

                </small>


            </div>






        </div>

    );


};



export default EditTestimonialBasicForm;