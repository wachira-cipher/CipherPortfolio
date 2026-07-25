import express from "express";


import {

    getServices,
    getService,
    createService,
    updateService,
    deleteService

} from "../controllers/serviceController.js";


import { protect } from "../middleware/authMiddleware.js";
import { admin } from "../middleware/adminMiddleware.js";



const router = express.Router();



router.get(
    "/",
    getServices
);



router.get(
    "/:id",
    getService
);



router.post(
    "/",
    protect,
    admin,
    createService
);



router.put(
    "/:id",
    protect,
    admin,
    updateService
);



router.delete(
    "/:id",
    protect,
    admin,
    deleteService
);



export default router;