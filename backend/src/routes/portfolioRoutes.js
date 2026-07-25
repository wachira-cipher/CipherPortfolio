import express from "express";


import {

    getPortfolios,
    getPortfolio,
    createPortfolio,
    updatePortfolio,
    deletePortfolio

} from "../controllers/portfolioController.js";


import { protect } from "../middleware/authMiddleware.js";
import { admin } from "../middleware/adminMiddleware.js";


const router = express.Router();



router.get(
    "/",
    getPortfolios
);



router.get(
    "/:id",
    getPortfolio
);



router.post(
    "/",
    protect,
    admin,
    createPortfolio
);



router.put(
    "/:id",
    protect,
    admin,
    updatePortfolio
);



router.delete(
    "/:id",
    protect,
    admin,
    deletePortfolio
);



export default router;