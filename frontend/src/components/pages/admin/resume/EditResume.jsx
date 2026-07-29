import React, {
    useEffect,
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

import EditExperienceForm from "./components/edit/EditExperienceForm";
import EditEducationForm from "./components/edit/EditEducationForm";



// API

import {
    getResume,
    updateResume
} from "../../../../api/resume.api";








const EditResume = () => {



    const navigate = useNavigate();




    const [loading, setLoading] =
        useState(false);




    const [fetching, setFetching] =
        useState(true);





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

        education: [],

        experience: []

    });






    const [errors, setErrors] =

        useState({});









    /*
    ==========================
        FETCH EXISTING RESUME
    ==========================
    */


    const fetchResume = async () => {


        try {


            setFetching(true);



            const response =

                await getResume();




            setFormData({


                education:

                    response.data.resume.education || [],



                experience:

                    response.data.resume.experience || []



            });



        }
        catch (error) {


            console.error(error);



            toast.error(
                "Failed loading resume"
            );


        }
        finally {


            setFetching(false);


        }


    };







    useEffect(() => {


        fetchResume();


    }, []);









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
        UPDATE
    ==========================
    */


    const handleSubmit = async (e) => {


        e.preventDefault();



        if (!validateForm()) return;




        try {


            setLoading(true);



            await updateResume(
                formData
            );




            toast.success(
                "Resume updated successfully"
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
                "Failed updating resume"
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








    if (fetching) {


        return (

            <div className="text-center p-5">

                Loading resume...

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

                                Edit Resume

                            </h4>


                        </div>


                    </div>


                </div>









                <div className="custom-accordion">





                    <ResumeAccordion

                        id="education-collapse"

                        number="01"

                        title="Education"

                        description="Edit academic background"

                        open={
                            activeAccordion ===
                            "education-collapse"
                        }

                        onToggle={
                            handleAccordionToggle
                        }

                    >


                        <EditEducationForm

                            education={formData.education}

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

                        description="Edit professional experience"

                        open={
                            activeAccordion ===
                            "experience-collapse"
                        }

                        onToggle={
                            handleAccordionToggle
                        }

                    >


                        <EditExperienceForm

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

                                className="btn btn-danger"

                                onClick={handleCancel}

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

                                        "Updating..."

                                        :

                                        <>

                                            <i className="bi bi-check-circle"></i>

                                            Update Resume

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



export default EditResume;