import mongoose from "mongoose";

const testimonialSchema = new mongoose.Schema(
    {

        name: {
            type: String,
            required: true,
            trim: true
        },

        position: {
            type: String,
            trim: true,
            default: ""
        },

        company: {
            type: String,
            trim: true,
            default: ""
        },

        image: {
            type: String,
            default: ""
        },

        message: {
            type: String,
            required: true,
            trim: true
        },

        rating: {
            type: Number,
            min: 1,
            max: 5,
            default: 5
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
    "Testimonial",
    testimonialSchema
);