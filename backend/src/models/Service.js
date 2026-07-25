import mongoose from "mongoose";


const serviceSchema = new mongoose.Schema(
    {

        title: {
            type: String,
            required: true
        },


        icon: {
            type: String,
            default: "bi bi-code-slash"
        },


        shortDescription: {
            type: String,
            required: true
        },


        description: {
            type: String,
            required: true
        },


        image: {
            type: String,
            default: ""
        },


        features: [
            {
                type: String
            }
        ],


        category: {
            type: String,
            default: "Development"
        },


        isActive: {
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