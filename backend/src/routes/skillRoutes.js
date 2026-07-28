import express from "express";

import {
    createSkill,
    getSkills,
    getSkillById,
    updateSkill,
    deleteSkill,
    getFeaturedSkills,
    getSkillsByCategory
} from "../controllers/skillController.js";

const router = express.Router();

/*
========================================
CREATE SKILL
========================================
*/
router.post(
    "/",
    createSkill
);



/*
========================================
GET ALL SKILLS
========================================
*/
router.get(
    "/",
    getSkills
);



/*
========================================
GET FEATURED SKILLS
========================================
*/
router.get(
    "/featured",
    getFeaturedSkills
);



/*
========================================
GET SKILLS BY CATEGORY
========================================
*/
router.get(
    "/category/:category",
    getSkillsByCategory
);



/*
========================================
GET SINGLE SKILL
========================================
*/
router.get(
    "/:id",
    getSkillById
);



/*
========================================
UPDATE SKILL
========================================
*/
router.put(
    "/:id",
    updateSkill
);



/*
========================================
DELETE SKILL
========================================
*/
router.delete(
    "/:id",
    deleteSkill
);

export default router;