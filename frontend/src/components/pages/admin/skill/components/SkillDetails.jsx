import React from "react";


const SkillDetails = ({
    formData,
    handleChange,
    errors = {}
}) => {


    return (

        <>





            {/* EXPERIENCE + LEVEL */}

            <div className="row">



                {/* EXPERIENCE */}


                <div className="col-sm-6">


                    <div className="mb-3">


                        <label className="form-label">

                            Years Of Experience

                        </label>




                        <input


                            type="number"


                            name="yearsOfExperience"


                            className={`form-control ${errors.yearsOfExperience
                                    ?
                                    "is-invalid"
                                    :
                                    ""
                                }`}


                            min="0"


                            placeholder="Example: 3"


                            value={
                                formData.yearsOfExperience
                            }


                            onChange={
                                handleChange
                            }


                        />



                        {
                            errors.yearsOfExperience &&

                            <div className="invalid-feedback">

                                {errors.yearsOfExperience}

                            </div>

                        }



                    </div>


                </div>









                {/* LEVEL */}


                <div className="col-sm-6">


                    <div className="mb-3">


                        <label className="form-label">

                            Skill Level

                        </label>




                        <select


                            name="level"


                            className="form-control"


                            value={
                                formData.level
                            }


                            onChange={
                                handleChange
                            }


                        >



                            <option value="Beginner">

                                Beginner

                            </option>



                            <option value="Intermediate">

                                Intermediate

                            </option>



                            <option value="Advanced">

                                Advanced

                            </option>



                            <option value="Expert">

                                Expert

                            </option>



                        </select>



                    </div>


                </div>



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
                                formData.certification
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


                            className="form-control"


                            placeholder="https://certificate-link.com"


                            value={
                                formData.certificateUrl
                            }


                            onChange={
                                handleChange
                            }


                        />



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
                        formData.learningSource
                    }


                    onChange={
                        handleChange
                    }


                />



            </div>









            {/* DESCRIPTION */}


            <div className="mb-3">


                <label className="form-label">

                    Skill Description

                    <span className="text-danger">

                        *

                    </span>


                </label>





                <textarea


                    rows="4"


                    name="description"


                    className={`form-control ${errors.description
                            ?
                            "is-invalid"
                            :
                            ""
                        }`}


                    placeholder="Describe your experience and practical usage of this skill"


                    value={
                        formData.description
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
                        formData.icon
                    }


                    onChange={
                        handleChange
                    }


                />



                <small className="text-muted">

                    Bootstrap icon class or image path

                </small>



            </div>






        </>

    );


};


export default SkillDetails;