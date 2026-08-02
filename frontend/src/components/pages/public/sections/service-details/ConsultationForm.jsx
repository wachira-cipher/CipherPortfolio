import React, {
    useState
} from "react";


import {
    toast
} from "react-toastify";


import { createConsultation } from "../../../../../api/consultation.api";





export default function ConsultationForm({

    service

}) {



    const [form, setForm] = useState({

        name: "",

        email: "",

        phone: "",

        message: ""

    });



    const [loading, setLoading] = useState(false);





    const handleChange = (e) => {


        setForm({

            ...form,

            [e.target.name]: e.target.value

        });


    };






    const handleSubmit = async (e) => {


        e.preventDefault();



        try {


            setLoading(true);



            await createConsultation({

                ...form,

                service: service._id

            });





            toast.success(

                "Consultation request sent successfully"

            );




            setForm({

                name: "",

                email: "",

                phone: "",

                message: ""

            });



        }


        catch (error) {


            console.error(error);


            toast.error(

                "Failed sending request"

            );


        }


        finally {


            setLoading(false);


        }


    };







    return (

        <div className="consultation-form">


            <div className="form-header">


                <h4>
                    Schedule Consultation
                </h4>


                <p>
                    Tell us about your project and our team will get back to you.
                </p>


            </div>





            <form

                onSubmit={handleSubmit}

                className="php-email-form"

            >



                <div className="form-group">

                    <input

                        type="text"

                        name="name"

                        value={form.name}

                        onChange={handleChange}

                        className="form-input"

                        placeholder="Full Name"

                        required

                    />

                </div>





                <div className="form-group">

                    <input

                        type="email"

                        name="email"

                        value={form.email}

                        onChange={handleChange}

                        className="form-input"

                        placeholder="Email Address"

                        required

                    />

                </div>





                <div className="form-group">


                    <input

                        type="tel"

                        name="phone"

                        value={form.phone}

                        onChange={handleChange}

                        className="form-input"

                        placeholder="Phone Number"

                    />


                </div>







                <textarea

                    name="message"

                    value={form.message}

                    onChange={handleChange}

                    className="form-input"

                    rows="4"

                    placeholder="Tell us about your project..."

                    required


                />







                <button

                    disabled={loading}

                    type="submit"

                    className="btn-consultation"

                >


                    <span>

                        {
                            loading

                                ?

                                "Sending..."

                                :

                                "Book Free Consultation"

                        }

                    </span>


                    <i className="bi bi-arrow-right"></i>


                </button>





            </form>




        </div>

    );

}