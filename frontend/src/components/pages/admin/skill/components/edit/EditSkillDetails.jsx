import React from "react";


const EditSkillDetails = ({
    formData,
    handleChange,
    errors = {}
}) => {


    return (

        <>

            {/* DESCRIPTION */}

            <div className="mb-3">


                <label className="form-label">

                    Skill Description

                    <span className="text-danger ms-1">
                        *
                    </span>

                </label>



                <textarea

                    rows="4"

                    name="description"

                    className={`form-control ${errors.description
                        ? "is-invalid"
                        : ""
                        }`}

                    placeholder="Describe your experience and practical usage of this skill"

                    value={
                        formData.description || ""
                    }

                    onChange={
                        handleChange
                    }

                />



                {
                    errors.description &&

                    <div className="invalid-feedback">

                        {errors.description}

                    </div>

                }


            </div>









            {/* CERTIFICATION */}

            <div className="row">



                <div className="col-sm-6">


                    <div className="mb-3">


                        <label className="form-label">

                            Certification

                        </label>




                        <input

                            type="text"

                            name="certification"

                            className="form-control"

                            placeholder="AWS Certified Developer"

                            value={
                                formData.certification || ""
                            }

                            onChange={
                                handleChange
                            }

                        />


                    </div>


                </div>









                <div className="col-sm-6">


                    <div className="mb-3">


                        <label className="form-label">

                            Certificate URL

                        </label>




                        <input

                            type="text"

                            name="certificateUrl"

                            className={`form-control ${errors.certificateUrl
                                ? "is-invalid"
                                : ""
                                }`}

                            placeholder="https://certificate-link.com"

                            value={
                                formData.certificateUrl || ""
                            }

                            onChange={
                                handleChange
                            }

                        />



                        {
                            errors.certificateUrl &&

                            <div className="invalid-feedback">

                                {errors.certificateUrl}

                            </div>

                        }



                    </div>


                </div>



            </div>









            {/* LEARNING SOURCE */}


            <div className="mb-3">


                <label className="form-label">

                    Learning Source

                </label>




                <input


                    type="text"


                    name="learningSource"


                    className="form-control"


                    placeholder="Udemy, Coursera, University, Self Learning"


                    value={
                        formData.learningSource || ""
                    }


                    onChange={
                        handleChange
                    }


                />


            </div>









            {/* ICON */}


            <div className="mb-3">


                <label className="form-label">

                    Skill Icon

                </label>




                <input


                    type="text"


                    name="icon"


                    className="form-control"


                    placeholder="bi bi-code-slash or icon path"


                    value={
                        formData.icon || ""
                    }


                    onChange={
                        handleChange
                    }


                />



                <small className="text-muted">

                    Bootstrap icon class or icon path

                </small>



            </div>



        </>

    );

};


export default EditSkillDetails;