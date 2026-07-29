import React, {
    useEffect,
    useState
} from "react";

import {
    useNavigate,
    useParams
} from "react-router-dom";

import {
    toast
} from "react-toastify";

// Components
import EditServiceAccordion from "./components/edit/EditServiceAccordion";
import EditServiceForm from "./components/edit/EditServiceForm";
import EditServiceImages from "./components/edit/EditServiceImages";
import EditServiceMetadata from "./components/edit/EditServiceMetadata";

// API
import {
    getServiceById,
    updateService,
    deleteServiceImage
} from "../../../../api/services.api";

const EditService = () => {

    const navigate = useNavigate();

    const { id } = useParams();

    const [loading, setLoading] = useState(false);

    const [fetching, setFetching] = useState(true);

    /*
    ==========================
        ACCORDION
    ==========================
    */

    const [activeAccordion, setActiveAccordion] =
        useState("service-info-collapse");

    const handleAccordionToggle = (accordionId) => {

        setActiveAccordion(prev =>

            prev === accordionId

                ? null

                : accordionId

        );

    };

    /*
    ==========================
        FORM DATA
    ==========================
    */

    const [formData, setFormData] = useState({

        title: "",

        icon: "bi bi-code-slash",

        shortDescription: "",

        description: "",

        images: [],

        features: [],

        category: "Development",

        isActive: true

    });

    const [imageFiles, setImageFiles] =
        useState([]);

    const [errors, setErrors] =
        useState({});

    /*
    ==========================
        FETCH SERVICE
    ==========================
    */

    useEffect(() => {

        const fetchService = async () => {

            try {

                setFetching(true);

                const response =
                    await getServiceById(id);

                const service =
                    response.data.service;

                setFormData({

                    title:
                        service.title || "",

                    icon:
                        service.icon || "bi bi-code-slash",

                    shortDescription:
                        service.shortDescription || "",

                    description:
                        service.description || "",

                    images:
                        service.images || [],

                    features:
                        service.features || [],

                    category:
                        service.category || "Development",

                    isActive:
                        service.isActive

                });

            }
            catch (error) {

                console.log(error);

                toast.error(
                    "Failed loading service"
                );

                navigate("/admin/service");

            }
            finally {

                setFetching(false);

            }

        };

        fetchService();

    }, [id, navigate]);

    /*
    ==========================
        CHANGE HANDLER
    ==========================
    */

    const handleChange = (e) => {

        const {

            name,

            value,

            type,

            checked

        } = e.target;

        clearError(name);

        setFormData(prev => ({

            ...prev,

            [name]:

                type === "checkbox"

                    ? checked

                    : value

        }));

    };

    /*
    ==========================
        ARRAY HANDLER
    ==========================
    */

    const handleArrayChange = (
        e,
        field
    ) => {

        clearError(field);

        setFormData(prev => ({

            ...prev,

            [field]:

                e.target.value

                    .split(",")

                    .map(item => item.trim())

                    .filter(Boolean)

        }));

    };

    /*
    ==========================
        IMAGE HANDLER
    ==========================
    */

    const handleImageChange = (files) => {

        clearError("images");


        const validFiles = files.filter(
            file => file instanceof File
        );


        setImageFiles(prev => [

            ...prev,

            ...validFiles

        ]);

    };

    /*
    ==========================
        REMOVE EXISTING IMAGE
    ==========================
    */

    const handleRemoveExistingImage = async (image) => {

        try {

            await deleteServiceImage(
                id,
                image
            );


            setFormData(prev => ({

                ...prev,

                images:

                    prev.images.filter(
                        item => item !== image
                    )

            }));


            toast.success(
                "Image deleted"
            );


        }
        catch (error) {

            console.error(error);

            toast.error(
                "Failed to delete image"
            );

        }

    };

    /*
    ==========================
        REMOVE NEW IMAGE
    ==========================
    */

    const removeNewImage = (index) => {

        setImageFiles(prev =>

            prev.filter(

                (_, i) => i !== index

            )

        );

    };

    /*
    ==========================
        VALIDATION
    ==========================
    */

    const validateForm = () => {

        let newErrors = {};

        if (!formData.title.trim()) {

            newErrors.title =
                "Service title is required";

        }

        if (!formData.shortDescription.trim()) {

            newErrors.shortDescription =
                "Short description is required";

        }

        if (!formData.description.trim()) {

            newErrors.description =
                "Description is required";

        }

        if (formData.features.length === 0) {

            newErrors.features =
                "At least one feature is required";

        }

        if (

            formData.images.length === 0 &&

            imageFiles.length === 0

        ) {

            newErrors.images =
                "At least one image is required";

        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length) {

            toast.warning(
                "Please fix highlighted fields"
            );

            return false;

        }

        return true;

    };

    const clearError = (field) => {

        setErrors(prev => ({

            ...prev,

            [field]: ""

        }));

    };

    /*
    ==========================
        UPDATE
    ==========================
    */

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (!validateForm()) return;

        try {

            setLoading(true);

            const data =
                new FormData();

            data.append(
                "title",
                formData.title
            );

            data.append(
                "icon",
                formData.icon
            );

            data.append(
                "shortDescription",
                formData.shortDescription
            );

            data.append(
                "description",
                formData.description
            );

            data.append(
                "category",
                formData.category
            );

            data.append(
                "features",
                JSON.stringify(
                    formData.features
                )
            );

            data.append(
                "status",
                String(formData.isActive ?? true)
            );

            data.append(
                "existingImages",
                JSON.stringify(
                    formData.images
                )
            );

            imageFiles.forEach(image => {

                if (image instanceof File) {

                    data.append(
                        "images",
                        image
                    );

                }

            });
            console.log(
                "Images being uploaded:",
                imageFiles
            );

            await updateService(id, data);

            toast.success(
                "Service updated successfully"
            );

            setTimeout(() => {

                navigate("/admin/service");

            }, 1000);

        }
        catch (error) {

            console.log(error);

            toast.error(
                "Failed updating service"
            );

        }
        finally {

            setLoading(false);

        }

    };

    const handleCancel = () => {

        navigate("/admin/service");

    };

    if (fetching) {

        return (
            <div className="page-content">
                <div className="container-fluid text-center py-5">
                    Loading service...
                </div>
            </div>
        );

    }
    return (

        <div className="page-content">

            <div className="container-fluid">

                <div className="row">

                    <div className="col-12">

                        <div className="page-title-box">

                            <h4 className="mb-0">

                                Edit Service

                            </h4>

                        </div>

                    </div>

                </div>

                <div className="row">

                    <div className="col-lg-12">

                        <div className="custom-accordion">

                            <EditServiceAccordion

                                id="service-info-collapse"

                                number="01"

                                title="Service Information"

                                description="Update service information"

                                open={
                                    activeAccordion ===
                                    "service-info-collapse"
                                }

                                onToggle={
                                    handleAccordionToggle
                                }

                            >

                                <EditServiceForm

                                    formData={formData}

                                    errors={errors}

                                    handleChange={handleChange}

                                    handleArrayChange={
                                        handleArrayChange
                                    }

                                />

                            </EditServiceAccordion>

                            <EditServiceAccordion

                                id="service-image-collapse"

                                number="02"

                                title="Service Images"

                                description="Manage service images"

                                open={
                                    activeAccordion ===
                                    "service-image-collapse"
                                }

                                onToggle={
                                    handleAccordionToggle
                                }

                            >

                                <EditServiceImages

                                    images={formData.images}

                                    errors={errors}

                                    handleImageChange={handleImageChange}

                                    handleRemoveExistingImage={handleRemoveExistingImage}

                                />

                            </EditServiceAccordion>

                            <EditServiceAccordion

                                id="service-metadata-collapse"

                                number="03"

                                title="Service Settings"

                                description="Update service settings"

                                open={
                                    activeAccordion ===
                                    "service-metadata-collapse"
                                }

                                onToggle={
                                    handleAccordionToggle
                                }

                            >

                                <EditServiceMetadata

                                    formData={formData}

                                    handleChange={
                                        handleChange
                                    }

                                    handleArrayChange={
                                        handleArrayChange
                                    }

                                    errors={errors}

                                />

                            </EditServiceAccordion>

                        </div>

                    </div>

                </div>

                <div className="row mb-4">

                    <div className="col ms-auto">

                        <div className="d-flex gap-2">

                            <button

                                type="button"

                                className="btn btn-danger"

                                onClick={handleCancel}

                                disabled={loading}

                            >

                                <i className="bi bi-x-circle me-1"></i>

                                Cancel

                            </button>

                            <button

                                type="button"

                                className="btn btn-success"

                                onClick={handleSubmit}

                                disabled={loading}

                            >

                                {

                                    loading

                                        ?

                                        "Updating..."

                                        :

                                        <>

                                            <i className="bi bi-check-circle me-1"></i>

                                            Update Service

                                        </>

                                }

                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

};

export default EditService;