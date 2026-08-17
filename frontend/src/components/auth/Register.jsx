import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { registerUser } from "../../api/auth.api";

export default function Register() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,

      [name]: type === "checkbox" ? checked : value,
    });

    // remove error when user fixes field

    setErrors({
      ...errors,

      [name]: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = {};

    const cleanName = formData.name.trim();

    const cleanEmail = formData.email.trim();

    if (!cleanEmail) {
      validationErrors.email = "Email is required";
    }

    if (!cleanName) {
      validationErrors.name = "Full name is required";
    }

    if (!formData.password) {
      validationErrors.password = "Password is required";
    }

    if (!formData.confirmPassword) {
      validationErrors.confirmPassword = "Please confirm your password";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);

      toast.warning("Please fill all required fields");

      return;
    }

    if (formData.password.length < 6) {
      setErrors({
        password: "Password must be at least 6 characters",
      });

      toast.warning("Password too short");

      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setErrors({
        confirmPassword: "Passwords do not match",
      });

      toast.error("Passwords do not match");

      return;
    }

    if (!formData.terms) {
      setErrors({
        terms: "You must accept the terms and conditions",
      });

      toast.warning("Please accept Terms and Conditions");

      return;
    }

    try {
      setLoading(true);

      const response = await registerUser({
        name: cleanName,

        email: cleanEmail,

        password: formData.password,
      });

      toast.success(response.message || "Registration successful");

      setFormData({
        email: "",

        name: "",

        password: "",

        confirmPassword: "",

        terms: false,
      });

      setErrors({});

      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (error) {
      console.error("Registration Error:", error);

      if (error.response) {
        toast.error(error.response.data?.message || "Registration failed");
      } else if (error.request) {
        toast.error("Server unavailable");
      } else {
        toast.error("Unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <Link to="/" className="mb-5 d-block auth-logo">
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
                  <h5 className="text-primary">Register Account</h5>

                  <p className="text-muted">
                    Create your CipherPortfolio account.
                  </p>
                </div>

                <div className="p-2 mt-4">
                  <form onSubmit={handleSubmit}>
                    {/* EMAIL */}

                    <div className="mb-3">
                      <label className="form-label">Email</label>

                      <input
                        type="email"
                        className={`form-control ${
                          errors.email ? "is-invalid" : ""
                        }`}
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter email"
                        disabled={loading}
                      />

                      {errors.email && (
                        <div className="invalid-feedback">{errors.email}</div>
                      )}
                    </div>

                    {/* NAME */}

                    <div className="mb-3">
                      <label className="form-label">Full Name</label>

                      <input
                        type="text"
                        className={`form-control ${
                          errors.name ? "is-invalid" : ""
                        }`}
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter Name 'John Doe' "
                        disabled={loading}
                      />

                      {errors.name && (
                        <div className="invalid-feedback">{errors.name}</div>
                      )}
                    </div>

                    {/* PASSWORD */}

                    <div className="mb-3">
                      <label className="form-label">Password</label>

                      <input
                        type="password"
                        className={`form-control ${
                          errors.password ? "is-invalid" : ""
                        }`}
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter password"
                        disabled={loading}
                      />

                      {errors.password && (
                        <div className="invalid-feedback">
                          {errors.password}
                        </div>
                      )}
                    </div>

                    {/* CONFIRM PASSWORD */}

                    <div className="mb-3">
                      <label className="form-label">Confirm Password</label>

                      <input
                        type="password"
                        className={`form-control ${
                          errors.confirmPassword ? "is-invalid" : ""
                        }`}
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="Confirm password"
                        disabled={loading}
                      />

                      {errors.confirmPassword && (
                        <div className="invalid-feedback">
                          {errors.confirmPassword}
                        </div>
                      )}
                    </div>

                    {/* TERMS */}

                    <div className="form-check">
                      <input
                        type="checkbox"
                        className={`form-check-input ${
                          errors.terms ? "is-invalid" : ""
                        }`}
                        id="terms"
                        name="terms"
                        checked={formData.terms}
                        onChange={handleChange}
                        disabled={loading}
                      />

                      <label className="form-check-label" htmlFor="terms">
                        I accept{" "}
                        <Link to="#" className="text-reset">
                          Terms and Conditions
                        </Link>
                      </label>

                      {errors.terms && (
                        <div className="invalid-feedback d-block">
                          {errors.terms}
                        </div>
                      )}
                    </div>

                    {/* BUTTON */}

                    <div className="mt-3 text-end">
                      <button
                        type="submit"
                        className="btn btn-primary w-sm waves-effect waves-light"
                        disabled={loading}
                      >
                        {loading ? "Registering..." : "Register"}
                      </button>
                    </div>

                    <div className="mt-4 text-center">
                      <p className="text-muted mb-0">
                        Already have an account ?{" "}
                        <Link
                          to="/auth/login"
                          className="fw-medium text-primary"
                        >
                          Login
                        </Link>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* FOOTER */}
          </div>
        </div>
      </div>
    </>
  );
}
