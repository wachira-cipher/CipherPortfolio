import React from "react";
import { SERVICE_CATEGORIES } from "../../../../../../utils/serviceCategories";


const EditServiceForm = ({
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

                    Service Title

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

                    placeholder="Enter service title"

                    value={formData.title}

                    onChange={handleChange}

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

                    value={formData.category}

                    onChange={handleChange}

                >

                    {SERVICE_CATEGORIES.map((category) => (

                        <option

                            key={category}

                            value={category}

                        >

                            {category}

                        </option>

                    ))}


                </select>


            </div>






            {/* ICON */}

            <div className="mb-3">


                <label className="form-label">

                    Service Icon

                </label>



                <input

                    name="icon"

                    type="text"

                    className="form-control"

                    placeholder="bi bi-code-slash"

                    value={formData.icon}

                    onChange={handleChange}

                />



                <small className="text-muted">

                    Bootstrap icon class

                </small>


            </div>






            {/* SHORT DESCRIPTION */}

            <div className="mb-3">


                <label className="form-label">


                    Short Description

                    <span className="text-danger">
                        *
                    </span>


                </label>



                <textarea

                    rows="2"

                    name="shortDescription"

                    className={`form-control ${errors.shortDescription
                        ?
                        "is-invalid"
                        :
                        ""
                        }`}

                    placeholder="Brief service summary"

                    value={formData.shortDescription}

                    onChange={handleChange}

                />



                {
                    errors.shortDescription &&

                    <div className="invalid-feedback">

                        {errors.shortDescription}

                    </div>

                }


            </div>







            {/* DESCRIPTION */}

            <div className="mb-3">


                <label className="form-label">


                    Service Description

                    <span className="text-danger">
                        *
                    </span>


                </label>



                <textarea

                    rows="5"

                    name="description"

                    className={`form-control ${errors.description
                        ?
                        "is-invalid"
                        :
                        ""
                        }`}

                    placeholder="Describe the service"

                    value={formData.description}

                    onChange={handleChange}

                />



                {
                    errors.description &&

                    <div className="invalid-feedback">

                        {errors.description}

                    </div>

                }


            </div>







            {/* FEATURES */}

            <div className="mb-0">


                <label className="form-label">

                    Features

                </label>



                <textarea

                    rows="3"

                    className={`form-control ${errors.features
                        ?
                        "is-invalid"
                        :
                        ""
                        }`}

                    placeholder="API Integration, Responsive Design, Maintenance"

                    value={formData.features.join(", ")}

                    onChange={(e) =>

                        handleArrayChange(

                            e,

                            "features"

                        )

                    }

                />



                {
                    errors.features &&

                    <div className="invalid-feedback">

                        {errors.features}

                    </div>

                }



                <small className="text-muted">

                    Separate features with commas

                </small>


            </div>



        </form>

    );


};


export default EditServiceForm;