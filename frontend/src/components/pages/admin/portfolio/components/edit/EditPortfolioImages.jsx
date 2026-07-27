import React, {
    useEffect,
    useState
} from "react";

import {
    getImageUrl
} from "../../../../../../utils/imageUrl";

const EditPortfolioImages = ({
    images = [],
    errors = {},
    handleImageChange,
    handleRemoveExistingImage
}) => {

    const [preview, setPreview] = useState([]);

    /*
    ==========================
    LOAD EXISTING IMAGES
    ==========================
    */

    useEffect(() => {

        const existingImages = images
            .filter(image => typeof image === "string")
            .map(image => ({
                type: "existing",
                url: image
            }));

        setPreview(existingImages);

    }, [images]);

    /*
    ==========================
    PROCESS FILES
    ==========================
    */

    const processFiles = (files) => {

        const selectedFiles = Array.from(files)
            .filter(file => file.type.startsWith("image/"));

        if (selectedFiles.length === 0) return;

        const newPreview = selectedFiles.map(file => ({
            type: "new",
            url: URL.createObjectURL(file),
            file
        }));

        setPreview(prev => [
            ...prev,
            ...newPreview
        ]);

        handleImageChange(selectedFiles);

    };

    /*
    ==========================
    FILE INPUT
    ==========================
    */

    const handleInputChange = (e) => {

        processFiles(e.target.files);

        // Allows selecting the same file again
        e.target.value = "";

    };

    /*
    ==========================
    DRAG & DROP
    ==========================
    */

    const handleDrop = (e) => {

        e.preventDefault();

        processFiles(e.dataTransfer.files);

    };

    const handleDragOver = (e) => {

        e.preventDefault();

    };

    /*
    ==========================
    REMOVE IMAGE
    ==========================
    */

    const removeImage = (index) => {

        const image = preview[index];

        if (image.type === "existing") {

            handleRemoveExistingImage(image.url);

        }

        setPreview(prev =>
            prev.filter((_, i) => i !== index)
        );

    };

    return (

        <>

            <div
                className={`dropzone border rounded p-4 ${errors.images ? "border-danger" : ""
                    }`}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
            >

                <div className="fallback">

                    <input
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handleInputChange}
                    />

                </div>

                <div className="dz-message needsclick text-center">

                    <div className="mb-3">

                        <i className="display-4 text-muted uil uil-cloud-upload"></i>

                    </div>

                    <h4>

                        Drop images here or click to upload

                    </h4>

                    <small className="text-muted">

                        You can select multiple images at once.

                    </small>

                </div>

            </div>

            {errors.images && (

                <div className="text-danger mt-2 small">

                    {errors.images}

                </div>

            )}

            <div className="row mt-4">

                {preview.map((image, index) => (

                    <div
                        className="col-md-3 mb-3"
                        key={`${image.type}-${index}`}
                    >

                        <div className="position-relative">

                            <img
                                src={
                                    image.type === "existing"
                                        ? getImageUrl(image.url)
                                        : image.url
                                }
                                className="img-thumbnail"
                                alt="preview"
                                style={{
                                    width: "100%",
                                    height: "140px",
                                    objectFit: "cover"
                                }}
                                onError={(e) => {
                                    e.target.src = "/assets/images/product/default.jpg";
                                }}
                            />

                            <button
                                type="button"
                                className="btn btn-danger btn-sm position-absolute top-0 end-0"
                                onClick={() => removeImage(index)}
                            >

                                <i className="bi bi-x"></i>

                            </button>

                            {image.type === "new" && (

                                <span className="badge bg-success position-absolute bottom-0 start-0">

                                    New

                                </span>

                            )}

                        </div>

                    </div>

                ))}

            </div>

        </>

    );

};

export default EditPortfolioImages;