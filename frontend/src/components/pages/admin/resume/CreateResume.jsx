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

import ResumeAccordion from "./components/ResumeAccordion";

import EducationForm from "./components/EducationForm";

import ExperienceForm from "./components/ExperienceForm";


// API

import {
    createResume
} from "../../../../api/resume.api";





const CreateResume = () => {


    const navigate = useNavigate();



    const [loading, setLoading] =
        useState(false);





    /*
    ==========================
        ACCORDION
    ==========================
    */


    const [activeAccordion, setActiveAccordion] =
        useState(
            "education-collapse"
        );





    const handleAccordionToggle = (id) => {


        setActiveAccordion(prev =>

            prev === id

                ? null

                : id

        );


    };









    /*
    ==========================
        FORM DATA
    ==========================
    */


    const [formData, setFormData] = useState({

        education: [

            {

                title: "",

                period: "",

                institution: "",

                description: ""

            }

        ],



        experience: [

            {

                title: "",

                period: "",

                company: "",

                responsibilities: []

            }

        ]

    });







    const [errors, setErrors] =
        useState({});









    /*
    ==========================
        EDUCATION
    ==========================
    */


    const handleEducationChange = (
        index,
        field,
        value
    ) => {


        setFormData(prev => {


            const education = [
                ...prev.education
            ];


            education[index] = {

                ...education[index],

                [field]: value

            };


            return {

                ...prev,

                education

            };


        });


    };









    const addEducation = () => {


        setFormData(prev => ({

            ...prev,

            education: [

                ...prev.education,

                {

                    title: "",

                    period: "",

                    institution: "",

                    description: ""

                }

            ]

        }));


    };









    const removeEducation = (index) => {


        setFormData(prev => ({

            ...prev,

            education:

                prev.education.filter(
                    (_, i) => i !== index
                )

        }));


    };









    /*
    ==========================
        EXPERIENCE
    ==========================
    */


    const handleExperienceChange = (
        index,
        field,
        value
    ) => {


        setFormData(prev => {


            const experience = [
                ...prev.experience
            ];


            experience[index] = {

                ...experience[index],

                [field]: value

            };


            return {

                ...prev,

                experience

            };


        });


    };









    const addExperience = () => {


        setFormData(prev => ({

            ...prev,

            experience: [

                ...prev.experience,

                {

                    title: "",

                    period: "",

                    company: "",

                    responsibilities: []

                }

            ]

        }));


    };









    const removeExperience = (index) => {


        setFormData(prev => ({

            ...prev,

            experience:

                prev.experience.filter(
                    (_, i) => i !== index
                )

        }));


    };









    /*
    ==========================
        VALIDATION
    ==========================
    */
    const validateForm = () => {


        const newErrors = {};





        formData.education.forEach(

            (item, index) => {


                if (!item.title.trim()) {


                    newErrors.education =
                        `Education ${index + 1} title required`;


                }



                if (!item.institution.trim()) {


                    newErrors.education =
                        `Education ${index + 1} institution required`;


                }



            }

        );








        formData.experience.forEach(

            (item, index) => {


                if (!item.title.trim()) {


                    newErrors.experience =
                        `Experience ${index + 1} title required`;


                }




                if (!item.company.trim()) {


                    newErrors.experience =
                        `Experience ${index + 1} company required`;


                }



            }

        );







        setErrors(newErrors);






        if (Object.keys(newErrors).length) {


            toast.warning(
                "Please complete resume information"
            );


            return false;


        }





        return true;


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



            await createResume(
                formData
            );



            toast.success(
                "Resume created successfully"
            );



            setTimeout(() => {


                navigate(
                    "/admin/resume"
                );


            }, 1000);



        }
        catch (error) {


            console.error(error);



            toast.error(
                "Failed creating resume"
            );


        }
        finally {


            setLoading(false);


        }


    };









    const handleCancel = () => {


        navigate(
            "/admin/resume"
        );


    };









    return (

        <div className="page-content">


            <div className="container-fluid">



                <div className="row">


                    <div className="col-12">


                        <div className="page-title-box">


                            <h4 className="mb-0">

                                Add Resume

                            </h4>


                        </div>


                    </div>


                </div>









                <div className="custom-accordion">





                    <ResumeAccordion

                        id="education-collapse"

                        number="01"

                        title="Education"

                        description="Add academic background"

                        open={
                            activeAccordion ===
                            "education-collapse"
                        }

                        onToggle={
                            handleAccordionToggle
                        }

                    >


                        <EducationForm

                            education={
                                formData.education
                            }

                            handleEducationChange={
                                handleEducationChange
                            }

                            addEducation={
                                addEducation
                            }

                            removeEducation={
                                removeEducation
                            }

                            errors={errors}

                        />


                    </ResumeAccordion>









                    <ResumeAccordion

                        id="experience-collapse"

                        number="02"

                        title="Experience"

                        description="Add professional experience"

                        open={
                            activeAccordion ===
                            "experience-collapse"
                        }

                        onToggle={
                            handleAccordionToggle
                        }

                    >


                        <ExperienceForm

                            experience={
                                formData.experience
                            }

                            handleExperienceChange={
                                handleExperienceChange
                            }

                            addExperience={
                                addExperience
                            }

                            removeExperience={
                                removeExperience
                            }

                            errors={errors}

                        />


                    </ResumeAccordion>





                </div>









                <div className="row mt-4 mb-4">


                    <div className="col ms-auto">


                        <div className="d-flex gap-2">


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

                                disabled={loading}

                            >


                                {
                                    loading

                                        ?

                                        "Saving..."

                                        :

                                        <>

                                            <i className="bi bi-file-earmark-check"></i>

                                            Save Resume

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


export default CreateResume;