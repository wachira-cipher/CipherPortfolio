import Consultation from "../models/Consultation.js";





export const createConsultation = async (

    req,

    res

) => {


    try {


        const consultation = await Consultation.create({

            service: req.body.service,

            name: req.body.name,

            email: req.body.email,

            phone: req.body.phone,

            message: req.body.message

        });





        res.status(201).json({

            success: true,

            message: "Consultation request submitted successfully",

            consultation

        });



    }

    catch (error) {


        console.error(error);



        res.status(500).json({

            success: false,

            message: "Failed submitting consultation"

        });


    }


};