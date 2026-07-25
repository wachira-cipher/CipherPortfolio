import Service from "../models/Service.js";



// GET ALL SERVICES

export const getServices = async (req, res) => {


    try {


        const services = await Service.find()
            .sort("-createdAt");


        res.json({

            success: true,
            services

        });


    } catch (error) {

        res.status(500).json({

            success: false,
            message: error.message

        });


    }


};





// GET SINGLE SERVICE

export const getService = async (req, res) => {


    try {


        const service = await Service.findById(req.params.id);


        if (!service) {

            return res.status(404).json({

                message: "Service not found"

            });

        }



        res.json({

            success: true,
            service

        });



    } catch (error) {

        res.status(500).json({

            message: error.message

        });


    }


};





// CREATE SERVICE

export const createService = async (req, res) => {


    try {


        const service = await Service.create(req.body);


        res.status(201).json({

            success: true,
            service

        });


    } catch (error) {


        res.status(500).json({

            message: error.message

        });


    }


};






// UPDATE SERVICE

export const updateService = async (req, res) => {


    try {


        const service = await Service.findByIdAndUpdate(

            req.params.id,

            req.body,

            {
                new: true,
                runValidators: true
            }

        );



        res.json({

            success: true,
            service

        });


    } catch (error) {

        res.status(500).json({

            message: error.message

        });


    }


};






// DELETE SERVICE


export const deleteService = async (req, res) => {


    try {


        await Service.findByIdAndDelete(req.params.id);



        res.json({

            success: true,
            message: "Service deleted"

        });


    } catch (error) {

        res.status(500).json({

            message: error.message

        });


    }


};