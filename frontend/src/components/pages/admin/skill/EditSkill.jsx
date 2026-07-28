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

import EditSkillAccordion from "./components/edit/EditSkillAccordion";
import EditSkillForm from "./components/edit/EditSkillForm";
import EditSkillDetails from "./components/edit/EditSkillDetails";
import EditSkillSettings from "./components/edit/EditSkillSettings";


// API

import {
    getSkillById,
    updateSkill
} from "../../../../api/skills.api";





const EditSkill = () => {


    const navigate = useNavigate();


    const {
        id
    } = useParams();





    const [loading, setLoading] = useState(false);


    const [fetching, setFetching] = useState(true);









    /*
    ==========================
        ACCORDION STATE
    ==========================
    */


    const [activeAccordion, setActiveAccordion] = useState(
        "skill-info-collapse"
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


        name: "",


        percentage: 0,


        category: "Frontend Development",


        technology: "",


        level: "Beginner",


        icon: "",


        color: "#556ee6",


        description: "",


        yearsOfExperience: 0,


        certification: "",


        certificateUrl: "",


        learningSource: "",


        displayOrder: 0,


        visibility: "Public",


        isFeatured: false,


        status: true


    });





    const [errors, setErrors] = useState({});









    /*
    ==========================
        FETCH SKILL
    ==========================
    */


    const fetchSkill = async () => {


        try {


            setFetching(true);



            const response = await getSkillById(id);



            const skill = response.data.skill;





            setFormData({


                ...skill,


                percentage:
                    Number(skill.percentage) || 0,


                yearsOfExperience:
                    Number(skill.yearsOfExperience) || 0,


                displayOrder:
                    Number(skill.displayOrder) || 0,


                technology:
                    skill.technology || "",


                level:
                    skill.level || "Beginner",


                certification:
                    skill.certification || "",


                certificateUrl:
                    skill.certificateUrl || "",


                learningSource:
                    skill.learningSource || "",


                visibility:
                    skill.visibility || "Public"


            });



        }
        catch (error) {


            console.log(error);



            toast.error(
                "Failed loading skill"
            );


        }
        finally {


            setFetching(false);


        }


    };









    useEffect(() => {


        fetchSkill();


    }, [id]);









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



        // NAME

        if (!formData.name?.trim()) {

            newErrors.name =
                "Skill name is required";

        }





        // CATEGORY

        if (!formData.category?.trim()) {

            newErrors.category =
                "Skill category is required";

        }





        // PERCENTAGE

        if (
            formData.percentage === "" ||
            formData.percentage === null ||
            formData.percentage === undefined
        ) {

            newErrors.percentage =
                "Proficiency percentage is required";

        }

        else if (

            Number(formData.percentage) < 0 ||

            Number(formData.percentage) > 100

        ) {

            newErrors.percentage =
                "Percentage must be between 0 and 100";

        }







        // LEVEL

        if (!formData.level?.trim()) {

            newErrors.level =
                "Skill level is required";

        }







        // DESCRIPTION

        if (!formData.description?.trim()) {

            newErrors.description =
                "Skill description is required";

        }








        // YEARS OF EXPERIENCE

        if (

            formData.yearsOfExperience === "" ||

            formData.yearsOfExperience === null ||

            formData.yearsOfExperience === undefined

        ) {

            newErrors.yearsOfExperience =
                "Years of experience is required";

        }

        else if (

            Number(formData.yearsOfExperience) < 0

        ) {

            newErrors.yearsOfExperience =
                "Years of experience cannot be negative";

        }








        // CERTIFICATE URL FORMAT (optional)

        if (

            formData.certificateUrl &&

            !/^https?:\/\/.+/.test(
                formData.certificateUrl
            )

        ) {

            newErrors.certificateUrl =
                "Enter a valid URL";

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
        CLEAR ERROR
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
        UPDATE SKILL
    ==========================
    */


    const handleSubmit = async (e) => {


        e.preventDefault();





        if (!validateForm()) {


            return;


        }






        try {


            setLoading(true);





            await updateSkill(

                id,

                formData

            );






            toast.success(
                "Skill updated successfully"
            );






            setTimeout(() => {


                navigate(
                    "/admin/skill"
                );


            }, 1000);





        }
        catch (error) {


            console.log(error);



            toast.error(
                "Failed updating skill"
            );


        }
        finally {


            setLoading(false);


        }


    };









    const handleCancel = () => {


        navigate(
            "/admin/skill"
        );


    };









    if (fetching) {


        return (

            <div className="page-content">


                <div className="container-fluid">


                    <div className="text-center">


                        Loading skill...


                    </div>


                </div>


            </div>

        );


    }









    return (

        <div className="page-content">


            <div className="container-fluid">







                {/* PAGE TITLE */}


                <div className="row">


                    <div className="col-12">


                        <div className="page-title-box d-flex align-items-center justify-content-between">


                            <h4 className="mb-0">


                                Edit Skill


                            </h4>




                            <div className="page-title-right">


                                <ol className="breadcrumb m-0">


                                    <li className="breadcrumb-item">


                                        Skills


                                    </li>


                                    <li className="breadcrumb-item active">


                                        Edit Skill


                                    </li>


                                </ol>


                            </div>


                        </div>


                    </div>


                </div>









                {/* ACCORDION */}


                <div className="row">


                    <div className="col-lg-12">


                        <div className="custom-accordion">





                            <EditSkillAccordion


                                id="skill-info-collapse"


                                number="01"


                                title="Skill Information"


                                description="Update basic skill information"


                                open={

                                    activeAccordion ===

                                    "skill-info-collapse"

                                }


                                onToggle={
                                    handleAccordionToggle
                                }


                            >


                                <EditSkillForm


                                    formData={formData}

                                    errors={errors}

                                    handleChange={handleChange}


                                />


                            </EditSkillAccordion>









                            <EditSkillAccordion


                                id="skill-details-collapse"


                                number="02"


                                title="Skill Details"


                                description="Update additional skill details"


                                open={

                                    activeAccordion ===

                                    "skill-details-collapse"

                                }


                                onToggle={
                                    handleAccordionToggle
                                }


                            >


                                <EditSkillDetails


                                    formData={formData}

                                    errors={errors}

                                    handleChange={handleChange}


                                />


                            </EditSkillAccordion>









                            <EditSkillAccordion


                                id="skill-settings-collapse"


                                number="03"


                                title="Display Settings"


                                description="Manage skill visibility"


                                open={

                                    activeAccordion ===

                                    "skill-settings-collapse"

                                }


                                onToggle={
                                    handleAccordionToggle
                                }


                            >


                                <EditSkillSettings


                                    formData={formData}

                                    handleChange={handleChange}


                                />


                            </EditSkillAccordion>





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


                                            <i className="bi bi-file-earmark-check me-1"></i>


                                            Update


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


export default EditSkill;