import Profile from "../models/Profile.js";


// GET PROFILE
export const getProfile = async (req, res) => {

    try {


        const profile =
            await Profile.findOne();



        res.status(200).json({

            success: true,

            user: req.user,

            profile

        });


    }
    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};



// CREATE PROFILE
export const createProfile = async (req, res) => {

    try {


        const existingProfile = await Profile.findOne();


        if (existingProfile) {

            return res.status(400).json({
                success: false,
                message: "Profile already exists"
            });

        }



        const profile = await Profile.create(req.body);


        res.status(201).json({

            success: true,
            profile

        });


    } catch (error) {


        res.status(500).json({

            success: false,
            message: error.message

        });


    }

};


//update

export const updateProfile = async (req, res) => {

    try {


        let updateData = {
            ...req.body
        };


        if (req.file) {

            updateData.image =
                `/uploads/${req.file.filename}`;

        }



        if (typeof updateData.socialLinks === "string") {

            updateData.socialLinks =
                JSON.parse(updateData.socialLinks);

        }



        updateData.socialLinks = {

            github: "",
            linkedin: "",
            twitter: "",
            website: "",

            ...(updateData.socialLinks || {})

        };



        let profile =
            await Profile.findOne();



        if (!profile) {


            profile =
                await Profile.create(
                    updateData
                );


        }
        else {


            profile =
                await Profile.findByIdAndUpdate(

                    profile._id,

                    updateData,

                    {
                        new: true,
                        runValidators: true
                    }

                );


        }



        res.status(200).json({

            success: true,

            profile

        });



    }
    catch (error) {


        console.error(
            "PROFILE UPDATE ERROR:",
            error
        );


        res.status(500).json({

            success: false,

            message: error.message

        });


    }

};




// DELETE PROFILE

export const deleteProfile = async (req, res) => {


    try {


        await Profile.findOneAndDelete();


        res.status(200).json({

            success: true,
            message: "Profile deleted"

        });


    } catch (error) {


        res.status(500).json({

            success: false,
            message: error.message

        });


    }


};