import React from "react";


const PortfolioForm = ({
    formData,
    errors,
    handleChange,
    handleArrayChange
}) => {


    return (

        <form>



            {/* TITLE */}

            <div className="mb-3">


                <label className="form-label">


                    Project Title

                    <span className="text-danger">
                        *
                    </span>


                </label>



                <input

                    name="title"

                    type="text"

                    className={`form-control ${errors.title
                            ?
                            "is-invalid"
                            :
                            ""
                        }`}

                    placeholder="Enter project title"

                    value={
                        formData.title
                    }

                    onChange={
                        handleChange
                    }

                />



                {
                    errors.title &&

                    <div className="invalid-feedback">

                        {errors.title}

                    </div>

                }



            </div>









            {/* CATEGORY */}

            <div className="mb-3">


                <label className="form-label">

                    Category

                </label>



                <select

                    name="category"

                    className="form-control"

                    value={
                        formData.category
                    }

                    onChange={
                        handleChange
                    }

                >

                    <option value="Web Development">
                        Web Development
                    </option>


                    <option value="Mobile Development">
                        Mobile Development
                    </option>


                    <option value="Backend">
                        Backend
                    </option>


                    <option value="API">
                        API
                    </option>


                    <option value="UI/UX">
                        UI/UX
                    </option>


                    <option value="DevOps">
                        DevOps
                    </option>


                    <option value="AI">
                        AI
                    </option>


                </select>


            </div>









            {/* DESCRIPTION */}


            <div className="mb-3">


                <label className="form-label">


                    Project Description

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

                    placeholder="Describe the project"

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









            {/* TECHNOLOGIES */}


            <div className="mb-3">


                <label className="form-label">


                    Technologies

                    <span className="text-danger">
                        *
                    </span>


                </label>




                <input


                    type="text"


                    className={`form-control ${errors.technologies
                            ?
                            "is-invalid"
                            :
                            ""
                        }`}


                    placeholder="React, Node.js, MongoDB"


                    value={

                        formData.technologies.join(", ")

                    }



                    onChange={(e) =>

                        handleArrayChange(
                            e,
                            "technologies"
                        )

                    }


                />



                {
                    errors.technologies &&


                    <div className="invalid-feedback">

                        {errors.technologies}

                    </div>


                }




                <small className="text-muted">

                    Separate technologies with commas

                </small>



            </div>









            {/* FEATURES */}


            <div className="mb-0">


                <label className="form-label">


                    Features


                </label>




                <textarea

                    rows="3"

                    className="form-control"

                    placeholder="Authentication, Dashboard, Payment Integration"


                    value={

                        formData.features.join(", ")

                    }



                    onChange={(e) =>

                        handleArrayChange(
                            e,
                            "features"
                        )

                    }


                />



                <small className="text-muted">

                    Separate features with commas

                </small>



            </div>




        </form>


    );


};


export default PortfolioForm;