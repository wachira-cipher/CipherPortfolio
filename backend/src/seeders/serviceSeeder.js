import Service from "../models/Service.js";


const services = [

    {
        title: "Web Development",
        slug: "web-development",
        shortDescription: "Modern responsive websites and web applications.",
        description:
            "Building modern, scalable and responsive websites using current frontend and backend technologies.",
        icon: "bi-code-slash",
        features: [
            "Responsive Web Design",
            "SEO Optimization",
            "Performance Optimization"
        ],
        category: "Web Development",
        technologies: [
            "React",
            "Node.js",
            "Express",
            "MongoDB"
        ],
        startingPrice: 500,
        isFeatured: true,
        displayOrder: 1
    },


    {
        title: "Mobile Application Development",
        slug: "mobile-application-development",
        shortDescription: "Cross-platform mobile applications.",
        description:
            "Developing smooth and scalable mobile applications using modern mobile frameworks.",
        icon: "bi-phone",
        features: [
            "Mobile UI Development",
            "API Integration",
            "Performance Optimization"
        ],
        category: "Mobile Development",
        technologies: [
            "React Native",
            "Flutter"
        ],
        startingPrice: 1000,
        isFeatured: true,
        displayOrder: 2
    },


    {
        title: "Backend API Development",
        slug: "backend-api-development",
        shortDescription: "Secure and scalable backend APIs.",
        description:
            "Creating powerful backend systems, REST APIs and server-side applications.",
        icon: "bi-server",
        features: [
            "REST API Development",
            "Authentication Systems",
            "Database Integration"
        ],
        category: "API Development",
        technologies: [
            "Node.js",
            "Express",
            "MongoDB"
        ],
        startingPrice: 700,
        isFeatured: true,
        displayOrder: 3
    },


    {
        title: "UI/UX Design",
        slug: "ui-ux-design",
        shortDescription: "Beautiful user-focused interface designs.",
        description:
            "Designing intuitive digital experiences focused on usability and user engagement.",
        icon: "bi-palette",
        features: [
            "Wireframes",
            "Prototype Design",
            "Design Systems"
        ],
        category: "UI/UX Design",
        technologies: [
            "Figma",
            "Adobe XD"
        ],
        startingPrice: 400,
        displayOrder: 4
    },


    {
        title: "Database Solutions",
        slug: "database-solutions",
        shortDescription: "Efficient database architecture and optimization.",
        description:
            "Designing optimized database structures, schemas and queries for scalable applications.",
        icon: "bi-database",
        features: [
            "Database Architecture",
            "Schema Design",
            "Query Optimization"
        ],
        category: "Database Solutions",
        technologies: [
            "MongoDB",
            "MySQL",
            "PostgreSQL"
        ],
        startingPrice: 600,
        displayOrder: 5
    },


    {
        title: "Cloud Computing Solutions",
        slug: "cloud-computing-solutions",
        shortDescription: "Cloud deployment and infrastructure services.",
        description:
            "Deploying and managing reliable applications using modern cloud platforms.",
        icon: "bi-cloud",
        features: [
            "Cloud Deployment",
            "Server Configuration",
            "Application Scaling"
        ],
        category: "Cloud Computing",
        technologies: [
            "AWS",
            "Docker",
            "Linux"
        ],
        startingPrice: 900,
        displayOrder: 6
    },


    {
        title: "DevOps Automation",
        slug: "devops-automation",
        shortDescription: "Automated software delivery workflows.",
        description:
            "Implementing CI/CD pipelines, automation and deployment workflows.",
        icon: "bi-gear",
        features: [
            "CI/CD Pipelines",
            "Deployment Automation",
            "Monitoring"
        ],
        category: "DevOps",
        technologies: [
            "Docker",
            "GitHub Actions",
            "Linux"
        ],
        startingPrice: 1000,
        displayOrder: 7
    },


    {
        title: "Cybersecurity Services",
        slug: "cybersecurity-services",
        shortDescription: "Application and infrastructure security solutions.",
        description:
            "Helping secure applications through security testing and best practices.",
        icon: "bi-shield-check",
        features: [
            "Security Testing",
            "Vulnerability Assessment",
            "Secure Coding"
        ],
        category: "Cybersecurity",
        technologies: [
            "Kali Linux",
            "Security Tools"
        ],
        startingPrice: 800,
        displayOrder: 8
    },


    {
        title: "E-Commerce Solutions",
        slug: "ecommerce-solutions",
        shortDescription: "Complete online shopping platforms.",
        description:
            "Developing online stores with payments, inventory and order management.",
        icon: "bi-cart",
        features: [
            "Shopping Cart",
            "Online Payments",
            "Order Management"
        ],
        category: "E-Commerce Solutions",
        technologies: [
            "React",
            "Node.js",
            "MongoDB"
        ],
        startingPrice: 1500,
        isFeatured: true,
        displayOrder: 9
    },


    {
        title: "Artificial Intelligence Integration",
        slug: "artificial-intelligence-integration",
        shortDescription: "AI-powered software solutions.",
        description:
            "Integrating artificial intelligence capabilities into modern applications.",
        icon: "bi-cpu",
        features: [
            "AI API Integration",
            "Automation",
            "Smart Features"
        ],
        category: "Artificial Intelligence",
        technologies: [
            "OpenAI",
            "Machine Learning"
        ],
        startingPrice: 1200,
        displayOrder: 10
    }

];



export default async function seedServices() {

    await Service.deleteMany();


    await Service.insertMany(
        services
    );


    console.log(
        "Services seeded successfully"
    );

}