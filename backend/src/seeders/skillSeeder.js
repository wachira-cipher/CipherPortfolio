import mongoose from "mongoose";
import Skill from "../models/Skill.js";




const skills = [

    {
        name: "React.js",
        percentage: 95,
        category: "Frontend Development",
        technology: "React",
        level: "Expert",
        certification: "",
        learningSource: "Official React Documentation",
        icon: "bi bi-code-slash",
        color: "#61DAFB",
        description:
            "Building scalable and responsive frontend applications using React, hooks, state management and reusable components.",
        yearsOfExperience: 4,
        displayOrder: 1,
        isFeatured: true
    },


    {
        name: "JavaScript",
        percentage: 95,
        category: "Programming Languages",
        technology: "JavaScript",
        level: "Expert",
        learningSource: "MDN Web Docs",
        icon: "bi bi-filetype-js",
        color: "#F7DF1E",
        description:
            "Advanced JavaScript development including ES6+, asynchronous programming and modern web APIs.",
        yearsOfExperience: 5,
        displayOrder: 2,
        isFeatured: true
    },


    {
        name: "Node.js",
        percentage: 90,
        category: "Backend Development",
        technology: "Node.js",
        level: "Advanced",
        learningSource: "Node.js Documentation",
        icon: "bi bi-server",
        color: "#339933",
        description:
            "Developing backend services, APIs and scalable server-side applications.",
        yearsOfExperience: 4,
        displayOrder: 3,
        isFeatured: true
    },


    {
        name: "Express.js",
        percentage: 90,
        category: "API Development",
        technology: "Express",
        level: "Advanced",
        learningSource: "Express Documentation",
        icon: "bi bi-diagram-3",
        color: "#000000",
        description:
            "Creating RESTful APIs, middleware systems and backend architectures.",
        yearsOfExperience: 4,
        displayOrder: 4,
        isFeatured: true
    },


    {
        name: "MongoDB",
        percentage: 85,
        category: "Database & Data Management",
        technology: "MongoDB",
        level: "Advanced",
        learningSource: "MongoDB University",
        icon: "bi bi-database",
        color: "#47A248",
        description:
            "Designing NoSQL databases, schemas and optimized database queries.",
        yearsOfExperience: 3,
        displayOrder: 5
    },


    {
        name: "Laravel",
        percentage: 80,
        category: "Frameworks",
        technology: "Laravel PHP",
        level: "Advanced",
        learningSource: "Laravel Documentation",
        icon: "bi bi-layers",
        color: "#FF2D20",
        description:
            "Building enterprise web applications using Laravel framework.",
        yearsOfExperience: 3,
        displayOrder: 6
    },


    {
        name: "Docker",
        percentage: 75,
        category: "DevOps & Cloud",
        technology: "Docker",
        level: "Intermediate",
        learningSource: "Docker Documentation",
        icon: "bi bi-box",
        color: "#2496ED",
        description:
            "Containerizing applications and managing development environments.",
        yearsOfExperience: 2,
        displayOrder: 7
    },


    {
        name: "Git & GitHub",
        percentage: 90,
        category: "Version Control",
        technology: "Git",
        level: "Advanced",
        learningSource: "Git Documentation",
        icon: "bi bi-github",
        color: "#181717",
        description:
            "Version control, branching strategies and collaborative development workflows.",
        yearsOfExperience: 5,
        displayOrder: 8
    },


    {
        name: "UI/UX Design",
        percentage: 75,
        category: "UI/UX & Design",
        technology: "Figma",
        level: "Intermediate",
        learningSource: "Figma Community",
        icon: "bi bi-palette",
        color: "#F24E1E",
        description:
            "Creating user-focused interfaces and modern digital experiences.",
        yearsOfExperience: 2,
        displayOrder: 9
    },


    {
        name: "Artificial Intelligence",
        percentage: 70,
        category: "Artificial Intelligence",
        technology: "AI Tools",
        level: "Intermediate",
        learningSource: "AI Research Resources",
        icon: "bi bi-cpu",
        color: "#6C63FF",
        description:
            "Integrating AI capabilities into modern software solutions.",
        yearsOfExperience: 2,
        displayOrder: 10
    }

];



export default async function seedSkills() {

    await Skill.deleteMany();

    await Skill.insertMany(skills);

    console.log("Skills seeded successfully");

}



seedSkills();