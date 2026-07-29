import Service from "../models/Service.js";



/*
========================================
CREATE SERVICE
========================================
*/

export const createService = async (req, res) => {

    try {


        const serviceData = {

            ...req.body,


            images: req.files
                ?
                req.files.map(
                    file => file.filename
                )
                :
                []

        };



        if (req.body.features) {

            serviceData.features =
                JSON.parse(
                    req.body.features
                );

        }



        const service =
            await Service.create(
                serviceData
            );



        res.status(201).json({

            success: true,

            message: "Service created successfully",

            service

        });


    }
    catch (error) {

        res.status(400).json({

            success: false,

            message: error.message

        });

    }

};



export const deleteServiceImage = async (req, res) => {

    const { image } = req.body;


    const service = await Service.findById(
        req.params.id
    );


    service.images =
        service.images.filter(
            img => img !== image
        );


    await service.save();


    // delete physical file here if using multer uploads


    res.json({
        message: "Image deleted"
    });

};







/*
========================================
GET ALL SERVICES
========================================
*/

export const getServices = async (req, res) => {


    try {


        const page =
            Number(req.query.page) || 1;


        const limit =
            Number(req.query.limit) || 10;



        const skip =
            (page - 1) * limit;





        const services =
            await Service.find()

                .sort({

                    displayOrder: 1,

                    createdAt: -1

                })

                .skip(skip)

                .limit(limit);






        const total =
            await Service.countDocuments();





        res.json({

            success: true,

            services,

            pagination: {

                currentPage: page,

                totalPages:
                    Math.ceil(total / limit),

                totalItems: total

            }

        });



    }
    catch (error) {


        res.status(500).json({

            success: false,

            message: error.message

        });


    }


};









/*
========================================
GET SINGLE SERVICE
========================================
*/

export const getServiceById = async (req, res) => {


    try {


        const service =
            await Service.findById(
                req.params.id
            );



        if (!service) {


            return res.status(404).json({

                success: false,

                message: "Service not found"

            });


        }





        res.json({

            success: true,

            service

        });



    }
    catch (error) {


        res.status(500).json({

            success: false,

            message: error.message

        });


    }


};



/*
========================================
UPDATE SERVICE
========================================
*/

export const updateService = async (
    req,
    res
) => {

    try {


        const service =
            await Service.findById(
                req.params.id
            );



        if (!service) {

            return res.status(404).json({

                success: false,

                message: "Service not found"

            });

        }






        /*
        ==========================
        BASIC FIELDS
        ==========================
        */

        const updateData = {

            ...req.body

        };









        /*
        ==========================
        HANDLE IMAGES
        ==========================
        */


        let images = [];



        /*
        KEEP EXISTING IMAGES
        */

        if (
            req.body.existingImages
        ) {


            try {


                images =
                    JSON.parse(
                        req.body.existingImages
                    );


            }
            catch (error) {


                images = [];


            }


        }







        /*
        ADD NEW UPLOADED IMAGES
        */

        if (

            req.files &&

            req.files.length > 0

        ) {


            const uploadedImages =

                req.files.map(

                    file => file.path

                );



            images = [

                ...images,

                ...uploadedImages

            ];


        }







        updateData.images = images;









        /*
        ==========================
        PARSE FEATURES
        ==========================
        */


        if (
            req.body.features
        ) {


            updateData.features =

                JSON.parse(
                    req.body.features
                );


        }









        /*
        ==========================
        PARSE TECHNOLOGIES
        ==========================
        */


        if (
            req.body.technologies
        ) {


            updateData.technologies =

                JSON.parse(
                    req.body.technologies
                );


        }









        /*
        ==========================
        BOOLEAN STATUS
        ==========================
        */


        if (
            req.body.status !== undefined
        ) {


            updateData.status =

                req.body.status === "true";


        }








        /*
        ==========================
        REMOVE UNWANTED FIELD
        ==========================
        */


        delete updateData.isActive;









        /*
        ==========================
        UPDATE DATABASE
        ==========================
        */


        const updatedService =

            await Service.findByIdAndUpdate(

                req.params.id,

                updateData,

                {

                    new: true,

                    runValidators: true

                }

            );









        res.json({

            success: true,

            service: updatedService

        });





    }
    catch (error) {


        console.error(
            "UPDATE SERVICE ERROR:",
            error
        );



        res.status(500).json({

            success: false,

            message: error.message

        });


    }

};




/*
========================================
DELETE SERVICE
========================================
*/

export const deleteService = async (req, res) => {


    try {


        const service =
            await Service.findByIdAndDelete(

                req.params.id

            );





        if (!service) {


            return res.status(404).json({

                success: false,

                message: "Service not found"

            });


        }





        res.json({

            success: true,

            message: "Service deleted successfully."

        });



    }
    catch (error) {


        res.status(500).json({

            success: false,

            message: error.message

        });


    }


};









/*
========================================
FEATURED SERVICES
========================================
*/

export const getFeaturedServices = async (req, res) => {


    try {


        const services =
            await Service.find({

                isFeatured: true,

                status: true

            })

                .sort({

                    displayOrder: 1

                });





        res.json({

            success: true,

            services

        });



    }
    catch (error) {


        res.status(500).json({

            success: false,

            message: error.message

        });


    }


};









/*
========================================
CATEGORY FILTER
========================================
*/

export const getServicesByCategory = async (req, res) => {


    try {


        const services =
            await Service.find({

                category: req.params.category,

                status: true

            });





        res.json({

            success: true,

            services

        });



    }
    catch (error) {


        res.status(500).json({

            success: false,

            message: error.message

        });


    }


};