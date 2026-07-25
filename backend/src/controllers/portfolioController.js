import Portfolio from "../models/Portfolio.js";




// GET PORTFOLIOS

export const getPortfolios = async (req, res) => {


    try {


        const portfolios = await Portfolio.find()
            .sort("-createdAt");


        res.json({

            success: true,
            portfolios

        });


    } catch (error) {

        res.status(500).json({

            message: error.message

        });


    }


};





// SINGLE PORTFOLIO

export const getPortfolio = async (req, res) => {


    try {


        const portfolio = await Portfolio.findById(
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







// CREATE PORTFOLIO


export const createPortfolio = async (req, res) => {


    try {


        const portfolio = await Portfolio.create(
            req.body
        );



        res.status(201).json({

            success: true,
            portfolio

        });


    } catch (error) {

        res.status(500).json({

            message: error.message

        });


    }


};







// UPDATE PORTFOLIO


export const updatePortfolio = async (req, res) => {


    try {


        const portfolio =
            await Portfolio.findByIdAndUpdate(

                req.params.id,

                req.body,

                {
                    new: true,
                    runValidators: true
                }

            );



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






// DELETE PORTFOLIO


export const deletePortfolio = async (req, res) => {


    try {


        await Portfolio.findByIdAndDelete(
            req.params.id
        );



        res.json({

            success: true,
            message: "Portfolio deleted"

        });


    } catch (error) {

        res.status(500).json({

            message: error.message

        });


    }


};