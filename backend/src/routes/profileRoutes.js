import express from "express";

import {

    getProfile,
    createProfile,
    updateProfile,
    deleteProfile

} from "../controllers/profileController.js";


import { protect } from "../middleware/authMiddleware.js";
import { admin } from "../middleware/adminMiddleware.js";


const router = express.Router();



router.get(
    "/",
    getProfile
);



router.post(
    "/",
    protect,
    admin,
    createProfile
);



router.put(
    "/",
    protect,
    admin,
    updateProfile
);



router.delete(
    "/",
    protect,
    admin,
    deleteProfile
);



export default router;