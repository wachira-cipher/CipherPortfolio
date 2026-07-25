import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";



// Generate JWT

const generateToken = (id, role) => {

    return jwt.sign(

        {
            id,
            role
        },

        process.env.JWT_SECRET,

        {
            expiresIn: "30d"
        }

    );

};





// ===============================
// REGISTER USER
// ===============================

export const registerUser = async (req, res) => {


    try {


        const {
            name,
            email,
            password
        } = req.body;



        const existingUser =
            await User.findOne({
                email
            });



        if (existingUser) {

            return res.status(400).json({

                success: false,
                message: "User already exists"

            });

        }





        const userCount =
            await User.countDocuments();



        const role =
            userCount === 0
                ? "admin"
                : "user";






        const hashedPassword =
            await bcrypt.hash(
                password,
                10
            );





        const user =
            await User.create({

                name,
                email,
                password: hashedPassword,
                role

            });






        res.status(201).json({

            success: true,

            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            },


            token:
                generateToken(
                    user._id,
                    user.role
                )

        });





    } catch (error) {


        res.status(500).json({

            success: false,
            message: error.message

        });


    }


};









// ===============================
// LOGIN USER
// ===============================


export const loginUser = async (req, res) => {


    try {


        const {
            email,
            password
        } = req.body;





        const user =
            await User.findOne({
                email
            });





        if (!user) {


            return res.status(401).json({

                success: false,
                message: "Invalid email or password"

            });


        }






        const isMatch =
            await bcrypt.compare(

                password,

                user.password

            );






        if (!isMatch) {


            return res.status(401).json({

                success: false,
                message: "Invalid email or password"

            });


        }







        res.json({

            success: true,


            user: {

                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role

            },


            token:
                generateToken(
                    user._id,
                    user.role
                )


        });






    } catch (error) {


        res.status(500).json({

            success: false,
            message: error.message

        });


    }


};

// ===============================
// LOGOUT USER
// ===============================

export const logoutUser = async (req, res) => {


    try {


        const token =
            req.headers.authorization?.split(" ")[1];



        if (!token) {


            return res.status(400).json({

                success: false,
                message: "No token provided"

            });


        }




        // Store token blacklist here
        // Example: Redis / Database


        res.json({

            success: true,

            message: "Logged out successfully"

        });



    } catch (error) {


        res.status(500).json({

            success: false,
            message: error.message

        });


    }


};










// ===============================
// GET PROFILE
// ===============================

import Profile from "../models/Profile.js";


// GET LOGGED IN USER PROFILE
export const getProfile = async (req, res) => {

    try {


        const profile = await Profile.findOne();



        res.status(200).json({

            success: true,

            user: {
                _id: req.user._id,
                name: req.user.name,
                email: req.user.email,
                role: req.user.role,
                createdAt: req.user.createdAt,
                updatedAt: req.user.updatedAt
            },

            profile: profile || null

        });



    } catch (error) {


        res.status(500).json({

            success: false,

            message: error.message

        });


    }

};