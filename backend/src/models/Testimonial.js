import mongoose from "mongoose";


const testimonialSchema = new mongoose.Schema(
    {

        name: {
            type: String,
            required: true
        },


        position: {
            type: String
        },


        company: {
            type: String
        },


        image: {
            type: String,
            default: ""
        },


        message: {
            type: String,
            required: true
        },


        rating: {
            type: Number,
            min: 1,
            max: 5,
            default: 5
        }


    },
    {
        timestamps: true
    }
);



export default mongoose.model(
    "Testimonial",
    testimonialSchema
);