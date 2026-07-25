import React from "react";
import { useAuth } from "../../../../context/AuthContext";
import { getImageUrl } from "../../../../utils/imageUrl";


const ProfileCard = ({ onEdit }) => {



    const {
        user,
        profile
    } = useAuth();




    const profileData = {


        // User data fallback
        name:
            profile?.name ||
            user?.name ||
            "",


        email:
            profile?.email ||
            user?.email ||
            "",


        createdAt:
            profile?.createdAt ||
            user?.createdAt ||
            "",



        // Profile data
        title:
            profile?.title ||
            "No title assigned",


        bio:
            profile?.bio ||
            "No biography available.",


        image:
            profile?.image ||
            user?.image ||
            "",

        phone:
            profile?.phone ||
            "",


        location:
            profile?.location ||
            "",


        socialLinks:

            profile?.socialLinks || {

                github: "",
                linkedin: "",
                twitter: "",
                website: ""

            }


    };





    return (

        <div className="card h-100">


            <div className="card-body">



                <div className="text-center">



                    <div>


                        <img
                            src={getImageUrl(profileData.image)}
                            alt="profile"
                            className="avatar-lg rounded-circle img-thumbnail"
                        />


                    </div>






                    <h5 className="mt-3 mb-1">

                        {
                            profileData.name ||
                            "Not provided"
                        }

                    </h5>





                    <p className="text-muted">

                        {
                            profileData.title
                        }

                    </p>







                    <div className="d-flex gap-2 justify-content-center">



                        <button
                            className="btn btn-light btn-sm"
                        >

                            <i className="bi bi-envelope me-2"></i>

                            Message

                        </button>





                        <button
                            className="btn btn-primary btn-sm"
                            onClick={() => onEdit(profileData)}
                        >
                            <i className="bi bi-pencil me-2"></i>
                            Edit Profile
                        </button>



                    </div>



                </div>





                <hr className="my-4" />






                <div className="text-muted">



                    <h5 className="font-size-16">

                        About

                    </h5>





                    <p>

                        {
                            profileData.bio
                        }

                    </p>






                    <div className="table-responsive mt-4">





                        <div>


                            <p className="mb-1">

                                Name :

                            </p>


                            <h5 className="font-size-16">

                                {
                                    profileData.name ||
                                    "Not provided"
                                }

                            </h5>


                        </div>








                        <div className="mt-4">


                            <p className="mb-1">

                                Mobile :

                            </p>



                            <h5 className="font-size-16">

                                {
                                    profileData.phone ||
                                    "Not provided"
                                }

                            </h5>



                        </div>








                        <div className="mt-4">


                            <p className="mb-1">

                                Email :

                            </p>



                            <h5 className="font-size-16">

                                {
                                    profileData.email ||
                                    "Not provided"
                                }

                            </h5>



                        </div>









                        <div className="mt-4">


                            <p className="mb-1">

                                Location :

                            </p>



                            <h5 className="font-size-16">

                                {
                                    profileData.location ||
                                    "Not provided"
                                }

                            </h5>



                        </div>








                        <div className="mt-4">


                            <p className="mb-1">

                                Website :

                            </p>



                            <h5 className="font-size-16">


                                {
                                    profileData.socialLinks?.website ||
                                    "Not provided"
                                }


                            </h5>



                        </div>








                        <div className="mt-4">


                            <p className="mb-1">

                                Github :

                            </p>



                            <h5 className="font-size-16">


                                {
                                    profileData.socialLinks?.github ||
                                    "Not provided"
                                }


                            </h5>



                        </div>








                        <div className="mt-4">


                            <p className="mb-1">

                                LinkedIn :

                            </p>



                            <h5 className="font-size-16">


                                {
                                    profileData.socialLinks?.linkedin ||
                                    "Not provided"
                                }


                            </h5>



                        </div>








                        <div className="mt-4">


                            <p className="mb-1">

                                Twitter :

                            </p>



                            <h5 className="font-size-16">


                                {
                                    profileData.socialLinks?.twitter ||
                                    "Not provided"
                                }


                            </h5>



                        </div>








                        <div className="mt-4">


                            <p className="mb-1">

                                Joined :

                            </p>



                            <h5 className="font-size-16">


                                {
                                    profileData.createdAt

                                        ? new Date(
                                            profileData.createdAt
                                        ).toLocaleDateString()

                                        : "Not available"
                                }


                            </h5>



                        </div>





                    </div>




                </div>




            </div>



        </div>


    );


};



export default ProfileCard;