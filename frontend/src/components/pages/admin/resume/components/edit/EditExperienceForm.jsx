import React from "react";


const EditExperienceForm = ({
    experience,
    handleExperienceChange,
    addExperience,
    removeExperience,
    errors
}) => {


    return (

        <div>


            {
                errors.experience && (

                    <div className="alert alert-danger mb-3">

                        {errors.experience}

                    </div>

                )
            }





            {
                experience.map((item, index) => (


                    <div
                        key={index}
                        className="border rounded p-3 mb-3"
                    >


                        <div className="d-flex justify-content-between mb-3">


                            <h6>

                                Experience #{index + 1}

                            </h6>



                            {
                                experience.length > 1 &&

                                <button

                                    type="button"

                                    className="btn btn-danger btn-sm"

                                    onClick={() =>
                                        removeExperience(index)
                                    }

                                >

                                    <i className="bi bi-trash"></i>

                                </button>

                            }


                        </div>







                        <div className="mb-3">


                            <label className="form-label">

                                Job Title

                            </label>


                            <input

                                type="text"

                                className={`form-control ${errors.experience &&
                                        !item.title.trim()
                                        ?
                                        "is-invalid"
                                        :
                                        ""
                                    }`}

                                value={item.title}

                                onChange={(e) =>

                                    handleExperienceChange(
                                        index,
                                        "title",
                                        e.target.value
                                    )

                                }

                            />


                        </div>







                        <div className="mb-3">

                            <label className="form-label">

                                Period

                            </label>


                            <input

                                type="text"

                                className="form-control"

                                value={item.period}

                                onChange={(e) =>

                                    handleExperienceChange(
                                        index,
                                        "period",
                                        e.target.value
                                    )

                                }

                            />

                        </div>







                        <div className="mb-3">


                            <label className="form-label">

                                Company

                            </label>



                            <input

                                type="text"

                                className="form-control"

                                value={item.company}

                                onChange={(e) =>

                                    handleExperienceChange(
                                        index,
                                        "company",
                                        e.target.value
                                    )

                                }

                            />


                        </div>







                        <div>


                            <label className="form-label">

                                Responsibilities

                            </label>


                            <textarea

                                rows="3"

                                className="form-control"

                                value={
                                    item.responsibilities.join(", ")
                                }

                                onChange={(e) =>

                                    handleExperienceChange(
                                        index,
                                        "responsibilities",
                                        e.target.value
                                            .split(",")
                                            .map(
                                                item => item.trim()
                                            )
                                    )

                                }

                            />


                        </div>



                    </div>


                ))

            }







            <button

                type="button"

                className="btn btn-primary"

                onClick={addExperience}

            >

                <i className="bi bi-plus-circle me-1"></i>

                Add Experience

            </button>



        </div>

    );


};


export default EditExperienceForm;