import React from "react";


const EditSkillForm = ({
    formData,
    errors,
    handleChange
}) => {


    return (

        <form>





            {/* SKILL NAME */}

            <div className="mb-3">


                <label className="form-label">


                    Skill Name

                    <span className="text-danger">
                        *
                    </span>


                </label>




                <input


                    name="name"


                    type="text"


                    className={`form-control ${errors.name
                        ?
                        "is-invalid"
                        :
                        ""
                        }`}


                    placeholder="Enter skill name e.g React, Laravel, Docker"


                    value={
                        formData.name
                    }


                    onChange={
                        handleChange
                    }


                />




                {
                    errors.name &&


                    <div className="invalid-feedback">


                        {errors.name}


                    </div>

                }



            </div>









            {/* CATEGORY */}

            <div className="mb-3">


                <label className="form-label">


                    Skill Category


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


                    <option value="Frontend Development">
                        Frontend Development
                    </option>


                    <option value="Backend Development">
                        Backend Development
                    </option>


                    <option value="Mobile Development">
                        Mobile Development
                    </option>


                    <option value="Database & Data Management">
                        Database & Data Management
                    </option>


                    <option value="DevOps & Cloud">
                        DevOps & Cloud
                    </option>


                    <option value="Cybersecurity">
                        Cybersecurity
                    </option>


                    <option value="UI/UX & Design">
                        UI/UX & Design
                    </option>


                    <option value="Artificial Intelligence">
                        Artificial Intelligence
                    </option>


                    <option value="Machine Learning">
                        Machine Learning
                    </option>


                    <option value="Networking">
                        Networking
                    </option>


                    <option value="Systems Administration">
                        Systems Administration
                    </option>


                    <option value="Enterprise Solutions">
                        Enterprise Solutions
                    </option>


                    <option value="Other">
                        Other
                    </option>


                </select>



            </div>









            {/* PERCENTAGE */}

            <div className="mb-3">


                <label className="form-label">


                    Proficiency Percentage

                    <span className="text-danger">
                        *
                    </span>


                </label>





                <input


                    name="percentage"


                    type="number"


                    min="0"


                    max="100"


                    className={`form-control ${errors.percentage
                        ?
                        "is-invalid"
                        :
                        ""
                        }`}


                    placeholder="Enter percentage e.g 90"


                    value={
                        formData.percentage
                    }


                    onChange={
                        handleChange
                    }


                />





                {
                    errors.percentage &&


                    <div className="invalid-feedback">


                        {errors.percentage}


                    </div>


                }



            </div>









            {/* TECHNOLOGY */}


            <div className="mb-3">


                <label className="form-label">


                    Technology / Tool


                </label>




                <input


                    name="technology"


                    type="text"


                    className="form-control"


                    placeholder="React, Node.js, MongoDB, AWS"


                    value={
                        formData.technology || ""
                    }


                    onChange={
                        handleChange
                    }


                />



            </div>









            {/* EXPERIENCE */}

            <div className="mb-3">


                <label className="form-label">


                    Years Of Experience


                </label>





                <input


                    name="yearsOfExperience"


                    type="number"


                    min="0"


                    className="form-control"


                    placeholder="Example: 3"


                    value={
                        formData.yearsOfExperience
                    }


                    onChange={
                        handleChange
                    }


                />



            </div>









            {/* LEVEL */}

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









            {/* DESCRIPTION */}

            <div className="mb-3">


                <label className="form-label">


                    Skill Description


                </label>





                <textarea


                    rows="4"


                    name="description"


                    className="form-control"


                    placeholder="Describe your experience with this skill"


                    value={
                        formData.description || ""
                    }


                    onChange={
                        handleChange
                    }


                />



            </div>









            {/* ICON */}

            <div className="mb-0">


                <label className="form-label">


                    Icon Class / Image


                </label>





                <input


                    name="icon"


                    type="text"


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

                    Add Bootstrap icon class or icon path

                </small>



            </div>





        </form>


    );


};


export default EditSkillForm;