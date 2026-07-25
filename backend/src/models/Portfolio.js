import mongoose from "mongoose";


const portfolioSchema = new mongoose.Schema(
    {

        title: {
            type: String,
            required: true
        },


        category: {
            type: String,
            enum: [
                "Strategy",
                "Finance",
                "Operations",
                "Technology"
            ],
            default: "Technology"
        },


        description: {
            type: String,
            required: true
        },


        images: [
            {
                type: String
            }
        ],


        technologies: [
            {
                type: String
            }
        ],


        client: {
            type: String,
            default: ""
        },


        projectDate: {
            type: String,
            default: ""
        },


        website: {
            type: String,
            default: ""
        },


        features: [
            {
                type: String
            }
        ],


        challenge: {
            type: String,
            default: ""
        },


        solution: {
            type: String,
            default: ""
        },


        isFeatured: {
            type: Boolean,
            default: false
        }


    },
    {
        timestamps: true
    }
);



export default mongoose.model(
    "Portfolio",
    portfolioSchema
);