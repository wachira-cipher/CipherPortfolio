import Stat from "../models/Stat.js";


const stats = [

    {
        value: "50+",
        label: "Projects Completed",
        icon: "bi bi-code-slash",
        description: "Successfully delivered software projects for different clients.",
        order: 1
    },


    {
        value: "5+",
        label: "Years Experience",
        icon: "bi bi-calendar-check",
        description: "Years of experience building modern software solutions.",
        order: 2
    },


    {
        value: "30+",
        label: "Happy Clients",
        icon: "bi bi-people",
        description: "Satisfied clients served through quality software delivery.",
        order: 3
    },


    {
        value: "20+",
        label: "Technologies Used",
        icon: "bi bi-stack",
        description: "Experience working with modern programming technologies and tools.",
        order: 4
    },


    {
        value: "99%",
        label: "Client Satisfaction",
        icon: "bi bi-emoji-smile",
        description: "Committed to delivering reliable and user-focused solutions.",
        order: 5
    },


    {
        value: "24/7",
        label: "Support Availability",
        icon: "bi bi-headset",
        description: "Providing continuous technical support and maintenance.",
        order: 6
    },


    {
        value: "15+",
        label: "Open Source Contributions",
        icon: "bi bi-github",
        description: "Contributing to open source projects and developer communities.",
        order: 7
    },


    {
        value: "10+",
        label: "Team Collaborations",
        icon: "bi bi-people-fill",
        description: "Collaborated with developers, designers and business teams.",
        order: 8
    },


    {
        value: "100K+",
        label: "Lines Of Code",
        icon: "bi bi-terminal",
        description: "Writing clean, maintainable and scalable code.",
        order: 9
    },


    {
        value: "95%",
        label: "Project Success Rate",
        icon: "bi bi-check-circle",
        description: "Delivering projects successfully with quality standards.",
        order: 10
    }

];



export default async function seedStats() {

    await Stat.deleteMany();


    await Stat.insertMany(stats);


    console.log(
        "Stats seeded successfully"
    );

}