import mongoose from "mongoose";
import { SERVICE_CATEGORIES } from "../utils/serviceCategories.js";


const serviceSchema = new mongoose.Schema(
    {
        title: {

            type: String,

            required: true,

            trim: true

        },


        slug: {

            type: String,

            unique: true,

            lowercase: true,

            trim: true

        },


        icon: {

            type: String,

            default: "bi bi-code-slash"

        },


        images: {

            type: [
                String
            ],

            default: []

        },


        shortDescription: {

            type: String,

            required: true,

            trim: true

        },


        description: {

            type: String,

            required: true

        },


        features: [

            {

                type: String

            }

        ],

        category: {

            type: String,

            enum: SERVICE_CATEGORIES,

            default: "Software Development"

        },



        technologies: [

            {

                type: String

            }

        ],


        startingPrice: {

            type: Number,

            default: 0

        },


        isFeatured: {

            type: Boolean,

            default: false

        },


        displayOrder: {

            type: Number,

            default: 0

        },


        status: {

            type: Boolean,

            default: true

        }


    },
    {
        timestamps: true
    }
);



export default mongoose.model(
    "Service",
    serviceSchema
);