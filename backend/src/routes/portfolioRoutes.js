import express from "express";


import {

    getPortfolios,
    getPortfolio,
    createPortfolio,
    updatePortfolio,
    deletePortfolio,
    deletePortfolioImage

} from "../controllers/portfolioController.js";


import { protect } from "../middleware/authMiddleware.js";

import { admin } from "../middleware/adminMiddleware.js";


import upload from "../middleware/upload.js";



const router = express.Router();







/*
==========================
GET ALL PORTFOLIOS
==========================
*/

router.get(

    "/",

    getPortfolios

);









/*
==========================
GET SINGLE PORTFOLIO
==========================
*/

router.get(

    "/:id",

    getPortfolio

);









/*
==========================
CREATE PORTFOLIO

Images upload:
multiple files

field name:
images

==========================
*/

router.post(

    "/",

    protect,

    admin,

    upload.array(
        "images",
        10
    ),

    createPortfolio

);









/*
==========================
UPDATE PORTFOLIO

Images upload:
optional new images

field name:
images

==========================
*/

router.put(

    "/:id",

    protect,

    admin,

    upload.array(
        "images",
        10
    ),

    updatePortfolio

);









/*
==========================
DELETE PORTFOLIO
==========================
*/

router.delete(

    "/:id",

    protect,

    admin,

    deletePortfolio

);


router.delete(
    "/:id/image",
    deletePortfolioImage
);




export default router;