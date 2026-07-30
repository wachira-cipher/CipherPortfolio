import Stat from "../models/Stat.js";



/*
========================================
CREATE STAT
ADMIN
========================================
*/

export const createStat = async (req, res) => {

    try {


        const {
            value,
            label,
            icon,
            order
        } = req.body;



        const stat = await Stat.create({

            value,

            label,

            icon,

            order

        });



        res.status(201).json({

            success: true,

            message: "Stat created successfully",

            stat

        });



    }
    catch (error) {


        console.error(error);


        res.status(500).json({

            success: false,

            message: "Failed creating stat",

            error: error.message

        });


    }


};









/*
========================================
GET ALL STATS
PUBLIC
========================================
*/


export const getStats = async (req, res) => {


    try {


        const stats = await Stat.find()

            .sort({

                order: 1

            });



        res.json({

            success: true,

            stats

        });



    }
    catch (error) {


        res.status(500).json({

            success: false,

            message: "Failed loading stats"

        });


    }


};









/*
========================================
GET SINGLE STAT
========================================
*/


export const getStatById = async (req, res) => {


    try {


        const stat = await Stat.findById(

            req.params.id

        );



        if (!stat) {


            return res.status(404).json({

                success: false,

                message: "Stat not found"

            });


        }



        res.json({

            success: true,

            stat

        });



    }
    catch (error) {


        res.status(500).json({

            success: false,

            message: "Failed loading stat"

        });


    }


};









/*
========================================
UPDATE STAT
ADMIN
========================================
*/


export const updateStat = async (req, res) => {


    try {


        const stat = await Stat.findByIdAndUpdate(

            req.params.id,

            req.body,

            {
                new: true
            }

        );



        res.json({

            success: true,

            message: "Stat updated successfully",

            stat

        });



    }
    catch (error) {


        res.status(500).json({

            success: false,

            message: "Failed updating stat"

        });


    }


};









/*
========================================
DELETE STAT
ADMIN
========================================
*/


export const deleteStat = async (req, res) => {


    try {


        await Stat.findByIdAndDelete(

            req.params.id

        );



        res.json({

            success: true,

            message: "Stat deleted successfully"

        });



    }
    catch (error) {


        res.status(500).json({

            success: false,

            message: "Failed deleting stat"

        });


    }


};