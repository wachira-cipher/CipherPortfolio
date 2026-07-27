import fs from "fs";
import path from "path";
import Portfolio from "../models/Portfolio.js";





/*
==========================
GET ALL PORTFOLIOS
==========================
*/

export const getPortfolios = async (req, res) => {


    try {


        /*
        ==========================
        PAGINATION
        ==========================
        */


        const page = Number(req.query.page) || 1;


        const limit = Number(req.query.limit) || 6;


        const skip = (page - 1) * limit;







        /*
        ==========================
        FETCH PORTFOLIOS
        ==========================
        */


        const portfolios = await Portfolio.find()

            .sort("-createdAt")

            .skip(skip)

            .limit(limit);








        /*
        ==========================
        TOTAL COUNT
        ==========================
        */


        const totalItems =
            await Portfolio.countDocuments();




        const totalPages =
            Math.ceil(
                totalItems / limit
            );








        res.json({

            success: true,


            portfolios,


            pagination: {


                currentPage: page,


                totalPages,


                totalItems,


                limit


            }


        });



    } catch (error) {


        res.status(500).json({

            success: false,

            message: error.message

        });


    }


};









/*
==========================
GET SINGLE PORTFOLIO
==========================
*/

export const getPortfolio = async (req, res) => {


    try {


        const portfolio =
            await Portfolio.findById(
                req.params.id
            );



        if (!portfolio) {


            return res.status(404).json({

                message: "Portfolio not found"

            });


        }





        res.json({

            success: true,

            portfolio

        });



    } catch (error) {


        res.status(500).json({

            message: error.message

        });


    }


};









/*
==========================
CREATE PORTFOLIO
==========================
*/

export const createPortfolio = async (
    req,
    res
) => {


    try {



        const images =
            req.files
                ?
                req.files.map(
                    file => file.path
                )
                :
                [];







        const portfolioData = {


            ...req.body,


            images


        };







        /*
        ==========================
        PARSE ARRAYS
        ==========================
        */


        if (req.body.technologies) {


            portfolioData.technologies =
                JSON.parse(
                    req.body.technologies
                );


        }






        if (req.body.features) {


            portfolioData.features =
                JSON.parse(
                    req.body.features
                );


        }







        /*
        ==========================
        BOOLEAN VALUES
        ==========================
        */


        if (
            req.body.isFeatured !== undefined
        ) {


            portfolioData.isFeatured =
                req.body.isFeatured === "true";


        }






        if (
            req.body.status !== undefined
        ) {


            portfolioData.status =
                req.body.status === "true";


        }









        const portfolio =
            await Portfolio.create(
                portfolioData
            );







        res.status(201).json({

            success: true,

            portfolio

        });







    }
    catch (error) {


        res.status(500).json({

            message: error.message

        });


    }


};









/*
==========================
UPDATE PORTFOLIO
==========================
*/

export const updatePortfolio = async (
    req,
    res
) => {


    try {



        const portfolio =
            await Portfolio.findById(
                req.params.id
            );





        if (!portfolio) {


            return res.status(404).json({

                message: "Portfolio not found"

            });


        }









        const updateData = {


            ...req.body


        };









        /*
        ==========================
        UPDATE IMAGES ONLY IF NEW
        ==========================
        */


        if (
            req.files &&
            req.files.length > 0
        ) {


            updateData.images =
                req.files.map(
                    file => file.path
                );


        }









        /*
        ==========================
        PARSE ARRAYS
        ==========================
        */


        if (req.body.technologies) {


            updateData.technologies =
                JSON.parse(
                    req.body.technologies
                );


        }







        if (req.body.features) {


            updateData.features =
                JSON.parse(
                    req.body.features
                );


        }









        /*
        ==========================
        BOOLEAN VALUES
        ==========================
        */


        if (
            req.body.isFeatured !== undefined
        ) {


            updateData.isFeatured =
                req.body.isFeatured === "true";


        }







        if (
            req.body.status !== undefined
        ) {


            updateData.status =
                req.body.status === "true";


        }









        const updatedPortfolio =
            await Portfolio.findByIdAndUpdate(


                req.params.id,


                updateData,


                {

                    new: true,

                    runValidators: true

                }


            );









        res.json({

            success: true,

            portfolio: updatedPortfolio

        });







    }
    catch (error) {


        res.status(500).json({

            message: error.message

        });


    }


};









/*
==========================
DELETE PORTFOLIO
==========================
*/

export const deletePortfolio = async (
    req,
    res
) => {


    try {



        const portfolio =
            await Portfolio.findById(
                req.params.id
            );





        if (!portfolio) {


            return res.status(404).json({

                message: "Portfolio not found"

            });


        }







        await Portfolio.findByIdAndDelete(

            req.params.id

        );








        res.json({

            success: true,

            message: "Portfolio deleted successfully"

        });







    }
    catch (error) {


        res.status(500).json({

            message: error.message

        });


    }


};

export const deletePortfolioImage = async (req, res) => {

    try {

        const { id } = req.params;
        const { image } = req.body;

        const portfolio = await Portfolio.findById(id);

        if (!portfolio) {

            return res.status(404).json({
                success: false,
                message: "Portfolio not found"
            });

        }

        // Ensure the image belongs to this portfolio
        if (!portfolio.images.includes(image)) {

            return res.status(404).json({
                success: false,
                message: "Image not found in portfolio"
            });

        }

        // Remove image from MongoDB
        portfolio.images = portfolio.images.filter(
            img => img !== image
        );

        await portfolio.save();

        // Delete file from disk
        const imagePath = path.join(
            process.cwd(),
            image
        );

        if (fs.existsSync(imagePath)) {

            fs.unlinkSync(imagePath);

        }

        return res.status(200).json({

            success: true,
            message: "Image deleted successfully",
            images: portfolio.images

        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({

            success: false,
            message: error.message

        });

    }

};