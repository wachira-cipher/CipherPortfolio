import React from "react";

const EditPortfolioForm = ({
    formData,
    errors = {},
    handleChange,
    handleArrayChange
}) => {

    return (

        <form noValidate>

            {/* TITLE */}
            <div className="mb-3">

                <label
                    className="form-label"
                    htmlFor="title"
                >
                    Project Title
                    <span className="text-danger ms-1">*</span>
                </label>

                <input
                    id="title"
                    name="title"
                    type="text"
                    className={`form-control ${errors.title ? "is-invalid" : ""}`}
                    placeholder="Update project title"
                    value={formData.title || ""}
                    onChange={handleChange}
                />

                {errors.title && (
                    <div className="invalid-feedback">
                        {errors.title}
                    </div>
                )}

            </div>

            {/* CATEGORY */}
            <div className="mb-3">

                <label className="form-label">
                    Category
                    <span className="text-danger ms-1">*</span>
                </label>

                <select
                    name="category"
                    className={`form-control ${errors.category ? "is-invalid" : ""}`}
                    value={formData.category || ""}
                    onChange={handleChange}
                >
                    <option value="">Select Category</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Mobile Development">Mobile Development</option>
                    <option value="Backend">Backend</option>
                    <option value="API">API</option>
                    <option value="UI/UX">UI/UX</option>
                    <option value="DevOps">DevOps</option>
                    <option value="AI">AI</option>
                </select>

                {errors.category && (
                    <div className="invalid-feedback">
                        {errors.category}
                    </div>
                )}

            </div>

            {/* DESCRIPTION */}
            <div className="mb-3">

                <label className="form-label">
                    Project Description
                    <span className="text-danger ms-1">*</span>
                </label>

                <textarea
                    rows="4"
                    name="description"
                    className={`form-control ${errors.description ? "is-invalid" : ""}`}
                    placeholder="Update project description"
                    value={formData.description || ""}
                    onChange={handleChange}
                />

                {errors.description && (
                    <div className="invalid-feedback">
                        {errors.description}
                    </div>
                )}

            </div>

            {/* TECHNOLOGIES */}
            <div className="mb-3">

                <label className="form-label">
                    Technologies
                    <span className="text-danger ms-1">*</span>
                </label>

                <input
                    type="text"
                    className={`form-control ${errors.technologies ? "is-invalid" : ""}`}
                    placeholder="React, Node.js, MongoDB"
                    value={formData.technologies?.join(", ") || ""}
                    onChange={(e) =>
                        handleArrayChange(e, "technologies")
                    }
                />

                {errors.technologies && (
                    <div className="invalid-feedback">
                        {errors.technologies}
                    </div>
                )}

                <small className="text-muted">
                    Separate technologies with commas
                </small>

            </div>

            {/* FEATURES */}
            <div className="mb-0">

                <label className="form-label">
                    Features
                    <span className="text-danger ms-1">*</span>
                </label>

                <textarea
                    rows="3"
                    className={`form-control ${errors.features ? "is-invalid" : ""}`}
                    placeholder="Authentication, Dashboard, Payment Integration"
                    value={formData.features?.join(", ") || ""}
                    onChange={(e) =>
                        handleArrayChange(e, "features")
                    }
                />

                {errors.features && (
                    <div className="invalid-feedback">
                        {errors.features}
                    </div>
                )}

                <small className="text-muted">
                    Separate features with commas
                </small>

            </div>

        </form>

    );
};

export default EditPortfolioForm;