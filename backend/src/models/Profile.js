import mongoose from "mongoose";


const profileSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },

        title: {
            type: String,
            required: true,
        },

        bio: {
            type: String,
            required: true,
        },

        image: {
            type: String,
            default: "",
        },

        location: {
            type: String,
            default: "",
        },

        email: {
            type: String,
            lowercase: true,
        },

        phone: {
            type: String,
        },


        socialLinks: {

            github: {
                type: String,
                default: "",
            },

            linkedin: {
                type: String,
                default: "",
            },

            twitter: {
                type: String,
                default: "",
            },

            website: {
                type: String,
                default: "",
            }

        }

    },
    {
        timestamps: true
    }
);


export default mongoose.model(
    "Profile",
    profileSchema
);