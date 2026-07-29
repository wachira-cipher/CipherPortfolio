import Resume from "../models/Resume.js";





/*
========================================
CREATE RESUME
========================================
*/

export const createResume = async (
    req,
    res
) => {


    try {


        const existingResume =
            await Resume.findOne();




        if (existingResume) {


            return res.status(400).json({

                success: false,

                message:
                    "Resume already exists. Update instead."

            });


        }





        const resume =
            await Resume.create({

                education:
                    req.body.education || [],


                experience:
                    req.body.experience || []


            });






        res.status(201).json({

            success: true,

            message:
                "Resume created successfully",


            resume


        });




    }
    catch (error) {


        console.log(error);


        res.status(500).json({

            success: false,

            message: error.message

        });


    }


};









/*
========================================
GET RESUME
========================================
*/

export const getResume = async (
    req,
    res
) => {


    try {


        let resume =
            await Resume.findOne();






        /*
        ==========================
        CREATE EMPTY RESUME
        ==========================
        */


        if (!resume) {


            resume =
                await Resume.create({

                    education: [],

                    experience: []

                });


        }






        res.json({

            success: true,

            resume

        });




    }
    catch (error) {


        console.log(error);



        res.status(500).json({

            success: false,

            message: error.message

        });



    }


};









/*
========================================
UPDATE RESUME
========================================
*/

export const updateResume = async (
    req,
    res
) => {


    try {



        let resume =
            await Resume.findOne();






        if (!resume) {


            resume =
                await Resume.create({

                    education:
                        req.body.education || [],


                    experience:
                        req.body.experience || []


                });



        }
        else {


            resume.education =

                req.body.education || [];




            resume.experience =

                req.body.experience || [];




            await resume.save();


        }






        res.json({

            success: true,


            message:
                "Resume updated successfully",


            resume


        });




    }
    catch (error) {


        console.log(error);



        res.status(500).json({

            success: false,

            message: error.message

        });


    }


};









/*
========================================
DELETE RESUME
========================================
*/

export const deleteResume = async (
    req,
    res
) => {


    try {



        const resume =
            await Resume.findOne();





        if (!resume) {


            return res.status(404).json({

                success: false,

                message:
                    "Resume not found"

            });


        }






        await Resume.findByIdAndDelete(

            resume._id

        );







        res.json({

            success: true,

            message:
                "Resume deleted successfully"

        });




    }
    catch (error) {


        console.log(error);



        res.status(500).json({

            success: false,

            message: error.message

        });



    }


};