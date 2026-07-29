import express from "express";

import upload from "../middleware/upload.js";

import {

    createTestimonial,

    getTestimonials,

    getFeaturedTestimonials,

    getTestimonialById,

    updateTestimonial,

    deleteTestimonial,
    removeTestimonialImage

} from "../controllers/testimonialController.js";

const router = express.Router();

/*
========================================
CREATE
========================================
*/

router.post(

    "/",

    upload.single("image"),

    createTestimonial

);

/*
========================================
GET ALL
========================================
*/

router.get(

    "/",

    getTestimonials

);

/*
========================================
FEATURED
========================================
*/

router.get(

    "/featured",

    getFeaturedTestimonials

);


router.delete(
    "/:id/image",
    removeTestimonialImage
);

/*
========================================
GET SINGLE
========================================
*/

router.get(

    "/:id",

    getTestimonialById

);

/*
========================================
UPDATE
========================================
*/

router.put(

    "/:id",

    upload.single("image"),

    updateTestimonial

);

/*
========================================
DELETE
========================================
*/

router.delete(

    "/:id",

    deleteTestimonial

);

export default router;