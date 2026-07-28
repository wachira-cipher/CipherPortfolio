import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

// Components
import SkillAccordion from "./components/SkillAccordion";
import SkillForm from "./components/SkillForm";
import SkillDetails from "./components/SkillDetails";
import SkillSettings from "./components/SkillSettings";

// API
import { createSkill } from "../../../../api/skills.api";

const CreateSkill = () => {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

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

        name: "",

        percentage: 0,

        category: "Frontend",

        icon: "",

        color: "#556ee6",

        description: "",

        yearsOfExperience: 0,

        displayOrder: 0,

        isFeatured: false,

        status: true

    });

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

                    (
                        [
                            "percentage",
                            "yearsOfExperience",
                            "displayOrder"
                        ].includes(name)

                    )

                        ?

                        Number(value)

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



        /*
        ==========================
        NAME
        ==========================
        */

        if (!formData.name.trim()) {

            newErrors.name =
                "Skill name is required";

        }





        /*
        ==========================
        PERCENTAGE
        ==========================
        */

        if (

            formData.percentage === "" ||

            formData.percentage === null ||

            Number(formData.percentage) < 0 ||

            Number(formData.percentage) > 100

        ) {

            newErrors.percentage =
                "Percentage must be between 0 and 100";

        }






        /*
        ==========================
        CATEGORY
        ==========================
        */

        if (!formData.category) {

            newErrors.category =
                "Skill category is required";

        }






        /*
        ==========================
        DESCRIPTION
        ==========================
        */

        if (!formData.description.trim()) {

            newErrors.description =
                "Skill description is required";

        }







        /*
        ==========================
        EXPERIENCE
        ==========================
        */

        if (

            formData.yearsOfExperience === "" ||

            Number(formData.yearsOfExperience) < 0

        ) {

            newErrors.yearsOfExperience =
                "Years of experience cannot be negative";

        }








        /*
        ==========================
        DISPLAY ORDER
        ==========================
        */

        if (

            formData.displayOrder === "" ||

            Number(formData.displayOrder) < 0

        ) {

            newErrors.displayOrder =
                "Display order cannot be negative";

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

            await createSkill(formData);

            console.log(
                "CREATE SKILL DATA",
                formData
            );

            toast.success(
                "Skill created successfully"
            );

            setTimeout(() => {

                navigate("/admin/skill");

            }, 1000);

        }

        catch (error) {

            console.log(error);

            toast.error(
                "Failed creating skill"
            );

        }

        finally {

            setLoading(false);

        }

    };

    /*
    ==========================
        CANCEL
    ==========================
    */

    const handleCancel = () => {

        navigate("/admin/skill");

    };

    return (

        <div className="page-content">

            <div className="container-fluid">

                {/* PAGE TITLE */}

                <div className="row">

                    <div className="col-12">

                        <div className="page-title-box d-flex align-items-center justify-content-between">

                            <h4 className="mb-0">

                                Add Skill

                            </h4>

                            <div className="page-title-right">

                                <ol className="breadcrumb m-0">

                                    <li className="breadcrumb-item">

                                        Skills

                                    </li>

                                    <li className="breadcrumb-item active">

                                        Add Skill

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

                            id="addskill-accordion"

                            className="custom-accordion"

                        >

                            <SkillAccordion

                                id="skill-info-collapse"

                                number="01"

                                title="Skill Information"

                                description="Fill in the basic skill information"

                                open={

                                    activeAccordion ===
                                    "skill-info-collapse"

                                }

                                onToggle={
                                    handleAccordionToggle
                                }

                            >

                                <SkillForm

                                    formData={formData}

                                    errors={errors}

                                    handleChange={handleChange}

                                />

                            </SkillAccordion>

                            <SkillAccordion

                                id="skill-details-collapse"

                                number="02"

                                title="Skill Details"

                                description="Additional information about the skill"

                                open={

                                    activeAccordion ===
                                    "skill-details-collapse"

                                }

                                onToggle={
                                    handleAccordionToggle
                                }

                            >

                                <SkillDetails

                                    formData={formData}

                                    errors={errors}

                                    handleChange={handleChange}

                                />

                            </SkillAccordion>

                            <SkillAccordion

                                id="skill-settings-collapse"

                                number="03"

                                title="Display Settings"

                                description="Control how this skill appears"

                                open={

                                    activeAccordion ===
                                    "skill-settings-collapse"

                                }

                                onToggle={
                                    handleAccordionToggle
                                }

                            >

                                <SkillSettings

                                    formData={formData}

                                    handleChange={handleChange}

                                />

                            </SkillAccordion>

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

                                        ? "Saving..."

                                        : <>

                                            <i className="bi bi-file-earmark-check me-1"></i>

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

export default CreateSkill;