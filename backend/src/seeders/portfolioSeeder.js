import Portfolio from "../models/Portfolio.js";


const portfolios = [

    {
        title: "CipherPortfolio Platform",

        category: "Web Development",

        description:
            "A dynamic developer portfolio management platform allowing users to showcase projects, skills, services and professional information.",

        images: [
            "uploads/cipherportfolio.png"
        ],

        technologies: [
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "Bootstrap"
        ],

        client: "Personal Project",

        projectDate: "2026",

        website: "",

        github: "https://github.com",

        features: [
            "Portfolio Management",
            "Authentication System",
            "Admin Dashboard",
            "Dynamic Content Management"
        ],

        challenge:
            "Creating a flexible portfolio platform that allows content updates without modifying source code.",

        solution:
            "Built reusable React components connected with REST APIs and MongoDB powered backend services.",

        isFeatured: true

    },


    {
        title: "Boma Solutions Corporate Website",

        category: "Web Development",

        description:
            "Corporate website developed for a construction and real estate company showcasing services, projects and company information.",

        images: [
            "uploads/boma-solutions.png"
        ],

        technologies: [
            "React",
            "Bootstrap",
            "Node.js"
        ],

        client: "Boma Solutions",

        projectDate: "2026",

        website:
            "https://bomasolutions.com",

        github: "",

        features: [
            "Service Showcase",
            "Project Gallery",
            "Contact System",
            "Responsive Design"
        ],

        challenge:
            "Presenting complex business information while maintaining a simple user experience.",

        solution:
            "Implemented modular frontend components with responsive layouts.",

        isFeatured: true

    },


    {
        title: "E-Commerce Management System",

        category: "Web Development",

        description:
            "Complete online shopping platform with product management, ordering and customer interaction features.",

        images: [
            "uploads/ecommerce.png"
        ],

        technologies: [
            "React",
            "Node.js",
            "MongoDB",
            "Stripe"
        ],

        client: "Demo Client",

        projectDate: "2026",

        github:
            "https://github.com",

        features: [
            "Product Management",
            "Shopping Cart",
            "Payment Integration",
            "Order Tracking"
        ],

        challenge:
            "Managing complex shopping workflows.",

        solution:
            "Designed scalable APIs and reusable frontend components."

    },


    {
        title: "Task Management Application",

        category: "Web Development",

        description:
            "A productivity application for managing tasks, teams and project workflows.",

        images: [
            "uploads/tasks.png"
        ],

        technologies: [
            "React",
            "Express",
            "MongoDB"
        ],

        client: "Personal Project",

        projectDate: "2026",

        github:
            "https://github.com",

        features: [
            "User Authentication",
            "Task Assignment",
            "Dashboard Analytics"
        ],

        challenge:
            "Creating efficient productivity workflows.",

        solution:
            "Developed REST APIs with secure authentication."

    },


    {
        title: "Blog Management System",

        category: "Web Development",

        description:
            "Content management platform for publishing articles, categories and user-generated content.",

        images: [
            "uploads/blog.png"
        ],

        technologies: [
            "React",
            "Node.js",
            "MongoDB"
        ],

        client: "Personal Project",

        projectDate: "2026",

        github:
            "https://github.com",

        features: [
            "Post Management",
            "Categories",
            "Search",
            "Authentication"
        ],

        challenge:
            "Building a scalable content structure.",

        solution:
            "Created modular CMS architecture."

    },


    {
        title: "API Authentication Service",

        category: "API",

        description:
            "Secure authentication backend providing registration, login and authorization services.",

        images: [
            "uploads/api.png"
        ],

        technologies: [
            "Node.js",
            "Express",
            "MongoDB",
            "JWT"
        ],

        client: "Developer Tool",

        projectDate: "2026",

        features: [
            "JWT Authentication",
            "Role Management",
            "Protected Routes"
        ],

        challenge:
            "Creating secure user management.",

        solution:
            "Implemented token based authentication."

    },


    {
        title: "School Management Platform",

        category: "Web Development",

        description:
            "Digital platform for managing students, teachers and academic records.",

        images: [
            "uploads/school.png"
        ],

        technologies: [
            "Laravel",
            "MySQL",
            "Bootstrap"
        ],

        client: "Education Sector",

        projectDate: "2026",

        features: [
            "Student Management",
            "Reports",
            "User Roles"
        ],

        challenge:
            "Managing large amounts of academic data.",

        solution:
            "Built structured database architecture."

    },


    {
        title: "Cyber Security Dashboard",

        category: "DevOps",

        description:
            "Security monitoring dashboard for visualizing security events.",

        images: [
            "uploads/security.png"
        ],

        technologies: [
            "React",
            "Python",
            "Linux"
        ],

        client: "Security Research",

        projectDate: "2026",

        features: [
            "Security Reports",
            "Data Visualization",
            "Monitoring"
        ],

        challenge:
            "Presenting security information clearly.",

        solution:
            "Created interactive dashboards."

    },


    {
        title: "Cloud Deployment Platform",

        category: "DevOps",

        description:
            "Platform for managing application deployment environments.",

        images: [
            "uploads/cloud.png"
        ],

        technologies: [
            "Docker",
            "Linux",
            "AWS"
        ],

        client: "DevOps Project",

        projectDate: "2026",

        features: [
            "Container Management",
            "Deployment Automation",
            "Environment Setup"
        ],

        challenge:
            "Simplifying application deployment.",

        solution:
            "Implemented container based workflows."

    },


    {
        title: "AI Assistant Integration",

        category: "AI",

        description:
            "Application enhanced with AI capabilities for automation and productivity.",

        images: [
            "uploads/ai.png"
        ],

        technologies: [
            "React",
            "Node.js",
            "OpenAI API"
        ],

        client: "Research Project",

        projectDate: "2026",

        features: [
            "AI Chat",
            "Automation",
            "Smart Suggestions"
        ],

        challenge:
            "Integrating intelligent features into applications.",

        solution:
            "Connected AI services through secure APIs."

    }

];



export default async function seedPortfolios() {


    await Portfolio.deleteMany();


    await Portfolio.insertMany(
        portfolios
    );


    console.log(
        "Portfolio seeded successfully"
    );


}