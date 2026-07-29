import React from "react";


const EducationForm = ({
    education,
    handleEducationChange,
    addEducation,
    removeEducation,
    errors
}) => {


    return (

        <div>


            {
                errors.education && (

                    <div className="alert alert-danger mb-3">

                        {errors.education}

                    </div>

                )
            }







            {
                education.map((item, index) => (

                    <div
                        className="border rounded p-3 mb-3"
                        key={index}
                    >


                        <div className="d-flex justify-content-between mb-3">


                            <h6 className="mb-0">
                                Education #{index + 1}
                            </h6>


                            {
                                education.length > 1 &&

                                <button

                                    type="button"

                                    className="btn btn-danger btn-sm"

                                    onClick={() =>
                                        removeEducation(index)
                                    }

                                >

                                    <i className="bi bi-trash"></i>

                                </button>

                            }


                        </div>







                        {/* TITLE */}

                        <div className="mb-3">


                            <label className="form-label">

                                Course / Qualification

                            </label>


                            <input

                                type="text"

                                className={`form-control ${errors.education &&
                                        !item.title.trim()
                                        ?
                                        "is-invalid"
                                        :
                                        ""
                                    }`}

                                placeholder="BSc Computer Science"

                                value={item.title}

                                onChange={(e) =>
                                    handleEducationChange(
                                        index,
                                        "title",
                                        e.target.value
                                    )
                                }

                            />


                            {
                                errors.education &&
                                !item.title.trim() && (

                                    <div className="invalid-feedback">

                                        Title is required

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

                                placeholder="2020 - 2024"

                                value={item.period}

                                onChange={(e) =>
                                    handleEducationChange(
                                        index,
                                        "period",
                                        e.target.value
                                    )
                                }

                            />


                        </div>








                        {/* INSTITUTION */}

                        <div className="mb-3">


                            <label className="form-label">

                                Institution

                            </label>


                            <input

                                type="text"

                                className={`form-control ${errors.education &&
                                        !item.institution.trim()
                                        ?
                                        "is-invalid"
                                        :
                                        ""
                                    }`}

                                placeholder="University / College"

                                value={item.institution}

                                onChange={(e) =>
                                    handleEducationChange(
                                        index,
                                        "institution",
                                        e.target.value
                                    )
                                }

                            />


                            {
                                errors.education &&
                                !item.institution.trim() && (

                                    <div className="invalid-feedback">

                                        Institution is required

                                    </div>

                                )
                            }


                        </div>









                        {/* DESCRIPTION */}

                        <div className="mb-0">


                            <label className="form-label">

                                Description

                            </label>


                            <textarea

                                rows="3"

                                className="form-control"

                                placeholder="Education details"

                                value={item.description}

                                onChange={(e) =>
                                    handleEducationChange(
                                        index,
                                        "description",
                                        e.target.value
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

                onClick={addEducation}

            >

                <i className="bi bi-plus-circle me-1"></i>

                Add Education

            </button>



        </div>

    );


};


export default EducationForm;