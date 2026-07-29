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

import TestimonialAccordion from "./components/TestimonialAccordion";

import EditTestimonialBasicForm from "./components/edit/EditTestimonialBasicForm";

import EditTestimonialMessageForm from "./components/edit/EditTestimonialMessageForm";


// API

import {
    getTestimonialById,
    updateTestimonial,
    removeTestimonialImage
} from "../../../../api/testimonials.api";







const EditTestimonial = () => {


    const navigate = useNavigate();


    const {
        id
    } = useParams();





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

            oldImage: "",

            message: "",

            rating: 5

        });




    const [errors, setErrors] =
        useState({});









    /*
    ==========================
        FETCH TESTIMONIAL
    ==========================
    */


    const fetchTestimonial = async () => {


        try {


            setFetching(true);



            const response =
                await getTestimonialById(id);





            const testimonial =
                response.data.testimonial;





            setFormData({

                name:
                    testimonial.name || "",


                position:
                    testimonial.position || "",


                company:
                    testimonial.company || "",


                image:
                    null,


                oldImage:
                    testimonial.image || "",


                message:
                    testimonial.message || "",


                rating:
                    testimonial.rating || 5


            });



        }
        catch (error) {


            console.error(error);


            toast.error(
                "Failed loading testimonial"
            );


        }
        finally {


            setFetching(false);


        }


    };








    useEffect(() => {


        if (id) {

            fetchTestimonial();

        }


    }, [id]);









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


    const handleImageChange = (file) => {


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



    const handleRemoveExistingImage = async () => {


        try {


            await removeTestimonialImage(
                id
            );



            setFormData(prev => ({

                ...prev,

                oldImage: ""

            }));



            toast.success(
                "Image removed successfully"
            );


        }
        catch (error) {


            console.error(error);


            toast.error(
                "Failed removing image"
            );


        }


    };





    /*
    ==========================
        UPDATE
    ==========================
    */


    const handleSubmit = async (e) => {


        e.preventDefault();



        if (!validateForm())
            return;





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







            await updateTestimonial(
                id,
                payload
            );






            toast.success(
                "Testimonial updated successfully"
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
                "Failed updating testimonial"
            );


        }
        finally {


            setLoading(false);


        }


    };









    const handleCancel = () => {


        navigate(
            "/admin/testimonial"
        );


    };








    if (fetching) {


        return (

            <div className="text-center p-5">

                Loading testimonial...

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

                                Edit Testimonial

                            </h4>


                        </div>


                    </div>


                </div>









                <div className="custom-accordion">





                    <TestimonialAccordion

                        id="basic-collapse"

                        number="01"

                        title="Basic Information"

                        description="Update client details and image"

                        open={
                            activeAccordion ===
                            "basic-collapse"
                        }

                        onToggle={
                            handleAccordionToggle
                        }

                    >


                        <EditTestimonialBasicForm

                            formData={formData}

                            handleInputChange={handleInputChange}

                            handleImageChange={handleImageChange}

                            handleRemoveExistingImage={
                                handleRemoveExistingImage
                            }

                            errors={errors}

                        />


                    </TestimonialAccordion>









                    <TestimonialAccordion

                        id="message-collapse"

                        number="02"

                        title="Testimonial"

                        description="Update feedback and rating"

                        open={
                            activeAccordion ===
                            "message-collapse"
                        }

                        onToggle={
                            handleAccordionToggle
                        }

                    >


                        <EditTestimonialMessageForm

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

                                className="btn btn-danger"

                                type="button"

                                onClick={handleCancel}

                            >

                                <i className="bi bi-x-circle me-1"></i>

                                Cancel

                            </button>







                            <button

                                className="btn btn-success"

                                type="button"

                                onClick={handleSubmit}

                                disabled={loading}

                            >


                                {
                                    loading

                                        ?

                                        "Updating..."

                                        :

                                        <>

                                            <i className="bi bi-pencil-square me-1"></i>

                                            Update Testimonial

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



export default EditTestimonial;