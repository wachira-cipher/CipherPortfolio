import React, {
    useState
} from "react";


import {
    useNavigate
} from "react-router-dom";


import {
    toast
} from "react-toastify";


// Components

import ServiceAccordion from "./components/ServiceAccordion";
import ServiceForm from "./components/ServiceForm";
import ServiceImages from "./components/ServiceImages";
import ServiceMetadata from "./components/ServiceMetadata";

// API

import {
    createService
} from "../../../../api/services.api";





const CreateService = () => {


    const navigate = useNavigate();


    const [loading, setLoading] = useState(false);



    /*
    ==========================
        ACCORDION
    ==========================
    */

    const [activeAccordion, setActiveAccordion] =
        useState(
            "service-info-collapse"
        );



    const handleAccordionToggle = (id) => {

        setActiveAccordion(prev =>

            prev === id
                ?
                null
                :
                id

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

                    ?

                    checked

                    :

                    value


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

                    .map(item =>
                        item.trim()
                    )

                    .filter(Boolean)


        }));


    };









    /*
    ==========================
        IMAGE HANDLER
    ==========================
    */


    const handleImageChange = (e) => {


        clearError("images");


        const files =
            Array.from(e.target.files);



        setImageFiles(prev => [
            ...prev,
            ...files
        ]);



        setFormData(prev => ({

            ...prev,

            images: [
                ...prev.images,
                ...files
            ]

        }));


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
                "Service description is required";

        }





        if (formData.features.length === 0) {

            newErrors.features =
                "At least one feature is required";

        }


        if (imageFiles.length === 0) {

            newErrors.images =
                "At least one service image is required";

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
        SUBMIT
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
                "isActive",
                formData.isActive
            );





            imageFiles.forEach(
                image => {

                    data.append(
                        "images",
                        image
                    );

                }
            );






            await createService(data);





            toast.success(
                "Service created successfully"
            );





            setTimeout(() => {

                navigate(
                    "/admin/service"
                );

            }, 1000);



        }
        catch (error) {

            console.log(error);


            toast.error(
                "Failed creating service"
            );


        }
        finally {

            setLoading(false);

        }


    };








    const handleCancel = () => {


        navigate(
            "/admin/service"
        );


    };








    return (

        <div className="page-content">


            <div className="container-fluid">



                <div className="row">


                    <div className="col-12">


                        <div className="page-title-box">


                            <h4 className="mb-0">

                                Add Service

                            </h4>


                        </div>


                    </div>


                </div>









                <div className="row">


                    <div className="col-lg-12">


                        <div className="custom-accordion">



                            <ServiceAccordion

                                id="service-info-collapse"

                                number="01"

                                title="Service Information"

                                description="Fill service information"

                                open={
                                    activeAccordion ===
                                    "service-info-collapse"
                                }

                                onToggle={
                                    handleAccordionToggle
                                }

                            >


                                <ServiceForm

                                    formData={formData}

                                    errors={errors}

                                    handleChange={handleChange}

                                    handleArrayChange={
                                        handleArrayChange
                                    }

                                />


                            </ServiceAccordion>









                            <ServiceAccordion

                                id="service-image-collapse"

                                number="02"

                                title="Service Image"

                                description="Upload service image"

                                open={
                                    activeAccordion ===
                                    "service-image-collapse"
                                }

                                onToggle={
                                    handleAccordionToggle
                                }

                            >


                                <ServiceImages

                                    handleImageChange={
                                        handleImageChange
                                    }

                                    errors={errors}

                                />


                            </ServiceAccordion>









                            <ServiceAccordion

                                id="service-metadata-collapse"

                                number="03"

                                title="Service Settings"

                                description="Additional service information"

                                open={
                                    activeAccordion ===
                                    "service-metadata-collapse"
                                }

                                onToggle={
                                    handleAccordionToggle
                                }

                            >


                                <ServiceMetadata

                                    formData={formData}

                                    handleChange={
                                        handleChange
                                    }

                                    handleArrayChange={
                                        handleArrayChange
                                    }

                                    errors={errors}

                                />


                            </ServiceAccordion>



                        </div>


                    </div>


                </div>









                <div className="row mb-4">


                    <div className="col ms-auto">


                        <div className="d-flex gap-2">


                            <button

                                className="btn btn-danger"

                                onClick={handleCancel}

                                disabled={loading}

                            >


                                <i className="bi bi-x-circle"></i>

                                Cancel


                            </button>






                            <button

                                className="btn btn-success"

                                onClick={handleSubmit}

                                disabled={loading}

                            >


                                {
                                    loading
                                        ?
                                        "Saving..."
                                        :
                                        <>
                                            <i className="bi bi-file-earmark-check"></i>
                                            Save
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


export default CreateService;