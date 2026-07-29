import express from "express";


import {

    createResume,

    getResume,

    updateResume,

    deleteResume

} from "../controllers/resumeController.js";



const router = express.Router();





/*
========================================
CREATE RESUME
========================================
*/

router.post(

    "/",

    createResume

);







/*
========================================
GET RESUME
========================================
*/

router.get(

    "/",

    getResume

);







/*
========================================
UPDATE RESUME
========================================
*/

router.put(

    "/",

    updateResume

);







/*
========================================
DELETE RESUME
========================================
*/

router.delete(

    "/",

    deleteResume

);






export default router;