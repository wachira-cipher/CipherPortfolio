import Skill from "../models/Skill.js";

/*
========================================
CREATE SKILL
========================================
*/
export const createSkill = async (req, res) => {
    try {

        const skill = await Skill.create(req.body);

        res.status(201).json({
            success: true,
            message: "Skill created successfully.",
            skill
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};



/*
========================================
GET ALL SKILLS
========================================
*/
export const getSkills = async (req, res) => {

    try {

        const page = Number(req.query.page) || 1;

        const limit = Number(req.query.limit) || 10;

        const skip = (page - 1) * limit;

        const totalSkills = await Skill.countDocuments();

        const skills = await Skill.find()
            .sort({
                displayOrder: 1,
                createdAt: -1
            })
            .skip(skip)
            .limit(limit);

        res.json({

            success: true,

            skills,

            pagination: {

                currentPage: page,

                totalPages: Math.ceil(totalSkills / limit),

                totalSkills,

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
========================================
GET SINGLE SKILL
========================================
*/
export const getSkillById = async (req, res) => {

    try {

        const skill = await Skill.findById(req.params.id);

        if (!skill) {

            return res.status(404).json({

                success: false,

                message: "Skill not found."

            });

        }

        res.json({

            success: true,

            skill

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};



/*
========================================
UPDATE SKILL
========================================
*/
export const updateSkill = async (req, res) => {

    try {

        const skill = await Skill.findByIdAndUpdate(

            req.params.id,

            req.body,

            {
                new: true,
                runValidators: true
            }

        );

        if (!skill) {

            return res.status(404).json({

                success: false,

                message: "Skill not found."

            });

        }

        res.json({

            success: true,

            message: "Skill updated successfully.",

            skill

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};



/*
========================================
DELETE SKILL
========================================
*/
export const deleteSkill = async (req, res) => {

    try {

        const skill = await Skill.findByIdAndDelete(req.params.id);

        if (!skill) {

            return res.status(404).json({

                success: false,

                message: "Skill not found."

            });

        }

        res.json({

            success: true,

            message: "Skill deleted successfully."

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};



/*
========================================
GET FEATURED SKILLS
========================================
*/
export const getFeaturedSkills = async (req, res) => {

    try {

        const skills = await Skill.find({

            isFeatured: true,

            status: true

        }).sort({

            displayOrder: 1,

            createdAt: -1

        });

        res.json({

            success: true,

            skills

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};



/*
========================================
GET SKILLS BY CATEGORY
========================================
*/
export const getSkillsByCategory = async (req, res) => {

    try {

        const skills = await Skill.find({

            category: req.params.category,

            status: true

        }).sort({

            displayOrder: 1,

            createdAt: -1

        });

        res.json({

            success: true,

            skills

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};