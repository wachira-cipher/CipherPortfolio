import React from "react";


const PortfolioMetadata = ({
    formData,
    handleChange,
    errors = {}
}) => {


    return (

        <>


            <div className="row">


                {/* CLIENT */}

                <div className="col-sm-6">

                    <div className="mb-3">


                        <label className="form-label">

                            Client

                        </label>



                        <input

                            type="text"

                            name="client"

                            className="form-control"

                            placeholder="Enter client name"

                            value={formData.client}

                            onChange={handleChange}

                        />


                    </div>

                </div>






                {/* PROJECT DATE */}

                <div className="col-sm-6">

                    <div className="mb-3">


                        <label className="form-label">

                            Project Date

                        </label>



                        <input

                            type="text"

                            name="projectDate"

                            className="form-control"

                            placeholder="2026"

                            value={formData.projectDate}

                            onChange={handleChange}

                        />



                    </div>

                </div>


            </div>









            <div className="row">


                {/* WEBSITE */}

                <div className="col-sm-6">


                    <div className="mb-3">


                        <label className="form-label">

                            Website

                        </label>



                        <input

                            type="text"

                            name="website"

                            className="form-control"

                            placeholder="https://example.com"

                            value={formData.website}

                            onChange={handleChange}

                        />



                    </div>


                </div>









                {/* GITHUB */}

                <div className="col-sm-6">


                    <div className="mb-3">


                        <label className="form-label">

                            Github Repository

                        </label>



                        <input

                            type="text"

                            name="github"

                            className="form-control"

                            placeholder="https://github.com/project"

                            value={formData.github}

                            onChange={handleChange}

                        />



                    </div>


                </div>


            </div>









            {/* TECHNOLOGIES */}

            <div className="mb-3">


                <label className="form-label">

                    Technologies

                    <span className="text-danger ms-1">

                        *

                    </span>

                </label>



                <input

                    type="text"

                    className={`form-control ${errors.technologies
                            ? "is-invalid"
                            :
                            ""
                        }`}

                    placeholder="React, Node.js, MongoDB"

                    value={
                        formData.technologies.join(", ")
                    }


                    onChange={(e) =>


                        handleChange({

                            target: {

                                name: "technologies",

                                value:
                                    e.target.value
                                        .split(",")
                                        .map(
                                            item =>
                                                item.trim()
                                        )
                                        .filter(Boolean)

                            }

                        })

                    }


                />


                {
                    errors.technologies &&

                    <div className="invalid-feedback">

                        {errors.technologies}

                    </div>

                }


            </div>









            {/* FEATURES */}

            <div className="mb-3">


                <label className="form-label">

                    Features

                    <span className="text-danger ms-1">

                        *

                    </span>

                </label>



                <input

                    type="text"

                    className={`form-control ${errors.features
                            ?
                            "is-invalid"
                            :
                            ""
                        }`}


                    placeholder="Authentication, Dashboard, API"


                    value={
                        formData.features.join(", ")
                    }



                    onChange={(e) =>

                        handleChange({

                            target: {

                                name: "features",

                                value:
                                    e.target.value
                                        .split(",")
                                        .map(
                                            item =>
                                                item.trim()
                                        )
                                        .filter(Boolean)

                            }

                        })

                    }



                />



                {
                    errors.features &&

                    <div className="invalid-feedback">

                        {errors.features}

                    </div>

                }



            </div>









            {/* CHALLENGE */}

            <div className="mb-3">


                <label className="form-label">

                    Challenge

                    <span className="text-danger ms-1">

                        *

                    </span>

                </label>



                <textarea

                    className={`form-control ${errors.challenge
                            ?
                            "is-invalid"
                            :
                            ""
                        }`}


                    name="challenge"

                    rows="3"

                    placeholder="Project challenges"

                    value={formData.challenge}

                    onChange={handleChange}

                />



                {
                    errors.challenge &&

                    <div className="invalid-feedback">

                        {errors.challenge}

                    </div>

                }


            </div>









            {/* SOLUTION */}

            <div className="mb-3">


                <label className="form-label">

                    Solution

                    <span className="text-danger ms-1">

                        *

                    </span>

                </label>



                <textarea

                    className={`form-control ${errors.solution
                            ?
                            "is-invalid"
                            :
                            ""
                        }`}


                    name="solution"

                    rows="3"

                    placeholder="How the challenge was solved"

                    value={formData.solution}

                    onChange={handleChange}

                />



                {
                    errors.solution &&

                    <div className="invalid-feedback">

                        {errors.solution}

                    </div>

                }



            </div>









            <div className="row">


                {/* FEATURED */}

                <div className="col-sm-6">


                    <div className="form-check">


                        <input

                            type="checkbox"

                            className="form-check-input"

                            name="isFeatured"

                            checked={
                                formData.isFeatured
                            }


                            onChange={handleChange}


                        />



                        <label className="form-check-label">

                            Featured Project

                        </label>


                    </div>


                </div>









                {/* STATUS */}

                <div className="col-sm-6">


                    <div className="form-check">


                        <input

                            type="checkbox"

                            className="form-check-input"

                            name="status"

                            checked={
                                formData.status
                            }


                            onChange={handleChange}


                        />



                        <label className="form-check-label">

                            Active Status

                        </label>


                    </div>


                </div>



            </div>




        </>

    );

};


export default PortfolioMetadata;