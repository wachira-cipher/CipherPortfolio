import express from "express";
import upload from "../middleware/upload.js";


import {

    createService,

    getServices,

    getServiceById,

    updateService,

    deleteService,

    getFeaturedServices,

    getServicesByCategory,
    deleteServiceImage


} from "../controllers/serviceController.js";



const router = express.Router();





/*
========================================
CREATE SERVICE
========================================
*/

router.post(
    "/",
    upload.array("images", 5),
    createService
);





/*
========================================
GET ALL SERVICES
========================================
*/

router.get(
    "/",
    getServices
);






/*
========================================
FEATURED SERVICES
========================================
*/

router.get(
    "/featured",
    getFeaturedServices
);







/*
========================================
CATEGORY SERVICES
========================================
*/

router.get(
    "/category/:category",
    getServicesByCategory
);



/*
========================================
DELETE SERVICE
========================================
*/

router.delete(
    "/:id",
    deleteService
);



router.delete(
    "/:id/image",
    deleteServiceImage
);



/*
========================================
SINGLE SERVICE
========================================
*/

router.get(
    "/:id",
    getServiceById
);








/*
========================================
UPDATE SERVICE
========================================
*/

router.put(
    "/:id",
    upload.array("images", 5),
    updateService
);










export default router;