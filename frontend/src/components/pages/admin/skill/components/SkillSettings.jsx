import React from "react";


const SkillSettings = ({
    formData,
    handleChange
}) => {


    return (

        <>


            <div className="row">





                {/* FEATURED */}


                <div className="col-sm-6">


                    <div className="mb-3">


                        <div className="form-check">


                            <input


                                type="checkbox"


                                className="form-check-input"


                                name="isFeatured"


                                checked={
                                    formData.isFeatured
                                }


                                onChange={
                                    handleChange
                                }


                            />




                            <label className="form-check-label">


                                Featured Skill


                            </label>



                        </div>


                    </div>


                </div>









                {/* STATUS */}


                <div className="col-sm-6">


                    <div className="mb-3">


                        <div className="form-check">


                            <input


                                type="checkbox"


                                className="form-check-input"


                                name="status"


                                checked={
                                    formData.status
                                }


                                onChange={
                                    handleChange
                                }


                            />




                            <label className="form-check-label">


                                Active Status


                            </label>



                        </div>


                    </div>


                </div>



            </div>









            <div className="row">





                {/* DISPLAY ORDER */}


                <div className="col-sm-6">


                    <div className="mb-3">


                        <label className="form-label">


                            Display Order


                        </label>




                        <input


                            type="number"


                            name="displayOrder"


                            className="form-control"


                            min="0"


                            placeholder="Example: 1"


                            value={
                                formData.displayOrder
                            }


                            onChange={
                                handleChange
                            }


                        />



                        <small className="text-muted">


                            Controls the order skills appear on your profile


                        </small>



                    </div>


                </div>









                {/* COLOR */}


                <div className="col-sm-6">


                    <div className="mb-3">


                        <label className="form-label">


                            Skill Color


                        </label>




                        <input


                            type="color"


                            name="color"


                            className="form-control form-control-color"


                            value={
                                formData.color
                            }


                            onChange={
                                handleChange
                            }


                        />



                        <small className="text-muted">


                            Used for skill badges and progress indicators


                        </small>



                    </div>


                </div>



            </div>







        </>

    );


};


export default SkillSettings;