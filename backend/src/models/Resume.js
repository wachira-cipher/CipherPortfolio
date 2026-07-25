import mongoose from "mongoose";


const resumeSchema = new mongoose.Schema(
    {


        education: [

            {

                title: {
                    type: String,
                    required: true
                },


                period: {
                    type: String
                },


                institution: {
                    type: String
                },


                description: {
                    type: String
                }

            }

        ],



        experience: [

            {

                title: {
                    type: String,
                    required: true
                },


                period: {
                    type: String
                },


                company: {
                    type: String
                },


                responsibilities: [
                    {
                        type: String
                    }
                ]

            }

        ]


    },
    {
        timestamps: true
    }
);



export default mongoose.model(
    "Resume",
    resumeSchema
);