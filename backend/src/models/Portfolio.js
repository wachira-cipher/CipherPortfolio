import mongoose from "mongoose";


const portfolioSchema = new mongoose.Schema(

    {

        title: {
            type: String,
            required: true,
            trim: true
        },


        category: {
            type: String,
            enum: [
                "Web Development",
                "Mobile Development",
                "Backend",
                "API",
                "UI/UX",
                "DevOps",
                "AI"
            ],
            default: "Web Development"
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


        github: {
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
    "Portfolio",
    portfolioSchema
);