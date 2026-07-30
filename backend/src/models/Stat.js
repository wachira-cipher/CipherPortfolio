import mongoose from "mongoose";


const statSchema = new mongoose.Schema(
    {

        value: {

            type: String,

            required: true,

            trim: true

        },


        label: {

            type: String,

            required: true,

            trim: true

        },


        icon: {

            type: String,

            default: "bi bi-check-circle"

        },


        description: {

            type: String,

            trim: true,

            default: ""

        },


        order: {

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
    "Stat",
    statSchema
);