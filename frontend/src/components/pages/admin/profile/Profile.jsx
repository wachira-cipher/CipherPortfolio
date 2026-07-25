import { useState } from "react";
import { useEffect } from "react";

import { toast } from "react-toastify";

import ProfileHeader from "./ProfileHeader";
import ProfileCard from "./ProfileCard";
import ProfileTabs from "./ProfileTabs";
import ProfileForm from "./ProfileForm";
import { useAuth } from "../../../../context/AuthContext";


const Profile = () => {

    const [editing, setEditing] = useState(false);

    const [selectedProfile, setSelectedProfile] = useState(null);
    const {
        refreshProfile
    } = useAuth();



    // CENTRAL TOAST HANDLER
    const showToast = (
        message,
        type = "success"
    ) => {

        toast[type](message);

    };




    const handleEdit = (profileData) => {

        setSelectedProfile(profileData);

        setEditing(true);


        showToast(
            "Editing profile",
            "info"
        );

    };





    const handleCancel = () => {

        setEditing(false);

        setSelectedProfile(null);


        showToast(
            "Profile editing cancelled",
            "warning"
        );

    };

    useEffect(() => {

        refreshProfile();

    }, []);




    return (

        <div className="page-content">

            <div className="container-fluid">


                <ProfileHeader
                    showToast={showToast}
                />



                <div className="row mb-4">


                    <div className="col-xl-4">


                        <ProfileCard

                            onEdit={handleEdit}

                            showToast={showToast}

                        />


                    </div>





                    <div className="col-xl-8">


                        {
                            editing ? (

                                <ProfileForm

                                    profileData={selectedProfile}

                                    onCancel={handleCancel}

                                    showToast={showToast}

                                />


                            ) : (


                                <ProfileTabs

                                    showToast={showToast}

                                />

                            )

                        }


                    </div>


                </div>


            </div>


        </div>

    );

};


export default Profile;