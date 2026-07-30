import express from "express";


import {

    createStat,

    getStats,

    getStatById,

    updateStat,

    deleteStat


} from "../controllers/statController.js";



const router = express.Router();





/*
========================================
PUBLIC
========================================
*/


router.get(
    "/",
    getStats
);




router.get(
    "/:id",
    getStatById
);







/*
========================================
ADMIN
========================================
*/


router.post(
    "/",
    createStat
);



router.put(
    "/:id",
    updateStat
);



router.delete(
    "/:id",
    deleteStat
);




export default router;