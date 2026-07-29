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

import TestimonialAccordion from "./components/TestimonialAccordion";
import TestimonialBasicForm from "./components/TestimonialBasicForm";
import TestimonialMessageForm from "./components/TestmonialMessageForm";


// API

import { createTestimonial } from "../../../../api/testimonials.api";



const CreateTestimonial = () => {


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
            "basic-collapse"
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

    const [formData, setFormData] =
        useState({

            name: "",

            position: "",

            company: "",

            image: null,

            message: "",

            rating: 5

        });




    const [errors, setErrors] =
        useState({});








    /*
    ==========================
        INPUT CHANGE
    ==========================
    */

    const handleInputChange = (
        field,
        value
    ) => {


        setFormData(prev => ({

            ...prev,

            [field]: value

        }));


    };








    /*
    ==========================
        IMAGE CHANGE
    ==========================
    */

    const handleImageChange = (
        file
    ) => {


        setFormData(prev => ({

            ...prev,

            image: file

        }));


    };








    /*
    ==========================
        VALIDATION
    ==========================
    */

    const validateForm = () => {


        const newErrors = {};



        if (!formData.name.trim()) {

            newErrors.name =
                "Client name is required";

        }



        if (!formData.message.trim()) {

            newErrors.message =
                "Testimonial message is required";

        }



        if (

            !formData.rating ||

            formData.rating < 1 ||

            formData.rating > 5

        ) {

            newErrors.rating =
                "Rating must be between 1 and 5";

        }



        setErrors(newErrors);



        if (Object.keys(newErrors).length) {

            toast.warning(
                "Please complete testimonial information"
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



            const payload =
                new FormData();



            payload.append(
                "name",
                formData.name
            );


            payload.append(
                "position",
                formData.position
            );


            payload.append(
                "company",
                formData.company
            );


            payload.append(
                "message",
                formData.message
            );


            payload.append(
                "rating",
                formData.rating
            );



            if (formData.image) {

                payload.append(
                    "image",
                    formData.image
                );

            }



            await createTestimonial(
                payload
            );



            toast.success(
                "Testimonial created successfully"
            );



            setTimeout(() => {

                navigate(
                    "/admin/testimonial"
                );

            }, 1000);


        }
        catch (error) {


            console.error(error);



            toast.error(
                "Failed creating testimonial"
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


        navigate(
            "/admin/testimonial"
        );


    };








    return (

        <div className="page-content">

            <div className="container-fluid">



                <div className="row">

                    <div className="col-12">

                        <div className="page-title-box">

                            <h4 className="mb-0">

                                Add Testimonial

                            </h4>

                        </div>

                    </div>

                </div>







                <div className="custom-accordion">



                    <TestimonialAccordion

                        id="basic-collapse"

                        number="01"

                        title="Basic Information"

                        description="Client details and profile image"

                        open={
                            activeAccordion ===
                            "basic-collapse"
                        }

                        onToggle={
                            handleAccordionToggle
                        }

                    >

                        <TestimonialBasicForm

                            formData={formData}

                            handleInputChange={
                                handleInputChange
                            }

                            handleImageChange={
                                handleImageChange
                            }

                            errors={errors}

                        />

                    </TestimonialAccordion>







                    <TestimonialAccordion

                        id="message-collapse"

                        number="02"

                        title="Testimonial"

                        description="Client feedback and rating"

                        open={
                            activeAccordion ===
                            "message-collapse"
                        }

                        onToggle={
                            handleAccordionToggle
                        }

                    >

                        <TestimonialMessageForm

                            formData={formData}

                            handleInputChange={
                                handleInputChange
                            }

                            errors={errors}

                        />

                    </TestimonialAccordion>



                </div>








                <div className="row mt-4 mb-4">

                    <div className="col ms-auto">

                        <div className="d-flex gap-2">

                            <button

                                type="button"

                                className="btn btn-danger"

                                onClick={handleCancel}

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

                                        "Saving..."

                                        :

                                        <>

                                            <i className="bi bi-check-circle me-1"></i>

                                            Save Testimonial

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

export default CreateTestimonial;