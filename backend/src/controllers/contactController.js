import Contact from "../models/Contact.js";
import nodemailer from "nodemailer";
import { adminContactNotification } from "../utils/adminContactNotification.js";
import { contactConfirmationEmail } from "../utils/contactConfirmationEmail.js";



/*
========================================
CREATE CONTACT
PUBLIC FORM
========================================
*/

export const createContact = async (req, res) => {

    try {


        const {
            name,
            email,
            subject,
            message
        } = req.body;



        const contact = await Contact.create({

            name,

            email,

            subject,

            message,

            status: "New"

        });





        /*
        ==============================
        SEND EMAIL NOTIFICATION
        ==============================
        */
        /*
        ==============================
        MAIL TRANSPORTER
        ==============================
        */

        const transporter = nodemailer.createTransport({

            service: "gmail",

            auth: {

                user: process.env.MAIL_USER,

                pass: process.env.MAIL_PASS

            }

        });

        await transporter.sendMail({

            from: `"${process.env.APP_NAME}" <${process.env.MAIL_USER}>`,

            to: process.env.CONTACT_EMAIL,

            replyTo: email,

            subject: `📩 New Contact - ${subject}`,

            html: adminContactNotification({
                name,
                email,
                subject,
                message
            })

        });

        await transporter.sendMail({

            from: `"${process.env.APP_NAME}" <${process.env.MAIL_USER}>`,

            to: email,

            subject: `We've received your message`,

            html: contactConfirmationEmail({
                name
            })

        });








        res.status(201).json({

            success: true,

            message:
                "Message sent successfully",

            contact

        });



    }
    catch (error) {


        console.error(error);


        res.status(500).json({

            success: false,

            message:
                "Failed sending message",

            error: error.message

        });


    }

};









/*
========================================
GET ALL CONTACTS
ADMIN
========================================
*/

export const getContacts = async (req, res) => {


    try {


        const contacts = await Contact.find()

            .sort({

                createdAt: -1

            });





        res.json({

            success: true,

            contacts

        });



    }
    catch (error) {


        res.status(500).json({

            success: false,

            message:
                "Failed loading contacts"

        });


    }


};









/*
========================================
GET SINGLE CONTACT
========================================
*/


export const getContactById = async (req, res) => {


    try {


        const contact = await Contact.findById(

            req.params.id

        );



        if (!contact) {

            return res.status(404).json({

                message: "Contact not found"

            });

        }






        res.json({

            success: true,

            contact

        });



    }
    catch (error) {


        res.status(500).json({

            success: false,

            message: "Failed loading contact"

        });


    }


};









/*
========================================
UPDATE STATUS
ADMIN
========================================
*/


export const updateContact = async (req, res) => {


    try {


        const contact = await Contact.findByIdAndUpdate(

            req.params.id,

            {

                status: req.body.status

            },

            {
                new: true
            }

        );



        res.json({

            success: true,

            contact

        });



    }
    catch (error) {


        res.status(500).json({

            success: false,

            message: "Failed updating contact"

        });


    }


};









/*
========================================
DELETE CONTACT
========================================
*/


export const deleteContact = async (req, res) => {


    try {


        await Contact.findByIdAndDelete(

            req.params.id

        );



        res.json({

            success: true,

            message: "Contact deleted"

        });



    }
    catch (error) {


        res.status(500).json({

            success: false,

            message: "Failed deleting contact"

        });


    }


};