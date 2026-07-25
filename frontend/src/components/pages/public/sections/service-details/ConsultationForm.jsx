export default function ConsultationForm() {


    return (

        <div className="consultation-form">


            <div className="form-header">

                <h4>
                    Schedule Consultation
                </h4>


                <p>
                    Vestibulum ac diam sit amet quam vehicula elementum
                    sed sit amet dui.
                </p>


            </div>




            <form
                action="forms/consultation.php"
                method="post"
                className="php-email-form"
            >


                <div className="form-group">

                    <input
                        type="text"
                        name="name"
                        className="form-input"
                        placeholder="Full Name"
                        required
                    />

                </div>




                <div className="form-group">

                    <input
                        type="email"
                        name="email"
                        className="form-input"
                        placeholder="Email Address"
                        required
                    />

                </div>





                <div className="form-group">

                    <input
                        type="tel"
                        name="phone"
                        className="form-input"
                        placeholder="Phone Number"
                    />

                </div>




                <input
                    type="hidden"
                    name="subject"
                    value="Business Process Optimization Consultation"
                />





                <div className="form-group">


                    <textarea
                        name="message"
                        className="form-input"
                        rows="4"
                        placeholder="Tell us about your current challenges and goals..."
                        required
                    ></textarea>


                </div>





                <div className="loading">
                    Loading
                </div>


                <div className="error-message"></div>


                <div className="sent-message">
                    Your consultation request has been sent. Thank you!
                </div>





                <button
                    type="submit"
                    className="btn-consultation"
                >

                    <span>
                        Book Free Consultation
                    </span>


                    <i className="bi bi-arrow-right"></i>


                </button>



            </form>


        </div>

    );

}