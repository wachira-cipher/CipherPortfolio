import React, { useState } from "react";

import { toast } from "react-toastify";

// API

import { createContact } from "../../../api/contact.api";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",

    email: "",

    subject: "",

    message: "",
  });

  /*
    ==========================
        HANDLE INPUT
    ==========================
    */

  const handleChange = (e) => {
    setFormData({
      ...formData,

      [e.target.name]: e.target.value,
    });
  };

  /*
    ==========================
        SUBMIT CONTACT
    ==========================
    */

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await createContact(formData);

      toast.success("Message sent successfully");

      setFormData({
        name: "",

        email: "",

        subject: "",

        message: "",
      });
    } catch (error) {
      console.error(error);

      toast.error("Failed sending message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact section">
      {/* Section Title */}

      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>

        <p>
          Have a project, question, or opportunity? Feel free to reach out and I
          will get back to you as soon as possible.
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row g-4 g-lg-5">
          {/* CONTACT INFORMATION */}

          <div className="col-lg-5">
            <div className="info-box" data-aos="fade-up" data-aos-delay="200">
              <h3>Contact Info</h3>

              <p>Let's discuss your ideas, projects, and how I can help.</p>

              {/* LOCATION */}

              <div className="info-item">
                <div className="icon-box">
                  <i className="bi bi-geo-alt"></i>
                </div>

                <div className="content">
                  <h4>Location</h4>

                  <p>Kerugoya,Kirinyaga County,kenya</p>
                </div>
              </div>

              {/* PHONE */}

              <div className="info-item">
                <div className="icon-box">
                  <i className="bi bi-telephone"></i>
                </div>

                <div className="content">
                  <h4>Phone</h4>

                  <p>+254 714 015 950</p>
                </div>
              </div>

              {/* EMAIL */}

              <div className="info-item">
                <div className="icon-box">
                  <i className="bi bi-envelope"></i>
                </div>

                <div className="content">
                  <h4>Email</h4>

                  <p>cyberspheresystems@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* CONTACT FORM */}

          <div className="col-lg-7">
            <div
              className="contact-form"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h3>Get In Touch</h3>

              <p>Send me a message and I will respond shortly.</p>

              <form onSubmit={handleSubmit} className="php-email-form">
                <div className="row gy-4">
                  {/* NAME */}

                  <div className="col-md-6">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* EMAIL */}

                  <div className="col-md-6">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* SUBJECT */}

                  <div className="col-12">
                    <input
                      type="text"
                      name="subject"
                      className="form-control"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* MESSAGE */}

                  <div className="col-12">
                    <textarea
                      name="message"
                      rows="6"
                      className="form-control"
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <div className="col-12 text-center">
                    <button type="submit" className="btn" disabled={loading}>
                      {loading ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
