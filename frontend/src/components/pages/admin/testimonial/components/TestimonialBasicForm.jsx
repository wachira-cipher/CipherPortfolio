import React from "react";


const TestimonialBasicForm = ({
    formData,
    handleInputChange,
    handleImageChange,
    errors
}) => {


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
                            ? "is-invalid"
                            : ""
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









            {/* IMAGE */}

            <div className="mb-3">


                <label className="form-label">

                    Profile Image

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

                    Upload client profile picture

                </small>


            </div>






        </div>

    );


};


export default TestimonialBasicForm;