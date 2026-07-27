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

import PortfolioAccordion from "./components/edit/PortfolioAccordion";

import EditPortfolioForm from "./components/edit/EditPortfolioForm";

import EditPortfolioImages from "./components/edit/EditPortfolioImages";

import EditPortfolioMetadata from "./components/edit/EditPortfolioMetadata";



// API

import {
    getPortfolioById,
    updatePortfolio, deletePortfolioImage,
} from "../../../../api/portfolio.api";








const initialState = {


    title: "",

    category: "",

    description: "",

    images: [],

    technologies: [],

    client: "",

    projectDate: "",

    website: "",

    github: "",

    features: [],

    challenge: "",

    solution: "",

    isFeatured: false,

    status: true


};









const EditPortfolio = () => {



    const {
        id
    } = useParams();



    const navigate = useNavigate();





    const [loading, setLoading] =
        useState(false);





    const [formData, setFormData] =
        useState(initialState);



    const [errors, setErrors] = useState({});

    const validateForm = () => {

        const newErrors = {};

        if (!formData.title.trim()) {
            newErrors.title = "Portfolio title is required.";
        }

        if (!formData.category.trim()) {
            newErrors.category = "Category is required.";
        }

        if (!formData.client.trim()) {
            newErrors.client = "Client is required.";
        }

        if (!formData.description.trim()) {
            newErrors.description = "Description is required.";
        }

        if (!formData.challenge.trim()) {
            newErrors.challenge = "Challenge is required.";
        }

        if (!formData.solution.trim()) {
            newErrors.solution = "Solution is required.";
        }

        if (!formData.projectDate) {
            newErrors.projectDate = "Project date is required.";
        }

        if (
            formData.images.length === 0 &&
            imageFiles.length === 0
        ) {
            newErrors.images = "At least one image is required.";
        }

        if (formData.technologies.length === 0) {
            newErrors.technologies = "Enter at least one technology.";
        }

        if (formData.features.length === 0) {
            newErrors.features = "Enter at least one feature.";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };


    /*
    ==========================
    NEW IMAGE FILES
    ==========================
    */


    const [imageFiles, setImageFiles] =
        useState([]);





    /*
    ==========================
    REMOVED DATABASE IMAGES
    ==========================
    */


    const [removedImages, setRemovedImages] =
        useState([]);






    const [openAccordion, setOpenAccordion] =
        useState(
            "portfolio-info-collapse"
        );









    const handleAccordionToggle = (
        accordionId
    ) => {


        setOpenAccordion(prev =>


            prev === accordionId

                ?

                ""

                :

                accordionId


        );


    };













    /*
    ==========================
    FETCH PORTFOLIO
    ==========================
    */


    const fetchPortfolio = async () => {


        try {


            setLoading(true);



            const response =
                await getPortfolioById(id);




            const portfolio =
                response.data.portfolio;





            setFormData({

                ...initialState,

                ...portfolio,

                images:

                    portfolio.images || []


            });





            setImageFiles([]);

            setRemovedImages([]);




        }
        catch (error) {


            console.error(error);



            toast.error(
                "Failed loading portfolio"
            );


        }
        finally {


            setLoading(false);


        }


    };









    useEffect(() => {


        if (id) {

            fetchPortfolio();

        }


    }, [id]);













    /*
    ==========================
    INPUT CHANGE
    ==========================
    */


    const handleChange = (e) => {

        const { name, value, checked, type } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));

        setErrors(prev => ({
            ...prev,
            [name]: ""
        }));

    };













    /*
    ==========================
    ARRAY INPUT CHANGE
    ==========================
    */


    const handleArrayChange = (e, field) => {

        const values = e.target.value
            .split(",")
            .map(item => item.trim())
            .filter(Boolean);

        setFormData(prev => ({
            ...prev,
            [field]: values
        }));

        setErrors(prev => ({
            ...prev,
            [field]: ""
        }));

    };












    /*
    ==========================
    ADD NEW IMAGES
    ==========================
    */


    const handleImageChange = (files) => {

        setImageFiles(prev => [...prev, ...files]);

        setErrors(prev => ({
            ...prev,
            images: ""
        }));

    };












    /*
    ==========================
    REMOVE EXISTING IMAGE
    ==========================
    */


    const handleRemoveExistingImage = async (image) => {
        try {
            await deletePortfolioImage(id, image);

            setFormData(prev => ({
                ...prev,
                images: prev.images.filter(item => item !== image)
            }));

            toast.success("Image deleted");
        } catch (error) {
            toast.error("Failed to delete image");
        }
    };













    /*
    ==========================
    SUBMIT UPDATE
    ==========================
    */


    const handleSubmit = async (e) => {


        e.preventDefault();

        if (!validateForm()) {

            toast.warn("Please fix the highlighted fields.");

            return;

        }



        try {


            setLoading(true);





            const data =
                new FormData();








            /*
            ==========================
            NORMAL FIELDS
            ==========================
            */


            Object.entries(formData)
                .forEach(([key, value]) => {



                    if (
                        key === "images"
                    ) {

                        return;

                    }






                    if (
                        Array.isArray(value)
                    ) {


                        data.append(

                            key,

                            JSON.stringify(
                                value
                            )

                        );


                    }
                    else {


                        data.append(

                            key,

                            value

                        );


                    }




                });









            /*
            ==========================
            REMOVED IMAGES
            ==========================
            */


            data.append(

                "removedImages",

                JSON.stringify(
                    removedImages
                )

            );









            /*
            ==========================
            NEW IMAGE FILES
            ==========================
            */


            imageFiles.forEach(
                file => {


                    data.append(

                        "images",

                        file

                    );


                }
            );









            await updatePortfolio(

                id,

                data

            );







            toast.success(

                "Portfolio updated successfully"

            );






            navigate(
                "/admin/portfolio"
            );



        }
        catch (error) {


            console.error(error);



            toast.error(

                "Failed updating portfolio"

            );


        }
        finally {


            setLoading(false);


        }


    };












    const handleCancel = () => {


        navigate(
            "/admin/portfolio"
        );


    };












    if (loading) {


        return (

            <div className="page-content">


                <div className="container-fluid text-center">


                    Loading portfolio...


                </div>


            </div>

        );


    }













    return (


        <div className="page-content">


            <div className="container-fluid">







                {/* TITLE */}


                <div className="row">


                    <div className="col-12">


                        <div className="page-title-box">


                            <h4 className="mb-0">

                                Edit Portfolio

                            </h4>


                        </div>


                    </div>


                </div>









                <div className="row">


                    <div className="col-lg-12">


                        <div className="custom-accordion">







                            <PortfolioAccordion


                                id="portfolio-info-collapse"


                                number="01"


                                title="Project Information"


                                description="Update portfolio information"


                                open={

                                    openAccordion ===

                                    "portfolio-info-collapse"

                                }


                                onToggle={
                                    handleAccordionToggle
                                }


                            >



                                <EditPortfolioForm

                                    errors={errors}
                                    formData={formData}


                                    handleChange={
                                        handleChange
                                    }


                                    handleArrayChange={
                                        handleArrayChange
                                    }


                                />



                            </PortfolioAccordion>









                            <PortfolioAccordion


                                id="portfolio-image-collapse"


                                number="02"


                                title="Project Images"


                                description="Manage portfolio images"


                                open={

                                    openAccordion ===

                                    "portfolio-image-collapse"

                                }


                                onToggle={
                                    handleAccordionToggle
                                }


                            >




                                <EditPortfolioImages


                                    images={
                                        formData.images
                                    }
                                    errors={errors}

                                    handleImageChange={
                                        handleImageChange
                                    }


                                    handleRemoveExistingImage={
                                        handleRemoveExistingImage
                                    }


                                />



                            </PortfolioAccordion>









                            <PortfolioAccordion


                                id="portfolio-metadata-collapse"


                                number="03"


                                title="Project Details"


                                description="Update project details"


                                open={

                                    openAccordion ===

                                    "portfolio-metadata-collapse"

                                }


                                onToggle={
                                    handleAccordionToggle
                                }


                            >




                                <EditPortfolioMetadata

                                    errors={errors}
                                    formData={formData}


                                    handleChange={
                                        handleChange
                                    }


                                    handleArrayChange={
                                        handleArrayChange
                                    }


                                />



                            </PortfolioAccordion>






                        </div>


                    </div>


                </div>









                {/* BUTTONS */}


                <div className="row mb-4">


                    <div className="col ms-auto">


                        <div className="d-flex gap-2 justify-content-end">






                            <button


                                type="button"


                                className="btn btn-danger"


                                onClick={handleCancel}


                            >


                                <i className="bi bi-x-circle"></i>


                                Cancel


                            </button>








                            <button


                                type="button"


                                className="btn btn-success"


                                onClick={handleSubmit}


                            >


                                <i className="bi bi-file-earmark-check"></i>


                                Update


                            </button>





                        </div>


                    </div>


                </div>









            </div>


        </div>


    );


};





export default EditPortfolio;