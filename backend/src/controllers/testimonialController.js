import Testimonial from "../models/Testimonial.js";
import fs from "fs";
import path from "path";



/*
========================================
CREATE TESTIMONIAL
========================================
*/

export const createTestimonial = async (req, res) => {

    try {

        const testimonial = await Testimonial.create({

            name: req.body.name,

            position: req.body.position,

            company: req.body.company,

            message: req.body.message,

            rating: req.body.rating,

            status: req.body.status,

            isFeatured: req.body.isFeatured,

            image: req.file
                ? req.file.filename
                : ""

        });

        res.status(201).json({

            success: true,

            message: "Testimonial created successfully",

            testimonial

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
GET ALL TESTIMONIALS
========================================
*/

export const getTestimonials = async (req, res) => {

    try {

        const testimonials = await Testimonial
            .find()
            .sort({ createdAt: -1 });

        res.json({

            success: true,

            testimonials

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
GET FEATURED TESTIMONIALS
========================================
*/

export const getFeaturedTestimonials = async (req, res) => {

    try {

        const testimonials = await Testimonial.find({

            isFeatured: true,

            status: true

        });

        res.json({

            success: true,

            testimonials

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
GET SINGLE TESTIMONIAL
========================================
*/

export const getTestimonialById = async (req, res) => {

    try {

        const testimonial = await Testimonial.findById(

            req.params.id

        );

        if (!testimonial) {

            return res.status(404).json({

                success: false,

                message: "Testimonial not found"

            });

        }

        res.json({

            success: true,

            testimonial

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
UPDATE TESTIMONIAL
========================================
*/

export const updateTestimonial = async (req, res) => {

    try {

        const testimonial = await Testimonial.findById(

            req.params.id

        );

        if (!testimonial) {

            return res.status(404).json({

                success: false,

                message: "Testimonial not found"

            });

        }

        testimonial.name = req.body.name;

        testimonial.position = req.body.position;

        testimonial.company = req.body.company;

        testimonial.message = req.body.message;

        testimonial.rating = req.body.rating;

        testimonial.status = req.body.status;

        testimonial.isFeatured = req.body.isFeatured;

        if (req.file) {

            testimonial.image = req.file.filename;

        }

        await testimonial.save();

        res.json({

            success: true,

            message: "Testimonial updated successfully",

            testimonial

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
DELETE TESTIMONIAL
========================================
*/

export const deleteTestimonial = async (req, res) => {

    try {

        const testimonial = await Testimonial.findByIdAndDelete(

            req.params.id

        );

        if (!testimonial) {

            return res.status(404).json({

                success: false,

                message: "Testimonial not found"

            });

        }

        res.json({

            success: true,

            message: "Testimonial deleted successfully"

        });

    }
    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};



export const removeTestimonialImage = async (req, res) => {

    try {


        const testimonial = await Testimonial.findById(
            req.params.id
        );



        if (!testimonial) {


            return res.status(404).json({

                message: "Testimonial not found"

            });


        }







        if (testimonial.image) {


            const imagePath = path.join(

                process.cwd(),

                "uploads",

                testimonial.image

            );



            if (fs.existsSync(imagePath)) {


                fs.unlinkSync(imagePath);


            }


        }








        testimonial.image = null;


        await testimonial.save();







        res.status(200).json({

            message: "Image removed successfully",

            testimonial

        });



    }
    catch (error) {


        console.error(error);


        res.status(500).json({

            message: "Failed removing image"

        });


    }


};