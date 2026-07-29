import React from "react";


const ExperienceForm = ({
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

                        className="border rounded p-3 mb-3"

                        key={index}

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










                        {/* JOB TITLE */}

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

                                placeholder="Full Stack Developer"

                                value={item.title}

                                onChange={(e) =>

                                    handleExperienceChange(
                                        index,
                                        "title",
                                        e.target.value
                                    )

                                }

                            />


                            {
                                errors.experience &&
                                !item.title.trim() && (

                                    <div className="invalid-feedback">

                                        Job title is required

                                    </div>

                                )
                            }


                        </div>









                        {/* PERIOD */}

                        <div className="mb-3">


                            <label className="form-label">

                                Period

                            </label>


                            <input

                                type="text"

                                className="form-control"

                                placeholder="Jan 2025 - Present"

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









                        {/* COMPANY */}

                        <div className="mb-3">


                            <label className="form-label">

                                Company

                            </label>


                            <input

                                type="text"

                                className={`form-control ${errors.experience &&
                                        !item.company.trim()
                                        ?
                                        "is-invalid"
                                        :
                                        ""
                                    }`}

                                placeholder="Company name"

                                value={item.company}

                                onChange={(e) =>

                                    handleExperienceChange(
                                        index,
                                        "company",
                                        e.target.value
                                    )

                                }

                            />


                            {
                                errors.experience &&
                                !item.company.trim() && (

                                    <div className="invalid-feedback">

                                        Company is required

                                    </div>

                                )
                            }


                        </div>









                        {/* RESPONSIBILITIES */}

                        <div className="mb-0">


                            <label className="form-label">

                                Responsibilities

                            </label>


                            <textarea

                                rows="3"

                                className="form-control"

                                placeholder="React development, API design, Database management"

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
                                                item =>
                                                    item.trim()
                                            )
                                            .filter(Boolean)
                                    )

                                }

                            />



                            <small className="text-muted">

                                Separate responsibilities with commas

                            </small>


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


export default ExperienceForm;