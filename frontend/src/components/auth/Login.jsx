import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

import { useAuth } from "../../context/AuthContext";



export default function Login() {


    const navigate = useNavigate();
    const { login } = useAuth();



    const [loading, setLoading] = useState(false);



    const [formData, setFormData] = useState({

        email: "",

        password: "",

        remember: false

    });





    const [errors, setErrors] = useState({});







    const handleChange = (e) => {


        const {
            name,
            value,
            type,
            checked
        } = e.target;



        setFormData({

            ...formData,

            [name]:

                type === "checkbox"
                    ? checked
                    : value

        });




        // clear error after correction

        setErrors({

            ...errors,

            [name]: ""

        });


    };









    const handleSubmit = async (e) => {

        e.preventDefault();

        const validationErrors = {};

        const cleanEmail = formData.email.trim();

        if (!cleanEmail) {

            validationErrors.email = "Email is required";

        }

        if (!formData.password) {

            validationErrors.password = "Password is required";

        }

        if (Object.keys(validationErrors).length > 0) {

            setErrors(validationErrors);

            toast.warning(
                "Please fill all required fields"
            );

            return;

        }

        try {

            setLoading(true);

            const response = await login({

                email: cleanEmail,
                password: formData.password

            });

            console.log(response);

            if (
                !response ||
                !response.token ||
                !response.user
            ) {

                throw new Error(
                    "Invalid server response"
                );

            }

            // Remember Me
            if (formData.remember) {

                localStorage.setItem(
                    "remember",
                    "true"
                );

            } else {

                localStorage.removeItem(
                    "remember"
                );

            }

            toast.success(
                "Login successful"
            );

            if (response.user.role === "admin") {

                navigate(
                    "/admin/dashboard",
                    {
                        replace: true
                    }
                );

            } else {

                navigate(
                    "/",
                    {
                        replace: true
                    }
                );

            }

        } catch (error) {

            console.error(
                "Login Error:",
                error
            );

            if (error.response) {

                toast.error(

                    error.response.data?.message ||

                    "Invalid email or password"

                );

            } else if (error.request) {

                toast.error(

                    "Server unavailable. Try again later."

                );

            } else {

                toast.error(

                    error.message ||

                    "Unexpected error occurred"

                );

            }

        } finally {

            setLoading(false);

        }

    };








    return (


        <div className="account-pages my-5 pt-sm-5">


            <div className="container">



                <div className="row">


                    <div className="col-lg-12">


                        <div className="text-center">


                            <Link
                                to="/"
                                className="mb-5 d-block auth-logo"
                            >


                                <img
                                    src="/assets/auth/images/logo-dark.png"
                                    alt="logo"
                                    height="22"
                                    className="logo logo-dark"
                                />


                                <img
                                    src="/assets/auth/images/logo-light.png"
                                    alt="logo"
                                    height="22"
                                    className="logo logo-light"
                                />


                            </Link>


                        </div>


                    </div>


                </div>









                <div className="row align-items-center justify-content-center">


                    <div className="col-md-8 col-lg-6 col-xl-5">



                        <div className="card">



                            <div className="card-body p-4">





                                <div className="text-center mt-2">


                                    <h5 className="text-primary">

                                        Welcome Back !

                                    </h5>



                                    <p className="text-muted">

                                        Sign in to continue to CipherPortfolio.

                                    </p>


                                </div>








                                <div className="p-2 mt-4">


                                    <form onSubmit={handleSubmit}>





                                        {/* EMAIL */}


                                        <div className="mb-3">


                                            <label className="form-label">

                                                Email

                                            </label>




                                            <input


                                                type="email"


                                                className={`form-control ${errors.email
                                                    ?
                                                    "is-invalid"
                                                    :
                                                    ""
                                                    }`}


                                                name="email"


                                                value={
                                                    formData.email
                                                }


                                                onChange={
                                                    handleChange
                                                }


                                                placeholder="Enter email"


                                                disabled={loading}


                                            />



                                            {
                                                errors.email &&


                                                <div className="invalid-feedback">

                                                    {
                                                        errors.email
                                                    }

                                                </div>

                                            }



                                        </div>









                                        {/* PASSWORD */}


                                        <div className="mb-3">


                                            <div className="float-end">


                                                <Link

                                                    to="/forgot-password"

                                                    className="text-muted"

                                                >

                                                    Forgot password?

                                                </Link>


                                            </div>






                                            <label className="form-label">

                                                Password

                                            </label>





                                            <input



                                                type="password"



                                                className={`form-control ${errors.password
                                                    ?
                                                    "is-invalid"
                                                    :
                                                    ""
                                                    }`}



                                                name="password"



                                                value={
                                                    formData.password
                                                }



                                                onChange={
                                                    handleChange
                                                }



                                                placeholder="Enter password"



                                                disabled={loading}



                                            />




                                            {
                                                errors.password &&


                                                <div className="invalid-feedback">

                                                    {
                                                        errors.password
                                                    }

                                                </div>


                                            }



                                        </div>









                                        {/* REMEMBER */}



                                        <div className="form-check">



                                            <input


                                                type="checkbox"


                                                className="form-check-input"


                                                id="remember"


                                                name="remember"


                                                checked={
                                                    formData.remember
                                                }


                                                onChange={
                                                    handleChange
                                                }



                                            />




                                            <label

                                                className="form-check-label"

                                                htmlFor="remember"

                                            >

                                                Remember me

                                            </label>



                                        </div>









                                        <div className="mt-3 text-end">


                                            <button


                                                className="btn btn-primary w-sm waves-effect waves-light"



                                                type="submit"



                                                disabled={loading}



                                            >



                                                {

                                                    loading

                                                        ?

                                                        "Logging in..."

                                                        :

                                                        "Log In"

                                                }



                                            </button>



                                        </div>









                                        <div className="mt-4 text-center">


                                            <p className="mb-0">


                                                Don't have an account ?{" "}



                                                <Link

                                                    to="/auth/register"

                                                    className="fw-medium text-primary"

                                                >

                                                    Signup now

                                                </Link>


                                            </p>


                                        </div>




                                    </form>


                                </div>


                            </div>


                        </div>









                        <div className="mt-5 text-center">


                            <p>


                                © {new Date().getFullYear()} CipherPortfolio.


                                <br />


                                Crafted with{" "}


                                <i className="bi bi-heart-fill text-danger"></i>


                                {" "} by {" "}


                                <a

                                    href="https://www.cyberspheresystems.com"

                                    target="_blank"

                                    rel="noopener noreferrer"

                                >

                                    Cybersphere Systems

                                </a>


                            </p>


                        </div>




                    </div>


                </div>


            </div>


        </div>


    );


}