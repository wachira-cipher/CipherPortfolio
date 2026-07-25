import mongoose from "mongoose";


const skillSchema = new mongoose.Schema(
    {

        name: {
            type: String,
            required: true,
            trim: true
        },


        percentage: {
            type: Number,
            required: true,
            min: 0,
            max: 100
        },


        category: {
            type: String,
            enum: [
                "Frontend",
                "Backend",
                "Database",
                "DevOps",
                "Design",
                "Other"
            ],
            default: "Other"
        },


        icon: {
            type: String,
            default: ""
        }


    },
    {
        timestamps: true
    }
);



export default mongoose.model(
    "Skill",
    skillSchema
);