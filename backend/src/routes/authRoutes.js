import express from "express";

import {
    registerUser,
    loginUser,
    getProfile,
    logoutUser,
    unlock
} from "../controllers/authController.js";


import { protect } from "../middleware/authMiddleware.js";


const router = express.Router();



// Register

router.post(
    "/register",
    registerUser
);



// Login

router.post(
    "/login",
    loginUser
);

router.post(
    "/unlock",
    protect,
    unlock
);

// Profile

router.get(
    "/profile",
    protect,
    getProfile
);

router.post(
    "/logout",
    protect,
    logoutUser
);



export default router;