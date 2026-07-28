import React, {
    useEffect,
    useState
} from "react";


import {
    Link,
    useParams
} from "react-router-dom";


import {
    toast
} from "react-toastify";


// API

import {
    getSkillById
} from "../../../../api/skills.api";




// Components

import SkillGallery from "./components/SkillGallery";
import SkillInformation from "./components/SkillInformation";
import SkillDescription from "./components/SkillDescription";
import SkillSpecifications from "./components/SkillSpecifications";








const ViewSkill = () => {



    const {
        id
    } = useParams();





    const [skill, setSkill] = useState(null);



    const [loading, setLoading] = useState(true);










    /*
    ==========================
        FETCH SKILL
    ==========================
    */


    const fetchSkill = async () => {


        try {


            setLoading(true);



            const response = await getSkillById(id);




            setSkill(

                response.data.skill

            );



        }


        catch (error) {


            console.error(error);



            toast.error(

                "Failed loading skill"

            );


        }


        finally {


            setLoading(false);


        }


    };









    useEffect(() => {


        if (id) {


            fetchSkill();


        }


    }, [id]);













    if (loading) {


        return (


            <div className="text-center p-5">


                Loading skill...


            </div>


        );


    }









    if (!skill) {


        return (


            <div className="text-center p-5">


                Skill not found


            </div>


        );


    }












    return (


        <>



            <div className="page-content">


                <div className="container-fluid">







                    {/* PAGE TITLE */}



                    <div className="row">


                        <div className="col-12">



                            <div className="page-title-box d-flex align-items-center justify-content-between">



                                <h4 className="mb-0">


                                    Skill Detail


                                </h4>








                                <div className="page-title-right">


                                    <ol className="breadcrumb m-0">



                                        <li className="breadcrumb-item">


                                            <Link to="/admin/skill">


                                                Skills


                                            </Link>


                                        </li>






                                        <li className="breadcrumb-item active">


                                            Details


                                        </li>




                                    </ol>



                                </div>



                            </div>



                        </div>



                    </div>













                    <div className="row">


                        <div className="col-lg-12">



                            <div className="card">



                                <div className="card-body">







                                    <div className="row">









                                        {/* SKILL VISUAL */}



                                        <div className="col-xl-5">


                                            <div className="product-detail">



                                                <SkillGallery

                                                    skill={skill}

                                                />



                                            </div>



                                        </div>















                                        {/* INFORMATION */}



                                        <div className="col-xl-7">


                                            <div className="mt-4 mt-xl-3 ps-xl-4">



                                                <SkillInformation

                                                    skill={skill}

                                                />



                                            </div>



                                        </div>









                                    </div>















                                    {/* DESCRIPTION */}




                                    <SkillDescription

                                        skill={skill}

                                    />














                                    {/* SPECIFICATIONS */}





                                    <SkillSpecifications

                                        skill={skill}

                                    />














                                </div>



                            </div>



                        </div>



                    </div>








                </div>



            </div>






        </>


    );


};





export default ViewSkill;