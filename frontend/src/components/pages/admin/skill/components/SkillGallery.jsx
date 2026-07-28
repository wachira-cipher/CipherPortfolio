import React from "react";
import { useNavigate } from "react-router-dom";



const SkillGallery = ({
    skill
}) => {


    const navigate = useNavigate();




    return (


        <div className="row">







            {/* ICON AREA */}



            <div className="col-12">



                <div className="product-img position-relative text-center p-4">








                    {/* FEATURED BADGE */}


                    {
                        skill.isFeatured && (


                            <div className="product-ribbon badge bg-warning">


                                Featured


                            </div>


                        )

                    }









                    {/* VIEW BUTTON */}


                    <div className="product-wishlist">


                        <button

                            type="button"

                            className="btn btn-link p-0 border-0"

                            onClick={() =>
                                navigate(`/admin/skill/${skill._id}`)
                            }

                        >


                            <i className="bi bi-eye-fill"></i>


                        </button>


                    </div>









                    {/* ICON */}



                    <div className="avatar-xl mx-auto mb-3">


                        <div className="avatar-title rounded-circle bg-primary-subtle text-primary">


                            {

                                skill.icon

                                    ?

                                    <i className={`${skill.icon} font-size-40`}></i>


                                    :

                                    <i className="bi bi-code-slash font-size-40"></i>


                            }


                        </div>


                    </div>









                    <h4 className="mb-2">


                        {skill.name}


                    </h4>









                    <span className="badge bg-light text-dark">


                        {skill.category}


                    </span>








                </div>








            </div>




            {/* ACTION BUTTONS */}



            <div className="row text-center mt-2">





                <div className="col-sm-6">


                    <div className="d-grid">


                        <button


                            type="button"


                            className="btn btn-primary waves-effect waves-light mt-2 me-1"


                            onClick={() =>
                                navigate("/admin/skill/create")
                            }


                        >



                            <i className="bi bi-eye-fill me-2"></i>


                            Add Skill



                        </button>



                    </div>



                </div>









                <div className="col-sm-6">


                    <div className="d-grid">


                        <button


                            type="button"


                            className="btn btn-light waves-effect mt-2 waves-light"


                            onClick={() =>
                                navigate(`/admin/skill/${skill._id}/edit`)
                            }


                        >



                            <i className="bi bi-pencil-square me-2"></i>


                            Edit



                        </button>



                    </div>



                </div>







            </div>









        </div>



    );


};





export default SkillGallery;