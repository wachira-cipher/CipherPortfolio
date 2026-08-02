import express from "express";
import upload from "../middleware/upload.js";

import {
    getPublicProfile,
    createProfile,
    updateProfile,
    deleteProfile
} from "../controllers/profileController.js";

import { protect } from "../middleware/authMiddleware.js";
import { admin } from "../middleware/adminMiddleware.js";


const router = express.Router();



router.get(
    "/",
    getPublicProfile
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
    upload.single("image"),
    updateProfile
);



router.delete(
    "/",
    protect,
    admin,
    deleteProfile
);



export default router;