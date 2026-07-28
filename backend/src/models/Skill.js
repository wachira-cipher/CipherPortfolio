import mongoose from "mongoose";

const skillSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            unique: true
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
                "Frontend Development",
                "Backend Development",
                "Full Stack Development",
                "Mobile Development",
                "Desktop Development",
                "Database & Data Management",
                "Cloud Computing",
                "DevOps & Cloud",
                "Cybersecurity",
                "Networking",
                "Systems Administration",
                "Programming Languages",
                "Frameworks",
                "Libraries",
                "API Development",
                "Microservices",
                "Software Architecture",
                "UI/UX & Design",
                "Graphic Design",
                "Artificial Intelligence",
                "Machine Learning",
                "Data Science",
                "Data Analytics",
                "Business Intelligence",
                "Blockchain",
                "Internet of Things (IoT)",
                "Embedded Systems",
                "Automation Systems",
                "Testing & QA",
                "Version Control",
                "Project Management",
                "ERP Systems",
                "CRM Solutions",
                "Content Management Systems",
                "E-Commerce Solutions",
                "IT Support",
                "Virtualization",
                "Research & Innovation",
                "Other"
            ],
            default: "Other"
        },
        technology: {
            type: String,
            default: ""
        },

        level: {
            type: String,
            enum: [
                "Beginner",
                "Intermediate",
                "Advanced",
                "Expert"
            ],
            default: "Beginner"
        },


        certificateUrl: {
            type: String,
            default: ""
        },


        certification: {
            type: String,
            default: ""
        },


        learningSource: {
            type: String,
            default: ""
        },

        icon: {
            type: String,
            default: ""
        },

        color: {
            type: String,
            default: "#556ee6"
        },

        description: {
            type: String,
            trim: true,
            default: ""
        },

        yearsOfExperience: {
            type: Number,
            default: 0,
            min: 0
        },

        displayOrder: {
            type: Number,
            default: 0
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

export default mongoose.model("Skill", skillSchema);