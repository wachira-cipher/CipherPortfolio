import Testimonial from "../models/Testimonial.js";


const testimonials = [

    {
        name: "Sarah Mwangi",
        position: "Product Manager",
        company: "Boma Solutions",
        image: "uploads/testimonials/sarah-mwangi.jpg",
        message:
            "Jonathan delivered an excellent corporate platform for our business. His attention to detail, clean architecture, and ability to understand business requirements made the entire process smooth.",
        rating: 5,
        isFeatured: true,
        status: true
    },


    {
        name: "David Kimani",
        position: "CEO",
        company: "TechBridge Africa",
        image: "uploads/testimonials/david-kimani.jpg",
        message:
            "Working with Jonathan was a great experience. He built a scalable web application that improved our workflow and gave our customers a better digital experience.",
        rating: 5,
        isFeatured: true,
        status: true
    },


    {
        name: "Emily Carter",
        position: "Marketing Director",
        company: "DigitalCraft Solutions",
        image: "uploads/testimonials/emily-carter.jpg",
        message:
            "The website exceeded our expectations. The design quality, responsiveness, and performance optimization were outstanding.",
        rating: 5,
        isFeatured: false,
        status: true
    },


    {
        name: "Brian Otieno",
        position: "Founder",
        company: "Startup Hub Kenya",
        image: "uploads/testimonials/brian-otieno.jpg",
        message:
            "Jonathan helped transform our idea into a functional product. His full-stack development skills and problem-solving approach were impressive.",
        rating: 5,
        isFeatured: true,
        status: true
    },


    {
        name: "Grace Wanjiku",
        position: "Operations Manager",
        company: "Nexa Technologies",
        image: "uploads/testimonials/grace-wanjiku.jpg",
        message:
            "The custom dashboard system Jonathan created simplified our operations and gave our team better control over our data.",
        rating: 4,
        isFeatured: false,
        status: true
    },


    {
        name: "Michael Johnson",
        position: "CTO",
        company: "CloudEdge Systems",
        image: "uploads/testimonials/michael-johnson.jpg",
        message:
            "A highly skilled developer who understands both frontend experience and backend engineering. The project was delivered professionally.",
        rating: 5,
        isFeatured: true,
        status: true
    },


    {
        name: "Lucy Njeri",
        position: "Business Owner",
        company: "Luxe Interiors",
        image: "uploads/testimonials/lucy-njeri.jpg",
        message:
            "Our new website looks professional and works perfectly across devices. The communication throughout the project was excellent.",
        rating: 5,
        isFeatured: false,
        status: true
    },


    {
        name: "Kevin Maina",
        position: "Software Engineer",
        company: "OpenSource Kenya",
        image: "uploads/testimonials/kevin-maina.jpg",
        message:
            "Jonathan demonstrates strong software engineering principles, from database design to API development and deployment.",
        rating: 4,
        isFeatured: false,
        status: true
    },


    {
        name: "Aisha Hassan",
        position: "Digital Consultant",
        company: "GrowthLabs",
        image: "uploads/testimonials/aisha-hassan.jpg",
        message:
            "The solution delivered was fast, reliable, and aligned perfectly with our goals. I highly recommend his development services.",
        rating: 5,
        isFeatured: true,
        status: true
    },


    {
        name: "Peter Kamau",
        position: "Project Coordinator",
        company: "Innovate Africa",
        image: "uploads/testimonials/peter-kamau.jpg",
        message:
            "Professional, creative, and dependable. Jonathan delivered a quality application while maintaining excellent communication.",
        rating: 5,
        isFeatured: false,
        status: true
    }

];



const seedTestimonials = async () => {

    try {

        await Testimonial.deleteMany();

        await Testimonial.insertMany(testimonials);


        console.log("✅ Testimonials seeded successfully");


    } catch (error) {

        console.error(
            "❌ Testimonial seeding failed:",
            error.message
        );

    }

};


export default seedTestimonials;