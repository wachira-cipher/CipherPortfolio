import express from "express";


import {

    createContact,

    getContacts,

    getContactById,

    updateContact,

    deleteContact


} from "../controllers/contactController.js";



const router = express.Router();





// PUBLIC

router.post(

    "/",

    createContact

);






// ADMIN

router.get(

    "/",

    getContacts

);



router.get(

    "/:id",

    getContactById

);



router.put(

    "/:id",

    updateContact

);



router.delete(

    "/:id",

    deleteContact

);





export default router;