import React from "react";


const TestimonialMessageForm = ({
    formData,
    handleInputChange,
    errors
}) => {


    return (

        <div>





            {
                errors.message && (

                    <div className="alert alert-danger mb-3">

                        {errors.message}

                    </div>

                )

            }







            {/* RATING */}

            <div className="mb-3">


                <label className="form-label">

                    Rating

                </label>



                <select

                    className={`form-select ${errors.rating
                            ? "is-invalid"
                            : ""
                        }`}

                    value={
                        formData.rating
                    }

                    onChange={(e) =>
                        handleInputChange(
                            "rating",
                            Number(
                                e.target.value
                            )
                        )
                    }

                >


                    <option value="">

                        Select Rating

                    </option>



                    <option value="1">

                        ★☆☆☆☆ - 1 Star

                    </option>



                    <option value="2">

                        ★★☆☆☆ - 2 Stars

                    </option>



                    <option value="3">

                        ★★★☆☆ - 3 Stars

                    </option>



                    <option value="4">

                        ★★★★☆ - 4 Stars

                    </option>



                    <option value="5">

                        ★★★★★ - 5 Stars

                    </option>



                </select>



                {
                    errors.rating && (

                        <div className="invalid-feedback">

                            {errors.rating}

                        </div>

                    )
                }


            </div>









            {/* MESSAGE */}

            <div className="mb-0">


                <label className="form-label">

                    Testimonial Message

                </label>




                <textarea

                    rows="5"

                    className={`form-control ${errors.message
                            ? "is-invalid"
                            : ""
                        }`}

                    placeholder="Write client feedback here..."

                    value={
                        formData.message
                    }

                    onChange={(e) =>
                        handleInputChange(
                            "message",
                            e.target.value
                        )
                    }

                />




                {
                    errors.message && (

                        <div className="invalid-feedback">

                            {errors.message}

                        </div>

                    )
                }



            </div>






        </div>

    );


};


export default TestimonialMessageForm;