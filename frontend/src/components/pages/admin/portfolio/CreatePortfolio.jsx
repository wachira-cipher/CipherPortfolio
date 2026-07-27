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

import PortfolioAccordion from "./components/PortfolioAccordion";
import PortfolioForm from "./components/PortfolioForm";
import PortfolioImages from "./components/PortfolioImages";
import PortfolioMetadata from "./components/PortfolioMetadata";



// API READY

import { createPortfolio } from "../../../../api/portfolio.api";





const CreatePortfolio = () => {


    const navigate = useNavigate();




    const [loading, setLoading] = useState(false);




    /*
    ==========================
        ACCORDION STATE
    ==========================
    */


    const [activeAccordion, setActiveAccordion] = useState(
        "portfolio-info-collapse"
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









    const [formData, setFormData] = useState({


        title: "",


        category: "Web Development",


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


    });





    const [imageFiles, setImageFiles] = useState([]);



    const [errors, setErrors] = useState({});





    /*
    ==========================
        INPUT CHANGE
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



        const value =
            e.target.value;



        setFormData(prev => ({


            ...prev,


            [field]:

                value

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
            Array.from(
                e.target.files
            );



        setImageFiles(files);



        setFormData(prev => ({


            ...prev,


            images: files


        }));


    };









    /*
    ==========================
        VALIDATION
    ==========================
    */

    /*
    ==========================
    VALIDATION
    ==========================
    */

    const validateForm = () => {


        let newErrors = {};



        if (!formData.title.trim()) {


            newErrors.title =
                "Project title is required";


        }



        if (!formData.description.trim()) {


            newErrors.description =
                "Project description is required";


        }



        if (
            formData.technologies.length === 0
        ) {


            newErrors.technologies =
                "At least one technology is required";


        }



        if (
            imageFiles.length === 0
        ) {


            newErrors.images =
                "At least one project image is required";


        }



        setErrors(newErrors);




        if (Object.keys(newErrors).length > 0) {


            toast.warning(
                "Please fix the highlighted fields"
            );


            return false;


        }



        return true;


    };




    /*
==========================
CLEAR FIELD ERROR
==========================
*/

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




        if (!validateForm()) {


            return;


        }





        try {


            setLoading(true);





            /*
            
            ==========================
            API REQUEST
            ==========================
*/

            const data = new FormData();



            Object.keys(formData).forEach(
                key => {


                    if (key !== "images") {


                        data.append(

                            key,

                            Array.isArray(formData[key])

                                ?

                                JSON.stringify(
                                    formData[key]
                                )

                                :

                                formData[key]

                        );


                    }


                }
            );




            imageFiles.forEach(
                image => {


                    data.append(
                        "images",
                        image
                    );


                }
            );




            await createPortfolio(data);











            console.log(
                "CREATE PORTFOLIO DATA",
                formData
            );






            toast.success(
                "Portfolio created successfully"
            );





            setTimeout(() => {


                navigate(
                    "/admin/portfolio"
                );


            }, 1000);





        }
        catch (error) {


            console.log(error);



            toast.error(
                "Failed creating portfolio"
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









    return (

        <div className="page-content">


            <div className="container-fluid">








                {/* PAGE TITLE */}



                <div className="row">


                    <div className="col-12">


                        <div className="page-title-box d-flex align-items-center justify-content-between">


                            <h4 className="mb-0">

                                Add Portfolio

                            </h4>




                            <div className="page-title-right">


                                <ol className="breadcrumb m-0">


                                    <li className="breadcrumb-item">

                                        Portfolio

                                    </li>


                                    <li className="breadcrumb-item active">

                                        Add Portfolio

                                    </li>


                                </ol>


                            </div>


                        </div>


                    </div>


                </div>









                {/* ACCORDION */}



                <div className="row">


                    <div className="col-lg-12">


                        <div

                            id="addportfolio-accordion"

                            className="custom-accordion"

                        >







                            <PortfolioAccordion


                                id="portfolio-info-collapse"


                                number="01"


                                title="Project Information"


                                description="Fill all portfolio information below"


                                open={

                                    activeAccordion ===

                                    "portfolio-info-collapse"

                                }


                                onToggle={
                                    handleAccordionToggle
                                }


                            >


                                <PortfolioForm

                                    formData={formData}

                                    errors={errors}

                                    handleChange={handleChange}

                                    handleArrayChange={
                                        handleArrayChange
                                    }

                                />



                            </PortfolioAccordion>









                            <PortfolioAccordion


                                id="portfolio-image-collapse"


                                number="02"


                                title="Project Images"


                                description="Upload project images"


                                open={

                                    activeAccordion ===

                                    "portfolio-image-collapse"

                                }


                                onToggle={
                                    handleAccordionToggle
                                }


                            >


                                <PortfolioImages

                                    handleImageChange={
                                        handleImageChange
                                    }

                                    errors={errors}

                                />


                            </PortfolioAccordion>









                            <PortfolioAccordion


                                id="portfolio-metadata-collapse"


                                number="03"


                                title="Project Details"


                                description="Additional project information"


                                open={

                                    activeAccordion ===

                                    "portfolio-metadata-collapse"

                                }


                                onToggle={
                                    handleAccordionToggle
                                }


                            >


                                <PortfolioMetadata


                                    formData={formData}


                                    handleChange={
                                        handleChange
                                    }


                                    handleArrayChange={
                                        handleArrayChange
                                    }

                                    errors={errors}


                                />


                            </PortfolioAccordion>






                        </div>


                    </div>


                </div>









                {/* BUTTONS */}



                <div className="row mb-4">


                    <div className="col ms-auto">


                        <div className="d-flex flex-reverse flex-wrap gap-2">





                            <button

                                type="button"

                                className="btn btn-danger"

                                onClick={handleCancel}

                                disabled={loading}

                            >


                                <i className="bi bi-x-circle"></i>

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



export default CreatePortfolio;