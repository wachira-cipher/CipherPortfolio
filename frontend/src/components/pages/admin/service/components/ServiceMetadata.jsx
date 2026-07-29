import React from "react";


const ServiceMetadata = ({
    formData,
    handleChange,
    handleArrayChange,
    errors = {}
}) => {


    return (

        <>


            {/* FEATURES */}


            <div className="mb-3">


                <label className="form-label">

                    Service Features

                </label>



                <input


                    type="text"


                    className={`form-control ${errors.features
                        ?
                        "is-invalid"
                        :
                        ""
                        }`}


                    placeholder="API Development, Database Design, UI Implementation"


                    value={

                        formData.features?.join(", ")

                    }



                    onChange={(e) =>


                        handleArrayChange(

                            e,

                            "features"

                        )


                    }



                />





                {
                    errors.features &&


                    <div className="invalid-feedback">


                        {errors.features}


                    </div>


                }





                <small className="text-muted">

                    Separate features with commas

                </small>



            </div>



















            {/* STATUS */}



            <div className="row">



                <div className="col-sm-6">


                    <div className="form-check">


                        <input


                            type="checkbox"


                            className="form-check-input"


                            name="isActive"


                            checked={

                                formData.isActive

                            }


                            onChange={

                                handleChange

                            }


                        />




                        <label className="form-check-label">


                            Active Service


                        </label>



                    </div>


                </div>



            </div>







        </>

    );


};


export default ServiceMetadata;