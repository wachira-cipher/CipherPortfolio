import React from "react";


const EditSkillForm = ({
    formData,
    errors,
    handleChange
}) => {


    return (

        <form>



            {/* TECHNOLOGY */}

            <div className="mb-3">


                <label className="form-label">

                    Technology / Tool

                    <span className="text-danger ms-1">

                        *

                    </span>

                </label>





                <input


                    type="text"


                    name="technology"


                    className={`form-control ${errors.technology
                        ?
                        "is-invalid"
                        :
                        ""
                        }`}


                    placeholder="React.js=>Javascript, Laravel=>PHP"


                    value={
                        formData.technology || ""
                    }


                    onChange={
                        handleChange
                    }


                />





                {
                    errors.technology &&


                    <div className="invalid-feedback">


                        {errors.technology}


                    </div>


                }



            </div>


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

                    placeholder="Enter skill name"

                    value={
                        formData.name || ""
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

                    <span className="text-danger">
                        *
                    </span>

                </label>




                <select

                    name="category"

                    className={`form-control ${errors.category
                        ?
                        "is-invalid"
                        :
                        ""
                        }`}

                    value={
                        formData.category || ""
                    }

                    onChange={
                        handleChange
                    }

                >


                    <option value="">
                        Select Category
                    </option>


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




                {
                    errors.category &&

                    <div className="invalid-feedback">

                        {errors.category}

                    </div>

                }


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









            {/* Experience */}


            <div className="mb-3">


                <label className="form-label">

                    Years of Experience

                </label>



                <input


                    type="number"


                    name="yearsOfExperience"


                    className="form-control"


                    min="0"


                    placeholder="Example: 3"


                    value={
                        formData.yearsOfExperience
                    }


                    onChange={
                        handleChange
                    }


                />



            </div>






















        </form>

    );


};


export default EditSkillForm;