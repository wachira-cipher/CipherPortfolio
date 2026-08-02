import mongoose from "mongoose";


const consultationSchema = new mongoose.Schema(

    {

        service: {

            type: mongoose.Schema.Types.ObjectId,

            ref: "Service",

            required: true

        },


        name: {

            type: String,

            required: true,

            trim: true

        },


        email: {

            type: String,

            required: true,

            trim: true

        },


        phone: {

            type: String,

            trim: true

        },


        message: {

            type: String,

            required: true

        },


        status: {

            type: String,

            enum: [

                "pending",

                "contacted",

                "completed"

            ],

            default: "pending"

        }


    },

    {

        timestamps: true

    }

);



export default mongoose.model(
    "Consultation",
    consultationSchema
);